import assert from "node:assert/strict";
import { test } from "node:test";
import { createWeatherHandler } from "../netlify/functions/weather.ts";

const request = () => new Request("https://example.test/.netlify/functions/weather");
const instant = Date.parse("2026-10-30T14:00:00Z");
function forecast(time = instant, symbol = "lightrain", wind = 5) {
  return new Response(JSON.stringify({ properties: { timeseries: [{
    time: new Date(time).toISOString(),
    data: {
      instant: { details: { air_temperature: 17.4, wind_speed: wind } },
      next_1_hours: { summary: { symbol_code: symbol } },
    },
  }] } }), { headers: { "Content-Type": "application/json" } });
}

test("returns both real forecast values, knots, correct coordinates and identifying User-Agent", async () => {
  const calls: Array<{ url: URL; init: RequestInit | undefined }> = [];
  const handler = createWeatherHandler({
    now: () => instant,
    fetcher: async (input, init) => {
      calls.push({ url: new URL(String(input)), init });
      return forecast();
    },
  });
  const response = await handler(request());
  const data = await response.json();
  assert.equal(response.status, 200);
  assert.deepEqual(data.cities.map((city: { name: string }) => city.name), ["Lagos", "London"]);
  assert.equal(data.cities[0].temperatureC, 17.4);
  assert.ok(Math.abs(data.cities[0].windKnots - 9.71922245) < 0.0001);
  assert.equal(data.cities[0].condition, "Rain");
  assert.equal(data.cities[0].icon, "rain");
  assert.match(response.headers.get("Cache-Control")!, /max-age=1800/);
  assert.deepEqual(calls.map(({ url }) => [url.searchParams.get("lat"), url.searchParams.get("lon")]), [["37.1", "-8.67"], ["51.51", "-0.13"]]);
  assert.equal(new Headers(calls[0].init?.headers).get("User-Agent"), "Fly365Algarve/1.0 fly365algarve@gmail.com");
});

test("coalesces concurrent requests and never extends cached data past its thirty-minute lifetime", async () => {
  let time = instant;
  let count = 0;
  const handler = createWeatherHandler({ now: () => time, fetcher: async () => { count++; return forecast(time); } });
  const responses = await Promise.all([handler(request()), handler(request()), handler(request())]);
  assert.ok(responses.every((response) => response.status === 200));
  assert.equal(count, 2);
  time += 15 * 60 * 1000;
  assert.match((await handler(request())).headers.get("Cache-Control")!, /max-age=900/);
  assert.equal(count, 2);
  time += 15 * 60 * 1000 + 1;
  assert.equal((await handler(request())).status, 200);
  assert.equal(count, 4);
});

test("missing, stale and unknown data return no numbers and are not cached as successful weather", async () => {
  for (const body of [
    () => new Response("{}"),
    () => forecast(instant - 4 * 60 * 60 * 1000),
    () => forecast(instant, "unknown"),
    () => forecast(instant, "clearsky_day", -1),
  ]) {
    const handler = createWeatherHandler({ now: () => instant, fetcher: async () => body() });
    const response = await handler(request());
    assert.equal(response.status, 503);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert.deepEqual(await response.json(), { error: "Weather unavailable" });
  }
});

test("provider failure is explicit and short backoff prevents repeated upstream failures", async () => {
  let calls = 0;
  const handler = createWeatherHandler({ now: () => instant, fetcher: async () => { calls++; return new Response(null, { status: 503 }); } });
  assert.equal((await handler(request())).status, 503);
  assert.equal((await handler(request())).status, 503);
  assert.equal(calls, 2);
});

test("an unresponsive provider is cut off before the client's three-second deadline", async () => {
  const handler = createWeatherHandler({ fetcher: async () => new Promise<Response>(() => {}) });
  const start = performance.now();
  const response = await handler(request());
  assert.equal(response.status, 503);
  assert.ok(performance.now() - start < 3000);
});

test("rejects unsupported methods without contacting MET Norway", async () => {
  const handler = createWeatherHandler({ fetcher: async () => { throw new Error("Must not fetch"); } });
  const response = await handler(new Request(request(), { method: "POST" }));
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "GET, HEAD");
});

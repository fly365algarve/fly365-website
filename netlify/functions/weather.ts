const CITIES = [
  { name: "Lagos", latitude: 37.10, longitude: -8.67 },
  { name: "London", latitude: 51.51, longitude: -0.13 },
] as const;
const CACHE_MS = 30 * 60 * 1000;
const USER_AGENT = "Fly365Algarve/1.0 fly365algarve@gmail.com";

type Icon = "sun" | "cloud" | "rain" | "snow" | "fog" | "thunder";
type Forecast = {
  properties?: {
    timeseries?: Array<{
      time: string;
      data: {
        instant?: { details?: { air_temperature?: number; wind_speed?: number } };
        next_1_hours?: { summary?: { symbol_code?: string } };
        next_6_hours?: { summary?: { symbol_code?: string } };
        next_12_hours?: { summary?: { symbol_code?: string } };
      };
    }>;
  };
};

function conditionFor(symbol: string): { condition: string; icon: Icon } {
  if (symbol.includes("thunder")) return { condition: "Thunder", icon: "thunder" };
  if (symbol.includes("sleet")) return { condition: "Sleet", icon: "rain" };
  if (symbol.includes("snow")) return { condition: "Snow", icon: "snow" };
  if (symbol.includes("rain")) return { condition: "Rain", icon: "rain" };
  if (symbol.includes("fog")) return { condition: "Fog", icon: "fog" };
  if (symbol.startsWith("partlycloudy") || symbol.startsWith("fair")) return { condition: "Fair", icon: "sun" };
  if (symbol.startsWith("cloudy")) return { condition: "Cloudy", icon: "cloud" };
  if (symbol.startsWith("clearsky")) return { condition: "Clear", icon: "sun" };
  throw new Error("Unrecognised weather condition");
}

// One shared handler for Netlify and Vite. No browser identity or location is
// forwarded: upstream requests use only the two fixed city coordinates.
export function createWeatherHandler({ fetcher = fetch, now = Date.now } = {}) {
  let cache: { expires: number; body: string } | undefined;
  let inFlight: Promise<string> | undefined;
  let retryAfter = 0;

  async function refresh(): Promise<string> {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const forecasts = CITIES.map(async (city) => {
        const url = new URL("https://api.met.no/weatherapi/locationforecast/2.0/compact");
        url.searchParams.set("lat", String(city.latitude));
        url.searchParams.set("lon", String(city.longitude));
        const response = await fetcher(url, {
          headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Weather provider unavailable");
        const forecast = await response.json() as Forecast;
        const current = forecast.properties?.timeseries
          ?.filter((point) => Math.abs(Date.parse(point.time) - now()) <= 90 * 60 * 1000)
          .sort((a, b) => Math.abs(Date.parse(a.time) - now()) - Math.abs(Date.parse(b.time) - now()))[0];
        const details = current?.data.instant?.details;
        const temperatureC = details?.air_temperature;
        const wind = details?.wind_speed;
        const symbol = current?.data.next_1_hours?.summary?.symbol_code
          ?? current?.data.next_6_hours?.summary?.symbol_code
          ?? current?.data.next_12_hours?.summary?.symbol_code;
        if (typeof temperatureC !== "number" || !Number.isFinite(temperatureC)
          || typeof wind !== "number" || !Number.isFinite(wind) || wind < 0 || !symbol) {
          throw new Error("Incomplete weather data");
        }
        return { name: city.name, temperatureC, windKnots: wind * 1.94384449, ...conditionFor(symbol) };
      });
      const cities = await Promise.race([
        Promise.all(forecasts),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => {
            controller.abort();
            reject(new Error("Weather timed out"));
          }, 2500);
        }),
      ]);
      const body = JSON.stringify({ updatedAt: new Date(now()).toISOString(), cities });
      cache = { body, expires: now() + CACHE_MS };
      return body;
    } finally {
      clearTimeout(timer);
      controller.abort();
    }
  }

  return async function weather(request: Request): Promise<Response> {
    const headers = { "Content-Type": "application/json; charset=utf-8" };
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405, headers: { ...headers, Allow: "GET, HEAD", "Cache-Control": "no-store" },
      });
    }
    try {
      let body: string;
      if (cache && cache.expires > now()) {
        body = cache.body;
      } else {
        if (retryAfter > now()) throw new Error("Weather temporarily unavailable");
        inFlight ??= refresh();
        try {
          body = await inFlight;
        } finally {
          inFlight = undefined;
        }
      }
      const remainingSeconds = Math.min(1800, Math.max(0, Math.ceil(((cache?.expires ?? now()) - now()) / 1000)));
      return new Response(request.method === "HEAD" ? null : body, {
        headers: { ...headers, "Cache-Control": `public, max-age=${remainingSeconds}, s-maxage=${remainingSeconds}` },
      });
    } catch {
      retryAfter = now() + 30_000;
      return new Response(request.method === "HEAD" ? null : JSON.stringify({ error: "Weather unavailable" }), {
        status: 503, headers: { ...headers, "Cache-Control": "no-store" },
      });
    }
  };
}

export default createWeatherHandler();

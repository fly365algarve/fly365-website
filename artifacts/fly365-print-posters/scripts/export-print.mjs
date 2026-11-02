// Render the standalone files at their actual A5 print size.
import { chromium } from "@playwright/test";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.resolve(root, "../../generated-artifacts/fly365-posters");
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: "/repl/tools/bin/chromium", headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 560, height: 794 }, deviceScaleFactor: 2 });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
const waitForAssets = async () => {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
  });
};
const checks = [];
for (const variant of ["fixed", "flex"]) {
  for (const side of ["front", "back"]) {
    const name = `${variant}-${side}`;
    await page.goto(pathToFileURL(path.join(root, `public/posters/${name}.html`)).href);
    await page.emulateMedia({ media: "print" });
    await waitForAssets();
    const result = await page.evaluate(() => {
      const sheet = document.querySelector(".sheet");
      const bounds = sheet.getBoundingClientRect();
      const footerTop = sheet.querySelector(".base").getBoundingClientRect().top;
      const overflows = [...sheet.querySelectorAll("*")].filter(el => {
        const r = el.getBoundingClientRect();
        const behindFooter = el.closest(".lower") && r.bottom > footerTop + 1;
        return r.bottom > bounds.bottom + 1 || r.right > bounds.right + 1 || behindFooter;
      }).map(el => `${el.tagName}.${el.className?.baseVal ?? el.className}`);
      return { width: bounds.width, height: bounds.height, overflows, fonts: document.fonts.status };
    });
    checks.push({ name, ...result });
    await page.screenshot({ path: path.join(out, `${name}.png`), fullPage: true });
    await page.pdf({ path: path.join(out, `${name}.pdf`), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
  }
  // A two-page PDF: front followed by back, for double-sided printing.
  await page.goto(pathToFileURL(path.join(root, `public/posters/${variant}-front.html`)).href);
  const back = await readFile(path.join(root, `public/posters/${variant}-back.html`), "utf8");
  await page.evaluate(html => {
    const parsed = new DOMParser().parseFromString(html, "text/html");
    document.body.append(parsed.querySelector("main"));
  }, back);
  await page.addStyleTag({ content: ".sheet { break-after: page; } .sheet:last-of-type { break-after: auto; }" });
  await waitForAssets();
  await page.pdf({ path: path.join(out, `fly365-${variant}-wing-A5.pdf`), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
}
await browser.close();
await writeFile(path.join(out, "layout-checks.json"), JSON.stringify({ checks, errors }, null, 2));
console.log(JSON.stringify({ checks, errors }, null, 2));
if (errors.length || checks.some(check => check.overflows.length)) process.exitCode = 1;

// Builds the four standalone A5 poster HTML files with inline SVG QR codes.
// Run: node scripts/build-posters.mjs  (from artifacts/fly365-print-posters)
import QRCode from "qrcode";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.resolve(root, "../../design/posters");

const WA = "https://wa.me/351936445501?text=Hi%20Fly365!%20I%27d%20like%20to%20book%20a%20flight";
const SITE = "https://fly365algarve.co.uk";

const qr = (url) =>
  QRCode.toString(url, {
    type: "svg",
    margin: 4,
    errorCorrectionLevel: "M",
    color: { dark: "#0B2A3C", light: "#F7F3EC" },
  }).then((s) => s.replace(/width="\d+" height="\d+" ?/, "").replace("<svg ", '<svg class="qr-svg" role="img" '));

const credit = {
  museler: 'Photo: Arne Müseler / arne-mueseler.com · Wikimedia Commons · CC BY-SA 3.0 DE · cropped, resized<br>creativecommons.org/licenses/by-sa/3.0/de/',
  oliveira: "Photo: Vitor Oliveira · Wikimedia Commons · CC BY-SA 2.0 · cropped, resized",
  bextrel: 'Photo: Bextrel · Wikimedia Commons · CC BY-SA 4.0 · cropped, resized<br>creativecommons.org/licenses/by-sa/4.0/',
};

const prices = [
  ["20", "60"],
  ["30", "85"],
  ["45", "140"],
  ["60", "185"],
];

const head = (title) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · Fly365 A5 poster</title>
<link rel="stylesheet" href="poster.css">
</head>
<body>`;

const foot = `<script>if(/[?&]print=1/.test(location.search)){addEventListener("load",async function(){await document.fonts.ready;await Promise.all([...document.images].map(image=>image.decode()));print()})}</script>
</body>
</html>
`;

const priceTable = () => `
      <p class="label">Trial flights</p>
      <table class="prices">
        ${prices.map(([m, e]) => `<tr><th>${m}<span>min</span></th><td>€${e}</td></tr>`).join("\n        ")}
      </table>
      <p class="plain strong">No experience needed.</p>
      <p class="plain">Take the controls or just enjoy the view.</p>`;

function front({ title, variant, photo, photoAlt, line, courses, waQr }) {
  return `${head(title)}
<main class="sheet front ${variant}">
  <header class="band">
    <img class="logo" src="img/logo.png" alt="Fly365">
    <p class="kicker">5 minutes from Lagos town</p>
    <h1>Fly over<br>the grottos</h1>
    <p class="sub">You've seen them from a boat. Now see them from the sky.</p>
  </header>
  <figure class="hero"><img src="img/${photo}" alt="${photoAlt}"></figure>
  <div class="strip"><span>${line}</span><span class="strip-r">${courses}</span></div>
  <section class="lower">
    <div class="col-prices">${priceTable()}
    </div>
    <div class="col-cta">
      <div class="qr">${waQr}</div>
      <p class="cta">Scan to book<br>on WhatsApp</p>
      <p class="call">or call Zeth <b>+351 936 445 501</b></p>
    </div>
  </section>
  <footer class="base">
    <span class="offer">10% off – code <b>FRN10</b></span>
    <span class="url">fly365algarve.co.uk</span>
  </footer>
</main>
${foot}`;
}

function back({ title, variant, second, secondAlt, secondNote, courses, siteQr }) {
  return `${head(title)}
<main class="sheet back ${variant}">
  <header class="band band-back">
    <img class="logo" src="img/logo.png" alt="Fly365">
    <p class="kicker">Find us</p>
    <h1 class="h-back">5 minutes' drive<br>from Lagos Marina</h1>
    <p class="sub">Aeródromo Municipal de Lagos</p>
  </header>
  <figure class="photo-a">
    <img src="img/ponta-da-piedade-algarve-aerial-1600.webp" alt="Ponta da Piedade grottos from the air">
    <figcaption><span class="tag">The grottos from above</span><span class="credit">${credit.museler}</span></figcaption>
  </figure>
  <div class="pair">
    <figure class="photo-b">
      <img src="img/${second}" alt="${secondAlt}">
      <figcaption><span class="credit">${secondNote}</span></figcaption>
    </figure>
    <figure class="photo-c">
      <img src="img/lagos-aerodrome-runway-aerial-1024.webp" alt="Lagos aerodrome runway from the air">
      <figcaption><span class="credit">Lagos aerodrome · ${credit.bextrel}</span></figcaption>
    </figure>
  </div>
  <section class="lower lower-back">
    <div class="col-contacts">
      <p class="label">Contact</p>
      <dl class="contacts">
        <div><dt>Zeth</dt><dd>+351 936 445 501</dd></div>
        <div><dt>Fern</dt><dd>+44 7840 165 426</dd></div>
        <div><dt>Email</dt><dd>fly365algarve@gmail.com</dd></div>
      </dl>
      <p class="plain strong">${courses}</p>
    </div>
    <div class="col-cta">
      <div class="qr">${siteQr}</div>
      <p class="cta">Routes &amp; prices</p>
    </div>
  </section>
  <footer class="base">
    <span class="offer">10% off – code <b>FRN10</b></span>
    <span class="url">fly365algarve.co.uk</span>
  </footer>
</main>
${foot}`;
}

const waQr = await qr(WA);
const siteQr = await qr(SITE);

const files = {
  "fixed-front.html": front({
    title: "Fixed wing · front",
    variant: "v-fixed",
    photo: "ikarus-c42-fly365.jpg",
    photoAlt: "Fly365 Ikarus C42 G-CISG in flight",
    line: "Side by side in the Ikarus C42",
    courses: "G-CISG",
    waQr,
  }),
  "flex-front.html": front({
    title: "Flexwing · front",
    variant: "v-flex",
    photo: "fly365-algarve-lagos-operation-cropped.png",
    photoAlt: "Fly365 flexwing cockpit view over the orange cliffs",
    line: "Open-air flexwing flying",
    courses: "Fly365 flexwing",
    waQr,
  }),
  "fixed-back.html": back({
    title: "Fixed wing · back",
    variant: "v-fixed",
    second: "ikarus-c42-fly365.jpg",
    secondAlt: "Fly365 Ikarus C42 G-CISG in flight",
    secondNote: "Our Ikarus C42 · G-CISG",
    courses: "Want to learn to fly? Ask about our C42 courses.",
    siteQr,
  }),
  "flex-back.html": back({
    title: "Flexwing · back",
    variant: "v-flex",
    second: "fly365-flexwing-aircraft.png",
    secondAlt: "Fly365 flexwing microlight",
    secondNote: "Our flexwing",
    courses: "Want to learn to fly? Ask about our flexwing courses.",
    siteQr,
  }),
};

for (const [name, html] of Object.entries(files)) {
  await writeFile(path.join(out, name), html, "utf8");
  console.log("wrote", name);
}

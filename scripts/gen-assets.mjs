import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "src", "assets");
mkdirSync(outDir, { recursive: true });

function windowGrid(x, y, w, h, cols, rows, color, litRatio = 0.6, seed = 1) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const gapX = w / cols;
  const gapY = h / rows;
  const winW = gapX * 0.55;
  const winH = gapY * 0.6;
  let out = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rand() > litRatio) continue;
      const wx = x + c * gapX + gapX * 0.22;
      const wy = y + r * gapY + gapY * 0.2;
      const op = (0.35 + rand() * 0.55).toFixed(2);
      out += `<rect x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="${winW.toFixed(1)}" height="${winH.toFixed(1)}" fill="${color}" opacity="${op}"/>`;
    }
  }
  return out;
}

function buildingScene({ file, skyStops, sunColor, sunOpacity = 0.85, sunPos = [1180, 330], sunR = 120, buildings, width = 1600, height = 1000 }) {
  const sky = skyStops.map((s) => `<stop offset="${s.offset}" stop-color="${s.color}"/>`).join("");
  let towers = "";
  buildings.forEach((b, i) => {
    const grad = `tower${i}`;
    towers += `<linearGradient id="${grad}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${b.top}"/><stop offset="100%" stop-color="${b.bottom}"/></linearGradient>`;
  });
  let shapes = "";
  buildings.forEach((b, i) => {
    shapes += `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" fill="url(#tower${i})" opacity="${b.opacity ?? 1}"/>`;
    if (b.windows) {
      shapes += windowGrid(b.x, b.y, b.w, b.h, b.cols, b.rows, b.windowColor ?? "#f3c98a", b.litRatio ?? 0.55, i + 7);
    }
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">${sky}</linearGradient>
    ${towers}
  </defs>
  <rect width="${width}" height="${height}" fill="url(#sky)"/>
  <circle cx="${sunPos[0]}" cy="${sunPos[1]}" r="${sunR}" fill="${sunColor}" opacity="${sunOpacity}"/>
  ${shapes}
</svg>`;
  writeFileSync(join(outDir, file), svg, "utf8");
  console.log("wrote", file);
}

// Hero background — building facade at dusk
buildingScene({
  file: "hero-bg.svg",
  skyStops: [
    { offset: "0%", color: "#3a2a1f" },
    { offset: "35%", color: "#8a5a3a" },
    { offset: "65%", color: "#d99a5b" },
    { offset: "100%", color: "#f3c98a" },
  ],
  sunColor: "#ffdca8",
  buildings: [
    { x: 40, y: 560, w: 180, h: 440, top: "#182231", bottom: "#0b131d", opacity: 0.4 },
    { x: 250, y: 480, w: 150, h: 520, top: "#182231", bottom: "#0b131d", opacity: 0.4 },
    { x: 470, y: 220, w: 380, h: 780, top: "#1c2837", bottom: "#0d1621", windows: true, cols: 8, rows: 16, litRatio: 0.5 },
    { x: 880, y: 360, w: 280, h: 640, top: "#141e2b", bottom: "#0b131d", windows: true, cols: 6, rows: 13, litRatio: 0.35 },
    { x: 1180, y: 480, w: 230, h: 520, top: "#1c2837", bottom: "#0d1621", windows: true, cols: 5, rows: 11, litRatio: 0.55 },
    { x: 1420, y: 440, w: 150, h: 560, top: "#141e2b", bottom: "#0b131d", opacity: 0.5 },
  ],
});

// Skyline at night for CTA band
buildingScene({
  file: "skyline.svg",
  skyStops: [
    { offset: "0%", color: "#050a11" },
    { offset: "60%", color: "#0b131d" },
    { offset: "100%", color: "#182234" },
  ],
  sunColor: "#d9b578",
  sunOpacity: 0.25,
  sunR: 200,
  sunPos: [800, 150],
  buildings: [
    { x: 0, y: 620, w: 160, h: 380, top: "#0f1826", bottom: "#070c13", opacity: 0.7 },
    { x: 150, y: 520, w: 140, h: 480, top: "#101a29", bottom: "#070c13", windows: true, cols: 5, rows: 12, litRatio: 0.4 },
    { x: 300, y: 380, w: 200, h: 620, top: "#131f30", bottom: "#080d15", windows: true, cols: 7, rows: 16, litRatio: 0.5 },
    { x: 520, y: 260, w: 220, h: 740, top: "#162336", bottom: "#080d15", windows: true, cols: 7, rows: 18, litRatio: 0.55, windowColor: "#d9b578" },
    { x: 760, y: 340, w: 180, h: 660, top: "#131f30", bottom: "#080d15", windows: true, cols: 6, rows: 15, litRatio: 0.4 },
    { x: 960, y: 460, w: 200, h: 540, top: "#101a29", bottom: "#070c13", windows: true, cols: 6, rows: 13, litRatio: 0.45 },
    { x: 1180, y: 300, w: 210, h: 700, top: "#162336", bottom: "#080d15", windows: true, cols: 6, rows: 17, litRatio: 0.5, windowColor: "#d9b578" },
    { x: 1410, y: 500, w: 190, h: 500, top: "#101a29", bottom: "#070c13", opacity: 0.75 },
  ],
  width: 1600,
  height: 1000,
});

// Launch card thumbnails
const cardVariants = [
  { file: "predio1.svg", accent: "#e9b26a" },
  { file: "predio2.svg", accent: "#dba15a" },
  { file: "predio3.svg", accent: "#f0c087" },
];
cardVariants.forEach((v, idx) => {
  buildingScene({
    file: v.file,
    width: 900,
    height: 700,
    skyStops: [
      { offset: "0%", color: "#2a4258" },
      { offset: "45%", color: "#5c7690" },
      { offset: "100%", color: "#c9d3da" },
    ],
    sunColor: "#ffffff",
    sunOpacity: 0.3,
    sunR: 90,
    sunPos: [700 - idx * 60, 150],
    buildings: [
      { x: 0, y: 300 + idx * 20, w: 260, h: 400 - idx * 20, top: "#dfe3e6", bottom: "#aab4bd", windows: true, cols: 6, rows: 9, litRatio: 0.5, windowColor: "#6b7d8d" },
      { x: 280, y: 200, w: 340, h: 500, top: "#eef1f2", bottom: "#c3cbd1", windows: true, cols: 8, rows: 12, litRatio: 0.45, windowColor: v.accent },
      { x: 640, y: 260 + idx * 10, w: 260, h: 440 - idx * 10, top: "#e3e7e9", bottom: "#b6bfc6", windows: true, cols: 6, rows: 10, litRatio: 0.5, windowColor: "#6b7d8d" },
    ],
  });
});

// Balcony / view image for WhyBuy section
const balconySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1000" height="1200">
  <defs>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a9c6dd"/>
      <stop offset="55%" stop-color="#d9e6ee"/>
      <stop offset="100%" stop-color="#f1ede2"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cbb894"/>
      <stop offset="100%" stop-color="#a68f68"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1200" fill="url(#sky2)"/>
  <g opacity="0.55">
    <rect x="40" y="520" width="120" height="340" fill="#9fb2bf"/>
    <rect x="180" y="440" width="150" height="420" fill="#b3c2cc"/>
    <rect x="350" y="360" width="170" height="500" fill="#9fb2bf"/>
    <rect x="540" y="480" width="140" height="380" fill="#b3c2cc"/>
    <rect x="700" y="400" width="160" height="460" fill="#9fb2bf"/>
    <rect x="860" y="500" width="120" height="360" fill="#b3c2cc"/>
  </g>
  <rect x="0" y="860" width="1000" height="60" fill="#8b8378" opacity="0.7"/>
  <rect x="0" y="900" width="1000" height="300" fill="url(#floor)"/>
  <rect x="60" y="920" width="340" height="14" rx="7" fill="#3a2f22" opacity="0.85"/>
  <rect x="60" y="934" width="14" height="220" fill="#3a2f22" opacity="0.85"/>
  <rect x="386" y="934" width="14" height="220" fill="#3a2f22" opacity="0.85"/>
  <ellipse cx="230" cy="1080" rx="150" ry="18" fill="#000000" opacity="0.12"/>
  <rect x="150" y="960" width="160" height="90" rx="6" fill="#d9b578" opacity="0.9"/>
  <circle cx="230" cy="960" r="40" fill="#f6f2ea" opacity="0.9"/>
</svg>`;
writeFileSync(join(outDir, "varanda.svg"), balconySvg, "utf8");
console.log("wrote varanda.svg");

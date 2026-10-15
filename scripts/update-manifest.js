const fs = require('fs');
const path = require('path');
const manifestPath = path.join(__dirname, '../dist/assets/safari-media/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const newEntries = [
  {
    original: "WhatsApp Image 2026-10-06 at 08.42.45 (1).jpeg",
    cleanName: "safari-32.jpeg",
    size: 69649,
    type: "image",
    hash: "bc366bdab0314f98b2102328bd363e2a"
  },
  {
    original: "WhatsApp Image 2026-10-06 at 08.42.46.jpeg",
    cleanName: "safari-33.jpeg",
    size: 208703,
    type: "image",
    hash: "a993d1faa35928bcda964fd7f8f82a75"
  },
  {
    original: "WhatsApp Image 2026-10-06 at 08.47.40 (1).jpeg",
    cleanName: "safari-34.jpeg",
    size: 143045,
    type: "image",
    hash: "860e3057b99ab5a8250cdfc048abd272"
  },
  {
    original: "WhatsApp Image 2026-10-06 at 08.47.41.jpeg",
    cleanName: "safari-35.jpeg",
    size: 225705,
    type: "image",
    hash: "ae77676bae9c33deaa5b30d5c429086d"
  },
  {
    original: "WhatsApp Video 2026-10-06 at 08.42.50.mp4",
    cleanName: "safari-video-4.mp4",
    size: 14885013,
    type: "video",
    hash: "830931bca73f4ed1eeee05a18ef3d7bf"
  }
];

newEntries.forEach(entry => {
  if (!manifest.some(m => m.cleanName === entry.cleanName)) {
    manifest.push(entry);
  }
});

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Manifest updated. Total items:', manifest.length);

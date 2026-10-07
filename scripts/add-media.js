// Adds the safari-media photos and videos to gallery.html, app.js and kruger.html
const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');

const known = {
  1: ['Elephant & Buffalo at the Waterhole', 'wildlife'],
  2: ['Giraffes Browsing the Acacia', 'wildlife'],
  3: ['Impala Lily in Bloom', 'landscapes'],
  4: ['Giraffes on the Kruger Road', 'wildlife'],
  6: ['Plains Zebra in the Evening Light', 'wildlife'],
  7: ['Baboon Mother & Baby', 'wildlife'],
  9: ['Southern Ground Hornbill', 'wildlife'],
  10: ['Zebra in the Thicket', 'wildlife'],
  18: ['Guests at the Sabie River', 'moments'],
  19: ['Baboons in the Treetops', 'wildlife'],
  20: ['Young Lion at the Roadside', 'wildlife'],
  22: ['Baobab at the Lodge', 'lodges'],
  25: ['Vultures at a Kill', 'wildlife'],
  27: ['Photographing from the Hide', 'moments'],
  28: ['Breakfast Stop in the Park', 'lodges'],
  30: ['Guests with the Skukuza Bridge', 'moments'],
  31: ['Happy Guests at Skukuza', 'moments']
};
const videoCaps = ['Kruger Sighting — Video 1', 'Kruger Sighting — Video 2', 'Kruger Sighting — Video 3'];

const items = [];
for (let i = 1; i <= 31; i++) {
  const n = String(i).padStart(2, '0');
  const k = known[i];
  items.push({ type: 'image', src: `assets/safari-media/safari-${n}.jpeg`,
    caption: k ? k[0] : 'Kruger Safari Moment ' + i, cat: k ? k[1] : 'moments' });
}
for (let v = 1; v <= 3; v++) {
  items.push({ type: 'video', src: `assets/safari-media/safari-video-${v}.mp4`,
    caption: videoCaps[v - 1], cat: 'videos' });
}
const START = 10; // existing gallery has 10 items (0-9)
const catLabel = { wildlife: 'Wildlife', landscapes: 'Landscapes', lodges: 'Safari Living', moments: 'Kruger Moments', videos: 'Video' };
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// ---- gallery.html
let g = fs.readFileSync(path.join(dist, 'gallery.html'), 'utf8');
if (!g.includes('safari-media')) {
  const cards = items.map((it, j) => {
    const idx = START + j;
    const media = it.type === 'video'
      ? `<video src="${it.src}#t=0.5" preload="metadata" muted playsinline></video><span class="photo-play" aria-hidden="true">▶</span>`
      : `<img src="${it.src}" alt="${esc(it.caption)}" loading="lazy">`;
    return `<button class="gallery-photo-card" data-gallery="${idx}" data-category="${it.cat}"><span class="photo-frame">${media}<span class="photo-expand" aria-hidden="true">↗</span></span><span class="photo-label"><strong data-edit="gallery-photo-${idx}">${esc(it.caption)}</strong><span>${catLabel[it.cat]}</span></span></button>`;
  }).join('');
  g = g.replace('</div></section>\n<section class="page-bottom-banner">', cards + '</div></section>\n<section class="page-bottom-banner">');
  g = g.replace('<button data-filter="lodges" aria-pressed="false">Safari Living</button>',
    '<button data-filter="lodges" aria-pressed="false">Safari Living</button><button data-filter="moments" aria-pressed="false">Kruger Moments</button><button data-filter="videos" aria-pressed="false">Videos</button>');
  g = g.replace('>10 photographs<', `>${10 + items.length} items<`);
  g = g.replace('<img id="lightbox-image" alt="">', '<img id="lightbox-image" alt=""><video id="lightbox-video" controls playsinline hidden></video>');
  fs.writeFileSync(path.join(dist, 'gallery.html'), g);
}

// ---- app.js
let a = fs.readFileSync(path.join(dist, 'app.js'), 'utf8');
if (!a.includes('safari-media')) {
  a = a.replace("  ['hero','The journey of a lifetime']\n];",
    "  ['hero','The journey of a lifetime']\n];\n" +
    items.map(it => `photos.push(['${it.src}','${it.caption.replace(/'/g, "\\'")}','${it.type}']);`).join('\n'));
  a = a.replace(/function showPhoto\(i\)\{[\s\S]*?\n\}\n/, `function showPhoto(i){
  photoIndex=(i+photos.length)%photos.length;
  const img=$('#lightbox-image');
  const vid=$('#lightbox-video');
  const cap=$('#photo-caption');
  const p=photos[photoIndex];
  const isVideo=p[2]==='video';
  const src=p[0].includes('/')?p[0]:'assets/'+p[0]+'.webp';
  if(vid){ vid.pause(); vid.hidden=!isVideo; if(isVideo){ vid.src=src; } else { vid.removeAttribute('src'); vid.load(); } }
  if(img){ img.hidden=isVideo; if(!isVideo){ img.src=src; img.alt=p[1]; } }
  if(cap){ cap.textContent=p[1]+' · '+(photoIndex+1)+' / '+photos.length; }
}
`);
  a = a.replace("countEl.textContent=count+' photograph'+(count===1?'':'s');", "countEl.textContent=count+' item'+(count===1?'':'s');");
  fs.writeFileSync(path.join(dist, 'app.js'), a);
}

// ---- kruger.html video strip
let k = fs.readFileSync(path.join(dist, 'kruger.html'), 'utf8');
if (!k.includes('field-videos')) {
  const strip = `<section class="field-videos cream"><div class="section-heading"><p class="eyebrow" data-edit="kruger-video-eyebrow">FROM THE FIELD</p><h2 data-edit="kruger-video-title">Moments From Our Kruger Journeys</h2><p data-edit="kruger-video-copy">Short clips captured on a recent Cotter Safaris trip through the Kruger National Park.</p></div><div class="field-video-grid">${[1,2,3].map(v => `<video src="assets/safari-media/safari-video-${v}.mp4#t=0.5" controls preload="metadata" playsinline></video>`).join('')}</div></section>\n`;
  k = k.replace('</main>', strip + '</main>');
  fs.writeFileSync(path.join(dist, 'kruger.html'), k);
}

// ---- css
let c = fs.readFileSync(path.join(dist, 'pages.css'), 'utf8');
if (!c.includes('field-video-grid')) {
  c += `
/* Media additions */
.gallery-photo-card .photo-frame video{width:100%;height:100%;object-fit:cover;display:block}
.photo-play{position:absolute;inset:0;margin:auto;width:54px;height:54px;border-radius:50%;background:rgba(30,43,25,.75);color:#c89b50;display:grid;place-items:center;font-size:20px;pointer-events:none;border:1px solid #c89b50}
#lightbox-video{max-width:100%;max-height:75vh;display:block;margin:0 auto}
#lightbox-video[hidden],#lightbox-image[hidden]{display:none}
.field-videos{padding:80px 6%}
.field-video-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px;max-width:1200px;margin:32px auto 0}
.field-video-grid video{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:4px;background:#1e2b19;box-shadow:0 12px 30px rgba(30,43,25,.2)}
`;
  fs.writeFileSync(path.join(dist, 'pages.css'), c);
}
console.log('done', items.length);

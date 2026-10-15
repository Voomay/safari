const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');

// Real media catalog (35 photos + 4 videos = 39 items)
const mediaCatalog = [
  // 35 Photos
  { file: 'safari-01.jpeg', caption: 'Elephant & Buffalo at the Waterhole', cat: 'wildlife', type: 'image' },
  { file: 'safari-02.jpeg', caption: 'Giraffes Browsing the Acacia Canopy', cat: 'wildlife', type: 'image' },
  { file: 'safari-03.jpeg', caption: 'Impala Lily in Vibrant Bloom', cat: 'landscapes', type: 'image' },
  { file: 'safari-04.jpeg', caption: 'Giraffes on the Kruger Road', cat: 'wildlife', type: 'image' },
  { file: 'safari-05.jpeg', caption: 'Skukuza Rest Camp & Curio Shop', cat: 'lodges', type: 'image' },
  { file: 'safari-06.jpeg', caption: 'Plains Zebra in Golden Evening Light', cat: 'wildlife', type: 'image' },
  { file: 'safari-07.jpeg', caption: 'Baboon Mother & Baby', cat: 'wildlife', type: 'image' },
  { file: 'safari-08.jpeg', caption: 'Elephant Family at the Riverbed', cat: 'wildlife', type: 'image' },
  { file: 'safari-09.jpeg', caption: 'Southern Ground Hornbill Foraging', cat: 'wildlife', type: 'image' },
  { file: 'safari-10.jpeg', caption: 'Zebra Standing in the Thicket', cat: 'wildlife', type: 'image' },
  { file: 'safari-11.jpeg', caption: 'Hippopotamus Duel in the River', cat: 'wildlife', type: 'image' },
  { file: 'safari-12.jpeg', caption: 'Crimson Bushveld Sunset Silhouette', cat: 'landscapes', type: 'image' },
  { file: 'safari-13.jpeg', caption: 'Sunset Reflections on the River', cat: 'landscapes', type: 'image' },
  { file: 'safari-14.jpeg', caption: 'Lilac-Breasted Roller in Thorn Tree', cat: 'wildlife', type: 'image' },
  { file: 'safari-15.jpeg', caption: 'Spotted Hyena on the Savannah', cat: 'wildlife', type: 'image' },
  { file: 'safari-16.jpeg', caption: 'Elephant Herd with Newborn Calf', cat: 'wildlife', type: 'image' },
  { file: 'safari-17.jpeg', caption: 'Vultures Displaying at a Sighting', cat: 'wildlife', type: 'image' },
  { file: 'safari-18.jpeg', caption: 'Safari Guests Relaxing by Sabie River', cat: 'moments', type: 'image' },
  { file: 'safari-19.jpeg', caption: 'Chacma Baboons in the Treetops', cat: 'wildlife', type: 'image' },
  { file: 'safari-20.jpeg', caption: 'Young Male Lion at the Roadside', cat: 'wildlife', type: 'image' },
  { file: 'safari-21.jpeg', caption: 'Geometer Moth with Chevron Wing Patterns', cat: 'wildlife', type: 'image' },
  { file: 'safari-22.jpeg', caption: 'Skukuza Safari Lodge Baobab Courtyard', cat: 'lodges', type: 'image' },
  { file: 'safari-23.jpeg', caption: 'Wild Kruger Male Lion Portrait', cat: 'wildlife', type: 'image' },
  { file: 'safari-24.jpeg', caption: 'Playful Baby Vervet Monkey Leaping', cat: 'wildlife', type: 'image' },
  { file: 'safari-25.jpeg', caption: 'Vultures Competing on the Savannah', cat: 'wildlife', type: 'image' },
  { file: 'safari-26.jpeg', caption: 'Smiling Senior Guests with Cotter Safaris', cat: 'moments', type: 'image' },
  { file: 'safari-27.jpeg', caption: 'Bird Photography from Lake Panic Hide', cat: 'moments', type: 'image' },
  { file: 'safari-28.jpeg', caption: 'Bush Breakfast Stop in Kruger', cat: 'lodges', type: 'image' },
  { file: 'safari-29.jpeg', caption: 'Happy Guests Arriving for Safari', cat: 'moments', type: 'image' },
  { file: 'safari-30.jpeg', caption: 'Guests with Michael Cotter at Sabie Bridge', cat: 'moments', type: 'image' },
  { file: 'safari-31.jpeg', caption: 'Guests Enjoying Skukuza Rest Camp', cat: 'moments', type: 'image' },
  { file: 'safari-32.jpeg', caption: 'African Sun Through Acacia Branches', cat: 'landscapes', type: 'image' },
  { file: 'safari-33.jpeg', caption: 'Southern Ground Hornbill Close-Up', cat: 'wildlife', type: 'image' },
  { file: 'safari-34.jpeg', caption: 'Lead Guide Michael Cotter Greeting Guests', cat: 'moments', type: 'image' },
  { file: 'safari-35.jpeg', caption: 'Guests Observing Wildlife from Bird Hide', cat: 'moments', type: 'image' },
  // 4 Videos
  { file: 'safari-video-1.mp4', caption: 'Giraffes Browsing roadside Canopy', cat: 'videos', type: 'video' },
  { file: 'safari-video-2.mp4', caption: 'Safari Vehicle Wildlife Encounter', cat: 'videos', type: 'video' },
  { file: 'safari-video-3.mp4', caption: 'Close Bushveld Wildlife Sighting', cat: 'videos', type: 'video' },
  { file: 'safari-video-4.mp4', caption: 'Day One Highlights: Monitor, Hippos, Storks & Crocs', cat: 'videos', type: 'video' }
];

console.log('Total items in real catalog:', mediaCatalog.length);

// 1. Update styles.css
let styles = fs.readFileSync(path.join(dist, 'styles.css'), 'utf8');
styles = styles.replaceAll("url('assets/hero.webp')", "url('assets/safari-media/safari-01.jpeg')");
styles = styles.replaceAll("url('assets/lion.webp')", "url('assets/safari-media/safari-20.jpeg')");
styles = styles.replaceAll("url('assets/acacia.webp')", "url('assets/safari-media/safari-13.jpeg')");
fs.writeFileSync(path.join(dist, 'styles.css'), styles);
console.log('✓ styles.css updated');

// 2. Update pages.css
let pages = fs.readFileSync(path.join(dist, 'pages.css'), 'utf8');
pages = pages.replaceAll("url('assets/acacia.webp')", "url('assets/safari-media/safari-13.jpeg')");
pages = pages.replaceAll("url('assets/hero.webp')", "url('assets/safari-media/safari-01.jpeg')");
pages = pages.replaceAll("url('assets/leopard.webp')", "url('assets/safari-media/safari-20.jpeg')");
pages = pages.replaceAll("url('assets/elephants.webp')", "url('assets/safari-media/safari-04.jpeg')");
pages = pages.replaceAll("url('assets/lodge.webp')", "url('assets/safari-media/safari-22.jpeg')");
if (!pages.includes('.team-hero')) {
  pages += `\n.team-hero{background-image:linear-gradient(90deg,#10180dd4,#11190d50),url('assets/safari-media/safari-30.jpeg');background-size:cover;background-position:center}\n`;
}
if (!pages.includes('.field-video-grid')) {
  pages += `
/* Field Videos Section */
.field-videos{padding:calc(var(--u)*5) 6.4%;position:relative}
.field-featured-video{max-width:980px;margin:0 auto calc(var(--u)*3.5);background:#1e2b19;border-radius:4px;overflow:hidden;box-shadow:0 14px 34px rgba(30,43,25,.18)}
.field-featured-video video{width:100%;display:block;max-height:540px;background:#000}
.featured-video-meta{padding:calc(var(--u)*1.8) calc(var(--u)*2.4);background:#25341f;color:#e8e4d8;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.featured-video-meta h4{font-family:'Cormorant Garamond',Georgia,serif;font-size:calc(var(--u)*2.2);color:#fff;margin:0}
.featured-video-meta p{font-size:calc(var(--u)*1.15);color:#d0c6b0;margin:0}
.field-video-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:calc(var(--u)*2);max-width:1160px;margin:0 auto}
.field-video-card{background:#fff;border-radius:3px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,.06);border:1px solid #ebdcc5}
.field-video-card video{width:100%;aspect-ratio:16/10;object-fit:cover;display:block;background:#1e2b19}
.field-video-card-body{padding:calc(var(--u)*1.2) calc(var(--u)*1.5)}
.field-video-card-body h5{font-family:'Cormorant Garamond',Georgia,serif;font-size:calc(var(--u)*1.7);margin:0 0 4px;color:#202d1a}
.field-video-card-body p{font-size:calc(var(--u)*1.05);color:var(--muted);margin:0}
`;
}
fs.writeFileSync(path.join(dist, 'pages.css'), pages);
console.log('✓ pages.css updated');

// 3. Update index.html
let index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
// Hero slide 1
index = index.replace("url('assets/hero.webp')", "url('assets/safari-media/safari-01.jpeg')");

// Intro photo
index = index.replace(
  '<img class="intro-photo" src="assets/leopard.webp" alt="Leopard resting on a tree branch" loading="lazy">',
  '<img class="intro-photo" src="assets/safari-media/safari-23.jpeg" alt="Wild Kruger male lion photographed on safari by Michael Cotter" loading="lazy">'
);

// Experience cards
index = index.replace(
  '<img src="assets/elephants.webp" alt="African elephant in golden evening light" loading="lazy">',
  '<img src="assets/safari-media/safari-04.jpeg" alt="Giraffes browsing on the Kruger road in front of safari vehicle" loading="lazy">'
);
index = index.replace(
  '<img src="assets/landscape.webp" alt="African river delta and untamed landscape" loading="lazy">',
  '<img src="assets/safari-media/safari-35.jpeg" alt="Guests viewing wildlife from the shaded bird hide" loading="lazy">'
);
index = index.replace(
  '<img src="assets/lodge.webp" alt="Luxury safari lodge deck at sunset" loading="lazy">',
  '<img src="assets/safari-media/safari-22.jpeg" alt="Skukuza Safari Lodge Baobab courtyard" loading="lazy">'
);

// Destination cards
index = index.replace(
  '<img src="assets/elephants.webp" alt="Elephants at an African watering hole" loading="lazy">',
  '<img src="assets/safari-media/safari-06.jpeg" alt="Plains zebras in golden evening light" loading="lazy">'
);
index = index.replace(
  '<img src="assets/landscape.webp" alt="Winding river in lush African wetlands" loading="lazy">',
  '<img src="assets/safari-media/safari-13.jpeg" alt="Untamed Kruger river landscapes at sunset" loading="lazy">'
);
index = index.replace(
  '<img src="assets/giraffes.webp" alt="Giraffes on the savannah at sunset" loading="lazy">',
  '<img src="assets/safari-media/safari-02.jpeg" alt="Giraffes browsing acacia trees" loading="lazy">'
);
index = index.replace(
  '<img src="assets/acacia.webp" alt="Acacia tree silhouetted against an African sunset" loading="lazy">',
  '<img src="assets/safari-media/safari-30.jpeg" alt="Cotter Safaris guests overlooking the Sabie River" loading="lazy">'
);

// Homepage gallery grid preview (6 buttons)
const homeGalleryReplaced = `
<div class="gallery-grid">
  <button data-gallery="19" aria-label="Young Male Lion at the Roadside"><img src="assets/safari-media/safari-20.jpeg" alt="Young Male Lion at the Roadside" loading="lazy"></button>
  <button data-gallery="0" aria-label="Elephant & Buffalo at the Waterhole"><img src="assets/safari-media/safari-01.jpeg" alt="Elephant & Buffalo at the Waterhole" loading="lazy"></button>
  <button data-gallery="5" aria-label="Plains Zebra in Golden Evening Light"><img src="assets/safari-media/safari-06.jpeg" alt="Plains Zebra in Golden Evening Light" loading="lazy"></button>
  <button data-gallery="13" aria-label="Lilac-Breasted Roller in Thorn Tree"><img src="assets/safari-media/safari-14.jpeg" alt="Lilac-Breasted Roller in Thorn Tree" loading="lazy"></button>
  <button data-gallery="10" aria-label="Hippopotamus Duel in the River"><img src="assets/safari-media/safari-11.jpeg" alt="Hippopotamus Duel in the River" loading="lazy"></button>
  <button data-gallery="3" aria-label="Giraffes on the Kruger Road"><img src="assets/safari-media/safari-04.jpeg" alt="Giraffes on the Kruger Road" loading="lazy"></button>
</div>
`.trim();

index = index.replace(/<div class="gallery-grid">[\s\S]*?<\/div>/, homeGalleryReplaced);

// Add a featured field video section on index.html
if (!index.includes('field-video-spotlight')) {
  const videoSpotlight = `
<!-- Real Kruger Field Video Feature Section -->
<section class="field-video-spotlight" style="background:#1e2b19;color:#faf7ed;padding:calc(var(--u)*5.5) 6.4%;position:relative">
  <div class="section-heading" style="text-align:center;margin-bottom:calc(var(--u)*3.2)">
    <p class="eyebrow" style="color:#dcb273">CAPTURED ON OUR SAFARIS</p>
    <h2 style="color:#fff">Wild Kruger Moments on Film</h2>
    <p style="color:#c9c4b2;max-width:680px;margin:0 auto">Genuine sighting highlights filmed personally by guide Michael Cotter during our small-group Kruger departures.</p>
  </div>
  <div style="max-width:960px;margin:0 auto;box-shadow:0 18px 45px rgba(0,0,0,.4);border-radius:4px;overflow:hidden;border:1px solid #3d4f32">
    <video src="assets/safari-media/safari-video-4.mp4" controls preload="metadata" playsinline poster="assets/safari-media/safari-01.jpeg" style="width:100%;display:block;max-height:520px;background:#000"></video>
    <div style="padding:18px 24px;background:#273721;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px">
      <div>
        <h3 style="font-size:calc(var(--u)*2);color:#fff;margin:0 0 4px">Day One Highlights — Water Monitor, Hippos, Storks & Crocodiles</h3>
        <p style="font-size:calc(var(--u)*1.12);color:#c4ba9f;margin:0">A journey along the Kruger waterways, from Malelane Gate to the heart of the park.</p>
      </div>
      <a href="gallery.html" class="button" style="white-space:nowrap">View All 4 Videos <svg><use href="#arrow"/></svg></a>
    </div>
  </div>
</section>
`;
  index = index.replace('</main>', videoSpotlight + '\n</main>');
}

fs.writeFileSync(path.join(dist, 'index.html'), index);
console.log('✓ index.html updated');

// 4. Update about.html
let about = fs.readFileSync(path.join(dist, 'about.html'), 'utf8');
about = about.replace(
  '<img src="assets/lion.webp" alt="African wildlife photography by Michael Cotter" style="border-radius:3px;height:calc(var(--u)*17)" loading="lazy">',
  '<img src="assets/team/michael-cotter.jpeg" alt="Lead Host & Trails Guide Michael Cotter" style="border-radius:3px;height:calc(var(--u)*17);object-fit:cover;object-position:top" loading="lazy">'
);
fs.writeFileSync(path.join(dist, 'about.html'), about);
console.log('✓ about.html updated');

// 5. Update kruger.html (Add video section with all 4 videos)
let kruger = fs.readFileSync(path.join(dist, 'kruger.html'), 'utf8');
if (!kruger.includes('field-videos')) {
  const krugerVideoSection = `
<!-- Real Field Video Highlights Section -->
<section class="field-videos cream" id="videos" style="border-top:1px solid #ebdcc5">
  <div class="section-heading">
    <p class="eyebrow" data-edit="kruger-video-eyebrow">FIELD FOOTAGE</p>
    <h2 data-edit="kruger-video-title">Moments from the Kruger Trail</h2>
    <p data-edit="kruger-video-copy">Authentic sighting footage filmed during recent Cotter Safaris tours by lead guide Michael Cotter.</p>
  </div>

  <!-- Featured Day One Video -->
  <div class="field-featured-video">
    <video src="assets/safari-media/safari-video-4.mp4" controls preload="metadata" playsinline poster="assets/safari-media/safari-01.jpeg"></video>
    <div class="featured-video-meta">
      <div>
        <h4>Day One Expedition Highlights</h4>
        <p>Featuring marabou storks, elephants, buffalo, water monitor, hippos, grey heron, and Nile crocodiles.</p>
      </div>
      <a href="gallery.html" class="button green" style="font-size:calc(var(--u)*1.05)">Open in Gallery <svg><use href="#arrow"/></svg></a>
    </div>
  </div>

  <!-- Grid of 3 Encounter Clips -->
  <div class="field-video-grid">
    <div class="field-video-card">
      <video src="assets/safari-media/safari-video-1.mp4#t=0.5" controls preload="metadata" playsinline></video>
      <div class="field-video-card-body">
        <h5>Giraffes on the Roadside</h5>
        <p>Tall giraffes browsing acacia canopies directly along our drive route.</p>
      </div>
    </div>
    <div class="field-video-card">
      <video src="assets/safari-media/safari-video-2.mp4#t=0.5" controls preload="metadata" playsinline></video>
      <div class="field-video-card-body">
        <h5>Wildlife Encounter from the Vehicle</h5>
        <p>A close-up look at animal behavior seen from our elevated safari vehicle.</p>
      </div>
    </div>
    <div class="field-video-card">
      <video src="assets/safari-media/safari-video-3.mp4#t=0.5" controls preload="metadata" playsinline></video>
      <div class="field-video-card-body">
        <h5>Quiet Bushveld Moments</h5>
        <p>Serene moments watching wildlife undisturbed in their natural habitat.</p>
      </div>
    </div>
  </div>
</section>
`;
  // Place before departures or before </main>
  if (kruger.includes('<section class="upcoming-departures-section')) {
    kruger = kruger.replace('<section class="upcoming-departures-section', krugerVideoSection + '\n<section class="upcoming-departures-section');
  } else {
    kruger = kruger.replace('</main>', krugerVideoSection + '\n</main>');
  }
  fs.writeFileSync(path.join(dist, 'kruger.html'), kruger);
  console.log('✓ kruger.html video section added');
}

// 6. Update gallery.html (35 photos + 4 videos = 39 items, 0 AI images)
const catLabel = {
  wildlife: 'Wildlife',
  landscapes: 'Landscapes',
  lodges: 'Safari Living',
  moments: 'Kruger Moments',
  videos: 'Videos'
};
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

let galleryHtmlCards = mediaCatalog.map((item, idx) => {
  const isVid = item.type === 'video';
  const src = `assets/safari-media/${item.file}`;
  const mediaMarkup = isVid
    ? `<video src="${src}#t=0.5" preload="metadata" muted playsinline></video><span class="photo-play" aria-hidden="true">▶</span>`
    : `<img src="${src}" alt="${esc(item.caption)}" loading="lazy">`;

  return `
    <button class="gallery-photo-card" data-gallery="${idx}" data-category="${item.cat}">
      <span class="photo-frame">
        ${mediaMarkup}
        <span class="photo-expand" aria-hidden="true">↗</span>
      </span>
      <span class="photo-label">
        <strong data-edit="gallery-photo-${idx}">${esc(item.caption)}</strong>
        <span>${catLabel[item.cat]}</span>
      </span>
    </button>
  `.trim();
}).join('\n');

let gallery = fs.readFileSync(path.join(dist, 'gallery.html'), 'utf8');

// Replace entire gallery-grid contents
const gridStartMarker = '<div class="full-gallery-grid">';
const gridEndMarker = '</div></section>';
const startIdx = gallery.indexOf(gridStartMarker);
const endIdx = gallery.indexOf(gridEndMarker, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  gallery = gallery.substring(0, startIdx + gridStartMarker.length) + '\n' + galleryHtmlCards + '\n' + gallery.substring(endIdx);
}

// Update filter counts and filter buttons
// Make sure all 5 category filter buttons exist: All, Wildlife, Landscapes, Safari Living, Kruger Moments, Videos
const filterBarHtml = `
<div class="gallery-filter-bar" role="toolbar" aria-label="Filter photographs">
  <button data-filter="all" aria-pressed="true" class="active">All Photographs &amp; Videos</button>
  <button data-filter="wildlife" aria-pressed="false">Wildlife</button>
  <button data-filter="landscapes" aria-pressed="false">Landscapes</button>
  <button data-filter="lodges" aria-pressed="false">Safari Living</button>
  <button data-filter="moments" aria-pressed="false">Kruger Moments</button>
  <button data-filter="videos" aria-pressed="false">Videos</button>
  <span class="gallery-count">${mediaCatalog.length} items</span>
</div>
`.trim();

// Replace existing filter bar if present or update count
if (gallery.includes('class="gallery-filter-bar"')) {
  gallery = gallery.replace(/<div class="gallery-filter-bar"[\s\S]*?<\/div>/, filterBarHtml);
} else {
  // Insert before grid
  gallery = gallery.replace(gridStartMarker, filterBarHtml + '\n' + gridStartMarker);
}

// Ensure lightbox has video element
if (!gallery.includes('id="lightbox-video"')) {
  gallery = gallery.replace('<img id="lightbox-image" alt="">', '<img id="lightbox-image" alt=""><video id="lightbox-video" controls playsinline hidden></video>');
}

fs.writeFileSync(path.join(dist, 'gallery.html'), gallery);
console.log('✓ gallery.html updated with 39 real items');

// 7. Update app.js
let app = fs.readFileSync(path.join(dist, 'app.js'), 'utf8');

// Build clean photos array
const photosArrayCode = `const photos = [\n` +
  mediaCatalog.map(item => `  ['assets/safari-media/${item.file}', '${item.caption.replace(/'/g, "\\'")}', '${item.type}']`).join(',\n') +
  `\n];`;

// Replace from 'const photos=[' up to the start of 'let photoIndex=0;'
const pStart = app.indexOf('const photos=');
const pEnd = app.indexOf('let photoIndex=0;');
if (pStart !== -1 && pEnd !== -1) {
  app = app.substring(0, pStart) + photosArrayCode + '\n\n' + app.substring(pEnd);
}

// Update showPhoto to properly handle video playback & captions
const showPhotoCode = `function showPhoto(i){
  photoIndex=(i+photos.length)%photos.length;
  const img=$('#lightbox-image');
  const vid=$('#lightbox-video');
  const cap=$('#photo-caption');
  const p=photos[photoIndex];
  if(!p) return;
  const isVideo=p[2]==='video';
  const src=p[0];
  if(vid){
    vid.pause();
    vid.hidden=!isVideo;
    if(isVideo){
      vid.src=src;
      vid.load();
    } else {
      vid.removeAttribute('src');
    }
  }
  if(img){
    img.hidden=isVideo;
    if(!isVideo){
      img.src=src;
      img.alt=p[1];
    }
  }
  if(cap){
    cap.textContent=p[1]+' · '+(photoIndex+1)+' / '+photos.length;
  }
}`;

app = app.replace(/function showPhoto\(i\)[\s\S]*?\n\}/, showPhotoCode);

// Update gallery filter click handling in app.js
// Ensure filtering works for 'all', 'wildlife', 'landscapes', 'lodges', 'moments', 'videos'
const filterLogic = `
  const filterBtns=$$('.gallery-filter-bar button[data-filter]');
  const photoCards=$$('.gallery-photo-card');
  const countEl=$('.gallery-count');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      filterBtns.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed','true');
      const filter=btn.dataset.filter;
      let visibleCount=0;
      photoCards.forEach(card=>{
        const match=filter==='all'||card.dataset.category===filter;
        card.style.display=match?'':'none';
        if(match) visibleCount++;
      });
      if(countEl){
        countEl.textContent=visibleCount+' '+(filter==='videos'?'video':'photograph')+(visibleCount===1?'':'s');
      }
    });
  });
`;

if (app.includes("$$('.gallery-filter-bar button[data-filter]')")) {
  app = app.replace(/\$\$\('\.gallery-filter-bar button\[data-filter\]'\)[\s\S]*?\}\);[\s\S]*?\}\);/, filterLogic.trim());
} else if (app.includes("filterBtns.forEach")) {
  app = app.replace(/const filterBtns[\s\S]*?\}\);[\s\S]*?\}\);/, filterLogic.trim());
}

fs.writeFileSync(path.join(dist, 'app.js'), app);
console.log('✓ app.js updated');

// 8. Delete AI .webp files from dist/assets
const aiWebpFiles = [
  'acacia.webp',
  'bird.webp',
  'buffalo.webp',
  'elephants.webp',
  'giraffes.webp',
  'hero.webp',
  'landscape.webp',
  'leopard.webp',
  'lion.webp',
  'lodge.webp'
];

let removedCount = 0;
for (const webpFile of aiWebpFiles) {
  const p = path.join(dist, 'assets', webpFile);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    removedCount++;
  }
}
console.log(`✓ Removed ${removedCount} AI .webp images from dist/assets`);

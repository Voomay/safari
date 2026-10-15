const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');

// 1. Add lightbox-video to index.html if missing
let index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!index.includes('lightbox-video')) {
  index = index.replace(
    '<img id="lightbox-image" alt="">',
    '<img id="lightbox-image" alt=""><video id="lightbox-video" controls playsinline hidden style="max-height:70vh;width:100%;object-fit:contain;display:block;margin:0 auto"></video>'
  );
  fs.writeFileSync(path.join(dist, 'index.html'), index);
  console.log('✓ index.html lightbox-video added');
}

// 2. Ensure pages.css has photo-play and lightbox-video styles
let pages = fs.readFileSync(path.join(dist, 'pages.css'), 'utf8');
if (!pages.includes('.photo-play')) {
  pages += `
/* Lightbox & Video Overlays */
#lightbox-video{max-height:70vh;width:100%;object-fit:contain;display:block;margin:0 auto}
#lightbox-video[hidden],#lightbox-image[hidden]{display:none!important}
.photo-play{position:absolute;inset:0;margin:auto;width:56px;height:56px;border-radius:50%;background:rgba(30,43,25,.82);color:#c89b50;display:grid;place-items:center;font-size:22px;pointer-events:none;border:2px solid #c89b50;box-shadow:0 6px 18px rgba(0,0,0,.35);transition:transform .3s,background .3s}
.gallery-photo-card:hover .photo-play{transform:scale(1.12);background:rgba(30,43,25,.95);color:#e2b86b}
`;
  fs.writeFileSync(path.join(dist, 'pages.css'), pages);
  console.log('✓ pages.css photo-play styles added');
}

// 3. Ensure styles.css has hidden rules and photo-play for homepage
let styles = fs.readFileSync(path.join(dist, 'styles.css'), 'utf8');
if (!styles.includes('#lightbox-video')) {
  styles += `\n#lightbox-video{max-height:70vh;width:100%;object-fit:contain;display:block;margin:0 auto}#lightbox-video[hidden],#lightbox-image[hidden]{display:none!important}.photo-play{position:absolute;inset:0;margin:auto;width:56px;height:56px;border-radius:50%;background:rgba(30,43,25,.82);color:#c89b50;display:grid;place-items:center;font-size:22px;pointer-events:none;border:2px solid #c89b50;box-shadow:0 6px 18px rgba(0,0,0,.35)}\n`;
  fs.writeFileSync(path.join(dist, 'styles.css'), styles);
  console.log('✓ styles.css lightbox-video added');
}

// 4. Update app.js lightbox close listener
let app = fs.readFileSync(path.join(dist, 'app.js'), 'utf8');
if (!app.includes('lightbox-video-close-handler')) {
  const closeHandler = `
// lightbox-video-close-handler
const lightboxDialog = document.getElementById('lightbox');
if (lightboxDialog) {
  lightboxDialog.addEventListener('close', () => {
    const vid = document.getElementById('lightbox-video');
    if (vid) {
      vid.pause();
      vid.removeAttribute('src');
      vid.load();
    }
  });
}
`;
  app = app.replace("let photoIndex=0;", closeHandler + "\nlet photoIndex=0;");
  fs.writeFileSync(path.join(dist, 'app.js'), app);
  console.log('✓ app.js close handler added');
}

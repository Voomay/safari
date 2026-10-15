const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');

// ==========================================
// 1. Remove the video spotlight section on index.html
// ==========================================
let indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const videoSpotlightRegex = /<!-- Real Kruger Field Video Feature Section -->\s*<section class="field-video-spotlight"[\s\S]*?<\/section>/;
if (videoSpotlightRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(videoSpotlightRegex, '');
  console.log('✓ Removed field-video-spotlight from index.html');
} else {
  const startIdx = indexHtml.indexOf('<section class="field-video-spotlight"');
  if (startIdx !== -1) {
    const endIdx = indexHtml.indexOf('</section>', startIdx);
    if (endIdx !== -1) {
      indexHtml = indexHtml.substring(0, startIdx) + indexHtml.substring(endIdx + 10);
      console.log('✓ Fallback removed field-video-spotlight from index.html');
    }
  }
}
fs.writeFileSync(path.join(dist, 'index.html'), indexHtml);

// ==========================================
// 2. Remove WhatsApp tab from header menu across all pages
// ==========================================
const waNavRegex = /\s*<a href="https:\/\/wa\.me\/[^"]*" target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"><\/i>\s*WhatsApp<\/a>/g;

const htmlFiles = fs.readdirSync(dist).filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  const filePath = path.join(dist, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.match(waNavRegex)) {
    content = content.replace(waNavRegex, '');
    fs.writeFileSync(filePath, content);
    console.log(`✓ Removed header WhatsApp link from ${file}`);
  }
}

// ==========================================
// 3. Fix Gallery Tabs (make them gorgeous, luxury, and responsive)
// ==========================================
let galleryHtml = fs.readFileSync(path.join(dist, 'gallery.html'), 'utf8');

const elegantFilterHtml = `
<div class="gallery-filters-wrapper">
  <div class="gallery-filters" role="toolbar" aria-label="Filter gallery by category">
    <button data-filter="all" aria-pressed="true" class="gallery-tab active">
      <i class="fa-solid fa-border-all"></i>
      <span>All Moments</span>
      <span class="tab-badge">39</span>
    </button>
    <button data-filter="wildlife" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-paw"></i>
      <span>Wildlife</span>
      <span class="tab-badge">18</span>
    </button>
    <button data-filter="landscapes" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-mountain-sun"></i>
      <span>Landscapes</span>
      <span class="tab-badge">5</span>
    </button>
    <button data-filter="lodges" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-campground"></i>
      <span>Safari Living</span>
      <span class="tab-badge">4</span>
    </button>
    <button data-filter="moments" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-camera"></i>
      <span>Kruger Moments</span>
      <span class="tab-badge">8</span>
    </button>
    <button data-filter="videos" aria-pressed="false" class="gallery-tab video-tab">
      <i class="fa-solid fa-circle-play"></i>
      <span>Field Videos</span>
      <span class="tab-badge gold-badge">4</span>
    </button>
  </div>
  <p class="gallery-results-count"><span id="gallery-counter-num">39</span> items displayed</p>
</div>
`.trim();

if (galleryHtml.includes('class="gallery-filter-bar"')) {
  galleryHtml = galleryHtml.replace(/<div class="gallery-filter-bar"[\s\S]*?<\/div>/, elegantFilterHtml);
} else if (galleryHtml.includes('class="gallery-filters-wrapper"')) {
  galleryHtml = galleryHtml.replace(/<div class="gallery-filters-wrapper"[\s\S]*?<\/p>\s*<\/div>/, elegantFilterHtml);
} else {
  // insert before full-gallery-grid
  galleryHtml = galleryHtml.replace('<div class="full-gallery-grid">', elegantFilterHtml + '\n<div class="full-gallery-grid">');
}

fs.writeFileSync(path.join(dist, 'gallery.html'), galleryHtml);
console.log('✓ Updated gallery.html filter markup');

// ==========================================
// 4. Add luxury styling for gallery-filters in pages.css
// ==========================================
let pagesCss = fs.readFileSync(path.join(dist, 'pages.css'), 'utf8');

const luxuryFilterCss = `
/* =========================================
   LUXURY GALLERY FILTER TABS
   ========================================= */
.gallery-filters-wrapper {
  max-width: 1100px;
  margin: calc(var(--u) * 2.5) auto calc(var(--u) * 3);
  text-align: center;
  position: relative;
  z-index: 2;
}

.gallery-filters {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: calc(var(--u) * 0.9);
  background: #f4eee1;
  padding: calc(var(--u) * 0.6) calc(var(--u) * 0.8);
  border-radius: 40px;
  border: 1px solid #dfd4bf;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.04), 0 4px 18px rgba(30,43,25,.06);
}

.gallery-tab {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--u) * 0.65);
  background: transparent;
  border: 1px solid transparent;
  color: #555d49;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: calc(var(--u) * 1.12);
  font-weight: 500;
  padding: calc(var(--u) * 0.75) calc(var(--u) * 1.6);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.gallery-tab i {
  font-size: calc(var(--u) * 1.05);
  color: #928469;
  transition: color 0.2s ease;
}

.gallery-tab .tab-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 43, 25, 0.08);
  color: #4a543b;
  font-size: calc(var(--u) * 0.85);
  font-weight: 600;
  padding: 1px 7px;
  border-radius: 12px;
  min-width: 18px;
  line-height: 1.3;
}

.gallery-tab:hover {
  background: #ffffff90;
  color: #1e2b19;
  border-color: #d8cbb5;
  transform: translateY(-1px);
}

.gallery-tab:hover i {
  color: #c89b50;
}

.gallery-tab[aria-pressed="true"],
.gallery-tab.active {
  background: #1e2b19;
  color: #faf7ed;
  border-color: #1e2b19;
  box-shadow: 0 4px 14px rgba(30, 43, 25, 0.28);
}

.gallery-tab[aria-pressed="true"] i,
.gallery-tab.active i {
  color: #dcb273;
}

.gallery-tab[aria-pressed="true"] .tab-badge,
.gallery-tab.active .tab-badge {
  background: #2b3e24;
  color: #e9c98a;
}

.gallery-tab.video-tab.active .tab-badge {
  background: #c89b50;
  color: #1e2b19;
  font-weight: 700;
}

.gallery-results-count {
  font-size: calc(var(--u) * 1.05);
  color: var(--muted);
  margin-top: calc(var(--u) * 1.2);
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .gallery-filters {
    border-radius: 16px;
    padding: 8px;
    gap: 6px;
    background: #f1ebd8;
  }
  .gallery-tab {
    font-size: 12px;
    padding: 7px 12px;
    gap: 5px;
  }
  .gallery-tab .tab-badge {
    font-size: 10px;
    padding: 0 5px;
  }
}
`;

if (pagesCss.includes('LUXURY GALLERY FILTER TABS')) {
  const pIdx = pagesCss.indexOf('/* =========================================\n   LUXURY GALLERY FILTER TABS');
  pagesCss = pagesCss.substring(0, pIdx) + luxuryFilterCss.trim() + '\n';
} else {
  pagesCss += '\n' + luxuryFilterCss.trim() + '\n';
}

fs.writeFileSync(path.join(dist, 'pages.css'), pagesCss);
console.log('✓ pages.css updated with luxury filter styles');

// ==========================================
// 5. Update app.js gallery filter event listener
// ==========================================
let appJs = fs.readFileSync(path.join(dist, 'app.js'), 'utf8');

const updatedFilterScript = `
// Enhanced Gallery Category Filtering
(function initGalleryFilter() {
  const filterTabs = document.querySelectorAll('.gallery-tab, [data-filter]');
  const photoCards = document.querySelectorAll('.gallery-photo-card');
  const countNumEl = document.getElementById('gallery-counter-num');
  const legacyCountEl = document.querySelector('.gallery-count');

  if (!filterTabs.length) return;

  filterTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabs.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      photoCards.forEach(card => {
        const cat = card.dataset.category;
        const match = (filter === 'all') || (cat === filter);
        if (match) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countNumEl) countNumEl.textContent = visibleCount;
      if (legacyCountEl) legacyCountEl.textContent = visibleCount + ' item' + (visibleCount === 1 ? '' : 's');
    });
  });
})();
`;

// If existing initGalleryFilter exists, replace it, else append
if (appJs.includes('initGalleryFilter()')) {
  const gStart = appJs.indexOf('// Enhanced Gallery Category Filtering');
  const gEnd = appJs.indexOf('})();', gStart);
  if (gStart !== -1 && gEnd !== -1) {
    appJs = appJs.substring(0, gStart) + updatedFilterScript.trim() + appJs.substring(gEnd + 5);
  }
} else {
  appJs += '\n' + updatedFilterScript.trim() + '\n';
}

fs.writeFileSync(path.join(dist, 'app.js'), appJs);
console.log('✓ app.js updated with filter handler');

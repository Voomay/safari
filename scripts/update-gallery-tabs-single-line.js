const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');

// 1. Update gallery.html
let galleryHtml = fs.readFileSync(path.join(dist, 'gallery.html'), 'utf8');

const updatedFilterHtml = `
<div class="gallery-filters-wrapper">
  <div class="gallery-filters" role="toolbar" aria-label="Filter gallery by category">
    <button data-filter="all" aria-pressed="true" class="gallery-tab active">
      <i class="fa-solid fa-border-all"></i>
      <span>All Moments</span>
    </button>
    <button data-filter="wildlife" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-paw"></i>
      <span>Wildlife</span>
    </button>
    <button data-filter="landscapes" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-mountain-sun"></i>
      <span>Landscapes</span>
    </button>
    <button data-filter="lodges" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-campground"></i>
      <span>Safari Living</span>
    </button>
    <button data-filter="moments" aria-pressed="false" class="gallery-tab">
      <i class="fa-solid fa-camera"></i>
      <span>Kruger Moments</span>
    </button>
    <button data-filter="videos" aria-pressed="false" class="gallery-tab video-tab">
      <i class="fa-solid fa-circle-play"></i>
      <span>Videos</span>
    </button>
  </div>
  <p class="gallery-results-count"><span id="gallery-counter-num">39</span> items displayed</p>
</div>
`.trim();

const wrapperRegex = /<div class="gallery-filters-wrapper">[\s\S]*?<\/div>\s*<p class="gallery-results-count">[\s\S]*?<\/p>\s*<\/div>/;
if (wrapperRegex.test(galleryHtml)) {
  galleryHtml = galleryHtml.replace(wrapperRegex, updatedFilterHtml);
} else {
  const startIdx = galleryHtml.indexOf('<div class="gallery-filters-wrapper">');
  const endIdx = galleryHtml.indexOf('<div class="full-gallery-grid">');
  if (startIdx !== -1 && endIdx !== -1) {
    galleryHtml = galleryHtml.substring(0, startIdx) + updatedFilterHtml + '\n' + galleryHtml.substring(endIdx);
  }
}

fs.writeFileSync(path.join(dist, 'gallery.html'), galleryHtml);
console.log('✓ gallery.html updated: badges removed, Videos updated');

// 2. Update pages.css for single-line alignment (flex-wrap: nowrap)
let pagesCss = fs.readFileSync(path.join(dist, 'pages.css'), 'utf8');

const updatedTabsCss = `
/* =========================================
   LUXURY GALLERY FILTER TABS (SINGLE LINE)
   ========================================= */
.gallery-filters-wrapper {
  max-width: 1200px;
  margin: calc(var(--u) * 2) auto calc(var(--u) * 2.8);
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 0 20px;
}

.gallery-filters {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: calc(var(--u) * 0.7);
  background: #f4eee1;
  padding: calc(var(--u) * 0.5) calc(var(--u) * 0.7);
  border-radius: 40px;
  border: 1px solid #dfd4bf;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.04), 0 4px 18px rgba(30,43,25,.06);
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.gallery-filters::-webkit-scrollbar {
  display: none;
}

.gallery-tab {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--u) * 0.6);
  background: transparent;
  border: 1px solid transparent;
  color: #555d49;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: calc(var(--u) * 1.15);
  font-weight: 500;
  padding: calc(var(--u) * 0.75) calc(var(--u) * 1.5);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
}

.gallery-tab i {
  font-size: calc(var(--u) * 1.05);
  color: #928469;
  transition: color 0.2s ease;
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

.gallery-results-count {
  font-size: calc(var(--u) * 1.05);
  color: var(--muted);
  margin-top: calc(var(--u) * 1.2);
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .gallery-filters {
    justify-content: flex-start;
    border-radius: 30px;
    padding: 6px 8px;
    gap: 6px;
  }
  .gallery-tab {
    font-size: 13px;
    padding: 8px 14px;
    gap: 6px;
  }
}
`;

if (pagesCss.includes('LUXURY GALLERY FILTER TABS')) {
  const pIdx = pagesCss.indexOf('/* =========================================\n   LUXURY GALLERY FILTER TABS');
  pagesCss = pagesCss.substring(0, pIdx) + updatedTabsCss.trim() + '\n';
} else {
  pagesCss += '\n' + updatedTabsCss.trim() + '\n';
}

fs.writeFileSync(path.join(dist, 'pages.css'), pagesCss);
console.log('✓ pages.css updated with single-line nowrap alignment');

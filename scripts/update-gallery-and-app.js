const fs = require('fs');
const path = require('path');

// --- 1. Update gallery.html ---
const galleryPath = path.join(__dirname, '../dist/gallery.html');
let gHtml = fs.readFileSync(galleryPath, 'utf8');

// Contact updates
gHtml = gHtml.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
gHtml = gHtml.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
gHtml = gHtml.replace(/27821234567/g, '27792464998');

// Nav update
const oldNav = `<nav aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="kruger.html">Kruger</a><a href="gallery.html" class="active" aria-current="page">Gallery</a><a href="index.html#pricing">Pricing</a><a href="index.html#faq">FAQ</a><a href="contact.html">Contact</a></nav>`;
const newNav = `<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="team.html">Meet the Team</a>
  <a href="kruger.html">Safaris</a>
  <a href="gallery.html" class="active" aria-current="page">Gallery</a>
  <a href="index.html#pricing">Pricing</a>
  <a href="index.html#faq">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</nav>`;
gHtml = gHtml.replace(oldNav, newNav);

// Add new photos & video cards into the gallery grid
const newCards = `
<button class="gallery-photo-card" data-gallery="44" data-category="landscapes"><span class="photo-frame"><img src="assets/safari-media/safari-32.jpeg" alt="African Bush Sunset" loading="lazy"></span></button>
<button class="gallery-photo-card" data-gallery="45" data-category="wildlife"><span class="photo-frame"><img src="assets/safari-media/safari-33.jpeg" alt="Southern Ground Hornbill" loading="lazy"></span></button>
<button class="gallery-photo-card" data-gallery="46" data-category="moments"><span class="photo-frame"><img src="assets/safari-media/safari-34.jpeg" alt="Guests at Airport Departure with Michael" loading="lazy"></span></button>
<button class="gallery-photo-card" data-gallery="47" data-category="moments"><span class="photo-frame"><img src="assets/safari-media/safari-35.jpeg" alt="Lake Panic Hide Wildlife Viewing" loading="lazy"></span></button>
<button class="gallery-photo-card" data-gallery="48" data-category="videos"><span class="photo-frame"><video src="assets/safari-media/safari-video-4.mp4#t=0.5" preload="metadata" muted playsinline></video><span class="photo-play" aria-hidden="true">▶</span></span></button>
`;

if (!gHtml.includes('safari-32.jpeg')) {
  gHtml = gHtml.replace(
    '<button class="gallery-photo-card" data-gallery="43" data-category="videos"><span class="photo-frame"><video src="assets/safari-media/safari-video-3.mp4#t=0.5" preload="metadata" muted playsinline></video><span class="photo-play" aria-hidden="true">▶</span></span></button>',
    '<button class="gallery-photo-card" data-gallery="43" data-category="videos"><span class="photo-frame"><video src="assets/safari-media/safari-video-3.mp4#t=0.5" preload="metadata" muted playsinline></video><span class="photo-play" aria-hidden="true">▶</span></span></button>' + newCards
  );
}

// Quick links in footer
gHtml = gHtml.replace(
  '<a href="about.html">About Us</a><a href="kruger.html">Kruger Safari</a>',
  '<a href="about.html">About Us</a><a href="team.html">Meet the Team</a><a href="kruger.html">Safari Experiences</a>'
);

// Update dates in modal
const oldFormDates = `<input name="dates" type="date" required id="preferred-date-input" title="Click to choose your preferred departure date">`;
const newFormDates = `<select name="trip_departure">
  <option value="September 2-7, 2026 (5 Nights)" selected>September 2–7, 2026 (Confirmed Departure)</option>
  <option value="March 2027 Departure">March 2027 Departure (New Trip)</option>
  <option value="Custom Dates / Other">Custom Dates / Other Departure</option>
</select>`;
gHtml = gHtml.replace(oldFormDates, newFormDates);

fs.writeFileSync(galleryPath, gHtml);
console.log('Updated dist/gallery.html');

// --- 2. Update app.js ---
const appPath = path.join(__dirname, '../dist/app.js');
let aJs = fs.readFileSync(appPath, 'utf8');

// Contact updates
aJs = aJs.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
aJs = aJs.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
aJs = aJs.replace(/27821234567/g, '27792464998');

// Add new photos into photos array if not present
const newPhotosPush = `
photos.push(['assets/safari-media/safari-32.jpeg','African Bush Sunset','image']);
photos.push(['assets/safari-media/safari-33.jpeg','Southern Ground Hornbill','image']);
photos.push(['assets/safari-media/safari-34.jpeg','Guests at Airport with Michael Cotter','image']);
photos.push(['assets/safari-media/safari-35.jpeg','Lake Panic Hide Wildlife Viewing','image']);
photos.push(['assets/safari-media/safari-video-4.mp4','Safari Sighting — Video 4','video']);
`;

if (!aJs.includes('safari-32.jpeg')) {
  aJs = aJs.replace(
    "photos.push(['assets/safari-media/safari-video-3.mp4','Kruger Sighting — Video 3','video']);",
    "photos.push(['assets/safari-media/safari-video-3.mp4','Safari Sighting — Video 3','video']);" + newPhotosPush
  );
}

// Update Mobile Drawer
const oldDrawerNav = `<nav class="m-drawer-nav">
        <a href="\${isHome ? '#home' : 'index.html#home'}" class="\${isHome ? 'active' : ''}"><span>Home</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="about.html" class="\${isAbout ? 'active' : ''}"><span>About Us</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#kruger' : 'kruger.html'}" class="\${isKruger ? 'active' : ''}"><span>Kruger Safari</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="gallery.html" class="\${isGallery ? 'active' : ''}"><span>Gallery</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#pricing' : 'index.html#pricing'}"><span>Pricing</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#faq' : 'index.html#faq'}"><span>FAQ</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="safety.html" class="\${isSafety ? 'active' : ''}"><span>Safety &amp; Peace of Mind</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="contact.html" class="\${isContact ? 'active' : ''}"><span>Contact Us</span><i class="fa-solid fa-chevron-right"></i></a>
      </nav>`;

const newDrawerNav = `<nav class="m-drawer-nav">
        <a href="\${isHome ? '#home' : 'index.html#home'}" class="\${isHome ? 'active' : ''}"><span>Home</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="about.html" class="\${isAbout ? 'active' : ''}"><span>About Us</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="team.html" class="\${path.includes('team') ? 'active' : ''}"><span>Meet the Team</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#safaris' : 'kruger.html'}" class="\${isKruger ? 'active' : ''}"><span>Safari Experiences</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#departures' : 'kruger.html#departures'}"><span>Upcoming Departures (Sept '26 &amp; Mar '27)</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="gallery.html" class="\${isGallery ? 'active' : ''}"><span>Gallery</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#pricing' : 'index.html#pricing'}"><span>Pricing</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="\${isHome ? '#faq' : 'index.html#faq'}"><span>FAQ</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="safety.html" class="\${isSafety ? 'active' : ''}"><span>Safety &amp; Peace of Mind</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="contact.html" class="\${isContact ? 'active' : ''}"><span>Contact Us</span><i class="fa-solid fa-chevron-right"></i></a>
        <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" style="background:#25d366;color:#fff!important;border-radius:6px;padding:10px 14px;margin-top:8px"><span style="display:flex;align-items:center;gap:8px"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </nav>`;

aJs = aJs.replace(oldDrawerNav, newDrawerNav);

// Update chatbot questions & knowledge
aJs = aJs.replace(
  "Hello! I'm your Cotter Safaris assistant. Ask me anything about our Kruger tours, pricing, dates, accommodation, or guide qualifications!",
  "Hello! I'm your Cotter Safaris assistant. Ask me anything about our team, upcoming September 2026 or March 2027 departures, pricing, accommodation, or guide qualifications!"
);

// Add dates Q&A in chatbot knowledge
const oldQaDates = `{
    keywords:['date','dates','when','departure','season','month','september','october'],
    answer:'Tours operate during optimal dry-season game viewing months (typically between May and October). Contact us or Michael directly on WhatsApp to check upcoming departure dates and availability.'
  }`;

const newQaDates = `{
    keywords:['date','dates','when','departure','season','month','september','march','2026','2027'],
    answer:'We have two confirmed upcoming small-group departures: <strong>September 2nd–7th, 2026</strong> (5 Nights, confirmed departure, bookings open) and <strong>March 2027</strong> (Autumn Safari, registration open). Both departures include return flights from Cape Town and small-group guiding (5–10 guests).'
  },
  {
    keywords:['team','michael','bernette','lunay','guide','qualification','who'],
    answer:'Our team is led by <strong>Michael Cotter</strong> (FGASA Member 13154, Full Trails Guide &amp; 18-year bird/inflight photography specialist), <strong>Bernette Cotter</strong> (FGASA Member 13153, Field Guide with 18 years experience), and <strong>Lunay Mentoor</strong> (Office Administrator &amp; Tour Guide). You can view full credentials on our Meet the Team page!'
  }`;

aJs = aJs.replace(oldQaDates, newQaDates);

fs.writeFileSync(appPath, aJs);
console.log('Updated dist/app.js');

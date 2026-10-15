const fs = require('fs');
const path = require('path');

const krugerPath = path.join(__dirname, '../dist/kruger.html');
let html = fs.readFileSync(krugerPath, 'utf8');

// 1. Contact updates
html = html.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
html = html.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
html = html.replace(/27821234567/g, '27792464998');

// 2. Navigation update
const oldNav = `<nav aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="kruger.html" class="active" aria-current="page">Kruger</a><a href="gallery.html">Gallery</a><a href="index.html#pricing">Pricing</a><a href="index.html#faq">FAQ</a><a href="contact.html">Contact</a></nav>`;
const newNav = `<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="team.html">Meet the Team</a>
  <a href="kruger.html" class="active" aria-current="page">Safaris</a>
  <a href="#departures">Departures</a>
  <a href="gallery.html">Gallery</a>
  <a href="index.html#pricing">Pricing</a>
  <a href="index.html#faq">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</nav>`;
html = html.replace(oldNav, newNav);

// 3. Update titles & intro to reflect broader safari experiences
html = html.replace(
  '<title>Kruger Safari Experience | Cotter Safaris</title>',
  '<title>Safari Experiences &amp; Upcoming Departures | Cotter Safaris</title>'
);
html = html.replace(
  '<p class="eyebrow" data-edit="kruger-page-eyebrow">FIVE-NIGHT KRUGER EXPERIENCE</p>\n    <h1 data-edit="kruger-page-title">The Kruger Experience</h1>',
  '<p class="eyebrow" data-edit="kruger-page-eyebrow">FIVE-NIGHT SIGNATURE SAFARI EXPERIENCE</p>\n    <h1 data-edit="kruger-page-title">Safari Experiences</h1>'
);

// 4. Add Departures Schedule Section
const departuresSection = `
<!-- Upcoming Safari Departures Section -->
<section class="upcoming-departures-section cream" id="departures" style="border-top:1px solid #ebdcc5">
  <div class="section-heading">
    <p class="eyebrow">JOIN AN UPCOMING EXPEDITION</p>
    <h2>Confirmed &amp; Upcoming Safari Departures</h2>
    <p>Reserve your place on our carefully paced, small-group departures (5 to 10 guests) guided by Michael Cotter.</p>
  </div>

  <div class="departures-grid">
    <!-- September 2-7, 2026 -->
    <div class="departure-card">
      <span class="departure-status-badge">Confirmed Departure · Booking Open</span>
      <div class="departure-date-header">
        <div class="departure-cal-icon"><i class="fa-regular fa-calendar-check"></i></div>
        <div>
          <div class="departure-dates">2nd – 7th September 2026</div>
          <div class="departure-subtitle">5 Nights / 6 Days · Spring Wilderness Safari</div>
        </div>
      </div>
      <p class="departure-desc">
        Our confirmed Spring safari departure. September is famous for high predator activity, dry season waterhole gatherings, and comfortable, moderate weather. Fully hosted from Cape Town flight to return.
      </p>
      <ul class="departure-perks">
        <li><i class="fa-solid fa-circle-check"></i> Return flights from Cape Town included</li>
        <li><i class="fa-solid fa-circle-check"></i> Skukuza Safari Lodge private rooms</li>
        <li><i class="fa-solid fa-circle-check"></i> Guided by Michael Cotter (FGASA 13154)</li>
        <li><i class="fa-solid fa-circle-check"></i> Luggage assistance &amp; senior-friendly pacing</li>
      </ul>
      <div class="departure-actions">
        <button class="button green" data-enquire><span>Book Sept 2–7 Trip</span><svg><use href="#arrow"/></svg></button>
        <a href="https://wa.me/27792464998?text=Hello%20Michael,%20I'm%20interested%20in%20the%20September%202-7%202026%20safari." target="_blank" rel="noopener" class="button outline" style="border-color:#25d366;color:#1e2b19">
          <i class="fa-brands fa-whatsapp" style="color:#25d366"></i> WhatsApp Michael
        </a>
      </div>
    </div>

    <!-- March 2027 -->
    <div class="departure-card">
      <span class="departure-status-badge announced">New Trip · Registration Open</span>
      <div class="departure-date-header">
        <div class="departure-cal-icon"><i class="fa-solid fa-compass"></i></div>
        <div>
          <div class="departure-dates">March 2027 Departure</div>
          <div class="departure-subtitle">5 Nights / 6 Days · Autumn Wildlife Safari</div>
        </div>
      </div>
      <p class="departure-desc">
        Announcing our new March 2027 safari departure. Experience lush post-summer landscapes, active birdlife migrations, and brilliant green-season photographic lighting with personalized guidance.
      </p>
      <ul class="departure-perks">
        <li><i class="fa-solid fa-circle-check"></i> Return scheduled Cape Town flights included</li>
        <li><i class="fa-solid fa-circle-check"></i> All park permits, conservation fees &amp; game drives</li>
        <li><i class="fa-solid fa-circle-check"></i> Wildlife &amp; bird photography coaching</li>
        <li><i class="fa-solid fa-circle-check"></i> Inquiries and early bookings now open</li>
      </ul>
      <div class="departure-actions">
        <button class="button" data-enquire><span>Reserve March 2027</span><svg><use href="#arrow"/></svg></button>
        <a href="https://wa.me/27792464998?text=Hello%20Michael,%20I'm%20interested%20in%20the%20March%202027%20safari." target="_blank" rel="noopener" class="button outline" style="border-color:#25d366;color:#1e2b19">
          <i class="fa-brands fa-whatsapp" style="color:#25d366"></i> WhatsApp Michael
        </a>
      </div>
    </div>
  </div>
</section>
`;

if (!html.includes('id="departures"')) {
  html = html.replace('<section class="page-bottom-banner">', departuresSection + '\n<section class="page-bottom-banner">');
}

// 5. Add 4th video into the field-videos section
const oldVideoGrid = `<div class="field-video-grid"><video src="assets/safari-media/safari-video-1.mp4#t=0.5" controls preload="metadata" playsinline></video><video src="assets/safari-media/safari-video-2.mp4#t=0.5" controls preload="metadata" playsinline></video><video src="assets/safari-media/safari-video-3.mp4#t=0.5" controls preload="metadata" playsinline></video></div>`;
const newVideoGrid = `<div class="field-video-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
  <video src="assets/safari-media/safari-video-1.mp4#t=0.5" controls preload="metadata" playsinline></video>
  <video src="assets/safari-media/safari-video-2.mp4#t=0.5" controls preload="metadata" playsinline></video>
  <video src="assets/safari-media/safari-video-3.mp4#t=0.5" controls preload="metadata" playsinline></video>
  <video src="assets/safari-media/safari-video-4.mp4#t=0.5" controls preload="metadata" playsinline></video>
</div>`;
html = html.replace(oldVideoGrid, newVideoGrid);

// 6. Update Quick Links in Footer
html = html.replace(
  '<a href="about.html">About Us</a><a href="kruger.html">Kruger Safari</a>',
  '<a href="about.html">About Us</a><a href="team.html">Meet the Team</a><a href="kruger.html">Safari Experiences</a>'
);

// 7. Update dates in modal
const oldFormDates = `<input name="dates" type="date" required id="preferred-date-input" title="Click to choose your preferred departure date">`;
const newFormDates = `<select name="trip_departure">
  <option value="September 2-7, 2026 (5 Nights)" selected>September 2–7, 2026 (Confirmed Departure)</option>
  <option value="March 2027 Departure">March 2027 Departure (New Trip)</option>
  <option value="Custom Dates / Other">Custom Dates / Other Departure</option>
</select>`;
html = html.replace(oldFormDates, newFormDates);

fs.writeFileSync(krugerPath, html);
// Also save as safaris.html
fs.writeFileSync(path.join(__dirname, '../dist/safaris.html'), html);
console.log('Successfully updated dist/kruger.html & dist/safaris.html!');

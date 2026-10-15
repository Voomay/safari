const fs = require('fs');
const path = require('path');

const contactPath = path.join(__dirname, '../dist/contact.html');
let html = fs.readFileSync(contactPath, 'utf8');

// 1. Contact updates
html = html.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
html = html.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
html = html.replace(/27821234567/g, '27792464998');

// 2. Navigation update
const oldNav = `<nav aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="kruger.html">Kruger</a><a href="gallery.html">Gallery</a><a href="index.html#pricing">Pricing</a><a href="index.html#faq">FAQ</a><a href="contact.html" class="active" aria-current="page">Contact</a></nav>`;
const newNav = `<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="team.html">Meet the Team</a>
  <a href="kruger.html">Safaris</a>
  <a href="gallery.html">Gallery</a>
  <a href="index.html#pricing">Pricing</a>
  <a href="index.html#faq">FAQ</a>
  <a href="contact.html" class="active" aria-current="page">Contact</a>
  <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</nav>`;
html = html.replace(oldNav, newNav);

// 3. Add direct WhatsApp contact method card
const whatsappMethod = `
<div class="contact-method">
  <span class="contact-icon" style="background:#25d366;border-color:#20ba5a;color:#fff"><i class="fa-brands fa-whatsapp"></i></span>
  <div>
    <h3>WhatsApp Us</h3>
    <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20trips." target="_blank" rel="noopener" style="color:#1b9949;font-weight:600">079 246 4998 (Instant Chat ↗)</a>
  </div>
</div>
`;

if (!html.includes('WhatsApp Us</h3>')) {
  html = html.replace('<div class="contact-method"><span class="contact-icon"><i class="fa-solid fa-location-dot">', whatsappMethod + '\n<div class="contact-method"><span class="contact-icon"><i class="fa-solid fa-location-dot">');
}

// 4. Update Quick Links in Footer
html = html.replace(
  '<a href="about.html">About Us</a><a href="kruger.html">Kruger Safari</a>',
  '<a href="about.html">About Us</a><a href="team.html">Meet the Team</a><a href="kruger.html">Safari Experiences</a>'
);

// 5. Update dates in modal
const oldFormDates = `<input name="dates" type="date" required id="preferred-date-input" title="Click to choose your preferred departure date">`;
const newFormDates = `<select name="trip_departure">
  <option value="September 2-7, 2026 (5 Nights)" selected>September 2–7, 2026 (Confirmed Departure)</option>
  <option value="March 2027 Departure">March 2027 Departure (New Trip)</option>
  <option value="Custom Dates / Other">Custom Dates / Other Departure</option>
</select>`;
html = html.replace(oldFormDates, newFormDates);

fs.writeFileSync(contactPath, html);
console.log('Successfully updated dist/contact.html!');

const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, '../dist/about.html');
let html = fs.readFileSync(aboutPath, 'utf8');

// 1. Contact updates
html = html.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
html = html.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
html = html.replace(/27821234567/g, '27792464998');

// 2. Navigation update
const oldNav = `<nav aria-label="Main navigation"><a href="index.html">Home</a><a href="about.html" class="active" aria-current="page">About</a><a href="kruger.html">Kruger</a><a href="gallery.html">Gallery</a><a href="index.html#pricing">Pricing</a><a href="index.html#faq">FAQ</a><a href="contact.html">Contact</a></nav>`;
const newNav = `<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html" class="active" aria-current="page">About</a>
  <a href="team.html">Meet the Team</a>
  <a href="kruger.html">Safaris</a>
  <a href="gallery.html">Gallery</a>
  <a href="index.html#pricing">Pricing</a>
  <a href="index.html#faq">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</nav>`;
html = html.replace(oldNav, newNav);

// 3. Phrasing updates
html = html.replace(
  'About Cotter Safaris and Michael Cotter — Full Trails Guide, FGASA Level 2 and wildlife photographer offering small-group Kruger safaris.',
  'About Cotter Safaris — FGASA accredited trails guides, wildlife photographers, and field leaders offering premier African safari experiences.'
);
html = html.replace(
  'Founded to make the Kruger National Park accessible, comfortable, and deeply rewarding for small groups who appreciate personally guided wilderness journeys.',
  'Founded to make premier African wilderness destinations accessible, comfortable, and deeply rewarding for small groups who appreciate personally guided safari experiences.'
);
html = html.replace(
  '<a class="button" href="kruger.html"><span data-edit="about-kruger-btn">Explore Kruger Safari</span><svg><use href="#arrow"/></svg></a>',
  '<a class="button" href="kruger.html"><span data-edit="about-kruger-btn">Explore Safari Experiences</span><svg><use href="#arrow"/></svg></a>'
);
html = html.replace(
  'Discover the Five-Night Kruger Package',
  'Discover Our Five-Night Safari Experiences'
);

// 4. Add Meet the Team feature section into about.html
const teamSection = `
  <!-- Meet The Team Section in About -->
  <div style="margin-top:calc(var(--u)*4);border-top:1px solid #e7dfcf;padding-top:calc(var(--u)*3.5)">
    <div class="section-heading" style="text-align:left;margin-bottom:calc(var(--u)*2.2)">
      <p class="eyebrow">OUR FIELD LEADERS &amp; ADMINISTRATORS</p>
      <h2>Meet the Team</h2>
      <p>Combining 36+ years of guiding wisdom, photographic mentorship, and personalized concierge care.</p>
    </div>
    <div class="team-grid-3">
      <!-- Michael -->
      <div class="team-member-card">
        <div class="team-member-photo-wrap">
          <img src="assets/team/michael-cotter.jpeg" alt="Michael Cotter" loading="lazy">
          <span class="team-role-pill">Lead Guide</span>
        </div>
        <div class="team-member-body">
          <h3>Michael Cotter</h3>
          <span class="team-fgasa-badge"><i class="fa-solid fa-certificate"></i> FGASA Member 13154 · Trails Guide</span>
          <p class="team-member-bio">18 years of experience as a photographic guide where I specialize in bird photography, training and high speed inflight photography.</p>
          <a href="team.html" class="text-link" style="margin-top:auto">Full Credentials <svg><use href="#arrow"/></svg></a>
        </div>
      </div>
      <!-- Bernette -->
      <div class="team-member-card">
        <div class="team-member-photo-wrap">
          <img src="assets/team/bernette-cotter.jpeg" alt="Bernette Cotter" loading="lazy">
          <span class="team-role-pill">Field Guide</span>
        </div>
        <div class="team-member-body">
          <h3>Bernette Cotter</h3>
          <span class="team-fgasa-badge"><i class="fa-solid fa-certificate"></i> FGASA Member 13153 · Field Guide</span>
          <p class="team-member-bio">18 years’ experience in field guiding, sharing passion for nature, animal behavior, and warm hospitality.</p>
          <a href="team.html" class="text-link" style="margin-top:auto">Full Credentials <svg><use href="#arrow"/></svg></a>
        </div>
      </div>
      <!-- Lunay -->
      <div class="team-member-card">
        <div class="team-member-photo-wrap">
          <img src="assets/team/lunay-mentoor.jpeg" alt="Lunay Mentoor" loading="lazy">
          <span class="team-role-pill">Administrator &amp; Guide</span>
        </div>
        <div class="team-member-body">
          <h3>Lunay Mentoor</h3>
          <span class="team-fgasa-badge"><i class="fa-solid fa-compass"></i> Office Administrator &amp; Tour Guide</span>
          <p class="team-member-bio">Office administrator and Tour guide coordinating guest journeys, flights, and reservations with warm professionalism.</p>
          <a href="team.html" class="text-link" style="margin-top:auto">Full Credentials <svg><use href="#arrow"/></svg></a>
        </div>
      </div>
    </div>
  </div>
`;

if (!html.includes('OUR FIELD LEADERS &amp; ADMINISTRATORS')) {
  html = html.replace('</section>\n\n<section class="page-bottom-banner">', teamSection + '\n</section>\n\n<section class="page-bottom-banner">');
}

// 5. Update Quick Links in Footer
html = html.replace(
  '<a href="about.html">About Us</a><a href="kruger.html">Kruger Safari</a>',
  '<a href="about.html">About Us</a><a href="team.html">Meet the Team</a><a href="kruger.html">Safari Experiences</a>'
);

// 6. Update dates in modal
const oldFormDates = `<input name="dates" type="date" required id="preferred-date-input" title="Click to choose your preferred departure date">`;
const newFormDates = `<select name="trip_departure">
  <option value="September 2-7, 2026 (5 Nights)" selected>September 2–7, 2026 (Confirmed Departure)</option>
  <option value="March 2027 Departure">March 2027 Departure (New Trip)</option>
  <option value="Custom Dates / Other">Custom Dates / Other Departure</option>
</select>`;
html = html.replace(oldFormDates, newFormDates);

fs.writeFileSync(aboutPath, html);
console.log('Successfully updated dist/about.html!');

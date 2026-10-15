const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update contact details across the file
html = html.replace(/info@cottersafaris\.co\.za/g, 'admin@cottersafaris.co.za');
html = html.replace(/\+27\s*82\s*123\s*4567/g, '079 246 4998');
html = html.replace(/27821234567/g, '27792464998');

// 2. Update Header Navigation: Add Meet the Team & WhatsApp tab, change Kruger to Safaris
const oldNav = `<nav aria-label="Main navigation"><a href="#home" class="active">Home</a><a href="about.html">About</a><a href="#kruger">Kruger</a><a href="gallery.html">Gallery</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="contact.html">Contact</a></nav>`;
const newNav = `<nav aria-label="Main navigation">
  <a href="#home" class="active">Home</a>
  <a href="about.html">About</a>
  <a href="team.html">Meet the Team</a>
  <a href="#safaris">Safaris</a>
  <a href="#departures">Departures</a>
  <a href="gallery.html">Gallery</a>
  <a href="#pricing">Pricing</a>
  <a href="#faq">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="https://wa.me/27792464998?text=Hello%20Cotter%20Safaris,%20I%20would%20like%20to%20enquire%20about%20your%20safari%20packages." target="_blank" rel="noopener" class="nav-whatsapp-tab"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</nav>`;
html = html.replace(oldNav, newNav);

// 3. Update Hero text & CTAs: replace "Kruger" references with "Safari"
html = html.replace(
  'Unforgettable, tailor-made safari journeys and personally guided Kruger experiences that bring you closer to Africa’s incredible wildlife, breathtaking landscapes and authentic culture.',
  'Unforgettable, tailor-made safari journeys and personally guided safari experiences that bring you closer to Africa’s incredible wildlife, breathtaking landscapes and authentic culture.'
);
html = html.replace(
  '<a class="button" href="#kruger"><span data-edit="hero-explore">Explore Kruger Safaris</span><svg><use href="#arrow"/></svg></a>',
  '<a class="button" href="#safaris"><span data-edit="hero-explore">Explore Safari Experiences</span><svg><use href="#arrow"/></svg></a>'
);

// 4. Update section experiences header: change id to safaris, heading to Safari Experiences
html = html.replace(
  '<section class="experiences cream" id="kruger">',
  '<section class="experiences cream" id="safaris">'
);
html = html.replace(
  '<p class="eyebrow" data-edit="experiences-eyebrow">KRUGER NATIONAL PARK &amp; BEYOND</p><h2 data-edit="experiences-title">Kruger Safari Experiences</h2>',
  '<p class="eyebrow" data-edit="experiences-eyebrow">WILDERNESS RESERVES &amp; BEYOND</p><h2 data-edit="experiences-title">Safari Experiences</h2>'
);

// 5. Add Upcoming Departures section (September 2-7, 2026 & March 2027) before Pricing
const departuresSection = `
<!-- Upcoming Safari Departures Section -->
<section class="upcoming-departures-section cream" id="departures">
  <div class="section-heading">
    <p class="eyebrow" data-edit="dep-eyebrow">SCHEDULED GROUP DEPARTURES</p>
    <h2 data-edit="dep-title">Upcoming Safari Dates</h2>
    <p data-edit="dep-desc">Guaranteed small-group departures (5 to 10 guests) featuring return Cape Town flights, luxury transport, en-suite lodging, and personal trails guiding.</p>
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
        Join Michael Cotter for our premier Spring departure. September offers optimal game viewing conditions as animals congregate along river systems, mild sunny days, and vibrant predator activity. Small-group comfort designed specifically for older travellers.
      </p>
      <ul class="departure-perks">
        <li><i class="fa-solid fa-circle-check"></i> Return scheduled flights from Cape Town included</li>
        <li><i class="fa-solid fa-circle-check"></i> 5 Nights private en-suite rooms at Skukuza Safari Lodge</li>
        <li><i class="fa-solid fa-circle-check"></i> 2 Daily game drives led personally by Michael Cotter (FGASA 13154)</li>
        <li><i class="fa-solid fa-circle-check"></i> Strict small-group limit (5–10 guests maximum)</li>
      </ul>
      <div class="departure-actions">
        <button class="button green" data-enquire><span>Book September 2026</span><svg><use href="#arrow"/></svg></button>
        <a href="https://wa.me/27792464998?text=Hello%20Michael,%20I'm%20interested%20in%20the%20September%202-7%202026%20safari%20trip." target="_blank" rel="noopener" class="button outline" style="border-color:#25d366;color:#1e2b19">
          <i class="fa-brands fa-whatsapp" style="color:#25d366"></i> WhatsApp Details
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
        Experience Africa during the lush, beautiful autumn transition. March features clear skies, flourishing wilderness scenery, phenomenal birdlife, and prime photographic lighting with expert coaching from our 18-year photographic specialist guide.
      </p>
      <ul class="departure-perks">
        <li><i class="fa-solid fa-circle-check"></i> Return scheduled flights from Cape Town included</li>
        <li><i class="fa-solid fa-circle-check"></i> Premium safari lodge accommodation &amp; all conservation permits</li>
        <li><i class="fa-solid fa-circle-check"></i> Specialized photographic coaching &amp; dangerous game tracking</li>
        <li><i class="fa-solid fa-circle-check"></i> Registration &amp; preferred room bookings now open</li>
      </ul>
      <div class="departure-actions">
        <button class="button" data-enquire><span>Reserve for March 2027</span><svg><use href="#arrow"/></svg></button>
        <a href="https://wa.me/27792464998?text=Hello%20Michael,%20I'm%20interested%20in%20the%20March%202027%20safari%20trip." target="_blank" rel="noopener" class="button outline" style="border-color:#25d366;color:#1e2b19">
          <i class="fa-brands fa-whatsapp" style="color:#25d366"></i> WhatsApp Details
        </a>
      </div>
    </div>
  </div>
</section>
`;

if (!html.includes('id="departures"')) {
  html = html.replace('<!-- Pricing Section -->', departuresSection + '\n<!-- Pricing Section -->');
}

// 6. Add Meet the Team Showcase card before Philosophy
const teamShowcase = `
<!-- Meet The Team Showcase Section -->
<section class="team-showcase cream" style="padding:calc(var(--u)*3.8) 6.4%;border-top:1px solid #ebdcc5">
  <div class="section-heading" style="margin-bottom:calc(var(--u)*2)">
    <p class="eyebrow">GUIDED BY ACCREDITED PROFESSIONALS</p>
    <h2>Meet Your Safari Team</h2>
    <p>Every Cotter Safaris journey is guided by certified FGASA professionals and experienced wildlife specialists.</p>
  </div>
  <div class="team-grid-3">
    <div class="team-member-card">
      <div class="team-member-photo-wrap">
        <img src="assets/team/michael-cotter.jpeg" alt="Michael Cotter" loading="lazy">
        <span class="team-role-pill">Lead Guide</span>
      </div>
      <div class="team-member-body">
        <h3>Michael Cotter</h3>
        <span class="team-fgasa-badge"><i class="fa-solid fa-certificate"></i> FGASA Member 13154 · Trails Guide</span>
        <p class="team-member-bio">18 years of experience as a photographic guide where I specialize in bird photography, training and high speed inflight photography.</p>
        <a href="team.html" class="text-link" style="margin-top:auto">View Full Profile <svg><use href="#arrow"/></svg></a>
      </div>
    </div>
    <div class="team-member-card">
      <div class="team-member-photo-wrap">
        <img src="assets/team/bernette-cotter.jpeg" alt="Bernette Cotter" loading="lazy">
        <span class="team-role-pill">Field Guide &amp; Host</span>
      </div>
      <div class="team-member-body">
        <h3>Bernette Cotter</h3>
        <span class="team-fgasa-badge"><i class="fa-solid fa-certificate"></i> FGASA Member 13153 · Field Guide</span>
        <p class="team-member-bio">18 years’ experience in field guiding, providing attentive personal care, bush interpretation, and warm hospitality.</p>
        <a href="team.html" class="text-link" style="margin-top:auto">View Full Profile <svg><use href="#arrow"/></svg></a>
      </div>
    </div>
    <div class="team-member-card">
      <div class="team-member-photo-wrap">
        <img src="assets/team/lunay-mentoor.jpeg" alt="Lunay Mentoor" loading="lazy">
        <span class="team-role-pill">Operations &amp; Guide</span>
      </div>
      <div class="team-member-body">
        <h3>Lunay Mentoor</h3>
        <span class="team-fgasa-badge"><i class="fa-solid fa-compass"></i> Administrator &amp; Tour Guide</span>
        <p class="team-member-bio">Office administrator and Tour guide managing flights, logistics, and guest bookings with meticulous attention to detail.</p>
        <a href="team.html" class="text-link" style="margin-top:auto">View Full Profile <svg><use href="#arrow"/></svg></a>
      </div>
    </div>
  </div>
  <div style="text-align:center;margin-top:calc(var(--u)*2.5)">
    <a href="team.html" class="button green"><span>Explore Full Team Credentials</span><svg><use href="#arrow"/></svg></a>
  </div>
</section>
`;

if (!html.includes('class="team-showcase')) {
  html = html.replace('<section class="philosophy" id="philosophy">', teamShowcase + '\n<section class="philosophy" id="philosophy">');
}

// 7. Update Testimonials: Add Jillian Davis Review
const oldTestimonial = `<section class="testimonials cream"><svg class="watermark testimonial-tree"><use href="#tree"/></svg><div class="testimonials-title"><p class="eyebrow" data-edit="testimonials-eyebrow">WHAT OUR TRAVELLERS SAY</p><h2 data-edit="testimonials-title">Client Experiences</h2></div><div class="quote-wrap"><span class="quote-mark">“</span><blockquote><p data-edit="quote">“An absolutely unforgettable experience! Everything was so well organised and the wildlife sightings were incredible. We couldn’t have asked for a better safari experience. Highly recommended!”</p><cite data-edit="quote-author">— Recent Traveller</cite></blockquote><span class="quote-dots" aria-hidden="true">● · · ·</span></div></section>`;

const newTestimonial = `
<section class="testimonials cream">
  <svg class="watermark testimonial-tree"><use href="#tree"/></svg>
  <div class="testimonials-title">
    <p class="eyebrow" data-edit="testimonials-eyebrow">WHAT OUR TRAVELLERS SAY</p>
    <h2 data-edit="testimonials-title">Client Experiences</h2>
  </div>
  <div class="testimonials-grid-2">
    <!-- Jillian Davis Review -->
    <div class="testimonial-card-gold">
      <div class="rating-pill">
        <span class="stars">★★★★★</span>
        <span class="rating-score">10 / 10 Rating</span>
      </div>
      <span class="quote-mark">“</span>
      <blockquote>
        <p style="font-size:calc(var(--u)*1.22);font-weight:500;color:#283421;margin-bottom:8px">
          “Thanks to cotter safaris for the amazing KNP trip - 10/10 for everything. ( The rest was said in person)”
        </p>
        <cite style="color:#b29360;font-weight:600">— Jillian Davis</cite>
      </blockquote>
    </div>

    <!-- Traveller Review -->
    <div class="testimonial-card-gold">
      <div class="rating-pill">
        <span class="stars">★★★★★</span>
        <span class="rating-score">Verified Guest</span>
      </div>
      <span class="quote-mark">“</span>
      <blockquote>
        <p style="font-size:calc(var(--u)*1.22);font-weight:500;color:#283421;margin-bottom:8px">
          “An absolutely unforgettable experience! Everything was so well organised and the wildlife sightings were incredible. We couldn’t have asked for a better safari experience.”
        </p>
        <cite style="color:#b29360;font-weight:600">— Evergreen Val de Vie Traveller</cite>
      </blockquote>
    </div>
  </div>
</section>
`;
html = html.replace(oldTestimonial, newTestimonial);

// 8. Update Quick Links in Footer
html = html.replace(
  '<a href="about.html">About Us</a><a href="kruger.html">Kruger Safari</a>',
  '<a href="about.html">About Us</a><a href="team.html">Meet the Team</a><a href="kruger.html">Safari Experiences</a>'
);

// 9. Update modal form options to include September 2026 and March 2027
const oldFormDates = `<label class="form-field">
          <span class="field-label">Preferred Date <span class="req">*</span></span>
          <div class="field-input-wrap">
            <i class="fa-regular fa-calendar-days field-icon"></i>
            <input name="dates" type="date" required id="preferred-date-input" title="Click to choose your preferred departure date">
          </div>
        </label>`;

const newFormDates = `<label class="form-field">
          <span class="field-label">Preferred Trip / Departure <span class="req">*</span></span>
          <div class="field-input-wrap">
            <i class="fa-regular fa-calendar-days field-icon"></i>
            <select name="trip_departure">
              <option value="September 2-7, 2026 (5 Nights)" selected>September 2–7, 2026 (Confirmed Departure)</option>
              <option value="March 2027 Departure">March 2027 Departure (New Trip)</option>
              <option value="Custom Dates / Other">Custom Dates / Other Departure</option>
            </select>
          </div>
        </label>`;
html = html.replace(oldFormDates, newFormDates);

fs.writeFileSync(indexPath, html);
console.log('Successfully updated dist/index.html!');

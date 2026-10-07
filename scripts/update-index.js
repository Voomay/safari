const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update Hero Section
const heroOld = /<section class="hero" id="home">[\s\S]*?<\/section>/;
const heroNew = `<section class="hero" id="home">
  <div class="hero-slider" aria-hidden="true">
    <div class="hero-slide active" style="background-image: linear-gradient(90deg, #000a 0%, #0005 50%, #0002 80%), url('assets/hero.webp');"></div>
    <div class="hero-slide" style="background-image: linear-gradient(90deg, #000a 0%, #0005 50%, #0002 80%), url('assets/safari-media/safari-04.jpeg');"></div>
    <div class="hero-slide" style="background-image: linear-gradient(90deg, #000a 0%, #0005 50%, #0002 80%), url('assets/safari-media/safari-20.jpeg');"></div>
    <div class="hero-slide" style="background-image: linear-gradient(90deg, #000a 0%, #0005 50%, #0002 80%), url('assets/safari-media/safari-01.jpeg');"></div>
    <div class="hero-slide" style="background-image: linear-gradient(90deg, #000a 0%, #0005 50%, #0002 80%), url('assets/safari-media/safari-30.jpeg');"></div>
  </div>
  <div class="hero-content">
    <p class="eyebrow" data-edit="hero-eyebrow">AUTHENTIC AFRICAN SAFARIS</p>
    <h1><span data-edit="hero-title">Discover Africa.</span><br><em data-edit="hero-script">Experience</em> <span data-edit="hero-line2">the Wild.</span></h1>
    <p class="hero-description" data-edit="hero-description">Unforgettable, tailor-made safari journeys and personally guided Kruger experiences that bring you closer to Africa’s incredible wildlife, breathtaking landscapes and authentic culture.</p>
    <div class="buttons">
      <a class="button" href="#kruger"><span data-edit="hero-explore">Explore Kruger Safaris</span><svg><use href="#arrow"/></svg></a>
      <button class="button outline" data-enquire data-edit="hero-plan">Plan Your Safari</button>
    </div>
  </div>
  <div class="hero-slider-nav">
    <button class="hero-nav-arrow prev" id="hero-prev" aria-label="Previous slide">‹</button>
    <div class="hero-dots" id="hero-dots">
      <button class="hero-dot active" data-slide="0" aria-label="Slide 1"></button>
      <button class="hero-dot" data-slide="1" aria-label="Slide 2"></button>
      <button class="hero-dot" data-slide="2" aria-label="Slide 3"></button>
      <button class="hero-dot" data-slide="3" aria-label="Slide 4"></button>
      <button class="hero-dot" data-slide="4" aria-label="Slide 5"></button>
    </div>
    <button class="hero-nav-arrow next" id="hero-next" aria-label="Next slide">›</button>
  </div>
  <a class="scroll-cue" href="#about" aria-label="Discover our story"><span></span></a>
</section>`;

html = html.replace(heroOld, heroNew);

// 2. Update Pricing Card in index.html
const priceTagOld = /<div class="price-tag" data-edit="price-amount">[\s\S]*?<\/div>\s*<div class="price-sub" data-edit="price-per">[\s\S]*?<\/div>/;
const priceBoxNew = `<div class="price-box">
        <div class="price-eyebrow">SIGNATURE ALL-INCLUSIVE PACKAGE</div>
        <div class="price-row">
          <span class="price-from">FROM</span>
          <span class="price-amount" data-edit="price-amount">R38,950</span>
          <span class="price-period" data-edit="price-per">/ person sharing</span>
        </div>
        <div class="price-meta">
          <span>🗓 5 Nights · 6 Days</span>
          <span>✈ Cape Town Flights Included</span>
          <span>🏡 Skukuza Safari Lodge</span>
        </div>
      </div>`;
html = html.replace(priceTagOld, priceBoxNew);

// 3. Update FAQ Section in index.html to 2-column layout with images
const faqSectionOld = /<section class="faq-section" id="faq">[\s\S]*?<\/section>/;
const faqSectionNew = `<section class="faq-section" id="faq">
  <div class="section-heading">
    <p class="eyebrow" data-edit="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
    <h2 data-edit="faq-title">Everything You Need to Know</h2>
    <p data-edit="faq-description">Have a question about our Kruger tours? Here are answers to the most common questions from our travellers.</p>
  </div>
  <div class="faq-split-layout">
    <div class="faq-accordion-col">
      <details class="faq-item" open>
        <summary class="faq-summary"><span>Is this trip suitable for older guests?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Yes, absolutely. The tour is specifically designed for older travellers and small groups who want a comfortable, organised, slower-paced Kruger experience without feeling rushed or overwhelmed.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>How physically demanding is the trip?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Very little physical activity is required. The safari is vehicle-based in comfortable transport, with scheduled rest periods between the morning and afternoon drives. Assistance with luggage is always provided.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>Can guests with limited mobility join?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Yes, by prior arrangement. Walkers, wheelchairs, and mobility aids can be accommodated where possible. We ask that guests disclose any mobility needs prior to booking so that suitable arrangements can be confirmed.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>Where do guests stay and are rooms private?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Guests stay in private en-suite rooms at Skukuza Safari Lodge, located directly inside the Kruger National Park. The lodge offers contemporary safari comfort, dining options, and tranquil grounds. Pricing is available for single travellers and guests sharing.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>How many people are in a group?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">The minimum group size is five guests, and the maximum is ten guests. This ensures personal attention, comfortable seating on game drives, and good company throughout the journey.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>Are flights and transfers included?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Yes. Cotter Safaris arranges the return flights from Cape Town to either Kruger Mpumalanga International Airport (KMIA) or Skukuza Airport, along with all local airport transfers in passenger-licensed transport.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>How many game drives are included each day?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">On full safari days, there are two scheduled game drives: a morning drive from approximately 06:00 to 09:00, and an afternoon drive from approximately 14:30 to 18:00. Guests can also choose to rest at the lodge if they prefer to skip a drive.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>Does Michael Cotter guide the tours personally?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Yes! Michael Cotter personally hosts and guides the safari. He holds FGASA Level 2 and Full Trails Guide qualifications (having qualified under SKS guide Bruce Lawson), with expert knowledge of dangerous game, tracking, birding, and wildlife photography.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>Are meals and drinks included?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">Hotel buffet breakfasts are included daily. Optional buffet dinners and lunches are available at the lodge or camp rest stops at additional cost, giving guests flexibility with their meals.</div>
      </details>
      <details class="faq-item">
        <summary class="faq-summary"><span>What is the price and how do I book?</span><span class="faq-icon">+</span></summary>
        <div class="faq-answer">The 5-night package starts from R38,950 per person sharing. Contact Cotter Safaris directly by phone (+27 82 123 4567), email, or via our online enquiry form to request dates, brochure information, and payment details.</div>
      </details>
    </div>

    <div class="faq-visual-col">
      <div class="faq-feature-card">
        <div class="faq-feature-img-wrap">
          <img src="assets/safari-media/safari-30.jpeg" alt="Happy senior guests on a Cotter Safari overlooking the Sabie River bridge" loading="lazy">
          <span class="faq-img-badge">Personalised Small-Group Tours</span>
        </div>
        <div class="faq-feature-body">
          <h3>Have Questions About Your Travel?</h3>
          <p>Every group has unique needs. Whether you want to discuss flights, medical or mobility arrangements, or custom dates, Michael Cotter is always happy to guide you.</p>
          <div class="faq-cta-box">
            <a href="https://wa.me/27821234567?text=Hello%20Michael,%20I%20have%20a%20question%20about%20the%20Kruger%20safari." target="_blank" rel="noopener" class="button green" style="width:100%">
              <span>Chat with Michael on WhatsApp ↗</span>
            </a>
            <div class="faq-phone-row">
              <span>Or call directly:</span>
              <a href="tel:+27821234567"><strong>+27 82 123 4567</strong></a>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-gallery-duo">
        <div class="faq-mini-photo">
          <img src="assets/safari-media/safari-27.jpeg" alt="Guests viewing wildlife from the hide" loading="lazy">
          <span>Unhurried Bird &amp; Game Viewing</span>
        </div>
        <div class="faq-mini-photo">
          <img src="assets/safari-media/safari-22.jpeg" alt="Skukuza Safari Lodge Baobab courtyard" loading="lazy">
          <span>Skukuza Safari Lodge Grounds</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

html = html.replace(faqSectionOld, faqSectionNew);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated index.html with slider, beautiful pricing, and 2-col FAQ with images');

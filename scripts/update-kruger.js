const fs = require('fs');
const path = require('path');

const krugerPath = path.join(__dirname, '..', 'dist', 'kruger.html');
let html = fs.readFileSync(krugerPath, 'utf8');

const oldItinerary = /<div class="itinerary-list">[\s\S]*?<\/div>\s*<\/div>/;

const newItinerary = `<div class="itinerary-rich-grid">
    <!-- Day 1 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-22.jpeg" alt="Skukuza Safari Lodge Baobab courtyard" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 01</span>
          <span class="itinerary-focus-tag">ARRIVAL &amp; BUSH ACCLIMATISATION</span>
        </div>
        <h3>Flight from Cape Town &amp; Welcome to Kruger</h3>
        <p>Your journey begins with a smooth scheduled flight from Cape Town to Skukuza or Kruger Mpumalanga Airport (KMIA). Michael Cotter personally welcomes you at arrivals and transfers you in our spacious, air-conditioned Staria passenger vehicle to Skukuza Safari Lodge.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">✈</span><span>Flight departure from Cape Town</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🚐</span><span>Scenic air-conditioned lodge transfer</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🏡</span><span>Private en-suite room check-in</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🌅</span><span>First afternoon game drive &amp; dinner</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Luggage Support</span>
          <span class="itinerary-pill">Staria Minibus</span>
          <span class="itinerary-pill">Skukuza Safari Lodge</span>
        </div>
      </div>
    </article>

    <!-- Day 2 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-04.jpeg" alt="Giraffes browsing on the Kruger paved road in front of safari vehicle" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 02</span>
          <span class="itinerary-focus-tag">DAWN PATROL &amp; SABIE RIVER</span>
        </div>
        <h3>Sabie River Loops &amp; Golden Hour Game Viewing</h3>
        <p>Depart at first light when predators are most active and morning birds greet the day. We trace the loops along the Sabie River, world-renowned for leopard and lion sightings, before returning to the lodge for a generous hot buffet breakfast and relaxing midday downtime.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">🌅</span><span><strong>06:00–09:00:</strong> Morning dawn safari drive</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🥐</span><span>Generous lodge buffet breakfast</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🌴</span><span>Midday leisure, pool or reading</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🦒</span><span><strong>14:30–18:00:</strong> Afternoon golden hour drive</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Sabie River Loop</span>
          <span class="itinerary-pill">Big Cat Tracking</span>
          <span class="itinerary-pill">Senior-Friendly Pacing</span>
        </div>
      </div>
    </article>

    <!-- Day 3 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-20.jpeg" alt="Young male lion resting peacefully beside the road in Kruger" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 03</span>
          <span class="itinerary-focus-tag">PREDATOR TRACKING &amp; BUSH SECRETS</span>
        </div>
        <h3>Waterholes, Animal Behavior &amp; Photography Tips</h3>
        <p>Michael draws on 15+ years of trails guiding and forensic photography to reveal the subtle clues of the bush — fresh tracks in the sand, alarm calls of oxpeckers and baboons, and prime vantage points for capturing memorable photographs.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">🐾</span><span>Tracking spoor &amp; reading bush signs</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">📷</span><span>Hands-on wildlife photography guidance</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">☕</span><span>Afsaal rest camp stop with hot coffee</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🦁</span><span>Twilight safari as the bush cools</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Wildlife Photography</span>
          <span class="itinerary-pill">Full Trails Guide Host</span>
          <span class="itinerary-pill">Lower Sabie Routes</span>
        </div>
      </div>
    </article>

    <!-- Day 4 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-27.jpeg" alt="Cotter Safaris guests enjoying comfortable bird watching from the Lake Panic hide" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 04</span>
          <span class="itinerary-focus-tag">LAKE PANIC HIDE &amp; UNHURRIED COMFORT</span>
        </div>
        <h3>Bird Hide Viewing &amp; Relaxed Midday Exploration</h3>
        <p>A tranquil visit to the famous Lake Panic Bird Hide allows guests to sit comfortably in shaded seclusion, watching hippos, terrapins, pied kingfishers, and visiting elephants. The afternoon provides options for Skukuza village history or a relaxing restorative massage at the lodge.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">🦅</span><span>Seated viewing at Lake Panic Bird Hide</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">📖</span><span>Stevenson-Hamilton Memorial &amp; Curios</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">☕</span><span>Riverside tea overlooking Selati Bridge</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🚙</span><span>Gentle afternoon safari into rhino territory</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Lake Panic Hide</span>
          <span class="itinerary-pill">Low Physical Demand</span>
          <span class="itinerary-pill">Kingfishers &amp; Hippos</span>
        </div>
      </div>
    </article>

    <!-- Day 5 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-01.jpeg" alt="Elephant herd and Cape buffalo grazing together at a Kruger waterhole" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 05</span>
          <span class="itinerary-focus-tag">GRAND FINALE SAFARI</span>
        </div>
        <h3>The Big Herds &amp; Final Evening Celebrations</h3>
        <p>Our final full day in Kruger is tailored around the group's wishlist: revisiting favourite corners, seeking specific species, or lingering with large herds of elephants and buffalo. The evening culminates in a celebratory dinner reflecting on the week's remarkable encounters.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">🎯</span><span>Custom morning route tailored to guests</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🐘</span><span>Extended time observing herd dynamics</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🌅</span><span>Final Kruger golden hour sunset</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🥂</span><span>Celebratory farewell dinner at the lodge</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Elephant &amp; Buffalo Herds</span>
          <span class="itinerary-pill">Custom Itinerary</span>
          <span class="itinerary-pill">Farewell Dinner</span>
        </div>
      </div>
    </article>

    <!-- Day 6 -->
    <article class="itinerary-card-rich">
      <div class="itinerary-card-img">
        <img src="assets/safari-media/safari-30.jpeg" alt="Smiling guests on safari with Michael Cotter overlooking the Sabie River" loading="lazy">
      </div>
      <div class="itinerary-card-content">
        <div class="itinerary-badge-row">
          <span class="itinerary-day-pill">DAY 06</span>
          <span class="itinerary-focus-tag">SAFE RETURN HOME</span>
        </div>
        <h3>Farewell Kruger &amp; Return Flight to Cape Town</h3>
        <p>Enjoy a leisurely final buffet breakfast at Skukuza Safari Lodge. Our team takes care of all luggage check-out and provides a seamless transfer to the airport for your return scheduled flight to Cape Town, carrying memories to cherish for a lifetime.</p>
        <div class="itinerary-rhythm-list">
          <div class="itinerary-rhythm-item"><span class="icon">🥐</span><span>Relaxed breakfast &amp; checkout</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🧳</span><span>Full luggage &amp; boarding assistance</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">🚐</span><span>Comfortable airport transfer</span></div>
          <div class="itinerary-rhythm-item"><span class="icon">✈</span><span>Flight back to Cape Town</span></div>
        </div>
        <div class="itinerary-pills">
          <span class="itinerary-pill">Door-to-Door Care</span>
          <span class="itinerary-pill">Cape Town Flight</span>
          <span class="itinerary-pill">Lifetime Memories</span>
        </div>
      </div>
    </article>
  </div>`;

html = html.replace(oldItinerary, newItinerary);

fs.writeFileSync(krugerPath, html, 'utf8');
console.log('Successfully updated kruger.html with rich visual itinerary cards');

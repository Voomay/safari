const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../dist/pages.css');
let css = fs.readFileSync(file, 'utf8');

const additions = `
/* --- WhatsApp Nav Tab & Direct Contact --- */
.nav-whatsapp-tab {
  display: inline-flex !important;
  align-items: center;
  gap: 6px;
  background: #25d366;
  color: #fff !important;
  padding: 6px 14px !important;
  border-radius: 20px !important;
  font-weight: 600;
  font-size: calc(var(--u) * 1.05);
  box-shadow: 0 3px 10px rgba(37,211,102,0.3);
  transition: all 0.2s ease;
  border-bottom: none !important;
}
.nav-whatsapp-tab:hover {
  background: #1ebd5b;
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(37,211,102,0.45);
}
.nav-whatsapp-tab i {
  font-size: 1.15em;
}

/* --- Meet the Team Styles --- */
.team-hero {
  background-image: linear-gradient(90deg, #10180dd4, #11190d60), url('assets/safari-media/safari-18.jpeg');
}
.team-content-section {
  padding: calc(var(--u) * 4.8) 6.4%;
  position: relative;
}
.team-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--u) * 2.2);
  position: relative;
  z-index: 1;
  margin-top: calc(var(--u) * 2);
}
.team-member-card {
  background: #fffdf9;
  border: 1px solid #e2d7c3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(45,35,20,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.team-member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(45,35,20,0.15);
}
.team-member-photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4.6;
  overflow: hidden;
  background: #1a2516;
}
.team-member-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.4s ease;
}
.team-member-card:hover .team-member-photo-wrap img {
  transform: scale(1.04);
}
.team-role-pill {
  position: absolute;
  bottom: 14px;
  left: 14px;
  background: rgba(30, 43, 25, 0.92);
  backdrop-filter: blur(8px);
  color: #ecdcb9;
  border: 1px solid #c89b50;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: calc(var(--u) * 0.88);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.team-member-body {
  padding: calc(var(--u) * 2.2) calc(var(--u) * 2);
  display: flex;
  flex-direction: column;
  flex: 1;
}
.team-member-body h3 {
  font-size: calc(var(--u) * 2.3);
  color: #1c2718;
  margin-bottom: calc(var(--u) * 0.4);
}
.team-fgasa-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #a3752e;
  font-size: calc(var(--u) * 1.05);
  font-weight: 600;
  margin-bottom: calc(var(--u) * 1.2);
}
.team-fgasa-badge i {
  color: var(--gold);
}
.team-member-bio {
  color: var(--muted);
  font-size: calc(var(--u) * 1.18);
  line-height: 1.6;
  margin-bottom: calc(var(--u) * 1.6);
  flex: 1;
}
.team-specialty-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: calc(var(--u) * 1.2);
  border-top: 1px solid #f0e8db;
}
.team-tag {
  background: #f4eee2;
  color: #554425;
  font-size: calc(var(--u) * 0.85);
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid #e5dac7;
}

/* --- Upcoming Departures Styles --- */
.upcoming-departures-section {
  padding: calc(var(--u) * 4.5) 6.4%;
  position: relative;
}
.departures-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--u) * 2.4);
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: calc(var(--u) * 2) auto 0;
}
.departure-card {
  background: #fff;
  border: 2px solid #e1d3bc;
  border-radius: 8px;
  padding: calc(var(--u) * 2.8);
  box-shadow: 0 10px 30px rgba(35,48,28,0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.departure-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold);
  box-shadow: 0 16px 40px rgba(35,48,28,0.12);
}
.departure-status-badge {
  position: absolute;
  top: -12px;
  right: 24px;
  background: linear-gradient(115deg, #e0b267, #bc8b40);
  color: #1e2b19;
  font-size: calc(var(--u) * 0.85);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 14px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}
.departure-status-badge.announced {
  background: #23331b;
  color: #ecdcb9;
  border: 1px solid #c89b50;
}
.departure-date-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: calc(var(--u) * 1);
}
.departure-cal-icon {
  width: calc(var(--u) * 3.8);
  height: calc(var(--u) * 3.8);
  background: #fbf5ea;
  border: 1px solid #d9be8c;
  color: #9d702a;
  border-radius: 6px;
  display: grid;
  place-items: center;
  font-size: calc(var(--u) * 1.8);
  flex-shrink: 0;
}
.departure-dates {
  font-size: calc(var(--u) * 2.3);
  color: #1c2718;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  line-height: 1.1;
}
.departure-subtitle {
  color: #7b6a48;
  font-size: calc(var(--u) * 1.15);
  font-weight: 600;
  margin-bottom: calc(var(--u) * 1);
}
.departure-desc {
  color: var(--muted);
  font-size: calc(var(--u) * 1.18);
  line-height: 1.55;
  margin-bottom: calc(var(--u) * 1.8);
  flex: 1;
}
.departure-perks {
  list-style: none;
  padding: 0;
  margin: 0 0 calc(var(--u) * 2);
  display: grid;
  gap: calc(var(--u) * 0.7);
}
.departure-perks li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: calc(var(--u) * 1.12);
  color: #3b4234;
}
.departure-perks li i {
  color: #396d2b;
  font-size: 0.9em;
}
.departure-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: auto;
}

/* --- Enhanced Testimonial with Jillian Davis Review --- */
.testimonials-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--u) * 2);
  position: relative;
  z-index: 1;
}
.testimonial-card-gold {
  position: relative;
  padding: calc(var(--u) * 2.4) calc(var(--u) * 2.8);
  background: #ffffffa6;
  border: 1px solid #dfd6c4;
  border-radius: 6px;
  box-shadow: 0 8px 25px rgba(45,35,20,0.06);
}
.rating-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #273620;
  color: #f5d489;
  padding: 4px 10px;
  border-radius: 14px;
  font-size: calc(var(--u) * 0.88);
  font-weight: 700;
  margin-bottom: calc(var(--u) * 1.2);
}
.rating-pill .stars {
  color: #e4ab43;
}
.rating-score {
  color: #fff;
  margin-left: 4px;
  border-left: 1px solid #5a6d50;
  padding-left: 6px;
}

@media (max-width: 900px) {
  .team-grid-3 {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin-inline: auto;
  }
  .departures-grid {
    grid-template-columns: 1fr;
  }
  .testimonials-grid-2 {
    grid-template-columns: 1fr;
  }
}
`;

if (!css.includes('.nav-whatsapp-tab')) {
  fs.writeFileSync(file, css + additions);
  console.log('Appended team & departure styles to pages.css successfully!');
} else {
  console.log('Styles already present');
}

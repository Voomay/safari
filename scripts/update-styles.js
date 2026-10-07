const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'dist', 'pages.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additions = `
/* ========================================================
   Hero Image Slider & Controls
   ======================================================== */
.hero{position:relative;overflow:hidden;background:#1e2b19;background-image:none}
.hero-slider{position:absolute;inset:0;z-index:0;width:100%;height:100%}
.hero-slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1s ease-in-out;will-change:opacity}
.hero-slide.active{opacity:1;z-index:1}
.hero-content{position:relative;z-index:2}
.hero-slider-nav{position:absolute;bottom:calc(var(--u)*3.2);right:4%;z-index:3;display:flex;align-items:center;gap:12px}
.hero-nav-arrow{background:rgba(30,43,25,.7);color:#d9b575;border:1px solid rgba(200,155,80,.4);width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-size:20px;cursor:pointer;transition:background .2s,border-color .2s,color .2s;padding:0;line-height:1}
.hero-nav-arrow:hover{background:var(--green);border-color:var(--gold);color:#fff}
.hero-dots{display:flex;gap:8px}
.hero-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35);border:1px solid rgba(200,155,80,.4);padding:0;cursor:pointer;transition:all .3s ease}
.hero-dot.active{width:26px;border-radius:10px;background:linear-gradient(115deg,#e0b267,#bc8b40);border-color:#b28b48}

/* ========================================================
   Pricing Section Typography & Refinement
   ======================================================== */
.pricing-card .price-box{background:#f8f5ee;border:1px solid #e2d5bd;padding:16px 20px;border-radius:4px;margin:16px 0 20px}
.pricing-card .price-eyebrow{font-size:10px;font-weight:700;letter-spacing:.15em;color:#9b7b41;margin-bottom:6px}
.pricing-card .price-row{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.pricing-card .price-from{font-size:12px;font-weight:700;color:#787566;letter-spacing:.08em}
.pricing-card .price-amount{font-family:'Cormorant Garamond',Georgia,serif;font-size:36px;font-weight:700;color:#1e2b19;line-height:1}
.pricing-card .price-period{font-size:13px;color:#6b6757;font-weight:500}
.pricing-card .price-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:10px;padding-top:10px;border-top:1px dashed #ded4c0;font-size:11.5px;color:#5a6250;font-weight:500}

/* ========================================================
   FAQ Split Layout with Side Images
   ======================================================== */
.faq-split-layout{display:grid;grid-template-columns:58% 39%;gap:3%;align-items:start;max-width:1240px;margin:calc(var(--u)*2.8) auto 0;position:relative;z-index:1}
.faq-accordion-col{display:flex;flex-direction:column;gap:calc(var(--u)*1.2)}
.faq-visual-col{display:flex;flex-direction:column;gap:20px;position:sticky;top:90px}
.faq-feature-card{background:#ffffff;border:1px solid #ded5c2;border-radius:6px;overflow:hidden;box-shadow:0 8px 30px rgba(30,43,25,.08)}
.faq-feature-img-wrap{position:relative;height:240px;overflow:hidden}
.faq-feature-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.faq-img-badge{position:absolute;bottom:12px;left:12px;background:rgba(30,43,25,.88);color:#eedab0;font-size:11px;font-weight:600;padding:5px 12px;border-radius:20px;border:1px solid #c89b50;letter-spacing:.04em}
.faq-feature-body{padding:22px}
.faq-feature-body h3{font-size:22px;color:#1e2b19;margin-bottom:8px;font-family:'Cormorant Garamond',Georgia,serif}
.faq-feature-body p{color:var(--muted);font-size:13px;line-height:1.5;margin-bottom:18px}
.faq-cta-box{display:flex;flex-direction:column;gap:10px}
.faq-phone-row{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;color:#706e61}
.faq-phone-row a{color:#202e1c;font-weight:600}
.faq-phone-row a:hover{color:var(--gold)}
.faq-gallery-duo{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.faq-mini-photo{position:relative;border-radius:4px;overflow:hidden;height:125px;border:1px solid #dfd6c4}
.faq-mini-photo img{width:100%;height:100%;object-fit:cover;display:block}
.faq-mini-photo span{position:absolute;bottom:0;left:0;right:0;padding:18px 8px 6px;background:linear-gradient(transparent,rgba(20,29,16,.88));font-size:10.5px;font-weight:500;color:#f7f4ea;text-align:center}

/* ========================================================
   Rich Visual Itinerary Cards for Kruger Page
   ======================================================== */
.itinerary-rich-grid{display:flex;flex-direction:column;gap:28px;margin-top:calc(var(--u)*2.5)}
.itinerary-card-rich{background:#ffffff;border:1px solid #ded6c4;border-radius:6px;overflow:hidden;box-shadow:0 8px 26px rgba(30,43,25,.07);display:grid;grid-template-columns:360px 1fr;transition:transform .2s ease,box-shadow .2s ease}
.itinerary-card-rich:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(30,43,25,.13)}
.itinerary-card-rich:nth-child(even){grid-template-columns:1fr 360px}
.itinerary-card-rich:nth-child(even) .itinerary-card-img{order:2}
.itinerary-card-rich:nth-child(even) .itinerary-card-content{order:1}
.itinerary-card-img{position:relative;height:100%;min-height:270px}
.itinerary-card-img img{width:100%;height:100%;object-fit:cover;display:block}
.itinerary-card-content{padding:26px 30px;display:flex;flex-direction:column;justify-content:center}
.itinerary-badge-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap}
.itinerary-day-pill{background:#1e2b19;color:#e8cb8e;border:1px solid #c89b50;font-size:11px;font-weight:700;letter-spacing:.08em;padding:4px 12px;border-radius:20px}
.itinerary-focus-tag{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#8f7039}
.itinerary-card-content h3{font-size:calc(var(--u)*2.3);color:#1e2b19;margin-bottom:10px;line-height:1.2;font-family:'Cormorant Garamond',Georgia,serif}
.itinerary-card-content p{color:var(--muted);font-size:13.5px;line-height:1.6;margin-bottom:14px}
.itinerary-rhythm-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin:10px 0 16px;padding:12px;background:#f9f7f2;border-radius:4px;border:1px solid #ede4d4}
.itinerary-rhythm-item{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#4f5144;line-height:1.4}
.itinerary-rhythm-item span.icon{font-size:14px;color:#a87d36}
.itinerary-pills{display:flex;flex-wrap:wrap;gap:8px}
.itinerary-pill{background:#f2ede2;color:#4c4a3e;border:1px solid #ded5c2;border-radius:15px;padding:3px 10px;font-size:11px;font-weight:500}

/* ========================================================
   Responsive Media Queries for Mobile & Tablets
   ======================================================== */
@media(max-width:960px){
  .faq-split-layout{grid-template-columns:1fr;gap:35px}
  .faq-visual-col{position:static;max-width:540px;margin:0 auto;width:100%}
  .itinerary-card-rich,.itinerary-card-rich:nth-child(even){grid-template-columns:1fr}
  .itinerary-card-rich:nth-child(even) .itinerary-card-img{order:1}
  .itinerary-card-rich:nth-child(even) .itinerary-card-content{order:2}
  .itinerary-card-img{height:220px;min-height:220px}
}
@media(max-width:650px){
  .hero-slider-nav{bottom:20px;right:50%;transform:translateX(50%)}
  .hero-nav-arrow{width:32px;height:32px;font-size:16px}
  .pricing-card .price-row{flex-direction:column;gap:4px}
  .pricing-card .price-amount{font-size:30px}
  .itinerary-card-content{padding:20px 18px}
  .itinerary-card-content h3{font-size:22px}
  .itinerary-rhythm-list{grid-template-columns:1fr}
  .floating-widget-wrap{bottom:15px;right:15px}
  .floating-fab{padding:9px 16px;font-size:13px}
}
`;

if (!css.includes('hero-slider')) {
  css += additions;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended slider, pricing, FAQ side images, and itinerary styles to pages.css');
}

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

// Dialog management
const dialogs=$$('dialog');
dialogs.forEach(d=>{
  const closeBtn=d.querySelector('.close');
  if(closeBtn) closeBtn.addEventListener('click',()=>d.close());
  d.addEventListener('click',e=>{
    if(e.target===d){
      const r=d.getBoundingClientRect();
      if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) d.close();
    }
  });
});

function openEnquiry(){
  dialogs.forEach(d=>{if(d.open)d.close()});
  const eq=$('#enquiry');
  if(eq) eq.showModal();
}

$$('[data-enquire]').forEach(b=>b.addEventListener('click',()=>{
  if(!document.body.classList.contains('editing')) openEnquiry();
}));

// Enquiry form handler
$$('#enquiry-form,[data-safari-enquiry]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.target);
  const fullName = [d.get('name'), d.get('surname')].filter(Boolean).join(' ');
  const fields=[
    ['Full Name', fullName || d.get('name')],
    ['Email', d.get('email')],
    ['Phone / WhatsApp', d.get('phone')],
    ['Preferred Travel Date', d.get('dates')],
    ['Party Size / Travellers', d.get('guests') || d.get('travellers')],
    ['Interested In', d.get('interest')]
  ];
  const lines=fields.filter(([,val])=>val).map(([label,val])=>label+': '+val);
  const body='Hello Michael & Cotter Safaris,\n\nI would like to enquire about planning a Kruger safari:\n\n'+lines.join('\n')+'\n\nSafari Plans & Wishes:\n'+(d.get('message')||'N/A')+'\n\nLooking forward to hearing from you.';
  location.href='mailto:info@cottersafaris.co.za?subject='+encodeURIComponent('Safari Enquiry — '+(fullName||'Traveller'))+'&body='+encodeURIComponent(body);
}));

// Setup clickable date inputs
function initDatePickers(){
  $$('input[type="date"]').forEach(inp => {
    try {
      const today = new Date().toISOString().split('T')[0];
      if (!inp.getAttribute('min')) inp.setAttribute('min', today);
    } catch (_) {}
    inp.parentElement?.addEventListener('click', (e) => {
      if (e.target !== inp) {
        try { if (inp.showPicker) inp.showPicker(); else inp.focus(); } catch (_) { inp.focus(); }
      }
    });
  });
}
initDatePickers();


// Mobile navigation slide-out drawer
const menuToggle = $('.menu-toggle');
const headerNav = $('header nav');

if (menuToggle && headerNav) {
  // Create backdrop if not already created
  let backdrop = $('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // Inject Drawer Header if not present
  if (!headerNav.querySelector('.drawer-header')) {
    const drawerHeader = document.createElement('div');
    drawerHeader.className = 'drawer-header';
    drawerHeader.innerHTML = `
      <div class="drawer-brand">
        <img src="assets/logo-light.png" alt="Cotter Safaris" style="height:36px;width:auto;display:block;">
      </div>
      <button class="drawer-close" aria-label="Close navigation">✕</button>
    `;
    headerNav.insertBefore(drawerHeader, headerNav.firstChild);
  }

  // Wrap links into .drawer-links container if not already wrapped
  let linksWrap = headerNav.querySelector('.drawer-links');
  if (!linksWrap) {
    linksWrap = document.createElement('div');
    linksWrap.className = 'drawer-links';
    const topLinks = Array.from(headerNav.querySelectorAll(':scope > a'));
    topLinks.forEach(link => linksWrap.appendChild(link));
    const drawerHeader = headerNav.querySelector('.drawer-header');
    if (drawerHeader && drawerHeader.nextSibling) {
      headerNav.insertBefore(linksWrap, drawerHeader.nextSibling);
    } else {
      headerNav.appendChild(linksWrap);
    }
  }

  // Inject Drawer Footer with contact details and social handles (Facebook, Instagram, TikTok, WhatsApp)
  if (!headerNav.querySelector('.drawer-footer')) {
    const drawerFooter = document.createElement('div');
    drawerFooter.className = 'drawer-footer';
    drawerFooter.innerHTML = `
      <div class="drawer-contact-block">
        <span class="drawer-section-title">Direct Reservations &amp; Inquiries</span>
        <a href="tel:+27821234567" class="drawer-phone-link">
          <i class="fa-solid fa-phone"></i>
          <span>+27 82 123 4567</span>
        </a>
        <a href="mailto:info@cottersafaris.co.za" class="drawer-email-link">
          <i class="fa-solid fa-envelope"></i>
          <span>info@cottersafaris.co.za</span>
        </a>
      </div>
      <div class="drawer-social-block">
        <span class="drawer-section-title">Connect With Us</span>
        <div class="drawer-social-row">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="drawer-social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="drawer-social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener" class="drawer-social-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://wa.me/27821234567?text=Hello%20Michael,%20I'm%20interested%20in%20planning%20a%20Kruger%20safari." target="_blank" rel="noopener" class="drawer-social-btn" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <button class="button drawer-plan-btn" data-enquire>
        <span>Plan Your Safari</span>
        <svg><use href="#arrow"/></svg>
      </button>
    `;
    headerNav.appendChild(drawerFooter);

    // Bind modal open for newly created button
    const newPlanBtn = drawerFooter.querySelector('[data-enquire]');
    if (newPlanBtn) {
      newPlanBtn.addEventListener('click', () => {
        closeDrawer();
        const dlg = $('#enquiry');
        if (dlg && dlg.showModal) dlg.showModal();
      });
    }
  }

  function openDrawer() {
    headerNav.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    headerNav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (headerNav.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  const closeBtn = headerNav.querySelector('.drawer-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  headerNav.querySelectorAll('.drawer-links a').forEach(a => a.addEventListener('click', closeDrawer));
}

// Active section observer on homepage
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){
    $$('header nav a').forEach(a=>{
      if(a.hash) a.classList.toggle('active',a.hash==='#'+e.target.id);
    });
  }
}),{rootMargin:'-10% 0px -65% 0px'});

if(!document.body.dataset.page || document.body.dataset.page==='home'){
  $$('main section[id]').forEach(s=>sectionObserver.observe(s));
}

// Hero Background Slider
const heroSlides=$$('.hero-slide');
const heroDots=$$('.hero-dot');
const heroPrev=$('#hero-prev');
const heroNext=$('#hero-next');
let currentHeroSlide=0;
let heroSlideTimer=null;

function setHeroSlide(index){
  if(!heroSlides.length) return;
  currentHeroSlide=(index+heroSlides.length)%heroSlides.length;
  heroSlides.forEach((slide,i)=>{
    slide.classList.toggle('active',i===currentHeroSlide);
  });
  heroDots.forEach((dot,i)=>{
    dot.classList.toggle('active',i===currentHeroSlide);
  });
}

function startHeroTimer(){
  stopHeroTimer();
  if(heroSlides.length>1){
    heroSlideTimer=setInterval(()=>{
      setHeroSlide(currentHeroSlide+1);
    },5000);
  }
}

function stopHeroTimer(){
  if(heroSlideTimer) clearInterval(heroSlideTimer);
}

if(heroSlides.length){
  if(heroPrev){
    heroPrev.addEventListener('click',()=>{
      setHeroSlide(currentHeroSlide-1);
      startHeroTimer();
    });
  }
  if(heroNext){
    heroNext.addEventListener('click',()=>{
      setHeroSlide(currentHeroSlide+1);
      startHeroTimer();
    });
  }
  heroDots.forEach(dot=>{
    dot.addEventListener('click',()=>{
      const idx=Number(dot.dataset.slide||0);
      setHeroSlide(idx);
      startHeroTimer();
    });
  });

  const heroSec=$('.hero');
  if(heroSec){
    heroSec.addEventListener('mouseenter',stopHeroTimer);
    heroSec.addEventListener('mouseleave',startHeroTimer);

    // Mobile touch swipe support
    let touchStartX=0;
    let touchEndX=0;
    heroSec.addEventListener('touchstart',e=>{
      if(e.changedTouches && e.changedTouches[0]){
        touchStartX=e.changedTouches[0].screenX;
        stopHeroTimer();
      }
    },{passive:true});
    heroSec.addEventListener('touchend',e=>{
      if(e.changedTouches && e.changedTouches[0]){
        touchEndX=e.changedTouches[0].screenX;
        const diff=touchEndX-touchStartX;
        if(Math.abs(diff)>35){
          if(diff<0){
            setHeroSlide(currentHeroSlide+1);
          } else {
            setHeroSlide(currentHeroSlide-1);
          }
        }
      }
      startHeroTimer();
    },{passive:true});
  }

  startHeroTimer();
}

// Lightbox photos
const photos=[
  ['leopard','Leopard in the wild'],
  ['elephants','Iconic African elephants'],
  ['acacia','Golden African sunset'],
  ['buffalo','African buffalo'],
  ['bird','A glimpse of African birdlife'],
  ['lodge','Luxury safari lodge'],
  ['lion','The spirit of the wild'],
  ['landscape','Untamed waterways'],
  ['giraffes','Grace on the savannah'],
  ['hero','The journey of a lifetime']
];
photos.push(['assets/safari-media/safari-01.jpeg','Elephant & Buffalo at the Waterhole','image']);
photos.push(['assets/safari-media/safari-02.jpeg','Giraffes Browsing the Acacia','image']);
photos.push(['assets/safari-media/safari-03.jpeg','Impala Lily in Bloom','image']);
photos.push(['assets/safari-media/safari-04.jpeg','Giraffes on the Kruger Road','image']);
photos.push(['assets/safari-media/safari-05.jpeg','Kruger Safari Moment 5','image']);
photos.push(['assets/safari-media/safari-06.jpeg','Plains Zebra in the Evening Light','image']);
photos.push(['assets/safari-media/safari-07.jpeg','Baboon Mother & Baby','image']);
photos.push(['assets/safari-media/safari-08.jpeg','Kruger Safari Moment 8','image']);
photos.push(['assets/safari-media/safari-09.jpeg','Southern Ground Hornbill','image']);
photos.push(['assets/safari-media/safari-10.jpeg','Zebra in the Thicket','image']);
photos.push(['assets/safari-media/safari-11.jpeg','Kruger Safari Moment 11','image']);
photos.push(['assets/safari-media/safari-12.jpeg','Kruger Safari Moment 12','image']);
photos.push(['assets/safari-media/safari-13.jpeg','Kruger Safari Moment 13','image']);
photos.push(['assets/safari-media/safari-14.jpeg','Kruger Safari Moment 14','image']);
photos.push(['assets/safari-media/safari-15.jpeg','Kruger Safari Moment 15','image']);
photos.push(['assets/safari-media/safari-16.jpeg','Kruger Safari Moment 16','image']);
photos.push(['assets/safari-media/safari-17.jpeg','Kruger Safari Moment 17','image']);
photos.push(['assets/safari-media/safari-18.jpeg','Guests at the Sabie River','image']);
photos.push(['assets/safari-media/safari-19.jpeg','Baboons in the Treetops','image']);
photos.push(['assets/safari-media/safari-20.jpeg','Young Lion at the Roadside','image']);
photos.push(['assets/safari-media/safari-21.jpeg','Kruger Safari Moment 21','image']);
photos.push(['assets/safari-media/safari-22.jpeg','Baobab at the Lodge','image']);
photos.push(['assets/safari-media/safari-23.jpeg','Kruger Safari Moment 23','image']);
photos.push(['assets/safari-media/safari-24.jpeg','Kruger Safari Moment 24','image']);
photos.push(['assets/safari-media/safari-25.jpeg','Vultures at a Kill','image']);
photos.push(['assets/safari-media/safari-26.jpeg','Kruger Safari Moment 26','image']);
photos.push(['assets/safari-media/safari-27.jpeg','Photographing from the Hide','image']);
photos.push(['assets/safari-media/safari-28.jpeg','Breakfast Stop in the Park','image']);
photos.push(['assets/safari-media/safari-29.jpeg','Kruger Safari Moment 29','image']);
photos.push(['assets/safari-media/safari-30.jpeg','Guests with the Skukuza Bridge','image']);
photos.push(['assets/safari-media/safari-31.jpeg','Happy Guests at Skukuza','image']);
photos.push(['assets/safari-media/safari-video-1.mp4','Kruger Sighting — Video 1','video']);
photos.push(['assets/safari-media/safari-video-2.mp4','Kruger Sighting — Video 2','video']);
photos.push(['assets/safari-media/safari-video-3.mp4','Kruger Sighting — Video 3','video']);
let photoIndex=0;
function showPhoto(i){
  photoIndex=(i+photos.length)%photos.length;
  const img=$('#lightbox-image');
  const vid=$('#lightbox-video');
  const cap=$('#photo-caption');
  const p=photos[photoIndex];
  const isVideo=p[2]==='video';
  const src=p[0].includes('/')?p[0]:'assets/'+p[0]+'.webp';
  if(vid){ vid.pause(); vid.hidden=!isVideo; if(isVideo){ vid.src=src; } else { vid.removeAttribute('src'); vid.load(); } }
  if(img){ img.hidden=isVideo; if(!isVideo){ img.src=src; img.alt=p[1]; } }
  if(cap){ cap.textContent=''; }
}
$$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{
  if(document.body.classList.contains('editing')) return;
  showPhoto(Number(b.dataset.gallery));
  const lb=$('#lightbox');
  if(lb) lb.showModal();
}));
const pPrev=$('#photo-prev');
const pNext=$('#photo-next');
if(pPrev) pPrev.onclick=()=>showPhoto(photoIndex-1);
if(pNext) pNext.onclick=()=>showPhoto(photoIndex+1);
document.addEventListener('keydown',e=>{
  const lb=$('#lightbox');
  if(lb && lb.open){
    if(e.key==='ArrowLeft') showPhoto(photoIndex-1);
    if(e.key==='ArrowRight') showPhoto(photoIndex+1);
  }
});

// Modal details
const details={
  wildlife:['Wildlife Safaris','Get up close to Africa’s iconic wildlife in their natural habitat. Experience unforgettable game viewing and the thrill of the wild. Contact us to discuss your preferred destinations and wildlife experiences.'],
  luxury:['Luxury & Comfort','Enjoy exceptional accommodation options, from luxury lodges to intimate bush camps, all in incredible locations. Tell us about your interests and preferences to plan your stay.'],
  philosophy:['Our Safari Philosophy','Our safaris are about more than just seeing wildlife — they’re about experiencing the true spirit of Africa. Breathtaking landscapes, incredible wildlife, warm hospitality and moments that stay with you long after the journey ends.'],
  landscapes:['Untamed Landscapes','Explore diverse and breathtaking scenery across Africa. From vast savannahs to rugged mountains and serene waterways, let us help you plan your journey.'],
  authentic:['Authentic Experiences','Connect with local cultures and traditions. Share your interests with us to create your personalised African safari experience.'],
  journeys:['Memorable Journeys','Create lifelong memories in extraordinary destinations. Every traveller is unique — let us plan a safari to suit your interests, time and budget.']
};
$$('[data-experience]').forEach(b=>b.addEventListener('click',()=>{
  if(document.body.classList.contains('editing')) return;
  const d=details[b.dataset.experience];
  if(d){
    $('#detail-title').textContent=d[0];
    $('#detail-copy').textContent=d[1];
    $('#details').showModal();
  }
}));
$$('[data-policy]').forEach(b=>b.onclick=()=>{
  $('#detail-title').textContent=b.dataset.policy==='privacy'?'Privacy Policy':'Terms & Conditions';
  $('#detail-copy').textContent=b.dataset.policy==='privacy'
    ?'This website uses browser storage only to keep your local text edits. Enquiry details are passed to your email application when you choose to compose an email. Contact Cotter Safaris for its full privacy policy.'
    :'Please contact Cotter Safaris directly for booking terms, availability and cancellation conditions.';
  $('#details').showModal();
});

// Gallery filtering
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;
  $$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b===button));
  let count=0;
  $$('.gallery-photo-card').forEach(card=>{
    card.hidden=category!=='all'&&card.dataset.category!==category;
    if(!card.hidden) count++;
  });
  const countEl=$('#gallery-count');
  if(countEl) countEl.textContent=count+' item'+(count===1?'':'s');
}));

// Floating AI Safari Concierge & WhatsApp widget
const chatFab=$('#chat-fab');
const chatDrawer=$('#chat-drawer');
const chatClose=$('#chat-close');
const chatMessages=$('#chat-messages');
const chatInput=$('#chat-input');
const chatSend=$('#chat-send');

const knowledgeAnswers=[
  {
    keys:['price','cost','rate','how much','r38','pricing','fee'],
    answer:'Our 5-night Kruger Safari starts from <strong>R38,950 per person sharing</strong>. This includes return flights from Cape Town, Skukuza Safari Lodge accommodation, guided morning and afternoon game drives with Michael Cotter, and daily buffet breakfasts.'
  },
  {
    keys:['senior','older','elder','age','slow','mobility','walker','wheelchair','physical'],
    answer:'<strong>Yes, absolutely.</strong> Our tours are specially designed for older travellers with a relaxed, low-physical pace. Game drives are vehicle-based with restful breaks, private rooms at Skukuza, luggage handling, and mobility aid support by prior arrangement.'
  },
  {
    keys:['stay','lodge','skukuza','hotel','room','accommodation'],
    answer:'Guests stay in comfortable private rooms at <strong>Skukuza Safari Lodge</strong>, inside Kruger National Park. The lodge offers excellent hospitality, air conditioning, en-suite bathrooms, and peaceful bush surroundings.'
  },
  {
    keys:['flight','fly','airport','skukuza airport','kmia','cape town','transfer'],
    answer:'<strong>Flights are included!</strong> We arrange return flights from Cape Town to either Kruger Mpumalanga International Airport (KMIA) or Skukuza Airport, plus all ground transfers in a licensed Staria passenger minibus.'
  },
  {
    keys:['guide','michael','cotter','qualifications','fgasa','trails','who'],
    answer:'<strong>Michael Cotter</strong> personally hosts and guides the entire tour. He holds FGASA Level 2 and Full Trails Guide qualifications (trained under SKS guide Bruce Lawson), with deep expertise in dangerous game, tracking, and wildlife photography.'
  },
  {
    keys:['include','included','meals','breakfast','dinner','what is included'],
    answer:'Included: Return Cape Town flights, 5 nights at Skukuza Safari Lodge, morning (06:00–09:00) & afternoon (14:30–18:00) guided drives, buffet breakfasts, park conservation fees, and luggage help. Dinners are optional, and guests arrange their own travel insurance.'
  },
  {
    keys:['book','reserve','dates','availability','contact','whatsapp','phone'],
    answer:'You can check availability and request dates directly via our <strong>Plan Your Safari</strong> form, or message Michael on WhatsApp at <strong>+27 82 123 4567</strong>!'
  },
  {
    keys:['safe','safety','medical','doctor','insurance','first aid'],
    answer:'Your peace of mind is paramount: Michael has Level 2 First Aid training and dangerous game competency, transport vehicles are passenger-licensed with PDP drivers, and medical doctors are stationed on standby at Skukuza.'
  }
];

function botReply(text){
  const lower=text.toLowerCase();
  let match=knowledgeAnswers.find(item=>item.keys.some(k=>lower.includes(k)));
  const reply=match ? match.answer : "Thank you for reaching out! Cotter Safaris specializes in small-group, comfortable Kruger safaris led by Michael Cotter (from R38,950 pps). Feel free to ask about pricing, dates, accommodation, or chat with Michael on WhatsApp!";
  
  const botDiv=document.createElement('div');
  botDiv.className='chat-bubble bot';
  botDiv.innerHTML=reply;
  chatMessages.appendChild(botDiv);
  chatMessages.scrollTop=chatMessages.scrollHeight;
}

function sendUserMessage(text){
  if(!text || !text.trim()) return;
  const userDiv=document.createElement('div');
  userDiv.className='chat-bubble user';
  userDiv.textContent=text;
  chatMessages.appendChild(userDiv);
  chatMessages.scrollTop=chatMessages.scrollHeight;
  setTimeout(()=>botReply(text), 400);
}

if(chatFab && chatDrawer){
  chatFab.addEventListener('click',()=>{
    chatDrawer.hidden=!chatDrawer.hidden;
    if(!chatDrawer.hidden) {
      document.body.classList.add('chat-open');
      if(chatInput) chatInput.focus();
    } else {
      document.body.classList.remove('chat-open');
    }
  });
  if(chatClose) chatClose.addEventListener('click',()=>{ 
    chatDrawer.hidden=true; 
    document.body.classList.remove('chat-open');
  });
  
  if(chatSend && chatInput){
    chatSend.addEventListener('click',()=>{
      const val=chatInput.value.trim();
      if(val){
        sendUserMessage(val);
        chatInput.value='';
      }
    });
    chatInput.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        const val=chatInput.value.trim();
        if(val){
          sendUserMessage(val);
          chatInput.value='';
        }
      }
    });
  }

  $$('.chat-chip').forEach(chip=>chip.addEventListener('click',()=>{
    sendUserMessage(chip.textContent);
  }));
}

// In-browser text editing
const editNodes=$$('[data-edit]');
const originalText=Object.fromEntries(editNodes.map(n=>[n.dataset.edit,n.innerHTML]));
const pageName=document.body.dataset.page||'home';
const storageKey='cotter-safaris-text-v2'+(pageName==='home'?'':'-'+pageName);
let saved={};
try{
  saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
  editNodes.forEach(n=>{
    if(typeof saved[n.dataset.edit]==='string') n.innerHTML=saved[n.dataset.edit];
  });
}catch{}

function editing(on){
  document.body.classList.toggle('editing',on);
  const et=$('#edit-toggle');
  const tb=$('#edit-toolbar');
  if(et) et.setAttribute('aria-pressed',on);
  if(tb) tb.hidden=!on;
  editNodes.forEach(n=>{
    n.contentEditable=on?'true':'false';
    n.spellcheck=on;
  });
}
const et=$('#edit-toggle');
const de=$('#done-editing');
if(et) et.onclick=()=>editing(true);
if(de) de.onclick=()=>editing(false);

editNodes.forEach(n=>{
  n.addEventListener('paste',e=>{
    if(!document.body.classList.contains('editing')) return;
    e.preventDefault();
    document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));
  });
  n.addEventListener('click',e=>{
    if(document.body.classList.contains('editing')){
      e.preventDefault();
      e.stopPropagation();
    }
  });
});

function collectEdits(){
  return Object.fromEntries(editNodes.map(n=>[n.dataset.edit,n.innerHTML]));
}
const se=$('#save-edits');
const re=$('#reset-edits');
const dp=$('#download-page');
if(se) se.onclick=()=>{
  try{
    localStorage.setItem(storageKey,JSON.stringify(collectEdits()));
    $('#edit-status').textContent='Saved in this browser.';
  }catch{
    $('#edit-status').textContent='Storage unavailable. Use Download HTML to keep your changes.';
  }
};
if(re) re.onclick=()=>{
  editNodes.forEach(n=>n.innerHTML=originalText[n.dataset.edit]);
  try{localStorage.removeItem(storageKey)}catch{}
  $('#edit-status').textContent='Original text restored.';
};
if(dp) dp.onclick=()=>{
  const clone=document.documentElement.cloneNode(true);
  clone.querySelector('body').classList.remove('editing');
  const tb=clone.querySelector('#edit-toolbar');
  if(tb) tb.hidden=true;
  clone.querySelectorAll('[data-edit]').forEach(n=>n.removeAttribute('contenteditable'));
  const tBtn=clone.querySelector('#edit-toggle');
  if(tBtn) tBtn.setAttribute('aria-pressed','false');
  const chat=clone.querySelector('#chat-drawer');
  if(chat) chat.hidden=true;
  const url=URL.createObjectURL(new Blob(['<!doctype html>\n'+clone.outerHTML],{type:'text/html'}));
  const a=document.createElement('a');
  a.href=url;
  a.download=pageName==='home'?'index.html':pageName+'.html';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('#edit-status').textContent='Downloaded. Replace HTML file to keep these edits permanently.';
};

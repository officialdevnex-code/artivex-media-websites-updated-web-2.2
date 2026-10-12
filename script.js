const $ = s => document.querySelector(s);

/* ================================================================
   LOADING SCREEN — 9 SECOND 3D ANIMATION
   ================================================================ */
(function(){
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  if(!loader) return;

  document.body.classList.add('loading');
  const DURATION = 9000; // 9 seconds
  const start = performance.now();

  function tick(t){
    const elapsed = t - start;
    const p = Math.min(elapsed / DURATION, 1);
    const eased = 1 - Math.pow(1 - p, 2);
    const val = Math.round(eased * 100);

    if(fill) fill.style.width = val + '%';
    if(pct) pct.textContent = val + '%';

    if(p < 1){
      requestAnimationFrame(tick);
    } else {
      loader.classList.add('done');
      document.body.classList.remove('loading');
      // Lock scroll position reset
      window.scrollTo(0, 0);
      setTimeout(() => {
        loader.style.display = 'none';
      }, 900);
    }
  }
  requestAnimationFrame(tick);

  // Safety: agar user refresh kare to bhi hide ho jaye
  window.addEventListener('beforeunload', () => {
    if(loader) loader.style.display = 'none';
  });
})();

/* ================================================================
   VIDEO CONFIG — YAHAN APNA VIDEO LAGAO
   ================================================================ */

const VIDEO_URL = "assets/artiver media video.mp4";        // ← local file (recommended)
const VIDEO_DRIVE_ID = "";                   // ← Google Drive file ID (optional)
const VIDEO_POSTER = "./assets/";  // ← poster image for video (optional)  

/* ===== CONFIG ===== */
const WA = "13106223489";
const EMAIL = "info@artivexmedia.com";

/* ===== SERVICES ===== */
const SV = [
  ["🎬","Video Editing","Reels, ads and brand films cut to hold attention. Hook-first editing that converts."],
  ["✍️","Scripting","Hooks and scripts written for your audience. Every word earns its place."],
  ["💻","Web Development","Fast, responsive websites and online stores. Built to load in under 2 seconds."],
  ["🎨","Graphic Design","Logos, social creatives and brand kits. Design that looks premium and stays consistent."],
  ["📈","Meta Ads","Targeting, creatives and tracking that you can actually measure. ROAS-first campaigns."]
];

/* ===== PORTFOLIO ===== */
const WORKS = [
  {title:"Brand film for retail launch",cat:"Video",client:"Lifestyle retail brand",summary:"A 90-second brand film plus cut-downs for every platform.",challenge:"The brand needed one story that worked on a website, in ads and on social.",did:"We scripted, shot direction, edited and color graded a master film, then cut 6 vertical versions.",kpis:[["1.2M","Views"],["+34%","Watch time"],["7","Deliverables"]],tags:["Scripting","Editing","Color grade"],img:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop"},
  {title:"30-day Reels series for fitness studio",cat:"Video",client:"Fitness studio",summary:"Scripted short-form content with a clear hook in every video.",challenge:"Posts were irregular and reach had stalled.",did:"We built a 30-day content calendar, wrote hooks and edited a Reel every other day.",kpis:[["+185%","Reach"],["16","Posts/month"],["4.8%","Engagement"]],tags:["Reels","Content plan","Editing"],img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop"},
  {title:"Fashion e-commerce store",cat:"Web",client:"Online fashion label",summary:"A fast custom store built for mobile shoppers.",challenge:"The old store was slow and checkout dropped buyers.",did:"We designed a custom storefront, rebuilt checkout and added product filters and tracking.",kpis:[["+62%","Conversion"],["1.8s","Load time"],["500","Products"]],tags:["E-commerce","Custom design","Analytics"],img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop"},
  {title:"Corporate website for B2B firm",cat:"Web",client:"B2B services firm",summary:"A 10-page lead generation website with a clear offer.",challenge:"Visitors could not tell what the firm did or how to contact them.",did:"We rewrote the messaging, designed 10 pages and added lead forms with email alerts.",kpis:[["3x","Monthly leads"],["10","Pages"],["95+","Speed score"]],tags:["Website","Copywriting","Lead forms"],img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"},
  {title:"Brand identity kit for wellness startup",cat:"Design",client:"Wellness startup",summary:"A logo system and social template library.",challenge:"Every post looked different and the brand felt inconsistent.",did:"We created a logo system, color and type rules and over 40 editable social templates.",kpis:[["1","Logo system"],["40+","Templates"],["100%","On-brand"]],tags:["Logo","Brand kit","Templates"],img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"},
  {title:"Meta ads funnel for skincare brand",cat:"Ads",client:"DTC skincare",summary:"Prospecting and retargeting campaigns with tested creatives.",challenge:"Ad spend was rising while sales stayed flat.",did:"We rebuilt audiences, tested 12 creatives, set up Meta Pixel tracking and retargeting.",kpis:[["3.4x","ROAS"],["-27%","Cost/lead"],["12","Creatives"]],tags:["Meta ads","A/B testing","Retargeting"],img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop"},
  {title:"Lead generation for real estate agency",cat:"Ads",client:"Real estate agency",summary:"Always-on lead campaigns with instant follow-up.",challenge:"Leads were low quality and slow to be contacted.",did:"We launched lead-form ads with qualifying questions and a WhatsApp follow-up flow.",kpis:[["412","Leads"],["$6.10","Cost/lead"],["2 min","Response"]],tags:["Lead ads","WhatsApp","Reporting"],img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"},
  {title:"Local SEO growth for dental clinic",cat:"SEO",client:"Dental clinic",summary:"On-page and Google Business work that brought in local patients.",challenge:"The clinic did not appear when people searched nearby.",did:"We optimized 25 pages, set up Google Business with new images and built local links.",kpis:[["Top 3","Map pack"],["+90%","Organic calls"],["25","Pages"]],tags:["Local SEO","Google Business","Content"],img:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop"},
  {title:"Social media for restaurant group",cat:"Social",client:"Restaurant group",summary:"Four platforms managed with one consistent voice.",challenge:"Each location posted on its own and replies were slow.",did:"We set one strategy, wrote content, scheduled posts and handled comments and inbox.",kpis:[["+120%","Followers"],["12","Posts/month"],["<2h","Reply"]],tags:["Strategy","Community","Reporting"],img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop"},
  {title:"Product launch teaser for tech brand",cat:"Video",client:"Tech accessories",summary:"A 30-second teaser and 5 cut-downs for a new product drop.",challenge:"The launch needed buzz in under two weeks.",did:"We wrote the script, edited motion graphics and delivered vertical and square versions.",kpis:[["850K","Views"],["+41%","Add to cart"],["6","Cut-downs"]],tags:["Teaser","Motion graphics","Editing"],img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop"},
  {title:"Podcast to shorts for business studio",cat:"Video",client:"Business podcast",summary:"Long episodes turned into scroll-stopping short clips.",challenge:"Great episodes were getting almost no reach.",did:"We picked the best moments, added captions and hooks and posted 20 clips every month.",kpis:[["+210%","Views"],["20","Clips/month"],["+3.5K","Followers"]],tags:["Shorts","Captions","Editing"],img:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=500&fit=crop"},
  {title:"SaaS landing page for startup",cat:"Web",client:"Software startup",summary:"A single high-converting landing page with a clear demo flow.",challenge:"Traffic was coming in but few visitors booked a demo.",did:"We rewrote the headline and proof sections, redesigned the page and added a demo form.",kpis:[["+78%","Demo bookings"],["1.4s","Load"],["98","Speed"]],tags:["Landing page","Copywriting","Analytics"],img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"},
  {title:"Packaging design for coffee brand",cat:"Design",client:"Specialty coffee",summary:"Packaging artwork with a matching set of ad creatives.",challenge:"The product was premium but the design looked generic.",did:"We designed bag labels, a color system and 12 ad creatives that carried the same look.",kpis:[["3","Packaging"],["12","Ad creatives"],["+25%","Repeat orders"]],tags:["Packaging","Brand kit","Ad creatives"],img:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop"},
  {title:"Multi-platform ads for electronics store",cat:"Ads",client:"Online electronics",summary:"Meta, Google and TikTok campaigns with shared tracking.",challenge:"Each platform was run alone and nobody knew what drove sales.",did:"We set up conversion tracking, built creatives per platform and shifted budget to winners.",kpis:[["4.1x","ROAS"],["-32%","Cost/sale"],["3","Platforms"]],tags:["Meta ads","Google ads","TikTok ads"],img:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=500&fit=crop"},
  {title:"E-commerce SEO for home decor",cat:"SEO",client:"Home decor store",summary:"Category and product page SEO that grew organic sales.",challenge:"Almost all sales came from paid ads.",did:"We researched 25 keywords, rewrote 50 pages and built links on 75 websites.",kpis:[["+140%","Organic traffic"],["50","Pages"],["2x","Organic sales"]],tags:["Keywords","On-page SEO","Link building"],img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop"},
  {title:"Instagram growth for beauty brand",cat:"Social",client:"Beauty brand",summary:"Consistent content and community management that grew followers 3x.",challenge:"Organic reach was flat and engagement was dropping.",did:"We built a content system, ran UGC campaigns and engaged daily with the community.",kpis:[["3x","Followers"],["+180%","Reach"],["5.2%","Engagement"]],tags:["Instagram","UGC","Community"],img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop"},
  {title:"YouTube channel relaunch for educator",cat:"Video",client:"Online educator",summary:"Full channel relaunch with new branding, thumbnails and editing style.",challenge:"Subscriber growth had stalled for 8 months.",did:"We redesigned thumbnails, rewrote hooks, improved pacing and published twice a week.",kpis:[["+420%","Views"],["+18K","Subs"],["2","Videos/week"]],tags:["YouTube","Thumbnails","Editing"],img:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop"},
  {title:"Restaurant website with online ordering",cat:"Web",client:"Fine dining restaurant",summary:"A mobile-first website with reservations and online ordering.",challenge:"The old site had no online ordering and lost bookings.",did:"We built a fast website with reservation system, online menu and order integration.",kpis:[["+95%","Online orders"],["1.2s","Load"],["+60%","Bookings"]],tags:["Website","E-commerce","Booking"],img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop"},
  {title:"Logo & brand system for law firm",cat:"Design",client:"Law firm",summary:"A modern logo and full brand identity for a growing practice.",challenge:"The old logo looked outdated and didn't build trust.",did:"We designed a new wordmark, color system, business cards and stationery kit.",kpis:[["1","Logo"],["20+","Assets"],["+40%","Inquiries"]],tags:["Logo","Brand identity","Print"],img:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop"},
  {title:"Retargeting campaign for SaaS",cat:"Ads",client:"B2B SaaS",summary:"Retargeting campaigns that recovered lost trial signups.",challenge:"Visitors tried the product but didn't convert to paid.",did:"We built retargeting audiences, tested 8 creatives and set up sequential messaging.",kpis:[["+52%","Trial-to-paid"],["-40%","CAC"],["8","Creatives"]],tags:["Retargeting","SaaS","Funnel"],img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"},
  {title:"Content strategy for fintech app",cat:"Social",client:"Fintech startup",summary:"A 90-day content strategy across LinkedIn, X and YouTube.",challenge:"The team had no content system and posted randomly.",did:"We built a content calendar, wrote LinkedIn posts, scripts for YouTube and threads for X.",kpis:[["+320%","LinkedIn reach"],["90","Days content"],["+55","Leads"]],tags:["Strategy","LinkedIn","Content"],img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"},
  {title:"Product photography for e-commerce",cat:"Design",client:"Furniture brand",summary:"Complete product photography and retouching for 120 SKUs.",challenge:"Old photos looked dull and didn't show product quality.",did:"We shot studio and lifestyle photos, retouched 120 SKUs and delivered web-ready assets.",kpis:[["120","SKUs shot"],["+38%","Conversion"],["2 weeks","Turnaround"]],tags:["Photography","Retouching","E-commerce"],img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop"}
];

/* ===== BLOG POSTS ===== */
const POSTS = [
  ["How often should you post on social media?","Social","Frequency matters less than a clear, repeatable plan.","https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop"],
  ["Why Meta ads need 3 months to work","Ads","Testing creatives and audiences takes time and budget. Here's the real timeline.","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"],
  ["5 things every business website needs","Web","Speed, clear offer, trust signals, lead form and mobile layout. Nothing else.","https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop"],
  ["SEO basics for small businesses","SEO","Start with keywords, page titles and Google Business. Then expand.","https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=500&fit=crop"],
  ["Reels vs TikTok: where should you post?","Video","It depends on your audience. Here's how to decide in 5 minutes.","https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop"],
  ["How to write hooks that stop the scroll","Video","The first 3 seconds decide everything. Here are 12 proven hook formulas.","https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop"]
];

/* ===== JOBS ===== */
const JOBS = [
  ["Video Editor","Full time or part time · Lahore or remote"],
  ["Scriptwriter","Part time · Remote"],
  ["Meta Ads Specialist","Full time · Lahore"],
  ["Web Developer","Full time · Lahore or remote"],
  ["Graphic Designer","Full time · Lahore"],
  ["Content Strategist","Part time · Remote"]
];

/* ===== SEO ===== */
const PD = {
  home:["Artivex Media — Creative Agency for Video, Web & Meta Ads","One team for video, web, branding and Meta ads. Built for growing brands in the US and beyond."],
  services:["Services — Artivex Media","Video editing, web development, Meta ads, design and SEO — one team for your brand."],
  portfolio:["Portfolio — Artivex Media","21+ projects across video, web, design, ads and SEO. Real campaigns, real numbers."],
  blogs:["Insights — Artivex Media","Practical guides on social media, Meta ads, SEO and web design."],
  career:["Careers — Artivex Media","Open roles for video editors, scriptwriters, Meta ads specialists and developers."],
  contact:["Contact — Artivex Media","Book a free strategy call or message us on WhatsApp. We reply within one working day."]
};

/* ================================================================
   VIDEO SETUP — AUTOMATIC
   ================================================================ */
function setupVideo(){
  const v = $('#vid');
  const vs = $('#vsrc');
  const playBtn = $('#playBtn');
  const snd = $('#snd');
  const wrap = $('#videoWrap');
  if(!wrap) return;

  let sourceURL = "";
  if(VIDEO_DRIVE_ID){
    wrap.innerHTML = `<iframe src="https://drive.google.com/file/d/${VIDEO_DRIVE_ID}/preview" allow="autoplay; fullscreen" allowfullscreen title="Artivex Media showreel"></iframe>`;
    return;
  } else if(VIDEO_URL){
    sourceURL = VIDEO_URL;
  }

  if(!sourceURL || !v || !vs){
    if(playBtn) playBtn.innerHTML = '<span>Showreel coming soon</span>';
    return;
  }

  vs.src = sourceURL;
  v.poster = VIDEO_POSTER;
  v.load();

  if(playBtn){
    playBtn.addEventListener('click', () => {
      v.play().then(() => {
        playBtn.classList.add('hide');
      }).catch(err => {
        console.warn("Video play failed:", err);
        playBtn.classList.add('hide');
      });
    });
  }

  v.addEventListener('play', () => playBtn && playBtn.classList.add('hide'));
  v.addEventListener('pause', () => {
    if(v.currentTime === 0 && playBtn) playBtn.classList.remove('hide');
  });

  v.play().then(() => {
    if(playBtn) playBtn.classList.add('hide');
  }).catch(() => {});

  if(snd){
    snd.addEventListener('click', () => {
      v.muted = !v.muted;
      if(!v.muted){ v.currentTime = 0; v.play(); }
      snd.textContent = v.muted ? '🔊 Sound on' : '🔇 Mute';
    });
  }

  v.addEventListener('error', () => {
    console.warn("Video failed to load:", sourceURL);
    if(playBtn){
      playBtn.innerHTML = '<span>Video unavailable</span>';
      playBtn.classList.remove('hide');
    }
  });
}
setupVideo();

/* ================================================================
   RENDERING
   ================================================================ */
document.querySelectorAll('.svcs').forEach(el => {
  el.innerHTML = SV.map(([icon,name,desc]) =>
    `<div class="col-md-6 col-lg-4">
      <div class="svc">
        <div class="svc-icon">${icon}</div>
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="svc-arrow">Learn more <svg class="ico" style="width:.9em;height:.9em" aria-hidden="true"><use href="#arrow"/></svg></div>
      </div>
    </div>`
  ).join('');
});

const featured = $('#featured');
if(featured){
  featured.innerHTML = WORKS.slice(0,6).map(w =>
    `<div class="col-md-6 col-lg-4">
      <a href="#/portfolio" class="feat">
        <div class="feat-img"><img src="${w.img}" alt="${w.title}" loading="lazy"><span class="feat-tag">${w.cat}</span></div>
        <div class="feat-body">
          <span class="meta">${w.client}</span>
          <h3>${w.title}</h3>
          <p>${w.summary}</p>
          <div class="feat-kpis">${w.kpis.slice(0,2).map(k => `<div><b>${k[0]}</b><small>${k[1]}</small></div>`).join('')}</div>
        </div>
      </a>
    </div>`
  ).join('');
}

const fl = $('#fl'), works = $('#works');
if(fl && works){
  const cats = ['All', ...new Set(WORKS.map(w => w.cat))];
  fl.innerHTML = cats.map((c,i) => `<button type="button" class="${i?'':'on'}">${c}</button>`).join('');
  works.innerHTML = WORKS.map((w,i) =>
    `<div class="col-md-6 col-lg-4 work" data-c="${w.cat}">
      <a href="#" class="card2 pj" data-i="${i}">
        <div class="pthumb"><img src="${w.img}" alt="${w.title}" loading="lazy"><span class="pnum">${String(i+1).padStart(2,'0')}</span></div>
        <div class="body">
          <span class="meta">${w.cat} · ${w.client}</span>
          <h3>${w.title}</h3>
          <p>${w.summary}</p>
          <div class="kpis">${w.kpis.slice(0,2).map(k => `<div><b>${k[0]}</b><small>${k[1]}</small></div>`).join('')}</div>
        </div>
      </a>
    </div>`
  ).join('');

  works.onclick = e => {
    const a = e.target.closest('.pj');
    if(!a) return;
    e.preventDefault();
    const w = WORKS[a.dataset.i];
    if(!w) return;
    $('#pmb').innerHTML = `
      <img class="pm-img" src="${w.img.replace('w=800&h=500','w=1200&h=600')}" alt="${w.title}">
      <span class="meta">${w.cat} · ${w.client}</span>
      <h2 class="sec-title mt-2" style="font-size:1.8rem">${w.title}</h2>
      <p class="sec-sub">${w.summary}</p>
      <div class="row g-4 mt-2">
        <div class="col-md-6"><h3 class="pmh">Challenge</h3><p class="mb-0">${w.challenge}</p></div>
        <div class="col-md-6"><h3 class="pmh">What we did</h3><p class="mb-0">${w.did}</p></div>
      </div>
      <div class="kpis">${w.kpis.map(k => `<div><b>${k[0]}</b><small>${k[1]}</small></div>`).join('')}</div>
      <div class="chips">${w.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <a class="btn btn-gold mt-4" href="#/contact" data-go="1"><span>Start a similar project</span><svg class="ico" aria-hidden="true"><use href="#arrow"/></svg></a>`;
    bootstrap.Modal.getOrCreateInstance($('#pm')).show();
  };

  $('#pmb').addEventListener('click', e => {
    const a = e.target.closest('[data-go]');
    if(!a) return;
    e.preventDefault();
    const el = $('#pm');
    el.addEventListener('hidden.bs.modal', () => { location.hash = '/contact'; }, {once:true});
    bootstrap.Modal.getOrCreateInstance(el).hide();
  });

  fl.onclick = e => {
    if(e.target.tagName !== 'BUTTON') return;
    [...fl.children].forEach(b => b.classList.toggle('on', b === e.target));
    document.querySelectorAll('.work').forEach(w => {
      w.hidden = e.target.textContent !== 'All' && w.dataset.c !== e.target.textContent;
    });
  };
}

const posts = $('#posts');
if(posts){
  posts.innerHTML = POSTS.map(([t,c,d,img]) =>
    `<div class="col-md-6 col-lg-4">
      <a href="#/blogs" class="card2 post">
        <div class="thumb"><img src="${img}" alt="${t}" loading="lazy"></div>
        <div class="body"><span class="meta">${c}</span><h3>${t}</h3><p>${d}</p></div>
      </a>
    </div>`
  ).join('');
  posts.onclick = e => { if(e.target.closest('.post')) e.preventDefault(); };
}

const jobs = $('#jobs');
if(jobs){
  jobs.innerHTML = JOBS.map(([t,d]) =>
    `<div class="job">
      <div><h3>${t}</h3><p>${d}</p></div>
      <a class="btn btn-ghost" href="mailto:${EMAIL}?subject=${encodeURIComponent('Application: '+t)}"><span>Apply now</span><svg class="ico" aria-hidden="true"><use href="#arrow"/></svg></a>
    </div>`
  ).join('');
}

/* ===== ROUTER ===== */
function route(){
  let p = (location.hash.replace(/^#\/?/,'') || 'home');
  const target = $('#'+p);
  if(!target || !target.classList.contains('page')) p = 'home';
  document.querySelectorAll('.page').forEach(x => x.classList.toggle('on', x.id === p));
  document.querySelectorAll('.nav-link[data-p]').forEach(a =>
    a.classList.toggle('act', a.dataset.p.split(' ').includes(p))
  );
  const cta = $('#cta');
  if(cta) cta.hidden = p === 'contact';
  const d = PD[p] || PD.home;
  document.title = d[0];
  const md = $('meta[name=description]'); if(md) md.setAttribute('content', d[1]);
  window.scrollTo(0,0);
  const n = $('#nav');
  if(n && n.classList.contains('show')){
    const inst = bootstrap.Collapse.getOrCreateInstance(n);
    if(inst) inst.hide();
  }
}
addEventListener('hashchange', route);
route();

document.querySelectorAll('.page').forEach(pg => {
  const c = pg.querySelector('.phead .container');
  if(!c || !pg.dataset.t) return;
  if(c.querySelector('.crumb')) return;
  c.insertAdjacentHTML('afterbegin', `<div class="crumb"><a href="#/">Home</a><span>/</span>${pg.dataset.t}</div>`);
});

/* ===== CONTACT FORM ===== */
const cf = $('#cf');
if(cf){
  cf.addEventListener('submit', e => {
    e.preventDefault();
    if(!cf.reportValidity()) return;
    const f = new FormData(cf);
    const msg = `*New enquiry - Artivex Media*\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\nMessage: ${f.get('message')}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
    cf.reset();
    const ok = $('#ok');
    if(ok){ ok.hidden = false; setTimeout(() => ok.hidden = true, 8000); }
  });
}
const em = $('#em');
if(em){
  em.onclick = () => {
    if(!cf || !cf.reportValidity()) return;
    const f = new FormData(cf);
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Enquiry from ' + f.get('name')) + '&body=' + encodeURIComponent(`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\n\n${f.get('message')}`);
  };
}

/* ===== FAQ ===== */
const FAQ = [
  ["What services does Artivex Media offer?","We offer video editing, scriptwriting, web development, graphic design, SEO, social media management and Meta ads management — all from one team."],
  ["How long does it take to see results?","Growth is not a one-week trick. Most brands see a clear picture of what works in 3 to 6 months of consistent publishing, testing and improving."],
  ["Do you work with businesses in the United States?","Yes. We work remotely with brands in the US and beyond. Call or message us on WhatsApp at +1 (310) 622-3489."],
  ["What do your prices include?","Every project is scoped individually. Reach out for a custom quote — pricing depends on deliverables, timeline and scope."],
  ["How do I get started?","Use the contact form to book a free strategy call. Your details open in WhatsApp, and we reply within one working day."],
  ["Do you offer one-off projects?","Yes. While most of our work is monthly retainers, we also take on one-off projects like brand films, website builds and brand identity kits."]
];
const faqEl = $('#faq');
if(faqEl){
  faqEl.innerHTML = FAQ.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('');
}
const ld = document.createElement('script');
ld.type = 'application/ld+json';
ld.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity: FAQ.map(([q,a]) => ({"@type":"Question", name:q, acceptedAnswer:{"@type":"Answer", text:a}}))});
document.head.appendChild(ld);

/* ===== TESTIMONIALS ===== */
const qEl = $('#quotes');
if(qEl){
  qEl.innerHTML = [
    ["One team now runs our reels and our ads. No more chasing five freelancers. The output quality is on another level.","Marcus Reed","Founder, Retail brand","https://randomuser.me/api/portraits/men/32.jpg"],
    ["The monthly report finally shows where our ad budget goes. We cut waste and doubled ROAS in 4 months.","Emily Chen","CMO, E-commerce store","https://randomuser.me/api/portraits/women/44.jpg"],
    ["Our new website loads fast and the contact form brings real leads. Best agency decision we've made.","David Park","Owner, Local service business","https://randomuser.me/api/portraits/men/45.jpg"]
  ].map(([t,n,r,img]) =>
    `<div class="col-md-4">
      <figure class="quote">
        <div class="stars">★★★★★</div>
        <p>"${t}"</p>
        <div class="author"><img src="${img}" alt="${n}"><div><b>${n}</b><small>${r}</small></div></div>
      </figure>
    </div>`
  ).join('');
}

/* ===== COUNTERS + REVEAL ===== */
const io = new IntersectionObserver(es => es.forEach(x => {
  if(!x.isIntersecting) return;
  const e = x.target;
  e.classList.add('in');
  io.unobserve(e);
  setTimeout(() => { e.style.transitionDelay = ''; }, 1200);
  const n = +e.dataset.n;
  if(n){
    const t0 = performance.now();
    const run = t => {
      const k = Math.min((t - t0) / 1400, 1);
      const eased = 1 - Math.pow(1-k, 3);
      e.textContent = Math.round(n * eased) + (e.dataset.s || '');
      if(k < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }
}), {threshold:.15});

document.querySelectorAll('.svc,.step,.quote,.card2,.job,.stat,.feat,details').forEach((e,i) => {
  e.classList.add('rv');
  e.style.transitionDelay = (i % 4) * 80 + 'ms';
  io.observe(e);
});
document.querySelectorAll('.stat b[data-n]').forEach(b => io.observe(b));

/* ===== SCROLL BAR + NAVBAR ===== */
addEventListener('scroll', () => {
  const h = document.documentElement;
  const bar = $('#bar');
  if(bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100) + '%';
  const nav = $('.navbar');
  if(nav) nav.classList.toggle('sc', h.scrollTop > 10);
}, {passive:true});
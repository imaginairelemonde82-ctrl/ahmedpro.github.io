/* ═══════════════════════════════════════════════════
   CINÉMA MAGNIFIQUE — SHARED JAVASCRIPT
   Cinematic transitions + multilingual + interactions
═══════════════════════════════════════════════════ */

/* ─── TRANSLATIONS ─────────────────────────────── */
const T = {
  en: {
    nav_home:"Home", nav_movies:"Movies", nav_about:"About", nav_contact:"Contact",
    hero_badge:"Premium Cinematic Experience",
    hero_title:"DISCOVER<br>GREAT CINEMA",
    hero_sub:"Over 12,000 films curated for passionate cinephiles worldwide",
    hero_btn1:"Explore Films", hero_btn2:"Watch Trailer",
    feat_tag:"Selection", feat_title:"Featured Films",
    spot_tag:"Film of the Week",
    spot_title:"Dune: Part Two",
    spot_desc:"Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future.",
    spot_genre:"Sci-Fi / Epic", spot_dir:"Denis Villeneuve", spot_year:"2024",
    s1v:"8.5", s1l:"IMDb Rating",
    s2v:"166", s2l:"Minutes",
    s3v:"2024", s3l:"Year",
    btn_watch:"Watch Now", btn_info:"More Info",
    cat_tag:"Browse", cat_title:"Explore by Genre",
    g_action:"Action", g_drama:"Drama", g_scifi:"Sci-Fi",
    g_comedy:"Comedy", g_thriller:"Thriller", g_romance:"Romance",
    g_horror:"Horror", g_docs:"Documentary",
    nl_title:"Stay in the Frame",
    nl_sub:"Get curated picks and exclusive premiere alerts",
    nl_ph:"Your email address",
    nl_btn:"Subscribe",
    f_desc:"The ultimate destination for cinema lovers. Discover, watch and celebrate the art of filmmaking.",
    f_links:"Quick Links", f_genres:"Genres", f_info:"Info",
    f_rights:"All rights reserved",
    mq:["New Releases","Top Rated","Award Winners","Exclusive Premieres","4K Ultra HD","Dolby Atmos","Director's Cuts","World Cinema"],
    // About
    ab_eye:"Our Story", ab_title:"About",
    ab_h:"Passionate<br>About <em>Cinema</em>",
    ab_p1:"Founded in 2015, Cinéma Magnifique was born from a deep love of the seventh art. We believe great cinema has the power to transform perspectives, ignite emotions, and connect people across cultures.",
    ab_p2:"Our platform brings together over 12,000 films from 150 countries, curated by a passionate team of cinephiles, critics, and filmmakers.",
    ab_vals:"Our Philosophy", ab_vals_t:"What We Stand For",
    v1t:"Curatorial Excellence", v1p:"Every film is handpicked by expert curators who consider artistic merit, cultural significance, and storytelling craft.",
    v2t:"Global Perspective", v2p:"We champion films from every corner of the world — supporting indie filmmakers and major studios alike.",
    v3t:"Accessibility First", v3p:"Available in multiple languages with subtitles and adaptive interfaces for every user.",
    team_tag:"People", team_title:"Our Team",
    hist_tag:"History", hist_title:"Our Journey",
    // Contact
    co_eye:"Get in Touch", co_title:"Contact",
    co_h:"We'd Love to<br><em>Hear From You</em>",
    co_p:"Have a question, suggestion, or want to partner with us? Our team is here.",
    co_addr:"Address", co_email:"Email", co_phone:"Phone", co_hours:"Hours",
    co_follow:"Follow Us",
    cf_h:"Send a Message",
    lf_fn:"First Name", lf_ln:"Last Name",
    lf_email:"Email", lf_subj:"Subject", lf_msg:"Message",
    lf_agree:"I agree to the Privacy Policy and Terms",
    lf_send:"Send Message",
    lf_ok:"✓ Message sent! We'll reply within 24 hours.",
    faq_tag:"Help", faq_title:"FAQ",
    // Movies
    mv_eye:"Catalog", mv_title:"Movies",
    mv_sub:"12,000+ films from 150 countries",
    top_title:"Top 10 This Week",
    search_ph:"Search films…",
    sort_pop:"Most Popular", sort_rat:"Highest Rated", sort_new:"Newest", sort_az:"A → Z",
    load_more:"Load More Films",
    f_all:"All"
  },
  fr: {
    nav_home:"Accueil", nav_movies:"Films", nav_about:"À Propos", nav_contact:"Contact",
    hero_badge:"Expérience Cinématographique Premium",
    hero_title:"DÉCOUVREZ<br>LE GRAND CINÉMA",
    hero_sub:"Plus de 12 000 films sélectionnés pour les cinéphiles passionnés",
    hero_btn1:"Explorer", hero_btn2:"Voir la Bande-annonce",
    feat_tag:"Sélection", feat_title:"Films en Vedette",
    spot_tag:"Film de la Semaine",
    spot_title:"Dune : Deuxième Partie",
    spot_desc:"Paul Atréides s'unit à Chani et aux Fremen dans une quête de vengeance contre les conspirateurs qui ont détruit sa famille. Confronté à un choix entre l'amour de sa vie et le destin de l'univers connu, il cherche à empêcher un avenir terrible.",
    spot_genre:"SF / Épique", spot_dir:"Denis Villeneuve", spot_year:"2024",
    s1v:"8,5", s1l:"Note IMDb",
    s2v:"166", s2l:"Minutes",
    s3v:"2024", s3l:"Année",
    btn_watch:"Regarder", btn_info:"Plus d'infos",
    cat_tag:"Parcourir", cat_title:"Explorer par Genre",
    g_action:"Action", g_drama:"Drame", g_scifi:"Science-Fiction",
    g_comedy:"Comédie", g_thriller:"Thriller", g_romance:"Romance",
    g_horror:"Horreur", g_docs:"Documentaire",
    nl_title:"Restez dans le Cadre",
    nl_sub:"Recevez des sélections et des alertes de premières exclusives",
    nl_ph:"Votre adresse email",
    nl_btn:"S'abonner",
    f_desc:"La destination ultime pour les amateurs de cinéma. Découvrez et célébrez l'art du cinéma.",
    f_links:"Liens Rapides", f_genres:"Genres", f_info:"Info",
    f_rights:"Tous droits réservés",
    mq:["Nouvelles Sorties","Mieux Notés","Primés","Avant-premières","4K Ultra HD","Dolby Atmos","Versions Réalisateur","Cinéma Mondial"],
    ab_eye:"Notre Histoire", ab_title:"À Propos",
    ab_h:"Passionnés<br>par le <em>Cinéma</em>",
    ab_p1:"Fondé en 2015, Cinéma Magnifique est né d'un amour profond pour le septième art. Nous croyons que le grand cinéma a le pouvoir de transformer les perspectives et d'émouvoir.",
    ab_p2:"Notre plateforme rassemble plus de 12 000 films de 150 pays, curatés par une équipe passionnée de cinéphiles et critiques.",
    ab_vals:"Notre Philosophie", ab_vals_t:"Nos Valeurs",
    v1t:"Excellence Éditoriale", v1p:"Chaque film est sélectionné à la main par nos curateurs experts selon son mérite artistique et sa signification culturelle.",
    v2t:"Perspective Mondiale", v2p:"Nous défendons les films du monde entier — des réalisateurs indépendants aux grands studios.",
    v3t:"Accessibilité", v3p:"Disponible en plusieurs langues avec sous-titres et interfaces adaptatives pour tous.",
    team_tag:"Équipe", team_title:"Notre Équipe",
    hist_tag:"Historique", hist_title:"Notre Parcours",
    co_eye:"Nous Contacter", co_title:"Contact",
    co_h:"Nous Serions Ravis<br><em>d'Avoir de Vos Nouvelles</em>",
    co_p:"Une question, une suggestion ou un partenariat ? Notre équipe est disponible.",
    co_addr:"Adresse", co_email:"Email", co_phone:"Téléphone", co_hours:"Horaires",
    co_follow:"Suivez-Nous",
    cf_h:"Envoyer un Message",
    lf_fn:"Prénom", lf_ln:"Nom",
    lf_email:"Email", lf_subj:"Sujet", lf_msg:"Message",
    lf_agree:"J'accepte la Politique de Confidentialité et les CGU",
    lf_send:"Envoyer",
    lf_ok:"✓ Message envoyé ! Nous répondrons sous 24h.",
    faq_tag:"Aide", faq_title:"FAQ",
    mv_eye:"Catalogue", mv_title:"Films",
    mv_sub:"Plus de 12 000 films de 150 pays",
    top_title:"Top 10 Cette Semaine",
    search_ph:"Rechercher des films…",
    sort_pop:"Les Plus Populaires", sort_rat:"Mieux Notés", sort_new:"Plus Récents", sort_az:"A → Z",
    load_more:"Charger Plus",
    f_all:"Tous"
  },
  ar: {
    nav_home:"الرئيسية", nav_movies:"الأفلام", nav_about:"عن الموقع", nav_contact:"اتصل بنا",
    hero_badge:"تجربة سينمائية متميزة",
    hero_title:"اكتشف<br>السينما العظيمة",
    hero_sub:"أكثر من 12,000 فيلم منتقى لعشاق السينما حول العالم",
    hero_btn1:"استكشف الأفلام", hero_btn2:"شاهد الإعلان",
    feat_tag:"اختيارات", feat_title:"أفلام مميزة",
    spot_tag:"فيلم الأسبوع",
    spot_title:"ديون: الجزء الثاني",
    spot_desc:"يتحد بول أتريدس مع تشاني والفريمن في مسيرة انتقام ضد المتآمرين الذين دمروا عائلته. مواجهاً خياراً بين حب حياته ومصير الكون المعروف، يسعى لمنع مستقبل مروع.",
    spot_genre:"خيال علمي / ملحمي", spot_dir:"دوني فيلنوف", spot_year:"٢٠٢٤",
    s1v:"٨.٥", s1l:"تقييم IMDb",
    s2v:"١٦٦", s2l:"دقيقة",
    s3v:"٢٠٢٤", s3l:"السنة",
    btn_watch:"شاهد الآن", btn_info:"مزيد من المعلومات",
    cat_tag:"تصفح", cat_title:"استكشف حسب النوع",
    g_action:"أكشن", g_drama:"دراما", g_scifi:"خيال علمي",
    g_comedy:"كوميديا", g_thriller:"إثارة", g_romance:"رومانسية",
    g_horror:"رعب", g_docs:"وثائقي",
    nl_title:"ابقَ في الإطار",
    nl_sub:"احصل على اختيارات منتقاة وتنبيهات العروض الحصرية",
    nl_ph:"عنوان بريدك الإلكتروني",
    nl_btn:"اشترك",
    f_desc:"الوجهة المثلى لعشاق السينما. اكتشف وشاهد واحتفل بفن صناعة الأفلام.",
    f_links:"روابط سريعة", f_genres:"الأنواع", f_info:"معلومات",
    f_rights:"جميع الحقوق محفوظة",
    mq:["إصدارات جديدة","الأعلى تقييماً","الفائزون بجوائز","عروض حصرية","4K فائق الجودة","دولبي أتموس","نسخ المخرج","سينما عالمية"],
    ab_eye:"قصتنا", ab_title:"عن الموقع",
    ab_h:"شغف<br>بعالم <em>السينما</em>",
    ab_p1:"تأسس موقع سينيما ماغنيفيك عام 2015 من حب عميق للفن السابع. نؤمن أن السينما العظيمة قادرة على تغيير المنظور وإيقاد المشاعر.",
    ab_p2:"تجمع منصتنا أكثر من 12,000 فيلم من 150 دولة، مختارة من قبل فريق متحمس من عشاق السينما والنقاد.",
    ab_vals:"فلسفتنا", ab_vals_t:"ما نقف من أجله",
    v1t:"التميز التحريري", v1p:"كل فيلم منتقى يدوياً من قبل خبرائنا بناءً على الجدارة الفنية والأهمية الثقافية.",
    v2t:"المنظور العالمي", v2p:"ندعم الأفلام من كل أنحاء العالم، من المخرجين المستقلين إلى الاستوديوهات الكبرى.",
    v3t:"سهولة الوصول", v3p:"متاح بلغات متعددة مع ترجمات وواجهات متكيفة لجميع المستخدمين.",
    team_tag:"الفريق", team_title:"فريقنا",
    hist_tag:"التاريخ", hist_title:"مسيرتنا",
    co_eye:"تواصل معنا", co_title:"اتصل بنا",
    co_h:"يسعدنا<br><em>سماعك</em>",
    co_p:"هل لديك سؤال أو مقترح أو ترغب في الشراكة؟ فريقنا في خدمتك.",
    co_addr:"العنوان", co_email:"البريد الإلكتروني", co_phone:"الهاتف", co_hours:"أوقات العمل",
    co_follow:"تابعنا",
    cf_h:"أرسل لنا رسالة",
    lf_fn:"الاسم الأول", lf_ln:"اسم العائلة",
    lf_email:"البريد الإلكتروني", lf_subj:"الموضوع", lf_msg:"الرسالة",
    lf_agree:"أوافق على سياسة الخصوصية والشروط",
    lf_send:"إرسال الرسالة",
    lf_ok:"✓ تم إرسال رسالتك! سنرد خلال 24 ساعة.",
    faq_tag:"مساعدة", faq_title:"الأسئلة الشائعة",
    mv_eye:"الكتالوج", mv_title:"الأفلام",
    mv_sub:"أكثر من 12,000 فيلم من 150 دولة",
    top_title:"أفضل 10 هذا الأسبوع",
    search_ph:"ابحث عن أفلام…",
    sort_pop:"الأكثر شعبية", sort_rat:"الأعلى تقييماً", sort_new:"الأحدث", sort_az:"أ ← ي",
    load_more:"تحميل المزيد",
    f_all:"الكل"
  }
};

/* ─── STATE ──────────────────────────────────── */
let lang = localStorage.getItem('cm_lang') || 'en';
let transitioning = false;

/* ─── CINEMATIC PAGE TRANSITION ────────────── */
function navigate(url) {
  if (transitioning || window.location.pathname.endsWith(url)) return;
  transitioning = true;

  const wrap = document.getElementById('wrap');
  const trans = document.getElementById('film-trans');

  // 1. Fade out content
  if (wrap) { wrap.classList.add('out'); }

  // 2. Bring in film strips after 200ms
  setTimeout(() => {
    if (trans) trans.classList.add('ft-active');
  }, 200);

  // 3. Navigate after strips are in
  setTimeout(() => {
    window.location.href = url;
  }, 680);
}

function initTransitionEnter() {
  const wrap = document.getElementById('wrap');
  const trans = document.getElementById('film-trans');

  // Start with strips closed (came from a navigation)
  if (sessionStorage.getItem('cm_nav')) {
    sessionStorage.removeItem('cm_nav');
    if (trans) trans.classList.add('ft-active');
    if (wrap) wrap.style.opacity = '0';

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (trans) trans.classList.remove('ft-active');
        if (wrap) {
          wrap.style.opacity = '';
          wrap.classList.add('in');
          setTimeout(() => wrap.classList.remove('in'), 700);
        }
        transitioning = false;
      }, 100);
    });
  } else {
    // First load — simple fade in
    if (wrap) {
      wrap.style.opacity = '0';
      requestAnimationFrame(() => {
        setTimeout(() => {
          wrap.classList.add('in');
          setTimeout(() => { wrap.style.opacity = ''; wrap.classList.remove('in'); }, 700);
        }, 80);
      });
    }
    transitioning = false;
  }
}

// Intercept all internal nav links
function interceptLinks() {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    if (a.dataset.noTrans) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      sessionStorage.setItem('cm_nav', '1');
      navigate(href);
    });
  });
}

/* ─── LANGUAGE ───────────────────────────────── */
function setLang(l) {
  lang = l;
  localStorage.setItem('cm_lang', l);

  const isRtl = l === 'ar';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = l;
  document.body.lang = l;

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = T[l]?.[key];
    if (val === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });

  updateMarquee(l);
}

function updateMarquee(l) {
  const items = T[l]?.mq;
  if (!items) return;
  document.querySelectorAll('.marquee-track').forEach(track => {
    const doubled = [...items, ...items];
    track.innerHTML = doubled.map(i => `<span class="m-item">${i}</span>`).join('');
  });
}

/* ─── CURSOR ─────────────────────────────────── */
function initCursor() {
  const dot = document.getElementById('cdot');
  const ring = document.getElementById('cring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  const interactables = 'a,button,.movie-card,.cat-card,.lang-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactables)) document.body.classList.add('chov');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactables)) document.body.classList.remove('chov');
  });

  (function animRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();
}

/* ─── NAVBAR ─────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/* ─── MOBILE MENU ────────────────────────────── */
function initMobile() {
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob');
  const cls = document.getElementById('mob-close');
  if (!ham || !mob) return;

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });

  if (cls) cls.addEventListener('click', closeMob);
  mob.addEventListener('click', e => { if (e.target === mob) closeMob(); });

  function closeMob() {
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ─── SCROLL REVEAL ──────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── 3D TILT ────────────────────────────────── */
function initTilt() {
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const cx = r.width / 2, cy = r.height / 2;
      const rotY = ((x - cx) / cx) * 7;
      const rotX = ((cy - y) / cy) * 4;
      card.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ─── FILTER ─────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });
}

function filterCards(genre) {
  document.querySelectorAll('.movie-card[data-genre]').forEach(card => {
    const show = genre === 'all' || card.dataset.genre === genre;
    card.style.transition = 'opacity 0.3s, transform 0.3s';
    if (show) {
      card.style.display = '';
      setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.92)';
      setTimeout(() => { card.style.display = 'none'; }, 280);
    }
  });
}

/* ─── SEARCH ─────────────────────────────────── */
function initSearch() {
  const inp = document.querySelector('[data-search]');
  if (!inp) return;
  inp.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.movie-card').forEach(card => {
      const title = card.querySelector('.c-title')?.textContent.toLowerCase() || '';
      card.style.display = (!q || title.includes(q)) ? '' : 'none';
    });
  });
}

/* ─── CONTACT FORM ───────────────────────────── */
function initContactForm() {
  const form = document.getElementById('cf');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;
    btn.textContent = '⟳ Sending…';
    setTimeout(() => {
      const ok = document.getElementById('cf-ok');
      if (ok) { ok.style.display = 'block'; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
      btn.disabled = false;
      btn.setAttribute('data-t', 'lf_send');
      setLang(lang);
    }, 1600);
  });
}

/* ─── NEWSLETTER ─────────────────────────────── */
function initNewsletter() {
  document.querySelectorAll('[data-nl]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const inp = form.querySelector('input');
      const btn = form.querySelector('button');
      if (!inp.value.trim()) return;
      btn.textContent = '✓';
      btn.style.background = '#2d9a5a';
      btn.style.color = '#fff';
      inp.value = '';
      setTimeout(() => { btn.textContent = T[lang].nl_btn; btn.style.background = ''; btn.style.color = ''; }, 3000);
    });
  });
}

/* ─── SPOTLIGHT 3D PARALLAX ──────────────────── */
function initSpotlight() {
  const poster = document.querySelector('.spot-poster-wrap');
  if (!poster) return;
  document.addEventListener('mousemove', e => {
    const rx = (e.clientY / window.innerHeight - 0.5) * -6;
    const ry = (e.clientX / window.innerWidth - 0.5) * 8;
    poster.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
}

/* ─── HERO PARALLAX ──────────────────────────── */
function initHeroParallax() {
  const grid = document.querySelector('.hero-grid');
  if (!grid) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    grid.style.transform = `rotateX(52deg) translateY(calc(40% + ${y * 0.35}px)) scale(2.5)`;
  }, { passive: true });
}

/* ─── INIT ALL ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTransitionEnter();
  initCursor();
  initNavbar();
  initMobile();
  initReveal();
  initTilt();
  initFilters();
  initSearch();
  initContactForm();
  initNewsletter();
  initSpotlight();
  initHeroParallax();

  // Apply language
  setLang(lang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Intercept nav links AFTER setLang (so URLs are real)
  setTimeout(interceptLinks, 50);
});

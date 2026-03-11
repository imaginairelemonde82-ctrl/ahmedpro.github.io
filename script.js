// ─── TRANSLATIONS ───────────────────────────────────────────────
const translations = {
  en: {
    nav_home: "Home", nav_movies: "Movies", nav_about: "About", nav_contact: "Contact",
    hero_badge: "Premium Cinematic Experience",
    hero_title: "CINÉMA\nMAGNIFIQUE",
    hero_sub: "Discover the world's greatest films in stunning quality",
    hero_cta1: "Explore Now", hero_cta2: "Watch Trailer",
    hero_scroll: "Scroll",
    featured_tag: "Selection", featured_title: "Featured Films",
    spotlight_tag: "Film of the Week",
    spotlight_title: "Dune: Part Two",
    spotlight_desc: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    spotlight_genre: "Sci-Fi", spotlight_year: "2024", spotlight_rating: "8.5",
    stat1_val: "8.5", stat1_lbl: "IMDb Rating",
    stat2_val: "166", stat2_lbl: "Min Duration",
    stat3_val: "2024", stat3_lbl: "Year",
    btn_watch: "Watch Now", btn_info: "More Info",
    cat_tag: "Browse", cat_title: "Explore by Genre",
    cat_action: "Action", cat_drama: "Drama", cat_sci: "Sci-Fi",
    cat_comedy: "Comedy", cat_thriller: "Thriller", cat_romance: "Romance",
    cat_horror: "Horror", cat_docs: "Documentary",
    footer_desc: "The ultimate destination for cinema lovers. Discover, watch and celebrate the art of filmmaking.",
    footer_links: "Quick Links", footer_genres: "Genres", footer_info: "Information",
    footer_rights: "All rights reserved",
    marquee_items: ["New Releases", "Top Rated", "Award Winners", "Exclusive Premieres", "4K Ultra HD", "Dolby Atmos", "Director's Cuts", "World Cinema"]
  },
  fr: {
    nav_home: "Accueil", nav_movies: "Films", nav_about: "À propos", nav_contact: "Contact",
    hero_badge: "Expérience Cinématographique Premium",
    hero_title: "CINÉMA\nMAGNIFIQUE",
    hero_sub: "Découvrez les plus grands films du monde en qualité exceptionnelle",
    hero_cta1: "Explorer", hero_cta2: "Voir Bande-annonce",
    hero_scroll: "Défiler",
    featured_tag: "Sélection", featured_title: "Films en Vedette",
    spotlight_tag: "Film de la Semaine",
    spotlight_title: "Dune: Deuxième Partie",
    spotlight_desc: "Paul Atréides s'unit à Chani et aux Fremen dans une quête de vengeance contre les conspirateurs qui ont détruit sa famille.",
    spotlight_genre: "Sci-Fi", spotlight_year: "2024", spotlight_rating: "8.5",
    stat1_val: "8.5", stat1_lbl: "Note IMDb",
    stat2_val: "166", stat2_lbl: "Min Durée",
    stat3_val: "2024", stat3_lbl: "Année",
    btn_watch: "Regarder", btn_info: "Plus d'infos",
    cat_tag: "Parcourir", cat_title: "Explorer par Genre",
    cat_action: "Action", cat_drama: "Drame", cat_sci: "Science-Fiction",
    cat_comedy: "Comédie", cat_thriller: "Thriller", cat_romance: "Romance",
    cat_horror: "Horreur", cat_docs: "Documentaire",
    footer_desc: "La destination ultime pour les amateurs de cinéma. Découvrez, regardez et célébrez l'art du cinéma.",
    footer_links: "Liens Rapides", footer_genres: "Genres", footer_info: "Informations",
    footer_rights: "Tous droits réservés",
    marquee_items: ["Nouvelles Sorties", "Mieux Notés", "Primés", "Avant-premières", "4K Ultra HD", "Dolby Atmos", "Versions Réalisateur", "Cinéma Mondial"]
  },
  ar: {
    nav_home: "الرئيسية", nav_movies: "الأفلام", nav_about: "عن الموقع", nav_contact: "اتصل بنا",
    hero_badge: "تجربة سينمائية متميزة",
    hero_title: "سينيما\nرائعة",
    hero_sub: "اكتشف أعظم أفلام العالم بجودة استثنائية",
    hero_cta1: "استكشف الآن", hero_cta2: "شاهد الإعلان",
    hero_scroll: "انتقل",
    featured_tag: "اختيارات", featured_title: "أفلام مميزة",
    spotlight_tag: "فيلم الأسبوع",
    spotlight_title: "ديون: الجزء الثاني",
    spotlight_desc: "يتحد بول أتريدس مع تشاني والفريمن في رحلة انتقام ضد المتآمرين الذين دمروا عائلته.",
    spotlight_genre: "خيال علمي", spotlight_year: "٢٠٢٤", spotlight_rating: "٨.٥",
    stat1_val: "٨.٥", stat1_lbl: "تقييم IMDb",
    stat2_val: "١٦٦", stat2_lbl: "دقيقة مدة",
    stat3_val: "٢٠٢٤", stat3_lbl: "السنة",
    btn_watch: "شاهد الآن", btn_info: "مزيد من المعلومات",
    cat_tag: "تصفح", cat_title: "استكشف حسب النوع",
    cat_action: "أكشن", cat_drama: "دراما", cat_sci: "خيال علمي",
    cat_comedy: "كوميديا", cat_thriller: "إثارة", cat_romance: "رومانسية",
    cat_horror: "رعب", cat_docs: "وثائقي",
    footer_desc: "الوجهة المثلى لعشاق السينما. اكتشف وشاهد واحتفل بفن صنع الأفلام.",
    footer_links: "روابط سريعة", footer_genres: "الأنواع", footer_info: "معلومات",
    footer_rights: "جميع الحقوق محفوظة",
    marquee_items: ["إصدارات جديدة", "الأعلى تقييماً", "الفائزون بجوائز", "عروض حصرية", "4K فائق الجودة", "دولبي أتموس", "نسخ المخرج", "سينما عالمية"]
  }
};

// Current language
let currentLang = localStorage.getItem('cinemaLang') || 'en';

// ─── LANGUAGE SWITCHER ───────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cinemaLang', lang);
  
  // RTL/LTR
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all translatable elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update active lang btn
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update marquee
  updateMarquee(lang);
}

function updateMarquee(lang) {
  const track = document.querySelector('.marquee-track');
  if (!track || !translations[lang]) return;
  const items = translations[lang].marquee_items;
  if (!items) return;
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(item => `
    <span class="marquee-item">
      <span class="marquee-dot"></span>
      ${item}
    </span>
  `).join('');
}

// ─── CUSTOM CURSOR ───────────────────────────────────────────────
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if (!cursor || !ring) return;
  
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── 3D TILT EFFECT ──────────────────────────────────────────────
function initTilt() {
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotY = ((x - cx) / cx) * 8;
      const rotX = ((cy - y) / cy) * 5;
      card.style.transform = `translateY(-15px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ─── PAGE LOADER ─────────────────────────────────────────────────
function initLoader() {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;
  setTimeout(() => { loader.classList.add('hidden'); }, 1500);
}

// ─── FILTER BUTTONS ──────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const genre = btn.dataset.genre;
      filterMovies(genre);
    });
  });
}

function filterMovies(genre) {
  document.querySelectorAll('.movie-card').forEach(card => {
    if (genre === 'all' || card.dataset.genre === genre || !genre) {
      card.style.display = '';
      setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.9)';
      setTimeout(() => { card.style.display = 'none'; }, 300);
    }
  });
}

// ─── SEARCH ──────────────────────────────────────────────────────
function initSearch() {
  const input = document.querySelector('.search-input');
  if (!input) return;
  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.movie-card').forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      card.style.display = title.includes(q) || !q ? '' : 'none';
    });
  });
}

// ─── NAVBAR SCROLL ───────────────────────────────────────────────
function initNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 50
      ? 'rgba(5,5,8,0.98)'
      : 'linear-gradient(to bottom, rgba(5,5,8,0.98), transparent)';
  });
}

// ─── INIT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initScrollReveal();
  initTilt();
  initFilters();
  initSearch();
  initNavbar();
  setLanguage(currentLang);
  
  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});

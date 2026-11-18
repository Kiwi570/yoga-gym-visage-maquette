/* Effets propres à Yoga Gym du Visage (« Le geste qui remonte »). Le socle gère l'ouverture, le voile en iris,
   l'en-tête, le menu, les mesures, les boucles et la bibliothèque d'effets (posés par attributs dans les pages).
   Effets du plan (data-effet) : arche-lift, manifeste, carte-visage, quatre-volets, trois-mois. */
import { demarrer, versObjet, suivre, lacher, quand } from './socle/index.js?v=1';
import { init as initPile } from './modules/temoignages-en-pile/module.js?v=1';
import { init as initCarteCadeau } from './modules/carte-cadeau-qui-se-compose/module.js?v=1';
import { init as initFormulaire } from './modules/formulaire-par-etapes/module.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordi = () => matchMedia('(min-width: 861px)').matches;

/* ---------- Manifeste : les mots s'allument un à un au défilement. ---------- */
function manifeste() {
  const el = $('[data-effet="manifeste"]');
  if (!el || !ST) return;
  const mots = el.textContent.trim().split(/\s+/);
  el.innerHTML = mots.map((m) => `<span class="mot">${m}</span>`).join(' ');
  const spans = $$('.mot', el);
  let dernier = -1;
  ST.create({
    trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true,
    onUpdate(self) {
      const n = Math.round(self.progress * spans.length);
      if (n === dernier) return;
      dernier = n;
      spans.forEach((s, i) => s.classList.toggle('allume', i < n));
    },
  });
}
const manifesteFinal = () => $$('[data-effet="manifeste"] .mot').forEach((s) => s.classList.add('allume'));

/* ---------- Carte du visage : chaque zone s'allume quand son texte passe au milieu de l'écran (ordinateur) ;
   en une colonne, la scène se joue au temps, une seule fois, à son entrée à l'écran. ---------- */
function carteVisage() {
  const liste = $('[data-effet="carte-visage"]');
  const svg = $('.visage-face');
  if (!liste || !svg) return;
  const etapes = $$('.visage-etape', liste);
  const zones = Object.fromEntries($$('.zone', svg).map((z) => [z.dataset.zone, z]));
  $$('.zone-geste', svg).forEach((p) => p.setAttribute('pathLength', '1'));
  const activer = (id, garder = false) => {
    etapes.forEach((e) => e.classList.toggle('actif', e.dataset.zone === id || (garder && e.classList.contains('actif'))));
    Object.entries(zones).forEach(([k, z]) => z.classList.toggle('actif', k === id || (garder && z.classList.contains('actif'))));
  };
  const mm = gsap.matchMedia();
  mm.add('(min-width: 861px)', () => {
    activer(etapes[0].dataset.zone);
    const st = etapes.map((e) => ST.create({ trigger: e, start: 'top 62%', end: 'bottom 62%', onToggle: (s) => s.isActive && activer(e.dataset.zone) }));
    return () => st.forEach((s) => s.kill());
  });
  mm.add('(max-width: 860px)', () => {
    let joue = false;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting || joue) return;
      joue = true; io.disconnect();
      etapes.forEach((e, i) => setTimeout(() => activer(e.dataset.zone, true), 300 + i * 1100));
    }, { threshold: 0.35 });
    io.observe(svg);
    return () => io.disconnect();
  });
}
const carteVisageFinal = () => { $$('.visage-etape, .visage-face .zone').forEach((e) => e.classList.add('actif')); };

/* ---------- Arche qui monte : l'image se dévoile de bas en haut, puis remonte doucement au défilement. ---------- */
function archeLift() {
  $$('[data-effet="arche-lift"]').forEach((fig) => {
    const img = $('img', fig);
    if (!img || !ST) return;
    gsap.set(img, { scale: 1.12 });
    gsap.fromTo(img, { yPercent: 4 }, { yPercent: -6, ease: 'none', scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  /* L'image de l'ouverture respire doucement (lumière du matin), arrêtée hors écran et onglet caché. */
  const heroImg = $('.hero-arche img');
  if (heroImg) {
    const souffle = gsap.fromTo(heroImg, { scale: 1.12 }, { scale: 1.2, duration: 5.5, ease: 'sine.inOut', yoyo: true, repeat: -1, paused: true });
    let vu = true;
    const maj = () => (vu && !document.hidden && etatPret ? souffle.play() : souffle.pause());
    new IntersectionObserver(([e]) => { vu = e.isIntersecting; maj(); }).observe(heroImg);
    document.addEventListener('visibilitychange', maj);
    quand('pret', () => { etatPret = true; maj(); });
  }
  const med = $('.hero-medaillon');
  if (med && ST) gsap.fromTo(med, { y: 0, rotate: 0 }, { y: -60, rotate: -14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}
function revelerArche(tl, t) {
  const fig = $('.hero-arche');
  if (!fig) return;
  tl.fromTo(fig, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.out' }, t)
    .fromTo('.hero-etiquette', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }, t + 0.5);
}

/* ---------- Gestes : sur l'arche, des traits remontent comme un passage de pierre, l'un après l'autre (en boucle,
   arrêtée hors écran et onglet caché). ---------- */
function gestes() {
  const svg = $('[data-effet="gestes"]');
  if (!svg) return;
  const traits = $$('path', svg);
  traits.forEach((p) => p.setAttribute('pathLength', '1'));
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, paused: true });
  traits.forEach((p, i) => tl.fromTo(p, { strokeDashoffset: -1 }, { strokeDashoffset: 0.32, duration: 1.6, ease: 'power2.inOut' }, i * 0.55));
  let visible = true;
  const maj = () => (visible && !document.hidden && etatPret ? tl.play() : tl.pause());
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; maj(); }).observe(svg);
  document.addEventListener('visibilitychange', maj);
  quand('pret', () => { etatPret = true; maj(); });
}
let etatPret = false;

/* ---------- Quatre volets : quatre quarts de disque arrivent de leur coin et se rassemblent. ---------- */
const DIRS = [[1, -1], [1, 1], [-1, 1], [-1, -1]];
function quatreVolets() {
  $$('[data-effet="quatre-volets"]').forEach((fig) => {
    const volets = $$('.volet', fig), centre = $('.volets-centre', fig);
    if (!ST || fig.closest('.page-tete')) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 88%', end: 'center 52%', scrub: 0.6 } });
    volets.forEach((v, i) => tl.fromTo(v, { x: DIRS[i][0] * 22, y: DIRS[i][1] * 22, rotate: DIRS[i][0] * 8, opacity: 0.3, transformOrigin: '110px 110px' }, { x: 0, y: 0, rotate: 0, opacity: 1, ease: 'power2.out', duration: 1 }, i * 0.12));
    if (centre) tl.fromTo(centre, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.5 }, 0.7);
  });
}

/* Le disque de l'ouverture du Protocole 45+ se rassemble pendant l'intro ou le retrait du voile (au temps, pas au défilement). */
const VOLETS_TETE = '.page-tete [data-effet="quatre-volets"] .volet';
function voletsTeteDepart() { $$(VOLETS_TETE).forEach((v, i) => gsap.set(v, { x: DIRS[i][0] * 26, y: DIRS[i][1] * 26, rotate: DIRS[i][0] * 10, opacity: 0, transformOrigin: '110px 110px' })); }
function voletsTeteJouer(tl, t) {
  $$(VOLETS_TETE).forEach((v, i) => tl.to(v, { x: 0, y: 0, rotate: 0, opacity: 1, duration: 1.1, ease: 'expo.out' }, t + i * 0.1));
  const logo = $('.protocole-disque-logo');
  if (logo) tl.fromTo(logo, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.6)' }, t + 0.35);
}
/* Séances : la photo de la colonne collante suit la séance lue (ordinateur). */
function seancesImages() {
  const rangs = $$('.tarif[data-image]'), images = $$('.seances-image');
  if (!rangs.length || !images.length) return;
  const montrer = (nom) => images.forEach((im) => im.classList.toggle('actif', im.dataset.imageDe === nom));
  rangs.forEach((r) => {
    r.addEventListener('mouseenter', () => montrer(r.dataset.image));
    if (ST) ST.create({ trigger: r, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => s.isActive && montrer(r.dataset.image) });
  });
}

/* ---------- Trois mois : douze semaines qui se remplissent au défilement (page La méthode). ---------- */
function troisMois() {
  const el = $('[data-effet="trois-mois"]');
  if (!el || !ST) return;
  const sem = $$('.semaine', el), barre = $('.parcours-barre span', el);
  ST.create({
    trigger: el, start: 'top 75%', end: 'bottom 55%', scrub: true,
    onUpdate(self) {
      const n = Math.round(self.progress * sem.length);
      sem.forEach((s, i) => s.classList.toggle('pleine', i < n));
      if (barre) barre.style.transform = `scaleX(${self.progress.toFixed(3)})`;
    },
  });
}
const troisMoisFinal = () => { $$('[data-effet="trois-mois"] .semaine').forEach((s) => s.classList.add('pleine')); const b = $('[data-effet="trois-mois"] .parcours-barre span'); if (b) b.style.transform = 'scaleX(1)'; };

/* ---------- Addition du Protocole 45+ : le total compte quand il entre à l'écran. ---------- */
function addition() {
  const total = $('[data-addition-total]');
  if (!total || !ST) return;
  const fin = +total.dataset.additionTotal;
  const lignes = $$('.addition-ligne');
  ST.create({ trigger: total.closest('.addition'), start: 'top 70%', once: true, onEnter() {
    lignes.forEach((l, i) => setTimeout(() => l.classList.add('comptee'), i * 160));
    const o = { v: 0 };
    gsap.to(o, { v: fin, duration: 1.4, delay: 0.5, ease: 'power2.out', onUpdate() { total.textContent = `${Math.round(o.v)} €`; } });
  } });
}

/* ---------- Visionneuse du certificat (dialog natif). ---------- */
function visionneuse() {
  $$('[data-ouvrir-image]').forEach((b) => {
    const d = document.getElementById('visionneuse-' + b.dataset.ouvrirImage);
    if (!d || !d.showModal) return;
    b.addEventListener('click', () => { d.showModal(); suivre(d); });
    d.addEventListener('close', () => { lacher(d); b.focus(); });
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  });
}

/* ---------- Carte cadeau : le soin choisi s'écrit sur la carte. ---------- */
function carteCadeau() {
  const root = $('[data-module="carte-cadeau-qui-se-compose"]');
  if (!root) return;
  initCarteCadeau(root, { cachet: 'YG' });
  const type = $('.ccq__type', root);
  const maj = () => { const r = $('[name="montant"]:checked', root); if (type && r) type.textContent = r.dataset.soin || type.textContent; };
  root.addEventListener('change', maj);
  maj();
}

/* ---------- Formulaire de demande : choix prérempli par l'adresse (?demande=cabine). ---------- */
function formulaire() {
  const root = $('[data-module="formulaire-par-etapes"]');
  if (!root) return;
  const voulu = new URLSearchParams(location.search).get('demande');
  if (voulu) { const r = $(`[name="demande"][value="${CSS.escape(voulu)}"]`, root); if (r) r.checked = true; }
  initFormulaire(root, { mailto: 'yoga.visage.toulouse@free.fr', sujet: 'Demande depuis le site' });
  root.addEventListener('formulaire:envoye', () => { const fin = $('.fpe__fin', root); if (fin) setTimeout(() => fin.scrollIntoView({ block: 'center' }), 60); });
}

/* ---------- Ouverture des pages intérieures (titre en lignes, surtitre, actions). ---------- */
const TETE = '.page-tete .ligne-masque > span';
function teteDepart() { if ($(TETE)) gsap.set(TETE, { y: 0, yPercent: 115 }); }
function teteJouer(tl, t) {
  if (!$(TETE)) return;
  tl.fromTo(TETE, { y: 0, yPercent: 115 }, { y: 0, yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out' }, t)
    .fromTo('.page-tete [data-anime="gsap"]:not(h1)', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, t + 0.15);
}

function heroJouer(tl, t) {
  if (!$('.hero')) return;
  tl.fromTo('.hero-ligne', { y: 0, yPercent: 115 }, { y: 0, yPercent: 0, duration: 0.95, stagger: 0.12, ease: 'expo.out' }, t)
    .fromTo('.hero h1', { opacity: 1 }, { opacity: 1, duration: 0.01 }, t)
    .fromTo('.hero .surtitre, .hero-intro, .hero-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.09, ease: 'power3.out' }, t + 0.12);
  revelerArche(tl, t - 0.25);
}

function toutFinal() {
  if (!gsap) return;
  gsap.set('.hero-ligne, ' + TETE, { y: 0, yPercent: 0 });
  gsap.set('[data-anime="gsap"]', { opacity: 1, y: 0 });
  gsap.set('.hero-arche', { clipPath: 'inset(0% 0% 0% 0%)' });
  gsap.set('.hero-etiquette', { opacity: 1, y: 0 });
  $$('[data-anime="gsap"]').forEach((e) => e.classList.add('vu'));
  gsap.set(VOLETS_TETE, { x: 0, y: 0, rotate: 0, opacity: 1 });
  gsap.set('.protocole-disque-logo', { opacity: 1, scale: 1 });
  $$('.addition-ligne').forEach((l) => l.classList.add('comptee'));
  manifesteFinal(); troisMoisFinal();
  if (!ordi()) carteVisageFinal();
}

demarrer({
  preparer() {
    if (!gsap) return;
    teteDepart();
    voletsTeteDepart();
    seancesImages();
    try { manifeste(); } catch (e) { console.error(e); }
    try { carteVisage(); } catch (e) { console.error(e); }
    try { archeLift(); } catch (e) { console.error(e); }
    try { gestes(); } catch (e) { console.error(e); }
    try { quatreVolets(); } catch (e) { console.error(e); }
    try { troisMois(); } catch (e) { console.error(e); }
    try { addition(); } catch (e) { console.error(e); }
    visionneuse();
    $$('[data-module="temoignages-en-pile"]').forEach((el) => initPile(el, {}));
    carteCadeau();
    formulaire();
  },
  /* Intro (2,3 s) : le cercle du logo se trace, le logo monte, puis glisse jusqu'à l'objet d'ouverture de la page
     ([data-iris-centre]) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-cercle', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' }, 0)
      .fromTo('.ouverture-logo', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .fromTo('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.35)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: -8, duration: 0.3 }, 0.95)
      .to('.ouverture-cercle', { opacity: 0, duration: 0.3 }, 1.0);
    versObjet(tl, { a: 1.05 });
    heroJouer(tl, 1.55);
    teteJouer(tl, 1.55);
    voletsTeteJouer(tl, 1.5);
    return tl;
  },
  etatFinal: toutFinal,
  /* Arrivée par un lien interne : le premier écran se met en place pendant que le voile se retire. */
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroJouer(tl, 0.15);
    teteJouer(tl, 0.15);
    voletsTeteJouer(tl, 0.2);
  },
});
quand('pret', () => { if (ST) ST.refresh(); });

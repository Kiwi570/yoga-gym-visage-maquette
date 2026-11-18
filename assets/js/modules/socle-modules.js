/* Adaptateur : les modules de la bibliothèque appellent pret([...]) et reçoivent leur « socle ».
   Ici, tout vient du socle du projet (GSAP déjà chargé par la page, défilement, mesures, boucles) :
   rien n'est chargé deux fois et aucun défilement adouci n'est créé en double. */
import { rafraichir as rafraichirProjet } from '../socle/mesures.js?v=2';

const html = document.documentElement;
function boucle(el, fn) {
  let visible = false, id = 0, avant = 0, fini = false;
  const tour = (t) => { if (!visible || fini || document.hidden) { id = 0; return; } const dt = avant ? Math.min(64, t - avant) : 16; avant = t; fn(t, dt); id = requestAnimationFrame(tour); };
  const relancer = () => { if (!id && visible && !document.hidden && !fini) { avant = 0; id = requestAnimationFrame(tour); } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; relancer(); }, { rootMargin: '100px' });
  io.observe(el);
  document.addEventListener('visibilitychange', relancer);
  return { arreter() { fini = true; io.disconnect(); cancelAnimationFrame(id); document.removeEventListener('visibilitychange', relancer); } };
}

export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } },
  rafraichir: () => rafraichirProjet(),
  boucle,
  mesurer: () => rafraichirProjet(),
};

export async function pret() {
  const g = window.gsap || null;
  socle.gsap = g;
  if (g && window.ScrollTrigger) { g.registerPlugin(window.ScrollTrigger); socle.ScrollTrigger = window.ScrollTrigger; }
  if (g && window.SplitText) { g.registerPlugin(window.SplitText); socle.SplitText = window.SplitText; }
  if (html) socle.html = html;
  return socle;
}

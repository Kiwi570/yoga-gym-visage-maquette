/* Accueil : « Le geste qui remonte ». Ordre de recherche du visiteur : qu'est-ce que c'est, est-ce que ça marche,
   comment et combien, qui me reçoit, où, puis le diagnostic offert. */
import { html } from '../../outils/gabarit.mjs';
import { profil, visageFace, quatreVolets, appel, euros } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => {
  const o = c.donnees.offre;
  const formules = o.seances.filter((s) => ['cabine', 'en-ligne', 'ateliers', 'massage'].includes(s.id));
  const k = c.site.contact;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span></h1>
    <p class="hero-intro" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'diagnostic', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <p class="hero-info" data-info-cle><span class="point" aria-hidden="true"></span>${c.t('accueil.hero.info')}</p>
    </div>
  </div>
  <div class="hero-visuel">
    ${c.media({ nom: 'grok/accueil-ouverture', alt: 'Pierre de gua sha en quartz rose posée sur du lin, dans la lumière du matin', priorite: true, classe: 'hero-arche', cadrage: '50% 62%', sizes: '(max-width: 760px) 88vw, 36vw', attrs: 'data-effet="arche-lift"' })}
    <svg class="hero-traits" viewBox="0 0 300 450" aria-hidden="true" data-effet="gestes"><path d="M70 400 C90 320 92 250 120 170"/><path d="M150 410 C160 330 170 260 190 180"/><path d="M228 396 C232 330 240 280 252 220"/></svg>
    <div class="hero-medaillon" data-iris-centre="disque"><img src="/assets/images/logo-or.webp" alt="" width="128" height="128"></div>
    <p class="hero-etiquette hero-etiquette--1" data-anime="gsap">${c.t('accueil.hero.etiquette1')}</p>
    <p class="hero-etiquette hero-etiquette--2" data-anime="gsap">${c.t('accueil.hero.etiquette2')}</p>
  </div>
</section>

<section class="manifeste" id="methode-en-bref">
  <div class="conteneur manifeste-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.manifeste.surtitre')}</p>
      <p class="manifeste-texte" data-effet="manifeste">${c.t('accueil.manifeste.texte')}</p>
      <p class="manifeste-suite" data-anime>${c.t('accueil.manifeste.suite')}</p>
      <p data-anime>${c.lien('methode', { classe: 'lien-fleche', texte: c.t('accueil.manifeste.lien') })}</p>
    </div>
    ${profil('manifeste-profil')}
  </div>
</section>

<section class="visage" id="zones">
  <div class="conteneur visage-grille">
    <div class="visage-scene">${visageFace(c.s('accueil.visage.aria'))}</div>
    <div class="visage-texte">
      <p class="surtitre" data-anime>${c.t('accueil.visage.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.visage.titre')}</h2>
      <p data-anime>${c.t('accueil.visage.texte')}</p>
      <ol class="visage-etapes" data-effet="carte-visage">
        ${o.zones.map((z, i) => html`<li class="visage-etape" data-zone="${z.id}"><span class="visage-num" aria-hidden="true">${i + 1}</span><h3>${z.nom}</h3><p>${z.texte}</p></li>`)}
      </ol>
      <p class="visage-ages" data-anime><span>${c.t('accueil.visage.age1')}</span> <span>${c.t('accueil.visage.age2')}</span></p>
    </div>
  </div>
</section>

<section class="formules" id="formules">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.formules.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.formules.titre')}</h2>
      <p data-anime>${c.t('accueil.formules.texte')}</p>
    </div>
    <ul class="formules-liste" data-anime="cascade">
      ${formules.map((f) => html`<li class="formule" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: f.image, alt: '', classe: 'formule-media', sizes: '(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 23vw', ratio: '4 / 5' })}
        <div class="formule-corps">
          <h3>${f.nom}</h3>
          <p class="formule-meta">${[f.duree, f.format].filter(Boolean).join(' · ')}</p>
          <p class="formule-prix" data-prix>${euros(f.prix)}</p>
          <p class="formule-texte">${f.texte}</p>
          ${c.lien('seances-tarifs', { ancre: 'seance-' + f.id, classe: 'lien-fleche', texte: 'Détails et réservation', attrs: `aria-label="${f.nom} : détails et réservation"` })}
        </div>
      </li>`)}
    </ul>
    <div class="formules-pied" data-anime>
      ${c.lien('seances-tarifs', { ancre: 'packs', classe: 'bouton bouton--contour', texte: c.t('accueil.formules.voir') })}
      <p class="formules-cadeau"><span class="formules-cadeau-logo" aria-hidden="true"><img src="/assets/images/logo-dore.webp" alt="" width="40" height="40" loading="lazy"></span><span>${c.t('accueil.cadeau.texte')}</span> ${c.lien('seances-tarifs', { ancre: 'cartes-cadeaux', classe: 'lien-fleche', texte: c.t('accueil.cadeau.lien') })}</p>
    </div>
  </div>
</section>

<section class="resultats" id="resultats">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.resultats.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.resultats.titre')}</h2>
    </div>
    <div class="duos">
      <div class="duo duo--2">
        <h3 data-anime>${c.t('accueil.resultats.duo1')}</h3>
        <div class="duo-images">
          ${c.media({ nom: 'front-avant', alt: 'Front avant la séance en cabine, rides marquées', classe: 'duo-media', sizes: '(max-width: 760px) 44vw, 22vw', legende: c.s('accueil.resultats.avant'), attrs: 'data-anime="rideau"' })}
          ${c.media({ nom: 'front-apres', alt: "Le même front à l'issue d'une séance en cabine", classe: 'duo-media', sizes: '(max-width: 760px) 44vw, 22vw', legende: c.s('accueil.resultats.apres'), attrs: 'data-anime="rideau"' })}
        </div>
      </div>
      <div class="duo duo--3">
        <h3 data-anime>${c.t('accueil.resultats.duo2')}</h3>
        <div class="duo-images">
          ${c.media({ nom: 'ovale-avant', alt: "Bas du visage d'une cliente au début de la pratique", classe: 'duo-media', sizes: '(max-width: 760px) 30vw, 15vw', legende: c.s('accueil.resultats.avant'), attrs: 'data-anime="rideau"' })}
          ${c.media({ nom: 'ovale-pendant', alt: 'Bas du visage de la même cliente en cours de pratique', classe: 'duo-media', sizes: '(max-width: 760px) 30vw, 15vw', legende: c.s('accueil.resultats.pendant'), attrs: 'data-anime="rideau"' })}
          ${c.media({ nom: 'ovale-apres', alt: 'Bas du visage de la même cliente après trois mois de pratique quotidienne', classe: 'duo-media', sizes: '(max-width: 760px) 30vw, 15vw', legende: c.s('accueil.resultats.apres'), attrs: 'data-anime="rideau"' })}
        </div>
      </div>
    </div>
    <p class="note" data-anime>${c.t('accueil.resultats.note')}</p>
  </div>
</section>

<section class="bande-protocole" id="protocole">
  <div class="conteneur bande-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.protocole.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.protocole.titre1')} <em>${c.t('accueil.protocole.titre2')}</em></h2>
      <p data-anime>${c.t('accueil.protocole.texte')}</p>
      <p class="bande-prix" data-anime>${c.t('accueil.protocole.prix')}</p>
      <p data-anime>${c.lien('protocole-45', { classe: 'bouton bouton--clair', texte: c.t('accueil.protocole.lien'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    ${quatreVolets(c, { aria: c.s('protocole.tete.disque') })}
  </div>
</section>

<section class="praticienne" id="marianne">
  <div class="conteneur praticienne-grille">
    ${c.media({ nom: 'praticienne-seance', alt: 'Marianne pendant une séance de massage du visage en cabine', classe: 'praticienne-media', cadrage: '47% 40%', sizes: '(max-width: 760px) 90vw, 38vw', ratio: '4 / 5', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.praticienne.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.praticienne.titre1')} <em>${c.t('accueil.praticienne.titre2')}</em></h2>
      <p data-anime>${c.t('accueil.praticienne.texte')}</p>
      <button type="button" class="diplome" data-ouvrir-image="diplome" data-anime aria-haspopup="dialog">
        ${c.media({ nom: 'diplome', alt: c.s('accueil.praticienne.diplome'), classe: 'diplome-media', sizes: '160px' })}
        <span>${c.t('accueil.praticienne.diplome')}<span class="diplome-agrandir">${c.t('commun.agrandir')}</span></span>
      </button>
      <p data-anime>${c.lien('methode', { ancre: 'cabine', classe: 'lien-fleche', texte: c.t('accueil.praticienne.lien') })}</p>
    </div>
  </div>
</section>

<section class="tep avis" data-module="temoignages-en-pile" aria-labelledby="avis-titre" id="avis">
    <div class="tep__tete">
      <p class="surtitre" data-anime>${c.t('accueil.avis.surtitre')}</p>
      <h2 class="tep__h2" id="avis-titre" data-anime="lignes">${c.t('accueil.avis.titre')}</h2>
      <p class="tep__intro" data-anime>${c.t('accueil.avis.texte')}</p>
    </div>
    <div class="tep__scene" data-visuel data-anime>
      <ol class="tep__pile">
        ${o.avis.map((a) => html`<li class="tep__carte">
          <blockquote class="tep__citation"><p>${a.texte}</p></blockquote>
          <p class="tep__auteur"><span class="tep__nom">${a.nom}</span></p>
          <p class="tep__source">${a.source}</p>
        </li>`)}
      </ol>
    </div>
</section>

<section class="lieux" id="lieux">
  ${c.media({ nom: 'wellbee-salle', alt: 'Salle de soin du Wellbee Space à Plaisance-du-Touch', classe: 'lieux-media', sizes: '100vw', cadrage: '53% 52%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="lieux-carte">
    <p class="surtitre" data-anime>${c.t('accueil.lieux.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.lieux.titre')}</h2>
    <dl class="lieux-jours" data-anime="cascade">
      <div><dt>${c.t('accueil.lieux.mercredi')}</dt><dd>${c.t('accueil.lieux.mercrediLieu')}</dd></div>
      <div><dt>${c.t('accueil.lieux.samedi')}</dt><dd>${c.t('accueil.lieux.samediLieu')}</dd></div>
      <div><dt>${c.t('accueil.lieux.enLigne')}</dt><dd>${c.t('accueil.lieux.enLigneLieu')}</dd></div>
    </dl>
    <p data-anime>${c.lien('contact', { ancre: 'lieux', classe: 'lien-fleche', texte: c.t('accueil.lieux.lien') })}</p>
  </div>
</section>

${appel(c)}

<dialog class="visionneuse" id="visionneuse-diplome" data-recouvrement aria-label="${c.s('accueil.praticienne.diplome')}">
  ${c.media({ nom: 'diplome', alt: c.s('accueil.praticienne.diplome'), classe: 'visionneuse-media', sizes: '(max-width: 760px) 94vw, 800px' })}
  <form method="dialog"><button class="bouton visionneuse-fermer">${c.t('commun.fermerImage')}</button></form>
</dialog>
`;
};

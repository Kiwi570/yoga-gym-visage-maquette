/* La méthode : grand titre puis bandeau ; cabine, en ligne, ateliers, le chemin en trois mois, avant/après, précautions. */
import { html } from '../../outils/gabarit.mjs';
import { profil, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'methode', fichier: 'methode', imagePartage: 'grok/methode-ouverture-1280.webp' };

export default (c) => {
  const o = c.donnees.offre;
  return html`
<section class="page-tete page-tete--methode" id="debut">
  <div class="conteneur methode-tete">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('methode.tete.surtitre')}</p>
      <h1 data-anime="gsap"><span class="ligne-masque"><span>${c.t('methode.tete.titre1')}</span></span><span class="ligne-masque"><span><em>${c.t('methode.tete.titre2')}</em></span></span></h1>
    </div>
    <div class="methode-tete-droite">
      <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('methode.tete.texte')}</p>
      <div class="tete-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'diagnostic', classe: 'bouton', texte: c.t('methode.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <p class="tete-info" data-info-cle>${c.t('methode.tete.info')}</p>
      </div>
    </div>
  </div>
  <div class="bandeau">
    ${c.media({ nom: 'grok/methode-ouverture', alt: 'Plateau vu du dessus : pierre de gua sha, rouleau de jade, serviette et coupelle d’eau', priorite: true, classe: 'bandeau-media', sizes: '100vw', cadrage: '50% 62%', cadrageMobile: '50% 82%', attrs: 'data-effet="arche-lift"' })}
    <p class="badge" data-iris-centre="disque"><span>${c.t('methode.tete.badge')}</span></p>
  </div>
</section>

<section class="bloc-image" id="cabine">
  <div class="conteneur bloc-image-grille">
    ${c.media({ nom: 'cabine', alt: 'La cabine de soin : table de massage, paravent en bambou, lumière du jour', classe: 'bloc-image-media bloc-image-media--arche', cadrage: '50% 64%', sizes: '(max-width: 760px) 90vw, 40vw', ratio: '4 / 5', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('methode.cabine.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('methode.cabine.titre')}</h2>
      <p data-anime>${c.t('methode.cabine.texte')}</p>
      <ul class="puces" data-anime="cascade">
        <li>${c.t('methode.cabine.liste1')}</li><li>${c.t('methode.cabine.liste2')}</li><li>${c.t('methode.cabine.liste3')}</li>
      </ul>
      <p class="bloc-prix" data-anime><strong data-prix>${c.t('methode.cabine.prix')}</strong> ${c.lien('contact', { ancre: 'demande', params: 'demande=cabine', classe: 'lien-fleche', texte: 'Demander une séance en cabine' })}</p>
    </div>
  </div>
</section>

<section class="bloc-image bloc-image--inverse" id="en-ligne">
  <div class="conteneur bloc-image-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('methode.enLigne.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('methode.enLigne.titre')}</h2>
      <p data-anime>${c.t('methode.enLigne.texte')}</p>
      <ul class="puces" data-anime="cascade"><li>${c.t('methode.enLigne.liste1')}</li><li>${c.t('methode.enLigne.liste2')}</li></ul>
      <p class="bloc-prix" data-anime><strong data-prix>${c.t('methode.enLigne.prix')}</strong> ${c.lien('seances-tarifs', { ancre: 'packs', classe: 'lien-fleche', texte: 'Voir les packs' })}</p>
    </div>
    ${c.media({ nom: 'grok/carte-en-ligne', alt: 'Petit miroir, pierre de gua sha et tasse de tisane sur une table près d’une fenêtre', classe: 'bloc-image-media', sizes: '(max-width: 760px) 90vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="ateliers" id="ateliers">
  <div class="conteneur">
    <div class="ateliers-tete">
      <div>
        <p class="surtitre" data-anime>${c.t('methode.ateliers.surtitre')}</p>
        <h2 data-anime="lignes">${c.t('methode.ateliers.titre')}</h2>
        <p data-anime>${c.t('methode.ateliers.texte')}</p>
        <p class="bloc-prix" data-anime><strong data-prix>${c.t('methode.ateliers.prix')}</strong></p>
        <p class="note" data-anime>${c.t('methode.ateliers.dates')}</p>
        <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'demande=atelier', classe: 'bouton bouton--contour', texte: c.t('methode.ateliers.prevenir') })}</p>
      </div>
      ${c.media({ nom: 'grok/carte-ateliers', alt: 'Coussins disposés en demi-cercle, un petit miroir sur chacun', classe: 'ateliers-media', sizes: '(max-width: 760px) 90vw, 34vw', ratio: '3 / 4', attrs: 'data-fx="zoom"' })}
    </div>
    <ul class="zones-cartes" data-anime="cascade">
      ${o.zones.map((z, i) => html`<li class="zone-carte"><span class="zone-carte-num" aria-hidden="true">${i + 1}</span><h3>${z.nom}</h3><p>${z.texte}</p></li>`)}
    </ul>
    <p class="visage-ages" data-anime><span>${c.t('accueil.visage.age1')}</span> <span>${c.t('accueil.visage.age2')}</span></p>
  </div>
</section>

<section class="parcours" id="trois-mois">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('methode.parcours.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('methode.parcours.titre')}</h2>
      <p data-anime>${c.t('methode.parcours.texte')}</p>
    </div>
    <div class="parcours-frise" data-effet="trois-mois" data-visuel>
      <div class="parcours-semaines" aria-label="${c.s('methode.parcours.semaines')}" role="img">
        ${[0, 1, 2].map((m) => html`<div class="mois"><p class="mois-nom" aria-hidden="true">${c.t('methode.parcours.mois')} ${m + 1}</p><div class="mois-semaines">${[0, 1, 2, 3].map((k) => html`<span class="semaine" aria-hidden="true"><span>${m * 4 + k + 1}</span></span>`)}</div></div>`)}
      </div>
      <div class="parcours-barre" aria-hidden="true"><span></span></div>
      <ol class="parcours-etapes">
        ${[1, 2, 3, 4].map((n) => html`<li><h3>${c.t(`methode.parcours.etape${n}`)}</h3><p>${c.t(`methode.parcours.etape${n}t`)}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="resultats resultats--methode resultats--accueil" id="resultats">
  <div class="conteneur resultats-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.resultats.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.resultats.titre')}</h2>
      <p class="note" data-anime>${c.t('accueil.resultats.note')}</p>
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
  </div>
</section>

<section class="precautions" id="precautions">
  <div class="conteneur precautions-grille">
    <div class="precautions-cote">
      <p class="surtitre" data-anime>${c.t('methode.precautions.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('methode.precautions.titre')}</h2>
      <p data-anime>${c.t('methode.precautions.texte')}</p>
      ${profil('precautions-profil')}
    </div>
    <div class="faq" data-anime="cascade">
      ${o.precautions.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
    </div>
  </div>
</section>

${appel(c)}
`;
};

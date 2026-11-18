/* Protocole 45+ : « 45+ » en très grand et le disque des quatre volets ; pour qui, les volets, l'addition. */
import { html } from '../../outils/gabarit.mjs';
import { quatreVolets, appel, euros } from '../gabarits/blocs.mjs';

export const page = { cle: 'protocole-45', fichier: 'protocole-45', imagePartage: 'grok/protocole-ouverture-1280.webp' };

export default (c) => {
  const v = c.donnees.offre.volets;
  const total = v.reduce((s, x) => s + x.prix, 0);
  return html`
<section class="page-tete page-tete--protocole" id="debut">
  <div class="conteneur protocole-tete">
    <div class="protocole-tete-texte">
      <p class="surtitre" data-anime="gsap">${c.t('protocole.tete.surtitre')}</p>
      <h1 data-anime="gsap"><span class="ligne-masque"><span>${c.t('protocole.tete.titre1')}</span></span><span class="ligne-masque protocole-geant"><span>${c.t('protocole.tete.titre2')}</span></span></h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('protocole.tete.texte')}</p>
      <div class="tete-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'demande', params: 'demande=protocole', classe: 'bouton', texte: c.t('protocole.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <p class="tete-info" data-info-cle>${c.t('protocole.tete.info')}</p>
      </div>
    </div>
    <div class="protocole-disque" data-iris-centre="disque">
      ${quatreVolets(c, { aria: c.s('protocole.tete.disque'), classe: 'volets--clair volets--tete', centre: false })}
      <img class="protocole-disque-logo" src="/assets/images/logo-or.webp" alt="" width="96" height="96">
    </div>
  </div>
</section>

<section class="pourqui" id="pour-qui">
  ${c.media({ nom: 'grok/protocole-ouverture', alt: 'Table du matin : eau, fruits, plantes séchées, tisane et pierre de gua sha', classe: 'pourqui-media', sizes: '100vw', cadrage: '60% 55%', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="pourqui-carte">
    <p class="surtitre" data-anime>${c.t('protocole.pourqui.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('protocole.pourqui.titre')}</h2>
    <p data-anime>${c.t('protocole.pourqui.texte')}</p>
    <ul class="pastilles" data-anime="cascade">
      ${[1, 2, 3, 4, 5, 6].map((n) => html`<li>${c.t(`protocole.pourqui.b${n}`)}</li>`)}
    </ul>
  </div>
</section>

<section class="volets-section" id="volets">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('protocole.volets.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('protocole.volets.titre')}</h2>
    </div>
    <ol class="volets-liste" data-anime="cascade">
      ${v.map((x, i) => html`<li class="volet-carte volet-carte--${i + 1}" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: x.image, alt: '', classe: 'volet-carte-media', sizes: '(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 23vw', ratio: '4 / 3' })}
        <div class="volet-carte-corps">
          <p class="volet-carte-num"><span aria-hidden="true">${i + 1}</span> ${x.nom}</p>
          <h3>${x.qui}</h3>
          <p>${x.detail}</p>
          <p class="volet-carte-prix" data-prix>${x.calcul}</p>
        </div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="addition" id="tarif">
  <div class="conteneur addition-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('protocole.addition.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('protocole.addition.titre')}</h2>
      <p data-anime>${c.t('protocole.addition.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'demande=protocole', classe: 'bouton bouton--clair', texte: c.t('protocole.addition.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="addition-ticket" data-visuel>
      <ul>
        ${v.map((x) => html`<li class="addition-ligne"><span>${x.nom}</span><span class="addition-calcul">${x.calcul}</span><strong data-prix>${euros(x.prix)}</strong></li>`)}
      </ul>
      <p class="addition-total"><span>${c.t('protocole.addition.total')}</span><strong data-prix data-addition-total="${total}" data-effet="addition">${euros(total)}</strong></p>
    </div>
  </div>
</section>

${appel(c)}
`;
};

/* Page 404 aux couleurs du client : le miroir qui ne reflète que la lumière. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: 'Miroir rond qui ne reflète que la lumière', priorite: true, classe: 'introuvable-media', sizes: '100vw', cadrage: '50% 45%', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="introuvable-carte">
    <div class="introuvable-medaillon" data-iris-centre="disque"><img src="/assets/images/logo-or.webp" alt="" width="96" height="96"></div>
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="introuvable-actions" data-anime>
      ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      <span data-info-cle>${c.lien('contact', { ancre: 'diagnostic', classe: 'lien-fleche', texte: c.t('introuvable.diagnostic') })}</span>
    </p>
  </div>
</section>
`;

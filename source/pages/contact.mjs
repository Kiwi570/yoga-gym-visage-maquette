/* Contact : ouverture plein cadre (salon du Wellbee Space), diagnostic offert (vrai agenda), demande en trois étapes (simulée),
   plan schématique des deux adresses. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'wellbee-salon-1280.webp' };

const ICONES = {
  diagnostic: '<circle cx="16" cy="16" r="11"/><path d="M16 10v6l4 3"/>',
  cabine: '<path d="M6 22h20M8 22v-5h16v5M11 17v-3h10v3"/>',
  'en-ligne': '<rect x="6" y="8" width="20" height="13" rx="2"/><path d="M12 25h8M16 21v4"/>',
  protocole: '<circle cx="16" cy="16" r="11"/><path d="M16 5v22M5 16h22"/>',
  atelier: '<circle cx="10" cy="13" r="3"/><circle cx="22" cy="13" r="3"/><circle cx="16" cy="10" r="3"/><path d="M5 25c1-5 9-5 10 0M17 25c1-5 9-5 10 0"/>',
  autre: '<path d="M6 9h20v13H13l-5 4v-4H6z"/>',
};

export default (c) => {
  const k = c.site.contact;
  const choix = [['diagnostic', 'o1'], ['cabine', 'o2'], ['en-ligne', 'o3'], ['protocole', 'o4'], ['atelier', 'o5'], ['autre', 'o6']];
  const ext = (href, texte, classe = '') => html`<a href="${href}" target="_blank" rel="noopener"${classe ? brut(` class="${classe}"`) : ''}>${texte}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>`;
  return html`
<section class="page-tete page-tete--contact" id="debut">
  ${c.media({ nom: 'wellbee-salon', alt: "Salon d'accueil du Wellbee Space à Plaisance-du-Touch", priorite: true, classe: 'contact-fond', sizes: '100vw', cadrage: '55% 50%', cadrageMobile: '50% 80%', attrs: 'data-effet="arche-lift"' })}
  <div class="conteneur contact-tete">
    <div class="contact-tete-carte">
      <p class="medaillon-temps" data-iris-centre="disque"><span>25<small>min</small></span></p>
      <p class="surtitre" data-anime="gsap">${c.t('contact.tete.surtitre')}</p>
      <h1 data-anime="gsap"><span class="ligne-masque"><span>${c.t('contact.tete.titre1')}</span></span><span class="ligne-masque"><span><em>${c.t('contact.tete.titre2')}</em></span></span></h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('contact.tete.texte')}</p>
      <div class="tete-actions" data-anime="gsap">
        <a class="bouton" href="#diagnostic" data-action-principale data-survol="magnetique">${c.t('contact.tete.action')}</a>
        <p class="tete-info" data-info-cle>${c.t('contact.tete.info')}</p>
      </div>
    </div>
  </div>
</section>

<section class="diagnostic" id="diagnostic">
  <div class="conteneur diagnostic-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('contact.diagnostic.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.diagnostic.titre')}</h2>
      <p data-anime>${c.t('contact.diagnostic.texte')}</p>
      ${c.media({ nom: 'praticienne-portrait', alt: 'Portrait de Marianne', classe: 'demande-portrait', sizes: '160px', ratio: '1', attrs: 'data-anime="rideau"' })}
      <p class="diagnostic-actions" data-anime>
        ${ext(k.agendaDiagnostic, c.t('contact.diagnostic.agenda'), 'bouton')}
        ${ext(k.agendaSeance, c.t('contact.diagnostic.seance'), 'bouton bouton--contour')}
      </p>
    </div>
    <ul class="canaux" data-anime="cascade">
      <li><span class="canal-titre">${c.t('commun.appeler')}</span><a href="tel:${k.telephoneLien}">${k.telephone}</a></li>
      <li><span class="canal-titre">${c.t('commun.whatsapp')}</span>${ext(k.whatsappLien, k.whatsapp)}</li>
      <li><span class="canal-titre">E-mail</span><a href="mailto:${k.email}">${k.email}</a></li>
      <li><span class="canal-titre">${c.t('commun.reseaux')}</span><span>${ext(k.instagram, c.t('commun.instagram'))} · ${ext(k.facebook, c.t('commun.facebook'))}</span></li>
    </ul>
  </div>
</section>

<section class="fpe demande" id="demande" data-module="formulaire-par-etapes" aria-labelledby="fpe-titre">
  <div class="conteneur demande-grille">
    <div class="fpe__tete">
      <p class="surtitre" data-anime>${c.t('contact.formulaire.surtitre')}</p>
      <h2 class="fpe__h2" id="fpe-titre" data-anime="lignes">${c.t('contact.formulaire.titre')}</h2>
      <p class="fpe__intro" data-anime>${c.t('contact.formulaire.texte')}</p>
      ${c.media({ nom: 'grok/carte-sophro', alt: 'Fauteuil et plaid près d\u2019une fenêtre, lumière douce de fin d\u2019après-midi', classe: 'demande-media', sizes: '(max-width: 760px) 60vw, 26vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="fpe__carton">
      <form class="fpe__form" action="#demande" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.formulaire.etape1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.formulaire.q1')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="Demande">
            ${choix.map(([v, cle], i) => html`<label class="fpe__carte"><input type="radio" name="demande" value="${v}"${i === 0 ? brut(' required') : ''}>
              ${brut(`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true">${ICONES[v]}</svg>`)}
              <span class="fpe__carte-titre">${c.t(`contact.formulaire.${cle}`)}</span><span class="fpe__carte-texte">${c.t(`contact.formulaire.${cle}t`)}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.formulaire.etape2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.formulaire.q2')}</h3></legend>
          <fieldset class="fpe__groupe" data-libelle="${c.s('contact.formulaire.format')}">
            <legend class="fpe__groupe-titre">${c.t('contact.formulaire.format')}</legend>
            <div class="fpe__puces">
              <label class="fpe__puce"><input type="radio" name="format" value="cabine"><span class="fpe__choix-texte">${c.t('contact.formulaire.fCabine')}</span></label>
              <label class="fpe__puce"><input type="radio" name="format" value="en-ligne"><span class="fpe__choix-texte">${c.t('contact.formulaire.fLigne')}</span></label>
              <label class="fpe__puce"><input type="radio" name="format" value="indifferent" checked><span class="fpe__choix-texte">${c.t('contact.formulaire.fIndifferent')}</span></label>
            </div>
          </fieldset>
          <fieldset class="fpe__groupe" data-libelle="${c.s('contact.formulaire.jour')}">
            <legend class="fpe__groupe-titre">${c.t('contact.formulaire.jour')}</legend>
            <div class="fpe__puces">
              <label class="fpe__puce"><input type="radio" name="jour" value="mercredi"><span class="fpe__choix-texte">${c.t('contact.formulaire.jMercredi')}</span></label>
              <label class="fpe__puce"><input type="radio" name="jour" value="samedi"><span class="fpe__choix-texte">${c.t('contact.formulaire.jSamedi')}</span></label>
              <label class="fpe__puce"><input type="radio" name="jour" value="indifferent" checked><span class="fpe__choix-texte">${c.t('contact.formulaire.jIndifferent')}</span></label>
            </div>
          </fieldset>
          <div class="fpe__champ">
            <label for="fpe-message">${c.t('contact.formulaire.message')} <span class="fpe__facultatif">${c.t('contact.formulaire.facultatif')}</span></label>
            <textarea id="fpe-message" name="message" rows="4"></textarea>
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.formulaire.etape3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.formulaire.q3')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="fpe-nom">${c.t('contact.formulaire.nom')} <i aria-hidden="true">*</i></label><input id="fpe-nom" name="nom" autocomplete="name" required></div>
            <div class="fpe__champ"><label for="fpe-email">${c.t('contact.formulaire.email')} <i aria-hidden="true">*</i></label><input id="fpe-email" name="email" type="email" autocomplete="email" required></div>
            <div class="fpe__champ"><label for="fpe-tel">${c.t('contact.formulaire.tel')}</label><input id="fpe-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}"></div>
          </div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${c.t('contact.formulaire.accord')} <i aria-hidden="true">*</i></span></label>
          <p class="fpe__aide">${c.t('contact.formulaire.donnees')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.formulaire.etape4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.formulaire.q4')}</h3></legend>
          <div class="fpe__recap"><p>…</p></div>
        </fieldset>
        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('contact.formulaire.retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant data-retour="Revenir au récapitulatif">${c.t('contact.formulaire.continuer')}</button>
          <button class="fpe__bouton" type="submit">${c.t('contact.formulaire.envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${c.t('contact.formulaire.merci')}</h3>
        <p data-resume></p>
        <p>${c.t('contact.formulaire.merciTexte')}</p>
        <div class="fpe__fin-actions">
          <a class="fpe__bouton" href="mailto:${k.email}" data-mailto hidden>Envoyer par e-mail</a>
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${c.t('contact.formulaire.nouvelle')}</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="plan" id="lieux">
  <div class="conteneur plan-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('contact.lieux.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.lieux.titre')}</h2>
      <dl class="adresses" data-anime="cascade">
        <div><dt><span class="repere-pastille" aria-hidden="true">1</span>${c.t('contact.lieux.wellbee')}</dt><dd>${c.t('contact.lieux.wellbeeAdresse')}<br><strong>${c.t('contact.lieux.wellbeeJours')}</strong><br>${ext('https://www.google.com/maps/search/?api=1&query=3+ter+rue+du+Docteur+Charcot+31830+Plaisance-du-Touch', c.t('contact.lieux.itineraire'), 'lien-fleche')}</dd></div>
        <div><dt><span class="repere-pastille" aria-hidden="true">2</span>${c.t('contact.lieux.cabinet')}</dt><dd>${c.t('contact.lieux.cabinetAdresse')}<br><strong>${c.t('contact.lieux.cabinetJours')}</strong><br>${ext('https://www.google.com/maps/search/?api=1&query=41+rue+de+Gascogne+31830+Plaisance-du-Touch', c.t('contact.lieux.itineraire'), 'lien-fleche')}</dd></div>
      </dl>
    </div>
    ${c.media({ nom: 'wellbee-salle', alt: 'Salle de soin du Wellbee Space à Plaisance-du-Touch', classe: 'plan-media', sizes: '(max-width: 760px) 90vw, 46vw', cadrage: '53% 52%', ratio: '4 / 3', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>
`;
};

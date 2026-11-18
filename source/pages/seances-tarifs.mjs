/* Séances & tarifs : ouverture scindée (photo du Wellbee Space), séances à l'unité, packs, carte cadeau qui se compose, conditions. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appel, euros } from '../gabarits/blocs.mjs';

export const page = { cle: 'seances-tarifs', fichier: 'seances-tarifs', imagePartage: 'wellbee-attente-1280.webp' };

const DEMANDE = { cabine: 'cabine', 'en-ligne': 'en-ligne', massage: 'autre', ateliers: 'atelier', 'sophro-eclat': 'autre', sophrologie: 'autre' };

export default (c) => {
  const o = c.donnees.offre;
  return html`
<section class="page-tete page-tete--tarifs" id="debut">
  <div class="conteneur tarifs-tete">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('tarifs.tete.surtitre')}</p>
      <h1 data-anime="gsap"><span class="ligne-masque"><span>${c.t('tarifs.tete.titre1')}</span></span><span class="ligne-masque"><span><em>${c.t('tarifs.tete.titre2')}</em></span></span></h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('tarifs.tete.texte')}</p>
      <div class="tete-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'diagnostic', classe: 'bouton', texte: c.t('tarifs.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <p class="tete-info" data-info-cle>${c.t('tarifs.tete.info')}</p>
      </div>
    </div>
    <div class="tarifs-visuel">
      ${c.media({ nom: 'wellbee-attente', alt: "Banquette devant le mur terracotta de l'espace d'attente du Wellbee Space", priorite: true, classe: 'tarifs-media', sizes: '(max-width: 760px) 90vw, 46vw', cadrage: '47% 50%', ratio: '4 / 3', attrs: 'data-effet="arche-lift"' })}
      <p class="medaillon-prix" data-iris-centre="disque"><span>${c.t('tarifs.tete.medaillon')}</span></p>
    </div>
  </div>
</section>

<section class="seances" id="seances">
  <div class="conteneur seances-grille">
    <div class="seances-cote">
      <p class="surtitre" data-anime>${c.t('tarifs.seances.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('tarifs.seances.titre')}</h2>
      <div class="seances-images" aria-hidden="true" data-visuel>
        ${o.seances.filter((s, i, a) => a.findIndex((x) => x.image === s.image) === i).map((s, i) => html`<div class="seances-image${i === 0 ? ' actif' : ''}" data-image-de="${s.image}">${c.media({ nom: s.image, alt: '', classe: 'seances-media', sizes: '(max-width: 760px) 1px, 34vw', ratio: '4 / 5' })}</div>`)}
      </div>
    </div>
    <ol class="tarifs-liste">
      ${o.seances.map((s) => html`<li class="tarif" id="seance-${s.id}" data-image="${s.image}">
        <div class="tarif-corps">
          <h3>${s.nom}</h3>
          <p class="tarif-meta">${[s.duree, s.format].filter(Boolean).join(' · ')}</p>
          <p class="tarif-texte">${s.texte}</p>
        </div>
        <p class="tarif-prix" data-prix>${euros(s.prix)}</p>
        ${c.lien('contact', { ancre: 'demande', params: 'demande=' + DEMANDE[s.id], classe: 'bouton bouton--petit', texte: c.t('tarifs.seances.reserver'), attrs: `aria-label="${c.s('tarifs.seances.reserverAria', { nom: s.nom }).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"` })}
      </li>`)}
    </ol>
  </div>
</section>

<section class="packs" id="packs">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('tarifs.packs.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('tarifs.packs.titre')}</h2>
      <p data-anime>${c.t('tarifs.packs.texte')}</p>
    </div>
    <div class="calcul" data-calcul-racine data-anime data-textes="${brut(JSON.stringify({ pack3: 'Pack ' + o.packs[0].nom, pack4: 'Pack ' + o.packs[1].nom, mixte: 'Pack ' + o.packs[2].nom, ligne: c.s('tarifs.calcul.ligneUnite'), cabine: c.s('tarifs.calcul.cabineUnite'), rien: c.s('tarifs.calcul.rien'), moins: c.s('tarifs.calcul.moins'), pasDeGain: c.s('tarifs.calcul.pasDeGain'), et: c.s('tarifs.calcul.et') }).replace(/&/g, '&amp;').replace(/"/g, '&quot;'))}">
      <div class="calcul-choix">
        <p class="calcul-titre">${c.t('tarifs.calcul.titre')}</p>
        <div class="calcul-ligne">
          <span id="calcul-ligne-nom">${c.t('tarifs.calcul.enLigne')}</span>
          <div class="pas" role="group" aria-labelledby="calcul-ligne-nom">
            <button type="button" data-calcul="ligne" data-pas="-1" aria-label="${c.s('tarifs.calcul.moinsLigne')}">−</button>
            <output data-calcul-valeur="ligne" aria-live="polite">3</output>
            <button type="button" data-calcul="ligne" data-pas="1" aria-label="${c.s('tarifs.calcul.plusLigne')}">+</button>
          </div>
        </div>
        <div class="calcul-ligne">
          <span id="calcul-cabine-nom">${c.t('tarifs.calcul.enCabine')}</span>
          <div class="pas" role="group" aria-labelledby="calcul-cabine-nom">
            <button type="button" data-calcul="cabine" data-pas="-1" aria-label="${c.s('tarifs.calcul.moinsCabine')}">−</button>
            <output data-calcul-valeur="cabine" aria-live="polite">1</output>
            <button type="button" data-calcul="cabine" data-pas="1" aria-label="${c.s('tarifs.calcul.plusCabine')}">+</button>
          </div>
        </div>
        <div class="calcul-seances" aria-hidden="true" data-calcul-pastilles><span class="cabine"></span><span></span><span></span><span></span></div>
      </div>
      <div class="calcul-resultat" aria-live="polite">
        <p class="calcul-unite">${c.t('tarifs.calcul.unite')} <s data-calcul-unite>300 €</s></p>
        <p class="calcul-total"><span>${c.t('tarifs.calcul.avec')}</span><strong data-calcul-total data-prix>268 €</strong></p>
        <p class="calcul-detail" data-calcul-detail>${c.t('tarifs.calcul.exemple')}</p>
        <p class="calcul-gain" data-calcul-gain>${c.t('tarifs.calcul.gainExemple')}</p>
      </div>
    </div>
    <ul class="packs-liste" data-anime="cascade">
      ${o.packs.map((p) => html`<li class="pack${p.id === 'protocole-45' ? ' pack--protocole' : ''}" data-survol="incline" data-survol-force="4">
        <p class="pack-seances" aria-hidden="true" data-visuel>${brut(p.id === 'pack-3' ? '<span></span>'.repeat(3) : p.id === 'pack-4' ? '<span></span>'.repeat(4) : p.id === 'pack-mixte' ? '<span class="cabine"></span>' + '<span></span>'.repeat(3) : '<svg viewBox="0 0 26 26"><path d="M13 13V1a12 12 0 0 1 12 12Z" fill="#DAAA47"/><path d="M13 13h12a12 12 0 0 1-12 12Z" fill="#EAD6CC"/><path d="M13 13v12A12 12 0 0 1 1 13Z" fill="#C9737F"/><path d="M13 13H1A12 12 0 0 1 13 1Z" fill="#A63A57"/></svg>')}</p>
        <h3>${p.nom}</h3>
        <p class="pack-prix" data-prix>${euros(p.prix)}</p>
        <p class="pack-detail">${p.unite ? c.t('tarifs.packs.economie', { montant: p.unite - p.prix, detail: p.detail }) : p.detail}</p>
        ${p.id === 'protocole-45'
          ? c.lien('protocole-45', { classe: 'lien-fleche', texte: c.t('tarifs.packs.protocole') })
          : c.lien('contact', { ancre: 'demande', params: 'demande=' + (p.id === 'pack-mixte' ? 'cabine' : 'en-ligne'), classe: 'lien-fleche', texte: c.t('tarifs.packs.choisir'), attrs: `aria-label="${c.s('tarifs.packs.choisir')} : ${p.nom}"` })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="ccq cadeaux" id="cartes-cadeaux" data-module="carte-cadeau-qui-se-compose" data-cachet="YG" aria-labelledby="ccq-titre">
  <div class="ccq__grille conteneur">
    <div class="ccq__tete">
      <p class="surtitre" data-anime>${c.t('tarifs.cadeau.surtitre')}</p>
      <h2 id="ccq-titre" data-anime="lignes">${c.t('tarifs.cadeau.titre')}</h2>
      <p data-anime>${c.t('tarifs.cadeau.texte')}</p>
    </div>
    <div class="ccq__scene" aria-hidden="true" data-visuel data-fx="vitesse" data-fx-force="2">
      <div class="ccq__plateau"><div class="ccq__paquet"><div class="ccq__carte">
        <svg class="ccq__cadre" viewBox="0 0 160 100" preserveAspectRatio="none"><rect x="3.2" y="3.2" width="153.6" height="93.6" rx="5" ry="5" pathLength="1"/></svg>
        <div class="ccq__carte-haut">
          <span class="ccq__logo"><img src="/assets/images/logo-dore.webp" alt="" width="64" height="64"></span>
          <span class="ccq__noms"><span class="ccq__type">${c.t('tarifs.cadeau.type')}</span><span class="ccq__maison">${c.site.nom}</span></span>
          <span class="ccq__quantite" data-ccq-quantite hidden>× 1</span>
        </div>
        <div class="ccq__carte-bas">
          <p class="ccq__montant"><span data-ccq-montant>65</span><span class="ccq__devise">€</span></p>
          <div class="ccq__dedicace"><p class="ccq__pour" data-ccq-pour></p><p class="ccq__mot" data-ccq-mot></p><p class="ccq__de" data-ccq-de></p></div>
        </div>
        <span class="ccq__reflet"></span>
      </div></div></div>
      <p class="ccq__ticket" data-ccq-ticket>Une carte de 65 €</p>
    </div>
    <form class="ccq__form" action="#cartes-cadeaux" method="get" novalidate>
      <fieldset class="ccq__champ ccq__montants">
        <legend class="ccq__libelle">${c.t('tarifs.cadeau.soin')}</legend>
        <div class="ccq__puces">
          ${o.cartes.map((x) => html`<label class="ccq__puce"><input type="radio" name="montant" value="${x.prix}" data-soin="${x.nom}"${x.id === 'carte-en-ligne' ? brut(' checked') : ''}><span>${x.nom} · ${euros(x.prix)}</span></label>`)}
        </div>
        <p class="ccq__erreur" id="ccq-erreur-montant" data-ccq-erreur="montant" aria-live="polite"></p>
      </fieldset>
      <div class="ccq__champ">
        <label class="ccq__libelle" for="ccq-qte">${c.t('tarifs.cadeau.nombre')}</label>
        <div class="ccq__qte">
          <button type="button" data-ccq-moins aria-label="${c.s('tarifs.cadeau.moins')}" aria-controls="ccq-qte">−</button>
          <input type="number" id="ccq-qte" name="quantite" value="1" min="1" max="10" step="1" inputmode="numeric">
          <button type="button" data-ccq-plus aria-label="${c.s('tarifs.cadeau.plus')}" aria-controls="ccq-qte">+</button>
        </div>
      </div>
      <div class="ccq__deux">
        <div class="ccq__champ"><label class="ccq__libelle" for="ccq-pour">${c.t('tarifs.cadeau.pour')}</label><input type="text" id="ccq-pour" name="pour" maxlength="30" autocomplete="off" placeholder="Prénom"></div>
        <div class="ccq__champ"><label class="ccq__libelle" for="ccq-de">${c.t('tarifs.cadeau.de')}</label><input type="text" id="ccq-de" name="de" maxlength="30" autocomplete="given-name" placeholder="Votre prénom"></div>
      </div>
      <div class="ccq__champ">
        <label class="ccq__libelle" for="ccq-mot">${c.t('tarifs.cadeau.mot')} <span class="ccq__facultatif">${c.t('tarifs.cadeau.facultatif')}</span></label>
        <textarea id="ccq-mot" name="mot" rows="2" maxlength="120" aria-describedby="ccq-reste"></textarea>
        <p class="ccq__aide" id="ccq-reste"><span data-ccq-reste>120</span> ${c.t('tarifs.cadeau.caracteres')}</p>
      </div>
      <p class="ccq__total"><span>${c.t('tarifs.cadeau.total')}</span><output data-ccq-total for="ccq-qte">65 €</output></p>
      <p class="socle-sr visuellement-cache" aria-live="polite" data-ccq-annonce></p>
      <div class="ccq__actions">
        <button type="submit" class="bouton ccq__offrir">${c.t('tarifs.cadeau.offrir')}</button>
        <button type="button" class="bouton bouton--contour" data-ccq-reprendre hidden>${c.t('tarifs.cadeau.autre')}</button>
      </div>
      <p class="ccq__statut" role="status" data-ccq-statut hidden></p>
      <p class="ccq__note">${c.t('tarifs.cadeau.note')}</p>
    </form>
  </div>
</section>

<section class="conditions" id="conditions">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('tarifs.conditions.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('tarifs.conditions.titre')}</h2>
    </div>
    <ol class="conditions-liste" data-anime="cascade" data-visuel>
      ${o.conditions.map((x, i) => html`<li><span class="conditions-num" aria-hidden="true">${i + 1}</span><h3>${x.titre}</h3><p>${x.texte}</p></li>`)}
    </ol>
  </div>
</section>

${appel(c)}
`;
};

/* Blocs communs aux pages : appel final, dessins au trait (profil, visage de face, gestes), quatre volets. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Profil au trait, dans l'esprit du logo : tracé à la main, se dessine au défilement (data-fx="trace"). */
export const profil = (classe = '') => brut(`<svg class="profil ${classe}" viewBox="0 0 200 300" aria-hidden="true" data-fx="trace" data-visuel>
  <path d="M150 12 C110 6 84 30 81 70 C80 86 77 96 72 105 C66 116 59 128 55 138 C53 143 56 146 62 147 C66 148 67 152 65 156 C62 160 64 163 69 164 C65 167 64 171 69 173 C66 180 69 190 79 196 C91 203 107 204 118 199"/>
  <path d="M118 199 C121 228 119 258 112 292"/>
  <path d="M150 12 C178 18 194 46 192 84 C190 116 176 140 160 156"/>
  <path class="geste" d="M96 150 C104 136 114 126 128 118" data-fx-trait/>
  <path class="geste" d="M92 92 C100 80 110 72 124 66" data-fx-trait/>
  <path class="geste" d="M100 186 C110 176 120 170 134 166" data-fx-trait/>
</svg>`);

/* Visage de face au trait, avec ses trois zones (regard et front, bas du visage, cou et décolleté). */
export const visageFace = (aria) => brut(`<svg class="visage-face" viewBox="0 0 320 400" role="img" aria-label="${aria}" data-visuel>
  <g class="zone" data-zone="regard">
    <path class="zone-fond" d="M88 70 C100 30 220 30 232 70 L236 150 C210 160 110 160 84 150 Z"/>
    <path class="zone-geste" d="M130 96 C134 80 140 66 148 52 M190 96 C186 80 180 66 172 52 M112 134 C104 128 98 118 96 106 M208 134 C216 128 222 118 224 106"/>
  </g>
  <g class="zone" data-zone="bas">
    <path class="zone-fond" d="M86 170 C110 182 210 182 234 170 C232 214 206 252 160 258 C114 252 88 214 86 170 Z"/>
    <path class="zone-geste" d="M128 232 C112 222 102 208 98 190 M192 232 C208 222 218 208 222 190 M150 214 C140 210 132 204 128 196 M170 214 C180 210 188 204 192 196"/>
  </g>
  <g class="zone" data-zone="cou">
    <path class="zone-fond" d="M122 262 C140 270 180 270 198 262 L204 320 C236 330 270 342 300 372 L20 372 C50 342 84 330 116 320 Z"/>
    <path class="zone-geste" d="M140 330 C140 310 142 292 146 274 M180 330 C180 310 178 292 174 274 M90 360 C110 346 130 340 150 338 M230 360 C210 346 190 340 170 338"/>
  </g>
  <g class="trait-visage">
    <path d="M160 24 C112 24 86 60 86 112 C86 168 104 222 132 247 C144 257 152 261 160 261 C168 261 176 257 188 247 C216 222 234 168 234 112 C234 60 208 24 160 24 Z"/>
    <path class="cheveux" d="M160 14 C114 10 74 40 70 100 C66 150 76 196 66 236 C62 252 54 262 44 270 M160 14 C206 10 248 44 250 104 C252 156 244 198 254 236 C258 252 266 262 276 270 M98 70 C120 52 144 46 168 50"/>
    <path d="M112 110 C122 102 136 102 146 108 M174 108 C184 102 198 102 208 110"/>
    <path d="M116 132 C124 139 136 139 144 132 M176 132 C184 139 196 139 204 132 M120 137 L117 142 M130 139 L129 145 M140 137 L142 142 M180 137 L178 142 M190 139 L191 145 M200 137 L203 142"/>
    <path d="M160 132 C158 152 154 168 150 180 C154 185 166 185 170 180"/>
    <path d="M138 207 C146 201 154 200 160 203 C166 200 174 201 182 207 C174 217 146 217 138 207 Z M138 207 C150 210 170 210 182 207"/>
    <path d="M132 247 C132 270 128 300 118 320 M188 247 C188 270 192 300 202 320"/>
    <path d="M118 320 C84 330 50 344 22 372 M202 320 C236 330 270 344 298 372"/>
    <path d="M140 318 C150 326 170 326 180 318"/>
  </g>
</svg>`);

/* Quatre quarts de disque qui se rassemblent (Protocole 45+). */
export function quatreVolets(c, { aria, classe = '', centre = true } = {}) {
  const v = c.donnees.offre.volets;
  const quart = (i) => {
    const a0 = -90 + i * 90, a1 = a0 + 90, r = 100, ri = 46, rad = (a) => (a * Math.PI) / 180;
    const p = (a, rr) => `${(110 + rr * Math.cos(rad(a))).toFixed(2)} ${(110 + rr * Math.sin(rad(a))).toFixed(2)}`;
    return `M${p(a0 + 1.2, ri)} L${p(a0 + 1.2, r)} A${r} ${r} 0 0 1 ${p(a1 - 1.2, r)} L${p(a1 - 1.2, ri)} A${ri} ${ri} 0 0 0 ${p(a0 + 1.2, ri)} Z`;
  };
  const pos = [[148, 62], [148, 168], [64, 168], [64, 62]];
  return html`<figure class="volets ${classe}" data-effet="quatre-volets" data-visuel role="img" aria-label="${aria}">
  <svg viewBox="0 0 220 220" aria-hidden="true">
    ${v.map((x, i) => brut(`<g class="volet volet--${i + 1}" data-volet="${i}"><path d="${quart(i)}"/><text x="${pos[i][0]}" y="${pos[i][1]}" text-anchor="middle">${x.nom}</text></g>`))}
    ${centre ? brut('<text class="volets-centre" x="110" y="122" text-anchor="middle">45+</text>') : ''}
  </svg>
</figure>`;
}

/* Appel final : même composant sur toutes les pages (diagnostic offert). */
export function appel(c, { image = 'grok/appel-fond', id = 'diagnostic-offert' } = {}) {
  const k = c.site.contact;
  return html`<section class="appel" id="${id}">
  ${c.media({ nom: image, alt: '', classe: 'appel-fond', sizes: '100vw', cadrage: '40% 50%', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="appel-carte conteneur-etroit">
    <p class="surtitre" data-anime>${c.t('appel.surtitre')}</p>
    <h2 class="appel-titre" data-anime="lignes">${c.t('appel.titre1')} <em>${c.t('appel.titre2')}</em></h2>
    <svg class="appel-traits" viewBox="0 0 240 40" aria-hidden="true" data-fx="trace"><path d="M6 34 C60 30 110 22 150 12 M160 30 C190 26 214 18 234 6"/></svg>
    <p data-anime>${c.t('appel.texte')}</p>
    <p class="appel-actions" data-anime>
      ${c.lien('contact', { ancre: 'diagnostic', classe: 'bouton', texte: c.t('appel.action'), attrs: 'data-survol="magnetique"' })}
      <span class="appel-tel">${c.t('appel.ou')} <a href="tel:${k.telephoneLien}">${k.telephone}</a></span>
    </p>
  </div>
</section>`;
}

/* Prix en euros, espace insécable. */
export const euros = (n) => `${String(n).replace('.', ',')} €`;

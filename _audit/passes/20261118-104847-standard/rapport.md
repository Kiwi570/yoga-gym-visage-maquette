# Rapport d’audit

Projet : `yoga-gym-visage-maquette` · 18/11/2026 12:07:30 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **61 échec(s)**
- Passe : `20261118-104847-standard` · version ?v=1
- Échecs : **61**
- À regarder : **49**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (8), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien mort (1)

- **lien mort** — `contact.html` — href="#"

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-actions > p.hero-info « 25 minutes offertes, en visio ou par téléphone » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-carte > p.introuvable-actions:nth-of-type(2) > span « Réserver mon diagnostic offert » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — div.conteneur.contact-tete > div.contact-tete-carte > div.tete-actions > p.tete-info « 25 minutes offertes, en visio ou par téléphone » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/methode` — div.conteneur.methode-tete:nth-of-type(1) > div.methode-tete-droite:nth-of-type(2) > div.tete-actions > p.tete-info « Séance de 1 h 30 : 90 € en cabine, 70 € en ligne » _(320×568 normal, 320×568 sansJs)_

### texte sous 12 px (9)

- **texte sous 12 px** — `/` — figure.volets > svg > g.volet.volet--1:nth-of-type(1) > text — 10.0 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte sous 12 px** — `/` — figure.volets > svg > g.volet.volet--2:nth-of-type(2) > text — 10.0 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte sous 12 px** — `/` — figure.volets > svg > g.volet.volet--3:nth-of-type(3) > text — 10.0 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte sous 12 px** — `/` — figure.volets > svg > g.volet.volet--4:nth-of-type(4) > text — 10.0 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte sous 12 px** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--1:nth-of-type(1) > text — 10.0 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte sous 12 px** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--2:nth-of-type(2) > text — 10.0 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte sous 12 px** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--3:nth-of-type(3) > text — 10.0 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte sous 12 px** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--4:nth-of-type(4) > text — 10.0 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte sous 12 px** — `/seances-tarifs` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__maison:nth-of-type(2) « Yoga Gym du Visage Toulouse » — 11.7 px _(320×568 normal, 320×568 sansJs)_

### contraste insuffisant (27)

- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(1) « Le » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(2) « visage » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(3) « a » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(4) « ses » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(5) « muscles. » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(6) « Comme » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(7) « le » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(8) « reste » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(9) « du » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(10) « corps, » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(11) « on » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(12) « peut » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(13) « les » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(14) « tonifier, » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(15) « les » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(16) « détendre » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(17) « et » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(18) « les » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur.manifeste-grille > div > p.manifeste-texte:nth-of-type(2) > span.mot:nth-of-type(19) « étirer. » — 1.54:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — section#formules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « Trois façons de pratiquer » — 4.46:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **contraste insuffisant** — `/contact` — section#demande > div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « Une demande » — 4.46:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/contact` — div.fpe__grille > div.fpe__champ:nth-of-type(1) > label > i « * » — 2.39:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — div.fpe__grille > div.fpe__champ:nth-of-type(2) > label > i « * » — 2.39:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — fieldset.fpe__etape:nth-of-type(3) > label.fpe__case > span.fpe__choix-texte > i « * » — 2.39:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/methode` — div.conteneur > div.ateliers-tete > div > p.surtitre:nth-of-type(1) « Ateliers collectifs » — 4.46:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/protocole-45` — li.volet-carte.volet-carte--2:nth-of-type(2) > div.volet-carte-corps > p.volet-carte-num:nth-of-type(1) > span « 2 » — 3.61:1 (minimum 4.5:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/seances-tarifs` — section#packs > div.conteneur > div.tete-section > p.surtitre:nth-of-type(1) « Packs » — 4.46:1 (minimum 4.5:1) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### accessibilité (axe) : color-contrast (5)

- **accessibilité (axe) : color-contrast** — `/` — .mot:nth-child(1) ; .mot:nth-child(2) ; .mot:nth-child(4) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — .mot:nth-child(4) ; .mot:nth-child(5) ; .mot:nth-child(6) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .fpe__tete > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/methode` — .ateliers-tete > div > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/seances-tarifs` — #packs > .conteneur > .tete-section > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-carte > p.introuvable-actions:nth-of-type(2) > a.bouton « Revenir à l'accueil » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.contact-tete > div.contact-tete-carte > div.tete-actions > a.bouton « Réserver mon diagnostic offert » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/methode` — div.conteneur.methode-tete:nth-of-type(1) > div.methode-tete-droite:nth-of-type(2) > div.tete-actions > a.bouton « Réserver mon diagnostic offert » _(320×568 normal, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/methode` — div.conteneur.methode-tete:nth-of-type(1) > div.methode-tete-droite:nth-of-type(2) > div.tete-actions > p.tete-info « Séance de 1 h 30 : 90 € en cabine, 70 € en ligne » — par section#debut > div.bandeau:nth-of-type(2) > p.badge « 1 h 30 » _(390×844 normal)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque:nth-of-type(1) > span « Le Protocole » — avec div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » — avec section#debut > div.conteneur.protocole-tete > div.protocole-tete-texte:nth-of-type(1) > p.masque-ecran-bas:nth-of-type(2) « Un accompagnement complet face au temps qui passe  » _(390×844 normal, 768×1024 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » — avec div.conteneur.protocole-tete > div.protocole-tete-texte:nth-of-type(1) > div.tete-actions > a.bouton « Réserver mon diagnostic offert » _(1366×768 normal, 1366×768 sansWebgl, 1366×768 sansJs)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 329 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/contact` — page large de 962 px — largeurs : 880, 920, 960, 1000 px _(balayage 320–1920 normal)_

### transition : élément visible, caché puis réaffiché (flash) (1)

- **transition : élément visible, caché puis réaffiché (flash)** — `/methode → /protocole-45` — div.conteneur.protocole-tete > div.protocole-disque > img.protocole-disque-logo _(1366×768 film, 390×844 film)_

### lien profond (5)

- **lien profond** — `/ → /seances-tarifs#seance-cabine` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-en-ligne` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-en-ligne` — section cachée sous l'en-tête (16 px) _(390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-massage` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-ateliers` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (2)

- **clearProps « all »** — assets/js/modules/carte-cadeau-qui-se-compose/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')
- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/` — 88 × 49 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (32)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-arche > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.tep__scene:nth-of-type(2) > ol.tep__pile > li.tep__carte.tep__carte--dessus:nth-of-type(1) > p.tep__source:nth-of-type(2) « AVIS PUBLIÉ SUR LE SITE DE MARIANNE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.tep__scene:nth-of-type(2) > ol.tep__pile > li.tep__carte:nth-of-type(1) > p.tep__source:nth-of-type(2) « AVIS PUBLIÉ SUR LE SITE DE MARIANNE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.tep__scene:nth-of-type(2) > ol.tep__pile > li.tep__carte:nth-of-type(2) > p.tep__source:nth-of-type(2) « AVIS PUBLIÉ SUR LE SITE DE MARIANNE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.tep__scene:nth-of-type(2) > ol.tep__pile > li.tep__carte:nth-of-type(3) > p.tep__source:nth-of-type(2) « AVIS PUBLIÉ SUR LE SITE DE MARIANNE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.tep__scene:nth-of-type(2) > ol.tep__pile > li.tep__carte:nth-of-type(4) > p.tep__source:nth-of-type(2) « AVIS PUBLIÉ SUR LE SITE DE MARIANNE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#debut > div.bandeau:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#en-ligne > div.conteneur.bloc-image-grille > figure.media.bloc-image-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#pour-qui > figure.media.pourqui-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--3:nth-of-type(3) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--4:nth-of-type(4) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- … et 7 autres (rapport.json)

### typographie française (6)

- **typographie française** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/methode` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/protocole-45` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/seances-tarifs` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/contact` — section#diagnostic « Diagnostic offert 25 minutes pour faire connaissan » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/seances-tarifs` — section#seances « À l'unité Les séances Séance en cabine 1 h 30 · À  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/seances-tarifs` — section#packs « Packs Le chemin vers la jeunesse naturelle Un parc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 39 min de travail pour 115 min de budget, 23 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /methode, /protocole-45, /seances-tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2828 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2734 ms depuis le premier octet
- Ouverture /methode (1366×768) : 2705 ms depuis le premier octet
- Ouverture /protocole-45 (1366×768) : 2897 ms depuis le premier octet
- Ouverture /seances-tarifs (1366×768) : 2739 ms depuis le premier octet
- Ouverture / (390×844) : 2792 ms depuis le premier octet
- Ouverture /contact (390×844) : 2718 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /methode (390×844) : 2736 ms depuis le premier octet
- film de l'ouverture /methode 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /protocole-45 (390×844) : 2907 ms depuis le premier octet
- Ouverture /seances-tarifs (390×844) : 2730 ms depuis le premier octet
- film de l'ouverture /seances-tarifs 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 371 images d’intro, 18 de voile et 133 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode : aucune section épinglée ou plein écran.
- Tient dans l'écran /protocole-45 : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances-tarifs : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 436, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /methode 1366×768 (molette) : 0 % d'images lentes sur 344, tâche la plus longue 0 ms
- Fluidité /protocole-45 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité /seances-tarifs 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1355, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /methode 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /protocole-45 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /seances-tarifs 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Vitesse / : 0.66 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /methode : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /protocole-45 : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances-tarifs : 0.54 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,films,parcours
```

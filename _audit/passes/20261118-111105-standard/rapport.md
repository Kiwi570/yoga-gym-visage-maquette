# Rapport d’audit

Projet : `yoga-gym-visage-maquette` · 18/11/2026 12:29:56 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261118-111105-standard` · version ?v=1
- Échecs : **10**
- À regarder : **37**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261118-104847-standard | standard | toutes | toutes | 61 | 49 | 1 | échecs |
| 20261118-111026-standard | standard | toutes | toutes | 0 | 6 | 104 | INCOMPLET |
| **20261118-111105-standard** (celle-ci) | standard | toutes | toutes | 10 | 37 | 1 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .visage-etape[data-zone="regard"] > h3 ; .visage-etape[data-zone="regard"] > p ; .visage-etape[data-zone="bas"] > h3 — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » — avec section#debut > div.conteneur.protocole-tete > div.protocole-tete-texte:nth-of-type(1) > p.masque-ecran-bas:nth-of-type(2) « Un accompagnement complet face au temps qui passe  » _(768×1024 normal, 1920×1080 normal)_
- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque:nth-of-type(1) > span « Le Protocole » — avec div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » _(844×390 normal)_

### texte coupé (1)

- **texte coupé** — `/seances-tarifs` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__maison:nth-of-type(2) « Yoga Gym du Visage Toulouse » — le contenu dépasse de son cadre _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### lien profond (6)

- **lien profond** — `/ → /seances-tarifs#seance-cabine` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-cabine` — section cachée sous l'en-tête (17 px) _(390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-en-ligne` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-massage` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-massage` — section cachée sous l'en-tête (16 px) _(390×844 lien profond)_
- **lien profond** — `/ → /seances-tarifs#seance-ateliers` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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

### texte de contenu sous 13 px (ordinateur) (29)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-arche > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — figure.volets > svg > g.volet.volet--3:nth-of-type(3) > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > figure.media.demande-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#debut > div.bandeau:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#en-ligne > div.conteneur.bloc-image-grille > figure.media.bloc-image-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--3:nth-of-type(3) > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#pour-qui > figure.media.pourqui-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--3:nth-of-type(3) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--4:nth-of-type(4) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--3:nth-of-type(3) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--4:nth-of-type(4) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — div.seances-images > div.seances-image.actif:nth-of-type(4) > figure.media.seances-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansWebgl)_
- … et 4 autres (rapport.json)

### section sans visuel (2)

- **section sans visuel** — `/contact` — section#demande « Une demande Écrivez-moi Trois étapes, une minute.  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/seances-tarifs` — section#packs « Packs Le chemin vers la jeunesse naturelle Un parc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

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
- Ouverture / (1366×768) : 2887 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2733 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /methode (1366×768) : 2746 ms depuis le premier octet
- Ouverture /protocole-45 (1366×768) : 2901 ms depuis le premier octet
- Ouverture /seances-tarifs (1366×768) : 2726 ms depuis le premier octet
- Ouverture / (390×844) : 2835 ms depuis le premier octet
- Ouverture /contact (390×844) : 2747 ms depuis le premier octet
- Ouverture /methode (390×844) : 2722 ms depuis le premier octet
- Ouverture /protocole-45 (390×844) : 2897 ms depuis le premier octet
- Ouverture /seances-tarifs (390×844) : 2728 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 346 images d’intro, 18 de voile et 129 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode : aucune section épinglée ou plein écran.
- Tient dans l'écran /protocole-45 : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances-tarifs : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 434, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 218, tâche la plus longue 0 ms
- Fluidité /methode 1366×768 (molette) : 0 % d'images lentes sur 339, tâche la plus longue 0 ms
- Fluidité /protocole-45 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /seances-tarifs 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1372, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /methode 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /protocole-45 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /seances-tarifs 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.62 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /methode : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /protocole-45 : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances-tarifs : 0.49 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```

# Rapport d’audit

Projet : `yoga-gym-visage-maquette` · 18/11/2026 12:12:38 · 2 min · 6 page(s) · audit standard

## Résumé

- Statut : **INCOMPLET : 103 contrôle(s) requis n’ont pas tourné (voir « Non lancé ») ; ne vaut pas pour une livraison**
- Passe : `20261118-111026-standard` · version ?v=1
- Échecs : **0**
- À regarder : **6**
- Non lancé : **104**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3)

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
| **20261118-111026-standard** (celle-ci) | standard | toutes | toutes | 0 | 6 | 104 | INCOMPLET |

## Échecs

Aucun.

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

## Non lancé

- **grille** : page.evaluate: Target page, context or browser has been closed
- **mesures / 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures / 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures / 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures / 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /404 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /contact 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /methode 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /protocole-45 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 320×568 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 390×844 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 844×390 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 768×1024 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 1366×768 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 1920×1080 normal** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 390×844 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 390×844 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 1366×768 sansWebgl** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 1366×768 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures /seances-tarifs 320×568 sansJs** : browser.newContext: Target page, context or browser has been closed
- **mesures:balayage** : browser.newContext: Target page, context or browser has been closed
- **film de l'ouverture / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /methode 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /protocole-45 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /seances-tarifs 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /methode 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /protocole-45 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /seances-tarifs 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /methode 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /protocole-45 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /seances-tarifs 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /methode 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /protocole-45 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /seances-tarifs 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1366×768** : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page (3 tentatives)
- **bords de l’écran /contact 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /methode 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /protocole-45 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /seances-tarifs 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1920×1080** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **parcours:intro** : browser.newContext: Target page, context or browser has been closed
- **parcours:menu** : browser.newContext: Target page, context or browser has been closed
- **parcours:liens** : browser.newContext: Target page, context or browser has been closed
- **parcours:hauteur** : browser.newContext: Target page, context or browser has been closed
- **ecran** : browser.newContext: Target page, context or browser has been closed
- **fluidite** : browser.newContext: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
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
- Bords de l’écran : 0 images d’intro, 0 de voile et 0 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,grille,mesures,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```

# Rapport d’audit

Projet : `yoga-gym-visage-maquette` · 18/11/2026 12:35:37 · 4 min · 3 page(s) · audit standard ciblé sur /,/protocole-45,/seances-tarifs (étapes : mesures, parcours)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261118-113117-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **24**
- Non lancé : **0**
- Contrôles passés : mesures (33), balayage (3), intro accélérable et passable (7), menu (1), clavier (3), liens et boutons (3), liens profonds (16), liens vers la page en cours (3), changements de hauteur (3)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261118-104847-standard | standard | toutes | toutes | 61 | 49 | 1 | échecs |
| 20261118-111026-standard | standard | toutes | toutes | 0 | 6 | 104 | INCOMPLET |
| 20261118-111105-standard | standard | toutes | toutes | 10 | 37 | 1 | échecs |
| **20261118-113117-standard-cible-partiel** (celle-ci) | standard | /,/protocole-45,/seances-tarifs | mesures, parcours | 2 | 24 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/protocole-45` — div.conteneur.protocole-tete > div.protocole-tete-texte:nth-of-type(1) > div.tete-actions > p.tete-info « 455 € l'ensemble, en 3 ou 4 fois sans frais » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/protocole-45` — div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque:nth-of-type(1) > span « Le Protocole » — avec div.protocole-tete-texte:nth-of-type(1) > h1 > span.ligne-masque.protocole-geant:nth-of-type(2) > span « 45+ » _(768×1024 normal, 844×390 normal)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (23)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-arche > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — figure.volets > svg > g.volet.volet--3:nth-of-type(3) > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
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
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__type:nth-of-type(1) « SÉANCE EN LIGNE » — 12.9 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — div.seances-images > div.seances-image.actif:nth-of-type(5) > figure.media.seances-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__type:nth-of-type(1) « CARTE CADEAU » — 12.9 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### section sans visuel (1)

- **section sans visuel** — `/seances-tarifs` — section#packs « Packs Le chemin vers la jeunesse naturelle Un parc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /protocole-45, /seances-tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/protocole-45 --seulement=fichiers,mesures
```

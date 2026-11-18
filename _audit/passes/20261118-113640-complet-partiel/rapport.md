# Rapport d’audit

Projet : `yoga-gym-visage-maquette` · 18/11/2026 12:42:39 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261118-113640-complet-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **36**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261118-104847-standard | standard | toutes | toutes | 61 | 49 | 1 | échecs |
| 20261118-111026-standard | standard | toutes | toutes | 0 | 6 | 104 | INCOMPLET |
| 20261118-111105-standard | standard | toutes | toutes | 10 | 37 | 1 | échecs |
| 20261118-113117-standard-cible-partiel | standard | /,/protocole-45,/seances-tarifs | mesures, parcours | 2 | 24 | 0 | échecs |
| 20261118-113545-standard-cible-partiel | standard | /,/protocole-45 | fichiers, mesures | 0 | 19 | 0 | complet |
| **20261118-113640-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 6 | 36 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-actions > p.hero-info « 25 minutes offertes, en visio ou par téléphone » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.introuvable-carte > p.introuvable-actions:nth-of-type(2) > span « Réserver mon diagnostic offert » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/protocole-45` — div.conteneur.protocole-tete > div.protocole-tete-texte:nth-of-type(1) > div.tete-actions > p.tete-info « 455 € l'ensemble, en 3 ou 4 fois sans frais » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-carte > p.introuvable-actions:nth-of-type(2) > a.bouton « Revenir à l'accueil » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (1)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(1280×720 normal, 1280×720 sansWebgl)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/methode` — .semaine[aria-hidden="true"]:nth-child(10) > span ; .semaine[aria-hidden="true"]:nth-child(11) > span ; .semaine[aria-hidden="true"]:nth-child(12) > span — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (34)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-arche > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste.fx-fini > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — figure.volets > svg > g.volet.volet--3:nth-of-type(3) > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(2) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(3) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.formules-liste > li.formule:nth-of-type(4) > figure.media.formule-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.demande-grille > div.fpe__tete:nth-of-type(1) > figure.media.demande-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 2560×1440 normal, +12)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#debut > div.bandeau:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#en-ligne > div.conteneur.bloc-image-grille > figure.media.bloc-image-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — div.conteneur > div.ateliers-tete > figure.media.ateliers-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/methode` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — figure.volets.volets--clair > svg > g.volet.volet--3:nth-of-type(3) > text — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#pour-qui > figure.media.pourqui-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--3:nth-of-type(3) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste.fx-fini > li.volet-carte.volet-carte--4:nth-of-type(4) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — section#diagnostic-offert > figure.media.appel-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--2:nth-of-type(2) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--3:nth-of-type(3) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/protocole-45` — ol.volets-liste > li.volet-carte.volet-carte--4:nth-of-type(4) > figure.media.volet-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/seances-tarifs` — div.seances-images > div.seances-image.actif:nth-of-type(4) > figure.media.seances-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1024×768 sansWebgl, 1280×720 sansWebgl, 1366×768 sansWebgl)_
- … et 9 autres (rapport.json)

### section sans visuel (2)

- **section sans visuel** — `/contact` — section#demande « Une demande Écrivez-moi Trois étapes, une minute.  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +15)_
- **section sans visuel** — `/seances-tarifs` — section#packs « Packs Le chemin vers la jeunesse naturelle Un parc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode : aucune section épinglée ou plein écran.
- Tient dans l'écran /protocole-45 : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances-tarifs : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/contact,/methode,/protocole-45 --seulement=fichiers,mesures
```

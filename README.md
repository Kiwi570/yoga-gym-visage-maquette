# Yoga Gym du Visage Toulouse : maquette v2

Maquette de présentation du futur site de **Yoga Gym du Visage Toulouse** (Marianne, méthode Roxane Rajeunissement), direction « Le geste qui remonte ».
Adresse prévue : https://yoga-gym-visage-maquette.vercel.app (noindex : la maquette ne concurrence pas le site actuel dans Google).

## Pages de la v1

| Page | Adresse | Ouverture |
|---|---|---|
| Accueil | `/` | Grand titre « Rajeunir naturellement », arche photo, médaillon du logo |
| La méthode | `/methode` | Grand titre puis bandeau, badge « 1 h 30 » |
| Protocole 45+ | `/protocole-45` | « 45+ » en très grand et disque des quatre volets |
| Séances & tarifs | `/seances-tarifs` | Photo du Wellbee Space et médaillon « dès 70 € » ; « Calculez votre parcours » ; carte cadeau qui se compose |
| Contact | `/contact` | Photo plein cadre du salon, demande en trois étapes |
| Page introuvable | `/404` | Miroir qui ne reflète que la lumière |

Pages du site actuel non reprises (possibles en v2) : Ateliers collectifs (page dédiée), Soins Bio & Beauté / Mes indispensables (Sym Biologic System, Younique), CGV complètes.

## Ce que le client doit fournir (à compléter)

- **Mentions légales** : nom légal ou raison sociale, SIRET, adresse du siège, directrice de la publication. *À compléter.*
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 18 novembre 2026 dans l'accord public de Vercel, vercel.com/docs/release-phases/public-beta-agreement), à reporter dans les mentions légales. *À compléter.*
- **Politique de confidentialité** (formulaire de demande, carte cadeau) : usage des données, durée de conservation, contact. *À compléter.*
- **Assurance responsabilité civile professionnelle** : à mentionner si la cliente le souhaite. *À compléter.*
- **Crédits des illustrations générées** : les 11 images marquées « Illustration générée » ont été créées avec Grok ; la mention reste sur le site final.
- **Nom complet** : la maquette utilise le prénom « Marianne » (présent sur son certificat et dans ses avis clients). À confirmer.
- **Ordre des photos avant / après du bas du visage** : la maquette les présente comme « Avant, En cours, Après » ; à confirmer par la cliente.

### Retiré ou remplacé faute d'information

| Information | Page | Ce qui est affiché |
|---|---|---|
| Dates des ateliers collectifs | Accueil, La méthode | « Dates annoncées prochainement : demandez à être prévenue. » |
| Durée du massage liftant et des séances de sophrologie | Séances & tarifs | Aucune durée affichée |
| Horaires précis | Toutes | Seuls les jours de présence (mercredi, samedi, sur rendez-vous) |
| Avis clients nommés | Accueil | 4 avis repris mot pour mot du site actuel, sans nom de famille |
| Photo de la cabine du 41 rue de Gascogne | Contact | Aucune photo (seul le Wellbee Space est photographié) |

### Incohérences du site actuel, tranchées avec l'utilisateur

- Protocole 45+ : 445 € (page Séances) ou 455 € (boutique) → **455 €** (somme exacte des volets).
- Sophro Éclat & Sérénité : 30 € ou 40 € → **40 €**.
- Deux numéros : **07 66 19 74 64** pour appeler, **06 43 70 01 10** pour WhatsApp.
- Trois noms de marque (Yoga Gym du Visage Toulouse, Yoga du Visage Toulouse, Yoga Gym Visage Jeunesse) → **Yoga Gym du Visage Toulouse**.

## À retirer ou remplacer à la mise en ligne définitive

- La consigne `noindex, nofollow` dans chaque page et l'en-tête `X-Robots-Tag` de `vercel.json`.
- Les formulaires et la carte cadeau simulés (brancher le paiement Mollie et l'envoi réel).
- Les mentions « à compléter » du pied de page (mentions légales, politique de confidentialité).
- Les phrases d'attente listées plus haut, par les vraies informations.
- **À garder** : la mention « Illustration générée » sur les images Grok.

## Technique

- Site statique (HTML, CSS, JavaScript), sans étape de construction sur Vercel (`vercel.json` : cleanUrls).
- Textes et données : `donnees/` ; pages générées par `node outils/generer.mjs` (ne jamais modifier les pages HTML à la main).
- Effets propres : `assets/js/site.js` (arche-lift, gestes, manifeste, carte-visage, quatre-volets, trois-mois, addition) ; outil « Calculez votre parcours » (meilleure combinaison de packs, prix de `donnees/offre.json` et de `site.js` à tenir identiques).
- Photos de la cliente : versions réchauffées dans `recu/traites/` (même lumière que les illustrations), originaux gardés dans `recu/`.
- Modules de la bibliothèque : témoignages en pile, carte cadeau qui se compose, formulaire par étapes.
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).

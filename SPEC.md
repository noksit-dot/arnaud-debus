# Spécification — Site vitrine Arnaud Debus, Psychologue

> Document de cadrage. **Aucune ligne de code** décidée ici : ce fichier fixe le périmètre, les
> choix techniques et le contenu attendu avant implémentation.

Statut : **brouillon v1** · Dernière mise à jour : 2026-07-09

> ✅ Contenu réel et médias récupérés depuis le site WebSelf : HTML source dans
> [`source-scraped/`](./source-scraped/), images d'origine dans
> [`design/reference-assets/`](./design/reference-assets/). Les textes ci-dessous sont donc
> ceux d'Arnaud (à relire/valider par lui), plus des placeholders uniquement là où c'est signalé.

---

## 1. Contexte & objectif

Refonte du site actuel d'Arnaud Debus, **psychologue** exerçant dans l'Hérault
(**Béziers, Clermont-l'Hérault, Pézenas**). Le site de référence
(`https://arnaud-debus-70.webselfsite.net/accueil`) est construit sur le builder **WebSelf** :
4 pages (Accueil, À propos, Prestations, Contact) + un sitemap, **sans mentions légales**.

> ⚠️ Le « 70 » de l'URL est un identifiant WebSelf, **pas** le département. La zone d'exercice
> est bien l'**Hérault (34)** — déterminant pour le SEO local.

### Objectifs

- Un site **vitrine statique**, sobre, professionnel, rassurant (le registre d'un psy : calme,
  confiance, lisibilité).
- **Facile à maintenir par un non-développeur** (Arnaud), **sans CMS** (pas de WordPress).
- **Performant et accessible** : cible **WCAG 2.1 niveau AA**, Lighthouse élevé.
- **Ajouter les mentions légales** (obligation légale, profession réglementée).

### Non-objectifs (anti « fusée pour une page »)

- Pas de CMS, pas de base de données, pas de backend applicatif.
- Pas de blog, pas d'espace membre, pas de prise de RDV en ligne (hors périmètre v1).
- Pas de framework SPA lourd (Next, etc.) : le site tient sur du statique.

---

## 2. Décisions actées

| Sujet          | Décision                                                                 |
|----------------|--------------------------------------------------------------------------|
| **Stack**      | **Astro** (composants proches JSX, 0 JS envoyé par défaut, contenu Markdown/data éditable, dark/light natif) |
| **Structure**  | **One-page** qui scrolle (4 sections) + page séparée `/mentions-legales` |
| **Contact v1** | **`mailto:` + téléphone affiché** (pas de backend)                       |
| **Contact v2** | Formulaire sans backend via **Web3Forms** ou **Formspree** (documenté §8) |
| **Hébergement**| **GitHub Pages**, URL `*.github.io` (pas de domaine perso en v1)          |
| **Thème**      | **Light + Dark**, bascule manuelle + respect `prefers-color-scheme`      |
| **Base couleur**| Fond lavande `#E7D1FF` + aubergine `#3D003E` (couleurs réelles du site actuel) |
| **Typo**       | Reprise des fonts du site : **Comfortaa** (titres) + **Lato** (texte), auto-hébergées |
| **Langue**     | Français uniquement                                                       |

---

## 3. Arborescence & navigation

### Pages

- `/` — page unique, 4 sections ancrées :
  - `#accueil` — hero + accroche + CTA
  - `#a-propos` — « Qui suis-je » (bio + photo)
  - `#prestations` — services
  - `#contact` — coordonnées + CTA mail/tél
- `/mentions-legales` — page dédiée (lien discret en footer)

### Navigation

- Header sticky avec logo/nom + liens d'ancre (Accueil · À propos · Prestations · Contact).
- **Scroll fluide** vers les sections (`scroll-behavior: smooth`, désactivé si
  `prefers-reduced-motion`).
- **CTA « Contactez-moi »** présents dans le hero et en pied de sections → scroll vers `#contact`.
- Footer : nom, ville, lien **Mentions légales**, bascule de thème, année.
- Menu mobile : burger accessible (focus trap, `aria-expanded`, fermeture Échap).

---

## 4. Contenu par section

> Contenu **repris du site actuel** (à relire/valider par Arnaud). Placeholders signalés `⟨…⟩`.

### 4.0 Identité & positionnement (repris partout : header/footer/SEO)

- **Arnaud Debus — Psychologue à domicile**
- Titres : *Psychologue clinicien · Neuropsychologue · Praticien en Thérapies Cognitives et
  Comportementales (TCC) · Art-thérapeute*
- **Psychologue conventionné « Mon soutien psy »** (label de confiance + remboursement) —
  **décidé : pas de chip dans le hero**. L'info vit dans **Prestations** (service « Mon soutien
  psy », §4.3), les **mentions légales** (§9.1) et les **données structurées SEO** (§7).
- **Positionnement signature = « à domicile »** (+ **visioconférence**). C'est SON positionnement :
  « domicile » apparaît 19× sur son site actuel (et dans ses mots-clés SEO), « cabinet » 0×.
- Zones exprimées en **« autour de »** (sa propre formulation) : **autour de Béziers · autour de
  Clermont-l'Hérault · autour de Pézenas** (Hérault, 34).
- 🚫 **Ne pas afficher d'adresse précise sur les pages publiques.** Les 2 adresses du RPPS
  (Béziers / Clermont-l'Hérault) sont vraisemblablement des **pieds-à-terre** d'où il rayonne, pas
  des lieux de réception → **pas de doxxing**. Seule exception : l'adresse **légalement obligatoire**
  en mentions légales (§9.1), limitée à l'adresse déjà publique au RCS.
- Baseline SEO H1 accueil : « Psychologue Béziers, Clermont-l'Hérault, Pézenas »

### 4.1 Accueil (`#accueil`)

- **Hero** : nom + titres + accroche « Psychologue à domicile », CTA **« Contactez-moi »** → `#contact`.
  **Pas de chip « conventionné » ici** (décidé §16) — le label reste en Prestations.
- Visuel hero : peinture d'Arnaud **« l'étang »** (voir §9.2 — c'est son œuvre).
- **Pour nous rencontrer** : « Je vous propose de nous rencontrer à votre domicile ou dans tout
  autre endroit où vous vous sentirez bien, pour entreprendre un travail de soutien ou
  thérapeutique. » + CTA.
- **Où ?** : déplacements **autour de Béziers, Clermont-l'Hérault, Pézenas** ; possibilité de
  travailler **à distance en visioconférence** ; contact possible hors zones.
- **Quand ?** : « les mercredis entre 8h et 19h, ainsi que certains samedis entre 13h et 18h »
  (selon déplacements).
- **Cartes des zones de déplacement** (on les garde — 1 par secteur) — cahier des charges :
  - **Modèle = les cartes actuelles** : un **cercle de rayon** autour du **centre-ville** (Béziers,
    Clermont-l'Hérault, Pézenas) matérialisant la zone de déplacement. Le point est sur **la ville,
    pas sur une adresse** → aucun doxxing. On reproduit ce visuel.
  - **Source proprement licenciée** : les 3 captures actuelles (§9.2, source Google/incertaine)
    sont **re-générées** depuis **OpenStreetMap** — image statique ou SVG maison — avec
    **attribution « © OpenStreetMap contributors »**. **Pas de Google Maps** (script tiers =
    tracking/RGPD + perf).
  - **Décidé : Option B — carte interactive Leaflet + OSM.** L'Option A (image statique) est
    conservée ci-dessous **comme repli** si la maquette juge l'interactif trop lourd. Les deux
    visent AA.

  **Option A — image statique** (repli) : PNG/SVG exporté d'OSM, `alt` par zone
  (« Zone de déplacement autour de Béziers »). La plus légère/simple.

  **Option B — carte interactive Leaflet + OSM (retenue)** :
  - **Leaflet** auto-hébergé (~40 Ko) + tuiles OSM ; zones dessinées en **`L.circle()`** (un cercle
    par ville, rayon paramétrable), centrées sur le **centre-ville** (jamais une adresse).
  - **Astro island** chargée à la demande (`client:visible`) → le reste du site reste 0 JS.
  - **RGPD — pattern « cliquer pour afficher la carte »** : on ne contacte les serveurs OSM
    **qu'au clic** de l'utilisateur (pas au chargement), + **attribution « © OpenStreetMap
    contributors »** (obligatoire) + une ligne dédiée dans la politique de confidentialité.
  - **WCAG AA** : navigable **au clavier**, focus visible, boutons de zoom **nommés** (contraste
    ≥ 3:1), pas de piège clavier.

  - **Commun aux deux options** : la **liste texte « Autour de… »** reste affichée à côté comme
    alternative accessible (l'info ne vit jamais uniquement dans la carte / la couleur seule est
    interdite). Contraste des libellés de villes ≥ 4.5:1, du tracé de zone ≥ 3:1.

### 4.2 À propos / Qui suis-je (`#a-propos`)

- **Photo d'Arnaud** : portrait réel disponible (`reference-assets/photo-arnaud.jpg`).
- **Bio** (« À propos de moi ») : psychologue depuis 2015 après une réorientation ;
  choix du domicile pour être au plus près du quotidien et des problématiques ; accessibilité aux
  personnes à mobilité réduite ; **accompagne les adultes à partir de 18 ans**, quels que soient
  l'âge et les demandes (son **expérience auprès des personnes âgées** reste un atout, sans être une
  limite de public) ; outils variés (entretien individuel, jeu de rôle, groupe de parole, jeu…).
- **Cursus universitaire** :
  - 1994 — Licence d'Ethnologie, Université des Sciences Humaines de Strasbourg
  - 2015 — Master de psychologie clinique (Psychopathologie et Neuropsychologie du Vieillissement),
    Université de Montpellier
  - 2021 — Formation Praticien en TCC (AFTCC)
- **Parcours professionnel** : formation initiale/continue avant reconversion ; depuis juin 2015,
  accompagnement des personnes âgées (Ehpad : Centre Hérault, Hauts Cantons, Millavois),
  remédiation cognitive (ateliers mémoire), évaluation neuropsychologique/thymique/comportementale,
  soutien aux aidants et familles.
- **Encart pédagogique « Les TCC »** : thérapies brèves centrées sur pensées/émotions/comportements,
  « ici et maintenant », efficaces sur dépression, troubles anxieux, phobies, TOC, addictions, etc.
  (texte complet dans `source-scraped/a-propos.html`).
- **⟨N° ADELI⟩** à afficher (attendu pour un psychologue) + statut juridique.

### 4.3 Prestations (`#prestations`)

Visuel de section : peinture d'Arnaud **« bulles vivantes »** (§9.2). Cartes sobres :

1. **Consultation « classique »** — RDV de **45 min à 1 h**, **50 € déplacement compris**,
   payable en fin de séance, facture sur demande. Compatible avec un travail en TCC.
2. **Consultation « Mon soutien psy »** (psychologue **conventionné**) — dispositif national :
   **12 séances/an**, avec ou sans orientation médicale, **remboursées 60 % Assurance Maladie +
   40 % mutuelle**, **50 €/séance**, 1ʳᵉ séance = évaluation. **Pas de tiers payant** ; feuille de
   soin remise à chaque séance.
3. **Interventions en entreprise & établissements médico-sociaux** — analyse des pratiques
   professionnelles, affirmation de soi, communication non violente ; en ESMS, accompagnement des
   troubles du comportement liés à l'âge ou aux pathologies.

- **Public** : adultes, **à partir de 18 ans** (décidé — bio §4.2 alignée).
- **Thématiques accompagnées** — cliniques : estime de soi · dépression · anxiété · trouble anxieux
  généralisé (TAG) · attaques de panique · phobies · phobie sociale · TOC · traumatismes · deuil ·
  addictions · gestion de la colère · comportement violent · difficultés relationnelles · troubles
  de l'attachement · prise de décisions & priorités · questions de genre / LGBTQIA+ · trouble de la
  personnalité borderline (TPB) · psychose.
- **Thématiques accompagnées** — vie & relations (conservées de l'ancien site) : couple · handicap ·
  adoption · solitude & isolement · âge & temps · développement de projets · études & motivation ·
  art & créativité · travail en groupe.
- **Affichage** : ~12 thématiques visibles + bouton **« Voir plus / Voir moins »** pour déplier le
  reste (allège le nuage de 28 chips ; accessible, `aria-expanded`).
- **Consultations** : à domicile ou dans un lieu calme qui convient à la personne.

### 4.4 Contact (`#contact`)

Visuel de section : peinture d'Arnaud **« le village africain »** (§9.2).

- **Email** : `arnauddebus@sfr.fr` — lien `mailto:` avec **sujet pré-rempli** (« Prise de contact »).
- **Téléphone** : `07 77 75 93 10` — lien `tel:`. *« Je ne reçois pas les SMS mais vous pouvez me
  joindre sur WhatsApp. »* → prévoir aussi un lien **WhatsApp** (`wa.me/33777759310`).
- **Invite** : « Merci de préciser dans votre message la commune où vous souhaitez que j'intervienne. »
- Modalités : **à domicile · visioconférence** (positionnement signature). Zones : Béziers,
  Clermont-l'Hérault, Pézenas. **Adresses cabinet affichées seulement si Arnaud le confirme** (§16).
- *(v2)* Formulaire — voir §8.

### 4.5 Bandeau d'urgence (transverse — éthique)

Mention **visible mais discrète** (footer ou bloc contact) : *« En cas d'urgence ou de crise
suicidaire, ce site ne convient pas : contactez le **3114** (numéro national, gratuit, 24/7) ou les
services d'urgence. »* — présent sur le site actuel, à conserver.

### 4.6 Mentions légales (`/mentions-legales`)

Contenu **obligatoire** (voir §9 pour le détail réglementaire).

---

## 5. Design system

### 5.1 Palette (couleurs réelles du site + contrastes validés AA)

Le site actuel repose déjà sur **lavande `#E7D1FF`** (fond) et **aubergine `#3D003E`** (violet très
foncé). On garde ce duo : lavande = fond clair, aubergine = texte/titres (et fond du thème sombre).
La lavande est trop claire pour porter du texte → **fond uniquement**.

**Thème clair**

| Rôle            | Couleur    | Note contraste                                   |
|-----------------|------------|--------------------------------------------------|
| Fond            | `#E7D1FF`  | fond lavande de référence                        |
| Surface/cartes  | `#FBF7FF`  | violet quasi-blanc                               |
| Texte / titres  | `#3D003E`  | aubergine du site — ~**11.8:1** sur lavande → AAA |
| Lien            | `#5B21B6`  | ~**6.4:1** sur fond lavande → AA                 |
| Bouton (primary)| `#6D28D9`  | texte blanc dessus ~**7.1:1** → AAA              |
| Bordures/subtil | `#C9A9F0`  | décoratif (pas porteur d'info seule)             |

**Thème sombre**

| Rôle            | Couleur    | Note contraste                                   |
|-----------------|------------|--------------------------------------------------|
| Fond            | `#1A0A1B`  | aubergine très sombre (dérivé de `#3D003E`)      |
| Surface/cartes  | `#2A1030`  |                                                  |
| Texte principal | `#E7D1FF`  | ~**13:1** sur fond sombre → AAA                  |
| Lien / accent   | `#C4B5FD`  | lavande clair, à valider ≥ 4.5:1                 |
| Bouton (primary)| `#8B5CF6`  | texte à choisir (blanc/foncé) selon ratio        |

**Accents secondaires** (relevés dans le CSS du site, à utiliser avec parcimonie et toujours
revalidés en contraste) : périwinkle `#8C95D2`, indigo `#3645B1`, rose poudré `#D9B9B9`.
Les **peintures d'Arnaud** apportent déjà beaucoup de couleur → garder l'UI sobre autour.

> Palette de départ ; les couleurs secondaires seront affinées sur **coolors.co** en gardant
> la contrainte : **chaque paire texte/fond validée ≥ 4.5:1** (≥ 3:1 pour texte large ≥ 24px /
> gras ≥ 18.66px et éléments d'UI). Validation via un vérificateur de contraste avant merge.

### 5.2 Typographie

Le site actuel utilise **Comfortaa**, **Corben** et **Lato** (Google Fonts). On **reprend**
Comfortaa (arrondie, douce → rassurante, pour les **titres**) + **Lato** (humaniste, lisible →
**corps de texte**). Corben (slab lourde) est abandonnée pour ne pas surcharger.

- Toutes deux sous licence **OFL** → **auto-hébergées** (via Fontsource ou woff2 téléchargés),
  **pas de Google Fonts en CDN** (perf + pas de transfert d'IP vers un tiers, RGPD).
- `font-display: swap`, sous-ensemble latin, `preload` de la police de titre.
- Échelle typographique fluide (`clamp()`), interlignage confortable (lecture longue).
- Corps ≥ 16px, largeur de ligne ~60–75 caractères.
- **Décidé : Comfortaa conservée pour les titres** (identité reprise du site actuel), Lato pour le
  corps. On veillera juste aux graisses/tailles pour rester lisible pour la cible senior.

### 5.3 Bascule de thème

- Variables CSS (`:root` / `[data-theme]`).
- Défaut = `prefers-color-scheme` ; toggle mémorisé en `localStorage`.
- Pas de « flash » de thème (script inline minimal au `<head>`).

---

## 6. Accessibilité (cible WCAG 2.1 AA)

- Contrastes conformes (§5.1), **jamais l'info portée par la couleur seule**.
- HTML sémantique : `header/nav/main/section/footer`, un seul `H1`, hiérarchie de titres correcte.
- Navigation **clavier** complète, `:focus-visible` bien marqué, ordre de tabulation logique.
- Lien **« Aller au contenu »** (skip link).
- `alt` pertinents sur toutes les images ; images décoratives en `alt=""`.
- `prefers-reduced-motion` respecté (scroll fluide + animations désactivés).
- Zones cliquables ≥ 44×44px, labels de formulaire explicites (v2).
- `lang="fr"`, landmarks ARIA seulement si nécessaire.
- Cible : **Lighthouse Accessibility ≥ 95** + revue manuelle clavier/lecteur d'écran.

---

## 7. SEO & métadonnées

- `<title>` et `meta description` par page, balises **Open Graph** + Twitter Card.
- **SEO local** : mots-clés « psychologue Béziers / Clermont-l'Hérault / Pézenas / Hérault ».
- **Données structurées schema.org** : `Person` + `LocalBusiness`/`ProfessionalService`
  (nom, zone desservie, coordonnées).
- `sitemap.xml` + `robots.txt` générés (intégration Astro `@astrojs/sitemap`).
- URLs propres, une seule page canonique.
- Fichier `404` simple.

---

## 8. Contact — v1 et v2

### v1 (livrée) — `mailto:` + téléphone

- Bouton **« Écrire un email »** → `mailto:adresse@exemple.fr?subject=Prise%20de%20contact`.
- Numéro en `tel:` cliquable.
- **Anti-spam léger** : email éventuellement obfusqué (encodage) pour limiter le harvesting.
- Aucune donnée collectée/stockée → **pas de traitement RGPD côté site**.

### v2 (évolution documentée) — formulaire sans backend

- Service tiers **sans backend** compatible statique/GitHub Pages :
  - **Web3Forms** (clé d'accès, pas de compte requis, gratuit) — *préféré* ;
  - ou **Formspree** (offre gratuite).
- Champs : nom, email, message. **Honeypot** anti-bot.
- **Case de consentement RGPD** obligatoire + lien vers la politique de confidentialité.
- Impacts à prévoir si activé : mise à jour des **mentions légales / politique de confidentialité**
  (le message transite par un sous-traitant tiers → à mentionner).
- États UI : succès / erreur / envoi en cours, accessibles (`aria-live`).

---

## 9. Mentions légales, RGPD & médias

### 9.1 Mentions légales (contenu prêt)

Données fournies par Arnaud — à couler dans `/mentions-legales` :

- **Éditeur** : Arnaud Debus — **Entrepreneur individuel (EI)**
- **Adresse (mentions légales uniquement — jamais sur les pages publiques)** : **35 Route de
  Corneilhan, 34500 Béziers** (adresse **RCS Béziers**, déjà publique → pas de doxxing
  supplémentaire). **Décidé.** Affichée seulement ici car la LCEN impose une adresse pour un pro.
- **SIRET** : 519 381 669 00042 — **519 381 669 R.C.S. Béziers**
- **Contact** : arnauddebus@sfr.fr · 07 77 75 93 10
- **Profession** : Psychologue — **n° RPPS : 10008744715** — conventionné « Mon soutien psy »
- **Directeur de la publication** : Arnaud Debus
- **Hébergeur** : GitHub, Inc. — 88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA
  (GitHub Pages)
- **Propriété intellectuelle** : textes et **peintures © Arnaud Debus** ; reproduction interdite
  sans autorisation.
- **Données personnelles / cookies** :
  - **v1** : site statique, **aucun cookie, aucun traceur, aucune collecte** → mention simple + email
    de contact pour l'exercice des droits.
  - **v2** : si formulaire → décrire traitement, finalité, sous-traitant (Web3Forms/Formspree),
    durée, base légale (consentement) et droits RGPD.

> ⚠️ La mention « R.C.S. Béziers » suppose une immatriculation au registre du commerce ; à
> reproduire telle que fournie par Arnaud. (Une activité de psychologue en libéral peut relever
> d'un autre registre — on garde ce qu'il nous a transmis.)

### 9.2 Médias & droits

Récupérés dans [`design/reference-assets/`](./design/reference-assets/) :

| Fichier                 | Nature                        | Usage prévu        | Droits            |
|-------------------------|-------------------------------|--------------------|-------------------|
| `photo-arnaud.jpg`      | Portrait réel (1000×803)      | À propos           | ✅ le sien        |
| `hero-etang.jpg`        | **Peinture d'Arnaud** « l'étang » (signée ADe) | Hero accueil | ✅ son œuvre |
| `prestations-bulles.jpg`| **Peinture** « bulles vivantes » | Section prestations | ✅ son œuvre |
| `contact-village.jpg`   | **Peinture** « le village africain » | Section contact | ✅ son œuvre |
| `carte-*.png` (×3)      | Captures de cartes des zones  | 🔁 à re-générer via OSM | ⚠️ licence carto |

- **Droits confirmés** : les 3 visuels sont les **peintures d'Arnaud** (art-thérapeute) →
  **aucun problème de droits**. **Pas de titre ni de légende** affichés ; `alt` uniquement :
  **« Peinture de Arnaud Debus »** (traitées en images décoratives/illustratives).
- **Cartes** : ce sont des captures (Google/OSM) → **souci de licence** + faible valeur. On les
  **remplace** par une liste/badges des communes ou une carte libre unique (ex. tuiles OSM avec
  attribution). Voir §4.1.
- Optimisation : **WebP/AVIF**, tailles responsive (`srcset`), `loading="lazy"`, `width/height`
  pour éviter le CLS (composant `<Image>` d'Astro). Recadrer/retoucher les scans de toiles si besoin.
- Sobriété : **décidé — on garde les 3 peintures** (1 par section : accueil/prestations/contact).
  On réévaluera seulement à la maquette si le rendu paraît chargé (« pas trop poufpouf »).

---

## 10. Architecture technique (Astro)

Arborescence cible (indicative) :

```
/
├─ src/
│  ├─ pages/
│  │  ├─ index.astro            # one-page (assemble les sections)
│  │  └─ mentions-legales.astro
│  ├─ components/
│  │  ├─ Header.astro  Footer.astro  ThemeToggle.astro
│  │  ├─ Hero.astro  About.astro  Services.astro  Contact.astro
│  │  └─ SEO.astro
│  ├─ content/                  # CONTENU ÉDITABLE (voir §11)
│  │  └─ site.(md|json|ts)      # textes, prestations, coordonnées
│  ├─ layouts/  BaseLayout.astro
│  └─ styles/   variables.css (tokens couleurs/typo) + global
├─ public/                      # images optimisées, favicon, robots.txt
├─ astro.config.mjs             # site + @astrojs/sitemap
└─ package.json
```

- **0 JS** par défaut ; JS minimal uniquement pour : bascule de thème + menu burger.
- Tokens de design centralisés dans un seul fichier CSS (couleurs light/dark, typo, espacements).

---

## 11. Éditabilité par un non-développeur

Objectif : Arnaud modifie **textes et coordonnées sans toucher au layout**.

- Tout le contenu variable (accroches, bio, prestations, email, téléphone, adresse) vit dans **un
  seul fichier** (`src/content/site.*`), séparé de la mise en page.
- Édition possible **directement dans l'interface web de GitHub** (bouton crayon) → commit →
  déploiement automatique.
- Fournir un court **guide « comment modifier mon site »** (README dédié, captures) :
  changer un texte, remplacer une image, ajouter une prestation.

---

## 12. Déploiement & hébergement

- Dépôt GitHub public/privé ; build Astro → dossier statique.
- **GitHub Actions** : build + déploiement automatique sur **GitHub Pages** à chaque `push` sur
  `main` (workflow officiel Astro).
- URL : `https://<user>.github.io/<repo>/` (`site`/`base` configurés dans `astro.config.mjs`).
- Domaine perso `.fr` = **évolution v2** (recommandé pour la crédibilité, ~12 €/an).

---

## 13. Performance & qualité

- Cibles **Lighthouse** : Perf ≥ 95, A11y ≥ 95, Best-practices ≥ 95, SEO ≥ 95.
- Images optimisées (§9.2), CSS critique inline, aucune police bloquante.
- Poids page d'accueil visé : **< 500 Ko** hors grande image hero.
- Test responsive mobile / tablette / desktop + vérif clavier avant mise en ligne.

---

## 14. État des infos

**Fourni / confirmé** ✅ : identité & titres, bio, cursus, parcours pro, 3 prestations + tarifs
(50 €, validés), thématiques, horaires, email `arnauddebus@sfr.fr`, tél `07 77 75 93 10`
(WhatsApp au même numéro), positionnement **à domicile + visio**, **SIRET 519 381 669 00042 / RCS
Béziers, EI**, **RPPS 10008744715**, psychologue **conventionné « Mon soutien psy »**, **directeur
de publication = Arnaud Debus**, **peintures © lui** (alt « Peinture de Arnaud Debus », sans titre),
**photo portrait actuelle conservée**, mention 3114.

**Encore ouvert** :

- [ ] Accord sur un futur **domaine `.fr`** (v2).
- [ ] Autres réseaux/annuaires à lier (Doctolib… ?) — optionnel.

---

## 15. Roadmap

- **v1 (MVP)** : one-page (4 sections) + mentions légales, contact `mailto:`/`tel:`,
  light/dark, AA, SEO local, déploiement GitHub Pages.
- **v2** : formulaire de contact (Web3Forms/Formspree) + RGPD associé, domaine `.fr`,
  éventuels raffinements de contenu/visuels.

---

## 16. Questions ouvertes (design/produit)

_Plus de question ouverte majeure côté design/produit — voir « Décidés » ci-dessous._
_(Reste au niveau technique/maquette : repli éventuel vers la carte statique si l'interactif
paraît trop lourd, cf. §4.1.)_

**Décidés** : stack Astro · one-page + mentions légales · contact mailto+tél (form en v2) ·
GitHub Pages · thème light/dark AA · **Comfortaa (titres) + Lato (corps)** · **carte interactive
Leaflet + OSM (Option B, « clic pour afficher »)** · **on garde les 3 peintures (1/section)** · **label « conventionné » : pas de chip dans
le hero → info en Prestations** · **adresse légale = RCS Béziers** · pas d'adresses sur pages
publiques · peintures © Arnaud (alt sans titre).

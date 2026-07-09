# Site — Arnaud Debus, psychologue à domicile

Site vitrine statique (Astro) : one-page (Accueil · À propos · Prestations · Zones · Contact)
+ page Mentions légales. Thème clair/sombre, accessible (WCAG 2.1 AA visé), 0 JS par défaut,
carte OpenStreetMap chargée seulement au clic (RGPD).

- **En ligne** : https://noksit-dot.github.io/arnaud-debus/
- **Cadrage / décisions** : voir [`SPEC.md`](./SPEC.md)
- **Maquette d'origine** : [`design/maquette.html`](./design/maquette.html)

---

## ✏️ Modifier le site (sans être développeur)

**Presque tout le contenu (textes, tarifs, coordonnées, thématiques) est dans UN seul fichier :**
[`src/data/site.ts`](./src/data/site.ts).

### Changer un texte, un tarif, un numéro

1. Sur GitHub, ouvrir `src/data/site.ts`.
2. Cliquer sur le crayon ✏️ (« Edit this file »).
3. Modifier **uniquement ce qui est entre guillemets**. Exemple :
   ```ts
   phone: "07 77 75 93 10",   // ← on ne change que le numéro
   ```
   Ne pas toucher aux noms à gauche des `:`, ni aux virgules/accolades.
4. En bas, « Commit changes ». Le site se met à jour tout seul en 1–2 min.

### Remplacer une image (peintures, portrait)

Les images sont dans [`src/assets/`](./src/assets/) :
`hero-etang.jpg` (accueil), `photo-arnaud.jpg` (à propos), `prestations-bulles.jpg`,
`contact-village.jpg`. Pour en remplacer une : garder **le même nom de fichier** et téléverser
la nouvelle image par-dessus (bouton « Upload files » de GitHub). Astro l'optimise
automatiquement (WebP, tailles responsive).

### Ajouter / retirer une thématique accompagnée

Dans `src/data/site.ts`, section `services.themes` : ajouter/supprimer une ligne
`"Nouvelle thématique",`. Les 12 premières sont visibles, le reste apparaît via « Voir plus ».

### Modifier les zones de la carte

Section `zones.mapCircles` : chaque ville a `lat`, `lng` (coordonnées du **centre-ville**,
jamais une adresse précise) et `radiusKm` (rayon de la zone).

---

## 🧑‍💻 Développement local

```bash
npm install      # installe les dépendances (une fois)
npm run dev      # serveur local : http://localhost:4321/arnaud-debus/
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le build de production
```

Requis : Node 18.20+ / 20.3+ / 22+.

### Structure

```
src/
├─ data/site.ts        ← CONTENU ÉDITABLE (textes, tarifs, coordonnées)
├─ pages/              index.astro · mentions-legales.astro · 404.astro
├─ components/         Header · Footer · SEO · Hero · About · Services · Zones · Map · Contact
├─ layouts/            BaseLayout.astro
├─ lib/url.ts          helper de liens (base path GitHub Pages)
├─ styles/global.css   tokens couleurs/typo (clair + sombre) + styles
└─ assets/             images (optimisées au build par Astro)
public/                favicon.svg · robots.txt (copiés tels quels)
```

Choix techniques notables :
- **Polices auto-hébergées** (Fontsource : Comfortaa + Lato) — pas de Google Fonts CDN (RGPD/perf).
- **Leaflet auto-hébergé** (paquet npm), importé dynamiquement **au clic** → son code (~44 Ko gz)
  et les tuiles OSM ne sont chargés qu'à la demande. Attribution « © OpenStreetMap contributors ».
- **Sitemap** généré par `@astrojs/sitemap`.

---

## 🚀 Déploiement (GitHub Pages)

Le déploiement est **automatique** via GitHub Actions
([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)) : chaque `push` sur `main`
build le site et le publie.

Réglage initial (une seule fois) : **Settings → Pages → Build and deployment → Source =
« GitHub Actions »**.

> ⚠️ **Dépôt privé.** GitHub Pages sur un dépôt **privé** nécessite un plan **GitHub Pro**
> (ou Team/Enterprise). Sur l'offre gratuite, il faut soit **passer le dépôt en public**, soit
> **upgrader**, pour que la publication fonctionne. L'édition via l'interface web et les builds
> Actions marchent dans les deux cas — c'est seulement la *publication Pages* qui est concernée.

Si l'URL de déploiement change (domaine perso, autre nom de dépôt), adapter `site` et `base`
dans [`astro.config.mjs`](./astro.config.mjs) (et le lien `Sitemap:` dans `public/robots.txt`).

---

## Notes

- `npm audit` peut signaler une vulnérabilité **esbuild** (serveur de dev, Windows uniquement).
  Elle n'affecte **pas** le site statique généré ; sans impact ici.
- Contact en v1 : `mailto:` + `tel:` + WhatsApp, aucune donnée collectée. Le formulaire
  (Web3Forms/Formspree) est prévu en v2 (voir `SPEC.md` §8).

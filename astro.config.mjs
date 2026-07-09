// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dépôt : https://github.com/noksit-dot/arnaud-debus
// Déploiement GitHub Pages « projet » → https://noksit-dot.github.io/arnaud-debus/
// (Si un jour tu passes sur un domaine perso .fr : SITE='https://mondomaine.fr', BASE='/'.)
const SITE = 'https://noksit-dot.github.io';
const BASE = '/arnaud-debus';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    // Génère /mentions-legales.html plutôt que /mentions-legales/index.html
    format: 'file',
  },
  integrations: [sitemap()],
});

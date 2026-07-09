// Jointure d'URL sûre avec le `base` du site (GitHub Pages : /arnaud-debus/).
// `import.meta.env.BASE_URL` peut être fourni AVEC ou SANS slash final selon
// la config → on normalise ici une bonne fois pour toutes.
const RAW = import.meta.env.BASE_URL;
export const base = RAW.endsWith("/") ? RAW : RAW + "/";

/** Construit un lien préfixé par le base path. link() → l'accueil, link("#contact"), link("mentions-legales"). */
export const link = (path = ""): string => base + path.replace(/^\//, "");

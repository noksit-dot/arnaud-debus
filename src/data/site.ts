/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CONTENU DU SITE — fichier unique à modifier (textes, coordonnées, tarifs)
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  👉 Pour modifier un texte : changez seulement ce qui est ENTRE GUILLEMETS.
 *     Ne touchez pas aux noms à gauche des « : » ni aux virgules / accolades.
 *
 *  Exemple :
 *      phone: "07 77 75 93 10",   ← on ne change que 07 77 75 93 10
 *
 *  Après avoir enregistré (commit) sur GitHub, le site se met à jour tout seul.
 */

export const site = {
  // ── Identité (reprise dans l'en-tête, le pied de page et le SEO) ──────────
  name: "Arnaud Debus",
  tagline: "Psychologue à domicile",
  region: "Hérault (34)",
  titles:
    "Psychologue clinicien · Neuropsychologue · Praticien en Thérapies Cognitives et Comportementales · Art-thérapeute",

  // ── Coordonnées ───────────────────────────────────────────────────────────
  email: "arnauddebus@sfr.fr",
  phone: "07 77 75 93 10",
  phoneIntl: "+33777759310", // format international pour les liens tel:/WhatsApp
  whatsapp: "33777759310",

  // ── SEO ────────────────────────────────────────────────────────────────────
  seo: {
    title: "Psychologue à domicile — Béziers, Clermont-l'Hérault, Pézenas",
    description:
      "Arnaud Debus, psychologue clinicien et neuropsychologue à domicile, autour de Béziers, Clermont-l'Hérault et Pézenas. Conventionné « Mon soutien psy ». Consultations à domicile ou en visioconférence.",
    keywords:
      "psychologue Béziers, psychologue Clermont-l'Hérault, psychologue Pézenas, psychologue à domicile Hérault, neuropsychologue, TCC, Mon soutien psy",
  },

  // ── Accueil (hero) ──────────────────────────────────────────────────────────
  hero: {
    badge: "Psychologue conventionné · Mon soutien psy",
    h1: "Psychologue à domicile, autour de Béziers, Clermont-l'Hérault & Pézenas",
    intro:
      "Je vous propose de nous rencontrer à votre domicile, ou dans tout autre endroit où vous vous sentirez bien, pour entreprendre un travail de soutien ou thérapeutique.",
    ctaPrimary: "Contactez-moi",
    ctaSecondary: "Voir les prestations",
  },

  // ── À propos ────────────────────────────────────────────────────────────────
  about: {
    heading: "Qui suis-je ?",
    paragraphs: [
      "Je suis psychologue depuis 2015, suite à une réorientation professionnelle. Mon choix de pratiquer à domicile répond à une qualité de clinicien : être au plus près du quotidien et des problématiques de mes clients, et rendre la psychologie accessible aux personnes qui se déplacent difficilement.",
      "J'accompagne les adultes, à partir de 18 ans, quels que soient l'âge et les demandes. Mon expérience auprès des personnes âgées nourrit une écoute attentive aux transitions et aux fragilités de chaque étape de la vie. J'utilise des outils variés : entretien individuel, jeu de rôle, groupe de parole, jeu… selon le contexte et le besoin.",
    ],
    parcours: [
      {
        year: "1994",
        text: "Licence d'Ethnologie, Université des Sciences Humaines de Strasbourg",
      },
      {
        year: "2015",
        text: "Master de psychologie clinique (Psychopathologie et Neuropsychologie du Vieillissement), Université de Montpellier",
      },
      {
        year: "2021",
        text: "Formation Praticien en Thérapies Cognitives et Comportementales (AFTCC)",
      },
    ],
    callout: {
      title: "Les Thérapies Cognitives et Comportementales (TCC)",
      text: "Des thérapies brèves centrées sur les pensées, les émotions et les comportements, ancrées dans « l'ici et maintenant ». Efficaces notamment sur la dépression, les troubles anxieux, les phobies, les TOC ou les comportements addictifs.",
    },
  },

  // ── Prestations ─────────────────────────────────────────────────────────────
  services: {
    heading: "Prestations",
    intro:
      "Les consultations se déroulent à votre domicile, ou dans un lieu calme qui vous convient. En fonction des objectifs définis ensemble, nous pouvons aussi nous rencontrer ailleurs, ou travailler à distance en visioconférence.",
    cards: [
      {
        tag: "Consultation",
        title: "Consultation classique",
        price: "50 €",
        priceNote: "/ séance",
        items: [
          "Séance de 45 min à 1 h",
          "Déplacement compris",
          "Paiement en fin de séance, facture sur demande",
          "Compatible avec un travail en TCC",
        ],
      },
      {
        tag: "Conventionné",
        title: "Mon soutien psy",
        price: "50 €",
        priceNote: "remboursé",
        items: [
          "Jusqu'à 12 séances / an",
          "Avec ou sans orientation médicale",
          "60 % Assurance Maladie + 40 % mutuelle",
          "Feuille de soin remise à chaque séance",
        ],
      },
      {
        tag: "Professionnels",
        title: "Entreprises & ESMS",
        price: "Sur demande",
        priceNote: "",
        items: [
          "Analyse des pratiques professionnelles",
          "Affirmation de soi, communication non violente",
          "Troubles du comportement liés à l'âge (ESMS)",
        ],
      },
    ],
    // Thématiques accompagnées. Les « visibleCount » premières sont affichées ;
    // le reste apparaît via le bouton « Voir plus ».
    themesHeading: "Thématiques accompagnées",
    themesNote: "— adultes, à partir de 18 ans",
    themesVisibleCount: 12,
    themes: [
      "Estime de soi",
      "Dépression",
      "Anxiété",
      "Trouble anxieux généralisé (TAG)",
      "Attaques de panique",
      "Phobies",
      "Phobie sociale",
      "TOC",
      "Traumatismes",
      "Deuil",
      "Addictions",
      "Gestion de la colère",
      "Comportement violent",
      "Difficultés relationnelles",
      "Troubles de l'attachement",
      "Prise de décisions & priorités",
      "Questions de genre / LGBTQIA+",
      "Trouble de la personnalité borderline (TPB)",
      "Psychose",
      "Couple",
      "Handicap",
      "Adoption",
      "Solitude & isolement",
      "Âge & temps",
      "Développement de projets",
      "Études & motivation",
      "Art & créativité",
      "Travail en groupe",
    ],
  },

  // ── Zones & horaires ────────────────────────────────────────────────────────
  zones: {
    heading: "Où et quand j'interviens",
    intro:
      "Je me déplace habituellement dans les secteurs suivants. N'hésitez pas à me contacter même si vous êtes en dehors : nous pouvons aussi travailler en visioconférence.",
    badges: [
      "📍 Autour de Béziers",
      "📍 Autour de Clermont-l'Hérault",
      "📍 Autour de Pézenas",
      "💻 En visioconférence",
    ],
    hoursHeading: "Quand ?",
    hoursText:
      "Rendez-vous les <b>mercredis de 8 h à 19 h</b>, ainsi que certains <b>samedis de 13 h à 18 h</b>, en fonction de mes déplacements.",
    // Cercles de la carte (centrés sur le CENTRE-VILLE, jamais une adresse).
    // radiusKm = rayon indicatif de la zone de déplacement.
    mapCircles: [
      { name: "Béziers", lat: 43.3442, lng: 3.2158, radiusKm: 12 },
      { name: "Clermont-l'Hérault", lat: 43.6277, lng: 3.4336, radiusKm: 12 },
      { name: "Pézenas", lat: 43.4608, lng: 3.423, radiusKm: 12 },
    ],
  },

  // ── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    heading: "Pour me joindre",
    intro:
      "Merci de préciser dans votre message la commune où vous souhaitez que j'intervienne, pour que je puisse répondre au mieux à votre demande.",
    mailSubject: "Prise de contact",
    urgence:
      "ce site ne convient pas aux situations de crise. Contactez le <strong>3114</strong> (numéro national de prévention du suicide, gratuit, 24 h/24) ou les services d'urgence.",
  },

  // ── Mentions légales (page /mentions-legales) ───────────────────────────────
  legal: {
    heading: "Mentions légales",
    entries: [
      { term: "Éditeur", value: "Arnaud Debus — Entrepreneur individuel (EI)" },
      {
        term: "Profession",
        value:
          "Psychologue — RPPS 10008744715 — conventionné « Mon soutien psy »",
      },
      { term: "Adresse", value: "35 Route de Corneilhan, 34500 Béziers" },
      { term: "SIRET", value: "519 381 669 00042 — 519 381 669 R.C.S. Béziers" },
      { term: "Contact", value: "arnauddebus@sfr.fr · 07 77 75 93 10" },
      { term: "Directeur de la publication", value: "Arnaud Debus" },
      {
        term: "Hébergeur",
        value:
          "GitHub, Inc. — 88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA",
      },
      {
        term: "Propriété intellectuelle",
        value:
          "Textes et peintures © Arnaud Debus — reproduction interdite sans autorisation.",
      },
      {
        term: "Données personnelles",
        value:
          "Site statique : aucun cookie, aucun traceur, aucune collecte. La carte OpenStreetMap n'est chargée qu'à votre demande.",
      },
    ],
  },
} as const;

export type Site = typeof site;

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BASE = '/Users/hichamzineddine/grossiste-iptv/src/pages';
const ATI = '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />';

const ORG = {
  "@type": "Organization",
  "name": "GrossisteIPTV",
  "url": "https://grossisteiptv.com"
};

function article(headline, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": `https://grossisteiptv.com${url}`,
    "datePublished": "2026-04-23",
    "dateModified": "2026-04-23",
    "author": ORG,
    "publisher": ORG,
    "inLanguage": "fr-FR"
  };
}

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(([pos, name, url]) => ({
      "@type": "ListItem",
      "position": pos,
      "name": name,
      "item": `https://grossisteiptv.com${url}`
    }))
  };
}

const schemas = {
  'qu-est-ce-qu-un-panel-iptv.astro': [
    article(
      "Qu'est-ce qu'un Panel IPTV ? Guide Complet pour Revendeurs 2026",
      "Tout savoir sur le panel IPTV : définition, fonctionnement Xtream UI, différence avec l'abonnement direct, et comment démarrer en tant que revendeur.",
      "/qu-est-ce-qu-un-panel-iptv/"
    ),
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Qu'est-ce qu'un Panel IPTV ?", "/qu-est-ce-qu-un-panel-iptv/"]
    ])
  ],

  'guide-panel-iptv-revendeur.astro': [
    article(
      "Panel IPTV Revendeur : Guide Complet B2B France 2026",
      "Guide complet panel IPTV pour revendeurs en France. Choisir son panel, Xtream UI, comparatif 7 serveurs, marges et démarrage B2B.",
      "/guide-panel-iptv-revendeur/"
    ),
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Guide Panel IPTV Revendeur", "/guide-panel-iptv-revendeur/"]
    ])
  ],

  'xtream-ui-panel-revendeur.astro': [
    article(
      "Xtream UI Panel Revendeur : Configuration & Guide Complet 2026",
      "Guide complet du panel Xtream UI pour revendeurs IPTV en France. Fonctionnement, configuration, gestion des lignes et FAQ technique.",
      "/xtream-ui-panel-revendeur/"
    ),
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Xtream UI Panel Revendeur", "/xtream-ui-panel-revendeur/"]
    ])
  ],

  'comment-devenir-revendeur-iptv.astro': [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Comment Devenir Revendeur IPTV en France",
      "description": "6 étapes pour lancer votre activité de revendeur IPTV en France.",
      "url": "https://grossisteiptv.com/comment-devenir-revendeur-iptv/",
      "inLanguage": "fr-FR",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Choisir votre grossiste IPTV B2B",
          "text": "Sélectionnez un fournisseur avec uptime 99.8%+, support WhatsApp réactif (<1h), test gratuit disponible et tarifs dégressifs."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Sélectionner votre panel et vos serveurs",
          "text": "Commencez avec 1-2 serveurs Xtream UI maximum. Tous les panels proposés utilisent le standard Xtream UI."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Acheter votre stock initial de crédits",
          "text": "Démarrez avec 50-100 crédits (tier Bronze ~22€/crédit) pour tester le marché sans sur-investissement."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Fixer votre prix de revente",
          "text": "Recommandé : milieu de gamme 50-70€/mois. Cela vous laisse une marge de 28-48€ par abonnement."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Acquérir vos premiers clients",
          "text": "Entourage, groupes Facebook, Telegram, Leboncoin, forums communautaires. Proposez un test 24h gratuit."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Scaler et fidéliser",
          "text": "Relances J-7 avant expiration, programme de parrainage, abonnements multi-mois, recrutement de sous-revendeurs."
        }
      ]
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Comment Devenir Revendeur IPTV", "/comment-devenir-revendeur-iptv/"]
    ])
  ],

  'credits-iptv-en-gros.astro': [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Crédits IPTV en Gros — Panel Revendeur B2B",
      "description": "Tarifs dégressifs crédits IPTV en gros. Marge jusqu'à 65€ par abonnement. Livraison instantanée, support WhatsApp dédié.",
      "url": "https://grossisteiptv.com/credits-iptv-en-gros/",
      "brand": ORG,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "15",
        "highPrice": "22",
        "offerCount": "4",
        "availability": "https://schema.org/InStock",
        "areaServed": "FR"
      },
      "inLanguage": "fr-FR"
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Crédits IPTV en Gros", "/credits-iptv-en-gros/"]
    ])
  ],

  'grossiste-iptv-france.astro': [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Panel IPTV Grossiste B2B France",
      "description": "Le grossiste IPTV B2B de référence en France. Panels Xtream UI, crédits en gros, 7 serveurs premium, support WhatsApp. 120+ revendeurs actifs.",
      "url": "https://grossisteiptv.com/grossiste-iptv-france/",
      "brand": ORG,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "FR",
        "priceCurrency": "EUR"
      },
      "inLanguage": "fr-FR"
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Grossiste IPTV France", "/grossiste-iptv-france/"]
    ])
  ],

  'meilleur-panel-iptv-revendeur.astro': [
    article(
      "Meilleur Panel IPTV Revendeur : Comparatif Complet 2026 (Top 7)",
      "Top 7 des meilleurs panels IPTV pour revendeurs en France 2026. Comparatif specs, prix, stabilité et verdict d'expert.",
      "/meilleur-panel-iptv-revendeur/"
    ),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Top 7 Panels IPTV pour Revendeurs 2026",
      "url": "https://grossisteiptv.com/meilleur-panel-iptv-revendeur/",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Orca Pro Max", "url": "https://grossisteiptv.com/serveurs/orca-pro-max/" },
        { "@type": "ListItem", "position": 2, "name": "Lion OTT", "url": "https://grossisteiptv.com/serveurs/" },
        { "@type": "ListItem", "position": 3, "name": "Dino IPTV", "url": "https://grossisteiptv.com/serveurs/" },
        { "@type": "ListItem", "position": 4, "name": "Max OTT", "url": "https://grossisteiptv.com/serveurs/" },
        { "@type": "ListItem", "position": 5, "name": "Dream 4K", "url": "https://grossisteiptv.com/serveurs/" },
        { "@type": "ListItem", "position": 6, "name": "Magnum OTT", "url": "https://grossisteiptv.com/serveurs/" },
        { "@type": "ListItem", "position": 7, "name": "Trex IPTV", "url": "https://grossisteiptv.com/serveurs/" }
      ]
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Meilleur Panel IPTV Revendeur", "/meilleur-panel-iptv-revendeur/"]
    ])
  ],

  'serveurs.astro': [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Serveurs IPTV Premium — Les 7 Meilleurs Panels Revendeurs",
      "url": "https://grossisteiptv.com/serveurs/",
      "description": "Notre sélection curatée des 7 meilleurs serveurs IPTV pour revendeurs B2B : Lion OTT, Max OTT, Dream 4K, Dino IPTV, Trex et Pro Max.",
      "provider": ORG,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Lion OTT", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 2, "name": "Max OTT", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 3, "name": "Dream 4K", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 4, "name": "Magnum OTT", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 5, "name": "Dino IPTV", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 6, "name": "Trex IPTV", "url": "https://grossisteiptv.com/serveurs/" },
          { "@type": "ListItem", "position": 7, "name": "Orca Pro Max", "url": "https://grossisteiptv.com/serveurs/orca-pro-max/" }
        ]
      }
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Serveurs IPTV", "/serveurs/"]
    ])
  ],

  'serveurs/orca-pro-max.astro': [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Panel Revendeur Orca Pro Max",
      "description": "Devenez revendeur officiel du serveur Orca Pro Max. Panel B2B, stabilité 99.9%, 4K réelle et VOD mise à jour. Tarifs de gros immédiats.",
      "url": "https://grossisteiptv.com/serveurs/orca-pro-max/",
      "brand": ORG,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "ratingCount": "120"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "FR",
        "priceCurrency": "EUR"
      }
    },
    breadcrumb([
      [1, "Accueil", "/"],
      [2, "Serveurs IPTV", "/serveurs/"],
      [3, "Orca Pro Max", "/serveurs/orca-pro-max/"]
    ])
  ]
};

function detectIndent(content) {
  const match = content.match(/\n( +)<meta /);
  return match ? match[1] : '    ';
}

function buildScriptBlock(schemaObj, indent) {
  const json = JSON.stringify(schemaObj, null, 2)
    .split('\n')
    .map((line, i) => i === 0 ? `${indent}${line}` : `${indent}${line}`)
    .join('\n');
  return `${indent}<script type="application/ld+json" is:inline>\n${json}\n${indent}</script>`;
}

for (const [rel, schemaList] of Object.entries(schemas)) {
  const filePath = path.join(BASE, rel);
  let content = fs.readFileSync(filePath, 'utf8');
  const indent = detectIndent(content);

  const blocks = schemaList.map(s => buildScriptBlock(s, indent)).join('\n');

  // Insert before apple-touch-icon
  const atiPattern = `${indent}${ATI}`;
  if (!content.includes(atiPattern)) {
    console.error(`✗ ${rel}: apple-touch-icon not found with expected indent`);
    // Fallback: try without indent prefix
    content = content.replace(ATI, `${blocks}\n    ${ATI}`);
  } else {
    content = content.replace(atiPattern, `${blocks}\n${atiPattern}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${rel}: added ${schemaList.length} schema block(s)`);
}

console.log('\nDone.');

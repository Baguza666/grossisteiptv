#!/usr/bin/env node
// One-shot script: adds apple-touch-icon + missing twitter tags to all pages
const fs = require('fs');
const path = require('path');

const BASE = '/Users/hichamzineddine/grossiste-iptv/src/pages';
const ATI = '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />';

// Twitter data per page (null = already has all tags or no tags needed)
const twitterData = {
  'index.astro': { exists: true }, // already complete
  '404.astro': { skip: true },     // noindex page, skip twitter
  'a-propos.astro': {
    title: "À Propos | Grossiste IPTV B2B",
    desc: "Découvrez l'infrastructure derrière Grossiste IPTV. Le partenaire de confiance de plus de 120 revendeurs actifs."
  },
  'serveurs.astro': {
    title: "Serveurs IPTV Premium | Les 7 Meilleurs Panels",
    desc: "Notre sélection curatée des 7 meilleurs serveurs IPTV pour revendeurs B2B : Lion OTT, Max OTT, Dream 4K, Dino IPTV, Trex et Pro Max."
  },
  'cgv.astro': {
    card: 'summary',
    title: "Conditions Générales de Vente | GrossisteIPTV",
    desc: "Conditions générales de vente de GrossisteIPTV.com."
  },
  'mentions-legales.astro': {
    card: 'summary',
    title: "Mentions Légales | GrossisteIPTV",
    desc: "Mentions légales du site GrossisteIPTV.com."
  },
  'comment-devenir-revendeur-iptv.astro': {
    title: "Comment Devenir Revendeur IPTV en France : Guide 2026",
    desc: "6 étapes pour lancer votre activité de revendeur IPTV en France. Panel, crédits, prix, clients et scalabilité."
  },
  'credits-iptv-en-gros.astro': {
    title: "Acheter des Crédits IPTV en Gros | Tarifs Revendeur B2B",
    desc: "Tarifs dégressifs crédits IPTV en gros. Marge jusqu'à 65€ par abonnement. Livraison instantanée, support WhatsApp dédié."
  },
  'grossiste-iptv-france.astro': {
    title: "Grossiste IPTV France — Panels B2B pour Revendeurs",
    desc: "Le grossiste IPTV B2B de référence en France. Panels Xtream UI, crédits en gros, 7 serveurs premium, support WhatsApp. 120+ revendeurs actifs."
  },
  'guide-panel-iptv-revendeur.astro': {
    title: "Panel IPTV Revendeur : Guide Complet B2B France 2026",
    desc: "Guide complet panel IPTV pour revendeurs en France. Choisir son panel, Xtream UI, comparatif 7 serveurs, marges et démarrage B2B."
  },
  'meilleur-panel-iptv-revendeur.astro': {
    title: "Meilleur Panel IPTV Revendeur : Comparatif 2026 (Top 7)",
    desc: "Top 7 des meilleurs panels IPTV pour revendeurs en France 2026. Comparatif specs, prix, stabilité et verdict d'expert."
  },
  'qu-est-ce-qu-un-panel-iptv.astro': {
    title: "Qu'est-ce qu'un Panel IPTV ? Guide Complet Revendeurs 2026",
    desc: "Tout savoir sur le panel IPTV : définition, fonctionnement Xtream UI, différence avec l'abonnement direct, et comment démarrer en tant que revendeur."
  },
  'xtream-ui-panel-revendeur.astro': {
    title: "Xtream UI Panel Revendeur : Configuration & Guide 2026",
    desc: "Guide complet du panel Xtream UI pour revendeurs IPTV en France. Fonctionnement, configuration, gestion des lignes et FAQ technique."
  },
  'serveurs/orca-pro-max.astro': {
    title: "Orca Pro Max Panel Revendeur | Grossiste IPTV",
    desc: "Devenez revendeur officiel du serveur Orca Pro Max. Panel B2B, stabilité 99.9%, 4K réelle et VOD mise à jour. Tarifs de gros immédiats."
  },
};

function detectIndent(content) {
  const match = content.match(/\n( +)<meta /);
  return match ? match[1] : '    ';
}

function processFile(filePath, rel, tw) {
  let content = fs.readFileSync(filePath, 'utf8');
  const indent = detectIndent(content);
  const changed = [];

  // 1. Add apple-touch-icon before </head> (if not already there)
  if (!content.includes('apple-touch-icon')) {
    content = content.replace(
      /(\n?)( *)<\/head>/,
      `\n${indent}${ATI}$1$2</head>`
    );
    changed.push('apple-touch-icon');
  }

  // 2. Handle twitter tags
  if (tw && !tw.skip && !tw.exists) {
    const hasCard = content.includes('name="twitter:card"');
    const hasTitle = content.includes('name="twitter:title"');

    if (!hasTitle) {
      if (!hasCard && tw.card) {
        // Pages with no twitter:card at all (cgv, mentions-legales)
        // Insert full block before apple-touch-icon line
        const block = `${indent}<meta name="twitter:card" content="${tw.card}" />\n${indent}<meta name="twitter:title" content="${tw.title}" />\n${indent}<meta name="twitter:description" content="${tw.desc}" />\n${indent}`;
        content = content.replace(
          new RegExp(`(${indent.replace(/\s/g, '\\s')}${ATI.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`),
          `${block}${ATI}`
        );
        changed.push('twitter:card+title+desc');
      } else if (hasCard) {
        // Pages that have twitter:card but missing title+desc
        const cardPattern = /(<meta name="twitter:card"[^>]*\/>)/;
        content = content.replace(
          cardPattern,
          `$1\n${indent}<meta name="twitter:title" content="${tw.title}" />\n${indent}<meta name="twitter:description" content="${tw.desc}" />`
        );
        changed.push('twitter:title+desc');
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${rel}: [${changed.join(', ') || 'no changes'}]`);
}

for (const [rel, tw] of Object.entries(twitterData)) {
  const filePath = path.join(BASE, rel);
  processFile(filePath, rel, tw);
}

console.log('\nDone.');

# Content roadmap — grossisteiptv.com

_Generated 2026-04-23. New-site mode. Reassess with GSC data after Month 3._

> **No quick-wins phase.** Site has no existing rankings to push from. Phase 1 = build the starter cluster from scratch. All timelines run from launch date.

---

## Before publishing anything — Technical SEO checklist

These are blocking tasks. Do them before submitting any URL to Google.

- [ ] Install `@astrojs/sitemap` → configure in astro.config.mjs with site URL
- [ ] Create `public/robots.txt` → point to sitemap URL
- [ ] Add `<link rel="canonical">` to every page `<head>`
- [ ] Add Open Graph meta tags (og:title, og:description, og:image, og:url) to every page
- [ ] Add Organization JSON-LD schema to homepage
- [ ] Register site in Google Search Console → submit sitemap on launch day
- [ ] Set up GA4 (optional but strongly recommended for Month 3 re-measurement)

---

## Phase 1 — Starter cluster (Months 1–2 post-launch)

Write pages in this exact order. Each page links to subsequent pages — build the link graph from day one.

### P1-1 — Qu'est-ce qu'un Panel IPTV ?
- **URL:** /qu-est-ce-qu-un-panel-iptv/
- **Primary keyword:** panel iptv c'est quoi
- **SERP weakness:** 4/6
- **Why now:** Weakest educational SERP, zero real content exists, serves as definition hub — every other page links back here
- **Brief:** 1,400–1,800 words. Definition, Xtream UI architecture, panel vs. abonnement direct, getting started checklist. FAQ (6–8 PAA questions). Internal links to all 6 other cluster pages.
- **Success metric:** top 20 within 3 months, top 10 within 5 months

### P1-2 — Acheter des Crédits IPTV en Gros
- **URL:** /credits-iptv-en-gros/
- **Primary keyword:** crédits iptv en gros
- **SERP weakness:** 5/6
- **Why now:** Alibaba/marketplace dominance = easiest top-10 win, directly tied to revenue
- **Brief:** 1,200–1,600 words. Commercial landing page + buyer guide. Volume pricing tiers (Bronze/Silver/Gold), ROI calculator (20€ cost → 60–80€ retail → 40€+ margin), WhatsApp CTA.
- **Success metric:** top 10 within 4 months

### P1-3 — Xtream UI Panel Revendeur : Guide de Démarrage
- **URL:** /xtream-ui-panel-revendeur/
- **Primary keyword:** xtream ui panel revendeur
- **SERP weakness:** 4/6
- **Why now:** No French commercial guide exists — English guide + Fiverr gigs fill the SERP
- **Brief:** 1,600–2,000 words. Technical guide with commercial angle. Xtream UI overview, line management, M3U/EPG, setup walkthrough, comparison vs. MAG/Enigma2, technical FAQ.
- **Success metric:** top 20 within 3 months, top 10 within 5 months

### P1-4 — Guide Panel IPTV Revendeur (Cluster Pillar)
- **URL:** /guide-panel-iptv-revendeur/
- **Primary keyword:** panel iptv revendeur
- **SERP weakness:** 3/6
- **Why now:** Written 4th so pages 1–3 link into it on day one — immediate internal link equity before it needs to compete
- **Brief:** 2,500–3,500 words. Comprehensive pillar. What/how/why + 7-server comparison table + pricing/margins + FAQ (10+ questions). Hub — links to all 6 supporting pages.
- **Success metric:** top 30 within 4 months, top 20 within 6 months

### P1-5 — Comment Devenir Revendeur IPTV en France
- **URL:** /comment-devenir-revendeur-iptv/
- **Primary keyword:** comment devenir revendeur iptv
- **SERP weakness:** 3/6
- **Why now:** High-volume how-to query, current SERP is thin and generic
- **Brief:** 2,000–2,500 words. 6-step guide (supplier → panel → credits → price → clients → scale). Legal context for France. Margin calculator. FAQ.
- **Success metric:** top 20 within 4 months

### P1-6 — Meilleur Panel IPTV pour Revendeurs : Comparatif 2026
- **URL:** /meilleur-panel-iptv-revendeur/
- **Primary keyword:** meilleur panel iptv revendeur
- **SERP weakness:** 3/6
- **Why now:** Guru99 English guide dominates — deep French comparison for resellers will outrank
- **Brief:** 2,000–2,800 words. Listicle ranking all 7 panels. Comparison table (channels/VOD/uptime/margin). Star ratings. Pros/cons per panel. #1 recommendation with CTA.
- **Success metric:** top 20 within 5 months

### P1-7 — Grossiste IPTV France : Panels B2B pour Revendeurs
- **URL:** /grossiste-iptv-france/
- **Primary keyword:** iptv grossiste
- **SERP weakness:** 5/6
- **Why now:** Alibaba + destockplus rank — near-zero real competition for a specialized B2B IPTV wholesaler page. Write last so entire cluster links into it.
- **Brief:** 1,000–1,400 words. B2B landing page. B2B-only model benefits, pricing anchor, available server list, trust signals, WhatsApp CTA + SEO supporting copy.
- **Success metric:** top 10 within 3–4 months for "iptv grossiste"

---

## Phase 2 — Cluster build-out (Months 3–6)

**Gate:** start only after 5 of the 7 starter pages show impressions in GSC and at least 3 rank top 20.

Expand the existing `/serveurs/` page into a full pillar with supporting product and comparison pages.

### Pillar: Serveurs IPTV (existing /serveurs/)

| Page | URL | Primary keyword |
|---|---|---|
| Pillar | /serveurs/ | serveur iptv revendeur (optimize existing) |
| Product | /serveurs/lion-ott/ | lion ott iptv revendeur panel |
| Product | /serveurs/avatar-pro/ | avatar pro iptv panel |
| Product | /serveurs/trex-iptv/ | trex iptv panel revendeur |
| Product | /serveurs/dream-4k/ | dream 4k iptv panel |
| Comparison | /serveurs/lion-ott-vs-max-ott/ | lion ott vs max ott iptv |
| Comparison | /serveurs/orca-pro-max-vs-avatar-pro/ | orca pro max vs avatar pro |

---

## Phase 3 — Authority targets (Months 6–12)

Don't start until Phase 1 cluster has proven ranking momentum AND site has 15+ real referring domains.

| Target | Primary keyword | Why deferred | Prerequisite |
|---|---|---|---|
| /rentabilite-revendeur-iptv/ | combien gagner revendeur iptv | Needs brand authority and trust signals | 5+ Phase 1 pages in top 10 |
| /panel-iptv-legal-france/ | iptv légal france | Legally sensitive, needs established brand | 10+ referring domains |
| Head terms (iptv france, meilleur iptv) | iptv france | DR too low — unwinnable for 18+ months | 20+ RDs, 12+ months authority |

---

## What we're not doing (and why)

- **"meilleur iptv" / "iptv abonnement"** — consumer intent, wrong audience entirely
- **"iptv france"** — head term, major sites dominate, not viable for 18+ months
- **Competitor brand terms** (iptvengros avis, etc.) — wait for 20+ referring domains
- **Broad informational content** (iptv history, iptv technology) — no business value, dilutes topical focus

---

## Realistic timeline (post-launch)

| Milestone | When |
|---|---|
| First page indexed | 1–4 weeks after launch |
| First page in top 100 for any keyword | 4–12 weeks |
| First page in top 20 (weak SERP target) | 2–4 months |
| First page in top 10 | 3–6 months |
| Starter cluster generating impressions | 3–5 months |
| Meaningful clicks (500+/mo) | 6–9 months |
| Phase 2 expansion begins | Month 5–6 (data-gated) |
| Ready for head terms | 12+ months |

These assume: weekly publishing cadence, solid on-page execution, no technical blockers, passive link acquisition (some natural backlinks from the French IPTV community).

---

## Re-measurement schedule

| When | Action |
|---|---|
| Month 1 | Verify all 7 pages indexed in GSC |
| Month 3 | First GSC export — check impressions + positions for all 27 keywords in keywords.csv |
| Month 5 | Re-score starter cluster, gate Phase 2 decision, update keyword map |
| Month 8 | Full re-run of seo-keyword-map skill with real GSC data — switch to established mode |

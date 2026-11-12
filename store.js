// src/guides/store.js — TOOLGUIDES object + addG() helper. Guide files below fill it.

/* =====================================================================
   TOOL GUIDES (added): long-form editorial guides shown under each of
   16 main tools. Rendered by guideHtml(slug) inside toolBlock().
   ===================================================================== */
export const TOOLGUIDES = {};
/* ===== EXTRA TOOL GUIDES (batch 3): PDF, Image, Video, Calculators, Developer ===== */
export function addG(slug, ov, steps, feats, tips, faq) { TOOLGUIDES[slug] = { ov: ov, steps: steps, feats: feats, tips: tips, faq: faq }; }

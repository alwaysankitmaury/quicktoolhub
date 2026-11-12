// src/pages/how-to-use.js — "How to Use" page content.
import { CATLBL, CATORDER } from "../tools/categories.js";
import { TBYSLUG, TOOLS } from "../tools/data.js";
import { WHY, toolFaqs, toolLimits, toolSteps, toolTips, toolUseCases } from "../tools/helpers.js";
import { escH } from "../utils.js";

/* =====================================================================
   NEW: /how-to-use guide page (added for AdSense "thin / low value
   content" review). Reuses the same per-tool step/FAQ generators that
   already power each /tools/<slug> page, so the content here is unique,
   substantial and stays in sync automatically. Nothing else on the site
   is changed by this block.
   ===================================================================== */
// One representative tool per main category (covers the examples the user asked for: Image to PDF, EMI Calculator, JSON Converter, Color Code Converter, plus the rest of the toolset).
export const GUIDE_SLUGS = ["image-to-pdf", "photo-editor-studio", "video-trimmer", "chatgpt-ai-prompt-generator", "word-counter", "json-formatter-validator", "color-code-converter", "emi-calculator", "screen-recorder", "qr-code-generator", "hashtag-generator", "merge-pdf", "image-compressor", "gst-calculator", "video-compressor", "image-resizer"].filter(function (s) { return TBYSLUG[s] !== undefined; });
export function howToSection(slug) {
  const i = TBYSLUG[slug], t = TOOLS[i], n = escH(t[2]);
  return '<div class="box" id="guide-' + t[1] + '"><h2 style="margin-top:0">' + n + '</h2><p class="td">' + escH(t[3]) + '</p>'
    + '<h3>How to use ' + n + '</h3><ol class="st">' + toolSteps(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ol>'
    + '<h3>Features &amp; benefits</h3><ul class="st">' + toolUseCases(t).slice(0, 2).concat(WHY).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>Tips</h3><ul class="st">' + toolTips(t).slice(0, 2).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>Limitations</h3><ul class="st">' + toolLimits(t).slice(0, 2).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>FAQs</h3>' + toolFaqs(t).map(function (f) { return '<p><b>' + escH(f[0]) + '</b><br>' + escH(f[1]) + '</p>'; }).join("")
    + '<p><a href="/tools/' + t[1] + '">Open ' + n + ' →</a></p></div>';
}
export const HOWTOTOC = '<p class="mu">Jump to a guide: ' + GUIDE_SLUGS.map(function (s) { const t = TOOLS[TBYSLUG[s]]; return '<a href="#guide-' + t[1] + '">' + escH(t[2]) + '</a>'; }).join(" · ") + '</p>';
export const HOWTOCATS = '<h2>Browse the guide for every tool</h2><p>Every one of our ' + TOOLS.length + ' tools has its own page with its own step-by-step "How to use" guide, features and FAQs. Pick any tool below to open its guide directly.</p>'
  + CATORDER.map(function (c) {
    return '<h3 id="cat-' + c + '">' + CATLBL[c] + '</h3><ul class="dl">' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul>';
  }).join("");
export const HOWTO = String.raw`<h1>How to Use ToolsNest</h1><p class="mu">Step-by-step guides, features and FAQs for our tools</p>
<p>ToolsNest has more than ` + TOOLS.length + String.raw` free online tools for photos, videos, PDFs, AI prompts, text, developer work and everyday calculations. This page walks you through how to use some of our most popular tools, what they are useful for, and answers to common questions. Every individual tool page also has its own guide and FAQs, which you can reach from the links below or from the <a href="/tools">All Tools</a> page.</p>`
  + HOWTOTOC + GUIDE_SLUGS.map(howToSection).join("") + HOWTOCATS
  + String.raw`<h2>Still have a question?</h2><p>Email us at <a href="mailto:{{MAIL}}">{{MAIL}}</a> or visit our <a href="/contact">Contact page</a> and we will help.</p>`;

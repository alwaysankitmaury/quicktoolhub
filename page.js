// src/tools/page.js — Builds each /tools/<slug> page (tool block, JSON-LD, SEO extras).
import { relatedGuides } from "../blog/render.js";
import { ADSENSE } from "../config.js";
import { guideHtml } from "../guides/autoguide.js";
import { TOOLGUIDES } from "../guides/store.js";
import { HEADBITS, adUnit, adsTag, ogImg } from "../layout.js";
import { html } from "../templates/home-template.js";
import { CATHOW, CATLBL, CATORDER, CATSCHEMA } from "./categories.js";
import { TBYSLUG, TOOLS } from "./data.js";
import { POPULAR, WHY, relatedTools, toolDesc, toolFaqs, toolKind, toolLimits, toolSteps, toolTips, toolTitle, toolUseCases } from "./helpers.js";
import { toolSeoSection } from "./seo-section.js";
import { escH, ldJson } from "../utils.js";

// CHANGED: unique "best for" text for the 10 photo filter pages (shown right under the generic intro line)
export const FILTERX = {
  "black-white-filter": "Black & White removes color so shapes, textures and contrast take center stage. It suits portraits, street photography and architecture, and it can rescue a photo whose background colors are messy or clashing.",
  "sepia-filter": "Sepia gives a classic, nostalgic feel and works best for portraits, family pictures and old-photo looks. Add a slight vignette in the editor for a vintage-album mood.",
  "vintage-filter": "Vintage mixes faded warmth with softened contrast, which suits retro-style posts, travel memories and cafe or street scenes. Lower the saturation slider a little for a more aged look.",
  "warm-filter": "Warm adds golden, sunny tones that flatter skin and food. It is a good pick for golden-hour shots, cozy indoor photos and festive pictures.",
  "cool-filter": "Cool shifts the picture toward blue tones for a calm, crisp mood. It works well for winter scenes, sea and sky photos, tech products and clean, minimal shots.",
  "vivid-filter": "Vivid boosts saturation and contrast for bold colors, which is great for social media posts, nature, flowers and food photos. Go easy on portraits, where skin tones can start to look unnatural.",
  "cinematic-filter": "Cinematic gives a movie-style color grade with slightly muted, moody tones. It works best on wide landscapes, city scenes and dramatic portraits.",
  "sunset-filter": "Sunset pushes the photo toward orange and pink tones, ideal for beach, sky and evening shots, or for adding warmth to a dull daytime picture.",
  "dreamy-filter": "Dreamy adds a soft glow with lifted brightness, suited to couple, wedding and flower photos or a soft aesthetic profile picture. Skip it for photos with fine text or sharp detail.",
  "invert-filter": "Invert flips every color to its opposite to create a negative effect. Use it for artistic edits, poster-style designs or checking how a design looks in reverse, rather than for natural portraits."
};
export function videoNote(t) {
  const st = ' style="border:2px solid var(--ln);border-radius:10px;padding:10px 14px;background:var(--cd);color:var(--tx);max-width:70ch"';
  let s = "";
  if (t[0] === "video" && toolKind(t) === "video") s += '<p' + st + '><b>Before you start:</b> Works best in Chrome or Edge (desktop or Android). Output is WebM. Processing runs in real time, so keep this tab open. iPhone/Safari may not support recording.</p>';
  if (t[1] === "youtube-thumbnail-grabber" || t[1] === "extract-audio-from-video") s += '<p' + st + '><b>Please note:</b> Use only content you own or have permission to use.</p>';
  return s;
}
export function filterNote(t) { return FILTERX[t[1]] ? '<p>' + escH(FILTERX[t[1]]) + '</p>' : ""; }
export function toolBlock(i) {
  const t = TOOLS[i], n = escH(t[2]), li = function (k) { return '<li><a href="/tools/' + TOOLS[k][1] + '">' + escH(TOOLS[k][2]) + '</a></li>'; };
  // CHANGED (AdSense thin-content fix): no ad unit renders inside a tool page that only has the generic autoGuide() content, since that page is not indexed and should carry no ads.
  const hasGuide = !!TOOLGUIDES[t[1]];
  return '<section class="ti" id="toolinfo"><nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/tools">All tools</a> › <a href="/tools#cat-' + t[0] + '">' + CATLBL[t[0]] + '</a> › <span>' + n + '</span></nav>'
    + '<p class="td">' + escH(t[3]) + '</p><p>' + CATHOW[toolKind(t)] + '</p>' + filterNote(t) + videoNote(t) /* CHANGED: filter-specific text */
    
    + '<h2>How to use ' + n + '</h2><ol class="st">' + toolSteps(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ol>'
    + '<h2>Key benefits &amp; practical use cases</h2><p>' + n + ' is built to be quick for everyday situations, not just a one-off demo. Here is where people typically reach for it:</p><ul class="st">' + toolUseCases(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul><ul class="st">' + WHY.map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Tips &amp; best practices</h2><ul class="st">' + toolTips(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Limitations</h2><p>' + n + ' is built to be fast and simple, but it is worth knowing what it does not do:</p><ul class="st">' + toolLimits(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Frequently asked questions</h2>' + toolFaqs(t).map(function (f) { return '<h3>' + escH(f[0]) + '</h3><p>' + escH(f[1]) + '</p>'; }).join("")
    + toolSeoSection(i)
    + guideHtml(t[1])
    + relatedGuides(i)
    + (hasGuide ? adUnit() : "")
    + '<h2>Related tools</h2><ul class="dl">' + relatedTools(i).map(li).join("") + '</ul>'
    + '<h2>More popular tools</h2><ul class="dl">' + POPULAR.filter(function (s) { return TBYSLUG[s] !== i; }).map(function (s) { return li(TBYSLUG[s]); }).join("") + '</ul>'
    + '<p class="bc">Browse by category: ' + CATORDER.map(function (c) { return '<a href="/tools#cat-' + c + '">' + CATLBL[c] + '</a>'; }).join(" · ") + '</p></section>';
}
// CHANGED (note only, no code change): every tool page already gets a WebApplication JSON-LD (name, description, applicationCategory, free offer, operatingSystem Any) from this function, so no duplicate schema was added.
// CHANGED (AdSense thin-content fix): a tool page is only asked to be indexed, and only gets the AdSense script, when it has a hand-written deep guide in TOOLGUIDES. Pages that fall back to the generic autoGuide() template still work exactly the same for visitors, but carry a noindex tag and no ad script, so Google is never shown the large set of near-identical auto-built pages. hasGuide is computed once in buildToolPage and threaded through here.
export function toolExtra(i, o, hasGuide) {
  const t = TOOLS[i], url = o + "/tools/" + t[1], title = toolTitle(t), desc = toolDesc(t);
  const robots = hasGuide ? '<meta name="robots" content="index,follow,max-image-preview:large">' : '<meta name="robots" content="noindex,follow">';
  return HEADBITS + robots + '<meta property="og:site_name" content="ToolsNest"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' + escH(title) + '"><meta name="twitter:description" content="' + escH(desc) + '">' + ogImg(o)
    + ldJson({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication", "@id": url + "#app", name: t[2], url: url, description: desc,
          applicationCategory: CATSCHEMA[t[0]], operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true,
          browserRequirements: "Requires JavaScript. Works best in Chrome, Edge or Firefox.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          publisher: { "@type": "Organization", name: "ToolsNest", url: o + "/" }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
            { "@type": "ListItem", position: 2, name: "All tools", item: o + "/tools" },
            { "@type": "ListItem", position: 3, name: CATLBL[t[0]], item: o + "/tools#cat-" + t[0] },
            { "@type": "ListItem", position: 4, name: t[2], item: url }
          ]
        }
      ]
    });
}
export function buildToolPage(html, i, o) {
  const t = TOOLS[i], url = o + "/tools/" + t[1], title = escH(toolTitle(t)), desc = escH(toolDesc(t));
  // CHANGED (AdSense thin-content fix): hasGuide = this tool has a hand-written TOOLGUIDES entry, not just the generic autoGuide() fallback. Only such pages are indexed and carry the ad script; every tool page still renders and works identically for the visitor either way.
  const hasGuide = !!TOOLGUIDES[t[1]];
  return html.split("%%O%%").join(o)
    .replace(/<title>[\s\S]*?<\/title>/, function () { return "<title>" + title + "</title>"; })
    .replace(/<meta name="description" content="[^"]*">/, function () { return '<meta name="description" content="' + desc + '">'; })
    .replace(/<link rel="canonical" href="[^"]*">/, function () { return '<link rel="canonical" href="' + url + '">'; })
    .replace(/<meta property="og:title" content="[^"]*">/, function () { return '<meta property="og:title" content="' + title + '">'; })
    .replace(/<meta property="og:description" content="[^"]*">/, function () { return '<meta property="og:description" content="' + desc + '">'; })
    .replace(/<meta property="og:url" content="[^"]*">/, function () { return '<meta property="og:url" content="' + url + '">'; })
    .replace("<!--ADS-->", function () { return (hasGuide ? adsTag() : '<meta name="google-adsense-account" content="' + ADSENSE + '">') + toolExtra(i, o, hasGuide); })
    .replace(/<section class="hero">[\s\S]*?<\/section>/, function () { return '<section class="hero" style="padding:28px 18px 0"><h1 style="font-size:clamp(30px,5vw,52px);max-width:22ch">' + escH(t[2]) + '</h1><div hidden><b id="cnt"></b><input id="q"><div id="qk"></div></div></section>'; })
    .replace(/<div class="mo" id="mo">[\s\S]*?<\/div><\/div><\/div>/, "")
    .replace('<main><div class="chips" id="cats">', function () { return '<style>.mo.inl{display:none;position:static;background:none;padding:0 14px;margin:12px 0 8px;justify-content:center}.mo.inl .mb{max-height:none;margin:0 auto}.mo.inl #cx{display:none}</style><div class="mo inl" id="mo"><div class="mb"><button class="x" id="cx">✕</button><h2 id="mt"></h2><div class="mu" id="md"></div><div id="tb"></div></div></div>' + toolBlock(i) + '<main><div class="chips" id="cats">'; })
    // CHANGED: remove the generic site-wide FAQ section (kept on the homepage, which does not use buildToolPage)
    .replace(/<section class="faq">[\s\S]*?<\/section>/, function () { return ""; });
}

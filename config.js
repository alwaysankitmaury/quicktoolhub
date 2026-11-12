// src/config.js — Site-wide settings: contact mail, AdSense / Analytics IDs, site URL, sitemap date, cache headers.

export const MAIL = "yuthindia33@gmail.com";
// Google AdSense publisher ID (added to <head> of every page automatically)
export const ADSENSE = "ca-pub-6349618133819808";
export const H = { "content-type": "text/html;charset=UTF-8", "cache-control": "public, max-age=300" };
/* =====================================================================
   SEO: individual crawlable tool pages (added)
   Every tool gets its own URL /tools/<slug> with unique title, description,
   canonical, Open Graph, Twitter card, JSON-LD and related-tool links.
   ===================================================================== */
// Production host used for canonical, Open Graph and sitemap URLs. Set to "" to use the host of each request instead.
export const SITE_URL = "https://toolsnest.shop";
// CHANGED: new constant. Date used as <lastmod> for every URL in sitemap.xml. Update it when you make a real content change.
export const LASTMOD = "2026-10-30";
// Optional settings. Leave "" to keep a feature off.
export const AD_SLOT = "4171470795"; // AdSense ad unit ID (digits). When set, one responsive ad is shown on the homepage, /tools and every tool page.
export const GSC_VERIFY = ""; // Google Search Console "HTML tag" verification: only the content value
export const BING_VERIFY = ""; // Bing Webmaster verification: only the content value
export const GA_ID = "G-17JSYX5VB3"; // Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX" (update the Privacy Policy if you use it)

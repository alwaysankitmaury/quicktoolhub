// src/blog/render.js — Blog rendering: index page, category pages, post pages, cards, SEO JSON-LD.
import { BLOGCAT, BLOGCATBY, BLOGCATS } from "./categories.js";
import { BLOGCSS } from "./css.js";
import { BLOG } from "./posts/index.js";
import { TOOLGUIDES } from "../guides/store.js";
import { adUnit } from "../layout.js";
import { html } from "../templates/home-template.js";
import { TBYSLUG, TOOLS } from "../tools/data.js";
import { escH, ldJson } from "../utils.js";

export function blogCatLabel(slug) { const c = BLOGCATBY[BLOGCAT[slug]]; return c ? c[1] : ""; }
export function blogChips(active) {
  return '<nav class="bchips" aria-label="Blog categories"><a href="/blog"' + (active ? "" : ' class="on"') + '>All articles</a>'
    + BLOGCATS.map(function (c) { return '<a href="/blog/category/' + c[0] + '"' + (active === c[0] ? ' class="on"' : "") + '>' + escH(c[1]) + '</a>'; }).join("") + '</nav>';
}
export function blogCatBody(c) {
  const posts = BLOG.map(function (b, i) { return BLOGCAT[b[0]] === c[0] ? blogCard(i) : ""; }).join("");
  const tools = {};
  BLOG.forEach(function (b) { if (BLOGCAT[b[0]] === c[0]) b[5].forEach(function (s) { if (TBYSLUG[s] !== undefined) tools[s] = 1; }); });
  const tl = Object.keys(tools).map(function (s) { return '<li><a href="/tools/' + s + '">' + escH(TOOLS[TBYSLUG[s]][2]) + '</a></li>'; }).join("");
  return '<nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/blog">Blog</a> › <span>' + escH(c[1]) + '</span></nav><h1>' + escH(c[1]) + '</h1><p>' + escH(c[3]) + '</p>'
    + blogChips(c[0]) + '<div class="blogidx">' + posts + '</div>'
    + (tl ? '<div class="artrelated"><h3>Tools mentioned in these guides</h3><ul class="dl">' + tl + '</ul></div>' : "");
}
export function blogCatExtra(c, o) {
  const url = o + "/blog/category/" + c[0];
  return ldJson({
    "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: c[1], description: c[2], url: url },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: o + "/blog" },
        { "@type": "ListItem", position: 3, name: c[1], item: url } ] }
    ]
  }) + BLOGCSS;
}
export function relatedGuides(i) {
  const t = TOOLS[i];
  const posts = BLOG.filter(function (b) { return b[5].indexOf(t[1]) > -1; }).slice(0, 3);
  const peers = [];
  for (let k = 1; k < TOOLS.length && peers.length < 4; k++) {
    const x = TOOLS[(i + k) % TOOLS.length];
    if (x[0] === t[0] && TOOLGUIDES[x[1]]) peers.push(x);
  }
  if (!posts.length && !peers.length) return "";
  return '<h2>Related guides and articles</h2><ul class="dl">'
    + posts.map(function (b) { return '<li><a href="/blog/' + b[0] + '">' + escH(b[1]) + '</a></li>'; }).join("")
    + peers.map(function (x) { return '<li><a href="/tools/' + x[1] + '">How to use ' + escH(x[2]) + '</a></li>'; }).join("") + '</ul>';
}
export const BLOGBYSLUG = {};
BLOG.forEach(function (b, i) { BLOGBYSLUG[b[0]] = i; });
export function blogWords(html) { return (html.replace(/<[^>]+>/g, " ").match(/\S+/g) || []).length; }
export function blogAuthorInitial() { return "T"; }
export function blogDateStr(iso) { const d = new Date(iso + "T00:00:00Z"); return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }); }
export function blogCard(i) {
  const b = BLOG[i];
  return '<a class="bcard" href="/blog/' + b[0] + '"><span class="bcat">' + escH(blogCatLabel(b[0])) + '</span><h3>' + escH(b[1]) + '</h3><p>' + escH(b[2]) + '</p><div class="bm">' + blogDateStr(b[3]) + ' · ' + b[4] + ' min read</div></a>';
}
export const BLOGDESC = "Original, long-form guides on photo and video editing, PDF organization, AI prompting, GST and loan math, and online privacy — from the team behind ToolsNest's free tools.";
export const BLOGINDEXBODY = '<h1>ToolsNest Blog &amp; Guides</h1><p class="mu">Practical, in-depth articles behind the tools — written by the people who build them.</p>'
  + blogChips("") + '<div class="blogidx">' + BLOG.map(function (b, i) { return blogCard(i); }).join("") + '</div>' + adUnit();
export function blogIndexExtra(o) {
  return ldJson({
    "@context": "https://schema.org", "@type": "Blog", name: "ToolsNest Blog", url: o + "/blog",
    publisher: { "@type": "Organization", name: "ToolsNest", url: o + "/" },
    blogPost: BLOG.map(function (b) { return { "@type": "BlogPosting", headline: b[1], url: o + "/blog/" + b[0], datePublished: b[3] }; })
  }) + BLOGCSS;
}
export function blogPostBody(i, o) {
  const b = BLOG[i], url = o + "/blog/" + b[0], related = b[5].filter(function (s) { return TBYSLUG[s] !== undefined; });
  const relatedHtml = related.length ? '<div class="artrelated"><h3>Tools mentioned in this guide</h3><ul class="dl">' + related.map(function (s) { const t = TOOLS[TBYSLUG[s]]; return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul></div>' : "";
  const idx = BLOGBYSLUG[b[0]], prev = BLOG[idx - 1], next = BLOG[idx + 1];
  const navLinks = '<p class="bc">' + (prev ? '← <a href="/blog/' + prev[0] + '">' + escH(prev[1]) + '</a>' : '') + (prev && next ? ' &nbsp;·&nbsp; ' : '') + (next ? '<a href="/blog/' + next[0] + '">' + escH(next[1]) + '</a> →' : '') + '</p>';
  return '<article class="art"><header><nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/blog">Blog</a> › <span>' + escH(b[1]) + '</span></nav>'
    + '<h1>' + escH(b[1]) + '</h1>'
    + '<div class="artmeta"><span class="av">' + blogAuthorInitial() + '</span><span>ToolsNest Team</span><span>·</span><time datetime="' + b[3] + '">' + blogDateStr(b[3]) + '</time><span>·</span><span>' + b[4] + ' min read</span>' + (blogCatLabel(b[0]) ? '<span>·</span><a href="/blog/category/' + BLOGCAT[b[0]] + '">' + escH(blogCatLabel(b[0])) + '</a>' : '') + '</div></header>'
    + '<section>' + b[6] + '</section>'
    + relatedHtml
    + '<footer>' + navLinks + '<p class="bc"><a href="/blog">← Back to all guides</a></p></footer></article>';
}
export function blogPostExtra(i, o) {
  const b = BLOG[i], url = o + "/blog/" + b[0];
  return ldJson({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": url + "#post", headline: b[1], description: b[2], url: url,
        datePublished: b[3], dateModified: b[3], inLanguage: "en",
        author: { "@type": "Organization", name: "ToolsNest" },
        publisher: { "@type": "Organization", name: "ToolsNest", url: o + "/" },
        mainEntityOfPage: url
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: o + "/blog" },
          { "@type": "ListItem", position: 3, name: b[1], item: url }
        ]
      }
    ]
  }) + BLOGCSS;
}

// src/tools/home.js — Homepage extras: JSON-LD, "Latest from blog" block and tool directory links.
import { BLOGCSS } from "../blog/css.js";
import { BLOG } from "../blog/posts/index.js";
import { blogCard } from "../blog/render.js";
import { MAIL } from "../config.js";
import { HEADBITS, adUnit, ogImg } from "../layout.js";
import { CATLBL, CATORDER } from "./categories.js";
import { TOOLS } from "./data.js";
import { escH, ldJson } from "../utils.js";

export function homeExtra(o) {
  const faq = [
    ["Are my files uploaded to a server?", "No. Photos, videos and PDFs are processed directly in your browser, so your files stay on your device."],
    ["Is ToolsNest really free?", "Yes. All tools are free to use. The site is supported by advertising."],
    ["Which browser should I use for the video editor?", "Google Chrome or Microsoft Edge on desktop or Android works best. Video tools run in real time, so keep the tab open until processing finishes. Videos are saved in WebM format."],
    ["Can I use the tools on my phone?", "Yes. The website is mobile friendly and works in modern mobile browsers."],
    ["How can I request a new tool or report a problem?", "Email us at " + MAIL + " or visit the Contact page."]
  ];
  return HEADBITS + '<meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:site_name" content="ToolsNest"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="ToolsNest – Free Online Tools"><meta name="twitter:description" content="Photo editor, video editor, PDF, AI prompt, text and developer tools in your browser.">' + ogImg(o)
    + ldJson({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", "@id": o + "/#website", url: o + "/", name: "ToolsNest", description: "Free online photo editor, video editor, PDF tools, AI prompt generators, text and developer tools and calculators.", inLanguage: "en", publisher: { "@id": o + "/#org" } },
        { "@type": "Organization", "@id": o + "/#org", name: "ToolsNest", url: o + "/", email: MAIL },
        { "@type": "FAQPage", mainEntity: faq.map(function (q) { return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) }
      ]
    });
}
export let HOMELINKS = adUnit() + '<section class="dir" id="all-tools"><h2>All ' + TOOLS.length + ' free online tools</h2><p>Browse every ToolsNest tool by category. Each tool has its own page that you can open, bookmark and share.</p>'
  + CATORDER.map(function (c) {
    return '<h3><a href="/tools#cat-' + c + '">' + CATLBL[c] + '</a></h3><ul class="dl">' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul>';
  }).join("") + '</section>';
// CHANGED: homepage "Latest from our blog" section (added for AdSense "thin / low value content"
// review) — shows real, original editorial content directly on the homepage, not just a tool
// directory, and adds fresh internal links. BLOG/blogCard are only defined above this point, so
// this is appended to HOMELINKS here instead of inside its original declaration.
// CHANGED (AdSense thin-content fix): the blog section is placed ahead of the tool directory on the homepage, with only one ad unit between the two (instead of one ad per section back-to-back), so the first thing a reviewer or visitor sees under the fold is original long-form content, not an ad sandwiched by two directories.
HOMELINKS = '<section class="dir" id="latest-blog">' + BLOGCSS
  + '<h2>Latest from our blog</h2><p>In-depth, original guides behind the tools — written by the ToolsNest team.</p><div class="blogidx">'
  + BLOG.map(function (b, i) { return [b[3], i]; }).sort(function (x, y) { return x[0] < y[0] ? 1 : -1; }).slice(0, 6).map(function (p) { return blogCard(p[1]); }).join("")
  + '</div><p><a href="/blog">Read all articles on the blog →</a></p></section>' + HOMELINKS;

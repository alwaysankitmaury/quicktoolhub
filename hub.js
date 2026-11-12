// src/tools/hub.js — /tools page (all tools directory).
import { adUnit } from "../layout.js";
import { CATLBL, CATORDER } from "./categories.js";
import { TOOLS } from "./data.js";
import { escH, ldJson } from "../utils.js";

export const HUBDESC = "Browse all " + TOOLS.length + " free online tools on ToolsNest: photo, video, PDF, AI prompt, text, developer tools, calculators and more.";
export const HUBBODY = '<h1>All Free Online Tools</h1><p class="mu">' + TOOLS.length + ' tools that run in your browser. No signup, your files stay on your device.</p>'
  + CATORDER.map(function (c) {
    return '<h2 id="cat-' + c + '">' + CATLBL[c] + '</h2><ul>' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a> – ' + escH(t[3]) + '</li>'; }).join("") + '</ul>';
  }).join("") + adUnit();
export function hubExtra(o) {
  return ldJson({
    "@context": "https://schema.org", "@type": "CollectionPage", name: "All Free Online Tools", url: o + "/tools",
    isPartOf: { "@type": "WebSite", name: "ToolsNest", url: o + "/" },
    mainEntity: { "@type": "ItemList", numberOfItems: TOOLS.length, itemListElement: TOOLS.map(function (t, i) { return { "@type": "ListItem", position: i + 1, url: o + "/tools/" + t[1], name: t[2] }; }) }
  });
}

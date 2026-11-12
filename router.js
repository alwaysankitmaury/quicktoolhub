// src/router.js — All URL routes of the website (/, /tools, /blog, /sitemap.xml, 404 ...)
import { FAVPNG, FAVSVG, OGIMG } from "./assets.js";
import { BLOGCATBY, BLOGCATS } from "./blog/categories.js";
import { BLOG } from "./blog/posts/index.js";
import { BLOGBYSLUG, BLOGDESC, BLOGINDEXBODY, blogCatBody, blogCatExtra, blogIndexExtra, blogPostBody, blogPostExtra } from "./blog/render.js";
import { ADSENSE, H, LASTMOD, SITE_URL } from "./config.js";
import { TOOLGUIDES } from "./guides/store.js";
import { adsTag, layout } from "./layout.js";
import { PAGES } from "./pages/index.js";
import { APPCSS, APPJS, html } from "./templates/home-template.js";
import { CATLBL, CATORDER } from "./tools/categories.js";
import { REDIRECTS, TBYSLUG, TOOLS } from "./tools/data.js";
import { POPULAR } from "./tools/helpers.js";
import { HOMELINKS, homeExtra } from "./tools/home.js";
import { HUBBODY, HUBDESC, hubExtra } from "./tools/hub.js";
import { buildToolPage } from "./tools/page.js";
import { escH } from "./utils.js";

export async function handle(request) {
    // Redirect: any host other than the main domain (workers.dev, other subdomains, www) -> 301 to SITE_URL
    const reqUrl = new URL(request.url);
    const mainHost = new URL(SITE_URL).hostname;
    if (reqUrl.hostname !== mainHost) {
      return Response.redirect(SITE_URL + reqUrl.pathname + reqUrl.search, 301);
    }
    if ((reqUrl.pathname.length > 1 && reqUrl.pathname.endsWith("/")) || reqUrl.pathname === "/index.html") {
      const clean = reqUrl.pathname === "/index.html" ? "/" : reqUrl.pathname.replace(/\/+$/, "");
      return Response.redirect(SITE_URL + clean + reqUrl.search, 301);
    }

    const rdm = reqUrl.pathname.match(/^\/tools\/([a-z0-9-]+)\/?$/);
    if (rdm && Object.prototype.hasOwnProperty.call(REDIRECTS, rdm[1])) return Response.redirect(SITE_URL + "/tools/" + REDIRECTS[rdm[1]] + reqUrl.search, 301);

        const u = new URL(request.url), o = SITE_URL || u.origin, p = u.pathname.replace(/\/+$/, "") || "/";
    if (p === "/app.js") return new Response(APPJS, { headers: { "content-type": "application/javascript;charset=UTF-8", "cache-control": "public, max-age=86400" } });
    if (p === "/app.css") return new Response(APPCSS, { headers: { "content-type": "text/css;charset=UTF-8", "cache-control": "public, max-age=86400" } });
    if (p === "/" || p === "/index.html")
      return new Response(html.split("%%O%%").join(o).replace("<!--ADS-->", function () { return adsTag() + homeExtra(o); }).replace("<!--TOOLLINKS-->", function () { return HOMELINKS; }), { headers: H });
    if (p === "/favicon.svg")
      return new Response(FAVSVG, { headers: { "content-type": "image/svg+xml", "cache-control": "public, max-age=86400" } });
    if (p === "/favicon.png" || p === "/favicon.ico" || p === "/apple-touch-icon.png")
      return new Response(Uint8Array.from(atob(FAVPNG), function (c) { return c.charCodeAt(0); }), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
    if (p === "/og-image.png")
      return new Response(Uint8Array.from(atob(OGIMG), function (c) { return c.charCodeAt(0); }), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
    if (p === "/tools")
      return new Response(layout("All Free Online Tools", HUBDESC, HUBBODY, p, o, hubExtra(o)), { headers: H });
    if (p === "/blog")
      return new Response(layout("Blog & Guides", BLOGDESC, BLOGINDEXBODY, p, o, blogIndexExtra(o)), { headers: H });
    if (p.indexOf("/blog/category/") === 0 && Object.prototype.hasOwnProperty.call(BLOGCATBY, p.slice(15))) {
      const bc = BLOGCATBY[p.slice(15)];
      return new Response(layout(bc[1] + " Guides", bc[2], blogCatBody(bc), p, o, blogCatExtra(bc, o)), { headers: H });
    }
    if (p.indexOf("/blog/") === 0 && Object.prototype.hasOwnProperty.call(BLOGBYSLUG, p.slice(6))) {
      const bi = BLOGBYSLUG[p.slice(6)], bl = BLOG[bi];
      return new Response(layout(bl[1], bl[2], blogPostBody(bi, o), p, o, blogPostExtra(bi, o)), { headers: H });
    }
    if (p.indexOf("/tools/") === 0 && Object.prototype.hasOwnProperty.call(TBYSLUG, p.slice(7)))
      return new Response(buildToolPage(html, TBYSLUG[p.slice(7)], o), { headers: H });
    if (PAGES[p]) { const g = PAGES[p]; return new Response(layout(g[0], g[1], g[2], p, o), { headers: H }); }
    if (p === "/robots.txt")
      return new Response("User-agent: *\nAllow: /\nSitemap: " + o + "/sitemap.xml\n", { headers: { "content-type": "text/plain;charset=UTF-8" } });
    if (p === "/sitemap.xml") {
      // CHANGED (AdSense thin-content fix): the sitemap only lists tool pages that have a hand-written TOOLGUIDES entry (deep, original content). Tools still running only the generic autoGuide() fallback stay live and linked from /tools, but are left out of the sitemap and marked noindex, so search engines are not asked to index a large set of near-identical auto-built pages.
      const urls = ["/", "/tools", "/blog"].concat(Object.keys(PAGES)).concat(TOOLS.filter(function (t) { return !!TOOLGUIDES[t[1]]; }).map(function (t) { return "/tools/" + t[1]; })).concat(BLOG.map(function (b) { return "/blog/" + b[0]; })).concat(BLOGCATS.map(function (c) { return "/blog/category/" + c[0]; })).map(function (x) { return "<url><loc>" + o + x + "</loc><lastmod>" + LASTMOD + "</lastmod></url>"; }) /* CHANGED: added lastmod + blog urls */.join("");
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + "</urlset>", { headers: { "content-type": "application/xml;charset=UTF-8" } });
    }
    if (p === "/ads.txt")
      return new Response(ADSENSE ? "google.com, pub-" + ADSENSE.replace(/^ca-pub-/, "") + ", DIRECT, f08c47fec0942fa0\n" : "# Add your AdSense publisher ID in worker.js (ADSENSE constant) to activate ads.txt\n", { headers: { "content-type": "text/plain;charset=UTF-8" } });
    const pop404 = POPULAR.map(function (s) { return '<li><a href="/tools/' + s + '">' + escH(TOOLS[TBYSLUG[s]][2]) + '</a></li>'; }).join("");
    const cat404 = CATORDER.map(function (c) { return '<li><a href="/tools#cat-' + c + '">' + CATLBL[c] + '</a></li>'; }).join("");
    return new Response(layout("Page not found", "The page you are looking for does not exist.",
      '<h1>Page Not Found</h1><p>Sorry, we could not find that page. Try the links below, or use the search box on the <a href="/">home page</a>.</p>'
      + '<p><a href="/">Go to Homepage</a> · <a href="/tools">Browse all tools</a> · <a href="/blog">Blog</a></p>'
      + '<h2>Popular tools</h2><ul class="dl">' + pop404 + '</ul><h2>Categories</h2><ul class="dl">' + cat404 + '</ul>',
      p, o, '<meta name="robots" content="noindex">'), { status: 404, headers: H });
}

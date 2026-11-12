# ToolsNest – Cloudflare Worker

Free online tools website (150+ tools, blog, guides). Pehle ek hi bada `worker.js` tha,
ab GitHub ke hisab se alag-alag files me hai. Output pehle jaisa hi hai.

## Folder structure

```
toolsnest-worker/
├── wrangler.toml            Cloudflare config
├── package.json
└── src/
    ├── index.js             Worker entry (security headers)
    ├── router.js            Saare URLs / routes (/, /tools, /blog, /sitemap.xml, 404...)
    ├── config.js            Mail, AdSense ID, GA ID, SITE_URL, LASTMOD, AD_SLOT
    ├── assets.js            Favicon + OG image (base64)
    ├── layout.js            Common header/footer + SEO meta
    ├── utils.js             Chhote helper functions
    ├── templates/
    │   ├── index.html       Homepage ka HTML
    │   └── home-template.js index.html ko load karta hai
    ├── client/
    │   ├── app-script.js    Browser JS: saare tools ka logic  (/app.js)
    │   └── app-style.js     Homepage CSS                      (/app.css)
    ├── pages/               About, Contact, Privacy, Terms, Disclaimer, Editorial, How to Use
    ├── tools/
    │   ├── data.js          TOOLS list  <-- naya tool yahan add karo
    │   ├── categories.js    Categories
    │   ├── helpers.js       Har tool page ka auto text (steps, FAQ, tips)
    │   ├── page.js          /tools/<slug> page builder
    │   ├── seo-section.js   Tool page SEO section
    │   ├── hub.js           /tools page
    │   └── home.js          Homepage extras
    ├── blog/
    │   ├── posts/           Har blog post ki alag file (16 posts) + index.js
    │   ├── categories.js    Blog categories
    │   ├── css.js           Blog CSS
    │   └── render.js        Blog pages ka rendering
    └── guides/              Tool guides (long content)
        ├── main-guides.js, more-guides.js, extra-guides.js
        ├── guide-more.js
        ├── store.js
        └── autoguide.js
```

## Deploy (GitHub se Cloudflare par)

1. Ye poora folder GitHub repo me upload karo (repo ke root me `wrangler.toml` aur `src/` dikhna chahiye).
2. Cloudflare Dashboard → Workers & Pages → apna `toolsnest` worker → Settings → Builds → **Connect** → GitHub repo choose karo.
3. Build command khali chhodo, Deploy command: `npx wrangler deploy`
4. Push karte hi auto deploy ho jayega.

Local test: `npm install` then `npm run dev`.

## Kaise add karein

- **Naya tool:** `src/tools/data.js` me ek line add karo + `src/client/app-script.js` me uska code.
- **Naya blog post:** `src/blog/posts/` me kisi post ki file copy karke edit karo, phir `src/blog/posts/index.js` me import + list me add karo. Category ke liye `src/blog/categories.js` me `BLOGCAT` me slug add karo.
- **AdSense / Analytics / Mail:** `src/config.js` aur `src/layout.js`.
- **Sitemap date:** `LASTMOD` in `src/config.js` (content badalne par update karo).

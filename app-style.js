// src/client/app-style.js — CSS of the homepage / tool popup. Served at /app.css
// (File is plain CSS wrapped in a template string; edit only the CSS between the backticks.)
export default String.raw`
:root{--bg:#F2F5FA;--cd:#FFFFFF;--bd:#D5DCEA;--ln:#14213D;--sh:#14213D;--tx:#14213D;--mu:#5A6784;--a:#FFB703;--on:#14213D;--b:#2F5BFF;--g:#16A34A;--hd:#F2F5FA;--hf:'Bricolage Grotesque','Segoe UI',system-ui,sans-serif}
.dk{--bg:#0E1424;--cd:#171F36;--bd:#2C3757;--ln:#3A4670;--sh:#000;--tx:#EAEEF9;--mu:#9AA6C4;--b:#8FAAFF;--hd:#0E1424}
.chip,.card,.mb{--c:var(--a)}
.k-ai{--c:#7B4DFF}.k-photo{--c:#FF4D8D}.k-video{--c:#FF6B2C}.k-pdf{--c:#E5383B}.k-text{--c:#2F7BFF}.k-dev{--c:#12A150}.k-calc{--c:#0FA3A3}.k-media{--c:#F59E0B}.k-util{--c:#00A6FB}.k-social{--c:#D6336C}
*{box-sizing:border-box}
body{margin:0;font-family:Figtree,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background-color:var(--bg);background-image:radial-gradient(var(--bd) 1px,transparent 1px);background-size:22px 22px;color:var(--tx);min-height:100vh;line-height:1.5}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,.card:focus-visible{outline:3px solid var(--b);outline-offset:2px}
header{position:sticky;top:0;z-index:50;background:var(--hd);border-bottom:2px solid var(--ln)}
.nav{max-width:1240px;margin:auto;padding:12px 18px;display:flex;gap:16px;align-items:center}
.logo{font-family:var(--hf);font-weight:800;font-size:25px;white-space:nowrap;letter-spacing:-.02em}
.logo b{background:var(--a);color:var(--on);padding:0 8px;border-radius:8px;margin-left:3px}
.hl{margin-left:auto;display:flex;gap:18px}.hl a{color:var(--mu);text-decoration:none;font-weight:600;font-size:14px}.hl a:hover{color:var(--b)}
.ib{border:2px solid var(--ln);background:var(--cd);color:var(--tx);border-radius:12px;width:42px;height:42px;cursor:pointer;font-size:18px;box-shadow:2px 2px 0 var(--sh)}
.ib:active{transform:translate(2px,2px);box-shadow:none}
.hero{max-width:1240px;margin:auto;padding:52px 18px 14px}
.hero h1{font-family:var(--hf);font-size:clamp(36px,6.4vw,70px);line-height:1.02;letter-spacing:-.03em;margin:0 0 14px;max-width:15ch;font-weight:800}
.hero p{color:var(--mu);margin:0 0 24px;max-width:58ch;font-size:18px}
.hero p b{color:var(--tx)}
#q{width:100%;max-width:680px;display:block;padding:16px 20px;border-radius:14px;border:2px solid var(--ln);background:var(--cd);color:var(--tx);font-size:17px;outline:none;box-shadow:5px 5px 0 var(--sh)}
#q:focus{box-shadow:5px 5px 0 var(--a)}
.qk{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px;align-items:center}.qk span{font-size:13px;color:var(--mu);font-weight:600;margin-right:4px}
.qk button{border:2px solid var(--ln);background:var(--cd);color:var(--tx);border-radius:999px;padding:6px 13px;font:600 13px Figtree,system-ui,sans-serif;cursor:pointer}
.qk button:hover{background:var(--a);color:var(--on)}
main{max-width:1240px;margin:auto;padding:0 18px 40px}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
#cats{margin:26px 0 22px}
.chip{border:2px solid var(--ln);background:var(--cd);color:var(--tx);padding:7px 14px 7px 11px;border-radius:999px;cursor:pointer;font:600 13px Figtree,system-ui,sans-serif;display:inline-flex;align-items:center;gap:7px}
.chip:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--c);border:1.5px solid var(--ln)}
.chip.on{background:var(--tx);color:var(--bg)}
#pr .chip:before{display:none}#pr .chip{padding:7px 13px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(224px,1fr));gap:18px}
.card{background:var(--cd);border:2px solid var(--ln);border-radius:14px;padding:16px;cursor:pointer;box-shadow:4px 4px 0 var(--sh);transition:transform .12s,box-shadow .12s}
.card:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--c)}
.card:active{transform:translate(2px,2px);box-shadow:0 0 0 var(--sh)}
.ic{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;font-size:23px;background:color-mix(in srgb,var(--c) 20%,var(--cd));border:2px solid var(--c);margin-bottom:12px}
.card h3{margin:0 0 5px;font-family:var(--hf);font-size:17px;line-height:1.2;font-weight:700;letter-spacing:-.01em}.card p{margin:0;font-size:13px;color:var(--mu);line-height:1.45}
.mo{display:none;position:fixed;inset:0;z-index:100;background:rgba(10,15,30,.72);padding:14px;align-items:center;justify-content:center}
.mb{background:var(--cd);border:2px solid var(--ln);border-top:8px solid var(--c);width:min(780px,100%);max-height:92vh;overflow:auto;border-radius:18px;padding:22px;box-shadow:8px 8px 0 var(--c)}
.mb h2{margin:0 48px 4px 0;font-family:var(--hf);font-size:24px;letter-spacing:-.01em}
.mu{color:var(--mu);font-size:13px;margin:6px 0}
.x{float:right;border:2px solid var(--ln);background:var(--cd);color:var(--tx);width:38px;height:38px;border-radius:10px;cursor:pointer;font-size:15px;box-shadow:2px 2px 0 var(--sh)}
.x:active{transform:translate(2px,2px);box-shadow:none}
label{display:block;font-size:13px;color:var(--mu);margin:12px 0 4px;font-weight:600}
input,select,textarea{width:100%;padding:11px 12px;border-radius:10px;border:2px solid var(--bd);background:var(--bg);color:var(--tx);font-size:14px;font-family:inherit}
input:focus,select:focus,textarea:focus{border-color:var(--ln)}
input[type=range]{padding:0;accent-color:var(--b);border:0;background:transparent}
input[type=checkbox]{width:auto}
input[type=file]{padding:9px;background:var(--cd);border-style:dashed}
input[type=color]{height:44px;padding:3px}
textarea{min-height:150px;resize:vertical}
.btn{background:var(--a);color:var(--on);border:2px solid var(--ln);border-radius:10px;padding:10px 17px;font:700 14px Figtree,system-ui,sans-serif;cursor:pointer;margin:12px 8px 0 0;text-decoration:none;display:inline-block;box-shadow:3px 3px 0 var(--sh)}
.btn:hover{filter:brightness(1.05)}
.btn:active{transform:translate(2px,2px);box-shadow:0 0 0 var(--sh)}
.btn.g{background:var(--cd);color:var(--tx)}
.btn.ok{background:var(--g);color:#fff}
.btn:disabled{opacity:.5;cursor:not-allowed}
.res{background:var(--bg);border:2px solid var(--bd);border-radius:12px;padding:12px;margin-top:14px;white-space:pre-wrap;word-break:break-word;font-family:ui-monospace,Consolas,monospace;font-size:13px;min-height:20px}
.pv{max-width:100%;max-height:420px;display:block;margin:14px auto;border-radius:10px;border:2px solid var(--bd)}
.bar{height:12px;background:var(--bg);border:2px solid var(--ln);border-radius:9px;margin-top:12px;overflow:hidden}
.bar i{display:block;height:100%;width:0;background:var(--a)}
.sw{display:inline-block;width:78px;height:78px;border-radius:12px;margin:6px;font-size:11px;color:#fff;text-align:center;line-height:78px;text-shadow:0 0 3px #000;cursor:pointer;border:2px solid var(--ln)}
.em{display:inline-block;font-size:26px;cursor:pointer;padding:5px 7px;border-radius:9px}.em:hover{background:var(--bd)}
footer{text-align:center;color:var(--mu);padding:30px 18px;border-top:2px solid var(--ln);font-size:13px;background:var(--hd)}
.fl{display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:center;margin-bottom:12px}footer a{color:var(--mu);text-decoration:none;font-weight:600}footer a:hover{color:var(--b)}
.faq{max-width:760px;margin:64px 0 0}.faq h2{font-family:var(--hf);font-size:30px;line-height:1.1;letter-spacing:-.02em;margin:0 0 12px}.faq h3{font-family:var(--hf);font-size:18px;margin:24px 0 4px}.faq p{color:var(--mu);line-height:1.7;margin:0}.faq a{color:var(--b)}
#ck{display:none;position:fixed;left:12px;right:12px;bottom:12px;z-index:200;background:var(--cd);border:2px solid var(--ln);border-radius:14px;padding:14px 16px;max-width:600px;margin:auto;box-shadow:5px 5px 0 var(--sh);font-size:13px;line-height:1.5}#ck a{color:var(--b)}
@media(max-width:600px){.nav{flex-wrap:wrap;padding:10px 14px}.hl{order:5;width:100%;margin-left:0;flex-wrap:wrap;gap:6px 14px}.ib{margin-left:auto}.hero{padding:34px 14px 8px}.hero p{font-size:16px}#q{font-size:16px;padding:14px 16px;box-shadow:4px 4px 0 var(--sh)}.grid{grid-template-columns:repeat(2,1fr);gap:12px}.card{padding:12px;box-shadow:3px 3px 0 var(--sh)}.ic{width:40px;height:40px;font-size:20px;margin-bottom:9px}.card h3{font-size:15px}.card p{font-size:12px}.mb{padding:16px;box-shadow:5px 5px 0 var(--c)}}
.ti{max-width:1240px;margin:0 auto;padding:4px 18px 0}.ti p{color:var(--mu);max-width:70ch;margin:6px 0}.ti .td{color:var(--tx);font-size:17px}.bc{font-size:13px;color:var(--mu);margin:0 0 10px}.bc a{color:var(--b);text-decoration:none}.dir{margin-top:56px}.ti h2,.dir h2{font-family:var(--hf);font-size:24px;letter-spacing:-.01em;margin:22px 0 8px}.dir h3{font-family:var(--hf);font-size:17px;margin:18px 0 6px}.dir h3 a{color:var(--tx);text-decoration:none}.dir p{color:var(--mu);max-width:70ch}.dl{list-style:none;padding:0;margin:0 0 8px;columns:3 210px;column-gap:20px}.dl li{break-inside:avoid;margin:3px 0;font-size:14px}.dl a{color:var(--b);text-decoration:none}.dl a:hover{text-decoration:underline}.ti ol.st,.ti ul.st{color:var(--mu);max-width:70ch;padding-left:22px;margin:6px 0}.ti ol.st li,.ti ul.st li{margin:4px 0}.ti h3{font-family:var(--hf);font-size:17px;margin:16px 0 2px}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
`;

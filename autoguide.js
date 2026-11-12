// src/guides/autoguide.js — Automatic guide for tools without a hand-written guide + guideHtml() renderer.
import { GUIDEMORE } from "./guide-more.js";
import { TOOLGUIDES } from "./store.js";
import { TBYSLUG, TOOLS } from "../tools/data.js";
import { KIND_INDEX, toolFaqs, toolKind, toolLimits, toolSteps, toolTips, toolUseCases } from "../tools/helpers.js";
import { escH } from "../utils.js";
// Load the guide files (they fill TOOLGUIDES when imported)
import "./main-guides.js";
import "./more-guides.js";
import "./extra-guides.js";

export const AG_ABOUT = {
  ai: ["{n} saves you from the blank-page problem. Instead of guessing how to phrase a request, you fill in a few fields and get a structured prompt with a role, task, context, format and tone. Clear instructions are the biggest factor in getting a useful answer from an AI model, so a good prompt often matters more than which model you use.", "The prompt is built in your browser and never stored by ToolsNest. You paste it into ChatGPT, Gemini, Claude or any other tool, read the answer critically and refine it with a follow-up message. It is a starting point, and AI output can contain mistakes, so always check facts before you use it."],
  photo: ["{n} edits pictures directly in your browser using the HTML canvas. Your image is decoded, changed on your own device and returned as a new file, so the original stays untouched. This removes the need for heavy editing software for simple, everyday jobs.", "Because nothing is uploaded, it is a sensible choice for personal photos, identity pictures and product images. Results depend on the quality of the source photo: a tool can reshape or adjust an image but cannot recover detail that was never captured."],
  video: ["{n} processes video in real time using your browser's built-in media features. The clip plays once while each frame is redrawn with your settings and recorded as a new WebM file. That is why processing takes about as long as the video itself.", "Everything stays on your device and no account is needed. For best results use Chrome or Edge, keep the tab open and in the foreground, and test settings on a short clip before running a long one."],
  pdf: ["{n} works on PDF documents locally using open-source libraries that run in your browser. Pages are copied or changed in memory and saved as a new file, so confidential paperwork is never sent to a server and your original file is not modified.", "PDFs are the standard for applications, invoices and reports, but they are awkward to rearrange. This tool does one clear job quickly, without watermarks, sign-ups or page limits set by ToolsNest."],
  text: ["{n} transforms text instantly as you type or paste. It replaces repetitive find-and-replace work, copy-paste cleanup and manual formatting with a single step, and the result appears immediately so you can copy it.", "Processing is local, so drafts, notes and lists are not stored. The tool changes characters only; it does not check meaning or grammar, so read the result once before you publish or send it."],
  dev: ["{n} handles a routine data task that developers, testers and students meet often, without installing software or opening a terminal. Paste your input, run the tool and copy the output.", "Everything runs in your browser and nothing is sent to ToolsNest. Even so, avoid pasting real passwords, secret keys or customer data into any online tool, and use sample values when testing."],
  calc: ["{n} applies a standard formula to the numbers you enter and shows the result at once. Using a calculator avoids mental arithmetic slips and lets you compare several scenarios in seconds by changing a single value.", "Results are estimates for planning and learning. They are not financial, tax or medical advice, and real offers may include fees, rounding or rules a simple formula does not cover. Confirm important decisions with a qualified professional."],
  media: ["{n} uses permissions that your browser controls. When you start it, the browser asks for access to a microphone, camera or screen, and what you record is created and kept on your own device.", "Recording quality depends on your hardware and environment. Do a short test first, record in a quiet and well-lit place, and save the file before closing the tab."],
  util: ["{n} is a quick everyday helper for a small job that does not deserve a separate app. Open it, enter a value or choose an option, and get the answer straight away.", "It runs in your browser with no account. Generated values and codes are created fresh each time and are not stored, so copy or download what you need before leaving the page."],
  social: ["{n} helps you prepare text, links and tags for social platforms and websites. It handles the fiddly formatting details so you can focus on what you want to say.", "ToolsNest is independent and not affiliated with any social network. The tool does not post for you or access your accounts, and platform rules change, so check current guidelines before publishing."]
};
export const AG_AUDIENCE = {
  ai: ["Students use it to turn a rough question into a clear brief for study help.", "Professionals use it to standardise how a team asks an AI for drafts and summaries.", "Everyday users use it to get better answers for planning, writing and learning."],
  photo: ["Students prepare pictures for forms, assignments and presentations.", "Professionals such as sellers and bloggers get listing and article images ready quickly.", "Everyday users fix a family or travel photo without installing an app."],
  video: ["Students trim and reframe clips for projects and presentations.", "Creators and marketers prepare short clips for Reels, Shorts and ads.", "Everyday users shrink or tidy phone videos before sharing them."],
  pdf: ["Students combine and tidy assignments and scanned notes.", "Professionals prepare invoices, reports and client documents.", "Everyday users assemble application packs, forms and ID proofs."],
  text: ["Students check length and clean up pasted notes.", "Writers, editors and SEO staff reformat and analyse copy quickly.", "Everyday users tidy lists, messages and captions."],
  dev: ["Students learn how formats and encodings work with instant feedback.", "Developers and testers debug payloads and generate test values.", "Technical support staff inspect a value without writing a script."],
  calc: ["Students check homework and learn the formula behind each answer.", "Professionals and shop owners price, quote and plan with dependable numbers.", "Households compare offers and budget for loans, savings and bills."],
  media: ["Teachers record explanations and walkthroughs for students.", "Professionals capture demos, bug reports and meeting notes.", "Everyday users record a quick voice memo or webcam photo."],
  util: ["Students use it for quick classroom tasks and design practice.", "Professionals use it to prototype a small design or generate a value.", "Everyday users settle decisions or grab a code without an app."],
  social: ["Students and new creators learn how links, tags and sizes work.", "Marketers and shop owners prepare tracked links and consistent posts.", "Everyday users style bios, captions and chat links."]
};
export const AG_EXTRA_FAQ = {
  ai: [["Will the generated prompt always give a perfect answer?", "No. It gives the AI a clearer brief, which usually improves results, but you should still review and edit the answer and follow up with corrections."], ["Can I change the prompt before using it?", "Yes. Copy it and edit any line, add examples of the style you want, or tell the AI who the final reader is."]],
  photo: [["Why does my result look different from the preview?", "The preview is scaled to fit the screen. Download the file and open it at full size to judge the real result."], ["Does the tool change my original photo?", "No. It creates a new file. Your original stays exactly as it was on your device."]],
  video: [["Why does processing take so long?", "The browser records playback in real time, so a one-minute clip takes about a minute. Keep the tab open until the bar is full."], ["Why is the output WebM and can I get MP4?", "Browsers record WebM natively. If an app needs MP4, convert the WebM with a separate converter."]],
  pdf: [["Can I use it on a password-protected PDF?", "Files secured with a password may need to be unlocked first with the tool you used to protect them."], ["Will the original PDF be changed?", "No. You receive a new file and your original is left untouched."]],
  text: [["Does it keep bold or italic formatting?", "No. It works on plain text only, so formatting from a word processor is not preserved."], ["Is there a length limit?", "ToolsNest sets none. Very long text depends on your device and browser speed."]],
  dev: [["Does it run or execute my code?", "No. It only transforms or inspects the value you give it."], ["Why do I see an error for input that looks fine?", "Small details such as stray spaces, wrong quotes or hidden characters from copy-paste often cause errors. Retype the suspicious part."]],
  calc: [["Which formula does it use?", "It uses the standard textbook formula for this calculation, applied to exactly the numbers you enter."], ["Why does my bank or provider show a slightly different figure?", "Fees, rounding rules, rate type and start dates can cause small differences. Ask the provider for its official schedule."]],
  media: [["Is my recording uploaded?", "No. Audio, video and images are created and kept on your device."], ["What if the browser blocks the permission?", "Open the site settings in your browser, allow the microphone, camera or screen for this page and reload."]],
  util: [["Is the generated result saved anywhere?", "No. Copy or download it before you leave the page, because it is not stored."], ["Does it work offline?", "Once the page is loaded the tool runs in your browser, but some tools need to fetch a helper library first."]],
  social: [["Does the tool post to my account?", "No. It only prepares text or links that you copy and use yourself."], ["Will it guarantee more reach or followers?", "No. Platforms control reach. The tool saves time and avoids formatting mistakes only."]]
};
export function autoGuide(t) {
  const n = t[2], d = t[3].replace(/[\s.!]+$/, ""), k = toolKind(t), idx = KIND_INDEX[t[1]] || 0;
  const rep = function (s) { return s.split("{n}").join(n); };
  const about = (AG_ABOUT[k] || AG_ABOUT.util).map(rep);
  about.unshift(n + " is a free ToolsNest tool built for one clear job: " + d.charAt(0).toLowerCase() + d.slice(1) + ". This guide explains what it does, how to use it well, who benefits and what to watch out for.");
  const steps = toolSteps(t).concat(["Review the result carefully before you rely on it or share it.", "Change an input and run it again if you want to compare another option."]);
  const aud = (AG_AUDIENCE[k] || AG_AUDIENCE.util).concat(toolUseCases(t).slice(0, 2));
  const faq = toolFaqs(t).concat(AG_EXTRA_FAQ[k] || AG_EXTRA_FAQ.util);
  return { ov: about, steps: steps, feats: aud, tips: toolTips(t).concat(toolLimits(t).slice(1, 3)), faq: faq };
}
export function guideHtml(slug) {
  const g = TOOLGUIDES[slug] || (TBYSLUG[slug] !== undefined ? autoGuide(TOOLS[TBYSLUG[slug]]) : null);
  if (!g) return "";
  const li = function (a) { return a.map(function (s) { return '<li>' + escH(s) + '</li>'; }).join(""); };
  return '<article class="guide"><section><h2>About the Tool &amp; Why It Matters</h2>' + g.ov.concat(GUIDEMORE[slug] || [], g.more || []).map(function (p) { return '<p>' + escH(p) + '</p>'; }).join("") + '</section>'
    + '<section><h2>Step-by-Step Guide: How to Use It</h2><ol class="st">' + li(g.steps) + '</ol></section>'
    + '<section><h2>Practical Use Cases</h2><ul class="st">' + li(g.feats) + '</ul></section>'
    + '<section><h2>Tips &amp; Best Practices</h2><ul class="st">' + li(g.tips) + '</ul></section>'
    + '<section><h2>Frequently Asked Questions (FAQs)</h2>' + g.faq.map(function (f) { return '<h3>' + escH(f[0]) + '</h3><p>' + escH(f[1]) + '</p>'; }).join("") + '</section></article>';
}

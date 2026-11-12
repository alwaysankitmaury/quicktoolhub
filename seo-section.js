// src/tools/seo-section.js — Unique "About this tool" SEO section for every tool page.
import { TOOLS } from "./data.js";
import { relatedTools, toolKind } from "./helpers.js";
import { escH } from "../utils.js";

/* =====================================================================
   Extra editorial content (added): unique per-tool section, editorial
   policy page, extra blog posts.
   ===================================================================== */
export function toolSeoSection(i) {
  const t = TOOLS[i], n = escH(t[2]), d = escH(t[3].replace(/[\s.!]+$/, "")), c = t[0], k = toolKind(t);
  const what = {
    ai: n + " is a prompt helper. Instead of staring at an empty chat box, you answer a few simple questions and the tool assembles a complete, well-organised request for an AI model. Good prompts name a role, state the task, give context, set the format and describe the tone, and this tool builds all of those parts for you.",
    photo: n + " works on pictures directly in your browser using the HTML canvas. Your image is decoded, changed pixel by pixel on your own device, and handed back as a new file, so the original stays untouched and nothing is uploaded.",
    video: n + " processes video in real time using your browser's built-in media features. The clip plays through once while each frame is redrawn with your settings and recorded as a new file, which is why you should keep the tab open until it finishes.",
    pdf: n + " edits PDF documents locally with open-source libraries that run in your browser. Pages are copied or changed in memory and saved as a new file, so confidential paperwork does not have to be sent to anyone's server.",
    text: n + " transforms text instantly as you type or paste. It is a small, focused utility meant to replace manual find-and-replace work, copy-paste cleanup and repetitive formatting.",
    dev: n + " is a developer utility that handles a routine data task without installing software. It runs in your browser, so snippets, payloads and strings are processed locally and are never transmitted to ToolsNest.",
    calc: n + " applies a standard formula to the numbers you enter and shows the result at once. Using a calculator avoids mental arithmetic slips and lets you compare several scenarios in seconds.",
    media: n + " uses permissions that your browser controls. When you start it, the browser asks for access to a microphone, camera or screen, and recordings are created and kept on your own device.",
    util: n + " is a quick everyday helper for a small job that does not deserve a separate app. Open it, enter a value or choose an option, and get the answer straight away.",
    social: n + " helps you prepare content and links for social platforms and websites. It saves time on formatting details so you can concentrate on what you want to say."
  }[c] || (n + " is a free online helper.");
  const who = {
    ai: "writers, students, marketers, developers and small business owners who use AI chatbots and image or video generators and want more reliable answers.",
    photo: "bloggers, sellers, students, designers and anyone who needs a picture adjusted for a form, a website or a social post.",
    video: "creators and ordinary phone users who want a quick edit for Reels, Shorts, presentations or family videos without installing an editor.",
    pdf: "students, job seekers, office workers and business owners who handle applications, invoices, scans and reports.",
    text: "writers, editors, students, SEO professionals and data-entry staff who clean up and reshape text.",
    dev: "developers, testers, analysts and learners who debug data, convert formats and generate test values.",
    calc: "households, shop owners, students and professionals who need dependable numbers for money, health, dates and measurements.",
    media: "teachers, meeting hosts, creators and support staff who need a quick recording or capture.",
    util: "anyone who wants a fast answer or a handy generator without signing up for anything.",
    social: "creators, marketers, shop owners and community managers who publish regularly online."
  }[c];
  const ex = {
    ai: "For example, a shopkeeper can describe a product, pick a friendly tone and paste the resulting prompt into any chatbot to receive a ready listing.",
    photo: "For example, a seller can adjust a product photo, shrink it for a marketplace listing and save it in a few clicks.",
    video: "For example, a creator can trim a raw clip, crop it for vertical viewing and add a caption before posting.",
    pdf: "For example, an applicant can merge a resume and certificates into one file that fits a portal's upload rules.",
    text: "For example, an editor can paste a messy column of names and receive them tidy and consistent a moment later.",
    dev: "For example, a developer can paste an API response and immediately see whether the data is well formed.",
    calc: "For example, someone comparing two offers can change a single number and watch how the final figure moves.",
    media: "For example, a teacher can record a quick voice explanation and share the file with students.",
    util: "For example, a friend group can settle a decision fairly with a random pick instead of a long debate.",
    social: "For example, a small business can build a tracked link for each campaign to see which channel brings visitors."
  }[c];
  const rel = relatedTools(i).slice(0, 3).map(function (k2) { return '<a href="/tools/' + TOOLS[k2][1] + '">' + escH(TOOLS[k2][2]) + '</a>'; }).join(", ");
  return '<h2>About ' + n + '</h2><p>' + what + ' In short: ' + d + '.</p>'
    + '<h2>Who is ' + n + ' for?</h2><p>This tool is useful for ' + who + ' ' + ex + '</p>'
    + '<h2>Privacy and reliability</h2><p>' + n + ' needs no account. ' + (c === "calc" ? "Results are estimates and should not replace professional advice." : "Your input is handled inside your own browser and is not stored by ToolsNest.") + ' If something does not work as described, tell us through the <a href="/contact">Contact page</a> and we will look into it. You may also like ' + rel + '.</p>';
}

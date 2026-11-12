// src/pages/disclaimer.js — Disclaimer page content.
import { UPDATED } from "./common.js";

export const DISCLAIMER = String.raw`<h1>Disclaimer</h1>` + UPDATED + String.raw`
<h2>General information</h2><p>The tools and information on ToolsNest are provided for general purposes only. While we work to keep everything accurate and working, we make no guarantee about completeness, reliability or suitability for any particular purpose.</p>
<h2>Calculators</h2><p>Results from the EMI, SIP, GST, interest, BMI, age and other calculators are estimates. They are not financial, tax, legal or medical advice. Please consult a qualified professional before making important decisions.</p>
<h2>Files and media</h2><p>Always check the output of PDF, photo and video tools before using or sharing it, and keep copies of your originals. Video tools run in real time in your browser and results depend on your device and browser.</p>
<h2>Trademarks and affiliation</h2><p>YouTube, Instagram, Facebook, WhatsApp and other names mentioned on this site are trademarks of their respective owners. ToolsNest is not affiliated with or endorsed by them. You are responsible for respecting the copyright and terms of any content you use.</p>
<h2>Advertising</h2><p>This website may display advertisements from Google AdSense and other partners. We are not responsible for the content of third-party ads or sites.</p>
<h2>Contact</h2><p>Questions? Email <a href="mailto:{{MAIL}}">{{MAIL}}</a>.</p>`;

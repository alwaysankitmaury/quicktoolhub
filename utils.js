// src/utils.js — Small helper functions used everywhere (HTML escape, JSON-LD, rotation helper).

export function pickRotated(arr, idx, n) {
  const len = arr.length, out = [];
  for (let x = 0; x < n && x < len; x++) out.push(arr[(idx + x) % len]);
  return out;
}
export function escH(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
export function ldJson(obj) { return '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, "\\u003c") + "</script>"; }

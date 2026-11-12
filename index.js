// src/index.js — Worker entry point. Adds security headers to every response.
import { handle } from "./router.js";

export default {
  async fetch(request) {
    const r = await handle(request);
    const h = new Headers(r.headers);
    h.set("X-Content-Type-Options", "nosniff");
    h.set("Referrer-Policy", "strict-origin-when-cross-origin");
    h.set("Permissions-Policy", "camera=(self), microphone=(self), display-capture=(self), geolocation=()");
    h.set("Strict-Transport-Security", "max-age=31536000");
    return new Response(r.body, { status: r.status, headers: h });
  }
};

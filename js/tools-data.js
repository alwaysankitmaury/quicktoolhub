/**
 * QuickToolHub - js/tools-data.js
 * ---------------------------------------------------------------------------
 * Master registry for the Data-Driven Single Engine Architecture.
 * One engine page (tool.html?id=word-counter) reads ALL_TOOLS, finds the tool
 * by `id`, renders its `inputs`, and runs `execute` on click.
 *
 * TOOL SCHEMA
 *   id          {string}  unique slug (used in URLs)
 *   title       {string}  display name
 *   category    {string}  one of TOOL_CATEGORIES[].name
 *   icon        {string}  FontAwesome 6 classes, e.g. 'fa-solid fa-font'
 *   desc        {string}  short description (cards + meta description)
 *   keywords    {string[]} extra search terms (optional)
 *   inputs      {Input[]} fields rendered by the engine (see below)
 *   actionText  {string}  button label
 *   execute     {(values) => string | Result}
 *
 * INPUT SCHEMA
 *   id, label, type: 'textarea' | 'text' | 'number' | 'select' | 'date'
 *   placeholder, default, required, help (all optional)
 *   textarea: rows            number: min, max, step
 *   select:   options [{ value, label }]
 *
 * EXECUTE CONTRACT
 *   values  - object keyed by input id. Values may be strings (raw from the
 *             DOM); every tool parses its own numbers.
 *   return  - a plain string, OR an object:
 *               { text?:  string,                       // main output (monospace / copyable)
 *                 stats?: [{ label, value }],           // result rows / cards
 *                 note?:  string }                      // small footnote under the result
 *   errors  - validation problems are thrown as `new Error('friendly message')`.
 *             The engine should catch them and show err.message to the user.
 *
 * ADDING A TOOL: append an object to ALL_TOOLS. Nothing else needs to change.
 * ---------------------------------------------------------------------------
 */
'use strict';

/* ===========================================================================
 * Categories
 * ========================================================================= */
const TOOL_CATEGORIES = [
  { name: 'Text Utilities', slug: 'text-utilities', icon: 'fa-solid fa-align-left' },
  { name: 'Developer Tools', slug: 'developer-tools', icon: 'fa-solid fa-terminal' },
  { name: 'Math & Finance', slug: 'math-finance', icon: 'fa-solid fa-calculator' },
  { name: 'Converters', slug: 'converters', icon: 'fa-solid fa-right-left' },
  { name: 'Security & Web', slug: 'security-web', icon: 'fa-solid fa-shield-halved' }
];

const CAT = {
  TEXT: 'Text Utilities',
  DEV: 'Developer Tools',
  MATH: 'Math & Finance',
  CONV: 'Converters',
  SEC: 'Security & Web'
};

/* ===========================================================================
 * Shared helpers (kept private inside an IIFE, exposed as TOOL_HELPERS)
 * ========================================================================= */
const TOOL_HELPERS = (() => {
  const num = (v) => {
    if (v === null || v === undefined) return NaN;
    if (typeof v === 'string' && v.trim() === '') return NaN;
    return Number(v);
  };

  const needNum = (v, label, opts = {}) => {
    const n = num(v);
    if (!Number.isFinite(n)) throw new Error('Please enter a valid number for "' + label + '".');
    if (opts.positive && n <= 0) throw new Error('"' + label + '" must be greater than zero.');
    if (opts.min !== undefined && n < opts.min) throw new Error('"' + label + '" must be at least ' + opts.min + '.');
    if (opts.max !== undefined && n > opts.max) throw new Error('"' + label + '" must be ' + opts.max + ' or less.');
    return n;
  };

  const needText = (v, label) => {
    const s = v === null || v === undefined ? '' : String(v);
    if (s.trim() === '') throw new Error('Please enter ' + label + '.');
    return s;
  };

  // Up to `maxDigits` decimals with thousands separators.
  const fmt = (n, maxDigits = 6) =>
    Number.isFinite(n) ? n.toLocaleString('en-US', { maximumFractionDigits: maxDigits }) : String(n);

  // Significant-digit formatting for unit conversions.
  const fmtSig = (n) => {
    if (!Number.isFinite(n)) return String(n);
    if (n === 0) return '0';
    const r = Number(n.toPrecision(12));
    if (Math.abs(r) >= 1e15 || Math.abs(r) < 1e-9) return r.toExponential(6);
    return r.toLocaleString('en-US', { maximumFractionDigits: 10 });
  };

  const money = (n) =>
    Number.isFinite(n) ? n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : String(n);

  const utf8 = (s) => new TextEncoder().encode(s);

  const byteLength = (s) => utf8(s).length;

  const fmtBytes = (n) => {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(2) + ' KB';
    return (n / 1048576).toFixed(2) + ' MB';
  };

  const fmtDuration = (seconds) => {
    const s = Math.max(0, Math.round(seconds));
    if (s < 60) return s + ' sec';
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ' min' + (r ? ' ' + r + ' sec' : '');
  };

  const randomBytes = (n) => {
    const arr = new Uint8Array(n);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(arr);
    } else {
      for (let i = 0; i < n; i++) arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
  };

  // Uniform random integer in [0, max) without modulo bias.
  const randomInt = (max) => {
    if (max <= 1) return 0;
    const limit = Math.floor(0x100000000 / max) * max;
    let x;
    do {
      const b = randomBytes(4);
      x = ((b[0] << 24) | (b[1] << 16) | (b[2] << 8) | b[3]) >>> 0;
    } while (x >= limit);
    return x % max;
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = randomInt(i + 1);
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  };

  return { num, needNum, needText, fmt, fmtSig, money, utf8, byteLength, fmtBytes, fmtDuration, randomBytes, randomInt, shuffle };
})();

/* ===========================================================================
 * Pure algorithm libraries used by several tools
 * ========================================================================= */

/* ---- Text case algorithms ---- */
const CASE_ALGORITHMS = (() => {
  const WORD_RE = /[\p{L}\p{N}][\p{L}\p{N}'\u2019]*/gu;
  const capFirst = (w) => w.charAt(0).toUpperCase() + w.slice(1);

  const splitWords = (t) =>
    t.replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, '$1 $2').match(/[\p{L}\p{N}]+/gu) || [];

  return {
    upper: (t) => t.toUpperCase(),
    lower: (t) => t.toLowerCase(),
    title: (t) => t.toLowerCase().replace(WORD_RE, capFirst),
    capitalized: (t) => t.replace(WORD_RE, capFirst),
    sentence: (t) => {
      let s = t.toLowerCase();
      s = s.replace(/(^\s*[("'\u201C\u2018\[]*)(\p{L})/u, (m, pre, ch) => pre + ch.toUpperCase());
      s = s.replace(/([.!?\u2026]["')\]\u201D\u2019]*\s+[("'\u201C\u2018\[]*)(\p{L})/gu, (m, pre, ch) => pre + ch.toUpperCase());
      s = s.replace(/(\n\s*[("'\u201C\u2018\[]*)(\p{L})/gu, (m, pre, ch) => pre + ch.toUpperCase());
      s = s.replace(/(^|[^\p{L}\p{N}'])i(?=$|[^\p{L}\p{N}']|'(?:m|ll|ve|d)\b)/gu, (m, pre) => pre + 'I');
      return s;
    },
    alternating: (t) => {
      let out = '';
      let up = false;
      for (const c of Array.from(t)) {
        if (c.toLowerCase() !== c.toUpperCase()) {
          out += up ? c.toUpperCase() : c.toLowerCase();
          up = !up;
        } else {
          out += c;
        }
      }
      return out;
    },
    camel: (t) =>
      splitWords(t).map((w, i) => (i === 0 ? w.toLowerCase() : capFirst(w.toLowerCase()))).join(''),
    snake: (t) => splitWords(t).map((w) => w.toLowerCase()).join('_'),
    kebab: (t) => splitWords(t).map((w) => w.toLowerCase()).join('-')
  };
})();

/* ---- Hash algorithms (synchronous, pure JS, operate on Uint8Array) ---- */
const HASH_ALGORITHMS = (() => {
  const hex32be = (n) => (n >>> 0).toString(16).padStart(8, '0');
  const hex32le = (n) => {
    let s = '';
    for (let i = 0; i < 4; i++) s += ((n >>> (8 * i)) & 255).toString(16).padStart(2, '0');
    return s;
  };

  const pad = (bytes, littleEndian) => {
    const len = bytes.length;
    const padLen = (((len + 8) >>> 6) + 1) << 6;
    const buf = new Uint8Array(padLen);
    buf.set(bytes);
    buf[len] = 0x80;
    const view = new DataView(buf.buffer);
    const low = (len * 8) >>> 0;
    const high = Math.floor(len / 0x20000000);
    if (littleEndian) {
      view.setUint32(padLen - 8, low, true);
      view.setUint32(padLen - 4, high, true);
    } else {
      view.setUint32(padLen - 8, high, false);
      view.setUint32(padLen - 4, low, false);
    }
    return { view, padLen };
  };

  /* MD5 */
  const MD5_K = new Uint32Array(64);
  for (let i = 0; i < 64; i++) MD5_K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) >>> 0;
  const MD5_S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];

  const md5 = (bytes) => {
    const { view, padLen } = pad(bytes, true);
    let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
    const M = new Uint32Array(16);
    for (let off = 0; off < padLen; off += 64) {
      for (let i = 0; i < 16; i++) M[i] = view.getUint32(off + i * 4, true);
      let A = a0, B = b0, C = c0, D = d0;
      for (let i = 0; i < 64; i++) {
        let F, g;
        if (i < 16) { F = (B & C) | (~B & D); g = i; }
        else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; }
        else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
        else { F = C ^ (B | ~D); g = (7 * i) % 16; }
        F = (F + A + MD5_K[i] + M[g]) >>> 0;
        A = D; D = C; C = B;
        const s = MD5_S[(i >> 4) * 4 + (i & 3)];
        B = (B + ((F << s) | (F >>> (32 - s)))) >>> 0;
      }
      a0 = (a0 + A) >>> 0; b0 = (b0 + B) >>> 0; c0 = (c0 + C) >>> 0; d0 = (d0 + D) >>> 0;
    }
    return hex32le(a0) + hex32le(b0) + hex32le(c0) + hex32le(d0);
  };

  /* SHA-1 */
  const rotl = (x, n) => ((x << n) | (x >>> (32 - n))) >>> 0;

  const sha1 = (bytes) => {
    const { view, padLen } = pad(bytes, false);
    let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
    const w = new Uint32Array(80);
    for (let off = 0; off < padLen; off += 64) {
      for (let i = 0; i < 16; i++) w[i] = view.getUint32(off + i * 4, false);
      for (let i = 16; i < 80; i++) w[i] = rotl(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
      let a = h0, b = h1, c = h2, d = h3, e = h4;
      for (let i = 0; i < 80; i++) {
        let f, k;
        if (i < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
        else if (i < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
        else if (i < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
        else { f = b ^ c ^ d; k = 0xca62c1d6; }
        const temp = (rotl(a, 5) + f + e + k + w[i]) >>> 0;
        e = d; d = c; c = rotl(b, 30); b = a; a = temp;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0; h4 = (h4 + e) >>> 0;
    }
    return hex32be(h0) + hex32be(h1) + hex32be(h2) + hex32be(h3) + hex32be(h4);
  };

  /* SHA-256 */
  const SHA256_K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);
  const rotr = (x, n) => ((x >>> n) | (x << (32 - n))) >>> 0;

  const sha256 = (bytes) => {
    const { view, padLen } = pad(bytes, false);
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const w = new Uint32Array(64);
    for (let off = 0; off < padLen; off += 64) {
      for (let i = 0; i < 16; i++) w[i] = view.getUint32(off + i * 4, false);
      for (let i = 16; i < 64; i++) {
        const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (h + S1 + ch + SHA256_K[i] + w[i]) >>> 0;
        const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
    }
    return H.map(hex32be).join('');
  };

  return { md5, sha1, sha256 };
})();

/* ---- Generic unit-converter factory (Length, Weight, Speed, Area, Data...) ---- */
const makeUnitConverter = (cfg) => {
  const { id, title, icon, desc, keywords, units, defaultFrom, defaultTo, extraInputs, unitsFor } = cfg;
  const H = TOOL_HELPERS;
  const options = units.map((u) => ({ value: u.key, label: u.label }));

  return {
    id,
    title,
    category: CAT.CONV,
    icon,
    desc,
    keywords: keywords || [],
    inputs: [
      { id: 'value', label: 'Value', type: 'number', placeholder: 'Enter a value', default: 1, step: 'any', required: true },
      { id: 'from', label: 'From', type: 'select', options, default: units[defaultFrom || 0].key },
      { id: 'to', label: 'To', type: 'select', options, default: units[defaultTo || 1].key }
    ].concat(extraInputs || []),
    actionText: 'Convert',
    execute: (v) => {
      const list = unitsFor ? unitsFor(v) : units;
      const value = H.needNum(v.value, 'Value');
      const from = list.find((u) => u.key === v.from);
      const to = list.find((u) => u.key === v.to);
      if (!from || !to) throw new Error('Please choose both units.');
      const base = value * from.factor;
      const result = base / to.factor;
      return {
        text: H.fmtSig(value) + ' ' + from.symbol + ' = ' + H.fmtSig(result) + ' ' + to.symbol,
        stats: list
          .filter((u) => u.key !== from.key)
          .map((u) => ({ label: u.label, value: H.fmtSig(base / u.factor) + ' ' + u.symbol }))
      };
    }
  };
};

/* ===========================================================================
 * MASTER ARRAY
 * ========================================================================= */
const ALL_TOOLS = [

  /* =======================================================================
   * TEXT UTILITIES
   * ===================================================================== */
  {
    id: 'word-counter',
    title: 'Word Counter',
    category: CAT.TEXT,
    icon: 'fa-solid fa-spell-check',
    desc: 'Count words, characters, sentences and paragraphs, and estimate reading time.',
    keywords: ['character count', 'word count', 'reading time', 'sentence counter'],
    inputs: [
      { id: 'text', label: 'Your text', type: 'textarea', rows: 10, placeholder: 'Type or paste your text here...', required: false }
    ],
    actionText: 'Count Words',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const text = String(v.text || '');
      const words = (text.match(/\S+/g) || []).length;
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim() !== '').length;
      const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim() !== '').length;
      const lines = text === '' ? 0 : text.split(/\r?\n/).length;
      return {
        stats: [
          { label: 'Words', value: H.fmt(words) },
          { label: 'Characters', value: H.fmt(text.length) },
          { label: 'Characters (no spaces)', value: H.fmt(text.replace(/\s/g, '').length) },
          { label: 'Sentences', value: H.fmt(sentences) },
          { label: 'Paragraphs', value: H.fmt(paragraphs) },
          { label: 'Lines', value: H.fmt(lines) },
          { label: 'Reading time', value: H.fmtDuration((words / 200) * 60) },
          { label: 'Speaking time', value: H.fmtDuration((words / 130) * 60) }
        ],
        note: 'Reading time assumes 200 words per minute; speaking time assumes 130 words per minute.'
      };
    }
  },

  {
    id: 'case-converter',
    title: 'Case Converter',
    category: CAT.TEXT,
    icon: 'fa-solid fa-font',
    desc: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and more.',
    keywords: ['uppercase', 'lowercase', 'title case', 'sentence case', 'camelCase', 'snake_case', 'kebab-case'],
    inputs: [
      { id: 'text', label: 'Your text', type: 'textarea', rows: 8, placeholder: 'Type or paste your text here...', required: true },
      {
        id: 'mode', label: 'Convert to', type: 'select', default: 'upper',
        options: [
          { value: 'upper', label: 'UPPERCASE' },
          { value: 'lower', label: 'lowercase' },
          { value: 'title', label: 'Title Case' },
          { value: 'sentence', label: 'Sentence case' },
          { value: 'capitalized', label: 'Capitalized Case (keep other letters)' },
          { value: 'alternating', label: 'Alternating cAsE' },
          { value: 'camel', label: 'camelCase' },
          { value: 'snake', label: 'snake_case' },
          { value: 'kebab', label: 'kebab-case' }
        ]
      }
    ],
    actionText: 'Convert Case',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some text to convert');
      const fn = CASE_ALGORITHMS[v.mode];
      if (!fn) throw new Error('Unknown case type.');
      return fn(text);
    }
  },

  {
    id: 'remove-duplicate-lines',
    title: 'Remove Duplicate Lines',
    category: CAT.TEXT,
    icon: 'fa-solid fa-clone',
    desc: 'Delete repeated lines from a list and keep only the unique ones, in their original order.',
    keywords: ['duplicate remover', 'unique lines', 'deduplicate', 'list cleaner'],
    inputs: [
      { id: 'text', label: 'Lines of text', type: 'textarea', rows: 10, placeholder: 'One item per line...', required: true },
      {
        id: 'caseSensitive', label: 'Case sensitive', type: 'select', default: 'no',
        options: [{ value: 'no', label: 'No (Apple = apple)' }, { value: 'yes', label: 'Yes (Apple ≠ apple)' }]
      },
      {
        id: 'trimLines', label: 'Trim spaces around each line', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
      },
      {
        id: 'removeEmpty', label: 'Remove empty lines', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
      }
    ],
    actionText: 'Remove Duplicates',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some lines of text');
      const caseSensitive = v.caseSensitive === 'yes';
      const trim = v.trimLines !== 'no';
      const skipEmpty = v.removeEmpty !== 'no';
      const lines = text.split(/\r?\n/);
      const seen = new Set();
      const out = [];
      for (const raw of lines) {
        const line = trim ? raw.trim() : raw;
        if (skipEmpty && line.trim() === '') continue;
        const key = caseSensitive ? line : line.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(line);
      }
      return {
        text: out.join('\n'),
        stats: [
          { label: 'Original lines', value: String(lines.length) },
          { label: 'Unique lines', value: String(out.length) },
          { label: 'Removed', value: String(lines.length - out.length) }
        ]
      };
    }
  },

  {
    id: 'reverse-text',
    title: 'Reverse Text',
    category: CAT.TEXT,
    icon: 'fa-solid fa-right-left',
    desc: 'Reverse the characters, word order, letters in each word, or line order of any text.',
    keywords: ['mirror text', 'backwards text', 'reverse string', 'flip text'],
    inputs: [
      { id: 'text', label: 'Your text', type: 'textarea', rows: 8, placeholder: 'Type or paste your text here...', required: true },
      {
        id: 'mode', label: 'Reverse mode', type: 'select', default: 'chars',
        options: [
          { value: 'chars', label: 'Reverse all characters' },
          { value: 'words', label: 'Reverse word order' },
          { value: 'eachWord', label: 'Reverse letters in each word' },
          { value: 'lines', label: 'Reverse line order' }
        ]
      }
    ],
    actionText: 'Reverse Text',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some text to reverse');
      const reverseChars = (s) => {
        let parts;
        if (typeof Intl !== 'undefined' && Intl.Segmenter) {
          parts = Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s), (x) => x.segment);
        } else {
          parts = Array.from(s);
        }
        return parts.reverse().join('');
      };
      switch (v.mode) {
        case 'words':
          return text.split(/\r?\n/).map((l) => l.trim().split(/\s+/).reverse().join(' ')).join('\n');
        case 'eachWord':
          return text.replace(/\S+/g, reverseChars);
        case 'lines':
          return text.split(/\r?\n/).reverse().join('\n');
        default:
          return reverseChars(text);
      }
    }
  },

  {
    id: 'text-to-slug',
    title: 'Text to Slug Converter',
    category: CAT.TEXT,
    icon: 'fa-solid fa-link',
    desc: 'Turn titles and phrases into clean, SEO-friendly URL slugs.',
    keywords: ['slugify', 'url slug', 'permalink', 'seo friendly url'],
    inputs: [
      { id: 'text', label: 'Title or phrase', type: 'text', placeholder: 'e.g. 10 Best Free Online Tools (2026)', required: true },
      {
        id: 'separator', label: 'Separator', type: 'select', default: '-',
        options: [{ value: '-', label: 'Hyphen ( - )' }, { value: '_', label: 'Underscore ( _ )' }]
      },
      {
        id: 'lower', label: 'Lowercase', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
      },
      { id: 'maxLen', label: 'Max length (0 = unlimited)', type: 'number', default: 0, min: 0, max: 500, step: 1 }
    ],
    actionText: 'Generate Slug',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const text = H.needText(v.text, 'a title or phrase');
      const sep = v.separator === '_' ? '_' : '-';
      const maxLen = Math.max(0, Math.floor(H.num(v.maxLen) || 0));
      let s = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ');
      if (v.lower !== 'no') s = s.toLowerCase();
      s = s.replace(/[^a-zA-Z0-9]+/g, sep);
      const trimEdges = (x) => {
        while (x.startsWith(sep)) x = x.slice(1);
        while (x.endsWith(sep)) x = x.slice(0, -1);
        return x;
      };
      s = trimEdges(s);
      if (maxLen > 0 && s.length > maxLen) s = trimEdges(s.slice(0, maxLen));
      if (!s) throw new Error('No valid slug characters were found. Use letters or numbers.');
      return s;
    }
  },

  {
    id: 'sort-lines',
    title: 'Sort Lines Alphabetically',
    category: CAT.TEXT,
    icon: 'fa-solid fa-arrow-down-a-z',
    desc: 'Sort a list of lines A-Z, Z-A, by length, by number, or shuffle them randomly.',
    keywords: ['alphabetical order', 'sort list', 'sort text', 'shuffle lines'],
    inputs: [
      { id: 'text', label: 'Lines of text', type: 'textarea', rows: 10, placeholder: 'One item per line...', required: true },
      {
        id: 'order', label: 'Sort order', type: 'select', default: 'az',
        options: [
          { value: 'az', label: 'A → Z' },
          { value: 'za', label: 'Z → A' },
          { value: 'shortest', label: 'Shortest first' },
          { value: 'longest', label: 'Longest first' },
          { value: 'numeric', label: 'Numeric (by leading number)' },
          { value: 'random', label: 'Random shuffle' }
        ]
      },
      {
        id: 'removeEmpty', label: 'Remove empty lines', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
      }
    ],
    actionText: 'Sort Lines',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some lines of text');
      let lines = text.split(/\r?\n/);
      if (v.removeEmpty !== 'no') lines = lines.filter((l) => l.trim() !== '');
      const coll = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
      switch (v.order) {
        case 'za':
          lines.sort((a, b) => coll.compare(b, a));
          break;
        case 'shortest':
          lines.sort((a, b) => a.length - b.length || coll.compare(a, b));
          break;
        case 'longest':
          lines.sort((a, b) => b.length - a.length || coll.compare(a, b));
          break;
        case 'numeric':
          lines.sort((a, b) => {
            const x = parseFloat(a), y = parseFloat(b);
            const nx = Number.isNaN(x), ny = Number.isNaN(y);
            if (nx && ny) return coll.compare(a, b);
            if (nx) return 1;
            if (ny) return -1;
            return x - y;
          });
          break;
        case 'random':
          TOOL_HELPERS.shuffle(lines);
          break;
        default:
          lines.sort(coll.compare);
      }
      return lines.join('\n');
    }
  },

  {
    id: 'lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator',
    category: CAT.TEXT,
    icon: 'fa-solid fa-paragraph',
    desc: 'Generate placeholder paragraphs, sentences or words for mockups and designs.',
    keywords: ['dummy text', 'placeholder text', 'filler text', 'lipsum'],
    inputs: [
      {
        id: 'type', label: 'Generate', type: 'select', default: 'paragraphs',
        options: [{ value: 'paragraphs', label: 'Paragraphs' }, { value: 'sentences', label: 'Sentences' }, { value: 'words', label: 'Words' }]
      },
      { id: 'count', label: 'Amount', type: 'number', default: 3, min: 1, max: 5000, step: 1, required: true },
      {
        id: 'startLorem', label: 'Start with "Lorem ipsum dolor sit amet"', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]
      }
    ],
    actionText: 'Generate Text',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const WORDS = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo ' +
        'consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint ' +
        'occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum').split(' ');
      const START_SENTENCE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      const rnd = (n) => Math.floor(Math.random() * n);

      const sentence = () => {
        const n = 8 + rnd(9);
        const picked = [];
        let last = '';
        for (let i = 0; i < n; i++) {
          let w;
          do { w = WORDS[rnd(WORDS.length)]; } while (w === last);
          picked.push(w);
          last = w;
        }
        if (n > 10) picked[3 + rnd(4)] += ',';
        const s = picked.join(' ');
        return s.charAt(0).toUpperCase() + s.slice(1) + '.';
      };
      const paragraph = () => {
        const n = 4 + rnd(4);
        return Array.from({ length: n }, sentence).join(' ');
      };

      const type = v.type || 'paragraphs';
      const max = type === 'paragraphs' ? 50 : type === 'sentences' ? 200 : 5000;
      const count = Math.floor(H.needNum(v.count, 'Amount', { min: 1, max }));
      const startLorem = v.startLorem !== 'no';
      let text;

      if (type === 'words') {
        const out = [];
        for (let i = 0; i < count; i++) {
          out.push(startLorem && i < 8 ? WORDS[i] : WORDS[rnd(WORDS.length)]);
        }
        text = out.join(' ');
      } else if (type === 'sentences') {
        const out = Array.from({ length: count }, sentence);
        if (startLorem) out[0] = START_SENTENCE;
        text = out.join(' ');
      } else {
        const out = Array.from({ length: count }, paragraph);
        if (startLorem) out[0] = START_SENTENCE + ' ' + Array.from({ length: 3 + rnd(3) }, sentence).join(' ');
        text = out.join('\n\n');
      }
      return { text, stats: [{ label: 'Words', value: String((text.match(/\S+/g) || []).length) }, { label: 'Characters', value: String(text.length) }] };
    }
  },

  /* =======================================================================
   * DEVELOPER TOOLS
   * ===================================================================== */
  {
    id: 'base64-encode-decode',
    title: 'Base64 Encode / Decode',
    category: CAT.DEV,
    icon: 'fa-solid fa-code',
    desc: 'Encode text to Base64 or decode Base64 back to readable text, with full UTF-8 support.',
    keywords: ['base64', 'encode', 'decode', 'btoa', 'atob'],
    inputs: [
      { id: 'text', label: 'Input', type: 'textarea', rows: 8, placeholder: 'Enter text or a Base64 string...', required: true },
      {
        id: 'mode', label: 'Action', type: 'select', default: 'encode',
        options: [{ value: 'encode', label: 'Encode to Base64' }, { value: 'decode', label: 'Decode from Base64' }]
      },
      {
        id: 'variant', label: 'Encoding variant', type: 'select', default: 'standard',
        options: [{ value: 'standard', label: 'Standard (+ / =)' }, { value: 'url', label: 'URL-safe (- _ no padding)' }],
        help: 'Only used when encoding. Decoding accepts both variants.'
      }
    ],
    actionText: 'Run',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some input');
      if (v.mode === 'decode') {
        let s = text.trim().replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
        if (!/^[A-Za-z0-9+/]*={0,2}$/.test(s)) throw new Error('Invalid Base64 input. It contains characters that are not allowed.');
        while (s.length % 4) s += '=';
        let bin;
        try { bin = atob(s); } catch (e) { throw new Error('Invalid Base64 input.'); }
        const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
        try {
          return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
        } catch (e) {
          throw new Error('The decoded data is not valid UTF-8 text (it may be binary data such as an image).');
        }
      }
      const bytes = TOOL_HELPERS.utf8(text);
      let bin = '';
      for (let i = 0; i < bytes.length; i += 0x8000) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
      }
      let out = btoa(bin);
      if (v.variant === 'url') out = out.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      return out;
    }
  },

  {
    id: 'url-encoder-decoder',
    title: 'URL Encoder / Decoder',
    category: CAT.DEV,
    icon: 'fa-solid fa-globe',
    desc: 'Percent-encode or decode URLs and query-string values safely.',
    keywords: ['percent encoding', 'encodeURIComponent', 'decodeURI', 'url escape'],
    inputs: [
      { id: 'text', label: 'Input', type: 'textarea', rows: 6, placeholder: 'Enter a URL or text...', required: true },
      {
        id: 'mode', label: 'Action', type: 'select', default: 'encodeComponent',
        options: [
          { value: 'encodeComponent', label: 'Encode component (query values)' },
          { value: 'decodeComponent', label: 'Decode component' },
          { value: 'encodeUri', label: 'Encode full URL (keeps : / ? & =)' },
          { value: 'decodeUri', label: 'Decode full URL' }
        ]
      }
    ],
    actionText: 'Run',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some input');
      try {
        switch (v.mode) {
          case 'decodeComponent': return decodeURIComponent(text);
          case 'encodeUri': return encodeURI(text);
          case 'decodeUri': return decodeURI(text);
          default: return encodeURIComponent(text);
        }
      } catch (e) {
        throw new Error('Malformed input: the text contains an invalid percent-encoded or Unicode sequence.');
      }
    }
  },

  {
    id: 'json-formatter-validator',
    title: 'JSON Formatter & Validator',
    category: CAT.DEV,
    icon: 'fa-solid fa-file-code',
    desc: 'Beautify, minify and validate JSON data instantly, with clear error messages.',
    keywords: ['json beautifier', 'json minify', 'json lint', 'pretty print json'],
    inputs: [
      { id: 'text', label: 'JSON input', type: 'textarea', rows: 12, placeholder: '{"name":"QuickToolHub","tools":500}', required: true },
      {
        id: 'action', label: 'Action', type: 'select', default: 'beautify',
        options: [{ value: 'beautify', label: 'Beautify' }, { value: 'minify', label: 'Minify' }, { value: 'validate', label: 'Validate only' }]
      },
      {
        id: 'indent', label: 'Indentation (beautify)', type: 'select', default: '2',
        options: [{ value: '2', label: '2 spaces' }, { value: '4', label: '4 spaces' }, { value: 'tab', label: 'Tab' }]
      },
      {
        id: 'sortKeys', label: 'Sort object keys A-Z', type: 'select', default: 'no',
        options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]
      }
    ],
    actionText: 'Process JSON',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const text = H.needText(v.text, 'some JSON');
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error('Invalid JSON: ' + e.message);
      }
      const sortDeep = (x) => {
        if (Array.isArray(x)) return x.map(sortDeep);
        if (x && typeof x === 'object') {
          const o = {};
          Object.keys(x).sort().forEach((k) => { o[k] = sortDeep(x[k]); });
          return o;
        }
        return x;
      };
      const depth = (x) => {
        if (Array.isArray(x)) return 1 + x.reduce((m, i) => Math.max(m, depth(i)), 0);
        if (x && typeof x === 'object') return 1 + Object.values(x).reduce((m, i) => Math.max(m, depth(i)), 0);
        return 0;
      };
      if (v.sortKeys === 'yes') data = sortDeep(data);

      const type = data === null ? 'null' : Array.isArray(data) ? 'array' : typeof data;
      const size = Array.isArray(data) ? data.length + ' items' : (data && typeof data === 'object') ? Object.keys(data).length + ' keys' : 'n/a';

      if (v.action === 'validate') {
        return {
          text: '✔ Valid JSON',
          stats: [
            { label: 'Root type', value: type },
            { label: 'Top-level size', value: size },
            { label: 'Nesting depth', value: String(depth(data)) },
            { label: 'Input size', value: H.fmtBytes(H.byteLength(text)) }
          ]
        };
      }
      const indent = v.indent === 'tab' ? '\t' : Number(v.indent) || 2;
      const out = v.action === 'minify' ? JSON.stringify(data) : JSON.stringify(data, null, indent);
      return {
        text: out,
        stats: [
          { label: 'Root type', value: type },
          { label: 'Input size', value: H.fmtBytes(H.byteLength(text)) },
          { label: 'Output size', value: H.fmtBytes(H.byteLength(out)) }
        ]
      };
    }
  },

  {
    id: 'html-entity-encoder-decoder',
    title: 'HTML Entity Encoder / Decoder',
    category: CAT.DEV,
    icon: 'fa-brands fa-html5',
    desc: 'Escape special characters to HTML entities or decode entities back to plain text.',
    keywords: ['html escape', 'html unescape', 'htmlspecialchars', 'entities'],
    inputs: [
      { id: 'text', label: 'Input', type: 'textarea', rows: 8, placeholder: '<p class="intro">Tom & Jerry</p>', required: true },
      {
        id: 'mode', label: 'Action', type: 'select', default: 'encode',
        options: [{ value: 'encode', label: 'Encode to entities' }, { value: 'decode', label: 'Decode entities' }]
      },
      {
        id: 'nonAscii', label: 'Also encode non-ASCII characters (encode only)', type: 'select', default: 'no',
        options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes (as &#NNN;)' }]
      }
    ],
    actionText: 'Run',
    execute: (v) => {
      const text = TOOL_HELPERS.needText(v.text, 'some input');
      if (v.mode === 'decode') {
        const NAMED = {
          amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00A0', copy: '©', reg: '®', trade: '™',
          hellip: '…', mdash: '—', ndash: '–', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', euro: '€',
          pound: '£', yen: '¥', cent: '¢', deg: '°', times: '×', divide: '÷', laquo: '«', raquo: '»',
          bull: '•', middot: '·', para: '¶', sect: '§', plusmn: '±', frac12: '½', frac14: '¼', frac34: '¾'
        };
        return text.replace(/&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|([A-Za-z][A-Za-z0-9]*));/g, (m, dec, hex, name) => {
          if (dec !== undefined || hex !== undefined) {
            const cp = dec !== undefined ? parseInt(dec, 10) : parseInt(hex, 16);
            return cp > 0 && cp <= 0x10ffff ? String.fromCodePoint(cp) : m;
          }
          if (Object.prototype.hasOwnProperty.call(NAMED, name)) return NAMED[name];
          if (typeof document !== 'undefined') {
            const t = document.createElement('textarea');
            t.innerHTML = m;
            return t.value;
          }
          return m;
        });
      }
      let out = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
      if (v.nonAscii === 'yes') out = out.replace(/[^\x00-\x7F]/gu, (ch) => '&#' + ch.codePointAt(0) + ';');
      return out;
    }
  },

  {
    id: 'css-minifier',
    title: 'CSS Minifier',
    category: CAT.DEV,
    icon: 'fa-brands fa-css3-alt',
    desc: 'Compress CSS by removing comments, whitespace and redundant characters to speed up your site.',
    keywords: ['minify css', 'compress css', 'css optimizer', 'reduce css size'],
    inputs: [
      {
        id: 'text', label: 'CSS code', type: 'textarea', rows: 12, required: true,
        placeholder: '/* Example */\nbody {\n  margin: 0;\n  padding: 0;\n}'
      }
    ],
    actionText: 'Minify CSS',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const src = H.needText(v.text, 'some CSS');
      const strings = [];
      let css = src.replace(/("(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*')/g, (m) => {
        strings.push(m);
        return '\u0000' + (strings.length - 1) + '\u0000';
      });
      css = css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{};,>])\s*/g, '$1')
        .replace(/:\s+/g, ':')
        .replace(/;}/g, '}')
        .trim();
      css = css.replace(/\u0000(\d+)\u0000/g, (m, i) => strings[Number(i)]);
      const before = H.byteLength(src);
      const after = H.byteLength(css);
      const saved = before > 0 ? ((before - after) / before) * 100 : 0;
      return {
        text: css,
        stats: [
          { label: 'Original size', value: H.fmtBytes(before) },
          { label: 'Minified size', value: H.fmtBytes(after) },
          { label: 'Saved', value: saved.toFixed(1) + '%' }
        ]
      };
    }
  },

  {
    id: 'uuid-generator',
    title: 'UUID Generator',
    category: CAT.DEV,
    icon: 'fa-solid fa-fingerprint',
    desc: 'Generate random version 4 UUIDs (GUIDs) in bulk using a cryptographically secure source.',
    keywords: ['guid generator', 'uuid v4', 'random id', 'unique identifier'],
    inputs: [
      { id: 'count', label: 'How many UUIDs?', type: 'number', default: 5, min: 1, max: 100, step: 1, required: true },
      {
        id: 'letterCase', label: 'Letter case', type: 'select', default: 'lower',
        options: [{ value: 'lower', label: 'lowercase' }, { value: 'upper', label: 'UPPERCASE' }]
      },
      {
        id: 'hyphens', label: 'Format', type: 'select', default: 'yes',
        options: [{ value: 'yes', label: 'With hyphens' }, { value: 'no', label: 'Without hyphens' }]
      }
    ],
    actionText: 'Generate UUIDs',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const count = Math.floor(H.needNum(v.count, 'How many UUIDs?', { min: 1, max: 100 }));
      const list = [];
      for (let i = 0; i < count; i++) {
        const b = H.randomBytes(16);
        b[6] = (b[6] & 0x0f) | 0x40;
        b[8] = (b[8] & 0x3f) | 0x80;
        const h = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
        let id = h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
        if (v.hyphens === 'no') id = id.replace(/-/g, '');
        if (v.letterCase === 'upper') id = id.toUpperCase();
        list.push(id);
      }
      return list.join('\n');
    }
  },

  /* =======================================================================
   * MATH & FINANCE
   * ===================================================================== */
  {
    id: 'percentage-calculator',
    title: 'Percentage Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-percent',
    desc: 'Find a percentage of a number, percentage change, and percentage increase or decrease.',
    keywords: ['percent', 'percentage change', 'percentage increase', 'percentage of'],
    inputs: [
      {
        id: 'mode', label: 'Calculation', type: 'select', default: 'of',
        options: [
          { value: 'of', label: 'What is X% of Y?' },
          { value: 'is', label: 'X is what percent of Y?' },
          { value: 'change', label: 'Percentage change from X to Y' },
          { value: 'increase', label: 'Increase Y by X%' },
          { value: 'decrease', label: 'Decrease Y by X%' }
        ]
      },
      { id: 'a', label: 'Value X', type: 'number', placeholder: 'e.g. 20', step: 'any', required: true },
      { id: 'b', label: 'Value Y', type: 'number', placeholder: 'e.g. 150', step: 'any', required: true }
    ],
    actionText: 'Calculate',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const a = H.needNum(v.a, 'Value X');
      const b = H.needNum(v.b, 'Value Y');
      let text, formula;
      switch (v.mode) {
        case 'is': {
          if (b === 0) throw new Error('Value Y cannot be zero.');
          const r = (a / b) * 100;
          text = H.fmt(a) + ' is ' + H.fmt(r) + '% of ' + H.fmt(b);
          formula = '(' + H.fmt(a) + ' ÷ ' + H.fmt(b) + ') × 100 = ' + H.fmt(r) + '%';
          break;
        }
        case 'change': {
          if (a === 0) throw new Error('The starting value (X) cannot be zero.');
          const r = ((b - a) / Math.abs(a)) * 100;
          text = H.fmt(Math.abs(r)) + '% ' + (r >= 0 ? 'increase' : 'decrease') + ' from ' + H.fmt(a) + ' to ' + H.fmt(b);
          formula = '((' + H.fmt(b) + ' − ' + H.fmt(a) + ') ÷ |' + H.fmt(a) + '|) × 100 = ' + H.fmt(r) + '%';
          break;
        }
        case 'increase': {
          const r = b * (1 + a / 100);
          text = H.fmt(b) + ' increased by ' + H.fmt(a) + '% = ' + H.fmt(r);
          formula = H.fmt(b) + ' × (1 + ' + H.fmt(a) + ' ÷ 100) = ' + H.fmt(r);
          break;
        }
        case 'decrease': {
          const r = b * (1 - a / 100);
          text = H.fmt(b) + ' decreased by ' + H.fmt(a) + '% = ' + H.fmt(r);
          formula = H.fmt(b) + ' × (1 − ' + H.fmt(a) + ' ÷ 100) = ' + H.fmt(r);
          break;
        }
        default: {
          const r = (a / 100) * b;
          text = H.fmt(a) + '% of ' + H.fmt(b) + ' = ' + H.fmt(r);
          formula = '(' + H.fmt(a) + ' ÷ 100) × ' + H.fmt(b) + ' = ' + H.fmt(r);
        }
      }
      return { text, stats: [{ label: 'Formula', value: formula }] };
    }
  },

  {
    id: 'discount-calculator',
    title: 'Discount Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-tags',
    desc: 'Work out the sale price, the amount you save and the final cost after tax.',
    keywords: ['sale price', 'percent off', 'savings calculator', 'price after discount'],
    inputs: [
      { id: 'price', label: 'Original price', type: 'number', placeholder: 'e.g. 1999', min: 0, step: 'any', required: true },
      { id: 'discount', label: 'Discount (%)', type: 'number', placeholder: 'e.g. 25', min: 0, max: 100, step: 'any', required: true },
      { id: 'tax', label: 'Tax / GST (%) - optional', type: 'number', default: 0, min: 0, step: 'any' }
    ],
    actionText: 'Calculate Discount',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const price = H.needNum(v.price, 'Original price', { min: 0 });
      const disc = H.needNum(v.discount, 'Discount (%)', { min: 0, max: 100 });
      const taxRate = H.num(v.tax);
      const tax = Number.isFinite(taxRate) ? Math.max(0, taxRate) : 0;
      const saved = (price * disc) / 100;
      const after = price - saved;
      const taxAmt = (after * tax) / 100;
      const total = after + taxAmt;
      return {
        text: 'Final price: ' + H.money(total),
        stats: [
          { label: 'Original price', value: H.money(price) },
          { label: 'You save (' + H.fmt(disc) + '%)', value: H.money(saved) },
          { label: 'Price after discount', value: H.money(after) },
          { label: 'Tax (' + H.fmt(tax) + '%)', value: H.money(taxAmt) },
          { label: 'Final price', value: H.money(total) }
        ]
      };
    }
  },

  {
    id: 'simple-interest-calculator',
    title: 'Simple Interest Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-coins',
    desc: 'Calculate simple interest and the total amount for a principal, rate and time period.',
    keywords: ['interest calculator', 'SI formula', 'loan interest', 'principal rate time'],
    inputs: [
      { id: 'principal', label: 'Principal amount', type: 'number', placeholder: 'e.g. 50000', min: 0, step: 'any', required: true },
      { id: 'rate', label: 'Annual interest rate (%)', type: 'number', placeholder: 'e.g. 7.5', min: 0, step: 'any', required: true },
      { id: 'time', label: 'Time period', type: 'number', placeholder: 'e.g. 3', min: 0, step: 'any', required: true },
      {
        id: 'unit', label: 'Time unit', type: 'select', default: 'years',
        options: [{ value: 'years', label: 'Years' }, { value: 'months', label: 'Months' }, { value: 'days', label: 'Days' }]
      }
    ],
    actionText: 'Calculate Interest',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const p = H.needNum(v.principal, 'Principal amount', { min: 0 });
      const r = H.needNum(v.rate, 'Annual interest rate (%)', { min: 0 });
      const t = H.needNum(v.time, 'Time period', { min: 0 });
      const years = v.unit === 'months' ? t / 12 : v.unit === 'days' ? t / 365 : t;
      const interest = (p * r * years) / 100;
      return {
        text: 'Simple interest: ' + H.money(interest),
        stats: [
          { label: 'Principal', value: H.money(p) },
          { label: 'Rate', value: H.fmt(r) + '% per year' },
          { label: 'Time', value: H.fmt(years, 4) + ' years' },
          { label: 'Interest earned', value: H.money(interest) },
          { label: 'Total amount', value: H.money(p + interest) },
          { label: 'Formula', value: 'SI = (P × R × T) ÷ 100' }
        ]
      };
    }
  },

  {
    id: 'average-calculator',
    title: 'Average Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-calculator',
    desc: 'Find the mean, median, mode, sum, minimum, maximum and range of a list of numbers.',
    keywords: ['mean', 'median', 'mode', 'statistics calculator', 'arithmetic mean'],
    inputs: [
      {
        id: 'numbers', label: 'Numbers (separated by commas, spaces or new lines)', type: 'textarea', rows: 6,
        placeholder: 'e.g. 12, 15, 9, 22, 15', required: true
      }
    ],
    actionText: 'Calculate Average',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const raw = H.needText(v.numbers, 'some numbers');
      const tokens = raw.split(/[\s,;]+/).filter((t) => t !== '');
      const nums = tokens.map((t) => {
        const n = Number(t);
        if (!Number.isFinite(n)) throw new Error('"' + t + '" is not a valid number.');
        return n;
      });
      if (nums.length === 0) throw new Error('Please enter at least one number.');
      const sum = nums.reduce((a, b) => a + b, 0);
      const sorted = nums.slice().sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
      const counts = new Map();
      nums.forEach((n) => counts.set(n, (counts.get(n) || 0) + 1));
      const maxCount = Math.max.apply(null, Array.from(counts.values()));
      const modes = maxCount > 1 ? Array.from(counts.keys()).filter((k) => counts.get(k) === maxCount).sort((a, b) => a - b) : [];
      const mean = sum / nums.length;
      return {
        text: 'Average (mean): ' + H.fmt(mean, 8),
        stats: [
          { label: 'Count', value: String(nums.length) },
          { label: 'Sum', value: H.fmt(sum, 8) },
          { label: 'Mean (average)', value: H.fmt(mean, 8) },
          { label: 'Median', value: H.fmt(median, 8) },
          { label: 'Mode', value: modes.length ? modes.map((m) => H.fmt(m, 8)).join(', ') : 'None (all values unique)' },
          { label: 'Minimum', value: H.fmt(sorted[0], 8) },
          { label: 'Maximum', value: H.fmt(sorted[sorted.length - 1], 8) },
          { label: 'Range', value: H.fmt(sorted[sorted.length - 1] - sorted[0], 8) }
        ]
      };
    }
  },

  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-weight-scale',
    desc: 'Calculate your Body Mass Index and see your WHO weight category and healthy weight range.',
    keywords: ['body mass index', 'healthy weight', 'weight calculator', 'bmi chart'],
    inputs: [
      {
        id: 'units', label: 'Unit system', type: 'select', default: 'metric',
        options: [{ value: 'metric', label: 'Metric (kg, cm)' }, { value: 'imperial', label: 'Imperial (lb, inches)' }]
      },
      { id: 'weight', label: 'Weight (kg or lb)', type: 'number', placeholder: 'e.g. 70', min: 0, step: 'any', required: true },
      { id: 'height', label: 'Height (cm or inches)', type: 'number', placeholder: 'e.g. 175', min: 0, step: 'any', required: true }
    ],
    actionText: 'Calculate BMI',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const imperial = v.units === 'imperial';
      const weight = H.needNum(v.weight, 'Weight', { positive: true });
      const height = H.needNum(v.height, 'Height', { positive: true });
      const kg = imperial ? weight * 0.45359237 : weight;
      const m = imperial ? height * 0.0254 : height / 100;
      if (m < 0.5 || m > 2.8) throw new Error('Please enter a realistic height.');
      const bmi = kg / (m * m);
      let category;
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal weight';
      else if (bmi < 30) category = 'Overweight';
      else if (bmi < 35) category = 'Obese (Class I)';
      else if (bmi < 40) category = 'Obese (Class II)';
      else category = 'Obese (Class III)';
      const lowKg = 18.5 * m * m;
      const highKg = 24.9 * m * m;
      const range = imperial
        ? H.fmt(lowKg / 0.45359237, 1) + ' – ' + H.fmt(highKg / 0.45359237, 1) + ' lb'
        : H.fmt(lowKg, 1) + ' – ' + H.fmt(highKg, 1) + ' kg';
      return {
        text: 'Your BMI is ' + bmi.toFixed(1) + ' (' + category + ')',
        stats: [
          { label: 'BMI', value: bmi.toFixed(1) },
          { label: 'Category (WHO)', value: category },
          { label: 'Healthy weight range for your height', value: range }
        ],
        note: 'BMI is a general screening tool and does not account for muscle mass, age or body composition. It is not medical advice.'
      };
    }
  },

  {
    id: 'age-calculator',
    title: 'Age Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-cake-candles',
    desc: 'Find your exact age in years, months and days, plus total days lived and your next birthday.',
    keywords: ['date of birth', 'how old am i', 'birthday calculator', 'age in days'],
    inputs: [
      { id: 'dob', label: 'Date of birth', type: 'date', required: true },
      { id: 'asOf', label: 'Age at date (leave empty for today)', type: 'date' }
    ],
    actionText: 'Calculate Age',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const parse = (s) => {
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || '').trim());
        if (!m) return null;
        const y = +m[1], mo = +m[2], d = +m[3];
        const dt = new Date(Date.UTC(y, mo - 1, d));
        if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
        return { y, m: mo, d };
      };
      const utc = (o) => Date.UTC(o.y, o.m - 1, o.d);
      const dim = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate(); // m is 1-12
      const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
      const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const b = parse(v.dob);
      if (!b) throw new Error('Please enter a valid date of birth.');
      let t;
      if (v.asOf && String(v.asOf).trim() !== '') {
        t = parse(v.asOf);
        if (!t) throw new Error('Please enter a valid "age at" date.');
      } else {
        const now = new Date();
        t = { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
      }
      if (utc(b) > utc(t)) throw new Error('The date of birth must be before the "age at" date.');

      let years = t.y - b.y;
      let months = t.m - b.m;
      let days = t.d - b.d;
      if (days < 0) {
        months--;
        const pm = t.m === 1 ? { y: t.y - 1, m: 12 } : { y: t.y, m: t.m - 1 };
        days += dim(pm.y, pm.m);
      }
      if (months < 0) { years--; months += 12; }

      const totalDays = Math.round((utc(t) - utc(b)) / 86400000);
      const birthdayIn = (year) => (b.m === 2 && b.d === 29 && !isLeap(year) ? { y: year, m: 3, d: 1 } : { y: year, m: b.m, d: b.d });
      let next = birthdayIn(t.y);
      if (utc(next) < utc(t)) next = birthdayIn(t.y + 1);
      const untilNext = Math.round((utc(next) - utc(t)) / 86400000);
      const nextDate = new Date(utc(next));
      const bornDate = new Date(utc(b));

      return {
        text: 'Age: ' + years + ' years, ' + months + ' months, ' + days + ' days',
        stats: [
          { label: 'Years', value: String(years) },
          { label: 'Total months', value: H.fmt(years * 12 + months) },
          { label: 'Total weeks', value: H.fmt(Math.floor(totalDays / 7)) + ' weeks, ' + (totalDays % 7) + ' days' },
          { label: 'Total days', value: H.fmt(totalDays) },
          { label: 'Total hours', value: H.fmt(totalDays * 24) },
          { label: 'Born on a', value: DAYS[bornDate.getUTCDay()] },
          {
            label: 'Next birthday',
            value: (untilNext === 0 ? 'Today! 🎉' : 'in ' + untilNext + ' days') + ' (' + DAYS[nextDate.getUTCDay()] + ', ' + next.d + ' ' + MONTHS[next.m - 1] + ' ' + next.y + ')'
          }
        ]
      };
    }
  },

  {
    id: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-chart-line',
    desc: 'See how your savings or investment grows with compound interest over time.',
    keywords: ['investment growth', 'compounding', 'future value', 'savings calculator'],
    inputs: [
      { id: 'principal', label: 'Initial amount', type: 'number', placeholder: 'e.g. 100000', min: 0, step: 'any', required: true },
      { id: 'rate', label: 'Annual interest rate (%)', type: 'number', placeholder: 'e.g. 8', min: 0, step: 'any', required: true },
      { id: 'years', label: 'Time (years)', type: 'number', placeholder: 'e.g. 10', min: 0, step: 'any', required: true },
      {
        id: 'freq', label: 'Compounding frequency', type: 'select', default: '12',
        options: [
          { value: '1', label: 'Yearly' },
          { value: '2', label: 'Half-yearly' },
          { value: '4', label: 'Quarterly' },
          { value: '12', label: 'Monthly' },
          { value: '365', label: 'Daily' }
        ]
      }
    ],
    actionText: 'Calculate Growth',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const p = H.needNum(v.principal, 'Initial amount', { min: 0 });
      const rate = H.needNum(v.rate, 'Annual interest rate (%)', { min: 0 });
      const years = H.needNum(v.years, 'Time (years)', { min: 0 });
      const n = Number(v.freq) || 12;
      const r = rate / 100;
      const amount = p * Math.pow(1 + r / n, n * years);
      const effective = (Math.pow(1 + r / n, n) - 1) * 100;
      return {
        text: 'Final amount: ' + H.money(amount),
        stats: [
          { label: 'Initial amount', value: H.money(p) },
          { label: 'Interest earned', value: H.money(amount - p) },
          { label: 'Final amount', value: H.money(amount) },
          { label: 'Effective annual rate', value: effective.toFixed(3) + '%' },
          { label: 'Formula', value: 'A = P × (1 + r/n)^(n×t)' }
        ]
      };
    }
  },

  {
    id: 'emi-calculator',
    title: 'EMI Loan Calculator',
    category: CAT.MATH,
    icon: 'fa-solid fa-building-columns',
    desc: 'Calculate your monthly EMI, total interest and total repayment for any loan.',
    keywords: ['loan calculator', 'home loan emi', 'car loan', 'monthly installment'],
    inputs: [
      { id: 'amount', label: 'Loan amount', type: 'number', placeholder: 'e.g. 2500000', min: 0, step: 'any', required: true },
      { id: 'rate', label: 'Annual interest rate (%)', type: 'number', placeholder: 'e.g. 8.5', min: 0, step: 'any', required: true },
      { id: 'tenure', label: 'Loan tenure', type: 'number', placeholder: 'e.g. 20', min: 0, step: 'any', required: true },
      {
        id: 'unit', label: 'Tenure unit', type: 'select', default: 'years',
        options: [{ value: 'years', label: 'Years' }, { value: 'months', label: 'Months' }]
      }
    ],
    actionText: 'Calculate EMI',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const principal = H.needNum(v.amount, 'Loan amount', { positive: true });
      const rate = H.needNum(v.rate, 'Annual interest rate (%)', { min: 0 });
      const tenure = H.needNum(v.tenure, 'Loan tenure', { positive: true });
      const n = Math.round(v.unit === 'months' ? tenure : tenure * 12);
      if (n < 1) throw new Error('Loan tenure must be at least 1 month.');
      const r = rate / 12 / 100;
      const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      return {
        text: 'Monthly EMI: ' + H.money(emi),
        stats: [
          { label: 'Monthly EMI', value: H.money(emi) },
          { label: 'Number of payments', value: String(n) },
          { label: 'Total interest', value: H.money(total - principal) },
          { label: 'Total payment', value: H.money(total) },
          { label: 'Interest share of total', value: ((total - principal) / total * 100).toFixed(1) + '%' }
        ]
      };
    }
  },

  /* =======================================================================
   * CONVERTERS
   * ===================================================================== */
  makeUnitConverter({
    id: 'length-converter',
    title: 'Length Converter',
    icon: 'fa-solid fa-ruler',
    desc: 'Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards and miles.',
    keywords: ['meters to feet', 'km to miles', 'inches to cm', 'distance converter'],
    defaultFrom: 2,
    defaultTo: 5,
    units: [
      { key: 'mm', label: 'Millimeter (mm)', symbol: 'mm', factor: 0.001 },
      { key: 'cm', label: 'Centimeter (cm)', symbol: 'cm', factor: 0.01 },
      { key: 'm', label: 'Meter (m)', symbol: 'm', factor: 1 },
      { key: 'km', label: 'Kilometer (km)', symbol: 'km', factor: 1000 },
      { key: 'in', label: 'Inch (in)', symbol: 'in', factor: 0.0254 },
      { key: 'ft', label: 'Foot (ft)', symbol: 'ft', factor: 0.3048 },
      { key: 'yd', label: 'Yard (yd)', symbol: 'yd', factor: 0.9144 },
      { key: 'mi', label: 'Mile (mi)', symbol: 'mi', factor: 1609.344 },
      { key: 'nmi', label: 'Nautical mile (nmi)', symbol: 'nmi', factor: 1852 }
    ]
  }),

  makeUnitConverter({
    id: 'weight-converter',
    title: 'Weight Converter',
    icon: 'fa-solid fa-weight-hanging',
    desc: 'Convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stones.',
    keywords: ['kg to lb', 'pounds to kg', 'mass converter', 'grams to ounces'],
    defaultFrom: 2,
    defaultTo: 5,
    units: [
      { key: 'mg', label: 'Milligram (mg)', symbol: 'mg', factor: 0.000001 },
      { key: 'g', label: 'Gram (g)', symbol: 'g', factor: 0.001 },
      { key: 'kg', label: 'Kilogram (kg)', symbol: 'kg', factor: 1 },
      { key: 't', label: 'Metric tonne (t)', symbol: 't', factor: 1000 },
      { key: 'oz', label: 'Ounce (oz)', symbol: 'oz', factor: 0.028349523125 },
      { key: 'lb', label: 'Pound (lb)', symbol: 'lb', factor: 0.45359237 },
      { key: 'st', label: 'Stone (st)', symbol: 'st', factor: 6.35029318 }
    ]
  }),

  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    category: CAT.CONV,
    icon: 'fa-solid fa-temperature-half',
    desc: 'Convert between Celsius, Fahrenheit and Kelvin instantly.',
    keywords: ['celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin', 'temp converter'],
    inputs: [
      { id: 'value', label: 'Temperature', type: 'number', default: 25, step: 'any', required: true },
      {
        id: 'from', label: 'From', type: 'select', default: 'c',
        options: [{ value: 'c', label: 'Celsius (°C)' }, { value: 'f', label: 'Fahrenheit (°F)' }, { value: 'k', label: 'Kelvin (K)' }]
      },
      {
        id: 'to', label: 'To', type: 'select', default: 'f',
        options: [{ value: 'c', label: 'Celsius (°C)' }, { value: 'f', label: 'Fahrenheit (°F)' }, { value: 'k', label: 'Kelvin (K)' }]
      }
    ],
    actionText: 'Convert',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const value = H.needNum(v.value, 'Temperature');
      const toC = { c: (x) => x, f: (x) => ((x - 32) * 5) / 9, k: (x) => x - 273.15 };
      const fromC = { c: (x) => x, f: (x) => (x * 9) / 5 + 32, k: (x) => x + 273.15 };
      const SYM = { c: '°C', f: '°F', k: 'K' };
      const NAME = { c: 'Celsius', f: 'Fahrenheit', k: 'Kelvin' };
      if (!toC[v.from] || !toC[v.to]) throw new Error('Please choose both units.');
      const celsius = toC[v.from](value);
      if (celsius < -273.15 - 1e-9) throw new Error('That temperature is below absolute zero.');
      const result = fromC[v.to](celsius);
      return {
        text: H.fmtSig(value) + ' ' + SYM[v.from] + ' = ' + H.fmtSig(result) + ' ' + SYM[v.to],
        stats: Object.keys(NAME).filter((k) => k !== v.from).map((k) => ({
          label: NAME[k], value: H.fmtSig(fromC[k](celsius)) + ' ' + SYM[k]
        }))
      };
    }
  },

  makeUnitConverter({
    id: 'data-storage-converter',
    title: 'Data Storage Converter',
    icon: 'fa-solid fa-hard-drive',
    desc: 'Convert bits, bytes, KB, MB, GB, TB and PB using binary (1024) or decimal (1000) standards.',
    keywords: ['mb to gb', 'gb to tb', 'bytes converter', 'kilobytes to megabytes', 'file size converter'],
    defaultFrom: 3,
    defaultTo: 4,
    units: [
      { key: 'bit', label: 'Bit (b)', symbol: 'bit', factor: 0.125 },
      { key: 'B', label: 'Byte (B)', symbol: 'B', factor: 1 },
      { key: 'KB', label: 'Kilobyte (KB)', symbol: 'KB', factor: 1024 },
      { key: 'MB', label: 'Megabyte (MB)', symbol: 'MB', factor: Math.pow(1024, 2) },
      { key: 'GB', label: 'Gigabyte (GB)', symbol: 'GB', factor: Math.pow(1024, 3) },
      { key: 'TB', label: 'Terabyte (TB)', symbol: 'TB', factor: Math.pow(1024, 4) },
      { key: 'PB', label: 'Petabyte (PB)', symbol: 'PB', factor: Math.pow(1024, 5) }
    ],
    extraInputs: [
      {
        id: 'standard', label: 'Standard', type: 'select', default: 'binary',
        options: [{ value: 'binary', label: 'Binary (1 KB = 1024 B)' }, { value: 'decimal', label: 'Decimal (1 KB = 1000 B)' }]
      }
    ],
    unitsFor: (v) => {
      const base = v.standard === 'decimal' ? 1000 : 1024;
      const exps = { bit: null, B: 0, KB: 1, MB: 2, GB: 3, TB: 4, PB: 5 };
      const meta = [
        ['bit', 'Bit (b)'], ['B', 'Byte (B)'], ['KB', 'Kilobyte (KB)'], ['MB', 'Megabyte (MB)'],
        ['GB', 'Gigabyte (GB)'], ['TB', 'Terabyte (TB)'], ['PB', 'Petabyte (PB)']
      ];
      return meta.map(([key, label]) => ({
        key, label, symbol: key, factor: exps[key] === null ? 0.125 : Math.pow(base, exps[key])
      }));
    }
  }),

  makeUnitConverter({
    id: 'speed-converter',
    title: 'Speed Converter',
    icon: 'fa-solid fa-gauge-high',
    desc: 'Convert between km/h, mph, m/s, knots, feet per second and Mach.',
    keywords: ['kmh to mph', 'mph to kmh', 'knots', 'velocity converter'],
    defaultFrom: 1,
    defaultTo: 2,
    units: [
      { key: 'ms', label: 'Meters per second (m/s)', symbol: 'm/s', factor: 1 },
      { key: 'kmh', label: 'Kilometers per hour (km/h)', symbol: 'km/h', factor: 1 / 3.6 },
      { key: 'mph', label: 'Miles per hour (mph)', symbol: 'mph', factor: 0.44704 },
      { key: 'kn', label: 'Knots (kn)', symbol: 'kn', factor: 1852 / 3600 },
      { key: 'fts', label: 'Feet per second (ft/s)', symbol: 'ft/s', factor: 0.3048 },
      { key: 'mach', label: 'Mach (sea level, ≈340.29 m/s)', symbol: 'Mach', factor: 340.29 }
    ]
  }),

  makeUnitConverter({
    id: 'area-converter',
    title: 'Area Converter',
    icon: 'fa-solid fa-vector-square',
    desc: 'Convert square meters, square feet, acres, hectares, square kilometers and more.',
    keywords: ['sq ft to sq m', 'acres to hectares', 'land area converter', 'square meter'],
    defaultFrom: 2,
    defaultTo: 3,
    units: [
      { key: 'sqcm', label: 'Square centimeter (cm²)', symbol: 'cm²', factor: 0.0001 },
      { key: 'sqin', label: 'Square inch (in²)', symbol: 'in²', factor: 0.00064516 },
      { key: 'sqm', label: 'Square meter (m²)', symbol: 'm²', factor: 1 },
      { key: 'sqft', label: 'Square foot (ft²)', symbol: 'ft²', factor: 0.09290304 },
      { key: 'sqyd', label: 'Square yard (yd²)', symbol: 'yd²', factor: 0.83612736 },
      { key: 'acre', label: 'Acre', symbol: 'ac', factor: 4046.8564224 },
      { key: 'ha', label: 'Hectare (ha)', symbol: 'ha', factor: 10000 },
      { key: 'sqkm', label: 'Square kilometer (km²)', symbol: 'km²', factor: 1000000 },
      { key: 'sqmi', label: 'Square mile (mi²)', symbol: 'mi²', factor: 2589988.110336 }
    ]
  }),

  /* =======================================================================
   * SECURITY & WEB
   * ===================================================================== */
  {
    id: 'password-generator',
    title: 'Strong Password Generator',
    category: CAT.SEC,
    icon: 'fa-solid fa-shield-halved',
    desc: 'Create secure, random passwords with a cryptographically strong generator. Nothing leaves your browser.',
    keywords: ['random password', 'secure password', 'password maker', 'passphrase'],
    inputs: [
      { id: 'length', label: 'Password length', type: 'number', default: 16, min: 4, max: 128, step: 1, required: true },
      { id: 'count', label: 'How many passwords?', type: 'number', default: 1, min: 1, max: 20, step: 1, required: true },
      {
        id: 'charset', label: 'Characters to include', type: 'select', default: 'all',
        options: [
          { value: 'all', label: 'Letters, numbers & symbols (strongest)' },
          { value: 'alnum', label: 'Letters & numbers' },
          { value: 'letters', label: 'Letters only' },
          { value: 'numbers', label: 'Numbers only' }
        ]
      },
      {
        id: 'noLookalike', label: 'Avoid look-alike characters (O, 0, l, 1, I)', type: 'select', default: 'no',
        options: [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]
      }
    ],
    actionText: 'Generate Password',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const length = Math.floor(H.needNum(v.length, 'Password length', { min: 4, max: 128 }));
      const count = Math.floor(H.needNum(v.count, 'How many passwords?', { min: 1, max: 20 }));
      const SETS = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        digit: '0123456789',
        symbol: '!@#$%^&*()-_=+[]{};:,.<>?'
      };
      const groups = {
        all: ['upper', 'lower', 'digit', 'symbol'],
        alnum: ['upper', 'lower', 'digit'],
        letters: ['upper', 'lower'],
        numbers: ['digit']
      }[v.charset] || ['upper', 'lower', 'digit', 'symbol'];

      const strip = v.noLookalike === 'yes' ? (s) => s.replace(/[Il1O0o]/g, '') : (s) => s;
      const pools = groups.map((g) => strip(SETS[g]));
      const all = pools.join('');
      const list = [];
      for (let n = 0; n < count; n++) {
        const chars = [];
        if (length >= pools.length) {
          pools.forEach((p) => chars.push(p[H.randomInt(p.length)]));
        }
        while (chars.length < length) chars.push(all[H.randomInt(all.length)]);
        list.push(H.shuffle(chars).join(''));
      }
      const entropy = length * Math.log2(all.length);
      const strength = entropy < 40 ? 'Weak' : entropy < 60 ? 'Fair' : entropy < 80 ? 'Strong' : 'Very strong';
      return {
        text: list.join('\n'),
        stats: [
          { label: 'Length', value: String(length) },
          { label: 'Character pool', value: all.length + ' characters' },
          { label: 'Estimated entropy', value: '≈ ' + Math.round(entropy) + ' bits' },
          { label: 'Strength', value: strength }
        ],
        note: 'Passwords are generated locally in your browser using the Web Crypto API and are never sent or stored.'
      };
    }
  },

  {
    id: 'hash-generator',
    title: 'MD5 / SHA Hash Generator',
    category: CAT.SEC,
    icon: 'fa-solid fa-hashtag',
    desc: 'Generate MD5, SHA-1 and SHA-256 hashes from any text, fully in your browser.',
    keywords: ['md5 hash', 'sha256', 'sha1', 'checksum', 'hash calculator'],
    inputs: [
      { id: 'text', label: 'Text to hash', type: 'textarea', rows: 6, placeholder: 'Enter text...', required: true },
      {
        id: 'algo', label: 'Algorithm', type: 'select', default: 'md5',
        options: [
          { value: 'md5', label: 'MD5' },
          { value: 'sha1', label: 'SHA-1' },
          { value: 'sha256', label: 'SHA-256' },
          { value: 'all', label: 'All algorithms' }
        ]
      },
      {
        id: 'letterCase', label: 'Output case', type: 'select', default: 'lower',
        options: [{ value: 'lower', label: 'lowercase hex' }, { value: 'upper', label: 'UPPERCASE hex' }]
      }
    ],
    actionText: 'Generate Hash',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const text = H.needText(v.text, 'some text to hash');
      const bytes = H.utf8(text);
      const up = v.letterCase === 'upper';
      const out = (s) => (up ? s.toUpperCase() : s);
      const NAMES = { md5: 'MD5', sha1: 'SHA-1', sha256: 'SHA-256' };
      const result = v.algo === 'all'
        ? ['md5', 'sha1', 'sha256'].map((a) => NAMES[a] + ': ' + out(HASH_ALGORITHMS[a](bytes))).join('\n')
        : out((HASH_ALGORITHMS[v.algo] || HASH_ALGORITHMS.md5)(bytes));
      return {
        text: result,
        stats: [{ label: 'Input size', value: bytes.length + ' bytes' }],
        note: 'MD5 and SHA-1 are fine for checksums but are not secure for storing passwords.'
      };
    }
  },

  {
    id: 'meta-tag-generator',
    title: 'Meta Tag Generator',
    category: CAT.SEC,
    icon: 'fa-solid fa-tag',
    desc: 'Generate SEO meta tags, Open Graph and Twitter Card tags to paste into your page head.',
    keywords: ['seo meta tags', 'open graph generator', 'twitter card', 'html head tags'],
    inputs: [
      { id: 'title', label: 'Page title', type: 'text', placeholder: 'e.g. Free Online Tools - MySite', required: true },
      { id: 'description', label: 'Meta description', type: 'textarea', rows: 3, placeholder: 'A short summary of the page (70-160 characters)', required: true },
      { id: 'keywords', label: 'Keywords (comma separated)', type: 'text', placeholder: 'tools, converter, calculator' },
      { id: 'author', label: 'Author', type: 'text', placeholder: 'Your name or brand' },
      { id: 'url', label: 'Canonical page URL', type: 'text', placeholder: 'https://example.com/page/' },
      { id: 'image', label: 'Social share image URL', type: 'text', placeholder: 'https://example.com/share.jpg' },
      { id: 'siteName', label: 'Site name', type: 'text', placeholder: 'QuickToolHub' },
      {
        id: 'robots', label: 'Robots', type: 'select', default: 'index, follow',
        options: [
          { value: 'index, follow', label: 'index, follow (recommended)' },
          { value: 'noindex, follow', label: 'noindex, follow' },
          { value: 'index, nofollow', label: 'index, nofollow' },
          { value: 'noindex, nofollow', label: 'noindex, nofollow' }
        ]
      },
      {
        id: 'twitterCard', label: 'Twitter card type', type: 'select', default: 'summary_large_image',
        options: [{ value: 'summary_large_image', label: 'Summary with large image' }, { value: 'summary', label: 'Summary' }]
      }
    ],
    actionText: 'Generate Meta Tags',
    execute: (v) => {
      const H = TOOL_HELPERS;
      const clean = (s) => String(s === undefined || s === null ? '' : s).trim();
      const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      const title = clean(H.needText(v.title, 'a page title'));
      const description = clean(H.needText(v.description, 'a meta description')).replace(/\s+/g, ' ');
      const keywords = clean(v.keywords);
      const author = clean(v.author);
      const url = clean(v.url);
      const image = clean(v.image);
      const siteName = clean(v.siteName);
      const urlRe = /^https?:\/\/\S+$/i;
      if (url && !urlRe.test(url)) throw new Error('The canonical URL must start with http:// or https://');
      if (image && !urlRe.test(image)) throw new Error('The image URL must start with http:// or https://');

      const L = [];
      L.push('<meta charset="UTF-8">');
      L.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      L.push('<title>' + escText(title) + '</title>');
      L.push('<meta name="description" content="' + esc(description) + '">');
      if (keywords) L.push('<meta name="keywords" content="' + esc(keywords) + '">');
      if (author) L.push('<meta name="author" content="' + esc(author) + '">');
      L.push('<meta name="robots" content="' + esc(v.robots || 'index, follow') + '">');
      if (url) L.push('<link rel="canonical" href="' + esc(url) + '">');
      L.push('');
      L.push('<!-- Open Graph / Facebook -->');
      L.push('<meta property="og:type" content="website">');
      L.push('<meta property="og:title" content="' + esc(title) + '">');
      L.push('<meta property="og:description" content="' + esc(description) + '">');
      if (url) L.push('<meta property="og:url" content="' + esc(url) + '">');
      if (image) L.push('<meta property="og:image" content="' + esc(image) + '">');
      if (siteName) L.push('<meta property="og:site_name" content="' + esc(siteName) + '">');
      L.push('');
      L.push('<!-- Twitter -->');
      L.push('<meta name="twitter:card" content="' + esc(v.twitterCard || 'summary_large_image') + '">');
      L.push('<meta name="twitter:title" content="' + esc(title) + '">');
      L.push('<meta name="twitter:description" content="' + esc(description) + '">');
      if (image) L.push('<meta name="twitter:image" content="' + esc(image) + '">');

      return {
        text: L.join('\n'),
        stats: [
          { label: 'Title length', value: title.length + ' characters ' + (title.length <= 60 ? '✔ good' : '⚠ may be truncated in search results (aim for 60 or fewer)') },
          { label: 'Description length', value: description.length + ' characters ' + (description.length >= 70 && description.length <= 160 ? '✔ good' : description.length > 160 ? '⚠ may be truncated (aim for 160 or fewer)' : '⚠ a bit short (aim for 70-160)') }
        ]
      };
    }
  }
];

/* ===========================================================================
 * Registry helpers used by the engine / homepage
 * ========================================================================= */
const getToolById = (id) => ALL_TOOLS.find((t) => t.id === id) || null;

const getToolsByCategory = (name) => ALL_TOOLS.filter((t) => t.category === name);

const searchTools = (query) => {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return ALL_TOOLS.slice();
  return ALL_TOOLS.filter((t) =>
    (t.title + ' ' + t.desc + ' ' + t.category + ' ' + (t.keywords || []).join(' ')).toLowerCase().includes(q)
  );
};

/* Dev-time sanity check: warns about duplicate ids or malformed entries. */
(function validateToolsData() {
  const seen = new Set();
  const cats = new Set(TOOL_CATEGORIES.map((c) => c.name));
  ALL_TOOLS.forEach((t, i) => {
    const where = 'ALL_TOOLS[' + i + '] (' + (t && t.id) + ')';
    if (!t || !t.id || !t.title || !t.category || !t.icon || !t.desc || !Array.isArray(t.inputs) || !t.actionText || typeof t.execute !== 'function') {
      console.warn('[tools-data] Missing required field in ' + where);
      return;
    }
    if (seen.has(t.id)) console.warn('[tools-data] Duplicate id: ' + t.id);
    seen.add(t.id);
    if (!cats.has(t.category)) console.warn('[tools-data] Unknown category "' + t.category + '" in ' + where);
  });
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALL_TOOLS, TOOL_CATEGORIES, TOOL_HELPERS, getToolById, getToolsByCategory, searchTools };
}

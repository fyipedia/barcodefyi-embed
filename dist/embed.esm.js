/* barcodefyi-embed v1.0.0 | MIT | https://widget.barcodefyi.com */

// src/styles/technical.ts
function getTechnicalCSS() {
  return `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* Technical: monospace font throughout */
.tagfyi-widget {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Scan strip header \u2014 matches tag_scan_strip from django-tag-design
   4px left accent border + surface background
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-scan-strip {
  border-left: 4px solid var(--accent);
  background: var(--surface);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tagfyi-scan-strip-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tagfyi-scan-strip-meta {
  font-size: 11px;
  color: var(--muted);
  margin: 2px 0 0 0;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Key-value rows \u2014 dense, tabular
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-kv-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
}

.tagfyi-kv-row {
  display: table-row;
  border-bottom: 1px solid var(--border);
}

.tagfyi-kv-row:last-child {
  border-bottom: none;
}

.tagfyi-kv-key {
  display: table-cell;
  padding: 8px 12px 8px 16px;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  width: 40%;
  vertical-align: top;
}

.tagfyi-kv-value {
  display: table-cell;
  padding: 8px 16px 8px 0;
  font-size: 12px;
  font-weight: 400;
  color: var(--text);
  vertical-align: top;
  word-break: break-word;
}

/* Monospace value highlight \u2014 for hex, frequencies, data rates */
.tagfyi-mono-value {
  font-family: inherit; /* already monospace */
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  padding: 1px 5px;
  border-radius: 3px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Standard badge \u2014 ISO/IEC/IEEE/GS1 reference
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-standard-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  font-family: inherit;
  letter-spacing: 0.03em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Frequency visualizer (inline)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-freq-bar-wrap {
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
}

.tagfyi-freq-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.tagfyi-freq-bar-track {
  height: 4px;
  background: var(--surface);
  border-radius: 2px;
  overflow: hidden;
}

.tagfyi-freq-bar-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.tagfyi-freq-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  margin-top: 4px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Header (non-scan-strip variant)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}

.tagfyi-header-text {
  flex: 1;
  min-width: 0;
}

.tagfyi-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.tagfyi-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Summary / description text
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-summary {
  padding: 10px 16px;
  font-size: 12px;
  line-height: 1.65;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Action row
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
}

.tagfyi-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: inherit;
}

.tagfyi-link:hover {
  text-decoration: underline;
}

.tagfyi-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}
  `;
}

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent bar at top */
.tagfyi-accent-bar {
  height: 4px;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #fff));
  width: 100%;
  border-radius: 8px 8px 0 0;
}

/* Header */
.tagfyi-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
}

.tagfyi-header-text {
  flex: 1;
  min-width: 0;
}

.tagfyi-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.tagfyi-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Type badge \u2014 gradient pill */
.tagfyi-type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 11px;
  flex-shrink: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

/* Stats grid \u2014 surface background cards */
.tagfyi-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 16px 14px;
}

.tagfyi-stat-card {
  background: var(--surface);
  border-radius: 8px;
  padding: 10px 10px;
  text-align: center;
}

.tagfyi-stat-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 3px;
}

.tagfyi-stat-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

/* Summary */
.tagfyi-summary {
  padding: 4px 20px 14px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text);
}

/* Key-value rows \u2014 spacious */
.tagfyi-kv-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  padding: 0 4px;
}

.tagfyi-kv-row {
  display: table-row;
}

.tagfyi-kv-key {
  display: table-cell;
  padding: 8px 12px 8px 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  width: 38%;
  vertical-align: top;
}

.tagfyi-kv-value {
  display: table-cell;
  padding: 8px 20px 8px 0;
  font-size: 13px;
  color: var(--text);
  vertical-align: top;
  word-break: break-word;
}

/* Standard badge */
.tagfyi-standard-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  letter-spacing: 0.02em;
}

/* Actions */
.tagfyi-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

.tagfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tagfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.tagfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "modern":
      return getModernCSS();
    case "technical":
    default:
      return getTechnicalCSS();
  }
}
function getThemeCSS(accent, style = "technical") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.tagfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.tagfyi-widget[data-size="default"] {
  max-width: 420px;
}

.tagfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.tagfyi-widget *, .tagfyi-widget *::before, .tagfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tagfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: tagfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes tagfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.tagfyi-error p {
  margin: 0 0 8px 0;
}

.tagfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.tagfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-search-wrap {
  padding: 12px 16px;
}

.tagfyi-search-form {
  display: flex;
  gap: 8px;
}

.tagfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.tagfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.tagfyi-search-input::placeholder {
  color: var(--muted);
}

.tagfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.tagfyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.tagfyi-search-results {
  padding: 0 16px 12px;
}

.tagfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.tagfyi-result-item:last-child {
  border-bottom: none;
}

.tagfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.tagfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.tagfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.tagfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.tagfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.tagfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "technical";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["tagfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="tagfyi-loading">
      <span class="tagfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="tagfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="tagfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `tagfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/widgets/spec.ts
var DISPLAY_FIELDS = [
  "category",
  "family",
  "manufacturer",
  "frequency_band",
  "interface_type",
  "total_memory_bytes",
  "user_memory_bytes",
  "read_range_cm_max",
  "flash_kb",
  "ram_kb",
  "max_ble_version",
  "epc_memory_bits",
  "chip_type",
  "os_type",
  "crypto_algorithms",
  "year_released",
  "typical_price_usd",
  "availability_status"
];
var FIELD_LABELS = {
  category: "Category",
  family: "Family",
  manufacturer: "Manufacturer",
  frequency_band: "Frequency",
  interface_type: "Interface",
  total_memory_bytes: "Total Memory",
  user_memory_bytes: "User Memory",
  read_range_cm_max: "Read Range",
  flash_kb: "Flash",
  ram_kb: "RAM",
  max_ble_version: "BLE Version",
  epc_memory_bits: "EPC Memory",
  chip_type: "Chip Type",
  os_type: "OS Type",
  crypto_algorithms: "Crypto",
  year_released: "Year",
  typical_price_usd: "Typical Price",
  availability_status: "Availability"
};
var FIELD_UNITS = {
  total_memory_bytes: " B",
  user_memory_bytes: " B",
  read_range_cm_max: " cm",
  flash_kb: " KB",
  ram_kb: " KB",
  epc_memory_bits: " bits",
  typical_price_usd: " USD"
};
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function formatValue(key, value) {
  var _a;
  if (value === null || value === void 0) return "";
  const unit = (_a = FIELD_UNITS[key]) != null ? _a : "";
  if (Array.isArray(value)) {
    return escapeHTML(value.join(", "));
  }
  return escapeHTML(String(value)) + unit;
}
function initSpecWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const apiPath = `${config.entitySlug}/${slug}/`;
  fetchAPI(config.apiBase, apiPath).then((data) => {
    renderSpec(container, data, slug, config);
  }).catch(() => {
    renderError(container, `Unable to load spec for "${escapeHTML(slug)}". Please try again later.`, config);
  });
}
function renderSpec(container, data, slug, config) {
  const name = data.name ? escapeHTML(String(data.name)) : escapeHTML(slug);
  const category = data.category ? escapeHTML(String(data.category)) : "";
  const family = data.family ? escapeHTML(String(data.family)) : "";
  const badgeText = category || family;
  const entityUrl = `https://${config.domain}/${config.entitySlug}/${slug}/`;
  const rows = DISPLAY_FIELDS.filter((key) => {
    const val = data[key];
    return val !== null && val !== void 0 && val !== "" && key !== "category" && key !== "family";
  }).map((key) => {
    var _a;
    const label = escapeHTML((_a = FIELD_LABELS[key]) != null ? _a : key.replace(/_/g, " "));
    const value = formatValue(key, data[key]);
    const isNumeric = typeof data[key] === "number";
    const valueHTML = isNumeric ? `<span class="tagfyi-mono-value">${value}</span>` : value;
    return `
        <div class="tagfyi-kv-row">
          <div class="tagfyi-kv-key">${label}</div>
          <div class="tagfyi-kv-value">${valueHTML}</div>
        </div>`;
  }).join("");
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${name}</p>
        ${badgeText ? `<p class="tagfyi-scan-strip-meta">${badgeText}</p>` : ""}
      </div>
      ${badgeText ? `<span class="tagfyi-badge">${badgeText}</span>` : ""}
    </div>

    <div class="tagfyi-kv-table">
      ${rows || '<div class="tagfyi-kv-row"><div class="tagfyi-kv-value" style="padding-left:16px;color:var(--muted)">No spec data available.</div></div>'}
    </div>

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${entityUrl}" target="_blank" rel="noopener">
        Full spec on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var COMPARE_FIELDS = [
  ["Memory", "memory_bytes"],
  ["Memory (user)", "user_memory_bytes"],
  ["Frequency", "frequency"],
  ["Standard", "standard"],
  ["Max Range", "max_range_cm"],
  ["Data Rate", "data_rate_kbps"],
  ["IC Type", "ic_type"],
  ["Form Factor", "form_factor"],
  ["Operating Voltage", "operating_voltage"],
  ["Protocol", "protocol"],
  ["Category", "category"],
  ["Version", "version"]
];
function formatValue2(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  if (typeof val === "boolean") return val ? "\u2713" : "\u2717";
  if (typeof val === "number") return String(val);
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slugsRaw = (_a = dataset.slugs) != null ? _a : "";
  const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (slugs.length < 2) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-compare-widget");
    renderError(container2, 'Provide at least 2 slugs in data-slugs="a,b"', config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-compare-widget");
  renderLoading(container);
  Promise.all(
    slugs.map(
      (slug) => fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`)
    )
  ).then((entities) => {
    const presentFields = COMPARE_FIELDS.filter(
      ([, field]) => entities.some(
        (e) => e[field] !== null && e[field] !== void 0 && e[field] !== ""
      )
    );
    const colWidth = Math.floor(100 / (entities.length + 1));
    let html = `
        <div class="tagfyi-scan-strip">
          <div>
            <p class="tagfyi-scan-strip-title">Comparison</p>
            <p class="tagfyi-scan-strip-meta">${entities.length} items \xB7 ${config.name}</p>
          </div>
        </div>
        <div class="tagfyi-compare-scroll">
          <table class="tagfyi-compare-table">
            <thead>
              <tr>
                <th class="tagfyi-compare-th tagfyi-compare-th--label" style="width:${colWidth}%">Spec</th>
                ${entities.map(
      (e) => `
                  <th class="tagfyi-compare-th" style="width:${colWidth}%">
                    <a href="https://${config.domain}/${config.entitySlug}/${escapeHTML2(e.slug)}/" target="_blank" rel="noopener" class="tagfyi-compare-entity-link">
                      ${escapeHTML2(String(e.name))}
                      ${externalLinkIcon}
                    </a>
                  </th>`
    ).join("")}
              </tr>
            </thead>
            <tbody>
              ${presentFields.map(
      ([label, field]) => `
                <tr class="tagfyi-compare-row">
                  <td class="tagfyi-kv-key">${escapeHTML2(label)}</td>
                  ${entities.map((e) => {
        const val = formatValue2(e[field]);
        const isMonoField = field.includes("bytes") || field.includes("kbps") || field.includes("_cm") || field.includes("voltage") || field.includes("frequency");
        return `<td class="tagfyi-compare-td">${isMonoField ? `<span class="tagfyi-mono-value">${escapeHTML2(val)}</span>` : escapeHTML2(val)}</td>`;
      }).join("")}
                </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, "Failed to load comparison data.", config);
  });
}

// src/widgets/features.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var FEATURE_DEFS = [
  // Security
  { label: "Password Protection", field: "has_password_protection", category: "Security" },
  { label: "AES Encryption", field: "has_aes_encryption", category: "Security" },
  { label: "Mutual Authentication", field: "has_mutual_authentication", category: "Security" },
  { label: "Read/Write Protection", field: "has_read_write_protection", category: "Security" },
  { label: "Originality Check", field: "has_originality_check", category: "Security" },
  { label: "UID Mirroring", field: "has_uid_mirroring", category: "Security" },
  { label: "Counter/CMAC", field: "has_counter", category: "Security" },
  // Compatibility
  { label: "NFC Forum Compliant", field: "nfc_forum_compliant", category: "Compatibility" },
  { label: "Android Compatible", field: "android_compatible", category: "Compatibility" },
  { label: "iOS Compatible", field: "ios_compatible", category: "Compatibility" },
  { label: "Windows Compatible", field: "windows_compatible", category: "Compatibility" },
  { label: "NDEF Support", field: "supports_ndef", category: "Compatibility" },
  { label: "ISO 14443-4 Compliant", field: "iso_14443_4", category: "Compatibility" },
  // Protocol
  { label: "ISO 15693", field: "supports_iso15693", category: "Protocol" },
  { label: "ISO 14443-A", field: "supports_iso14443a", category: "Protocol" },
  { label: "ISO 14443-B", field: "supports_iso14443b", category: "Protocol" },
  { label: "Zigbee", field: "supports_zigbee", category: "Protocol" },
  { label: "Thread", field: "supports_thread", category: "Protocol" },
  { label: "Matter", field: "supports_matter", category: "Protocol" },
  { label: "Bluetooth LE", field: "supports_ble", category: "Protocol" },
  { label: "EPC Gen2", field: "supports_epc_gen2", category: "Protocol" },
  // General
  { label: "Anti-Collision", field: "has_anti_collision", category: "General" },
  { label: "Fast Read", field: "has_fast_read", category: "General" },
  { label: "Field Detect", field: "has_field_detect", category: "General" }
];
var CATEGORY_ORDER = ["Security", "Compatibility", "Protocol", "General"];
function initFeaturesWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-features-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-features-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`).then((entity) => {
    const presentFeatures = FEATURE_DEFS.filter(
      (f) => typeof entity[f.field] === "boolean"
    );
    if (presentFeatures.length === 0) {
      renderError(container, "No feature data available for this entity.", config);
      return;
    }
    const grouped = /* @__PURE__ */ new Map();
    for (const cat of CATEGORY_ORDER) {
      const items = presentFeatures.filter((f) => f.category === cat);
      if (items.length > 0) {
        grouped.set(cat, items);
      }
    }
    const entityUrl = `https://${config.domain}/${config.entitySlug}/${escapeHTML3(entity.slug)}/`;
    let html = `
        <div class="tagfyi-scan-strip">
          <div class="tagfyi-header-text">
            <p class="tagfyi-scan-strip-title">${escapeHTML3(String(entity.name))}</p>
            <p class="tagfyi-scan-strip-meta">Feature Matrix</p>
          </div>
          <a href="${entityUrl}" target="_blank" rel="noopener" class="tagfyi-link" aria-label="View on ${config.name}">
            ${externalLinkIcon}
          </a>
        </div>
      `;
    for (const [cat, features] of grouped) {
      html += `
          <div class="tagfyi-feature-group">
            <div class="tagfyi-feature-group-label">${escapeHTML3(cat)}</div>
            ${features.map((f) => {
        const val = entity[f.field];
        return `
                  <div class="tagfyi-feature-row">
                    <span class="tagfyi-feature-name">${escapeHTML3(f.label)}</span>
                    <span class="tagfyi-feature-check tagfyi-feature-check--${val ? "yes" : "no"}" aria-label="${val ? "Supported" : "Not supported"}">
                      ${val ? "\u2713" : "\u2717"}
                    </span>
                  </div>
                `;
      }).join("")}
          </div>
        `;
    }
    html += poweredByHTML(config);
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, "Failed to load feature data.", config);
  });
}

// src/widgets/standard.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var STATUS_COLORS = {
  active: "#10b981",
  current: "#10b981",
  published: "#10b981",
  draft: "#f59e0b",
  withdrawn: "#ef4444",
  deprecated: "#ef4444",
  superseded: "#6b7280",
  historical: "#6b7280"
};
function initStandardWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-standard-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-standard-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `standards/${slug}/`).then((standard) => {
    var _a2, _b;
    const statusRaw = ((_a2 = standard.status) != null ? _a2 : "").toLowerCase();
    const statusColor = (_b = STATUS_COLORS[statusRaw]) != null ? _b : "#6b7280";
    const standardUrl = `https://${config.domain}/standards/${escapeHTML4(standard.slug)}/`;
    const displayName = standard.number ? `${escapeHTML4(standard.number)}` : escapeHTML4(String(standard.name));
    const fullName = standard.full_name ? escapeHTML4(standard.full_name) : escapeHTML4(String(standard.name));
    let html = `
        <div class="tagfyi-scan-strip">
          <div class="tagfyi-header-text">
            <p class="tagfyi-scan-strip-title">
              <span class="tagfyi-standard-badge">${displayName}</span>
            </p>
            <p class="tagfyi-scan-strip-meta">${fullName}</p>
          </div>
          <a href="${standardUrl}" target="_blank" rel="noopener" class="tagfyi-link" aria-label="View standard on ${config.name}">
            ${externalLinkIcon}
          </a>
        </div>
      `;
    const metaParts = [];
    if (standard.status) {
      metaParts.push(
        `<span class="tagfyi-status-dot" style="background:${statusColor}" title="${escapeHTML4(standard.status)}"></span><span>${escapeHTML4(standard.status.charAt(0).toUpperCase() + standard.status.slice(1))}</span>`
      );
    }
    if (standard.organization) {
      metaParts.push(`<span class="tagfyi-standard-badge">${escapeHTML4(standard.organization)}</span>`);
    }
    if (standard.year_published) {
      metaParts.push(`<span class="tagfyi-badge">${escapeHTML4(String(standard.year_published))}</span>`);
    }
    if (metaParts.length > 0) {
      html += `
          <div class="tagfyi-standard-meta-row">
            ${metaParts.join("")}
          </div>
        `;
    }
    if (standard.description) {
      html += `<div class="tagfyi-summary">${escapeHTML4(standard.description)}</div>`;
    }
    html += `
        <div class="tagfyi-actions">
          <a href="${standardUrl}" target="_blank" rel="noopener" class="tagfyi-link">
            View standard ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Standard "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-tagfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-tagfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(data, domain, siteName) {
  if (document.querySelector('script[data-tagfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${siteName} FAQ`,
    url: `https://${domain}/faqs/`,
    mainEntity: [
      {
        "@type": "Question",
        name: data.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.answer
        }
      }
    ]
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-tagfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const term = (_a = dataset.term) != null ? _a : "";
  if (!term) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-term attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${term}/`).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML5(term)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${data.slug}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="tagfyi-pill" href="https://${config.domain}/glossary/${escapeHTML5(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML5(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${escapeHTML5(data.name)}</p>
        <p class="tagfyi-scan-strip-meta">Glossary term</p>
      </div>
    </div>

    <div class="tagfyi-summary">
      ${escapeHTML5(data.definition)}
    </div>

    ${relatedPills ? `<div class="tagfyi-pills-row">${relatedPills}</div>` : ""}

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        See full glossary on ${escapeHTML5(config.name)} ${externalLinkIcon}
      </a>
      <a class="tagfyi-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML5(data.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/tooltip.ts
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initTooltipWidget(el, config) {
  var _a, _b, _c;
  const dataset = el.dataset;
  const term = (_c = (_b = dataset.term) != null ? _b : (_a = el.textContent) == null ? void 0 : _a.trim()) != null ? _c : "";
  if (!term) return;
  const htmlEl = el;
  htmlEl.style.cursor = "help";
  htmlEl.style.textDecoration = "underline dotted";
  htmlEl.style.textUnderlineOffset = "2px";
  htmlEl.setAttribute("tabindex", "0");
  htmlEl.setAttribute("role", "button");
  htmlEl.setAttribute("aria-describedby", `tagfyi-tooltip-${term}`);
  const popup = document.createElement("div");
  popup.id = `tagfyi-tooltip-${term}`;
  popup.setAttribute("role", "tooltip");
  popup.style.cssText = [
    "position:absolute",
    "z-index:999999",
    "max-width:280px",
    "min-width:180px",
    "background:#1e293b",
    "color:#f1f5f9",
    "border-radius:8px",
    "padding:10px 14px",
    "font-size:12px",
    "line-height:1.6",
    "box-shadow:0 4px 16px rgba(0,0,0,0.3)",
    "pointer-events:none",
    "opacity:0",
    "transition:opacity 0.15s",
    "font-family:system-ui,-apple-system,sans-serif",
    "word-break:break-word"
  ].join(";");
  popup.innerHTML = `<span style="color:#94a3b8;font-size:10px;text-transform:uppercase;letter-spacing:0.06em">Loading\u2026</span>`;
  document.body.appendChild(popup);
  let loaded = false;
  let glossaryData = null;
  let visible = false;
  let hideTimer = null;
  function positionPopup() {
    const rect = htmlEl.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const popupH = popup.offsetHeight || 80;
    if (spaceAbove >= popupH + 8 || spaceAbove > spaceBelow) {
      popup.style.top = `${rect.top + scrollTop - popupH - 8}px`;
    } else {
      popup.style.top = `${rect.bottom + scrollTop + 8}px`;
    }
    let left = rect.left + scrollLeft + rect.width / 2 - 140;
    left = Math.max(8, Math.min(left, window.innerWidth - 296));
    popup.style.left = `${left}px`;
  }
  function showPopup() {
    if (hideTimer !== null) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    visible = true;
    positionPopup();
    popup.style.opacity = "1";
    if (!loaded) {
      fetchAPI(config.apiBase, `glossary/${encodeURIComponent(term)}/`).then((data) => {
        glossaryData = data;
        loaded = true;
        const termUrl = `https://${config.domain}/glossary/${escapeHTML6(data.slug)}/`;
        popup.innerHTML = `
            <div style="font-weight:600;margin-bottom:4px;color:#f8fafc">${escapeHTML6(data.term)}</div>
            <div style="color:#cbd5e1">${escapeHTML6(data.definition)}</div>
            <div style="margin-top:6px">
              <a href="${termUrl}" target="_blank" rel="noopener"
                 style="font-size:11px;color:${config.accent};text-decoration:none;font-weight:500">
                View full definition \u2192
              </a>
            </div>
          `;
        positionPopup();
      }).catch(() => {
        loaded = true;
        popup.innerHTML = `<span style="color:#94a3b8">${escapeHTML6(term)}: definition not found.</span>`;
      });
    }
  }
  function hidePopup() {
    hideTimer = setTimeout(() => {
      visible = false;
      popup.style.opacity = "0";
    }, 150);
  }
  htmlEl.addEventListener("mouseenter", showPopup);
  htmlEl.addEventListener("mouseleave", hidePopup);
  htmlEl.addEventListener("focus", showPopup);
  htmlEl.addEventListener("blur", hidePopup);
  htmlEl.addEventListener("click", () => {
    if (glossaryData) {
      const termUrl = `https://${config.domain}/glossary/${glossaryData.slug}/`;
      window.open(termUrl, "_blank", "noopener");
    } else {
      const url = `https://${config.domain}/glossary/`;
      window.open(url, "_blank", "noopener");
    }
  });
  htmlEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      htmlEl.click();
    }
  });
  window.addEventListener("scroll", () => {
    if (visible) positionPopup();
  }, { passive: true });
  htmlEl.dataset.tagfyiTooltipInit = "1";
  try {
    el.attachShadow({ mode: "closed" });
  } catch (e) {
  }
}

// src/widgets/faq.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initFaqWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `faqs/${slug}/`).then((data) => {
    renderFaq(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectFAQPage(
        { question: data.question, answer: data.answer },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load FAQ "${escapeHTML7(slug)}". Please try again later.`,
      config
    );
  });
}
function renderFaq(container, data, config) {
  const faqUrl = `https://${config.domain}/faqs/${data.slug}/`;
  const faqsUrl = `https://${config.domain}/faqs/`;
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${escapeHTML7(data.question)}</p>
        <p class="tagfyi-scan-strip-meta">Frequently Asked Question</p>
      </div>
    </div>

    <div class="tagfyi-summary">
      ${escapeHTML7(data.answer)}
    </div>

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${faqsUrl}" target="_blank" rel="noopener">
        More FAQs on ${escapeHTML7(config.name)} ${externalLinkIcon}
      </a>
      <a class="tagfyi-link" href="${faqUrl}" target="_blank" rel="noopener">
        Full answer ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function escapeHTML8(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((guide) => {
    var _a2, _b, _c, _d, _e, _f;
    const guideUrl = guide.url ? `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML8(guide.slug)}/`;
    const excerpt = (_b = (_a2 = guide.excerpt) != null ? _a2 : guide.description) != null ? _b : "";
    const readingTime = (_d = (_c = guide.reading_time_minutes) != null ? _c : guide.reading_time) != null ? _d : null;
    const category = (_f = (_e = guide.category_name) != null ? _e : guide.category) != null ? _f : null;
    let html = `
        <div class="tagfyi-guide-card">
          <div class="tagfyi-guide-header">
            <div class="tagfyi-guide-badges">
              ${category ? `<span class="tagfyi-badge">${escapeHTML8(category)}</span>` : ""}
              ${readingTime ? `<span class="tagfyi-badge tagfyi-badge--time">${escapeHTML8(String(readingTime))} min read</span>` : ""}
            </div>
            <h3 class="tagfyi-guide-title">${escapeHTML8(String(guide.title))}</h3>
          </div>
          ${excerpt ? `<p class="tagfyi-guide-excerpt">${escapeHTML8(excerpt)}</p>` : ""}
          <div class="tagfyi-guide-footer">
            <a href="${guideUrl}" target="_blank" rel="noopener" class="tagfyi-guide-cta">
              Read on ${escapeHTML8(config.name)}
              ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML8(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML9(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  chip: "Chip",
  tag: "Tag",
  standard: "Standard",
  glossary: "Glossary",
  guide: "Guide",
  frequency: "Frequency",
  protocol: "Protocol",
  barcode: "Barcode",
  qrcode: "QR Code",
  nfc: "NFC",
  rfid: "RFID",
  ble: "BLE",
  smartcard: "Smart Card"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="tagfyi-search-wrap">
      <div class="tagfyi-search-form tagfyi-search-form--inline">
        <span class="tagfyi-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
        <input
          class="tagfyi-search-input tagfyi-search-input--inline"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML9(placeholder)}"
          aria-label="Search ${escapeHTML9(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="tagfyi-search-dropdown" role="listbox" hidden></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".tagfyi-search-input");
  const dropdown = container.querySelector(".tagfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".tagfyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("tagfyi-search-result-item--active");
      } else {
        item.classList.remove("tagfyi-search-result-item--active");
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="tagfyi-search-empty">
          No results for <strong>${escapeHTML9(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : "";
      const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML9(item.slug)}/`;
      html += `
        <a
          class="tagfyi-search-result-item"
          href="${href}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
        >
          <div class="tagfyi-search-result-row">
            <span class="tagfyi-result-title">${escapeHTML9(item.name)}</span>
            ${typeLabel ? `<span class="tagfyi-badge">${escapeHTML9(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div class="tagfyi-result-meta">${escapeHTML9(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}/search/?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/tools/anatomy.ts
function escapeHTML10(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var QR_ZONES = [
  { id: "quiet", name: "Quiet Zone", color: "#e2e8f0", description: "Mandatory white border around QR code \u2014 at least 4 modules wide. Scanners use this to detect the boundary of the symbol." },
  { id: "finder", name: "Finder Patterns", color: "#4F46E5", description: "3 identical 7\xD77 module squares in top-left, top-right, and bottom-left corners. Enable scanners to detect position, size, and orientation at any angle." },
  { id: "timing", name: "Timing Patterns", color: "#7C3AED", description: "Alternating black/white modules forming a line between finder patterns. Define the module coordinate system and help determine QR version." },
  { id: "format", name: "Format Information", color: "#0EA5E9", description: "Two copies of error correction level and mask pattern stored adjacent to finder patterns. Read first to know how to decode the rest." },
  { id: "align", name: "Alignment Pattern", color: "#06B6D4", description: "Small 5\xD75 pattern in higher versions (v2+). Helps correct distortion when the code is photographed at an angle on curved surfaces." },
  { id: "data", name: "Data & ECC", color: "#10B981", description: "The actual encoded data plus Reed-Solomon error correction codewords. Fills remaining modules after all function patterns are placed." }
];
function zoneColorMap(zones) {
  return zones.reduce((acc, z) => {
    acc[z.id] = z.color;
    return acc;
  }, {});
}
function renderQRSVG(zones, _accent) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const zoneMap = zoneColorMap(zones);
  return `
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block">
  <!-- Quiet Zone -->
  <rect x="0" y="0" width="220" height="220" fill="${escapeHTML10((_a = zoneMap["quiet"]) != null ? _a : "#e2e8f0")}" rx="4" class="tagfyi-zone" data-zone="quiet"/>

  <!-- Data area background -->
  <rect x="16" y="16" width="188" height="188" fill="white" class="tagfyi-zone" data-zone="data"/>

  <!-- Data modules (simplified grid dots) -->
  <g class="tagfyi-zone" data-zone="data" opacity="0.25">
    ${Array.from(
    { length: 8 },
    (_, row) => Array.from(
      { length: 8 },
      (_2, col) => {
        var _a2;
        return (row + col) % 2 === 0 ? `<rect x="${72 + col * 9}" y="${72 + row * 9}" width="8" height="8" fill="${escapeHTML10((_a2 = zoneMap["data"]) != null ? _a2 : "#10B981")}"/>` : "";
      }
    ).join("")
  ).join("")}
    ${Array.from(
    { length: 4 },
    (_, row) => Array.from(
      { length: 4 },
      (_2, col) => {
        var _a2;
        return `<rect x="${136 + col * 9}" y="${136 + row * 9}" width="8" height="8" fill="${escapeHTML10((_a2 = zoneMap["data"]) != null ? _a2 : "#10B981")}" opacity="0.6"/>`;
      }
    ).join("")
  ).join("")}
  </g>

  <!-- Timing patterns -->
  <g class="tagfyi-zone" data-zone="timing">
    ${Array.from({ length: 7 }, (_, i) => {
    var _a2;
    return i % 2 === 0 ? `<rect x="${72 + i * 10}" y="62" width="9" height="9" fill="${escapeHTML10((_a2 = zoneMap["timing"]) != null ? _a2 : "#7C3AED")}"/>` : "";
  }).join("")}
    ${Array.from({ length: 7 }, (_, i) => {
    var _a2;
    return i % 2 === 0 ? `<rect x="62" y="${72 + i * 10}" width="9" height="9" fill="${escapeHTML10((_a2 = zoneMap["timing"]) != null ? _a2 : "#7C3AED")}"/>` : "";
  }).join("")}
  </g>

  <!-- Finder: top-left -->
  <g class="tagfyi-zone" data-zone="finder">
    <rect x="16" y="16" width="48" height="48" fill="${escapeHTML10((_b = zoneMap["finder"]) != null ? _b : "#4F46E5")}"/>
    <rect x="22" y="22" width="36" height="36" fill="white"/>
    <rect x="28" y="28" width="24" height="24" fill="${escapeHTML10((_c = zoneMap["finder"]) != null ? _c : "#4F46E5")}"/>
  </g>

  <!-- Finder: top-right -->
  <g class="tagfyi-zone" data-zone="finder">
    <rect x="156" y="16" width="48" height="48" fill="${escapeHTML10((_d = zoneMap["finder"]) != null ? _d : "#4F46E5")}"/>
    <rect x="162" y="22" width="36" height="36" fill="white"/>
    <rect x="168" y="28" width="24" height="24" fill="${escapeHTML10((_e = zoneMap["finder"]) != null ? _e : "#4F46E5")}"/>
  </g>

  <!-- Finder: bottom-left -->
  <g class="tagfyi-zone" data-zone="finder">
    <rect x="16" y="156" width="48" height="48" fill="${escapeHTML10((_f = zoneMap["finder"]) != null ? _f : "#4F46E5")}"/>
    <rect x="22" y="162" width="36" height="36" fill="white"/>
    <rect x="28" y="168" width="24" height="24" fill="${escapeHTML10((_g = zoneMap["finder"]) != null ? _g : "#4F46E5")}"/>
  </g>

  <!-- Format information strips (adjacent to top-left finder) -->
  <g class="tagfyi-zone" data-zone="format">
    <rect x="68" y="16" width="8" height="48" fill="${escapeHTML10((_h = zoneMap["format"]) != null ? _h : "#0EA5E9")}" opacity="0.7"/>
    <rect x="16" y="68" width="48" height="8" fill="${escapeHTML10((_i = zoneMap["format"]) != null ? _i : "#0EA5E9")}" opacity="0.7"/>
  </g>

  <!-- Alignment pattern (bottom-right area) -->
  <g class="tagfyi-zone" data-zone="align">
    <rect x="155" y="155" width="33" height="33" fill="${escapeHTML10((_j = zoneMap["align"]) != null ? _j : "#06B6D4")}"/>
    <rect x="161" y="161" width="21" height="21" fill="white"/>
    <rect x="167" y="167" width="11" height="11" fill="${escapeHTML10((_k = zoneMap["align"]) != null ? _k : "#06B6D4")}"/>
  </g>

  <!-- Hover overlay (transparent, covers entire SVG for hitTest) -->
  <rect x="0" y="0" width="220" height="220" fill="transparent"/>
</svg>`;
}
var EAN13_ZONES = [
  { id: "quiet", name: "Quiet Zone", color: "#e2e8f0", description: "White space to the left and right of the barcode (minimum 11 modules). Scanners need this clear space to detect the start and end of the symbol." },
  { id: "guard", name: "Guard Bars", color: "#1e293b", description: "Special patterns at left edge, centre, and right edge. Slightly taller than data bars. Tell the scanner where the barcode begins and ends and whether to read left-to-right or right-to-left." },
  { id: "left", name: "Left Data (LNSR)", color: "#4F46E5", description: "Digits 2-7 encoded using odd parity (L-code / N-code). The encoding pattern of these 6 characters also encodes the first digit of the EAN-13." },
  { id: "right", name: "Right Data (RSER)", color: "#7C3AED", description: "Digits 8-13 encoded using even parity (R-code). Mirror complement of L-codes, making EAN-13 omnidirectionally scannable." },
  { id: "check", name: "Check Digit", color: "#0EA5E9", description: "The 13th digit is a weighted modulo-10 checksum of the first 12. Catches single-digit transcription errors and most transpositions." },
  { id: "number", name: "Human Readable", color: "#10B981", description: "The 13 digits printed below bars in OCR-B typeface. The first digit appears to the left of the barcode since it has no dedicated bar encoding space." }
];
function renderEAN13SVG(zones, _accent) {
  var _a, _b, _c, _d, _e, _f;
  const zoneMap = zoneColorMap(zones);
  const moduleW = 1.9;
  const startX = 20;
  const barcodeH = 120;
  const barcodeY = 40;
  const guardExtra = 8;
  function bar(x2, w, color, tall = false) {
    const h = tall ? barcodeH + guardExtra : barcodeH;
    const y = tall ? barcodeY - guardExtra / 2 : barcodeY;
    return `<rect x="${x2.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${h}" fill="${escapeHTML10(color)}"/>`;
  }
  const bars = [];
  let x = startX;
  bars.push(`<rect x="0" y="${barcodeY - guardExtra}" width="${startX}" height="${barcodeH + guardExtra * 2}" fill="${escapeHTML10((_a = zoneMap["quiet"]) != null ? _a : "#e2e8f0")}" class="tagfyi-zone" data-zone="quiet"/>`);
  const gc = (_b = zoneMap["guard"]) != null ? _b : "#1e293b";
  bars.push(`<g class="tagfyi-zone" data-zone="guard">`);
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  x += moduleW;
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  bars.push(`</g>`);
  const leftData = [13, 25, 19, 61, 35, 53];
  bars.push(`<g class="tagfyi-zone" data-zone="left">`);
  leftData.forEach((pattern) => {
    var _a2;
    for (let bit = 6; bit >= 0; bit--) {
      if (pattern & 1 << bit) {
        bars.push(bar(x, moduleW, (_a2 = zoneMap["left"]) != null ? _a2 : "#4F46E5"));
      }
      x += moduleW;
    }
  });
  bars.push(`</g>`);
  bars.push(`<g class="tagfyi-zone" data-zone="guard">`);
  x += moduleW;
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  x += moduleW;
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  x += moduleW;
  bars.push(`</g>`);
  const rightData = [114, 92, 110, 118, 98];
  bars.push(`<g class="tagfyi-zone" data-zone="right">`);
  rightData.forEach((pattern) => {
    var _a2;
    for (let bit = 6; bit >= 0; bit--) {
      if (pattern & 1 << bit) {
        bars.push(bar(x, moduleW, (_a2 = zoneMap["right"]) != null ? _a2 : "#7C3AED"));
      }
      x += moduleW;
    }
  });
  bars.push(`</g>`);
  const checkPattern = 120;
  bars.push(`<g class="tagfyi-zone" data-zone="check">`);
  for (let bit = 6; bit >= 0; bit--) {
    if (checkPattern & 1 << bit) {
      bars.push(bar(x, moduleW, (_c = zoneMap["check"]) != null ? _c : "#0EA5E9"));
    }
    x += moduleW;
  }
  bars.push(`</g>`);
  bars.push(`<g class="tagfyi-zone" data-zone="guard">`);
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  x += moduleW;
  bars.push(bar(x, moduleW, gc, true));
  x += moduleW;
  bars.push(`</g>`);
  bars.push(`<rect x="${x}" y="${barcodeY - guardExtra}" width="${220 - x}" height="${barcodeH + guardExtra * 2}" fill="${escapeHTML10((_d = zoneMap["quiet"]) != null ? _d : "#e2e8f0")}" class="tagfyi-zone" data-zone="quiet"/>`);
  const textY = barcodeY + barcodeH + 5;
  bars.push(`<rect x="${startX}" y="${textY}" width="${x - startX}" height="16" fill="${escapeHTML10((_e = zoneMap["number"]) != null ? _e : "#10B981")}" opacity="0.15" class="tagfyi-zone" data-zone="number"/>`);
  bars.push(`<text x="${startX + 5}" y="${textY + 11}" font-size="9" font-family="monospace" fill="${escapeHTML10((_f = zoneMap["number"]) != null ? _f : "#10B981")}" class="tagfyi-zone" data-zone="number">4 006381 333931</text>`);
  return `<svg viewBox="0 0 220 ${barcodeY + barcodeH + guardExtra + 25}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block">${bars.join("")}</svg>`;
}
var CODE128_ZONES = [
  { id: "quiet", name: "Quiet Zone", color: "#e2e8f0", description: "Minimum 10\xD7 clear space on each side of the barcode. Prevents adjacent text or graphics from interfering with the scan." },
  { id: "start", name: "Start Character", color: "#4F46E5", description: "One of three start characters (A, B, or C) that identifies the initial character set. Followed by a check character to validate the encoding." },
  { id: "data", name: "Data Characters", color: "#10B981", description: "Each character encoded as 3 bars + 3 spaces (6 elements, 11 modules total). Code 128 can encode all 128 ASCII characters and has very high information density." },
  { id: "fnc", name: "FNC Characters", color: "#06B6D4", description: "Function characters (FNC1\u20134) that signal special modes. FNC1 in position 1 creates a GS1-128 (UCC/EAN-128) barcode used in logistics." },
  { id: "check", name: "Check Character", color: "#0EA5E9", description: "Weighted sum of all character values modulo 103. Mandatory \u2014 every Code 128 barcode ends with this single validation character." },
  { id: "stop", name: "Stop Character", color: "#7C3AED", description: "Fixed pattern (13 modules: 2-3-3-1-1-3) that terminates every Code 128 barcode. Always the same, regardless of start character chosen." }
];
function renderCode128SVG(zones, _accent) {
  var _a, _b;
  const zoneMap = zoneColorMap(zones);
  const barcodeY = 30;
  const barcodeH = 100;
  const mW = 2.5;
  function bar(x2, w, color) {
    return `<rect x="${x2.toFixed(1)}" y="${barcodeY}" width="${w.toFixed(1)}" height="${barcodeH}" fill="${escapeHTML10(color)}"/>`;
  }
  const bars = [];
  let x = 14;
  bars.push(`<rect x="0" y="${barcodeY - 4}" width="${x}" height="${barcodeH + 8}" fill="${escapeHTML10((_a = zoneMap["quiet"]) != null ? _a : "#e2e8f0")}" class="tagfyi-zone" data-zone="quiet"/>`);
  const startPattern = [2, 1, 1, 2, 1, 4];
  bars.push(`<g class="tagfyi-zone" data-zone="start">`);
  startPattern.forEach((w, i) => {
    var _a2;
    if (i % 2 === 0) bars.push(bar(x, w * mW, (_a2 = zoneMap["start"]) != null ? _a2 : "#4F46E5"));
    x += w * mW;
  });
  bars.push(`</g>`);
  const dataPatterns = [
    [1, 1, 2, 2, 1, 3],
    // B
    [2, 2, 1, 1, 2, 2],
    // A
    [3, 1, 2, 1, 1, 2],
    // R
    [1, 2, 1, 3, 2, 1],
    // C
    [1, 3, 1, 2, 2, 1],
    // O
    [2, 1, 3, 1, 1, 2],
    // D
    [1, 2, 2, 1, 1, 3]
    // E
  ];
  bars.push(`<g class="tagfyi-zone" data-zone="data">`);
  dataPatterns.forEach((pattern) => {
    pattern.forEach((w, i) => {
      var _a2;
      if (i % 2 === 0) bars.push(bar(x, w * mW, (_a2 = zoneMap["data"]) != null ? _a2 : "#10B981"));
      x += w * mW;
    });
  });
  bars.push(`</g>`);
  const fncPattern = [1, 1, 4, 1, 1, 1];
  bars.push(`<g class="tagfyi-zone" data-zone="fnc">`);
  fncPattern.forEach((w, i) => {
    var _a2;
    if (i % 2 === 0) bars.push(bar(x, w * mW, (_a2 = zoneMap["fnc"]) != null ? _a2 : "#06B6D4"));
    x += w * mW;
  });
  bars.push(`</g>`);
  const checkPattern = [2, 1, 1, 2, 3, 1];
  bars.push(`<g class="tagfyi-zone" data-zone="check">`);
  checkPattern.forEach((w, i) => {
    var _a2;
    if (i % 2 === 0) bars.push(bar(x, w * mW, (_a2 = zoneMap["check"]) != null ? _a2 : "#0EA5E9"));
    x += w * mW;
  });
  bars.push(`</g>`);
  const stopPattern = [2, 3, 3, 1, 1, 3, 2];
  bars.push(`<g class="tagfyi-zone" data-zone="stop">`);
  stopPattern.forEach((w, i) => {
    var _a2;
    if (i % 2 === 0) bars.push(bar(x, w * mW, (_a2 = zoneMap["stop"]) != null ? _a2 : "#7C3AED"));
    x += w * mW;
  });
  bars.push(`</g>`);
  bars.push(`<rect x="${x}" y="${barcodeY - 4}" width="${220 - x}" height="${barcodeH + 8}" fill="${escapeHTML10((_b = zoneMap["quiet"]) != null ? _b : "#e2e8f0")}" class="tagfyi-zone" data-zone="quiet"/>`);
  bars.push(`<text x="${(x / 2 + 7).toFixed(0)}" y="${barcodeY + barcodeH + 14}" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--muted)">BARCODE</text>`);
  return `<svg viewBox="0 0 220 ${barcodeY + barcodeH + 25}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block">${bars.join("")}</svg>`;
}
var SYMBOLOGIES = {
  "qr-code": {
    id: "qr-code",
    name: "QR Code",
    subtitle: "ISO/IEC 18004 \u2014 2D matrix symbology",
    learnSlug: "qr-code",
    zones: QR_ZONES,
    renderSVG: renderQRSVG
  },
  "ean-13": {
    id: "ean-13",
    name: "EAN-13",
    subtitle: "ISO/IEC 15420 \u2014 13-digit retail barcode",
    learnSlug: "ean-13",
    zones: EAN13_ZONES,
    renderSVG: renderEAN13SVG
  },
  "code-128": {
    id: "code-128",
    name: "Code 128",
    subtitle: "ISO/IEC 15417 \u2014 High-density linear barcode",
    learnSlug: "code-128",
    zones: CODE128_ZONES,
    renderSVG: renderCode128SVG
  }
};
var DEFAULT_SYMBOLOGY = "qr-code";
function initAnatomyTool(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const symbologyId = (_a = dataset.symbology) != null ? _a : DEFAULT_SYMBOLOGY;
  const symbology = (_b = SYMBOLOGIES[symbologyId]) != null ? _b : SYMBOLOGIES[DEFAULT_SYMBOLOGY];
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-tool");
  const style = shadow.querySelector("style");
  if (style) {
    style.textContent += `
.tagfyi-anatomy-wrap {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}
.tagfyi-anatomy-svg-wrap {
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
}
.tagfyi-anatomy-legend {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
}
.tagfyi-anatomy-legend-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: default;
  transition: background 0.12s;
}
.tagfyi-anatomy-legend-item:hover,
.tagfyi-anatomy-legend-item.active {
  background: var(--surface);
}
.tagfyi-anatomy-swatch {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 2px;
  border: 1px solid rgba(0,0,0,0.1);
}
.tagfyi-anatomy-legend-text {
  flex: 1;
  min-width: 0;
}
.tagfyi-anatomy-zone-name {
  font-size: 11px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}
.tagfyi-anatomy-zone-desc {
  font-size: 10px;
  color: var(--muted);
  margin: 1px 0 0;
  line-height: 1.4;
  display: none;
}
.tagfyi-anatomy-legend-item.active .tagfyi-anatomy-zone-desc {
  display: block;
}
.tagfyi-zone {
  cursor: pointer;
  transition: opacity 0.15s;
}
.tagfyi-zone:hover {
  opacity: 0.85;
}
.tagfyi-symbology-picker {
  display: flex;
  gap: 4px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}
.tagfyi-sym-btn {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.12s;
}
.tagfyi-sym-btn:hover {
  border-color: var(--accent);
  color: var(--text);
}
.tagfyi-sym-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}
    `;
  }
  function buildContent(sym) {
    container.innerHTML = "";
    const header = document.createElement("div");
    header.className = "tagfyi-scan-strip";
    header.innerHTML = `
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${escapeHTML10(sym.name)} Anatomy</p>
        <p class="tagfyi-scan-strip-meta">${escapeHTML10(sym.subtitle)}</p>
      </div>
    `;
    container.appendChild(header);
    const picker = document.createElement("div");
    picker.className = "tagfyi-symbology-picker";
    Object.values(SYMBOLOGIES).forEach((s) => {
      const btn = document.createElement("button");
      btn.className = "tagfyi-sym-btn" + (s.id === sym.id ? " active" : "");
      btn.textContent = s.name;
      btn.addEventListener("click", () => buildContent(s));
      picker.appendChild(btn);
    });
    container.appendChild(picker);
    const svgWrap = document.createElement("div");
    svgWrap.className = "tagfyi-anatomy-wrap";
    const svgInner = document.createElement("div");
    svgInner.className = "tagfyi-anatomy-svg-wrap";
    svgInner.innerHTML = sym.renderSVG(sym.zones, "#94a3b8");
    svgWrap.appendChild(svgInner);
    container.appendChild(svgWrap);
    const legend = document.createElement("div");
    legend.className = "tagfyi-anatomy-legend";
    const legendItems = /* @__PURE__ */ new Map();
    sym.zones.forEach((zone) => {
      const item = document.createElement("div");
      item.className = "tagfyi-anatomy-legend-item";
      item.dataset.zone = zone.id;
      item.innerHTML = `
        <div class="tagfyi-anatomy-swatch" style="background:${escapeHTML10(zone.color)}"></div>
        <div class="tagfyi-anatomy-legend-text">
          <p class="tagfyi-anatomy-zone-name">${escapeHTML10(zone.name)}</p>
          <p class="tagfyi-anatomy-zone-desc">${escapeHTML10(zone.description)}</p>
        </div>
      `;
      item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        legendItems.forEach((i) => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
      legend.appendChild(item);
      legendItems.set(zone.id, item);
    });
    container.appendChild(legend);
    const svgZones = svgInner.querySelectorAll(".tagfyi-zone");
    svgZones.forEach((zoneEl) => {
      const zoneId = zoneEl.dataset.zone;
      if (!zoneId) return;
      zoneEl.addEventListener("mouseenter", () => {
        var _a2;
        legendItems.forEach((i) => i.classList.remove("active"));
        (_a2 = legendItems.get(zoneId)) == null ? void 0 : _a2.classList.add("active");
      });
      zoneEl.addEventListener("mouseleave", () => {
        legendItems.forEach((i) => i.classList.remove("active"));
      });
    });
    const actions = document.createElement("div");
    actions.className = "tagfyi-actions";
    actions.innerHTML = `
      <a class="tagfyi-link" href="https://${escapeHTML10(config.domain)}/formats/${escapeHTML10(sym.learnSlug)}/" target="_blank" rel="noopener">
        ${escapeHTML10(sym.name)} deep dive on ${escapeHTML10(config.name)} ${externalLinkIcon}
      </a>
    `;
    container.appendChild(actions);
    const powered = document.createElement("span");
    powered.className = "tagfyi-powered";
    powered.innerHTML = poweredByHTML(config);
    container.appendChild(powered);
  }
  buildContent(symbology);
}

// src/_entry_barcodefyi.ts
function initWidget(el, type, config) {
  switch (type) {
    case "spec":
      initSpecWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "features":
      initFeaturesWidget(el, config);
      break;
    case "standard":
      initStandardWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "tooltip":
      initTooltipWidget(el, config);
      break;
    case "faq":
      initFaqWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "anatomy":
      initAnatomyTool(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"barcodefyi","name":"BarcodeFYI","domain":"barcodefyi.com","accent":"#059669","attribute":"data-barcodefyi","apiBase":"https://barcodefyi.com/api/v1/","searchPath":"/search/","entitySlug":"symbologies","entityName":"Barcode Symbologies"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"barcodefyi","name":"BarcodeFYI","domain":"barcodefyi.com","accent":"#059669","attribute":"data-barcodefyi","apiBase":"https://barcodefyi.com/api/v1/","searchPath":"/search/","entitySlug":"symbologies","entityName":"Barcode Symbologies"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"barcodefyi","name":"BarcodeFYI","domain":"barcodefyi.com","accent":"#059669","attribute":"data-barcodefyi","apiBase":"https://barcodefyi.com/api/v1/","searchPath":"/search/","entitySlug":"symbologies","entityName":"Barcode Symbologies"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"barcodefyi","name":"BarcodeFYI","domain":"barcodefyi.com","accent":"#059669","attribute":"data-barcodefyi","apiBase":"https://barcodefyi.com/api/v1/","searchPath":"/search/","entitySlug":"symbologies","entityName":"Barcode Symbologies"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"barcodefyi","name":"BarcodeFYI","domain":"barcodefyi.com","accent":"#059669","attribute":"data-barcodefyi","apiBase":"https://barcodefyi.com/api/v1/","searchPath":"/search/","entitySlug":"symbologies","entityName":"Barcode Symbologies"}'.site;
  const defs = [
    [`${site}-spec`, initSpecWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slug-a", "slug-b"]],
    [`${site}-features`, initFeaturesWidget, ["slug"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-faq`, initFaqWidget, ["slug", "category"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-anatomy`, initAnatomyTool, ["slug", "format"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();

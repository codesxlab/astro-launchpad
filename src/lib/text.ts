const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]!);
}

/** True for links that leave the site (http/https), false for anchors and mailto. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/**
 * Turns an in-page anchor into a link that also works from other pages,
 * e.g. `#about` -> `/#about` on the 404 page.
 */
export function resolveHref(href: string, onHome: boolean): string {
  return !onHome && href.startsWith('#') ? `/${href}` : href;
}

/** Attributes for an anchor: external links open in a new tab. */
export function linkAttrs(href: string): { target?: string; rel?: string } {
  return isExternal(href) ? { target: '_blank', rel: 'noopener' } : {};
}

/**
 * Renders `InlineText`: escapes HTML and turns `[label](url)` into links.
 * Use with `set:html`.
 */
export function inlineText(value: string, linkClass = 'inline-link'): string {
  return escapeHtml(value).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, url: string) => {
    const external = isExternal(url) ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${linkClass}" href="${url}"${external}>${label}</a>`;
  });
}

/** Keeps the last two words together, so a line never ends on a lone word. */
export function splitLastWords(value: string, count = 2): [head: string, tail: string] {
  const words = value.trim().split(/\s+/);
  if (words.length <= count) return ['', value.trim()];
  return [words.slice(0, -count).join(' ') + ' ', words.slice(-count).join(' ')];
}

/** Zero-padded index, e.g. `01`. */
export function pad(index: number): string {
  return String(index).padStart(2, '0');
}

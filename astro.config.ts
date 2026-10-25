import { defineConfig } from 'astro/config';
import site from './src/site.config';

export default defineConfig({
  site: site.url,
  // Keep HTML-aware whitespace handling (the Astro 7 default, 'jsx', drops
  // spaces between inline elements).
  compressHTML: true,
  // `:where()` scoping keeps component selectors at their written specificity.
  scopedStyleStrategy: 'where',
  build: {
    // One small page: inlining the CSS removes the only render-blocking requests.
    inlineStylesheets: 'always',
  },
});

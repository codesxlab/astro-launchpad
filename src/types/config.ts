/**
 * Shape of `src/site.config.ts`. Every visible string on the page lives in
 * that one file, so a new site only needs new data, not new components.
 *
 * Rich text: fields typed as `InlineText` accept `[label](https://url)` links.
 * Everything else is rendered as plain, escaped text.
 */

export type IconName =
  | 'arrow'
  | 'github'
  | 'check-circle'
  | 'mail'
  | 'cpu'
  | 'bolt'
  | 'terminal'
  | 'window'
  | 'file'
  | 'pen'
  | 'code'
  | 'chat'
  | 'menu';

/** Plain text that may contain `[label](url)` links. */
export type InlineText = string;

export interface NavLink {
  label: string;
  /** In-page anchor such as `#about`, or an absolute URL. */
  href: string;
}

export interface Action {
  label: string;
  href: string;
  variant: 'primary' | 'ghost' | 'light' | 'outline-light';
  /** `arrow` trails the label; any other icon leads it. */
  icon?: IconName;
}

export interface SectionHeading {
  /** Small label above the title, e.g. `01 · What we build`. */
  eyebrow: string;
  title: string;
  lead: string;
}

/* ---------- Terminal-style visuals ---------- */

export type TerminalLine =
  /** `$ <bin> <args>` – `bin` is highlighted, `cursor` adds a blinking caret. */
  | { type: 'command'; bin?: string; args: string; cursor?: boolean }
  /** Dimmed output line. */
  | { type: 'output'; text: string }
  /** `✓ text` */
  | { type: 'success'; text: string }
  /** `! text` */
  | { type: 'warning'; text: string }
  /** A progress bar. */
  | { type: 'progress' };

/* ---------- Sections ---------- */

export interface HeroConfig {
  status: {
    text: string;
    /** Appended after the text, hidden on small screens. */
    extra?: string;
  };
  /** Each entry is one line; `accent` is appended to the last line. */
  title: { lines: string[]; accent: string };
  description: string;
  actions: Action[];
  points: string[];
  demo: WorkflowDemoConfig;
}

export interface WorkflowDemoConfig {
  windowTitle: string;
  badge: string;
  input: { label: string; text: string };
  ai: {
    title: string;
    waiting: string;
    running: string;
    done: string;
    badge: string;
  };
  output: {
    fileName: string;
    note: string;
    /** Rendered as a JSON object, in order. */
    fields: [key: string, value: string][];
  };
  review: {
    title: string;
    note: string;
    pending: string;
    approved: string;
  };
  caption: string;
}

export interface FocusStripConfig {
  label: string;
  items: string[];
}

export interface ExpertiseCard {
  icon: IconName;
  title: string;
  text: string;
  tags: string[];
  /** Dark, highlighted card. */
  featured?: boolean;
  /** Small pipeline diagram; the item matching `flowActive` is highlighted. */
  flow?: string[];
  flowActive?: string;
  /** Columns on desktop (the grid has 3). */
  span?: 1 | 2;
}

export interface ExpertiseConfig {
  heading: SectionHeading;
  cards: ExpertiseCard[];
  callout: {
    title: string;
    text: string;
    link: NavLink;
    span?: 1 | 2;
  };
}

export interface AiConfig {
  heading: SectionHeading;
  router: {
    title: string;
    text: string;
    /** Label of the incoming box. */
    source: string;
    /** Exactly three targets fit the diagram. */
    targets: [string, string, string];
  };
  structured: {
    title: string;
    text: string;
    sample: [key: string, value: string];
  };
  approval: {
    title: string;
    text: string;
    pending: string;
    approved: string;
  };
  evaluated: {
    title: string;
    text: string;
  };
  uses: { icon: IconName; title: string; text: string }[];
  note: string;
}

export interface OssSpotlightConfig {
  href: string;
  tag: string;
  title: string;
  text: string;
  chips: string[];
  cta: string;
  terminal: { title: string; lines: TerminalLine[] };
}

export type ConceptVisual =
  | {
      type: 'dashboard';
      ariaLabel: string;
      windowTitle: string;
      heading: string;
      stats: [value: string, label: string][];
      /** Bar heights in percent; highlighted bars are drawn in the accent color. */
      bars: { height: number; highlight?: boolean }[];
    }
  | {
      type: 'terminal';
      ariaLabel: string;
      windowTitle: string;
      shell: string;
      lines: TerminalLine[];
    };

export interface ConceptCardConfig {
  label: string;
  meta: string;
  badge: string;
  title: string;
  text: string;
  /** `dark` uses the dark media background. */
  tone?: 'light' | 'dark';
  visual: ConceptVisual;
}

export interface LabConfig {
  heading: SectionHeading;
  spotlight?: OssSpotlightConfig;
  concepts: ConceptCardConfig[];
  note?: string;
}

export interface ApproachConfig {
  heading: SectionHeading;
  steps: { label: string; title: string; text: string }[];
  tech: { label: string; items: string[] };
}

export interface RoadmapPhase {
  status: string;
  title: string;
  text: InlineText;
  /** The phase in progress gets the animated border and progress ring. */
  current?: boolean;
  /** 0–1, shown in the ring of the current phase. */
  progress?: number;
}

export interface RoadmapConfig {
  heading: SectionHeading;
  phases: RoadmapPhase[];
}

export interface AboutConfig {
  eyebrow: string;
  /** Two lines; the second is drawn in the accent color. */
  title: [string, string];
  /** The first paragraph is set larger. */
  paragraphs: string[];
  values: { label: string; value: string }[];
}

export interface ContactConfig {
  eyebrow: string;
  title: string;
  text: string;
  email: string;
  /** Subject line pre-filled by the primary button. */
  subject?: string;
  cta: string;
}

export interface FooterConfig {
  tagline: string;
  links: NavLink[];
  backToTop: string;
}

export interface NotFoundConfig {
  title: string;
  text: string;
  homeLabel: string;
}

export interface SiteConfig {
  /** Absolute production URL without a trailing slash. */
  url: string;
  lang: string;
  name: string;
  /** Letter of `name` drawn in the accent color, e.g. `X` in `CodesXlab`. */
  nameHighlight?: string;
  meta: {
    title: string;
    description: string;
    socialTitle: string;
    socialDescription: string;
    /** Path inside `public/`, e.g. `/og-cover.png` (1200×630). */
    socialImage: string;
    socialImageAlt: string;
    themeColor: string;
  };
  nav: { links: NavLink[]; cta: NavLink };
  hero: HeroConfig;
  focus: FocusStripConfig;
  expertise: ExpertiseConfig;
  ai: AiConfig;
  lab: LabConfig;
  approach: ApproachConfig;
  roadmap: RoadmapConfig;
  about: AboutConfig;
  contact: ContactConfig;
  footer: FooterConfig;
  notFound: NotFoundConfig;
  /** Shown in the skip link and other accessibility labels. */
  a11y: {
    skipLink: string;
    /** aria-label of the hero section. */
    hero: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    footerNav: string;
    backToTop: string;
  };
}

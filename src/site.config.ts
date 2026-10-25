import type { SiteConfig } from './types/config';

/**
 * All copy for the site. Edit this file to make the theme your own;
 * the components only read from here.
 */
const config: SiteConfig = {
  url: 'https://www.codesxlab.com',
  lang: 'en',
  name: 'CodesXlab',
  nameHighlight: 'X',

  meta: {
    title: 'CodesXlab — Practical AI Software',
    description:
      'CodesXlab is an early-stage AI software company building automation, developer tools, and web applications on top of leading foundation models — with humans in control.',
    socialTitle: 'CodesXlab — Practical AI software',
    socialDescription:
      'AI automation. Developer tools. Web applications. Model-agnostic, structured, and human-in-the-loop.',
    socialImage: '/og-cover.png',
    socialImageAlt: 'CodesXlab — Less noise. Better software.',
    themeColor: '#f6f6f3',
  },

  nav: {
    links: [
      { label: 'Expertise', href: '#expertise' },
      { label: 'AI', href: '#ai' },
      { label: 'Lab', href: '#lab' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'About', href: '#about' },
    ],
    cta: { label: 'Get in touch', href: '#contact' },
  },

  hero: {
    status: { text: 'Early-stage AI software company', extra: '· building now' },
    title: { lines: ['Less noise.', 'Better'], accent: 'software.' },
    description:
      'CodesXlab builds AI-powered automation, developer tools, and web applications on top of leading foundation models — structured, measurable, and always with a human in control.',
    actions: [
      { label: 'See how we use AI', href: '#ai', variant: 'primary', icon: 'arrow' },
      {
        label: 'View on GitHub',
        href: 'https://github.com/codesxlab/intentflow',
        variant: 'ghost',
        icon: 'github',
      },
    ],
    points: ['Model-agnostic', 'Structured outputs', 'Human-in-the-loop'],
    demo: {
      windowTitle: 'codesxlab / workflow-demo',
      badge: 'CONCEPT',
      input: {
        label: 'Incoming request',
        text: 'Hi! Could you move our onboarding call to next Tuesday and send the updated agenda to the team?',
      },
      ai: {
        title: 'AI layer',
        waiting: 'Waiting for input…',
        running: 'Extracting intent & details…',
        done: 'Structured action ready',
        badge: 'MODEL: CONFIGURABLE',
      },
      output: {
        fileName: 'structured_action.json',
        note: 'schema-validated',
        fields: [
          ['intent', 'reschedule_meeting'],
          ['when', 'next_tuesday'],
          ['follow_up', 'send_updated_agenda'],
          ['approval', 'required'],
        ],
      },
      review: {
        title: 'Human review',
        note: 'Nothing runs without approval',
        pending: 'AWAITING REVIEW',
        approved: 'APPROVED ✓',
      },
      caption: 'Concept visualization · illustrates an approach, not a shipped product',
    },
  },

  focus: {
    label: 'Focus areas',
    items: ['AI Automation', 'Developer Tools', 'Web Applications'],
  },

  expertise: {
    heading: {
      eyebrow: '01 · What we build',
      title: 'Useful technology. Without the theater.',
      lead: 'Good software earns its place. We focus on the things that actually change how people work: automation that saves time, tooling that reduces friction, and applications that hold up in the real world.',
    },
    cards: [
      {
        icon: 'bolt',
        title: 'AI Automation',
        text: 'Intelligent workflows that connect systems, organize information, and remove repetitive tasks — with transparency and control built in.',
        tags: ['Workflow orchestration', 'LLM integrations', 'Internal operations'],
        featured: true,
        flow: ['request', 'model', 'review', 'action'],
        flowActive: 'model',
        span: 2,
      },
      {
        icon: 'terminal',
        title: 'Developer Tools',
        text: 'Purpose-built utilities, internal platforms, and engineering tools to make building, debugging, and shipping software more efficient.',
        tags: ['Internal tooling', 'API workflows', 'Engineering productivity'],
      },
      {
        icon: 'window',
        title: 'Web Applications',
        text: 'Fast, thoughtfully structured web products — from focused business applications to full SaaS platforms with room to grow.',
        tags: ['Product engineering', 'Full-stack development', 'Modern UX'],
      },
    ],
    callout: {
      title: 'One foundation, three disciplines.',
      text: 'Automation, tooling, and web products share the same core: reliable data flows, clear interfaces, and AI used only where it measurably helps.',
      link: { label: 'See how we use AI', href: '#ai' },
      span: 2,
    },
  },

  ai: {
    heading: {
      eyebrow: '02 · AI at the core',
      title: 'Foundation models, applied with discipline.',
      lead: "Our systems are designed to work with leading LLM APIs, such as OpenAI and Anthropic's Claude, while staying model-agnostic, measurable, and under human control.",
    },
    router: {
      title: 'Model-agnostic',
      text: 'Each task uses the model that fits it best — by quality, latency, and cost.',
      source: 'request',
      targets: ['OpenAI API', 'Claude API', 'Other LLM'],
    },
    structured: {
      title: 'Structured outputs',
      text: 'Schema-validated responses instead of free text, so automations stay predictable.',
      sample: ['intent', 'reschedule_meeting'],
    },
    approval: {
      title: 'Human-in-the-loop',
      text: "Consequential actions wait for a person's approval.",
      pending: 'AWAITING',
      approved: 'APPROVED ✓',
    },
    evaluated: {
      title: 'Evaluated',
      text: 'Designed to be tested on real examples and monitored once live.',
    },
    uses: [
      { icon: 'file', title: 'Document understanding', text: 'Requests and documents into structured, usable data.' },
      { icon: 'pen', title: 'Reviewed actions', text: 'Next steps that run only after a person approves.' },
      { icon: 'code', title: 'Developer assistance', text: 'Summaries, triage, and docs inside developer tools.' },
      { icon: 'chat', title: 'In-app assistance', text: "Context-aware help grounded in the user's own data." },
    ],
    note: 'Planned use cases · designed for the OpenAI API, the Claude API, and other LLM providers.',
  },

  lab: {
    heading: {
      eyebrow: '03 · Inside the lab',
      title: 'Ideas made tangible.',
      lead: 'We build in the open where we can. intentflow is our first open-source prototype; the two studies below are directions still on the workbench.',
    },
    spotlight: {
      href: 'https://github.com/codesxlab/intentflow',
      tag: 'Open source · MIT',
      title: 'intentflow',
      text: 'Our first open-source prototype. It turns free-text requests into schema-validated actions with any LLM, and nothing runs until a person approves. Ships with Claude and OpenAI adapters, a key-free demo, evals, and CI.',
      chips: ['TypeScript', 'Claude API', 'OpenAI API', 'Evals in CI'],
      cta: 'View on GitHub',
      terminal: {
        title: 'codesxlab/intentflow',
        lines: [
          { type: 'command', args: 'npm install' },
          { type: 'command', bin: 'npm run', args: 'demo' },
          { type: 'output', text: '→ localhost:3000 · no key' },
          { type: 'command', bin: 'npm run', args: 'eval' },
          { type: 'success', text: 'typecheck · tests · evals' },
        ],
      },
    },
    concepts: [
      {
        label: 'EXPLORATION 001 · AUTOMATION CONCEPT',
        meta: '01 / Systems design',
        badge: 'CONCEPT STUDY',
        title: 'A clearer way to orchestrate work.',
        text: 'Visual thinking around AI-assisted workflows, explicit approvals, and connected business operations.',
        visual: {
          type: 'dashboard',
          ariaLabel: 'Illustrative workflow management dashboard',
          windowTitle: 'flow / workspace',
          heading: 'Workflow overview',
          stats: [
            ['12', 'Pipelines'],
            ['04', 'Review steps'],
            ['03', 'Integrations'],
          ],
          bars: [
            { height: 38 },
            { height: 55 },
            { height: 46 },
            { height: 82, highlight: true },
            { height: 60 },
            { height: 70 },
            { height: 52 },
            { height: 94, highlight: true },
          ],
        },
      },
      {
        label: 'EXPLORATION 002 · DEV TOOL CONCEPT',
        meta: '02 / Developer experience',
        badge: 'CONCEPT STUDY',
        title: 'Less friction between idea and release.',
        text: 'Exploring practical development utilities that surface context, automate routine checks, and keep engineers in control.',
        tone: 'dark',
        visual: {
          type: 'terminal',
          ariaLabel: 'Illustrative developer command-line tool',
          windowTitle: '~/codesxlab/tooling',
          shell: 'zsh',
          lines: [
            { type: 'command', bin: 'cx', args: 'inspect --project api' },
            { type: 'output', text: '→ Reading project configuration...' },
            { type: 'success', text: '12 routes indexed' },
            { type: 'success', text: '6 checks completed' },
            { type: 'progress' },
            { type: 'warning', text: '2 suggestions available' },
            { type: 'command', bin: 'cx', args: 'review --interactive', cursor: true },
          ],
        },
      },
    ],
    note: '* These are illustrative interface and product-direction studies, not claims of shipped products or existing customers.',
  },

  approach: {
    heading: {
      eyebrow: '04 · How we think',
      title: 'Built with intention. Not just ambition.',
      lead: 'AI is a tool, not the whole strategy. The best products start with a specific problem, a clear technical decision, and a standard for what “done” actually means.',
    },
    steps: [
      { label: 'UNDERSTAND', title: 'Start with the problem.', text: 'Map the real workflow and the job users need done before choosing technology.' },
      { label: 'DESIGN', title: 'Clarity is a feature.', text: 'Make complex systems understandable through simple interfaces and predictable behavior.' },
      { label: 'ENGINEER', title: 'Build for the long run.', text: 'Prefer clean boundaries, testable components, and decisions that age well.' },
      { label: 'IMPROVE', title: 'Keep a human in the loop.', text: 'Use AI where it adds value, with review and control when outcomes matter.' },
    ],
    tech: {
      label: 'Technologies & patterns in our focus',
      items: [
        'TypeScript',
        'Node.js',
        'Python',
        'Modern frontend',
        'LLM APIs',
        'Structured outputs',
        'Evaluation',
        'Databases',
        'Cloud infrastructure',
      ],
    },
  },

  roadmap: {
    heading: {
      eyebrow: '05 · Where we are',
      title: 'Early, focused, and honest about it.',
      lead: "We're at the beginning — and we'd rather show a clear plan than inflated numbers. Here's how we're approaching the road ahead.",
    },
    phases: [
      {
        status: 'Now · in progress',
        title: 'Foundations',
        text: 'Our first open-source prototype, [intentflow](https://github.com/codesxlab/intentflow), is live. Next: defining our first product on top of it.',
        current: true,
        progress: 0.25,
      },
      {
        status: 'Next',
        title: 'Prototype & testing',
        text: 'A working prototype, tested with a small group of early users and refined on real feedback.',
      },
      {
        status: 'Later',
        title: 'Launch & iterate',
        text: 'Public launch, measured improvement, and expansion across our three focus areas.',
      },
    ],
  },

  about: {
    eyebrow: '06 · Who we are',
    title: ['Independent in spirit.', 'Technical by nature.'],
    paragraphs: [
      'CodesXlab is a software venture focused on the intersection of intelligent automation, developer experience, and modern web products.',
      'Our goal is straightforward: build software that people actually want to use — software that removes unnecessary steps, makes important work clearer, and is engineered to last.',
      "We're building our direction deliberately, with an emphasis on useful ideas, small experiments, and honest progress.",
    ],
    values: [
      { label: 'Focus', value: 'Useful ideas' },
      { label: 'Method', value: 'Small experiments' },
      { label: 'Standard', value: 'Honest progress' },
    ],
  },

  contact: {
    eyebrow: '07 · Say hello',
    title: "Let's build what's next.",
    text: "We're connecting with early users, design partners, and people who care about practical AI. If that's you, we'd love to hear from you.",
    email: 'hello@codesxlab.com',
    subject: 'Hello CodesXlab',
    cta: 'Get in touch',
  },

  footer: {
    tagline: 'Practical AI software',
    links: [
      { label: 'AI', href: '#ai' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'GitHub', href: 'https://github.com/codesxlab/intentflow' },
      { label: 'Email', href: 'mailto:hello@codesxlab.com' },
    ],
    backToTop: 'Back to top ↑',
  },

  notFound: {
    title: 'Page not found',
    text: "This page doesn't exist or has moved. Everything we do is on the home page — pick a section below.",
    homeLabel: 'Back to the home page',
  },

  a11y: {
    skipLink: 'Skip to main content',
    hero: 'Introduction',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer',
    backToTop: 'back to top',
  },
};

export default config;

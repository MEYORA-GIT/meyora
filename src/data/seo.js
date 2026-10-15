/**
 * Per-route SEO metadata.
 *
 * Used in two places:
 *  - at build time by scripts/prerender.js, to bake tags into each static page
 *  - at runtime by the Seo component, so tags update on client-side navigation
 */

export const SITE_URL = 'https://www.meyora.in';
export const SITE_NAME = 'Meyora';
export const DEFAULT_OG_IMAGE = '/favicon.svg';

/**
 * Google Search Console ownership verification. Baked into every prerendered
 * page by scripts/prerender.jsx. Not a secret — it is public in the HTML by
 * design, and only proves ownership of this domain.
 */
export const GOOGLE_SITE_VERIFICATION = 'zEqtu09b7dtCVKqCzpFoq9__BwBwFKYSL-IXDzOZjlc';

export const ROUTES = {
  '/': {
    title: 'Meyora — We solve problems worth solving',
    description:
      'Meyora is a problem-solving company. We partner with organizations to uncover root causes, engineer practical solutions, and create measurable impact through technology, automation, AI, data, and innovation.',
  },
  '/solutions': {
    title: 'Solutions — AI, automation, data and custom platforms | Meyora',
    description:
      'Fourteen capabilities, one selection rule: whichever gets you the outcome with the least complexity left behind. AI, automation, digital transformation, custom platforms, analytics, cloud, IoT and integration.',
  },
  '/philosophy': {
    title: 'Our Philosophy — Technology follows understanding | Meyora',
    description:
      'Technology is never the destination. Understanding people, processes and challenges comes first. The six principles behind how Meyora approaches every engagement.',
  },
  '/contact': {
    title: 'Contact — Start with the problem | Meyora',
    description:
      'Tell us what you are trying to solve, not what technology you think you need. Every engagement begins with a 45-minute problem framing call. Reply within one business day.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Meyora',
    description:
      'How Meyora collects, uses and protects personal data, and your rights under India’s Digital Personal Data Protection Act, 2023.',
    priority: '0.3',
  },
  '/terms': {
    title: 'Terms & Conditions | Meyora',
    description: 'The terms that govern your use of the Meyora website.',
    priority: '0.3',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Meyora',
    description: 'The cookies and browser storage the Meyora website uses, and how to change your choices.',
    priority: '0.3',
  },
};

export const ROUTE_PATHS = Object.keys(ROUTES);

export function getMeta(pathname) {
  return ROUTES[pathname] ?? ROUTES['/'];
}

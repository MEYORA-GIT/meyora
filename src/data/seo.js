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
};

export const ROUTE_PATHS = Object.keys(ROUTES);

export function getMeta(pathname) {
  return ROUTES[pathname] ?? ROUTES['/'];
}

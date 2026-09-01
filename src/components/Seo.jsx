import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeta, SITE_URL } from '../data/seo';

/**
 * Keeps document title / meta / canonical in sync on client-side navigation.
 *
 * The prerenderer already bakes correct tags into each static HTML file, so the
 * first paint and any crawler fetch are already right. This only handles the
 * case where a visitor moves between routes without a page reload.
 */
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) ?? [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getMeta(pathname);
    const url = SITE_URL + (pathname === '/' ? '' : pathname);

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [pathname]);

  return null;
}

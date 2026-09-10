import { useEffect } from 'react';

/**
 * Scroll-driven reveal + parallax, using IntersectionObserver and a single
 * rAF-throttled scroll listener.
 *
 * Progressive enhancement, deliberately:
 *   - Elements are fully visible in CSS by default. Only this hook adds the
 *     `.reveal` class that hides them, so prerendered HTML stays readable to
 *     crawlers and to anyone whose JS fails.
 *   - Honours prefers-reduced-motion: no hiding, no transforms, no listeners.
 *
 * Markup opts in with data attributes:
 *   data-reveal          fade + rise into view
 *   data-reveal-delay    stagger in ms
 *   data-parallax="0.2"  drift factor; positive moves slower than scroll
 */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));

    // Hide only now that JS is confirmed running.
    revealEls.forEach((el) => {
      el.classList.add('reveal');
      const delay = el.dataset.revealDelay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal--in');
          observer.unobserve(entry.target); // reveal once, don't re-hide
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Parallax: one listener, rAF-throttled, transform-only (no layout thrash).
    let frame = null;

    const update = () => {
      frame = null;
      const viewportH = window.innerHeight;

      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportH + 200) return;

        const factor = parseFloat(el.dataset.parallax) || 0;
        // 0 when the element is centred, ±1 at the viewport edges.
        const fromCentre = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
        el.style.setProperty('--parallax-y', `${(fromCentre * factor * 100).toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
      revealEls.forEach((el) => el.classList.remove('reveal', 'reveal--in'));
    };
  }, []);
}

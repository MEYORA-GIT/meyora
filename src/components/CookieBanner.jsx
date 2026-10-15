import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { onConsentOpen, readConsent, saveConsent } from '../lib/consent';

/**
 * Consent banner + preferences panel.
 *
 * - Renders nothing on the server and on first client paint, then decides from
 *   storage. The server can't know a visitor's choice, so rendering it there
 *   would cause a hydration mismatch.
 * - "Accept all" and "Necessary only" have equal visual weight: making refusal
 *   harder than acceptance is a dark pattern, and consent must be freely given.
 * - Reopened from the footer's "Cookie settings" link, so consent can be
 *   withdrawn as easily as it was given.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const existing = readConsent();
    if (existing) setAnalytics(existing.analytics);
    else setOpen(true);

    return onConsentOpen(() => {
      setAnalytics(readConsent()?.analytics ?? false);
      setExpanded(true);
      setOpen(true);
    });
  }, []);

  if (!open) return null;

  const decide = (choice) => {
    saveConsent({ analytics: choice });
    setOpen(false);
    setExpanded(false);
  };

  return (
    <section className="consent" role="region" aria-labelledby={titleId} aria-describedby={descId}>
      <div className="consent__body">
        <h2 id={titleId} className="consent__title">
          Your privacy choices
        </h2>
        <p id={descId} className="consent__text">
          We use only what&apos;s strictly necessary to run this site, and we don&apos;t sell or share your data for
          advertising. Optional analytics stay off unless you allow them. Read our{' '}
          <Link to="/cookie-policy">Cookie Policy</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        {expanded && (
          <div className="consent__prefs rise-in">
            <div className="consent__row">
              <div>
                <div className="consent__label">Strictly necessary</div>
                <div className="consent__hint">Remembers this choice. Always on — the site can&apos;t honour your choice without it.</div>
              </div>
              <span className="consent__always">Always on</span>
            </div>
            <label className="consent__row">
              <div>
                <div className="consent__label">Analytics</div>
                <div className="consent__hint">
                  Would help us understand which pages are useful. We don&apos;t currently run any analytics.
                </div>
              </div>
              <input
                type="checkbox"
                className="consent__switch"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            </label>
          </div>
        )}
      </div>

      <div className="consent__actions">
        {expanded ? (
          <button type="button" className="consent__btn" onClick={() => decide(analytics)}>
            Save choices
          </button>
        ) : (
          <button type="button" className="consent__btn consent__btn--link" onClick={() => setExpanded(true)}>
            Manage
          </button>
        )}
        <button type="button" className="consent__btn" onClick={() => decide(false)}>
          Necessary only
        </button>
        <button type="button" className="consent__btn" onClick={() => decide(true)}>
          Accept all
        </button>
      </div>
    </section>
  );
}

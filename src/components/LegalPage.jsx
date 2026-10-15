import { LEGAL } from '../data/legal';

/**
 * Shared shell for the legal pages: dark hero matching the rest of the site,
 * an effective date, a table of contents, and readable long-form body styles.
 *
 * `sections` is [{ id, title, body }]; each id becomes an anchor in the TOC.
 */
export default function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <div>
      <section
        className="pad-hero page-top"
        style={{ position: 'relative', background: 'var(--ink, #0D0D10)', color: '#FFFFFF', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 30% 30%, #000, transparent)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 4.6vw, 60px)',
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              margin: '22px 0 0',
            }}
          >
            {title}
          </h1>
          <p style={{ margin: '22px 0 0', fontSize: 17, lineHeight: 1.65, fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
            {intro}
          </p>
          <p
            style={{
              margin: '22px 0 0',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Effective {LEGAL.effectiveDate} · Version {LEGAL.policyVersion}
          </p>
        </div>
      </section>

      <section className="pad-md" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <article className="legal">
          <nav className="legal-toc" aria-label="On this page">
            <strong style={{ fontSize: 14 }}>On this page</strong>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>{s.title}</h2>
              {s.body}
            </section>
          ))}
        </article>
      </section>
    </div>
  );
}

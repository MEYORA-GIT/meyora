import { useNavigate } from 'react-router-dom';
import { SOLUTIONS, WORKFLOW, TECH } from '../data/content';
import { useToggleIndex } from '../hooks/useToggleIndex';

export default function Solutions() {
  const navigate = useNavigate();
  const [openSolution, toggleSolution] = useToggleIndex();

  return (
    <div>
      {/* Hero */}
      <section
        data-screen-label="Solutions / Hero"
        className="pad-hero page-top"
        style={{
          position: 'relative',
          background: 'var(--ink, #0D0D10)',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
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
        <div
          style={{
            position: 'absolute',
            width: 720,
            height: 720,
            top: -280,
            right: -140,
            background: 'radial-gradient(circle, var(--glow2, rgba(140,122,94,0.2)), transparent 62%)',
            filter: 'blur(20px)',
            animation: 'mDrift2 26s ease-in-out infinite',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Solutions
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(38px, 5.2vw, 74px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              margin: '26px 0 0',
              maxWidth: '26ch',
              textWrap: 'balance',
            }}
          >
            Every problem deserves the right solution
            <span style={{ color: 'rgba(255,255,255,0.42)' }}> — not the most popular technology.</span>
          </h1>
          <p style={{ maxWidth: '56ch', margin: '30px 0 0', fontSize: 18, lineHeight: 1.65, fontWeight: 300, color: 'rgba(255,255,255,0.62)' }}>
            Fourteen capabilities, one selection rule: whichever gets you the outcome with the least complexity left
            behind.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section data-screen-label="Solutions / Capabilities" className="pad-md" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div className="grid-capabilities" style={{ display: 'grid' }}>
            {SOLUTIONS.map((s, i) => {
              const open = openSolution === i;
              return (
                <button
                  key={s.title}
                  onClick={() => toggleSolution(i)}
                  className="card-border"
                  style={{
                    textAlign: 'left',
                    background: 'var(--paper, #FBFAF7)',
                    border: '1px solid var(--line, #E5E1D8)',
                    borderRadius: 18,
                    padding: '30px 32px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
                    color: 'var(--text, #16161B)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: 'var(--muted, #6E6A62)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 24,
                          fontWeight: 500,
                          letterSpacing: '-0.025em',
                          margin: 0,
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        flex: 'none',
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        border: '1px solid var(--line, #E5E1D8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        color: 'var(--muted, #6E6A62)',
                      }}
                    >
                      {open ? '−' : '+'}
                    </span>
                  </div>
                  {open ? (
                    <div className="rise-in" style={{ display: 'grid', gap: 18 }}>
                      <div className="detail-row">
                        <span
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10.5,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--muted, #6E6A62)',
                            paddingTop: 3,
                          }}
                        >
                          Problem
                        </span>
                        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--muted, #6E6A62)' }}>{s.problem}</p>
                      </div>
                      <div className="detail-row">
                        <span
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10.5,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--muted, #6E6A62)',
                            paddingTop: 3,
                          }}
                        >
                          Approach
                        </span>
                        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--muted, #6E6A62)' }}>{s.approach}</p>
                      </div>
                      <div className="detail-row">
                        <span
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10.5,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--accent, #B8853C)',
                            paddingTop: 3,
                          }}
                        >
                          Outcome
                        </span>
                        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--text, #16161B)', fontWeight: 450 }}>
                          {s.outcome}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <span style={{ fontSize: 14.5, color: 'var(--muted, #6E6A62)', opacity: 0.8, lineHeight: 1.5 }}>{s.teaser}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section
        data-screen-label="Solutions / How we work"
        className="pad-md"
        style={{
          background: 'var(--paper2, #F3F1EB)',
          borderTop: '1px solid var(--line, #E5E1D8)',
          borderBottom: '1px solid var(--line, #E5E1D8)',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--muted, #6E6A62)',
            }}
          >
            How we work
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.4vw, 46px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              margin: '22px 0 56px',
              maxWidth: '22ch',
            }}
          >
            A delivery rhythm you can plan around.
          </h2>
          <div
            className="grid-workflow-6"
            style={{
              display: 'grid',
              background: 'var(--line, #E5E1D8)',
              border: '1px solid var(--line, #E5E1D8)',
            }}
          >
            {WORKFLOW.map((w) => (
              <div
                key={w.num}
                style={{
                  background: 'var(--paper, #FBFAF7)',
                  padding: '30px 22px 34px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  minHeight: 210,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: 'var(--accent, #B8853C)' }}>
                  {w.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted, #6E6A62)' }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        data-screen-label="Solutions / Technology"
        className="pad-md-x0"
        style={{ background: 'var(--ink, #0D0D10)', color: '#FFFFFF', overflow: 'hidden' }}
      >
        <div className="pad-x" style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Technology
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.6vw, 50px)',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              margin: '22px 0 0',
              maxWidth: '24ch',
            }}
          >
            Technology-agnostic, deeply practised.
          </h2>
          <p style={{ maxWidth: '50ch', margin: '24px 0 0', fontSize: 17, lineHeight: 1.68, color: 'rgba(255,255,255,0.6)' }}>
            We keep a working stack, not a religion. Hover any layer to see what it&apos;s for.
          </p>
          <div className="grid-tech-4" style={{ display: 'grid', marginTop: 52 }}>
            {TECH.map((t) => (
              <div
                key={t.name}
                className="tech-card"
                style={{
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 14,
                  padding: 22,
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em' }}>
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {t.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-screen-label="Solutions / CTA" className="pad-md" style={{ background: 'var(--paper, #FBFAF7)', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(32px, 3.8vw, 52px)',
            letterSpacing: '-0.03em',
            margin: '0 auto',
            maxWidth: '24ch',
            lineHeight: 1.05,
          }}
        >
          Not sure which of these you need?
        </h2>
        <p style={{ margin: '22px auto 0', maxWidth: '46ch', fontSize: 18, lineHeight: 1.6, color: 'var(--muted, #6E6A62)' }}>
          Good. That&apos;s the conversation we prefer to start with.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="btn-dark"
          style={{ marginTop: 36, padding: '17px 36px', fontSize: 15.5, fontWeight: 500 }}
        >
          Talk to Meyora
        </button>
      </section>
    </div>
  );
}

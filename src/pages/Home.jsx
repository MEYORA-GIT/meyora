import { useNavigate } from 'react-router-dom';
import { PROBLEMS, WHY, INDUSTRIES, STEPS } from '../data/content';
import { useToggleIndex } from '../hooks/useToggleIndex';

const industriesLoop = [...INDUSTRIES, ...INDUSTRIES];

export default function Home() {
  const navigate = useNavigate();
  const [openProblem, toggleProblem] = useToggleIndex();

  return (
    <div>
      {/* Hero */}
      <section
        data-screen-label="Home / Hero"
        className="pad-hero hero-fill"
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
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 900,
            height: 900,
            top: -320,
            right: -180,
            background: 'radial-gradient(circle, var(--glow1, rgba(184,133,60,0.28)), transparent 62%)',
            filter: 'blur(20px)',
            animation: 'mDrift 22s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 760,
            height: 760,
            bottom: -380,
            left: -160,
            background: 'radial-gradient(circle, var(--glow2, rgba(140,122,94,0.2)), transparent 62%)',
            filter: 'blur(20px)',
            animation: 'mDrift2 27s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
          }}
        >
          <div style={{ position: 'relative', width: 620, height: 620, animation: 'mOrbit 46s linear infinite' }}>
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.09)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: 110, border: '1px solid rgba(255,255,255,0.07)', borderRadius: '50%' }} />
            <div
              style={{
                position: 'absolute',
                inset: 220,
                border: '1px dashed color-mix(in srgb, var(--accent, #B8853C) 45%, transparent)',
                borderRadius: '50%',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: -4,
                left: '50%',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent, #B8853C)',
                animation: 'mPulse 5s ease-in-out infinite',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 106,
                right: 118,
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent2, #8C7A5E)',
                animation: 'mPulse 7s ease-in-out infinite',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: 214,
                left: -3,
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.7)',
                animation: 'mPulse 6s ease-in-out infinite',
              }}
            />
          </div>
        </div>
        <div className="hero-content" style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '7px 16px 7px 12px',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.04)',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.68)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent, #B8853C)' }} />
            A problem-solving company
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(46px, 6.4vw, 92px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              margin: '26px 0 0',
              maxWidth: '15ch',
              textWrap: 'balance',
            }}
          >
            We don&apos;t build software.
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.42)' }}>We solve problems worth solving.</span>
          </h1>
          <p
            style={{
              maxWidth: '58ch',
              margin: '26px 0 0',
              fontSize: 19,
              lineHeight: 1.62,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.66)',
              textWrap: 'pretty',
            }}
          >
            Every challenge is different. We partner with organizations to uncover root causes, engineer practical
            solutions, and create measurable impact through technology, automation, AI, data, and innovation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
              style={{ padding: '17px 34px', fontSize: 15.5, fontWeight: 500 }}
            >
              Let&apos;s Solve It
            </button>
            <button
              onClick={() => navigate('/solutions')}
              className="btn-outline-light"
              style={{ padding: '17px 34px', fontSize: 15.5, fontWeight: 500 }}
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section data-screen-label="Home / About" className="pad-lg" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <div className="split-layout split-85-115" style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11.5,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--muted, #6E6A62)',
              }}
            >
              01 — About Meyora
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(32px, 3.4vw, 46px)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                margin: '22px 0 0',
              }}
            >
              Technology follows understanding.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <p style={{ margin: 0, fontSize: 21, lineHeight: 1.6, fontWeight: 300, color: 'var(--text, #16161B)', textWrap: 'pretty' }}>
              Meyora exists to solve meaningful problems — not to ship software. We start every engagement with
              curiosity: what is actually broken, who does it hurt, and what would change if it were fixed?
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.72, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
              Only once the problem is understood do we choose the tools. Sometimes that means an AI system.
              Sometimes an integration, a redesigned process, or a single automation that removes a thousand hours of
              manual work. The technology is never the point — the outcome is.
            </p>
            <div
              className="grid-stats-3"
              style={{
                display: 'grid',
                background: 'var(--line, #E5E1D8)',
                marginTop: 14,
              }}
            >
              {[
                ['Problem', 'first, always'],
                ['Agnostic', 'no favourite stack'],
                ['Impact', 'measured, not claimed'],
              ].map(([title, sub]) => (
                <div key={title} style={{ background: 'var(--paper, #FBFAF7)', padding: '26px 22px' }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 34,
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: 13.5, color: 'var(--muted, #6E6A62)', marginTop: 6 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section
        data-screen-label="Home / Problems we solve"
        className="pad-md"
        style={{
          background: 'var(--paper2, #F3F1EB)',
          borderTop: '1px solid var(--line, #E5E1D8)',
          borderBottom: '1px solid var(--line, #E5E1D8)',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted, #6E6A62)',
                }}
              >
                02 — Problems we solve
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(32px, 3.4vw, 46px)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.03em',
                  margin: '22px 0 0',
                  maxWidth: '22ch',
                }}
              >
                Start with the symptom. We&apos;ll find the cause.
              </h2>
            </div>
            <p style={{ margin: 0, maxWidth: '34ch', fontSize: 15.5, lineHeight: 1.65, color: 'var(--muted, #6E6A62)' }}>
              Open any challenge to see how we approach it.
            </p>
          </div>
          <div className="grid-problems" style={{ display: 'grid', marginTop: 54 }}>
            {PROBLEMS.map((p, i) => {
              const open = openProblem === i;
              return (
                <button
                  key={p.title}
                  onClick={() => toggleProblem(i)}
                  className="card-lift"
                  style={{
                    textAlign: 'left',
                    background: 'var(--paper, #FBFAF7)',
                    border: '1px solid var(--line, #E5E1D8)',
                    borderRadius: 16,
                    padding: 28,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    minHeight: 168,
                    color: 'var(--text, #16161B)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 16, width: '100%' }}>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 21,
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                      }}
                    >
                      {p.title}
                    </span>
                    <span
                      style={{
                        flex: 'none',
                        width: 26,
                        height: 26,
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
                    <div className="rise-in">
                      <div
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 10.5,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--accent, #B8853C)',
                          marginBottom: 8,
                        }}
                      >
                        Our approach
                      </div>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.62, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
                        {p.approach}
                      </p>
                    </div>
                  ) : (
                    <span style={{ fontSize: 13.5, color: 'var(--muted, #6E6A62)', opacity: 0.75, marginTop: 'auto' }}>
                      {p.hint}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Meyora */}
      <section data-screen-label="Home / Why Meyora" className="pad-lg" style={{ background: 'var(--paper, #FBFAF7)' }}>
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
            03 — Why Meyora
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.4vw, 46px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              margin: '22px 0 54px',
              maxWidth: '20ch',
            }}
          >
            Five habits behind every engagement.
          </h2>
          <div
            className="grid-why-5"
            style={{
              display: 'grid',
              background: 'var(--line, #E5E1D8)',
              border: '1px solid var(--line, #E5E1D8)',
            }}
          >
            {WHY.map((w) => (
              <div
                key={w.num}
                className="why-cell"
                style={{
                  background: 'var(--paper, #FBFAF7)',
                  padding: '34px 26px 38px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: 'var(--accent, #B8853C)' }}>
                  {w.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.62, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <section
        data-screen-label="Home / Industries"
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
            04 — Industries
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(34px, 4.4vw, 62px)',
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              margin: '22px 0 0',
            }}
          >
            Different industries.
            <span style={{ color: 'rgba(255,255,255,0.42)' }}> Same philosophy.</span>
          </h2>
          <p style={{ maxWidth: '52ch', margin: '26px 0 0', fontSize: 17, lineHeight: 1.68, color: 'rgba(255,255,255,0.6)' }}>
            The vocabulary changes. The method doesn&apos;t: understand the operation, find the constraint, engineer
            the smallest solution that moves the number.
          </p>
        </div>
        <div
          style={{
            marginTop: 58,
            display: 'flex',
            overflow: 'hidden',
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          <div style={{ display: 'flex', gap: 14, paddingLeft: 14, animation: 'mMarquee 42s linear infinite', width: 'max-content' }}>
            {industriesLoop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                style={{
                  flex: 'none',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 999,
                  padding: '14px 26px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 17,
                  fontWeight: 450,
                  color: 'rgba(255,255,255,0.86)',
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section data-screen-label="Home / Our approach" className="pad-lg" style={{ background: 'var(--paper, #FBFAF7)' }}>
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
            05 — Our approach
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.4vw, 46px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              margin: '22px 0 60px',
              maxWidth: '24ch',
            }}
          >
            Six moves, in order. Every time.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="step-row step-grid"
                style={{
                  padding: '34px 0',
                  borderTop: '1px solid var(--line, #E5E1D8)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    color: 'var(--muted, #6E6A62)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent, #B8853C)' }} />
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(26px, 2.6vw, 36px)',
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    lineHeight: 1.05,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ margin: '5px 0 0', fontSize: 16, lineHeight: 1.68, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
                  {s.body}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line, #E5E1D8)' }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        data-screen-label="Home / Final CTA"
        className="pad-hero"
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
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, var(--glow1, rgba(184,133,60,0.28)), transparent 60%)',
            filter: 'blur(30px)',
            animation: 'mDrift 24s ease-in-out infinite',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(38px, 5vw, 68px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              margin: 0,
            }}
          >
            Ready to solve something meaningful?
          </h2>
          <p style={{ margin: '26px 0 0', fontSize: 20, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
            Let&apos;s start with the problem.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-primary"
            style={{ marginTop: 42, padding: '18px 38px', fontSize: 16, fontWeight: 500 }}
          >
            Let&apos;s Solve It
          </button>
        </div>
      </section>
    </div>
  );
}

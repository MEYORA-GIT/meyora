import { useNavigate } from 'react-router-dom';
import { PRINCIPLES, FUTURE } from '../data/content';

export default function Philosophy() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section
        data-screen-label="Philosophy / Hero"
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '6%',
            opacity: 0.55,
          }}
        >
          <div style={{ position: 'relative', width: 520, height: 520, animation: 'mOrbitRev 60s linear infinite' }}>
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }} />
            <div
              style={{
                position: 'absolute',
                inset: 70,
                border: '1px dashed color-mix(in srgb, var(--accent2, #8C7A5E) 60%, transparent)',
                borderRadius: '50%',
              }}
            />
            <div style={{ position: 'absolute', inset: 160, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%' }} />
            <div
              style={{
                position: 'absolute',
                inset: 230,
                background: 'radial-gradient(circle, var(--accent, #B8853C), transparent 70%)',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 800,
            height: 800,
            bottom: -400,
            left: -200,
            background: 'radial-gradient(circle, var(--glow1, rgba(184,133,60,0.28)), transparent 62%)',
            filter: 'blur(24px)',
            animation: 'mDrift 25s ease-in-out infinite',
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
            Our Philosophy
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(42px, 6vw, 86px)',
              lineHeight: 1,
              letterSpacing: '-0.035em',
              margin: '26px 0 0',
              maxWidth: '18ch',
            }}
          >
            Technology changes.
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.42)' }}>Great thinking doesn&apos;t.</span>
          </h1>
        </div>
      </section>

      {/* What we believe */}
      <section data-screen-label="Philosophy / What we believe" className="pad-lg" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <div className="split-layout split-80-120" style={{ maxWidth: 1240, margin: '0 auto' }}>
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
              What we believe
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(30px, 3.2vw, 42px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                margin: '22px 0 0',
              }}
            >
              Technology is never the destination.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            <p style={{ margin: 0, fontSize: 24, lineHeight: 1.5, fontWeight: 300, textWrap: 'pretty' }}>
              Understanding people, processes, and challenges comes first. Software, AI, automation, analytics, and
              consulting are simply different ways to solve the right problem.
            </p>
            <div style={{ height: 1, background: 'var(--line, #E5E1D8)' }} />
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.72, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
              This is why we refuse to lead with a platform. A recommendation that arrives before the diagnosis
              isn&apos;t expertise — it&apos;s a preference. We&apos;d rather spend the first weeks asking
              uncomfortable questions than the next two years maintaining the wrong system.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        data-screen-label="Philosophy / Principles"
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
            Our principles
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.4vw, 46px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              margin: '22px 0 54px',
            }}
          >
            Six rules we don&apos;t negotiate.
          </h2>
          <div className="grid-principles-3" style={{ display: 'grid' }}>
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="card-border"
                style={{
                  background: 'var(--paper, #FBFAF7)',
                  border: '1px solid var(--line, #E5E1D8)',
                  borderRadius: 18,
                  padding: '34px 30px 38px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: 'var(--accent, #B8853C)' }}>
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: '-0.025em',
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section data-screen-label="Philosophy / Vision" className="pad-hero" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--muted, #6E6A62)',
              textAlign: 'center',
            }}
          >
            Vision
          </div>
          <p
            style={{
              margin: '30px 0 0',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              lineHeight: 1.28,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              textWrap: 'balance',
            }}
          >
            To become the partner organizations trust when facing their toughest challenges —{' '}
            <span style={{ color: 'var(--muted, #6E6A62)' }}>
              not because we build software, but because we solve problems that matter.
            </span>
          </p>
        </div>
      </section>

      {/* Future */}
      <section data-screen-label="Philosophy / Future" className="pad-md" style={{ background: 'var(--ink, #0D0D10)', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11.5,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Where we&apos;re heading
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 3.6vw, 50px)',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              margin: '22px 0 50px',
              maxWidth: '22ch',
            }}
          >
            The next decade of problem-solving.
          </h2>
          <div
            className="grid-future-3"
            style={{
              display: 'grid',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {FUTURE.map((f) => (
              <div
                key={f.name}
                className="future-cell"
                style={{ background: 'var(--ink, #0D0D10)', padding: '38px 30px 44px', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 23, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
                  {f.name}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)' }}>{f.body}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 40,
              flexWrap: 'wrap',
              marginTop: 70,
              paddingTop: 50,
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 3vw, 42px)',
                letterSpacing: '-0.03em',
                margin: 0,
                maxWidth: '26ch',
                lineHeight: 1.1,
              }}
            >
              Let&apos;s build meaningful solutions together.
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
              style={{ padding: '17px 36px', fontSize: 15.5, fontWeight: 500 }}
            >
              Start a conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

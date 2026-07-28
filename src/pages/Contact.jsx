import { useRef, useState } from 'react';
import { FAQS } from '../data/content';
import { useToggleIndex } from '../hooks/useToggleIndex';
import Select from '../components/Select';
import { LogoMark } from '../components/Logo';

const INDUSTRY_OPTIONS = [
  'Manufacturing',
  'Healthcare',
  'Retail',
  'Education',
  'Logistics',
  'Construction',
  'Energy',
  'Finance',
  'Government',
  'NGO',
  'Other',
];

const CHALLENGE_OPTIONS = [
  'Manual work / bottlenecks',
  'Disconnected systems',
  'Scattered data, poor decisions',
  'Where to start with AI',
  'Legacy modernization',
  'Scaling problems',
  'Not sure yet',
];

export const CONTACT_EMAIL = 'meyoratech@gmail.com';

// Web3Forms delivers straight to the inbox that owns the key — no backend needed.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');
  const [openFaq, toggleFaq] = useToggleIndex();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (!ACCESS_KEY) {
      setStatus('error');
      setErrorMsg(`Form delivery isn't configured yet. Please email us directly at ${CONTACT_EMAIL}.`);
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Meyora website',
          subject: `New enquiry from ${fields.name || 'the Meyora website'}`,
          ...fields,
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg(json.message || `Couldn't send that. Please email us at ${CONTACT_EMAIL}.`);
      }
    } catch {
      setStatus('error');
      setErrorMsg(`Network problem — nothing was sent. Please email us at ${CONTACT_EMAIL}.`);
    }
  };

  const handleReset = () => {
    formRef.current?.reset();
    setIndustry('');
    setChallenge('');
    setErrorMsg('');
    setStatus('idle');
  };

  return (
    <div>
      {/* Hero + form */}
      <section
        data-screen-label="Contact / Hero + form"
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
            maskImage: 'radial-gradient(ellipse 80% 70% at 25% 30%, #000, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 760,
            height: 760,
            top: -300,
            right: -200,
            background: 'radial-gradient(circle, var(--glow1, rgba(184,133,60,0.28)), transparent 62%)',
            filter: 'blur(22px)',
            animation: 'mDrift 23s ease-in-out infinite',
          }}
        />
        <div
          className="split-layout split-90-110"
          style={{
            position: 'relative',
            maxWidth: 1240,
            margin: '0 auto',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11.5,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Contact
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(36px, 4.4vw, 62px)',
                lineHeight: 1.03,
                letterSpacing: '-0.035em',
                margin: '26px 0 0',
                maxWidth: '20ch',
              }}
            >
              Every meaningful solution begins with a conversation.
            </h1>
            <p
              style={{
                margin: '30px 0 0',
                maxWidth: '44ch',
                fontSize: 18,
                lineHeight: 1.65,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.65)',
                textWrap: 'pretty',
              }}
            >
              Tell us what you&apos;re trying to solve — not what technology you think you need. We&apos;ll figure
              that out together.
            </p>
            <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['Email', <a key="email" href="mailto:meyoratech@gmail.com" style={{ fontSize: 16.5, color: '#FFFFFF' }}>meyoratech@gmail.com</a>],
                ['Reply', <span key="reply" style={{ fontSize: 16.5, color: 'rgba(255,255,255,0.8)' }}>Within one business day</span>],
                ['First step', <span key="step" style={{ fontSize: 16.5, color: 'rgba(255,255,255,0.8)' }}>A 45-minute problem framing call</span>],
              ].map(([label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      width: 74,
                      flex: 'none',
                    }}
                  >
                    {label}
                  </span>
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'var(--paper, #FBFAF7)',
              borderRadius: 24,
              padding: 40,
              color: 'var(--text, #16161B)',
              boxShadow: '0 40px 80px -30px rgba(0,0,0,0.6)',
            }}
          >
            {status === 'sent' ? (
              <div className="rise-in" style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '40px 0' }}>
                <LogoMark size={34} style={{ color: 'var(--ink, #101317)' }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
                  Thank you — we&apos;re reading it now.
                </h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--muted, #6E6A62)' }}>
                  You&apos;ll hear from a Meyora engineer within one business day, with questions about the problem
                  before any proposal.
                </p>
                <button onClick={handleReset} className="btn-ghost" style={{ alignSelf: 'start', marginTop: 10, padding: '12px 24px', fontSize: 14.5 }}>
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="grid-form-2" style={{ display: 'grid' }}>
                {/* spam honeypot — real people never fill this in */}
                <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="honeypot" />
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Name
                  </span>
                  <input type="text" name="name" placeholder="Your name" className="field-input" required />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Organization
                  </span>
                  <input type="text" name="organization" placeholder="Company or institution" className="field-input" />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Email
                  </span>
                  <input type="email" name="email" placeholder="you@company.com" className="field-input" required />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Phone
                  </span>
                  <input type="tel" name="phone" placeholder="Optional" className="field-input" />
                </label>
                {/* Not a <label>: a label forwards descendant clicks to its control,
                    which would re-open the listbox when picking an option. */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    id="field-industry"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Industry
                  </span>
                  <Select
                    name="industry"
                    labelId="field-industry"
                    options={INDUSTRY_OPTIONS}
                    placeholder="Select an industry"
                    value={industry}
                    onChange={setIndustry}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    id="field-challenge"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Challenge type
                  </span>
                  <Select
                    name="challenge"
                    labelId="field-challenge"
                    options={CHALLENGE_OPTIONS}
                    placeholder="What are you facing?"
                    value={challenge}
                    onChange={setChallenge}
                  />
                </div>
                <label style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted, #6E6A62)',
                    }}
                  >
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe the problem in your own words. Symptoms are enough."
                    className="field-textarea"
                  />
                </label>
                <div
                  style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    flexWrap: 'wrap',
                    marginTop: 6,
                  }}
                >
                  <span style={{ fontSize: 13, color: 'var(--muted, #6E6A62)', maxWidth: '30ch', lineHeight: 1.5 }}>
                    No sales sequence. One engineer reads this and replies.
                  </span>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'sending'}
                    style={{ padding: '16px 34px', fontSize: 15.5, fontWeight: 500 }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send it over'}
                  </button>
                </div>

                {status === 'error' && (
                  <p className="form-error rise-in" role="alert">
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-screen-label="Contact / FAQ" className="pad-md" style={{ background: 'var(--paper, #FBFAF7)' }}>
        <div className="split-layout split-70-130" style={{ maxWidth: 1240, margin: '0 auto' }}>
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
              FAQ
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
              Questions we hear early.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={f.q}
                  onClick={() => toggleFaq(i)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderTop: '1px solid var(--line, #E5E1D8)',
                    padding: '28px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    color: 'var(--text, #16161B)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, width: '100%' }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 21, fontWeight: 450, letterSpacing: '-0.02em' }}>
                      {f.q}
                    </span>
                    <span style={{ flex: 'none', fontSize: 18, color: 'var(--muted, #6E6A62)' }}>{open ? '−' : '+'}</span>
                  </div>
                  {open && (
                    <p
                      className="rise-in"
                      style={{ margin: 0, maxWidth: '70ch', fontSize: 16, lineHeight: 1.7, color: 'var(--muted, #6E6A62)', textWrap: 'pretty' }}
                    >
                      {f.a}
                    </p>
                  )}
                </button>
              );
            })}
            <div style={{ borderTop: '1px solid var(--line, #E5E1D8)' }} />
          </div>
        </div>
      </section>

      {/* Final statement */}
      <section data-screen-label="Contact / Final statement" className="pad-hero" style={{ background: 'var(--ink, #0D0D10)', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 3.4vw, 46px)',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            }}
          >
            We don&apos;t measure success by the software we ship.
            <span style={{ display: 'block', color: 'var(--accent, #B8853C)', marginTop: 12 }}>
              We measure it by the problems we solve.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

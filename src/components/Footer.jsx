import { Link } from 'react-router-dom';
import { LogoMark, Wordmark } from './Logo';
import { openConsentSettings } from '../lib/consent';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink, #0D0D10)',
        color: 'rgba(255,255,255,0.55)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '46px 40px',
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 30,
          flexWrap: 'wrap',
          fontSize: 13.5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoMark size={19} style={{ flex: 'none' }} />
          <Wordmark size={14} />
        </div>
        <span>We don&rsquo;t build software. We solve problems worth solving.</span>
        <span>© 2026 Meyora</span>
      </div>

      <nav
        aria-label="Legal"
        className="footer-links"
        style={{
          maxWidth: 1240,
          margin: '28px auto 0',
          paddingTop: 22,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          fontSize: 13,
        }}
      >
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/terms" className="footer-link">
          Terms &amp; Conditions
        </Link>
        <Link to="/cookie-policy" className="footer-link">
          Cookie Policy
        </Link>
        <button type="button" className="footer-link" onClick={openConsentSettings}>
          Cookie settings
        </button>
      </nav>
    </footer>
  );
}

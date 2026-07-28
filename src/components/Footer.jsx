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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: 'var(--accent, #B8853C)',
              borderRadius: 2,
              transform: 'rotate(45deg)',
            }}
          />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#FFFFFF' }}>
            Meyora
          </span>
        </div>
        <span>We don&rsquo;t build software. We solve problems worth solving.</span>
        <span>© 2026 Meyora</span>
      </div>
    </footer>
  );
}

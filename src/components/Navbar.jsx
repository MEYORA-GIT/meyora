import { NavLink, useNavigate } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/solutions', label: 'Solutions' },
  { to: '/philosophy', label: 'Our Philosophy' },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: 11,
              height: 11,
              background: 'var(--accent, #B8853C)',
              borderRadius: 3,
              display: 'block',
              transform: 'rotate(45deg)',
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Meyora
          </span>
        </button>

        <div className="nav-links">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="nav-link"
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && <span className="nav-link__underline" />}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="btn-primary"
            style={{
              marginLeft: 12,
              padding: '8px 18px',
              fontSize: 14,
              fontWeight: 500,
              display: 'inline-block',
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

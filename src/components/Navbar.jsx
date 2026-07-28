import { NavLink, useNavigate } from 'react-router-dom';
import { LogoMark, Wordmark } from './Logo';

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
          aria-label="Meyora — home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            flex: 'none',
          }}
        >
          {/* brand mark is monochrome black; inverted to white on the dark bar */}
          <LogoMark size={21} style={{ color: '#FFFFFF', flex: 'none' }} />
          <Wordmark size={15} />
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

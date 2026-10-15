import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { LEGAL } from '../data/legal';
import { openConsentSettings } from '../lib/consent';

const sections = [
  {
    id: 'what-are-cookies',
    title: 'What cookies are',
    body: (
      <p>
        Cookies are small files a website stores in your browser. Similar technologies, such as local storage, work
        the same way. This policy covers all of them, and we call them &ldquo;cookies&rdquo; for short.
      </p>
    ),
  },
  {
    id: 'what-we-use',
    title: 'What we use',
    body: (
      <>
        <p>We use exactly one item, and it is strictly necessary:</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Purpose</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>meyora-consent</td>
                <td>Local storage · strictly necessary</td>
                <td>Remembers your cookie choice, so we don&apos;t ask on every page</td>
                <td>Until you clear it, or until this policy changes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          It holds only your choice, the date you made it, and the policy version. It contains nothing that
          identifies you, and it never leaves your browser.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-dont-use',
    title: 'What we don’t use',
    body: (
      <>
        <p>We do not use:</p>
        <ul>
          <li>Advertising or retargeting cookies;</li>
          <li>Social media tracking pixels;</li>
          <li>Analytics cookies — we don&apos;t currently run any analytics;</li>
          <li>Third-party font services — our fonts are hosted on our own website.</li>
        </ul>
        <p>
          If we add analytics in future, it will stay off until you opt in, and we will update this policy before we
          do.
        </p>
      </>
    ),
  },
  {
    id: 'your-choices',
    title: 'Your choices',
    body: (
      <>
        <p>
          When you first visit, we ask for your choice. Refusing optional cookies is as easy as accepting them, and the
          website works fully either way.
        </p>
        <p>You can change or withdraw your choice at any time:</p>
        <p>
          <button type="button" className="btn-dark" onClick={openConsentSettings} style={{ padding: '12px 24px', fontSize: 14.5 }}>
            Open cookie settings
          </button>
        </p>
        <p>
          You can also block or delete cookies in your browser settings. Because we use only a strictly necessary item,
          blocking it simply means we&apos;ll ask for your choice again.
        </p>
      </>
    ),
  },
  {
    id: 'more',
    title: 'More information',
    body: (
      <p>
        See our <Link to="/privacy-policy">Privacy Policy</Link> for how we handle personal data and your rights. For
        questions, email <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
      </p>
    ),
  },
];

export default function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Cookies on this website."
      intro="The short version: we store one thing — your cookie choice — and nothing that tracks you."
      sections={sections}
    />
  );
}

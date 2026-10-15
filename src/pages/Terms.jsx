import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { LEGAL, show } from '../data/legal';

const sections = [
  {
    id: 'agreement',
    title: 'About these terms',
    body: (
      <>
        <p>
          These terms govern your use of {LEGAL.website} (the &ldquo;Website&rdquo;), operated by{' '}
          <strong>{show(LEGAL.legalName, LEGAL.brand)}</strong> (&ldquo;Meyora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
          By using the Website you agree to them. If you don&apos;t agree, please don&apos;t use the Website.
        </p>
        <p>
          How we handle personal data is covered separately in our <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'information-only',
    title: 'Information only — not an offer or advice',
    body: (
      <>
        <p>
          The Website describes who we are and how we work. Its content is general information. It is not
          professional, technical, legal or financial advice, and you should not rely on it as such.
        </p>
        <p>
          Nothing on the Website is an offer to provide services. Sending us an enquiry does not create a contract or
          a client relationship. Any engagement will be governed by a separate written agreement signed by both
          parties, which will take precedence over these terms.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>When using the Website, you agree not to:</p>
        <ul>
          <li>Break any applicable law, including the Information Technology Act, 2000;</li>
          <li>Send unlawful, harmful, defamatory or misleading content through the contact form;</li>
          <li>Submit another person&apos;s personal data without their authority;</li>
          <li>Attempt to gain unauthorised access to, disrupt or overload the Website or its infrastructure;</li>
          <li>Introduce viruses or any other malicious code;</li>
          <li>Scrape or harvest the Website in a way that places an unreasonable load on it.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    body: (
      <p>
        The Website and its content — including text, design, the Meyora name and logo — are owned by or licensed to
        us and protected by intellectual property law. You may view and share pages for personal or internal business
        purposes. You may not copy, modify, republish or use our name or logo commercially without our written
        permission.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Links to other websites',
    body: (
      <p>
        The Website may link to websites we don&apos;t control. We aren&apos;t responsible for their content, policies or
        practices, and a link does not mean we endorse them.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability and accuracy',
    body: (
      <p>
        We work to keep the Website accurate and available, but we provide it &ldquo;as is&rdquo;. We don&apos;t
        guarantee it will be uninterrupted, error-free or always up to date, and we may change or withdraw any part of
        it without notice.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p>
          To the fullest extent permitted by law, we are not liable for any indirect or consequential loss, or for any
          loss of profit, revenue, data or business opportunity, arising from your use of, or inability to use, the
          Website.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited under applicable law, including liability for
          fraud.
        </p>
      </>
    ),
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    body: (
      <p>
        These terms are governed by {LEGAL.governingLaw}. Any dispute arising from them or from your use of the
        Website is subject to the exclusive jurisdiction of the courts at{' '}
        {show(LEGAL.jurisdiction, '[jurisdiction to be published]')}.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms. The effective date above shows when they last changed. Continuing to use the
        Website after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms? Email <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="The terms for using this website."
      intro="Short and plain: what you can expect from this website, what we ask of you, and how disputes are handled."
      sections={sections}
    />
  );
}

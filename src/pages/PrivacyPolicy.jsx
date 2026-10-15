import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { LEGAL, PROCESSORS, RETENTION, TODO, show } from '../data/legal';

const mail = (subject) => `mailto:${LEGAL.grievanceOfficer.email}?subject=${encodeURIComponent(subject)}`;

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          This website, {LEGAL.website}, is operated by <strong>{show(LEGAL.legalName, LEGAL.brand)}</strong>
          {LEGAL.registeredAddress !== TODO && <>, {LEGAL.registeredAddress}</>} (&ldquo;Meyora&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>
        <p>
          For the personal data described here, we are the <strong>Data Fiduciary</strong> under India&apos;s Digital
          Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and the Digital Personal Data Protection Rules,
          2025. You are the <strong>Data Principal</strong>.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'Personal data we collect',
    body: (
      <>
        <p>We collect only what we need. Here is every item, why we collect it, and on what basis.</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Purpose</th>
                <th scope="col">Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name and email address</td>
                <td>To reply to your enquiry</td>
                <td>Your consent (s.6)</td>
              </tr>
              <tr>
                <td>Organisation, industry, challenge type, message</td>
                <td>To understand your problem before we reply</td>
                <td>Your consent (s.6)</td>
              </tr>
              <tr>
                <td>Phone number (optional)</td>
                <td>Only if you prefer a call</td>
                <td>Your consent (s.6)</td>
              </tr>
              <tr>
                <td>Consent record (date, time, policy version)</td>
                <td>To show that you agreed, and to which version of this notice</td>
                <td>Required by law (s.6(10))</td>
              </tr>
              <tr>
                <td>IP address, browser and device type, pages requested</td>
                <td>To deliver the website to you and keep it secure</td>
                <td>Necessary to provide the service you request, and as required by law</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>We do not</strong> use advertising or tracking cookies, run analytics, build profiles about you,
          sell your data, or use it to make automated decisions about you. We do not collect sensitive data such as
          financial, health or government identity information — please don&apos;t include it in your message.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use it',
    body: (
      <>
        <p>We use your personal data only for the purposes listed above. Specifically, we will:</p>
        <ul>
          <li>Read and reply to your enquiry, and continue that conversation if you choose to;</li>
          <li>Keep the website running, secure, and protected against abuse;</li>
          <li>Comply with our legal obligations.</li>
        </ul>
        <p>
          We will not add you to a mailing list or send you marketing. If we ever want to use your data for a new
          purpose, we will ask for your consent first.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>
          We share personal data only with the service providers (<strong>Data Processors</strong>) below, who process
          it on our behalf, under contract, and only for the purpose stated. We do not sell or rent personal data.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">What they do</th>
                <th scope="col">Data</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {PROCESSORS.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.role}</td>
                  <td>{p.data}</td>
                  <td>{p.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose personal data where the law requires it, for example to comply with a lawful request
          from a government authority.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'Transfers outside India',
    body: (
      <p>
        Some of the providers above process data outside India. Under section 16 of the DPDP Act, this is permitted
        except to countries the Government of India restricts by notification. We do not transfer personal data to
        any such restricted country.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <>
        <p>We erase personal data once it is no longer needed for the purpose it was collected for:</p>
        <ul>
          <li>
            <strong>Enquiries:</strong> {RETENTION.enquiries}.
          </li>
          <li>
            <strong>Consent records:</strong> {RETENTION.consentRecords}.
          </li>
          <li>
            <strong>Technical logs:</strong> {RETENTION.serverLogs}.
          </li>
        </ul>
        <p>If you withdraw consent or ask us to erase your data, we will delete it sooner, unless the law requires us to keep it.</p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: (
      <>
        <p>
          We take reasonable security safeguards to prevent personal data breaches, including encrypted connections
          (HTTPS) for all traffic, restricted access to our inbox, and security headers on the website.
        </p>
        <p>
          If a personal data breach occurs, we will inform the Data Protection Board of India and each affected person
          as required by the DPDP Act and Rules, describing what happened, the likely impact, and what we are doing
          about it.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>Under the DPDP Act, you have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> a summary of the personal data we hold about you, how we process it, and who we
            have shared it with (s.11);
          </li>
          <li>
            <strong>Correct, complete, update or erase</strong> your personal data (s.12);
          </li>
          <li>
            <strong>Withdraw consent</strong> at any time, as easily as you gave it (s.6(4)). Withdrawal does not
            affect processing already done. We will then stop processing and erase your data, unless the law requires
            us to retain it;
          </li>
          <li>
            <strong>Grievance redressal</strong> — have a complaint about our handling of your data addressed (s.13);
          </li>
          <li>
            <strong>Nominate</strong> another person to exercise these rights if you die or become unable to (s.14).
          </li>
        </ul>
        <div className="legal-callout">
          <p>
            <strong>To exercise any of these rights</strong>, email{' '}
            <a href={mail('Data protection request')}>{LEGAL.grievanceOfficer.email}</a> with the subject &ldquo;Data
            protection request&rdquo;. We may ask you to confirm your identity before acting, so that we never disclose
            or delete someone else&apos;s data. We will respond as soon as possible and within the period prescribed by
            the DPDP Rules.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'grievances',
    title: 'Grievance Officer',
    body: (
      <>
        <p>If you have a question or complaint about how we handle your personal data, contact our Grievance Officer:</p>
        <div className="legal-callout">
          <p>
            <strong>{show(LEGAL.grievanceOfficer.name, 'Grievance Officer')}</strong>
            <br />
            {show(LEGAL.legalName, LEGAL.brand)}
            <br />
            Email: <a href={mail('Grievance')}>{LEGAL.grievanceOfficer.email}</a>
            {LEGAL.registeredAddress !== TODO && (
              <>
                <br />
                {LEGAL.registeredAddress}
              </>
            )}
          </p>
        </div>
        <p>
          If you are not satisfied with our response, you may complain to the{' '}
          <strong>Data Protection Board of India</strong>. You must first contact us and allow us to respond before
          approaching the Board (s.13(3)).
        </p>
      </>
    ),
  },
  {
    id: 'your-duties',
    title: 'Your duties',
    body: (
      <p>
        Section 15 of the DPDP Act asks Data Principals to provide authentic information, not to impersonate anyone
        else, not to suppress material information, and not to file false or frivolous complaints. Please only send
        us personal data that is yours, or that you are authorised to share.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        This website and our services are intended for businesses and adults. We do not knowingly collect personal
        data from anyone under 18. If you are under 18, please do not use the contact form. If you believe a child has
        sent us personal data, email <a href={mail('Child data')}>{LEGAL.grievanceOfficer.email}</a> and we will
        delete it.
      </p>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <p>
        We use only strictly necessary browser storage, and no advertising or tracking cookies. Our fonts are served
        from our own website, so loading a page does not send your data to a font provider. See our{' '}
        <Link to="/cookie-policy">Cookie Policy</Link> for details and to change your choices.
      </p>
    ),
  },
  {
    id: 'language',
    title: 'Language',
    body: (
      <p>
        This notice is in English. You may ask for it in any language listed in the Eighth Schedule to the
        Constitution of India by emailing <a href={mail('Notice in another language')}>{LEGAL.grievanceOfficer.email}</a>.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We will update this policy if our practices change. The effective date and version above will change too.
        If a change materially affects how we use personal data you have already given us, we will tell you and, where
        required, ask for your consent again.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your personal data."
      intro="Plainly: we collect very little, use it only to reply to you, and never sell it. This policy explains exactly what we hold and your rights under India's Digital Personal Data Protection Act, 2023."
      sections={sections}
    />
  );
}

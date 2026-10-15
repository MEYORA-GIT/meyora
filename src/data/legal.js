/**
 * Single source of truth for legal / privacy details.
 *
 * Values marked TODO must be filled in before the site is published — the
 * prerender step prints a warning while any remain. Do not guess them: the
 * legal entity, address and Grievance Officer are facts only the business has.
 *
 * Bump POLICY_VERSION whenever the Privacy Policy changes materially. It is
 * recorded alongside every consent, so you can show which notice a person
 * agreed to (DPDP Act s.6(10) puts the burden of proof on the Data Fiduciary).
 */

export const TODO = 'TODO';

export const LEGAL = {
  brand: 'Meyora',
  legalName: TODO, // e.g. "Meyora Technologies Private Limited"
  registeredAddress: TODO, // full registered office address in India
  website: 'https://www.meyora.in',
  contactEmail: 'meyoratech@gmail.com',

  // Published under DPDP Act s.8(9): a person able to answer questions about
  // processing on the Data Fiduciary's behalf.
  grievanceOfficer: {
    name: TODO,
    email: 'meyoratech@gmail.com',
  },

  governingLaw: 'the laws of India',
  jurisdiction: TODO, // courts of a city, e.g. "Chennai, Tamil Nadu"

  effectiveDate: '15 October 2026',
  policyVersion: '2026-10-15',
};

/** Retention periods stated in the Privacy Policy. Keep them true in practice. */
export const RETENTION = {
  enquiries:
    '12 months after our last communication with you, unless we enter into an engagement, in which case for the duration of that engagement and as required by law',
  consentRecords: 'for as long as we hold the related personal data, and then for up to 12 months as evidence of consent',
  serverLogs: 'by our hosting provider for a limited period for security and abuse prevention, per their own retention schedule',
};

/** Every third party that touches personal data — must match reality. */
export const PROCESSORS = [
  {
    name: 'Vercel Inc.',
    role: 'Website hosting and delivery',
    data: 'IP address, browser and device information, pages requested',
    location: 'United States and global edge network',
  },
  {
    name: 'Web3Forms',
    role: 'Delivers contact-form submissions to our inbox',
    data: 'Everything you enter in the contact form',
    location: 'Outside India',
  },
  {
    name: 'Google LLC (Gmail)',
    role: 'Email inbox where enquiries are received and answered',
    data: 'Contact-form submissions and email correspondence',
    location: 'United States and global',
  },
];

/** Values still unfilled — used by the build to warn before publishing. */
export function unresolvedLegalFields() {
  const missing = [];
  if (LEGAL.legalName === TODO) missing.push('LEGAL.legalName');
  if (LEGAL.registeredAddress === TODO) missing.push('LEGAL.registeredAddress');
  if (LEGAL.grievanceOfficer.name === TODO) missing.push('LEGAL.grievanceOfficer.name');
  if (LEGAL.jurisdiction === TODO) missing.push('LEGAL.jurisdiction');
  return missing;
}

/** Display helper: never render the raw TODO marker to visitors. */
export function show(value, fallback = '[to be published]') {
  return value === TODO ? fallback : value;
}

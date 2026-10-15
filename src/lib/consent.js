/**
 * Cookie / storage consent.
 *
 * Categories:
 *   necessary  — always on; covers storing this consent choice itself
 *   analytics  — off until the visitor opts in
 *
 * The site currently runs NO analytics. The analytics category exists so a
 * tool can be added later behind `hasConsent('analytics')` without loading
 * anything before the visitor agrees. Do not load any tracking script without
 * gating it on that check.
 *
 * The stored record carries the policy version and a timestamp, so consent is
 * auditable and a material policy change re-prompts the visitor.
 */
import { LEGAL } from '../data/legal';

const STORAGE_KEY = 'meyora-consent';
const CHANGE_EVENT = 'meyora:consent-change';
const OPEN_EVENT = 'meyora:consent-open';

export const CATEGORIES = ['necessary', 'analytics'];

function safeStorage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch {
    return null; // storage blocked (privacy mode, settings)
  }
}

export function readConsent() {
  const store = safeStorage();
  if (!store) return null;
  try {
    const record = JSON.parse(store.getItem(STORAGE_KEY));
    // A choice made under an older policy version no longer counts.
    if (!record || record.policyVersion !== LEGAL.policyVersion) return null;
    return record;
  } catch {
    return null;
  }
}

export function saveConsent({ analytics }) {
  const record = {
    necessary: true,
    analytics: Boolean(analytics),
    policyVersion: LEGAL.policyVersion,
    decidedAt: new Date().toISOString(),
  };
  safeStorage()?.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: record }));
  return record;
}

export function hasConsent(category) {
  if (category === 'necessary') return true;
  return Boolean(readConsent()?.[category]);
}

export function onConsentChange(handler) {
  const listener = (e) => handler(e.detail);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
}

/** Reopen the preferences panel — used by the "Cookie settings" footer link. */
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentOpen(handler) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

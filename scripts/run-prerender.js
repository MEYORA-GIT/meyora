/**
 * Runs scripts/prerender.jsx through Vite's SSR pipeline, so the script can use
 * JSX and import the app's source modules (including its CSS imports) directly.
 */
import { createServer } from 'vite';

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
});

try {
  await server.ssrLoadModule('/scripts/prerender.jsx');
} finally {
  await server.close();
}

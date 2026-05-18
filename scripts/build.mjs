import { build } from 'vite';

const rawPublicUrl = process.env.PUBLIC_URL || '/';

const cleaned = rawPublicUrl.trim().replace(/^\/+|\/+$/g, '');

const base = cleaned ? `/${cleaned}/` : '/';

console.log(`[build] PUBLIC_URL raw: "${rawPublicUrl}"`);

console.log(`[build] resolved base: "${base}"`);

try {
  await build({ base });
} catch (err) {
  console.error('[build] Vite build failed:', err);
  process.exit(1);
}
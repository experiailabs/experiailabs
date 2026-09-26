import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const routes = ['/', '/about', '/capabilities', '/ventures', '/contact', '/team', '/ai-experience-design', '/government-services', '/404'];
const output = path.resolve('client/dist');
const template = await readFile(path.join(output, 'index.html'), 'utf8');
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  for (const route of routes) {
    const { html, head } = render(route);
    if (!html.includes('<h1') || !head.includes('rel="canonical"')) {
      throw new Error(`Incomplete prerender for ${route}`);
    }
    const directory = path.join(output, route);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), template
      .replace('<!--app-head-->', () => head)
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`));
    console.log(`Prerendered ${route}`);
  }
} finally {
  await server.close();
}

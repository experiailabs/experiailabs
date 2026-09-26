import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import App from './App';

export function render(path: string) {
  const context: any = {};
  let html = renderToString(
    <Router ssrPath={path}><App helmetContext={context} /></Router>
  );
  const tags: string[] = [];
  // React 19 hoists metadata into the server-rendered output.
  html = html.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g, tag => {
    tags.push(tag);
    return '';
  });
  return { html, head: tags.join('\n') };
}

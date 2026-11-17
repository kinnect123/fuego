import express from 'express';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const vite = isProduction
  ? null
  : await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

if (vite) {
  app.use(vite.middlewares);
} else {
  app.use(express.static(resolve('dist/client'), { index: false }));
}

app.use(async (request, response, next) => {
  try {
    const templatePath = isProduction ? 'dist/client/index.html' : 'index.html';
    let template = await readFile(resolve(templatePath), 'utf-8');
    let render;

    if (vite) {
      template = await vite.transformIndexHtml(request.originalUrl, template);
      ({ render } = await vite.ssrLoadModule('/src/entry-server.tsx'));
    } else {
      ({ render } = await import('./dist/server/entry-server.js'));
    }

    const appHtml = render(request.originalUrl);
    response.status(200).type('html').send(template.replace('<!--ssr-outlet-->', appHtml));
  } catch (error) {
    if (vite) vite.ssrFixStacktrace(error);
    next(error);
  }
});

const port = Number(process.env.PORT) || 5173;
app.listen(port, () => {
  console.log(`Chisinga site running at http://localhost:${port}`);
});

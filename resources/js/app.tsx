import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { RouteContext } from '@/hooks/use-route';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const transform = (input: string): string => {
  return input
    .split('/')
    .map(
      part =>
        part
          .replace(/([a-z])([A-Z])/g, '$1-$2') // Tambahkan '-' sebelum huruf kapital
          .toLowerCase(), // Ubah ke huruf kecil
    )
    .join('/');
};

createInertiaApp({
  title: title => `${title} - ${appName}`,
  progress: {
    color: '#4B5563',
  },
  resolve: name => {
    return resolvePageComponent(
      `./pages/${transform(name)}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    );
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    return root.render(
      <RouteContext.Provider value={(window as any).route}>
        <App {...props} />
      </RouteContext.Provider>,
    );
  },
});

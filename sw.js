// Service worker mínimo para poder instalar la app en Edge/Chrome.
// NO guarda caché: las páginas y archivos de la app se piden siempre a internet
// (sin usar la caché del navegador), así siempre se abre la versión más nueva.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;  // Google y demás: normal
  e.respondWith(fetch(r.url, { cache: 'no-store', credentials: 'same-origin' }).catch(function () { return fetch(r); }));
});

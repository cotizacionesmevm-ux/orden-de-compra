// Service worker mínimo para poder instalar la app en Edge/Chrome.
// NO guarda caché: todo se pide siempre a internet, así siempre se usa la versión más nueva.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin caché: el navegador usa la red normalmente */ });

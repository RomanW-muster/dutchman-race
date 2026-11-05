// Service worker: lets the app open offline and be installed as its own window.
// Network first, revalidating every time (so updates you push to GitHub show up on the next refresh,
// not after the browser's 10-minute cache runs out). If the network
// fails OR returns an error (e.g. GitHub briefly 404s during a deploy), the last good
// cached copy is used instead.
const CACHE = 'dutchman-race-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const key = new URL(req.url); key.search = '';            // retries (?retry=n) share one cache entry
  e.respondWith(
    fetch(req.url, { cache: 'no-cache' })   // always check GitHub for a newer copy (cheap 304 if unchanged)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key.href, copy)); return res; }
        return caches.match(key.href).then(hit => hit || res);
      })
      .catch(() => caches.match(key.href).then(hit => hit || (req.mode === 'navigate' ? caches.match(new URL('./', self.location).href) : Response.error())))
  );
});

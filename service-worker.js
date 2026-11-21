// The site moved to https://crofts-in-croatia.pages.dev. This replaces the old site's offline helper: it deletes the
// saved copy on this device, removes itself, and reloads any open tab so it shows the "moved" page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) { try { c.navigate(c.url); } catch (e) {} }
  })());
});

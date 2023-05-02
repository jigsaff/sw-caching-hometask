self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('static').then((cache) => {
        return cache.addAll(['/style.css', '/index.html', '/bundle.js']);
      }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.filter((cacheName) => cacheName === '/style.css').
                map((cacheName) => {
                  return caches.delete(cacheName);
                }),
        );
      }),
  );
});

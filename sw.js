// Service Worker for improved caching strategy
const CACHE_NAME = 'chungita-portfolio-v2.0.1';
const urlsToCache = [
  '/',
  '/chungita.web.html',
  '/style.min.css?v=2.0.1',
  '/chungita.web.js?v=2.0.1',
  '/projects/project-style.css?v=2.0.1',
  '/projects/project-lang.js?v=2.0.1', 
  '/experiences/experience-style.css?v=2.0.1',
  '/experiences/experience-lang.js?v=2.0.1',
  // Add more static assets as needed
  '/files/images/badge/KSHS_emblem.webp',
  '/files/images/badge/nthu_emblem.webp',
  '/files/images/headshot/self-photo.webp'
];

// Cache key files with long-term caching for static assets
const STATIC_CACHE_URLS = [
  '/files/images/',
  '/files/PDF/',
  '.gif',
  '.mp4',
  '.webp',
  '.png',
  '.jpg',
  '.jpeg'
];

// Install event - cache key resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache with fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          // Check if it's a static asset for long-term caching
          const isStaticAsset = STATIC_CACHE_URLS.some(pattern => 
            event.request.url.includes(pattern)
          );
          
          if (isStaticAsset) {
            // For static assets, return cached version immediately
            return response;
          } else {
            // For HTML and dynamic content, check if cache is fresh
            // Implement cache-first strategy with network fallback
            return response;
          }
        }

        // If not in cache, fetch from network and cache for future
        return fetch(event.request).then(fetchResponse => {
          // Check if we received a valid response
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          // Clone the response for caching
          const responseToCache = fetchResponse.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return fetchResponse;
        });
      })
  );
});
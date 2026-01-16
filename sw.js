// Service Worker for improved caching strategy - Optimized Version
const CACHE_NAME = 'chungita-portfolio-v2.0.2';
const CRITICAL_CACHE = 'critical-v2.0.2';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.min.css?v=2.0.1',
  '/chungita.optimized.js',
  '/projects/project-style.css?v=2.0.1',
  '/projects/project-lang.js?v=2.0.1', 
  '/experiences/experience-style.css?v=2.0.1',
  '/experiences/experience-lang.js?v=2.0.1'
];

// 关键资源 - 需要优先缓存
const criticalAssets = [
  '/files/images/badge/KSHS_emblem.webp',
  '/files/images/badge/nthu_emblem.webp',
  '/files/images/badge/ROC_millitary_private_emblem.webp',
  '/files/images/game/Steve_pickaxe.png'
];

// 静态资源模式 - 长期缓存
const STATIC_CACHE_PATTERNS = [
  /\.webp$/,
  /\.png$/,
  /\.jpg$/,
  /\.jpeg$/,
  /\.gif$/,
  /\.pdf$/,
  /\/files\/images\//,
  /\/files\/PDF\//
];

// Install event - 优化缓存策略
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // 缓存关键资源
      caches.open(CRITICAL_CACHE).then(cache => {
        console.log('Caching critical assets');
        return cache.addAll(criticalAssets);
      }),
      // 缓存基础资源
      caches.open(CACHE_NAME).then(cache => {
        console.log('Opened main cache');
        return cache.addAll(urlsToCache);
      })
    ]).then(() => {
      // 跳过等待，立即激活新的 Service Worker
      return self.skipWaiting();
    })
  );
});

// Activate event - 清理旧缓存并声明客户端控制权
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // 清理旧缓存
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== CRITICAL_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // 立即控制所有客户端
      self.clients.claim()
    ])
  );
});

// Fetch event - 优化的缓存策略
self.addEventListener('fetch', event => {
  // 只处理GET请求
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  
  // 检查是否是静态资源
  const isStaticAsset = STATIC_CACHE_PATTERNS.some(pattern => 
    pattern.test(url.pathname)
  );

  if (isStaticAsset) {
    // 静态资源：缓存优先策略
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request).then(response => {
          // 只缓存成功的响应
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
    );
  } else {
    // HTML和动态内容：网络优先，缓存作为后备
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // 成功从网络获取，更新缓存
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // 网络失败，从缓存返回
          return caches.match(event.request);
        })
    );
  }
});
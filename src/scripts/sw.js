import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

// Daftar asset yang akan dicaching
const assetsToCache = [
  "./",
  "./icons/64.png",
  "./icons/128.png",
  "./icons/256.png",
  "./icons/512.png",
  "./index.html",
  "./favicon.png",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener("activate", (event) => {
  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

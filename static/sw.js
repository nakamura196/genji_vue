// /sw.js — kill-switch Service Worker
// 旧 @nuxtjs/pwa (workbox) で登録された SW を退役させる目的でのみ存在する。
// 新規キャッシュは一切しない。fetch ハンドラも登録しない。
// 退役完了後もロングテール再訪ユーザに行き渡るまで残しておくこと。
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      for (const client of clients) {
        try {
          client.navigate(client.url)
        } catch (_) {
          /* noop */
        }
      }
    })()
  )
})

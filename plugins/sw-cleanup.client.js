// 旧 @nuxtjs/pwa (workbox) で登録された Service Worker / Cache Storage を
// ページ訪問時に強制撤去するクライアントプラグイン。
// /sw.js の kill-switch SW と二段構えで、ロングテール再訪ユーザの初回アクセス時に
// 即時クリーンアップを行う。退役完了が確認できたら本ファイルは削除して良い。
export default () => {
  try {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister()
        })
      })
    }
    if (typeof caches !== 'undefined') {
      caches.keys().then((keys) => {
        keys.forEach((key) => caches.delete(key))
      })
    }
  } catch (_) {
    /* noop */
  }
}

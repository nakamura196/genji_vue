/*
 * vdiff-modern UI helpers
 * - theme toggle (light / dark / auto)
 * - language indicator (the actual lang switch is via ?lang= and reload)
 * - fullscreen toggle
 * - inject form title once the form is rendered
 */
(function() {
  'use strict';

  var STORAGE_THEME = 'vdiff-modern:theme';
  var root = document.documentElement;
  var themeBtn = document.getElementById('vdiff-modern-theme');
  var fsBtn = document.getElementById('vdiff-modern-fullscreen');
  var langBtn = document.getElementById('vdiff-modern-lang');

  // ---- Theme ----
  function applyTheme(t) {
    if (t === 'dark' || t === 'light') {
      root.setAttribute('data-theme', t);
    } else {
      root.removeAttribute('data-theme');
    }
    if (themeBtn) {
      var icon = themeBtn.querySelector('.material-icons');
      if (icon) {
        var dark = (t === 'dark') || (t !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        icon.textContent = dark ? 'light_mode' : 'dark_mode';
      }
    }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_THEME); } catch (e) {}
  applyTheme(saved || 'auto');

  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      var current = root.getAttribute('data-theme');
      var next;
      if (current === 'dark') next = 'light';
      else if (current === 'light') next = 'auto';
      else next = 'dark';
      try { localStorage.setItem(STORAGE_THEME, next); } catch (e) {}
      applyTheme(next);
    });
  }

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function() {
      var t = root.getAttribute('data-theme');
      if (t !== 'dark' && t !== 'light') applyTheme('auto');
    };
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  }

  // ---- Fullscreen ----
  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
  }
  function updateFsIcon() {
    if (!fsBtn) return;
    var icon = fsBtn.querySelector('.material-icons');
    if (icon) icon.textContent = isFullscreen() ? 'fullscreen_exit' : 'fullscreen';
  }
  if (fsBtn) {
    fsBtn.addEventListener('click', function() {
      if (isFullscreen()) {
        (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen).call(document);
      } else {
        var el = document.documentElement;
        (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen).call(el);
      }
    });
    document.addEventListener('fullscreenchange', updateFsIcon);
    document.addEventListener('webkitfullscreenchange', updateFsIcon);
    document.addEventListener('mozfullscreenchange', updateFsIcon);
  }

  // ---- Language toggle (round-trip via ?lang=) ----
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      var url = new URL(location.href);
      var current = url.searchParams.get('lang');
      var browserLang = (navigator.language || 'ja').toLowerCase().indexOf('ja') === 0 ? 'ja' : 'en';
      var effective = current || browserLang;
      var next = effective === 'ja' ? 'en' : 'ja';
      url.searchParams.set('lang', next);
      location.href = url.toString();
    });
  }

  // ---- Inject form title once the wrapper renders the form ----
  function injectFormTitle() {
    var lang = (new URL(location.href)).searchParams.get('lang');
    if (!lang) lang = (navigator.language || 'ja').toLowerCase().indexOf('ja') === 0 ? 'ja' : 'en';
    var title = lang === 'ja' ? '画像を選択して比較' : 'Select images to compare';
    var form = document.querySelector('.vdiffjs-form-container');
    if (form && !form.getAttribute('data-title')) {
      form.setAttribute('data-title', title);
    }
  }
  var mo = new MutationObserver(injectFormTitle);
  mo.observe(document.body, { childList: true, subtree: true });
  setTimeout(injectFormTitle, 300);
})();

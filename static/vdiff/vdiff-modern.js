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

  // ---- Localize appbar text + form title based on ?lang= ----
  function currentLang() {
    var lang = (new URL(location.href)).searchParams.get('lang');
    if (!lang) lang = (navigator.language || 'ja').toLowerCase().indexOf('ja') === 0 ? 'ja' : 'en';
    return lang === 'ja' ? 'ja' : 'en';
  }
  function applyLocale() {
    var lang = currentLang();
    document.documentElement.setAttribute('lang', lang);
    var nodes = document.querySelectorAll('[data-ja][data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var t = nodes[i].getAttribute('data-' + lang);
      if (t != null) nodes[i].textContent = t;
    }
  }
  function injectFormTitle() {
    var lang = currentLang();
    var title = lang === 'ja' ? '画像を選択して比較' : 'Select images to compare';
    var form = document.querySelector('.vdiffjs-form-container');
    if (form && !form.getAttribute('data-title')) {
      form.setAttribute('data-title', title);
    }
  }
  applyLocale();

  // (Slider auto-scaling removed by user request — natural size is fine,
  //  the surrounding flex container clips overflow.)

  // ---- Always default to the slider (左右) compare mode on load ----
  // vdiff initializes in 強調 mode and may overwrite earlier clicks, so we click
  // only AFTER the initial canvas has rendered (signals init done), and verify.
  var sliderApplied = false;
  function applyDefaultView() {
    if (sliderApplied) return;
    var sel = document.querySelector('.compare-methods-selecter-container');
    if (!sel) return;
    var sliderInput = sel.querySelector('input[type="radio"][value="0"]');
    if (!sliderInput) return;
    if (sliderInput.checked) { sliderApplied = true; return; }
    // Wait for vdiff's initial render before stealing focus
    var canvas = document.querySelector('.vdiffjs-container > canvas');
    var compareDiv = document.querySelector('.images-compare-container');
    var ready = (canvas && canvas.getBoundingClientRect().height > 50) ||
                (compareDiv && compareDiv.getBoundingClientRect().height > 50);
    if (!ready) return;
    if (window.jQuery) window.jQuery(sliderInput).click();
    else sliderInput.click();
    // Re-verify next tick — if vdiff overrode us, try again (up to 5 attempts)
    var attempts = 0;
    var verify = function() {
      if (sliderInput.checked) { sliderApplied = true; return; }
      if (++attempts >= 5) return;
      if (window.jQuery) window.jQuery(sliderInput).click();
      else sliderInput.click();
      setTimeout(verify, 400);
    };
    setTimeout(verify, 400);
  }

  function tick() {
    injectFormTitle();
    applyDefaultView();
  }
  var mo = new MutationObserver(tick);
  mo.observe(document.body, { childList: true, subtree: true });
  setTimeout(tick, 300);
  setTimeout(tick, 1500);
  setTimeout(tick, 3000);
})();

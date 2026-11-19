/* Studio Carmen Bastos — interações leves (menu, cabeçalho, animações de entrada) */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Ano atual no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      menu.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // Sombra no cabeçalho ao rolar
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var onScroll = function () { topbar.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Entrada suave das seções
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();

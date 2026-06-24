document.addEventListener('includesLoaded', function() {
  var burger = document.getElementById('burger');
  var navMobile = document.getElementById('navMobile');

  if (burger && navMobile) {
    burger.addEventListener('click', function() {
      navMobile.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      if (!navMobile.contains(e.target) && !burger.contains(e.target)) {
        navMobile.classList.remove('open');
      }
    });
  }

  initReveal();
});

function initReveal() {
  var els = document.querySelectorAll('.reveal:not(.visible)');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function(el) { observer.observe(el); });
}

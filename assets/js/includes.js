Promise.all([
  fetch('assets/includes/nav.html').then(function(r) { return r.text(); }),
  fetch('assets/includes/footer.html').then(function(r) { return r.text(); })
]).then(function(results) {
  var navHtml = results[0];
  var footerHtml = results[1];
  var navEl = document.getElementById('nav-placeholder');
  var footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = navHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;
  document.dispatchEvent(new Event('includesLoaded'));
});

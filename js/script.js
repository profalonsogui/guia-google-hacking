function showTab(n) {
  document.querySelectorAll('.content').forEach((c,i) => {
    c.classList.toggle('active', i === n);
  });
  document.querySelectorAll('.nav-btn').forEach((b,i) => {
    b.classList.toggle('active', i === n);
  });
  document.querySelector('.ebook').scrollIntoView({behavior:'smooth'});
}
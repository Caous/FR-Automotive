// InnovaSfera — proposta · interações leves, sem dependências

// Nav stuck on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal
const reveals = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// Validade countdown — 30 dias a partir do carregamento (gatilho de escassez)
(function () {
  const el = document.getElementById('deadline');
  if (!el) return;
  const end = new Date();
  end.setDate(end.getDate() + 30);
  const fmt = end.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  el.textContent = fmt;
})();

// Smooth anchor offset already handled by scroll-behavior

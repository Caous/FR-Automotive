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

// 3D tilt + glow tracking nos cards de módulo (pointer fino apenas)
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (fine && !reduce) {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const MAX = 9;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * MAX;
      const ry = (px - 0.5) * MAX;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      card.style.setProperty('--mx', px * 100 + '%');
      card.style.setProperty('--my', py * 100 + '%');
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

// Parallax leve no globo conforme o mouse
if (fine && !reduce) {
  const scene = document.querySelector('.scene');
  const stage = document.querySelector('.orbit-stage');
  if (scene && stage) {
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      scene.style.transition = 'transform 0.2s ease-out';
      scene.style.transform = `rotateX(${16 - py * 14}deg) rotateZ(8deg) rotateY(${px * 18}deg)`;
    });
    stage.addEventListener('pointerleave', () => {
      scene.style.transition = 'transform 0.8s ease';
      scene.style.transform = '';
    });
  }
}

/**
 * Aluminios Castañeda — main.js
 *
 * Modules:
 *  1. Hero Slider       — auto-advances every 6 s; prev/next controls
 *  2. Scroll Reveal     — IntersectionObserver fades sections in on scroll
 *  3. Counter Animation — animates stat numbers when they enter the viewport
 *  4. Navbar shrink     — adds compact padding on scroll
 *  5. Scroll-top button — shows/hides floating ↑ button
 *  6. FAQ Accordion     — toggles answer panels; only one open at a time
 */

/* ── 1. Hero Slider ─────────────────────────────────────────── */
(function initSlider() {
  const slides = document.querySelectorAll('.slider-item');
  if (!slides.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.opacity = '0';
      slide.classList.remove('z-10');
    });
    slides[index].style.opacity = '1';
    slides[index].classList.add('z-10');
  }

  // Exposed globally so inline onclick handlers work
  window.nextSlide = function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  window.prevSlide = function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  // Show first slide immediately
  showSlide(0);

  // Auto-advance
  setInterval(window.nextSlide, 4000);
}());

/* ── 2. Scroll Reveal ───────────────────────────────────────── */
(function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}());

/* ── 3. Counter Animation ───────────────────────────────────── */
(function initCounters() {
  const DURATION_MS = 2000;
  const FRAME_MS    = 16; // ~60 fps

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el     = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const step   = target / (DURATION_MS / FRAME_MS);
        let count    = 0;

        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            // Append % for the 100 stat, + for everything else
            el.innerText = target + (target === 100 ? '%' : '+');
            clearInterval(timer);
          } else {
            el.innerText = Math.floor(count);
          }
        }, FRAME_MS);

        observer.unobserve(el); // animate only once
      });
    },
    { threshold: 1.0 }
  );

  document.querySelectorAll('.counter').forEach((el) => observer.observe(el));
}());

/* ── 4 & 5. Navbar shrink + Scroll-top button ───────────────── */
(function initScrollBehavior() {
  const navbar    = document.getElementById('navbar');
  const scrollBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 100;

    // Navbar: compact on scroll
    navbar?.classList.toggle('py-2', scrolled);

    // Scroll-top button: visible after 100 px
    scrollBtn?.classList.toggle('opacity-0',    !scrolled);
    scrollBtn?.classList.toggle('translate-y-10', !scrolled);
  });
}());

/* ── 6. FAQ Accordion ───────────────────────────────────────── */
/**
 * Called via onclick="toggleFaq(this)" in HTML.
 * Opens the clicked item; closes any previously open item.
 *
 * @param {HTMLButtonElement} btn — the clicked toggle button
 */
window.toggleFaq = function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon    = btn.querySelector('.material-symbols-outlined');
  const isOpen  = !content.classList.contains('hidden');

  // Close all panels first
  document.querySelectorAll('.faq-content').forEach((c) => c.classList.add('hidden'));
  document.querySelectorAll('.faq-toggle .material-symbols-outlined').forEach((i) => {
    i.style.transform = 'rotate(0deg)';
    i.innerText = 'add';
  });

  // Open the clicked one (unless it was already open)
  if (!isOpen) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(45deg)';
    icon.innerText = 'close';
  }
};

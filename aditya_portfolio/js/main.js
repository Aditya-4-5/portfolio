/* ============================================================
   Aditya Gond Portfolio — main.js
   ============================================================ */

'use strict';

/* ── Navbar scroll shrink ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close nav on link click */
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerNav.observe(s));

/* ── Fade-up reveal ── */
const fadeEls = document.querySelectorAll('.fade-up');
const observerFade = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observerFade.observe(el));

/* ── Skill bars animate ── */
const barFills = document.querySelectorAll('.bar-fill');
const observerBars = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
      observerBars.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

barFills.forEach(bar => observerBars.observe(bar));

/* ── Count-up for stats ── */
function countUp(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

const counters = document.querySelectorAll('.count-up');
const observerCount = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      countUp(entry.target, target);
      observerCount.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => observerCount.observe(c));

/* ── Smooth scroll for nav anchors ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});




window.addEventListener("load", () => {

  const loader = document.getElementById("loader-wrapper");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);

  }, 2500);

});
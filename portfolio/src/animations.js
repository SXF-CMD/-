import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.config({ force3D: true });
gsap.defaults({ ease: 'power4.out' });

export function initOpeningAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // ── Curtain reveal ──
  tl.set('.hero__curtain', { display: 'block' }, 0)
    .fromTo('.hero__curtain--top', { yPercent: -110 }, { yPercent: 0, duration: 0.7, ease: 'power3.inOut' }, 0)
    .fromTo('.hero__curtain--bottom', { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: 'power3.inOut' }, 0)
    .to({}, { duration: 0.25 })
    .to('.hero__curtain--top', { yPercent: -110, duration: 1.1, ease: 'expo.inOut' })
    .to('.hero__curtain--bottom', { yPercent: 110, duration: 1.1, ease: 'expo.inOut' }, '<')
    .set('.hero__curtain', { display: 'none' }, '+=0.3');

  // ── Title: character stagger reveal ──
  const mainTitle = document.querySelector('.hero__title-main');
  if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.innerHTML = '';
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      mainTitle.appendChild(span);
    });

    tl.fromTo(
      mainTitle.querySelectorAll('span'),
      { y: 60, opacity: 0, rotateX: -40 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.0, ease: 'expo.out', stagger: 0.04 },
      0.9
    );
  }

  // ── Accent subtitle ──
  tl.fromTo('.hero__title-accent',
    { opacity: 0, y: 16, letterSpacing: '0.8em' },
    { opacity: 1, y: 0, letterSpacing: '0.5em', duration: 1.2, ease: 'expo.out' }, 1.4);

  // ── SVG lines draw in ──
  tl.to('.hero__line--1',
    { strokeDashoffset: 0, duration: 2.0, ease: 'power2.inOut' }, 0.6);
  tl.to('.hero__line--2',
    { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' }, 0.8);
  tl.to('.hero__line--3',
    { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut' }, 1.0);

  // ── Navbar slides down ──
  tl.fromTo('.navbar',
    { yPercent: -100, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.9, ease: 'expo.out' }, 1.3);

  // ── Footer fades in ──
  tl.fromTo('.hero__footer',
    { opacity: 0 },
    { opacity: 1, duration: 0.8, ease: 'power2.out' }, 2.2);

  return tl;
}

function animateSectionHeader(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;
  const label = section.querySelector('.section-label');
  const title = section.querySelector('.section-title');
  const subtitle = section.querySelector('.section-subtitle');

  const tl = gsap.timeline({
    scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
  });

  if (label) {
    tl.fromTo(label, { opacity: 0, x: -40, filter: 'blur(4px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'expo.out' }, 0);
  }
  if (title) {
    tl.fromTo(title,
      { y: 70, scaleY: 0.88, scaleX: 1.03, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
      { y: 0, scaleY: 1, scaleX: 1, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'expo.out' }, 0.12);
  }
  if (subtitle) {
    tl.fromTo(subtitle, { opacity: 0, y: 22, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'expo.out' }, 0.35);
  }
}

function animateProjectsSection() {
  const cards = gsap.utils.toArray('.projects__card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const abstract = card.querySelector('.projects__card-abstract');
    const info = card.querySelector('.projects__card-info');

    const enterTl = gsap.timeline({
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
    });

    enterTl.fromTo(card, { y: 70, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' }, 0);

    if (abstract) {
      enterTl.fromTo(abstract,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.06 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.95, ease: 'expo.out' }, 0.08);

      gsap.fromTo(abstract, { y: -25 }, {
        y: 25, ease: 'none',
        scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
    }

    if (info) {
      enterTl.fromTo(info, { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: 'expo.out' }, 0.32);
    }
  });
}

export function initAllAnimations() {
  initOpeningAnimation();
  animateSectionHeader('#projects');
  animateProjectsSection();
  return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
}

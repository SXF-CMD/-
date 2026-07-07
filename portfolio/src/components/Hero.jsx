import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Opening Curtains */}
      <div className="hero__curtain hero__curtain--top" />
      <div className="hero__curtain hero__curtain--bottom" />

      {/* Pure black background */}
      <div className="hero__bg" />

      {/* Artistic flowing lines */}
      <svg className="hero__lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <path
          className="hero__line hero__line--1"
          d="M -60 780 Q 200 850 400 720 Q 650 560 720 380 Q 790 200 900 120 Q 1050 20 1200 80 Q 1350 140 1500 60"
          fill="none"
          stroke="url(#lineGrad1)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          className="hero__line hero__line--2"
          d="M -40 180 Q 150 100 350 220 Q 550 340 680 480 Q 820 640 1000 720 Q 1180 800 1350 750 Q 1480 710 1540 780"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          className="hero__line hero__line--3"
          d="M 1480 320 Q 1280 280 1120 380 Q 960 480 880 620 Q 800 760 680 820 Q 560 880 400 840 Q 240 800 100 860"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <circle cx="400" cy="720" r="2.5" fill="rgba(255,255,255,0.5)" />
        <circle cx="1120" cy="380" r="1.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="680" cy="820" r="2" fill="rgba(255,255,255,0.4)" />
      </svg>

      {/* Main Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">TIMELESS</span>
          <span className="hero__title-accent">Design</span>
        </h1>
      </div>

      {/* Bottom info bar */}
      <div className="hero__footer">
        <div className="hero__footer-left">
          <span className="hero__footer-mark">✦</span>
          <span className="hero__footer-dot">·</span>
          <span>2026</span>
          <span className="hero__footer-dot">·</span>
          <span>UI/UX Designer</span>
        </div>
        <div className="hero__footer-right">
          <span className="hero__footer-arrow">↓</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}

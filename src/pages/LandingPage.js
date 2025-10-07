import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUpload, faClock, faListCheck, faUserMd, faFileLines } from '@fortawesome/free-solid-svg-icons';

function SkinHealthIllustration({ className }) {
  return (
    <svg
      className={`hero-illustration ${className || ""}`}
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Skin scan illustration"
    >
      <defs>
        <linearGradient id="accentGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#1f3a93" />
          <stop offset="100%" stopColor="#15366b" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feBlend in="SourceGraphic" in2="b" mode="normal" />
        </filter>
      </defs>

      <rect x="0" y="0" width="600" height="420" rx="18" fill="#fff" stroke="none" />

      {/* left: phone / scan device */}
      <g transform="translate(30,40)">
        <rect x="0" y="10" width="210" height="320" rx="20" fill="#f7f8fb" stroke="#e6e9ef"/>
        <rect x="18" y="28" width="174" height="250" rx="12" fill="#fff" stroke="#e6e9ef" />
        {/* circular scan */}
        <g transform="translate(105,155)">
          <circle r="60" fill="none" stroke="url(#accentGrad)" strokeWidth="6" strokeOpacity="0.85" />
          <circle r="42" fill="#fff" stroke="#e6e9ef" strokeWidth="2"/>
          <g transform="rotate(-10)">
            <path d="M-38 -1 A38 38 0 0 1 38 -1" stroke="#15366b" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="-12" y="-4" width="8" height="8" rx="1.5" fill="#1f3a93" />
            <rect x="6" y="-4" width="8" height="8" rx="1.5" fill="#15366b" />
          </g>
        </g>

        <rect x="18" y="286" width="174" height="10" rx="5" fill="#e9eef8" />
        <rect x="46" y="300" width="110" height="8" rx="4" fill="#e6e9ef" />
      </g>

      {/* right: skin patch / magnifier */}
      <g transform="translate(280,35)">
        <rect x="0" y="0" width="270" height="320" rx="18" fill="#fff" stroke="#e6e9ef" />
        {/* skin patch */}
        <g transform="translate(30,30)">
          <rect x="0" y="0" width="180" height="120" rx="10" fill="#fff6f3" stroke="#f1d9d1"/>
          {/* simulated lesion spots */}
          <circle cx="36" cy="36" r="10" fill="#d9534f" opacity="0.95" />
          <circle cx="80" cy="52" r="6" fill="#c94a4a" opacity="0.9"/>
          <circle cx="130" cy="30" r="8" fill="#d66" opacity="0.9"/>
          <circle cx="110" cy="86" r="5" fill="#c94a4a" opacity="0.8"/>
          <rect x="8" y="120" width="164" height="14" rx="7" fill="#f7f8fb" />
        </g>

        {/* magnifier analyzing area */}
        <g transform="translate(210,140)">
          <circle cx="0" cy="0" r="28" fill="url(#accentGrad)" opacity="0.95" />
          <circle cx="-3" cy="-2" r="18" fill="#fff" />
          <path d="M10 18 L22 30" stroke="#1f3a93" strokeWidth="4" strokeLinecap="round"/>
        </g>

        {/* AI nodes (stylized network) */}
        <g transform="translate(36,170)">
          <line x1="0" y1="0" x2="60" y2="40" stroke="#cfe0ff" strokeWidth="3"/>
          <circle cx="0" cy="0" r="6" fill="#1f3a93"/>
          <circle cx="60" cy="40" r="6" fill="#15366b"/>
          <line x1="22" y1="10" x2="140" y2="12" stroke="#e6f0ff" strokeWidth="3"/>
          <circle cx="140" cy="12" r="6" fill="#1f3a93"/>
        </g>

        {/* annotation badge */}
        <g transform="translate(170,16)">
          <rect x="0" y="0" width="70" height="30" rx="8" fill="#fff" stroke="url(#accentGrad)" />
          <text x="35" y="20" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial" fill="#15366b">AI INSIGHT</text>
        </g>
      </g>

      {/* circular scan */}
      <g transform="translate(105,155)" className="scan-circle">
        <circle r="60" fill="none" stroke="url(#accentGrad)" strokeWidth="6" strokeOpacity="0.85" />
        <circle r="42" fill="#fff" stroke="#e6e9ef" strokeWidth="2" />
      </g>

      {/* magnifier analyzing area */}
      <g transform="translate(210,140)" className="magnifier">
        <circle cx="0" cy="0" r="28" fill="url(#accentGrad)" opacity="0.95" />
        <circle cx="-3" cy="-2" r="18" fill="#fff" />
        <path d="M10 18 L22 30" stroke="#1f3a93" strokeWidth="4" strokeLinecap="round"/>
      </g>

      {/* AI nodes (stylized network) */}
      <g transform="translate(36,170)" className="ai-network">
        <line x1="0" y1="0" x2="60" y2="40" stroke="#cfe0ff" strokeWidth="3"/>
        <circle cx="0" cy="0" r="6" fill="#1f3a93"/>
        <circle cx="60" cy="40" r="6" fill="#15366b"/>
        <line x1="22" y1="10" x2="140" y2="12" stroke="#e6f0ff" strokeWidth="3"/>
        <circle cx="140" cy="12" r="6" fill="#1f3a93"/>
      </g>

    </svg>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleStart = () => {
    navigate('/upload');
  };

  const guideSteps = [
    { icon: faCamera, text: [
      'Prepare a clear photo of the affected skin area.',
      'Tip: Ensure clear lighting, no flash, and sharp focus.',
      'We accept: JPEG, PNG.'
    ] },
    { icon: faUpload, text: 'Upload the photo and complete a brief assessment.' },
    { icon: faClock, text: 'Wait for the model to analyze your image and return results.' },
    { icon: faFileLines, text: 'Read the result and suggested next steps.' },
    { icon: faUserMd, text: 'Connect with certified dermatologists for professional advice if needed.' },
  ];

  return (
    <div className="landing-root" id='home'>
      <header className="hero-wrap">
        <div className="hero-left">
          <div className="brand-row">
            <div className="logo-dot" aria-hidden />
            <div className="product-name">SkinSight AI</div>
          </div>

          <h1 className="hero-title">
            Empower Your Skin Health Journey.
            <br />
            Quick, Private Self-Screening.
          </h1>

          <p className="hero-sub">
            In today's fast-paced world, monitoring your skin health can be challenging.
            This platform puts a powerful, accessible and completely private self-screening tool in your hands.
          </p>

          <div className="cta-section">
            <button 
              className="start-button"
              onClick={handleStart}
            >
              Start Now
            </button>
          </div>

          <div className="trust-row" aria-hidden>
            <span>Trusted by teams at</span>
            <div className="logos">
              <div className="logo-pill">Derm</div>
              <div className="logo-pill">Clinic</div>
              <div className="logo-pill">Research</div>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <SkinHealthIllustration className="hero-illustration" />
        </div>
      </header>

      {/* content block below hero */}
      <main className="content-section" id='about-section'>
        <section className="intro">
          <h2>Why Use This App? Your Skin Health Matters.</h2>
          <p>
            Our application harnesses the power of machine learning to quickly analyze images of your skin.
            By scanning and uploading a photo, you receive an instant assessment for potential signs of common skin conditions.
          </p>
        </section>

        <section className="features-grid">
          <article className="feature">
            <div className="feat-icon"><FontAwesomeIcon icon={faCamera} /></div>
            <h3>Quick & Convenient</h3>
            <p>Stop waiting for an appointment. Get an immediate screening right on your device.</p>
          </article>

          <article className="feature">
            <div className="feat-icon"><FontAwesomeIcon icon={faListCheck} /></div>
            <h3>Proactive Care</h3>
            <p>Identify potential issues early and make informed decisions about seeking professional help.</p>
          </article>

          <article className="feature">
            <div className="feat-icon"><FontAwesomeIcon icon={faFileLines} /></div>
            <h3>Privacy First</h3>
            <p>All scans and uploads are treated with strict confidentiality — your data stays private.</p>
          </article>

          <article className="feature">
            <div className="feat-icon"><FontAwesomeIcon icon={faUserMd} /></div>
            <h3>Expert Foundation</h3>
            <p>Models trained with dermatologist-approved images and clinical guidance.</p>
          </article>
        </section>

        <section className="disclaimer">
          <h3>Important Disclaimer: Consult a Dermatologist</h3>
          <p>
            <strong>Not a diagnostic tool.</strong> The analysis and recommendations are general in nature and are based on automated image analysis.
            For a definitive diagnosis, personalized treatment plan, and tests, consult a board-certified dermatologist or healthcare professional.
          </p>
        </section>

        <section className="how-to" id="guide-section">
          <h2>How to Use</h2>
          <div className="guide-steps">
            {guideSteps.map((step, index) => (
              <div className="guide-step" key={index}>
                <div className="icon-circle">
                  <span className="step-number">{index + 1}</span> {/* Step Number */}
                  <FontAwesomeIcon icon={step.icon} className="guide-icon"/>
                </div>
                <p className="whitespace-pre-line">{step.text}</p>
              </div>
            ))}
          </div>
        </section>
        
        {showTopButton && (
          <button className="go-top-btn" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </main>

      <footer className="site-footer">
        <p>&copy; 2025 SkinSight AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
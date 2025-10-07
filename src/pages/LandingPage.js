import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';
import Navbar from './Navbar';
import DemoModal from '../components/DemoModal'; 
import SkinHealthIllustration from '../components/SkinHealthIllustration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUpload, faClock, faListCheck, faUserMd, faFileLines, faXmark } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); 

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

  // --- New Handlers for Modal ---
  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };
  // -----------------------------

  const guideSteps = [
    { icon: faCamera, text: 
      'Prepare a clear photo of the affected skin area.\n' +
      'Tip: Ensure clear lighting, no flash, and sharp focus.'
    },
    { icon: faUpload, text: 'Upload the photo and complete a brief assessment.' },
    { icon: faClock, text: 'Wait for the model to analyze your image and return results.' },
    { icon: faFileLines, text: 'Read the result and suggested next steps.' },
    { icon: faUserMd, text: 'Connect with certified dermatologists for professional advice if needed.' },
  ];

  return (
    <div className="landing-root" id='home'>
      <Navbar /> 
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
          <button 
            className="secondary-demo-button"
            onClick={handleOpenDemo}
            aria-label="See a live demonstration of the process"
          >
            <FontAwesomeIcon icon={faCamera} style={{ marginRight: '8px' }}/> See a Demo
          </button>
          {/* ---------------------------------------------- */}
          <div className="guide-steps">
            {guideSteps.map((step, index) => (
              <div className="guide-step" key={index}>
                <div className="icon-circle">
                  <span className="step-number">{index + 1}</span>
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
      
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />

    </div>
  );
}

// Exporting the new DemoModal component as well, in case it was meant to be a separate file
export { SkinHealthIllustration, DemoModal };

export default LandingPage;
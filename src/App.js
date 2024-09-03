import './App.css';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Solutions from './Solutions';
import About from './About';
import AnimateOnScroll from './AnimateOnScroll';
import Resources from './Resources';
import image1 from './images/dashboard2.png'; // Replace with actual path to your images
import image2 from './images/dashboard3.png';
import image3 from './images/dashboard2.png';
import image4 from './images/earth.png';
import dashboardImage from './images/background1.png';
import starImage from './images/stars.png'; // Replace with actual path to your star image
import person1Image from './images/testimonial1.jpeg'; // Replace with actual path to your person images
import person2Image from './images/detelina.jpg';
import person3Image from './images/detelina.jpg';
import contactBackground from './images/contact-bg.png'; // Replace with actual path to your background image

function App() {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router basename="/TestClimformatics">
      <div className="App">
        <Navbar handleScrollToContact={handleScrollToContact} />
        <Routes> 
          <Route path="/" element={<AppContent contactRef={contactRef} />} exact />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

function Section({ heading, description, imgSrc, imgAlt, reverse, layers }) {
  return (
    <div className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="text-content">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="image-content">
        <div className="image-container">
          {layers.map((layer, index) => (
            <div key={index} className={`layer ${layer.className}`} style={layer.style}></div>
          ))}
          <img src={imgSrc} alt={imgAlt} className="section-image" />
        </div>
      </div>
    </div>
  );
}

function TestimonialBox({ starImg, header, quote, personImg, name, company }) {
  return (
    <div className="testimonial-box">
      <div className="testimonial-star">
        <img src={starImg} alt="5 stars" />
      </div>
      <h3 className="testimonial-header">{header}</h3>
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-person">
        <img src={personImg} alt={name} />
      </div>
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-company">{company}</p>
    </div>
  );
}

function ContactSection({ contactRef }) {
  return (
    <div className="contact-section" ref={contactRef}>
      <div className="contact-left">
        <h2>Together, we can build a better future</h2>
        <p>One where every community is safer, every resource is used wisely, and every decision is informed by the best data available.</p>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <label className="select-label">
            <select>
              <option disabled selected>Choose Sector</option>
              <option>Agriculture</option>
              <option>Energy</option>
              <option>Healthcare</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            <input type="text" placeholder="Your Title" />
          </label>
          <label>
            <input type="text" placeholder="Your Organization" />
          </label>
          <label>
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            <textarea rows="4" placeholder="Your Message"></textarea>
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function AppContent({ contactRef }) {
  const size = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, contactRef]);

  const shouldAnimate = size.width > 900;
  return (
    <div className="App">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-content-2"></div>
            <div className="hero-background">
              <h1>Climate Insights for a Greener Future</h1>
              <p className="hero-subtitle">According to Earth's changing climate, our team of experts identify future risks and help you mitigate upcoming threats.</p>
            </div>
          <button className="hero-button">Get Started</button>
        </div>
        <div className="dashboard-container">
          <div className="layer light-blue"></div>
          <div className="layer dark-blue"></div>
          <div className="layer black"></div>
          <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
        </div>
      </div>
      {/* New full-size sections */}
      {shouldAnimate ? (
        <AnimateOnScroll reappear threshold={0.1} direction="right">
          <Section
            heading="Imagine a future where we can foresee climate threats"
            description="From wildfire prevention to optimizing agriculture and healthcare, we manage resources and protect our environment by mitigating climate risks."
            imgSrc={image1}
            imgAlt="Description of image 1"
            reverse={false}
            layers={[
              { className: 'dark-blue', style: { width: '99%', height: '127%', transform: 'rotate(5.51deg)', backgroundColor: '#088395' } },
              { className: 'screen-layer-right', style: { width: '81.5%', height: '102%', backgroundColor: 'black' } }
            ]}
          />
        </AnimateOnScroll>
      ) : (
        <Section
          heading="Imagine a future where we can foresee climate threats"
          description="From wildfire prevention to optimizing agriculture and healthcare, we manage resources and protect our environment by mitigating climate risks."
          imgSrc={image1}
          imgAlt="Description of image 1"
          reverse={false}
          layers={[]} // Empty layers to simplify for smaller screens
        />
      )}

      {shouldAnimate ? (
        <AnimateOnScroll reappear threshold={0.1} direction="left">
          <Section
            heading="Safeguarding our cities from devastating fires"
            description="This is a description for section 2."
            imgSrc={image2}
            imgAlt="Description of image 2"
            reverse={true}
            layers={[
              { className: 'light-blue', style: { width: '98%', height: '140%', transform: 'rotate(-5.51deg)', backgroundColor: '#37B7C3' } },
              { className: 'screen-layer-left', style: { width: '81.6%', height: '102.5%', backgroundColor: 'black' } }
            ]}
          />
        </AnimateOnScroll>
      ) : (
        <Section
          heading="Safeguarding our cities from devastating fires"
          description="This is a description for section 2."
          imgSrc={image2}
          imgAlt="Description of image 2"
          reverse={true}
          layers={[]} // Empty layers to simplify for smaller screens
        />
      )}

      {shouldAnimate ? (
        <AnimateOnScroll reappear threshold={0.1} direction="right">
          <Section
            heading="Ensuring our healthcare systems are ready for heatwaves"
            description="This is a description for section 3."
            imgSrc={image3}
            imgAlt="Description of image 3"
            reverse={false}
            layers={[
              { className: 'dark-blue', style: { width: '99%', height: '127%', transform: 'rotate(5.51deg)', backgroundColor: '#088395' } },
              { className: 'screen-layer-right', style: { width: '81.5%', height: '102%', backgroundColor: 'black' } }
            ]}
          />
        </AnimateOnScroll>
      ) : (
        <Section
          heading="Ensuring our healthcare systems are ready for heatwaves"
          description="This is a description for section 3."
          imgSrc={image3}
          imgAlt="Description of image 3"
          reverse={false}
          layers={[]} // Empty layers to simplify for smaller screens
        />
      )}
      {/* New testimonial section */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <TestimonialBox 
            starImg={starImage}
            header="Best value"
            quote="Climformatics makes solar forecasting better, more granular and therefore more useful. This sort of solution will be key to resiliency - removing some of the uncertainty in current state of the art solar production."
            personImg={person1Image}
            name="Danny Kennedy"
            company="Chief Energy Officer at New Energy Nexus"
          />
          <TestimonialBox 
            starImg={starImage}
            header="Complete visibility"
            quote="Grow is the best value in analytics available. Grow enables our decision makers to be predictive for both internal and external forces that affect thee bottom line."
            personImg={person2Image}
            name="Jane Smith"
            company="XYZ Ltd"
          />
          <TestimonialBox 
            starImg={starImage}
            header="No-code, self serve"
            quote="Grow is the best value in analytics available. Grow enables our decision makers to be predictive for both internal and external forces that affect thee bottom line."
            personImg={person3Image}
            name="Alice Johnson"
            company="DEF Inc"
          />
        </div>
      </div>
      {/* New contact section */}
      <ContactSection contactRef={contactRef} />
    </div>
  );
}

export default App;

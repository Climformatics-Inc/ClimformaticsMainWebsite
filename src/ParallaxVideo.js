import React, { useEffect, useState } from 'react';
import './ParallaxVideo.css';


const ParallaxVideo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset / 2); // Adjust division for effect speed
  const hurricaneVideo = "https://dl.dropboxusercontent.com/scl/fi/hhw8czxd9u0ueq8va4nld/world.mp4?rlkey=l7z5we6ciobr4nn4f6w632bca&st=acnn6snu";

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="video-parallax-container" style={{position: 'relative', overflow: 'hidden', height: '800px'}}>
      {/* Both the video and the text overlay move together with the same translateY value */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="parallax-video"
        style={{ transform: `translateY(${offsetY}px)` }} // Apply effect
      >
        <source src={hurricaneVideo} type="video/mp4" />
      </video>
      <div className="parallax-content" style={{ transform: `translateY(${offsetY}px)` }} >
        <div className= "parallax-text"> How can a world-class climate prediction platform enhance your business? </div>
        
      </div>
    </div>
  );
};

export default ParallaxVideo;

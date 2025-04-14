import React, { useRef, useEffect } from 'react';

const HeaderMarquee = ({ children, speed, pauseOnHover }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (marqueeElement) {
      marqueeElement.style.animationDuration = `${speed}s`;
    }
  }, [speed]);

  return (
    <div className="marquee-container">
      <div
        className="marquee-box"
        ref={marqueeRef}
        style={{
          animationPlayState: pauseOnHover ? 'running' : 'paused',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HeaderMarquee;

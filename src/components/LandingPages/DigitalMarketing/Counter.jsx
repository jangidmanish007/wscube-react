import React, { useEffect, useRef, useState } from 'react';

export default function Counter(props) {
  const { endValue, duration, stepDuration } = props;
  const [count, setCount] = useState('0');
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const end = parseInt(endValue.replace(',', '')); // Remove commas before parsing
    if (start === end) return;

    let steps = Math.ceil((end - start) / ((duration * 1000) / stepDuration));

    let timer = setInterval(() => {
      start += Math.ceil((end - start) / steps);
      setCount(start.toLocaleString()); // Format count with commas
      steps--;

      if (start >= end) clearInterval(timer);
    }, stepDuration);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  };

  return (
    <span className="Count" ref={containerRef}>
      {count}
    </span>
  );
}

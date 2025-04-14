import React, { useEffect, useState } from 'react';

export default function LandingFooter() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setCurrentYear(newYear);
  }, []);
  return (
    <section className="py-20 bg-color-41">
      <div className="container-main container-w-xl-1092 text-center">
        <span className="fs-12 fw-400 text-color-2 ">
          © Copyright {currentYear}, All Rights Reserved by WsCube Tech
        </span>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';

export default function LangingStickyFooter(props) {
  const { openScheduleModal } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const atMiddle = scrollY > 100;
      const atBottom = scrollY + viewportHeight >= scrollHeight;
      setIsVisible(atMiddle && !atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`py-2 bg-color-2 d-lg-none d-block position-fixed sticky-footer w-full rounded-t-8 z-[99]`}
      style={{ bottom: `${(isVisible && '0') || '-100%'}`, zIndex: '99' }}
    >
      <div className="container-main container-w-xl-1092">
        <ul className="banner-btns w-full d-flex justify-content-center max-w-652 mx-auto list-unstyled mb-0">
          <li className="w-50">
            <button
              className="rounded-12 w-full py-14 px-lg-12 px-8 fs-lg-18 fs-13 fw-600 text-color-2 download-curiculm-btn"
              onClick={() => openScheduleModal('Download_Curriculum')}
            >
              Download Curriculum
            </button>
          </li>
          <li className="mx-2 my-1" style={{ border: '1px solid #66CFFF80' }}></li>
          <li className="w-50">
            <button
              className="rounded-12 w-full py-14 px-lg-12 px-8 fs-lg-18 fs-13 text-color-26 fw-600
               book-demo-btn"
              onClick={() => openScheduleModal('Schedule_Demo')}
            >
              Book Demo Now
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

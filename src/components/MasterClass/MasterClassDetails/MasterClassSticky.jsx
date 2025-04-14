import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { StickyFooterCounter } from './Counter/CountdownTimer';

export default function MasterClassSticky({ masterClassDetailsData, targetDate, setShowLeadModal }) {
  const [scrollBottom, setScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY > 1000 && windowHeight + scrollY < documentHeight) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`master-class-sticky position-fixed start-0 w-100  ${
        (scrollBottom && 'bottom-scrolled py-lg-26 py-16') || ''
      }`}
      style={{ bottom: scrollBottom ? '0' : '-100%', transition: 'bottom 0.3s' }}
    >
      <div
        className="container-w-full container-w-3xl-1344 container-w-2xl-1344 container-w-xl-1344
           container-w-lg-960 container-w-md-720 container-w-sm-540"
      >
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="master-bottom-schedule w-100 max-w-465 min-h-69 d-flex align-items-center 
             justify-content-lg-start justify-content-center px-lg-24 bg-white rounded-80 border-w border-color-1"
            >
              <p className="text-color-1 fs-lg-18 fw-600 lh-lg-27 fs-13 lh-24 m-0">
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/cal-outline-black.svg'}
                  width={20}
                  height={20}
                  className="img-fluid mr-12 mb-1 d-none d-lg-inline"
                  alt="icon"
                />
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/cal-white.svg'}
                  width={14}
                  height={14}
                  className="img-fluid mr-12 mb-1 d-lg-none"
                  alt="icon"
                />
                {moment(masterClassDetailsData?.class_start_datetime).format('Do MMM, ddd')}
              </p>
              <span
                className="border-w w-size-1 h-size-37 d-block mx-lg-3 mx-1 d-none d-lg-inline"
                style={{ opacity: 0.3 }}
              ></span>
              <p className="text-color-1 fs-lg-18 fw-600 lh-lg-27 fs-13 lh-24 mb-0 ms-lg-0 ms-2">
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/clock-outline-black.svg'}
                  width={20}
                  height={20}
                  className="img-fluid mr-12 mb-1 d-none d-lg-inline"
                  alt="icon"
                />
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/clock-white.svg'}
                  width={14}
                  height={14}
                  className="img-fluid mr-12 mb-1 d-lg-none"
                  alt="icon"
                />
                {moment(masterClassDetailsData?.class_start_datetime).format('hh:mm A')} -{' '}
                {moment(masterClassDetailsData?.class_end_datetime).format('hh:mm A')}
              </p>
            </div>
            <StickyFooterCounter targetDate={targetDate} />
          </div>
          <div className="d-flex align-items-center justify-content-lg-start justify-content-center">
            {/* <button className="border-0 fs-16 min-w-56 fw-600 h-size-56 text-white master-btn-share rounded-12 px-16 mr-24">
              <Image
                src={process.env.IMG_PATH + 'images/master-class/share-white-icon.svg'}
                width={18}
                height={20}
                alt="Icon"
                className="img-fluid mr-lg-12"
              />
              <span className="d-none d-lg-inline">Share this Class</span>
            </button> */}
            <button
              onClick={() => setShowLeadModal(true)}
              className="border-0 fs-16 fw-600 h-size-56 bg-color-3 text-white master-btn-reg rounded-12 px-36"
            >
              Register for free!!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

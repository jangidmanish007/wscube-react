import Image from 'next/image';
import React from 'react';

export default function ContactOnlineCourse() {
  return (
    <section className="contact-online-course d-flex align-items-stretch">
      <div className="contact-online-left w-50 py-lg-40 py-60 px-16 px-lg-0 pr-lg-50 d-flex align-items-center">
        <div className="max-w-532 text-center text-lg-start contact-us-online-box">
          <h2 className="text-white fs-32 lh-48 fw-400 mb-xl-80 mb-40">
            If you want to know about <br />
            <span className="text-color-25 fw-600 lh-60 d-inline-block">online courses</span> or{' '}
            <span className="text-color-25 fw-600 lh-60 d-inline-block cohort-text">cohorts</span> then
            <br /> you can contact us from here.
          </h2>
          <div className="d-lg-flex align-items-center w-100">
            <div className="w-50 mr-lg-32 mb-32 mb-lg-0">
              <div className="mx-auto mx-lg-0 bg-white rounded-circle w-size-44 h-size-44 mb-15 d-flex align-items-center justify-content-center reverse-shadow-2">
                <Image
                  src={process.env.IMG_PATH + 'images/contact-us/contact-mail-icon.svg'}
                  width={24}
                  height={24}
                  alt="icon"
                  className="img-fluid"
                />
              </div>
              <p className="mb-15 text-white fs-14 lh-21">We usually reply within 24 hours</p>
              <a href="mailto:support@wscubetech.com" className="text-white fs-20 lh-30 fw-600">
                support@wscubetech.com
              </a>
            </div>
            <div className="w-50">
              <div className="mx-auto mx-lg-0 bg-white rounded-circle w-size-44 h-size-44 mb-15 d-flex align-items-center justify-content-center reverse-shadow-2">
                <Image
                  src={process.env.IMG_PATH + 'images/contact-us/contact-call-icon.svg'}
                  width={24}
                  height={24}
                  alt="icon"
                  className="img-fluid"
                />
              </div>
              <p className="mb-15 text-white fs-14 lh-21">Talk to us and see how we can work together.</p>
              <a href="tel:+91 92696-98122" className="text-white fs-20 lh-30 fw-600">
                +91 92696-98122
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-online-right w-50 py-40 d-none d-lg-block">
        <div className="w-100 me-auto pl-42 overflow-hidden meet-image">
          <Image
            src={process.env.IMG_PATH + 'images/contact-us/zoom-meet.png'}
            width={810}
            height={455}
            alt="Image"
            className="img-fluid max-w-810 w-100"
          />
        </div>
      </div>
    </section>
  );
}

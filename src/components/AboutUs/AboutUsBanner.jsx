import React from 'react';

export default function AboutUsBanner() {
  return (
    <section className="about-us-banner-section pt-2xl-192 pt-lg-172 pt-96 pb-2xl-194 pb-md-134 pb-28 position-relative">
      <div className="aboutus-header-grident w-100 min-h-183 position-absolute top-0 start-0 "></div>
      <div className="container-main container-w-xl-1202">
        <div className="max-w-lg-610 max-w-400 mx-auto position-relative" style={{ zIndex: 99 }}>
          <h1 className="fs-lg-51 fs-22 lh-33 fw-600 lh-lg-61 text-color-2 text-center mb-lg-14 mb-8">
            Crafting Careers, Empowering Learners
          </h1>
          <p className="fs-lg-18 fs-14 lh-lg-27 lh-21 fw-400 text-color-2 text-center mb-0">
            At WsCube Tech, we collaborate with top industry maestros to develop transformative, cohort-based learning
            programs, empowering a global community of aspirants to become job-ready.
          </p>
        </div>
      </div>
    </section>
  );
}

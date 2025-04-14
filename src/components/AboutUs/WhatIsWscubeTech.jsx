import Image from 'next/image';
import React from 'react';

export default function WhatIsWscubeTech() {
  return (
    <section className="py-lg-80 py-64 what-wscubetech-section">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12 text-center mb-60">
            <h2 className="fs-32 lh-44 fw-600 lh-lg-54 mb-12 text-color-1">Who we are ?</h2>
            <p className="fs-14 fw-400 lh-21 text-color-7 mb-0">
              WsCube is a Hybrid Upskilling Edtech, develops and disseminates Tech-powered Career Acceleration Programs
              and Job Oriented Professional Courses curated for Aspirants of Bharat, readying them for Global workforce
              opportunities.
            </p>
          </div>
        </div>
        <div className="d-lg-flex justify-content-between grid-gap-xl-40">
          <div className="w-full max-w-xl-738 max-w-lg-300 max-w-400 max-h-668 mx-xl-auto mx-lg-0 mx-auto mb-lg-0 mb-20">
            <div className="img-box position-relative rounded-20">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/mentoring-img.webp'}
                width={778}
                height={612}
                alt=""
                className="img-fuild w-full rounded-20 object-fit-cover h-auto min-h-289 "
              />
              <div className="image-grident-layer position-absolute top-0 start-0 w-full h-full rounded-20">
                <div className="d-flex flex-column mt-auto justify-content-end h-full px-xl-40 pb-40 px-20 align-items-lg-start align-items-center text-lg-start text-center">
                  <div className="img-box mb-xl-20 mb-12">
                    <Image
                      src={process.env.IMG_PATH + 'images/about-us/goal-icon.svg'}
                      width={60}
                      height={60}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 className="fs-xl-20 fs-16 lh-xl-30 lh-24 text-color-2 fw-600 mb-xl-2 mb-1">
                    Vetted for Personalised Upskilling
                  </h3>
                  <p className="fs-xl-16 fs-14 lh-xl-24 lh-21 fw-400 text-color-2 mb-0">
                    We are sure that until deep personalisation is added to Career Aspirations, suitable upskilling and
                    impactful career readiness cannot be achieved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl-392 max-w-lg-600 max-w-400 flex-xl-column d-lg-flex mx-xl-auto mx-lg-0 mx-auto">
            <div className="mb-xl-40 mr-xl-0 mr-lg-30 mb-lg-0 mb-20 what-wscube-right-side">
              <div className="industry-membership-card bg-color-3 border-0 rounded-20 h-100 min-h-289">
                <div className="px-xl-40 py-20 px-20 text-color-2 d-flex flex-column justify-content-end align-items-lg-start align-items-center text-lg-start text-center">
                  <div className="img-box mb-20">
                    <Image
                      src={process.env.IMG_PATH + 'images/about-us/mentoring-icon.svg'}
                      width={56}
                      height={56}
                      alt=""
                      className="img-fuild"
                    />
                  </div>
                  <h3 className="fs-xl-20 fs-16 lh-xl-30 lh-24 text-color-2 fw-600 mb-xl-2 mb-1">Upskilling Bharat</h3>
                  <p className="fs-xl-16 fs-14 lh-xl-24 lh-21 fw-400 text-color-2 mb-0">
                    With its Tech-enabled hybrid delivery environment, the Company aims to disrupt Career Readiness at
                    scale for over 100 Million Job Aspirants in deep demographics of “Bharat“
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <div className="industry-membership-card bg-color-24 industry-card-2 border-0 rounded-20 h-100 min-h-289">
                <div className="px-xl-40 py-20 px-20 text-color-2 d-flex flex-column justify-content-end align-items-lg-start align-items-center text-lg-start text-center">
                  <div className="img-box mb-20">
                    <Image
                      src={process.env.IMG_PATH + 'images/about-us/resume-icon.svg'}
                      width={56}
                      height={56}
                      alt=""
                      className="img-fuild"
                    />
                  </div>
                  <h3 className="fs-xl-20 fs-16 lh-xl-30 lh-24 text-color-2 fw-600 mb-xl-2 mb-1">
                    Bridging Opportunity Gap
                  </h3>
                  <p className="fs-xl-16 fs-14 lh-xl-24 lh-21 fw-400 text-color-2 mb-0">
                    Our career mentorship programs are tailored to cater specifically to learners from India's tier 2,
                    3, and 4 cities. We aim to help them unlock their true potential regardless of their geographical
                    location or language proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

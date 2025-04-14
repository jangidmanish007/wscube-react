import Image from 'next/image';
import React from 'react';

export default function WhatShouldILearn(props) {
  const { openScheduleModal } = props;

  return (
    <section className="py-lg-116 py-88 why-learn-the-program-section position-relative overflow-hidden">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading text-center mb-lg-60 mb-40">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Why WsCube Tech?</h2>
          <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">
            We craft your success story with our innovative learning approach.
          </p>
        </div>
        <div className="d-lg-flex grid-gap-32 mb-lg-52 mb-32">
          <div className="h-full w-full max-w-616 order-lg-1 order-2 text-color-2 mx-auto">
            <div className="why-ws-left-side-card p-lg-40 p-24 rounded-12 mb-32 transation-3">
              <h3 className="text-25 lh-25 fw-600 mb-32">WsCubeTech Upskilling Pedagogy</h3>
              <div className="d-flex flex-nowrap grid-gap-16">
                <div className="img-box rounded-6 h-auto">
                  <img src="/images/landing-page/background/upskill-pedagogy-img-1.png" className="w-full h-full" />
                </div>
                <div className="img-box rounded-6">
                  <img
                    src={'/images/landing-page/background/upskill-pedagogy-img-2.png'}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="why-ws-left-side-card p-lg-40 p-24 rounded-12 mb-32 transation-3">
              <h3 className="fs-20 lh-25 fw-600 mb-20">Project-Based Learning</h3>
              <p className="fs-16 fw-400 text-color-33 mb-32">
                This course has been designedaccording to the top company sjob description covering all depthsin detail.
              </p>
              <div className="d-grid grid-lg-cols-3 grid-md-cols-2 grid-cols-1 grid-gap-12">
                <div
                  className="p-20 bg-grident-color-6 rounded-12 h-full text-center"
                  style={{
                    background:
                      'linear-gradient(83.91deg, rgba(102, 207, 255, 0.2) 9.89%, rgba(255, 255, 255, 0.2) 87.6%)',
                  }}
                >
                  <p className="fs-14 fw-600 text-color-33 text-center mb-20">Brand Teardown- JioCinema</p>
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/hiring-compines-logo/jio-cinema-icon.svg`}
                    width={123}
                    height={68}
                    alt="img-card"
                    className="mx-auto"
                  />
                </div>
                <div
                  className="p-20 bg-grident-color-6 rounded-12 h-full text-center"
                  style={{
                    background:
                      'linear-gradient(83.91deg, rgba(102, 207, 255, 0.2) 9.89%, rgba(255, 255, 255, 0.2) 87.6%)',
                  }}
                >
                  <p className="fs-14 fw-600 text-color-33 text-center mb-20">E-commercebrand (Jio Mart)</p>
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/hiring-compines-logo/jio-mart-icon.svg`}
                    width={81}
                    height={72}
                    alt="img-card"
                    className="mx-auto"
                  />
                </div>
                <div
                  className="p-20 bg-grident-color-6 rounded-12 h-full text-center"
                  style={{
                    background:
                      'linear-gradient(83.91deg, rgba(102, 207, 255, 0.2) 9.89%, rgba(255, 255, 255, 0.2) 87.6%)',
                  }}
                >
                  <p className="fs-14 fw-600 text-color-33 text-center mb-20">
                    Blinkit & Zomatos Social Media Marketing
                  </p>
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/hiring-compines-logo/zomato-icon.svg`}
                    width={132}
                    height={62}
                    alt="img-card"
                    className="mx-lg-0 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="why-ws-left-side-card p-lg-40 p-24 rounded-12 mb-32 transation-3">
              <div className="mb-32">
                <h3 className="fs-20 lh-25 fw-600 mb-20">Personalized DoubtClearing Sessions</h3>
                <p className="fs-16 text-color-33 fw-400 mb-0">
                  We ensure efficient learning by clearing all your doubts during and after the live classes.
                </p>
              </div>
              <div className="img-box w-full rounded-6 h-auto">
                <img src={'/images/landing-page/background/zoom-meeting-1.png'} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="why-ws-left-side-card p-lg-28 p-24 rounded-12 mb-lg-0 mb-32 transation-3">
              <div className="d-md-flex grid-gap-32">
                <div className="img-box w-full max-w-130 mx-md-0 mx-auto rounded-6 h-auto mb-md-0 mb-4">
                  <img src={'/images/landing-page/background/youtube-award.svg'} alt="" className="w-full h-full" />
                </div>
                <div className="cotent max-w-395 w-full">
                  <h3 className="leading-[2.375rem] text-color-33 fw-600 mb-4 flex flex-wrap items-center fs-28 ">
                    3 Million
                    <span className="mx-2">
                      <Image
                        src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/youtube-icon.svg`}
                        width={135}
                        height={30}
                        alt="youtube-icon"
                      />
                    </span>
                    Subscribers
                  </h3>
                  <button className="border rounded py-8 px-12 fs-14 fw-500 text-color-33 transation-3 custom-white-outline-btn">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full max-w-lg-411 max-w-616 order-lg-2 order-1 text-color-2 mx-auto">
            <div className="why-ws-left-side-card p-lg-40 p-24 rounded-12 mb-32 transation-3">
              <div className="mb-32">
                <h3 className="fs-20 lh-25 fw-600 mb-20">Industry-Ready Curriculum</h3>
                <p className="fs-16 text-color-33 fw-400 mb-0">
                  This course has been designedaccording to the top company sjob description covering all depthsin
                  detail.
                </p>
              </div>
              <div className="img-box w-full mb-30">
                <img
                  src={'/images/landing-page/background/brochure-image.png'}
                  alt=""
                  className="w-full h-full rounded-6"
                />
              </div>
              <div className="text-center">
                <button
                  className="rounded-12 fs-14 w-full min-h-41 max-w-329 px-3 fw-600 text-color-2 download-curiculm-btn"
                  onClick={() => openScheduleModal('Download_Curriculum')}
                >
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="why-ws-left-side-card p-lg-40 p-24 rounded-12 mb-32 transation-3">
              <div className="mb-38">
                <h3 className="fs-20 lh-25 fw-600 mb-20">Deep Dive with Case Studies </h3>
                <p className="fs-16 text-color-33 fw-400 mb-0">
                  We offer insights into real-lifeproblems, and solutions to help youunderstand complex concepts,
                  andreal-world scenarios.
                </p>
              </div>
              <div className="d-grid grid-cols-2 grid-gap-32">
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/lens-icon.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/ola-icon.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/wallmart.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/duolingo-white-icon.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/mamaearth-white-icon.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <div className="img-box w-full">
                  <Image
                    src={'/images/landing-page/hiring-compines-logo/air-bnb-icon.svg'}
                    width={148}
                    height={56}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="why-ws-left-side-card p-24 pe-0 rounded-12">
              <div className="d-md-flex align-items-center justify-content-between">
                <div className="text-md-start text-center mb-md-0 mb-20">
                  <p className="fs-14 text-color-33 fw-600 mb-2">Average CTC</p>
                  <h3 className="fs-36 lh-25 fw-600 text-uppercase text-color-33">6.8 LPA</h3>
                </div>
                <div className="img-box rounded-6 h-auto">
                  <img
                    src={'/images/landing-page/background/meeting-image.png'}
                    alt=""
                    className="w-full h-full min-h-70 min-h-137"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="rounded-12 w-full max-w-lg-410 max-w-250 py-lg-20 py-16 px-lg-12 fs-lg-18 fs-16 fw-600 text-color-26 book-demo-btn"
            onClick={() => openScheduleModal('Schedule_Demo')}
          >
            Book Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}

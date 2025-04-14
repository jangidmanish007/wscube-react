import Image from 'next/image';
import React from 'react';
import TopHiringCompines from './TopHiringCompines';
import CourseFeatures from './CourseFeatures';

export default function HomeBannner(props) {
  const { openScheduleModal, handleYoutubeVideoModal } = props;
  return (
    <section className="landing-banner-section pt-24">
      <div className="container-main container-w-xl-1092 mb-lg-69 mb-40">
        <div className="w-full logo-wrapper mb-lg-64 mb-40">
          <Image src={`${process.env.LANDING_IMG_PATH}images/landing-page/ws-logo.svg`} width={175} height={70} />
        </div>
        <div className="w-full max-w-778 mx-auto">
          <div className="banner-heading text-capitalize">
            <h1
              className="text-capitalize fs-lg-50 fs-23 text-center lh-lg-60 lh-40 fw-600 text-color-2 mb-16"
              style={{ letterSpacing: '-1px' }}
            >
              Become a Skilled Digital Marketer in 20 Weeks!
              <span className="ml-lg-16 ml-2 d-inline-block align-middle">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/loud-speaker-icon.svg`}
                  width={60}
                  height={60}
                  alt="speaker-icon"
                  className="w-size-lg-60 w-size-60"
                />
              </span>
            </h1>
          </div>
          <div className="w-full max-w-570 mx-auto mb-lg-89 mb-71 fs-lg-18 fs-16 text-color-36 lh-28">
            <p className="text-center mb-0">
              Learn digital marketing with industry experts to drive results and stay ahead in today’s competitive
              landscape.
            </p>
          </div>
          <div
            className="main-course-review-wrapper pt-lg-72 pt-72 pb-20 custom-rounded-1 border-w border-color-2 
           border-white border-dashed position-relative mb-32 z-0"
            style={{
              backgroundImage:
                'radial-gradient(107% 107% at 50% -7%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          >
            <div className="banner-package-info position-absolute z-n1 start-0 h-size-150 w-full"></div>
            <div
              className="list-unstyled position-absolute w-full max-w-lg-416 max-w-300"
              style={{ top: '-55px', left: '50%', transform: 'translateX(-50%)' }}
            >
              <div className="position-relative" style={{ padding: '2px' }}>
                <div
                  className="position-absolute top-0 start-0 h-full w-full z-n1 custom-rounded-2"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffd158 100%)',
                  }}
                ></div>
                <div
                  className="py-lg-20 py-12 px-lg-26 px-16 d-flex custom-rounded-2 justify-content-center"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #420ab9 0%, #7544dd 100%)',
                  }}
                >
                  <div className="text-center">
                    <p className="fs-lg-14  fs-12 mb-2 text-color-36  fw-500 text-lg-nowrap">Jobs on LinkedIn Alone</p>
                    <span className="fs-lg-24  text-18 text-color-2 fw-600">42,000+</span>
                  </div>
                  <div className="mx-lg-16 mx-8 d-flex">
                    <span className="border-w border-color-2 d-inline-block h-full " style={{ opacity: '20%' }}></span>
                    <span className="border-w border-color-38 d-inline-block h-full"></span>
                  </div>
                  <div className="text-center">
                    <p className="fs-lg-14 fs-12 mb-2 text-color-36 fw-500 text-lg-nowrap">Maximum Compensation</p>
                    <span className="fs-lg-24  text-18 text-color-2 fw-600">₹12 LPA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid grid-md-cols-4 grid-cols-2 text-center">
              <ul className="list-unstyled mb-md-0 mb-16">
                <li className="mb-2">
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/banner-star-icon.svg`}
                    width={44}
                    height={44}
                    alt="speaker-icon"
                    className="w-size-lg-44 w-size-25 mx-auto"
                  />
                </li>
                <li className="mb-2 text-color-36 fs-16 fw-500">Reviews</li>
                <li className="text-color-2 fs-lg-28 fs-19 fw-600 lh-lg-32 lh-27">
                  4.9/<span className="text-xl">5</span>
                </li>
              </ul>
              <ul className="list-unstyled mb-md-0 mb-16">
                <li className="mb-2">
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/learners-icon.svg`}
                    width={44}
                    height={44}
                    alt="speaker-icon"
                    className="w-size-lg-44 w-size-25 mx-auto"
                  />
                </li>
                <li className="mb-2 text-color-36 fs-16 fw-500">Total Learners</li>
                <li className="text-color-2 fs-lg-28 fs-19 fw-600 lh-lg-32 lh-27">
                  300k<span className="text-xl">+</span>
                </li>
              </ul>
              <ul className="list-unstyled mb-md-0 mb-16">
                <li className="mb-2">
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/availables-seats-icon.svg`}
                    width={44}
                    height={44}
                    alt="speaker-icon"
                    className="w-size-lg-44 w-size-25 mx-auto"
                  />
                </li>
                <li className="mb-2 text-color-36 fs-16 fw-500">Available Seats</li>
                <li className="text-color-2 fs-lg-28 fs-19 fw-600 lh-lg-32 lh-27">
                  32/<span className="text-xl">20</span>
                </li>
              </ul>
              <ul className="list-unstyled mb-md-0 mb-16">
                <li className="mb-2">
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/costs-icon.svg`}
                    width={44}
                    height={44}
                    alt="speaker-icon"
                    className="w-size-lg-44 w-size-25 mx-auto"
                  />
                </li>
                <li className="mb-2 text-color-36 fs-16 fw-500">Cost</li>
                <li>
                  <p className="text-color-2 fs-lg-28 fs-19 fw-600 lh-lg-32 lh-27 mb-2">₹34,999/-</p>
                  <span className="text-color-2 text-xs fw-600 leading-[1.313rem] py-1 px-2 rounded bg-label-color-1 line-through">
                    ₹45,000/-
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <ul className="list-unstyled banner-btns w-full d-flex justify-content-center max-w-652 mx-auto">
            <li className="w-50">
              <button
                className="rounded-12 w-full py-lg-20 py-16 px-lg-12 px-8 fs-lg-18 fs-13 fw-600 text-color-2 download-curiculm-btn "
                onClick={() => openScheduleModal('Download_Curriculum')}
              >
                Download Curriculum
              </button>
            </li>
            <li className="px-lg-3 px-1"></li>
            <li className="w-50">
              <button
                className="rounded-12 w-full py-lg-20 py-16 px-lg-12 px-8 fs-lg-18 fs-13 text-color-26 fw-600 book-demo-btn"
                onClick={() => openScheduleModal('Schedule_Demo')}
              >
                Book Demo Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <TopHiringCompines />
      <CourseFeatures handleYoutubeVideoModal={handleYoutubeVideoModal} />
    </section>
  );
}

import Image from 'next/image';
import React from 'react';

export default function SuccessCertificate(props) {
  const { openScheduleModal } = props;
  return (
    <section
      className="py-lg-116 py-88 custom-background-postion-1 position-relative"
      style={{
        backgroundColor: '#110e37',
        backgroundImage: "url('/images/landing-page/background/bg-layer-5.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 15% right 4%',
      }}
    >
      <div
        className="position-absolute w-size-130 h-size-130 bg-[url('/images/background/bg-layer-5.svg')]"
        style={{
          background: "url('/images/landing-page/background/bg-layer-5.svg') no-repeat",
          backgroundPosition: 'top 15% right 4%',
          bottom: '10%',
          left: '5%',
        }}
      ></div>
      <div className="container-main container-w-xl-1092">
        <div className="main-wrapper position-relative mb-54">
          <div className="section-heading mb-28 grid-gap-60 d-flex">
            <div className="max-w-333 w-full d-lg-block d-none">
              <div className="position-absolute" style={{ left: '4%', bottom: '10%', zIndex: '99' }}>
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/background/certificate-image.webp`}
                  width={293}
                  height={414}
                  className="w-full max-w-293"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-666 w-full ml-auto">
              <h2 className="text-color-33 fs-lg-54 fs-32 lh-lg-72 lh-43 fw-500 mb-20">
                Certify Your Success, <span className="fs-lg-43 fs-32">Empower Your Future.</span>
              </h2>
            </div>
          </div>
          <div
            className="w-full d-lg-flex grid-gap-30 py-lg-46 py-29 px-lg-30 px-35
            mentor-main-wrapper common-border-grident"
          >
            <div className="max-w-lg-333 w-full ">
              <div className="mb-lg-0 mb-24 d-lg-none d-block text-center">
                <Image
                  width={293}
                  height={414}
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/background/certificate-image.webp`}
                  className="w-full max-w-293 mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-666 w-full ms-auto">
              <div className="d-grid grid-lg-cols-3 grid-gap-20">
                <div className="cartificate-card h-full">
                  <div className="img-box mb-16">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/certificate-icon.svg`}
                      width={48}
                      height={48}
                      alt="certificat-icon"
                    />
                  </div>
                  <div className="info mb-12">
                    <h3 className="mb-3 fs-16 fw-600 text-color-33">Industry-Recognized Certificate</h3>
                    <p className="fs-14 fw-400" style={{ color: '#ACABBD' }}>
                      Earn a certificate valued by top companies.
                    </p>
                  </div>
                </div>
                <div className="cartificate-card h-full">
                  <div className="img-box mb-16">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/job-market-icon.svg`}
                      width={48}
                      height={48}
                      alt="certificat-icon"
                    />
                  </div>
                  <div className="info mb-12">
                    <h3 className="mb-3 fs-16 fw-600 text-color-33">Stand Out in Job Market</h3>
                    <p className="fs-14 fw-400" style={{ color: '#ACABBD' }}>
                      Fortify Your Profile to Increase Credibility
                    </p>
                  </div>
                </div>
                <div className="cartificate-card h-full">
                  <div className="img-box mb-16">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/career-growth-icon.svg`}
                      width={48}
                      height={48}
                      alt="certificat-icon"
                    />
                  </div>
                  <div className="info mb-12">
                    <h3 className="mb-3 fs-16 fw-600 text-color-33">Your Passport to Career Growth</h3>
                    <p className="fs-14 fw-400" style={{ color: '#ACABBD' }}>
                      Access Well-Paying Digital Marketing Positions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="rounded-12 w-full max-w-lg-410 max-w-250 py-lg-20 py-16 px-12 fs-lg-18 fs-16 fw-600 book-demo-btn"
            onClick={() => openScheduleModal('Schedule_Demo')}
          >
            Book Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}

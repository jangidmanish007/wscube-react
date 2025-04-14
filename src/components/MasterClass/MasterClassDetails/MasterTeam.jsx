import Image from 'next/image';
import React from 'react';

export default function MasterTeam() {
  return (
    <>
      <section className="connect-with-team overflow-hidden pt-64 pt-lg-0 pb-lg-0 pb-64">
        <div className="container-main container-w-xl-1202">
          <div className="d-lg-flex align-items-center justify-content-between">
            {/* <div className="d-lg-block d-none w-100 max-w-291 chat-moentors position-relative">
              <Image
                src={process.env.IMG_PATH + `images/master-class/master-class-montors.png`}
                width={291}
                height={116}
                alt="img"
                className="img-fluid position-relative"
                style={{ zIndex: 9 }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="503"
                height="320"
                viewBox="0 0 503 320"
                fill="none"
                className="position-absolute top-0"
                style={{ zIndex: 8, left: '-5.1rem' }}
              >
                <g filter="url(#filter0_f_4414_27952)">
                  <ellipse cx="251.5" cy="160" rx="147.5" ry="100.5" fill="#199EFF" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_4414_27952"
                    x="0"
                    y="-44.5"
                    width="503"
                    height="409"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="52" result="effect1_foregroundBlur_4414_27952" />
                  </filter>
                </defs>
              </svg>
            </div> */}
            {/* <div className="w-100 max-w-xl-544 max-w-lg-444 text-lg-start text-center py-lg-35"> */}
            <div className="w-100 text-lg-start text-center py-lg-35 d-lg-flex justify-content-between align-items-center">
              <div className="text-white mb-lg-0 mb-24">
                <p className="fs-16 lh-24 fw-400 mb-8">Want more information about WsCubeTech Courses?</p>
                <h2 className="fs-28 fw-600 lh-42 mb-lg-0 mb-32">Connect with the team for a chat</h2>
              </div>
              <button
                className="border-w-2 border-color-25 mb-lg-0 bg-color-25 rounded-12
               px-13 h-size-56 outline-none text-color-1 fw-600 fs-16 lh-23 py-12"
              >
                Contact Academic Counselor
              </button>
              {/* <div className="d-lg-none">
                <Image
                  src={process.env.IMG_PATH + `images/master-class/master-class-montors.png`}
                  width={410}
                  height={321}
                  alt="img"
                  className="img-fluid d-lg-none"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

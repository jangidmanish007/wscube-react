import Image from 'next/image';
import React from 'react';

export default function FounderMessage() {
  return (
    <section className="founder-message-about-us py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12 mb-xl-32 mb-20">
            <h1 className="fs-32 fw-600 lh-48 text-color-1 mb-0 text-lg-start text-center">Founder Message</h1>
          </div>
        </div>
        <div className="d-lg-flex grid-gap-xl-64 grid-gap-40">
          <div className="w-full max-w-xl-506 max-w-lg-400 max-w-354 mx-lg-0 mx-auto mb-lg-0 mb-40">
            <div className="img-box position-relative">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/founder-message-k-sir.webp'}
                width={506}
                height={391}
                alt=""
                className="img-fuild rounded-24 border-w-4 w-100 h-auto"
              />
              <div className="position-absolute top-50 start-50 plus-outline-btn cursor-pointer rounded-circle">
                <Image
                  src={process.env.IMG_PATH + `images/about-us/play-dark-icon.svg`}
                  width={60}
                  height={60}
                  alt="banner-img"
                  className="img-fluid rounded-20 w-size-xl-90 w-size-50 h-size-xl-90 h-size-50"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl-600 max-w-lg-600 text-lg-start text-center">
            <div className="right-box position-relative">
              <div className="position-absolute end-0 founder-msg-bg">
                <Image
                  src={process.env.IMG_PATH + 'images/about-us/founder-message-bg-1.svg'}
                  width={206}
                  height={267}
                  alt=""
                  className="img-fuild max-w-xl-206 max-w-170 max-h-267"
                />
              </div>
              <div>
                <div className="d-lg-none d-block mb-28">
                  <span className="d-block fs-25 lh-37 fw-600 text-color-1 mb-2">Kushagra Bhatia</span>
                  <span className="d-block fs-16 fw-400 lh-24 text-color-7">Founder @WsCube Tech</span>
                </div>
                <h3 className="fs-xl-36 fs-28 fw-700 lh-xl-54 lh-42 text-color-1 mb-28">
                  “It’s time for you to future-proof your career!”
                </h3>
                <p className="fs-16 fw-400 lh-24 text-color-7 mb-28 min-h-105">
                  We know that we are influencing the foundations of your future, and we take this responsibility very
                  seriously. With WsCube Tech, I ensure you always get top-class training backed by practical projects
                  and future prospects. Wishing you a successful & future-proof career!
                </p>
                <div className="d-lg-block d-none">
                  <span className="d-block fs-25 lh-37 fw-600 text-color-1 mb-2">Kushagra Bhatia</span>
                  <span className="d-block fs-16 fw-400 lh-24 text-color-7">Founder @ WsCube Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

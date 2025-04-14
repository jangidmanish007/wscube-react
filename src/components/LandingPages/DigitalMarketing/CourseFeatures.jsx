import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Counter from './Counter';

export default function CourseFeatures(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

  return (
    <div className="container-main container-w-xl-1092" id="counterContainer">
      <div className="pt-lg-90 pt-58 pb-lg-116 pb-84">
        <div className="d-xl-flex grid-gap-22 align-items-end">
          <div className="h-full w-full max-w-lg-600 mb-xl-0 mb-28 mx-xl-0 mx-auto">
            <div className="heading-wrapper mb-lg-40 mb-24">
              <h2 className="fs-32 text-color-2 lh-38 fw-500 capitalize mb-17">Glimpse of the Program Features</h2>
              <p className="text-color-36 fs-16 fw-400">Explore Our Comprehensive Program Offerings</p>
            </div>
            <div className="fetures-cards d-grid grid-sm-cols-2 grid-cols-1 grid-gap-22">
              <div className="bg-white rounded-12 px-lg-2 px-12 h-full py-24 position-relative overflow-hidden z-0 feature-card-wrapper">
                <div
                  className="position-absolute top-50 start-50 w-size-196 h-size-196 rounded-circle
                   z-[-1] feature-hover-bg transation-3"
                  style={{ background: '#00AEFF' }}
                ></div>
                <div className="d-flex">
                  <div className="img-box mr-8">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/live-sessions-icon.svg`}
                      width={64}
                      height={64}
                      alt=""
                      className="w-lg-64 w-44"
                    />
                  </div>
                  <div className="content">
                    <h3 className="fs-16 fw-500 text-color-37 mb-2">Live Sessions</h3>
                    <p className="fs-24 fw-600 mb-0 text-color-26">
                      <Counter endValue={'99'} duration={1} stepDuration={100}></Counter>+
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-12 px-lg-2 px-12 h-full py-24 position-relative overflow-hidden z-0 feature-card-wrapper">
                <div
                  className="position-absolute top-50 start-50 w-size-196 h-size-196 rounded-circle
                   z-[-1] feature-hover-bg transation-3"
                  style={{ background: '#FC9C03' }}
                ></div>
                <div className="d-flex">
                  <div className="img-box mr-8">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/career-centric-icon.svg`}
                      width={64}
                      height={64}
                      alt=""
                      className="w-lg-64 w-44"
                    />
                  </div>
                  <div className="content">
                    <h3 className="fs-16 fw-500 text-color-37 mb-2">Career-Centric Modules</h3>
                    <p className="fs-24 fw-600 mb-0 text-color-26">
                      <Counter endValue={'16'} duration={1} stepDuration={120}></Counter>+
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-12 px-lg-2 px-12 h-full py-24 position-relative overflow-hidden z-0 feature-card-wrapper">
                <div
                  className="position-absolute top-50 start-50 w-size-196 h-size-196 rounded-circle
                   z-[-1] feature-hover-bg transation-3"
                  style={{ background: '#35C870' }}
                ></div>
                <div className="d-flex">
                  <div className="img-box mr-8">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/assignments-icon.svg`}
                      width={64}
                      height={64}
                      alt=""
                      className="w-lg-64 w-44"
                    />
                  </div>
                  <div className="content">
                    <h3 className="fs-16 fw-500 text-color-37 mb-2">Projects & Assignments</h3>
                    <p className="fs-24 fw-600 mb-0 text-color-26">
                      <Counter endValue={'14'} duration={1} stepDuration={170}></Counter>+
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-12 px-lg-2 px-12 h-full py-24 position-relative overflow-hidden z-0 feature-card-wrapper">
                <div
                  className="position-absolute top-50 start-50 w-size-196 h-size-196 bg-[#F46D6D] rounded-circle
                   z-[-1] scale-0 opacity-10 feature-hover-bg transation-3"
                  style={{ background: '#F46D6D' }}
                ></div>
                <div className="d-flex">
                  <div className="img-box mr-8">
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/platforms-icon.svg`}
                      width={64}
                      height={64}
                      alt=""
                      className="w-lg-64 w-44"
                    />
                  </div>
                  <div className="content">
                    <h3 className="fs-16 fw-500 text-color-37 mb-2">Tools & Platforms</h3>
                    <p className="fs-24 fw-600 mb-0 text-color-26">
                      <Counter endValue={'40'} duration={1} stepDuration={90}></Counter>+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full max-w-xl-440 max-w-600  mx-xl-0 mx-auto">
            <div className="about-featurs relative">
              <div className="" style={{ marginBottom: '-4px' }}>
                <video width="100%" height="247" autoPlay loop controls className="rounded-12 h-auto" ref={videoRef}>
                  <source
                    src="https://wscubetech-courses-curriculum.s3.ap-south-1.amazonaws.com/Landing+DM+Changes.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

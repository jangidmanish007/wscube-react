import React from 'react';
import Image from 'next/image';
import Counter from './Counter';

export default function MeetTheMentor() {
  const mentoreImages = [
    { image: 'images/landing-page/mentor/mentor-img-1.webp' },
    { image: 'images/landing-page/mentor/mentor-img-2.webp' },
    { image: 'images/landing-page/mentor/mantor-img-3.webp' },
    { image: 'images/landing-page/mentor/mantor-img-4.webp' },
    { image: 'images/landing-page/mentor/mentor-img-5.webp' },
    { image: 'images/landing-page/mentor/mentor-img-6.webp' },
    { image: 'images/landing-page/mentor/mentor-img-7.webp' },
    { image: 'images/landing-page/mentor/mentor-img-8.webp' },
  ];

  return (
    <section className="bg-color-41 py-lg-116 py-88">
      <div className="container-main container-w-xl-1092" id="counterContainer">
        <div className="section-heading text-center mb-60">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Meet the Mentors</h2>
          <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">
            Learn tech concepts from industry leaders who have been there and done that!
          </p>
        </div>
        <div
          className="w-full  py-lg-50 py-40 px-lg-67 px-35
        mentor-main-wrapper common-border-grident"
          style={{
            background: "url('/images/landing-page/background/mentor-bg.webp') no-repeat center center / cover",
          }}
        >
          <div className="mentor-box-wraper d-lg-flex gap-1 position-relative pb-16">
            <div className="max-w-lg-614 w-full pt-lg-32">
              <div className="d-grid grid-lg-cols-3 grid-cols-2 mb-lg-36 mb-16 grid-gap-lg-0 grid-gap-20">
                <div className="card-wrapper">
                  <h3 className="fs-lg-32 fs-22 fw-600 lh-32 text-color-2">
                    <Counter endValue={'24580'} duration={1} stepDuration={10}></Counter>+
                  </h3>
                  <p className="fs-lg-16 fs-14 lh-32 fw-400 text-color-2 mb-0">Learners Trained</p>
                </div>
                <div className="card-wrapper">
                  <h3 className="fs-lg-32 fs-22 fw-600 lh-32 text-color-2">
                    <Counter endValue={'425'} duration={1} stepDuration={40}></Counter>+
                  </h3>
                  <p className="fs-lg-16 fs-14 lh-32 fw-400 text-color-2 mb-0">Masterclasses Delivered</p>
                </div>
              </div>
              <div className="d-grid grid-lg-cols-3 grid-cols-2 mb-lg-36 grid-gap-lg-0 grid-gap-20">
                <div className="card-wrapper">
                  <h3 className="fs-lg-32 fs-22 fw-600 lh-32 text-color-2">
                    <Counter endValue={'7'} duration={1} stepDuration={320}></Counter>+
                  </h3>
                  <p className="fs-lg-16 fs-14 lh-32 fw-400 text-color-2 mb-0"> Years of Experience</p>
                </div>
                <div className="card-wrapper">
                  <h3 className="fs-lg-32 fs-22 fw-600 lh-32 text-color-2">
                    <Counter endValue={'45650'} duration={1} stepDuration={6}></Counter>+
                  </h3>
                  <p className="fs-lg-16 fs-14 lh-32 fw-400 text-color-2 mb-0">hours of Live Mentorship</p>
                </div>
                <div className="card-wrapper">
                  <h3 className="fs-lg-32 fs-22 fw-600 lh-32 text-color-2">
                    <Counter endValue={'28'} duration={1} stepDuration={50}></Counter>+
                  </h3>
                  <p className="fs-lg-16 fs-14 lh-32 fw-400 text-color-2 mb-0">Domain Expertise</p>
                </div>
              </div>
            </div>
            <div className="max-w-307 w-full mx-auto mx-lg-0">
              <Image
                src={`${process.env.LANDING_IMG_PATH}images/landing-page/background/kushagra-bhatia.png`}
                width={307}
                height={388}
                className="h-full mx-auto"
                alt="mentor-img"
              />
            </div>
            <div
              className="d-grid grid-lg-cols-8 grid-cols-4 grid-gap-22 bottom-0 w-full mt-lg-0 landing-mentors"
              style={{ marginTop: '-60px' }}
            >
              {mentoreImages?.map((img, index) => {
                return (
                  <div className="img-box" key={index}>
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}${img?.image}`}
                      width={99}
                      height={99}
                      alt="mentor-img"
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

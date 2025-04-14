import Image from 'next/image';
import React from 'react';

export default function WhyJoinThisMasterClass() {
  const whyJoinMasterData = [
    {
      id: 1,
      heading: 'Interactive Learning',
      subHeading: 'Experience live sessions that make learning fun and engaging with Industry maestros.',
      image: 'images/master-class/Interactive-learning.webp',
    },
    {
      id: 2,
      heading: 'Extra Learning Materials',
      subHeading: ' Access bonus resources to enhance your knowledge and skills even further.',
      image: 'images/master-class/extra-learning-materials.webp',
    },
    {
      id: 3,
      heading: 'Real-World Applications',
      subHeading: `Explore practical topics relevant to today's industry challenges and opportunities.`,
      image: 'images/master-class/real-world-applications.webp',
    },
    {
      id: 4,
      heading: 'Live Quizzes',
      subHeading: 'Test your knowledge with live quizzes to track your progress and deepen your understanding.',
      image: 'images/master-class/live-quizzes.webp',
    },
    {
      id: 5,
      heading: ' Certificate of Participation',
      subHeading: 'At the end of every masterclass, attendees shall be rewarded with the participation certificate.',
      image: 'images/master-class/certificate-of-participation.webp',
    },
  ];

  return (
    <section className="master-why-join pt-xl-0 pt-64">
      <div className="container-main container-w-xl-1202 d-xl-block d-none">
        <div className="d-flex justify-content-end px-10 py-0 position-relative">
          <div className="position-absolute" style={{ inset: '0' }}>
            <div className="why-join-left-section">
              <div className="w-full max-w-xl-568 max-w-350">
                <h2 className="fs-xl-51 fs-32 fw-600 text-color-1 lh-xl-61 lh-44 mb-24">
                  Why Join WsCube Masterclasses?
                </h2>
                <p className="fs-14 lh-21 text-color-7 mb-lg-0">
                  Engage in unique learning opportunities from industry leaders through simple, accessible sessions
                  designed to empower your career. Learn through practical experiences that transform theory into
                  real-world skills in just a few hours! Discover the joy of mastering new tools and concepts that could
                  launch your next career leap!
                </p>
              </div>
            </div>
          </div>
          <ul
            className="d-flex flex-column grid-gap-190 position-relative list-unstyled why-join-card-main-wrapper"
            style={{ gap: '210px' }}
          >
            {whyJoinMasterData?.map((item, index) => (
              <li
                key={index}
                className="bg-white reverse-shadow-6 max-w-429 p-36 rounded-28 position-sticky why-join-card"
                style={{ top: 'calc(50% - 12rem)', minHeight: '322px' }}
              >
                <div className="div">
                  <Image
                    src={`${process.env.LOCAL_IMAGE_PATH}${item?.image}`}
                    width={212}
                    height={137}
                    alt="img"
                    className="img-fluid rounded-16 mb-16"
                  />
                  <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-10">{item?.heading}</h3>
                  <p className="fs-14 lh-21 text-color-34 mb-0">{item?.subHeading}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-xl-none d-block">
        <div className="container-main container-w-xl-1202">
          <div className="w-100 max-w-568 text-xl-start text-center mx-auto">
            <h2 className="fs-lg-51 fs-32 fw-600 text-color-1 lh-lg-61 lh-44 mb-24">Why Join WsCube Masterclasses?</h2>
            <p className="fs-14 lh-21 text-color-7 mb-lg-0">
              Engage in unique learning opportunities from industry leaders through simple, accessible sessions designed
              to empower your career. Learn through practical experiences that transform theory into real-world skills
              in just a few hours! Discover the joy of mastering new tools and concepts that could launch your next
              career leap!
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex d-xl-none grid-gap-lg-20 align-items-center overflow-auto scrollbar-hidden pt-40 pb-64">
        {whyJoinMasterData?.map((item, index) => (
          <div key={index} className="bg-white reverse-shadow-6 max-w-328 min-h-316 min-w-328 p-24 rounded-28 mx-6">
            <Image
              src={`${process.env.LOCAL_IMAGE_PATH}${item?.image}`}
              width={212}
              height={137}
              alt="img"
              className="img-fluid rounded-16 mb-20"
            />
            <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12">{item?.heading}</h3>
            <p className="fs-16 lh-24 text-color-34 mb-0">{item?.subHeading}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

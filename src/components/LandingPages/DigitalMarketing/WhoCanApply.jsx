import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CourseSyllabus from './CourseSyllabus';

export default function WhoCanApply(props) {
  const { openScheduleModal } = props;

  const whoCanApplyData = [
    { id: 1, image: 'images/landing-page/background/students-img.webp', title: 'Student' },
    { id: 2, image: 'images/landing-page/background/professionals-img.webp', title: 'Professional' },
    { id: 3, image: 'images/landing-page/background/brand-marketers-img.webp', title: 'Brand Marketer' },
    { id: 4, image: 'images/landing-page/background/career-switchers-img.webp', title: 'Career switcher' },
    { id: 5, image: 'images/landing-page/background/coaches-img.webp', title: 'Coache' },
    { id: 6, image: 'images/landing-page/background/freelancers-img.webp', title: 'Freelancer' },
    { id: 7, image: 'images/landing-page/background/entrepreneurs-img.webp', title: 'Entrepreneur' },
    { id: 8, image: 'images/landing-page/background/homepreneurs-img.webp', title: 'Homepreneur' },
  ];

  return (
    <section className="py-lg-116 py-88 why-learn-the-program-section position-relative overflow-hidden">
      <div className="container-main container-w-xl-1092 mb-96">
        <div className="section-heading">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-24">This program is for you if you are</h2>
        </div>
        <div className="d-grid grid-xl-cols-6 grid-md-cols-3 grid-cols-2 grid-gap-32">
          {whoCanApplyData?.map((item, index) => {
            return (
              <div
                className="who-apply-card-wapper h-full bg-[#66CFFF1A] p-2 pb-4 rounded-12 hover:bg-[#66CFFF4D] transation-3"
                key={index}
              >
                <div className="img-box mb-12">
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}${item?.image}`}
                    width={134}
                    height={85}
                    className="h-full w-full rounded-8"
                    alt="images"
                  />
                </div>
                <h3 className="fs-14 text-center mb-0 text-color-33 line-clamp-2" title={item?.title}>
                  {item?.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <CourseSyllabus openScheduleModal={openScheduleModal} />
    </section>
  );
}

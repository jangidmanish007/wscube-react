import Image from 'next/image';
import React from 'react';

export default function WscubeTechCampus({ headingData }) {
  const campusData = [
    { id: 1, image: 'images/centers/live-class-icon.svg', text: 'Live Classes' },
    { id: 2, image: 'images/centers/mentorship-icon.svg', text: 'Mentorship Sessions' },
    { id: 3, image: 'images/centers/career-information-icon.svg', text: 'Career Guidance' },
    { id: 4, image: 'images/centers/industry-learder-icon.svg', text: 'Elite Educators & Industry Leaders' },
    { id: 5, image: 'images/centers/campus-certificate-icon.svg', text: 'Campus Certificates' },
    { id: 6, image: 'images/centers/sholarship-icon.svg', text: 'Scholarships and Financial Assistance' },
  ];
  return (
    <section className="py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="section-info text-center text-color-1 mb-64">
          <h2 className="fw-600 fs-32 lh-48 mb-12">{headingData?.heading}</h2>
          <p className="fs-14 lh-21 text-color-7">{headingData?.subHeading}</p>
        </div>
        <div className="d-flex justify-content-center flex-wrap grid-gap-18">
          {campusData?.map((item, index) => {
            return (
              <div className="w-full max-w-180 min-w-180 mb-xl-0 mb-16 campus-card" key={index}>
                <div className="img-box text-center mb-16">
                  <Image src={`${item?.image}`} width={52} height={52} className="img-fluid" />
                </div>
                <div
                  className={`card-padding ${
                    (index == 0 && 'px-56') ||
                    (index == 1 && 'px-30') ||
                    (index == 2 && 'px-49') ||
                    (index == 4 && 'px-40')
                  }`}
                >
                  <h3 className="fs-md-18 fs-16 lh-md-27 lh-24 fw-400 text-color-34 mb-0 text-center">{item?.text}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

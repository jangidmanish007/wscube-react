import Image from 'next/image';
import React from 'react';

export default function EducationComparision() {
  const comparitonPointsData = [
    { id: 1, image: '/images/centers/curriculum-icon.svg', name: 'Curriculum' },
    { id: 2, image: '/images/centers/instructors-icon.svg', name: 'Instructors' },
    { id: 3, image: '/images/centers/assignments-icon.svg', name: 'Assignments' },
    { id: 4, image: '/images/centers/mentorship-icon-new.svg', name: 'Mentorship' },
    { id: 5, image: '/images/centers/internship-icon.svg', name: 'internship' },
    { id: 6, image: '/images/centers/employability-icon.svg', name: 'Employability' },
    { id: 7, image: '/images/centers/graduate-icon.svg', name: 'Graduate' },
  ];
  const traditionalData = [
    { text: 'Outdated' },
    { text: 'No Industry Experience' },
    { text: 'Theoretical written papers' },
    { text: 'No dedicated guidance' },
    { text: 'No support for Internship Opportunities' },
    { text: 'Has to undergo extra training' },
  ];

  const wscubeTechData = [
    { text: 'Real-world, ready for 2028 & beyond' },
    { text: 'Worked at Google, Meta, Microsoft...' },
    { text: '50+ Apps and Products to be Coded' },
    { text: 'Monthly 1-1 sessions with Industry Professionals' },
    { text: 'Compulsory Internship for 1 year' },
    { text: 'Ready to work at Top Tech Companies' },
  ];

  return (
    <section className="bg-color-31 py-lg-80 py-64 d-lg-block d-none">
      <div className="container-main container-w-xl-1202">
        <div className="row mb-lg-64 mb-44">
          <div className="col-12">
            <h3 className="fs-32 fw-400 lh-48 text-color-1 text-center">
              <span className="fw-600 d-inline-block align-middle bottom-heading-bg position-relative">
                WsCube Tech
              </span>
              <span className="mx-8">
                <Image src={'/images/centers/vs-icon.svg'} width={46} height={46} />
              </span>
              <span className="d-inline-block align-middle">Traditional Education</span>
            </h3>
          </div>
        </div>
        <div className="max-w-960 mx-auto w-full">
          <div className="d-flex align-items-start education-comparision-wrapper">
            <div className="w-full max-w-256 mb-12 mt-104">
              <ul className="comparision-points list-unstyled mb-0">
                {comparitonPointsData?.map((item, index) => {
                  return (
                    <li className="min-h-80 rounded-tl-12 rounded-bl-12 pl-32 py-26" key={index}>
                      <div className="d-flex align-items-center">
                        <div className="img-box mr-12">
                          <Image src={`${item?.image}`} width={28} height={28} className="img-fluid" />
                        </div>
                        <h4 className="fs-18 fw-400 lh-27 text-color-2 mb-0">{item?.name}</h4>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-50 bg-white mt-8 py-1 traditional-education-box px-34 rounded-20 bg-white">
              <h3
                className="fs-25 fw-400 lh-37 text-color-1 min-h-93 align-middle d-flex align-items-center mb-0"
                style={{ borderBottom: '1px solid #DBE0EF' }}
              >
                Traditional Education
              </h3>
              <ul className="list-unstyled mb-0">
                {traditionalData?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="min-h-80 d-flex align-items-center"
                      style={{ borderBottom: '1px solid #E6E9F5' }}
                    >
                      {item?.text}
                    </li>
                  );
                })}
                <li className="min-h-80 d-flex align-items-center">
                  <Image src={'/images/centers/not-avaliable-icon.svg'} width={30} height={30} alt="not avaliable" />
                </li>
              </ul>
            </div>
            <div className="w-50 bg-white wscube-tech-box px-12 py-12 rounded-20 bg-white">
              <h3 className="fs-25 fw-700 lh-37 text-color-3 min-h-92 align-middle d-flex align-items-center justify-content-center mb-0 ">
                WsCube Tech
              </h3>
              <ul className="list-unstyled mb-0">
                {wscubeTechData?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="min-h-80 d-flex align-items-center position-relative py-16 px-20 rounded-16 fs-16 fw-400 lh-24 text-color-1"
                    >
                      <div className="w-size-32 h-size-32 min-w-32 rounded-circle circle-bg mr-12"></div>
                      {item?.text}
                    </li>
                  );
                })}
                <li className="min-h-80 d-flex align-items-center py-16 px-20 rounded-16">
                  <Image src={'/images/centers/not-avaliable-icon.svg'} width={30} height={30} alt="not avaliable" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

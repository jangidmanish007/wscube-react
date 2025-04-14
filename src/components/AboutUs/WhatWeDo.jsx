import Image from 'next/image';
import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="d-lg-flex justify-content-between grid-gap-60 align-items-center">
          <div className="w-full max-w-lg-575">
            <div className="right-section text-lg-start text-center">
              <h2 className="fs-32 lh-48 fw-700 mb-lg-52 mb-35">What do we do?</h2>
              <div className="d-lg-none d-block mb-35">
                <div className="left-section position-relative rounded-20 max-h-260 max-w-500 mx-auto">
                  <Image
                    src={process.env.IMG_PATH + 'images/about-us/what-do-we-do-img.webp'}
                    width={535}
                    height={470}
                    alt=""
                    className="img-fluid h-auto rounded-20 w-full object-fit-cover max-h-260"
                  />
                  <div className="img-grident-layer-2 position-absolute top-0 start-0 w-full h-full rounded-20"></div>
                </div>
              </div>
              <ul className="list-unstyled mb-0 max-w-lg-700 max-w-560 mx-auto">
                <li className="mb-lg-44 mb-35">
                  <h3 className="fs-lg-16 fs-18 fw-600 lh-lg-24 lh-28 text-color-1 mb-12">
                    Job-Ready Mentorship Programs
                  </h3>
                  <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                    WsCube Mentorship Programs are designed and developed for Gen-Z career aspirants with absolute focus
                    on job-readiness. The programs aim to equip the learners with industry-ready, hands-on skills and
                    facilitate a confident career kick-off.
                  </p>
                </li>
                <li className="mb-lg-44 mb-35">
                  <h3 className="fs-lg-16 fs-18 fw-600 lh-lg-24 lh-28 text-color-1 mb-12">
                    Project & Scenario based Learning
                  </h3>
                  <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                    WsCube ensures that Aspirants are exposed to real-world Projects & scenario-based problems. Our
                    programs are designed to build problem-solving skills.
                  </p>
                </li>
                <li>
                  <h3 className="fs-lg-16 fs-18 fw-600 lh-lg-24 lh-28 text-color-1 mb-12">Together till Last Mile</h3>
                  <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                  We believe our goal is incomplete until our Aspirants land their dream job role. To enable the same, a dedicated Pre-Placement Program is curated to sharpen essential skills needed to crack the interviews and grab top job opportunities!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-535 d-lg-block d-none">
            <div className="left-section position-relative rounded-20">
              <Image
                src={process.env.IMG_PATH + 'images/about-us/what-do-we-do-img.webp'}
                width={535}
                height={470}
                alt=""
                className="img-fluid h-auto rounded-20"
              />
              <div className="img-grident-layer-2 position-absolute top-0 start-0 w-full h-full rounded-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

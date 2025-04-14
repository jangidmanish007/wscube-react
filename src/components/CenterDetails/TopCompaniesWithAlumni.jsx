'use client';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function TopCompaniesWithAlumni({ headingData, topRecuritersData }) {
  return (
    <section className="pt-lg-80 pb-lg-80 pt-64 pb-34">
      <div className="container-main container-w-xl-1202">
        <div className="section-info text-center text-color-1 mb-64">
          <h2 className="fw-600 fs-32 lh-48 mb-12">{headingData?.heading}</h2>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <Marquee pauseOnHover autoFill speed={45}>
          {topRecuritersData.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer d-flex justify-content-center align-items-center min-h-56 max-h-56 min-w-149 text-center mr-20`}
            >
              <Image
                src={`${process.env.IMG_PATH}${item?.img_color_url}`}
                alt="company-images"
                width={130}
                height={40}
                className="max-h-30 mx-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

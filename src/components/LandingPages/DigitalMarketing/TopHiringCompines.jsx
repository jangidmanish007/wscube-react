import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function TopHiringCompines() {
  const images = [
    'images/landing-page/hiring-compines-logo/nokia-logo.svg',
    'images/landing-page/hiring-compines-logo/ibm-new-logo.svg',
    'images/landing-page/hiring-compines-logo/qualsis-logo-new.svg',
    'images/landing-page/hiring-compines-logo/intel-logo.svg',
    'images/landing-page/hiring-compines-logo/deloitte-logo.svg',
    'images/landing-page/hiring-compines-logo/lenavo-logo.svg',
    'images/landing-page/hiring-compines-logo/sap-logo.svg',
    'images/landing-page/hiring-compines-logo/google-logo-3.svg',
    'images/landing-page/hiring-compines-logo/citi-logo.svg',
    'images/landing-page/hiring-compines-logo/bank-of-amirca-logo.svg',
    'images/landing-page/hiring-compines-logo/wallmart-logo.svg',
    'images/landing-page/hiring-compines-logo/manappuram-logo.svg',
  ];

  return (
    <div className="top-compines-hirirng pb-32">
      <div className="container-main container-w-xl-1092">
        <h2 className="text-center fs-16 fw-500 mb-17 text-gradient-1" style={{ letterSpacing: '-0.5px' }}>
          Top Companies Hiring Digital Marketers in India
        </h2>
      </div>
      <div className="">
        <div className="d-flex align-items-center">
          <Marquee pauseOnHover autoFill speed={25}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`companies-marquie-wrapper transation-2 opacity-50 cursor-pointer d-flex justify-content-center align-items-center py-12 px-14 min-h-59 text-center mr-27`}
              >
                <Image
                  src={process.env.LANDING_IMG_PATH + image}
                  width={128}
                  height={30}
                  alt=""
                  className="w-auto max-w-128 min-h-40 max-h-40 h-auto mx-auto"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

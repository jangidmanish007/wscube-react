'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function TopCompanies() {
  const images = [
    `${process.env.IMG_PATH}images/home-images/company-logo/white-lens-cart-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-ola-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-wallmart-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-duolingo-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-airbnb-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-adobe-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-mamaearth-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-accenture-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-google-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-meta-icon.svg`,
    `${process.env.IMG_PATH}images/home-images/company-logo/white-expedia-icon.svg`,
  ];

  return (
    <div className="top-companies-wrapper">
      <h2 className="fs-lg-18 fs-16 fw-400 lh-27 text-color-2 text-center px-16 mb-20">
        Our learners work at top companies
      </h2>
      <div className="d-flex align-items-center">
        <Marquee pauseOnHover autoFill speed={25}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer d-flex justify-content-center align-items-center min-h-56 text-center mr-20`}
            >
              <Image src={image} alt="company-images" width={149} height={56} className="w-full max-w-149 mx-auto" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

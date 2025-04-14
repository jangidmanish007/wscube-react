import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

export default function FaqBanner({ faqBannerData }) {
  return (
    <div className="container-main container-w-xl-1202">
      <div className="d-lg-flex grid-gap-lg-76 grid-gap-40 align-items-center">
        <div className="w-full max-w-675">
          {faqBannerData?.title && (
            <h1 className="fs-lg-40 fs-25 fw-600 lh-lg-48 lh-37 text-color-1 mb-lg-20 mb-12">{faqBannerData?.title}</h1>
          )}
          {faqBannerData?.tagline && (
            <div className="fs-lg-16 fw-400 lh-lg-24 fs-14 text-color-34">{parse(faqBannerData?.tagline)}</div>
          )}
        </div>
        {faqBannerData?.image && (
          <div className="img-box w-full max-w-421 d-lg-block d-none text-lg-end">
            <Image
              src={`${process.env.IMG_PATH}${faqBannerData?.image}`}
              width={421}
              height={291}
              className="img-fluid max-h-291 w-auto"
              alt="faq-banner"
            />
          </div>
        )}
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

export default function FounderVision() {
  return (
    <section className="inpactful-number-wrapper py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="d-lg-flex justify-content-between grid-gap-xl-80 grid-gap-60 align-items-center">
          <div className="w-full max-w-lg-275 mb-lg-0 mb-44">
            <h2 className="fs-lg-58 fs-32 lh-44 lh-lg-70 fw-400 text-color-2 text-lg-start text-center">
              Hear our <span className="fw-600 text-color-25">founder’s vision </span>
            </h2>
          </div>
          <div className="w-full max-w-683 mx-lg-0 mx-auto">
            <div className="img-box position-relative">
              <Image
                src={`/images/centers/founder-vision-thumbnail.webp`}
                width={683}
                height={421}
                alt="founder-image"
                className="img-fluid rounded-10"
              />
              <div
                className="position-absolute top-50 start-50"
                // onClick={() => handleYoutubeVideoModal(reviewData?.videoUrl)}
              >
                <Image
                  src={`/images/icons/dark-play-icon.svg`}
                  width={80}
                  height={80}
                  className="cursor-pointer plus-outline-btn rounded-circle"
                  alt="play-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

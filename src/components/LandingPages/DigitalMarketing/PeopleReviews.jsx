import Image from 'next/image';
import React, { useState } from 'react';

import { peopleReviewData } from './peopleReviewData';

export default function PeopleReviews(props) {
  const { handleYoutubeVideoModal } = props;
  const [rating, setRating] = useState(4);

  return (
    <section className="bg-color-41 pt-lg-120 pt-84 pb-40">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading text-start mb-lg-60 mb-40">
          <div className="d-lg-flex items-center mb-20">
            <div className="d-flex align-items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index}>
                  {index < rating ? (
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/fill-star.svg`}
                      width={36}
                      height={36}
                      alt="star-icon"
                      className="mr-12 w-size-lg-32 w-size-24"
                    />
                  ) : (
                    <Image
                      src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/half-fill-star.svg`}
                      width={36}
                      height={36}
                      alt="star-icon"
                      className="mr-12 w-size-lg-32 w-size-24"
                    />
                  )}
                </span>
              ))}
            </div>
            <p className="mb-0 fs-lg-28 fs-24 fw-500 text-color-33 align-middle d-flex align-items-center">
              4.9
              <span className="ml-3 fs-lg-18 fs-14 fw-500">(19476 Reviews)</span>
            </p>
          </div>
          <h2 className="text-color-33 fs-lg-28 fs-24 lh-33 fw-500">
            Thousands of learners love our Digital marketing program.
          </h2>
        </div>
        <div className="people-review-main-wrapper">
          <div className="mesonery-wrapper">
            {peopleReviewData?.length > 0 &&
              peopleReviewData?.map((item, index) => {
                if (item.type === 'video') {
                  return (
                    <div
                      key={index}
                      className="video-cards d-inline-block position-relative rounded-12 overflow-hidden w-full mb-32 mesonery-item"
                    >
                      <Image
                        className="h-auto object-cover w-full max-h-[300px]"
                        width={322}
                        height={300}
                        src={process.env.LANDING_IMG_PATH + item.imageSrc}
                        alt=""
                      />
                      <div
                        className="position-absolute bottom-0 h-full w-full"
                        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.26%, #000000 100%)' }}
                      ></div>
                      <div
                        className="position-absolute cursor-pointer rounded-50 plus-outline-btn top-50 start-50"
                        onClick={() => handleYoutubeVideoModal(item.youtubeUrl)}
                      >
                        <Image
                          src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/dark-play-icon.svg`}
                          width={54}
                          height={54}
                          alt="play-icon"
                          className="rounded-circle"
                        />
                      </div>
                      {item.content.title && (
                        <div className="position-absolute w-full" style={{ bottom: '14px', left: '14px' }}>
                          <h3 className="fs-16 fw-500 text-color-33" style={{ marginBottom: '2px' }}>
                            {item.content.title}
                          </h3>
                          <p className="mb-0 fs-14 fw-400" style={{ color: '#CCEFFF' }}>
                            {item.content.subtitle}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                } else if (item.type === 'review') {
                  return (
                    <div
                      key={index}
                      className="rewiew-card-box p-24 rounded-12 bg-color-33 inline-block mb-32 w-full mesonery-item"
                    >
                      <div className="card-content">
                        <p className="fw-400 fs-14 mb-20 text-color-26">{item.content.text}</p>
                        <div className="d-flex align-items-center">
                          <div
                            className="img-box mr-12 w-size-40 h-size-40 rounded-50 fs-18 fw-700 text-uppercase text-color-2"
                            style={{ background: '#7b1fa2' }}
                          >
                            <span className="d-flex align-items-center justify-content-center w-full h-full">
                              {(item.content.user.name && item.content.user.name.charAt(0).toUpperCase()) || '?'}
                            </span>
                          </div>
                          <div className="user-info">
                            <h3 className="fs-16 fw-500 text-color-26" style={{ marginBottom: '2px' }}>
                              {item.content.user.name}
                            </h3>
                            <p className="mb-0 fs-14 fw-400" style={{ color: '#5B5D6B' }}>
                              {item.content.user.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

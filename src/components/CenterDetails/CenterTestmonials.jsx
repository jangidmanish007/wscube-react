import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function CenterTestmonials({ centerTestmonialsData, heading }) {
  return (
    <section className="master-testimonials bg-color-19 py-lg-80 py-64">
      <div className="container-w-full">
        <div className="row">
          <div className="col-12 text-center mb-52">
            <h2 className="fw-600 fs-32 lh-48 text-color-1">
              {(heading && heading) || 'See what learners are saying'}
            </h2>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover autoFill speed={50}>
        {centerTestmonialsData?.map((item, index) => {
          return (
            <div key={index}>
              <div className="master-review rounded-20 p-lg-28 p-24 mx-3 bg-white">
                <div className="min-w-lg-346 min-w-300 max-w-lg-346 max-w-300 min-h-294 rounded-15">
                  <div className="master-review-content h-100 w-100 position-relative">
                    <div className="img-box mb-20">
                      {(item?.reviewee_pic && (
                        <Image
                          src={`${process.env.IMG_PATH}${item?.reviewee_pic}`}
                          width={66}
                          height={67}
                          alt="Icon"
                          className="img-fluid cursor-pointer rounded-15"
                        />
                      )) || (
                        <Image
                          src={`${process.env.IMG_PATH}images/icons/defalut-learner-icon.svg`}
                          width={66}
                          height={67}
                          alt="Icon"
                          className="img-fluid cursor-pointer rounded-15"
                        />
                      )}
                    </div>
                    <div className="">
                      <div className="mb-20">
                        {Array.from({ length: 5 }, (_, index) => (
                          <span key={index} className="text-color-3">
                            {index < item?.rating ? (
                              <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                            ) : (
                              <FontAwesomeIcon icon={faStarHalf} width={36} height={36} className="text-warning me-1" />
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="fs-18 lh-27 fw-400 mb-12 text-color-17 line-clamp-5" title={item?.review}>
                        {item?.review}
                      </p>
                      <h3 className="fs-16 lh-24 fw-600 mb-0">
                        {item?.reviewee_name}
                        <span className="text-color-7 ms-1">
                          {(item?.reviewee_company && item?.reviewee_company) || item?.reviewee_designation}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

import ReviewCount from '@/components/Layouts/Common/ReviewCount';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MasterTestimonials({ eventsTestmonialsData, headingData }) {
  return (
    <>
      <section className="master-testimonials py-lg-80 py-64">
        <div className="container-w-full">
          <div className="row">
            <div className="col-12 text-center mb-52">
              <h2 className="fw-600 fs-32 lh-48 text-color-1">
                {headingData?.title || 'See what learners are saying'}
              </h2>
            </div>
          </div>
        </div>
        <Marquee pauseOnHover autoFill speed={50}>
          {eventsTestmonialsData?.map((item, index) => {
            return (
              <div key={index}>
                <div className="master-review rounded-20 p-lg-28 p-24 mx-3">
                  <div className="min-w-lg-346 min-w-330 max-w-lg-346 max-w-330 min-h-294 rounded-15">
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
                          <ReviewCount reviewCount={item?.rating} iconColor="blue" />
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
          {/* <div className="master-review rounded-20 p-28 mx-3">
                    <div
                      className="min-w-370 max-w-370 min-h-294 max-w-294 rounded-15 overflow-hidden review-bg"
                      style={{ backgroundImage: 'url(/images/master-class/master-learner.webp)' }}
                    >
                      <div className="master-review-content h-100 w-100 p-24 min-h-294 d-flex align-items-end position-relative">
                        <Image
                          src={
                            (index == 3 && '/images/master-class/play-circle.svg') ||
                            '/images/master-class/chat-icon.svg'
                          }
                          width={54}
                          height={54}
                          alt="Icon"
                          className="img-fluid position-absolute cursor-pointer"
                        />
                        <div className="text-white">
                          <h3 className="fs-16 lh-24 fw-600 mb-6">Randall Aguirre</h3>
                          <p className="fs-14 lh-21 fw-400 mb-6">Digital marketer @ walmart</p>
                          <span>
                            <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                            <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                            <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                            <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                            <FontAwesomeIcon icon={faStar} width={18} className="me-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
        </Marquee>
      </section>
    </>
  );
}

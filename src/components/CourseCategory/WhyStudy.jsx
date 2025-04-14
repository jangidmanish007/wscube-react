/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';

export default function WhyStudy({ headingData, whyStudyData, testimonialData }) {
  const settings = {
    arrows: false,
    customPaging: function (i) {
      return (
        <a>
          {/* <div className="crs-st-img rounded-circle w-size-48 h-size-48 d-flex align-items-center justify-content-center position-relative">
            <img
              src={
                homeDetailsData?.testimonials[i].reviewee_pic
                  ? homeDetailsData?.testimonials[i].reviewee_pic
                  : `/images/home-images/user-icon.png`
              }
              className="rounded-circle cursor-pointer img-fluid"
              alt={`Slide ${i + 1}`}
            />
          </div> */}
        </a>
      );
    },
    dots: true,
    autoplay: true,
    dotsClass: 'slick-dots slick-thumb custom-review-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-lg-80 py-64 why-study-section">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="row">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
              className="col-12 text-center mb-lg-58 mb-30"
            >
              <h2 className="fs-32 fw-700 lh-48 text-white mb-16">
                {whyStudyData?.CategoryMasterContent?.page_why_study_title}
              </h2>
              <p className="fs-14 fw-400 lh-21 mb-0 text-white">
                {whyStudyData?.CategoryMasterContent?.page_why_study_tagline}
              </p>
            </motion.div>
            <div className="col-12 d-xl-flex align-items-center justify-content-between">
              <div className="w-100 max-w-2xl-677 max-w-520 text-center mx-auto mx-xl-0">
                <h3 className="fw-600 fs-16 lh-24 text-white">High-Growth Sector</h3>
                <p className="fs-16 lh-24 color-l-white mb-lg-52 mb-30">
                  Experience ultra-fast growth in career & salary owing to the sector’s high demand.
                </p>
                {(whyStudyData?.chart_img_url && (
                  <Image
                    src={`${process.env.IMG_PATH}${whyStudyData?.chart_img_url}`}
                    width={677}
                    height={392}
                    alt="graph"
                    className="img-fluid"
                  />
                )) || (
                  <Image
                    src={`/images/categories/dm-sal-chart.svg`}
                    width={677}
                    height={392}
                    alt="graph"
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="w-100 max-w-471 text-center why-study-content mx-auto mx-xl-0 mt-lg-0 mt-44">
                <div>
                  <div className="people-review-wrapper">
                    <div className="max-w-478 mx-auto">
                      <Slider {...settings}>
                        {testimonialData.map((slide, index) => (
                          <div key={index} className="slide">
                            <div className="text-center">
                              <Image
                                src={`${process.env.IMG_PATH}images/categories/white-quote.svg`}
                                width={44}
                                height={44}
                                alt="quote"
                                className="img-fluid mb-lg-16 mb-10 mx-auto"
                              />
                              <p className="fs-20 lh-30 mb-lg-16 mb-10 text-white line-clamp-5"> {slide.review}</p>
                              <span className="fs-16 fw-700 color-l-white d-block">{slide.reviewee_name}</span>
                              {/* <span className="fs-14 fw-400 color-l-white d-block">{slide.position}</span> */}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="text-white mt-52">
                  <h3 className="fw-600 fs-16 lh-24 text-white">
                    {whyStudyData?.CategoryMasterContent?.page_why_study_sub_title_two}
                  </h3>
                  <p className="fs-16 lh-24 m-0 change-content-text">
                    {whyStudyData?.CategoryMasterContent?.page_why_study_sub_tagline_two}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

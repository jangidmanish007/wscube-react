/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';
import { numberFormat } from '@/_helper/Common';

export default function CategoryJobs({ topOpeningsData, targetsRolesData, topRecruitersData, headingData }) {
  const recruiters = [
    'images/categories/meta.svg',
    'images/categories/google.svg',
    'images/categories/microsoft.svg',
    'images/categories/ibm.svg',
    'images/categories/uber.svg',
    'images/categories/amazon.svg',
    'images/categories/walmart.svg',
    'images/categories/verizon.svg',
    'images/categories/youtube.svg',
    'images/categories/tata.svg',
    'images/categories/vodafone.svg',
    'images/categories/samsung.svg',
    'images/categories/accenture.svg',
    'images/categories/fedex.svg',
    'images/categories/tiktok.svg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: false,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="pt-80 pb-80 pb-lg-110 cat-jobs-section">
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="row">
              <div className="col-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                  className="text-center col-12"
                >
                  <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-lg-64 mb-40">
                    {headingData?.title || 'Be the Bedrock of the Company!'}
                  </h2>
                </motion.div>

                <div className="text-center job-target-box rounded-20 pt-lg-40 pb-lg-20 pt-40 pb-20 overflow-hidden w-100">
                  {targetsRolesData?.length > 0 && (
                    <>
                      <h3 className="text-white fs-20 fw-600 mb-24">Job Target Roles</h3>
                      <div className="mb-20">
                        <Marquee pauseOnHover autoFill speed={25}>
                          {targetsRolesData?.map((items, index) => {
                            return (
                              <div
                                key={index}
                                className="mx-1 bg-white rounded-40 px-20 py-lg-16 py-12 text-color-1 fs-16 lh-24"
                              >
                                <span className="fw-700 pe-2">{items?.name}</span>
                                {items?.salary}
                              </div>
                            );
                          })}
                        </Marquee>
                      </div>
                      <div className="mb-20">
                        <Marquee pauseOnHover autoFill speed={25} direction={'right'}>
                          {targetsRolesData?.map((items, index) => {
                            return (
                              <div
                                key={index}
                                className="mx-1 bg-white rounded-40 px-20 py-16 text-color-1 fs-16 lh-24 user-select-none"
                              >
                                <span className="fw-700 pe-2">{items?.name}</span> {items?.salary}
                              </div>
                            );
                          })}
                        </Marquee>
                      </div>
                    </>
                  )}
                  {topRecruitersData?.length > 0 && (
                    <div className="mt-72">
                      <h3 className="text-white fs-20 fw-600 mb-24">Top Recruiters</h3>
                      <div className="d-lg-flex d-none flex-wrap justify-content-center align-items-center px-8">
                        {topRecruitersData.map((image, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-8 h-size-47 d-flex align-items-center justify-content-center px-3 mx-6 mb-20"
                          >
                            <motion.img
                              src={`${process.env.IMG_PATH}${image?.img_color_url}`}
                              height={19}
                              alt="brand"
                              className="img-fluid"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="d-lg-none">
                        <Marquee pauseOnHover autoFill speed={50}>
                          {topRecruitersData.map((image, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-8 h-size-47 d-flex align-items-center justify-content-center px-3 mx-6 mb-20"
                            >
                              <motion.img
                                src={`${process.env.IMG_PATH}${image?.img_color_url}`}
                                height={19}
                                alt="brand"
                                className="img-fluid"
                              />
                            </div>
                          ))}
                        </Marquee>
                        <Marquee pauseOnHover autoFill speed={50} direction={'right'}>
                          {topRecruitersData.map((image, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-8 h-size-47 d-flex align-items-center justify-content-center px-3 mx-6 mb-20"
                            >
                              <motion.img
                                src={`${process.env.IMG_PATH}${image?.img_color_url}`}
                                height={19}
                                alt="brand"
                                className="img-fluid"
                              />
                            </div>
                          ))}
                        </Marquee>
                      </div>
                    </div>
                  )}
                </div>
                {/* {topOpeningsData?.length > 0 && (
                  <div className="mt-30 mt-lg-64">
                    <h3 className="text-center text-color-1 fs-20 fw-600 mb-lg-28 mb-16">Current Job Openings</h3>
                    <div className="curr-job-slider slider-with-dots">
                      <Slider {...settings}>
                        {topOpeningsData.map((jobs, index) => (
                          <div key={index} className="px-lg-20 px-12">
                            <div className="min-h-165 min-w-236 border-w-2 border-color-1 rounded-12 bg-white overflow-hidden">
                              <div className="p-lg-20 p-18 curr-job-logo">
                                {(jobs?.company_img_url && (
                                  <motion.img
                                    src={`${process.env.IMG_PATH}${jobs?.company_img_url}`}
                                    height={24}
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                )) || (
                                  <motion.img
                                    src={`${process.env.IMG_PATH}images/categories/linkedin-logo.svg`}
                                    height={24}
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                )}
                              </div>
                              <div className="p-lg-20 p-18">
                                <p className="mb-2 fs-16 lh-24 text-color-17">
                                  Openings: {numberFormat(jobs?.company_openings)}
                                </p>
                                <a
                                  href="https://www.linkedin.com/"
                                  target="blank"
                                  className="text-decoration-none fs-lg-14 fs-12 lh-21 text-color-3"
                                >
                                  Explore Now
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

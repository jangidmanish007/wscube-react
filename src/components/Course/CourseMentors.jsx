import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { animationFromLeft } from '@/_utils/Animation';
import Marquee from 'react-fast-marquee';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';

export default function MeetTheMentor({ heading, subHeading, mentors, courseSlug, details }) {
  const dataCourseSlug = details?.page_type == 2;

  const slidesToShow = (dataCourseSlug && 3) || 4;
  const isEnoughItems = mentors.length >= slidesToShow;

  const settings = {
    dots: true,
    rows: (mentors?.length >= 8 && 2) || 1,
    infinite: isEnoughItems,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipeToSlide: mentors.length >= 4 && true,
    draggable: (mentors.length >= 4 && true) || false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          rows: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          slidesToShow: 2,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: isEnoughItems,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: (mentors?.length >= 5 && true) || false,
    draggable: (mentors?.length >= 5 && true) || false,
    swipeToSlide: (mentors?.length >= 5 && true) || false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={`pt-lg-80 pb-lg-100 py-64 ${(dataCourseSlug && 'bg-white') || 'bg-color-19'}`}>
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <motion.div
            initial={animationFromLeft.initial}
            whileInView={animationFromLeft.whileInView}
            transition={animationFromLeft.transition}
            viewport={{ once: true }}
            className={`section-info text-color-1 mb-lg-52 mb-40 ${
              (dataCourseSlug && 'text-center') || 'text-lg-start text-center'
            } `}
          >
            <h2 className="fs-32 fw-600 lh-48 mb-16">{heading || 'Meet Your Mentors'}</h2>
            <p className="fs-14 fw-400 lh-21 text-color-7">
              {subHeading || 'Learn directly from the experts & industry stalwarts.'}
            </p>
          </motion.div>
          <div className="row m-0">
            <div className="col-12 p-0">
              {(dataCourseSlug && (
                <div className="course-mentors-list custom-arrows product-companies-arrow pt-lg-0 pt-3 mx-auto">
                  <Slider {...settings1} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                    {mentors?.map((items, index) => {
                      return (
                        <div key={index}>
                          <div className="text-center max-w-lg-200 max-w-150 min-w-lg-200 min-w-150 mx-10 mentore-box-wrapper">
                            <div className="rounded-8 reverse-shadow-4 max-w-lg-200 max-w-150 min-w-lg-200 min-w-150 border-w border-color-1 position-relative meet-mentor-card mb-lg-20 mb-16">
                              {items?.profile_pic && (
                                <Image
                                  src={`${process.env.IMG_PATH}${items?.profile_pic}`}
                                  width={200}
                                  height={200}
                                  alt="Mentore"
                                  className="img-fluid rounded-8 mentor-img"
                                />
                              )}
                            </div>
                            <div className="content text-center">
                              <h3 className="fs-lg-20 fs-16 fw-600 text-color-1 lh-lg-30 lh-24 mb-1">
                                {items?.mentor_name}
                              </h3>
                              <p className="fs-lg-16 fs-14 lh-lg-24 lh-21 text-color-10 mb-0">
                                {items?.designation_text}
                              </p>
                              <div className="img-box d-flex align-items-center min-h-80 justify-content-center">
                                <Image
                                  src={`${process.env.IMG_PATH}${items?.organization_img_url}`}
                                  width={90}
                                  height={80}
                                  alt="organization-image"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                  {/* <Marquee pauseOnHover autoFill speed={50}>
                    {mentors?.map((items, index) => (
                      <div className="text-center max-w-200 min-w-200 mx-20 mentore-box-wrapper" key={index}>
                        <div className="rounded-8 reverse-shadow-4 border-w border-color-1 position-relative meet-mentor-card mb-lg-20 mb-16">
                          {items?.profile_pic && (
                            <Image
                              src={`${process.env.IMG_PATH}${items?.profile_pic}`}
                              width={200}
                              height={200}
                              alt="Mentore"
                              className="img-fluid rounded-8 mentor-img"
                            />
                          )}
                        </div>
                        <div className="content text-center">
                          <h3 className="fs-lg-20 fs-16 fw-600 text-color-1 lh-lg-30 lh-24 mb-1">
                            {items?.mentor_name}
                          </h3>
                          <p className="fs-lg-16 fs-14 lh-lg-24 lh-21 text-color-10 mb-0">{items?.designation_text}</p>
                          <div className="img-box d-flex align-items-center min-h-80 justify-content-center">
                            <Image
                              src={`${process.env.IMG_PATH}${items?.organization_img_url}`}
                              width={90}
                              height={80}
                              alt="organization-image"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Marquee> */}
                </div>
              )) || (
                <div className="d-lg-flex align-items-center justify-content-between grid-gap-xl-31 grid-gap-40">
                  <div className="mentor-left-side w-full max-w-xl-348 max-w-lg-310 pt-xl-78 pt-30 px-xl-40 px-10  mx-lg-0 mx-auto mb-lg-0 mb-40">
                    <motion.div
                      className="img-box w-size-xl-267 w-size-267 max-w-xl-267 max-w-267 min-h-xl-265 min-h-lg-267
                     max-h-xl-267 max-h-lg-267 position-relative img-fluid
                 border-w-4 border-color-2 rounded-circle bg-color-3 reverse-shadow-4 mb-lg-28 mb-20 mx-lg-0 mx-auto"
                      initial={{ rotate: -5, opacity: 0, scale: 1.1 }}
                      whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 0, duration: 0.25, type: 'tween' }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={`${process.env.IMG_PATH}images/courses-details/k-sir-img.webp`}
                        width={265}
                        height={423}
                        alt=""
                        className="position-absolute bottom-0 img-fluid"
                      />
                    </motion.div>
                    <div className="text-center">
                      <h3 className="fs-22 lh-33 fw-600 text-color-1 mb-8">Kushagra Bhatia</h3>
                      <span className=" fs-14 fw-400 lh-21 text-color-10">Founder, WsCube Tech</span>
                    </div>
                  </div>
                  <div className="mentor-right-side w-full max-w-xl-791 max-w-lg-600">
                    <div className="col-12 p-0">
                      <div className="slider-with-dots">
                        <Slider {...settings}>
                          {mentors?.map((mentor, index) => {
                            return (
                              <div className="mb-34" key={index}>
                                <div className="border-0 bg-transparent">
                                  <div className="p-0">
                                    <div
                                      className="img-box mb-lg-22 mb-20 border-w border-color-1 rounded-circle h-full d-flex align-items-center justify-content-center
                                     reverse-shadow-4 cursor-pointer mx-auto w-size-lg-132 h-size-lg-132 w-size-112 h-size-112"
                                    >
                                      <Image
                                        src={`${process.env.IMG_PATH}${mentor?.profile_pic}`}
                                        width={132}
                                        height={132}
                                        className="img-fluid rounded-circle"
                                        alt="mentor-img"
                                      />
                                    </div>
                                    <div className="mentor-info text-center">
                                      <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-8">{mentor?.mentor_name}</h3>
                                      {/* <p className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-18 text-color-7 mb-0">
                                      {mentor?.designation}, {mentor?.experience} Yrs of Exp.
                                    </p> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

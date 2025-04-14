'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import { formatNumberCount, numberFormat } from '@/_helper/Common';
import Link from 'next/link';
import ReviewCount from '../Layouts/Common/ReviewCount';
import HompageLead from '../HomePage/HompageLead';
import { LottieAnimation } from '@/_services/lottieAnimations';

export default function ReguralCourses({ headingData, regularCoursesData, categoryDetailsData }) {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');
  const [currUrl, setCurrUrl] = useState('');
  const [crmCrsId, setCrmCrsId] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const settings = {
    dots: (regularCoursesData?.length > 1 && true) || false,
    infinite: (regularCoursesData?.length > 1 && true) || false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    swipeToSlide: true,
    // touchMove: (categoryAllCourses?.length > 1 && true) || false,
  };

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'exploreCrs'}
        leadNote={'Download Curriculum - Category Page - Regular courses'}
        currUrl={currUrl}
        crmCrsId={crmCrsId}
        leadHeading={leadHeading}
        courseSlug={courseSlug}
        setCourseSlug={setCourseSlug}
      />
      <section className="py-80 regular-course-section home-explore-courses discover-path-section">
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="row">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                className="text-center col-12"
              >
                <h2 className="fs-32 fw-700 lh-48 text-color-1 mb-12">{headingData?.title}</h2>
                <p className="fs-14 fw-400 lh-21 mb-40 text-color-7">{headingData?.tagline}</p>
              </motion.div>
              <div className="col-12">
                {(categoryDetailsData?.categoryData?.course_card_type == 'grid' && (
                  <div className="row">
                    {regularCoursesData?.map((course, index) => {
                      return (
                        <div className="col-xl-4 col-md-6 mb-lg-20 mb-16" key={index}>
                          <div className="custom-card upcoming-class-card rounded-20 border-w-2 border-color-1 h-100">
                            <div className="min-h-190 w-100 overflow-hidden rounded-tl-20 rounded-tr-20 img-box position-relative">
                              <Link href={`/${course?.slug}`}>
                                {(course?.img_json_url && <LottieAnimation url={course?.img_json_url} />) || (
                                  <Image
                                    src={'/images/detault-course-img.svg'}
                                    width={444}
                                    height={396}
                                    alt="Image"
                                    className="img-fluid"
                                  />
                                )}
                              </Link>
                              {/* <div className="position-absolute top-0 end-0 mt-12 mr-12">
                                {(course?.course_mode == 'Offline' && (
                                  <></>
                                  // <span className="self-paced-badge fs-12 fw-400 lh-18 text-color-26 py-1 px-8 rounded-1">
                                  //   Self-Paced Classes
                                  // </span>
                                )) || (
                                  <span className="live-class-badge fs-12 fw-400 lh-18 text-color-26 py-1 px-8 rounded-1">
                                    Live Classes
                                  </span>
                                )}
                              </div> */}
                            </div>
                            <div className="custom-card-body p-lg-20 p-18  pb-0">
                              <Link href={`/${course?.slug}`}>
                                <h3 className="fw-600 fs-16 text-color-1 lh-24 mb-8 courser-pointer">
                                  {course?.course_name}
                                </h3>
                              </Link>
                              <div className="d-flex align-items-center mb-20">
                                <span className="fs-lg-14 fs-12 text-color-1 lh-21">{course?.course_review}</span>
                                <ReviewCount reviewCount={course?.course_review} />
                                <span className="fs-lg-14 fs-12 text-color-28 lh-21">
                                  ({numberFormat(course?.course_review_count)})
                                </span>
                              </div>
                              <ul className="p-0 list-unstyled mb-20">
                                {course?.course_live_session && (
                                  <li className="mb-2 fs-14 lh-21 text-color-10">
                                    <Image
                                      src={process.env.IMG_PATH + 'images/icons/mentorship-icon.svg'}
                                      alt="icon"
                                      className="img-fluid"
                                      width={20}
                                      height={20}
                                    />
                                    <span className="ps-2">{course?.course_live_session} Live Sessions</span>
                                  </li>
                                )}
                                {(course?.course_duration || course?.duration_unit) && (
                                  <li className="mb-24 fs-14 text-color-10">
                                    <Image
                                      src={process.env.IMG_PATH + 'images/icons/clock-outfill-icon.svg'}
                                      alt="icon"
                                      className="img-fluid"
                                      width={20}
                                      height={20}
                                    />
                                    <span className="ps-2">
                                      {course?.course_duration} {course?.duration_unit}
                                    </span>
                                  </li>
                                )}
                              </ul>
                            </div>
                            <div className="new-card-footer p-lg-20 pt-0 p-16">
                              <div className="d-flex align-items-center justify-content-between">
                                {(course?.course_brochure && (
                                  <>
                                    <button
                                      onClick={() => {
                                        setCurrUrl(process.env.IMG_PATH + course?.course_brochure);
                                        setCrmCrsId(course?.crm_lead_course_id);
                                        setShowLeadModal(true);
                                        setLeadHeading('View Curriculum');
                                        setCourseSlug(course?.slug);
                                      }}
                                      className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 min-h-40 px-lg-10 w-50"
                                    >
                                      View Curriculum
                                    </button>
                                    <span className="px-10"></span>
                                  </>
                                )) ||
                                  ''}
                                <Link href={course?.slug} className="w-50">
                                  <button className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20 w-100">
                                    Learn More
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )) || (
                  <div className="slider-with-dots mb-40">
                    <Slider {...settings}>
                      {regularCoursesData?.map((course, index) => {
                        const tagsArray = course?.course_tags && course?.course_tags?.split(', ');
                        return (
                          <div className="px-1" key={index}>
                            <motion.div
                              className={`bg-white border-w-2 reverse-shadow-4 rounded-24 p-16 p-lg-40 d-lg-flex explore-crs-card
                   position-relative align-items-center mb-10 min-h-455`}
                            >
                              {/* <div className="fs-14 fw-600 text-white reverse-shadow-4 readiness-program position-absolute end-0 px-20 d-flex align-items-center">
                            Career Readiness Program
                          </div> */}
                              <div className="w-100 min-w-lg-300 max-w-lg-450 max-h-389 mr-lg-32 position-relative overflow-hidden rounded-20">
                                <motion.div className="w-100 h-100 rounded-20">
                                  {(course?.img_json_url && <LottieAnimation url={course?.img_json_url} />) || (
                                    <Image
                                      src={'/images/detault-course-img.svg'}
                                      width={444}
                                      height={396}
                                      alt="Image"
                                      className="img-fluid"
                                    />
                                  )}
                                </motion.div>
                              </div>
                              <div className="explore-crs-content mt-20 mt-lg-0">
                                <h3 className="fs-20 fw-600 text-color-1  mb-16">{course?.course_name}</h3>
                                {course?.course_short_description && (
                                  <div className="fs-14 lh-21 text-color-7 mb-16">
                                    {parse(course?.course_short_description)}
                                  </div>
                                )}
                                <div className="d-flex align-items-center mb-lg-24 mb-16 exp-ratings">
                                  <span className="fs-14 text-color-1 lh-21">{course?.course_review}</span>
                                  <ReviewCount reviewCount={course?.course_review} />
                                  <span className="fs-14 text-color-28 lh-21">
                                    ({numberFormat(course.course_review_count)})
                                  </span>
                                </div>
                                {/* <div className="d-lg-none d-flex align-items-center mb-16">
                                <div className="d-flex align-items-center ms-lg-3 enrolled-users max-w-100">
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                </div>
                                <div className="fs-14 text-color-16 text-nowrap">
                                  {formatNumberCount(course?.course_total_learners)}{' '}
                                  <span className="text-color-15 ms-1">Enrolled</span>
                                </div>
                              </div> */}
                                {tagsArray?.length > 0 && (
                                  <div className="d-flex align-items-center flex-wrap mb-lg-24 mb-16 exp-roles">
                                    <span className="fs-14 text-color-10 pe-2 mb-2">Targeted Job Role:</span>
                                    {tagsArray?.map((tag, tagKey) => {
                                      return (
                                        <p
                                          className="fs-14 text-color-7 mb-2 me-2 rounded-16 border-w border-color-1 py-1 px-2 me-2"
                                          key={tagKey}
                                        >
                                          {tag}
                                        </p>
                                      );
                                    })}
                                  </div>
                                )}
                                <div className="d-flex align-items-center">
                                  <div className="exp-crs-duration px-12 py-8 border-w border-color-1 reverse-shadow-2 rounded-40 d-flex align-items-center">
                                    <div className="min-w-190 d-flex me-lg-0 me-3 align-items-center w-50">
                                      <div className="bg-color-29 w-size-44 rounded-circle me-lg-3 me-2 h-size-44 d-flex align-items-center justify-content-center">
                                        <Image
                                          src={process.env.IMG_PATH + 'images/icons/green-calendar-icon.svg'}
                                          alt="icon"
                                          className="img-fluid"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      {(course?.course_duration || course?.duration_unit) && (
                                        <div>
                                          <p className="fs-16 mb-lg-1 mb-0 text-color-10">Duration</p>
                                          <span className="fs-16 fw-600 text-color-17">
                                            {course?.course_duration} {course?.duration_unit}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    <div className="min-w-190 d-flex align-items-center w-50">
                                      <div className="bg-color-29 w-size-44 rounded-circle me-lg-3 me-2 h-size-44 d-flex align-items-center justify-content-center">
                                        <Image
                                          src={process.env.IMG_PATH + 'images/icons/salary-icon.svg'}
                                          alt="icon"
                                          className="img-fluid"
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      {course?.course_live_session && (
                                        <div>
                                          <p className="fs-16 mb-lg-1 mb-0 text-color-10">Live Sessions</p>
                                          <span className="fs-16 fw-600 text-color-17">
                                            {course?.course_live_session}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {/* <div className="d-lg-flex d-none align-items-center ms-lg-3 enrolled-users max-w-100">
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                  <div
                                    className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
 justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                                  >
                                    <Image
                                      src={process.env.IMG_PATH + 'images/review-user.png'}
                                      className="img-fluid"
                                      alt="Image"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                </div>
                                <div className="fs-14 d-lg-flex d-none text-color-16 text-nowrap">
                                  {formatNumberCount(course?.course_total_learners)}{' '}
                                  <span className="text-color-15 ms-1">Enrolled</span>
                                </div> */}
                                </div>

                                <div className="d-flex align-items-center mt-4">
                                  {(course?.course_brochure && (
                                    <motion.button
                                      initial={{ scale: 1 }}
                                      whileTap={{ scale: 0.7 }}
                                      transition={{ duration: 0.3 }}
                                      onClick={() => {
                                        // if (course?.slug === 'data-analytics-course') {
                                        //   window.open(process.env.IMG_PATH + course?.course_brochure);
                                        // } else {
                                        setCurrUrl(process.env.IMG_PATH + course?.course_brochure);
                                        setCrmCrsId(course?.crm_lead_course_id);
                                        setShowLeadModal(true);
                                        setLeadHeading('Download Curriculum');
                                        setCourseSlug(course?.slug);
                                        // }
                                      }}
                                      className="outline-none fs-14 hover-shadow-2 w-100 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 px-22 mr-lg-12 mr-8"
                                    >
                                      Download Curriculum
                                    </motion.button>
                                  )) ||
                                    ''}
                                  <Link href={course?.slug} className="d-block w-100">
                                    <motion.button
                                      initial={{ scale: 1 }}
                                      whileTap={{ scale: 0.7 }}
                                      transition={{ duration: 0.3 }}
                                      className="outline-none fs-14 w-100 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-40 px-22 ml-lg-12 ml-8"
                                    >
                                      Learn more
                                    </motion.button>
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                )}
              </div>
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

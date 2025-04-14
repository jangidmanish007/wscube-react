'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';
import groovyWalkAnimation from './03.json';
import parse from 'html-react-parser';
import { formatNumberCount, numberFormat } from '@/_helper/Common';
import Link from 'next/link';
import ReviewCount from '../Layouts/Common/ReviewCount';
import HompageLead from './HompageLead';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { LottieAnimation } from '@/_services/lottieAnimations';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export default function ExploreCourseCard({ categoryAllCourses, selectedCategory }) {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');

  const [currUrl, setCurrUrl] = useState('');
  const [crmCrsId, setCrmCrsId] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  const settings = {
    dots: categoryAllCourses?.length > 1,
    infinite: categoryAllCourses?.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: categoryAllCourses?.length > 1,
    swipeToSlide: true,
    touchMove: (categoryAllCourses?.length > 1 && true) || false,
  };

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'exploreCrs'}
        leadNote={'Download Curriculum - Homepage - Mentorship Programs'}
        currUrl={currUrl}
        crmCrsId={crmCrsId}
        leadHeading={leadHeading}
        categorySlug={selectedCategory}
        setCategorySlug={setCategorySlug}
        setCourseSlug={setCourseSlug}
        courseSlug={courseSlug}
      />
      <div className="slider-with-dots custom-arrows custom-arrow-postion">
        <Slider {...settings} {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
          {categoryAllCourses?.map((item, index) => {
            const tagsArray = item?.course_tags && item?.course_tags?.split(', ');
            return (
              <div className="pr-2 pl-2" key={index}>
                <motion.div
                  className={`bg-white border-w-2 rounded-24  p-16 p-lg-40
          d-lg-flex explore-crs-card min-h-xl-455 min-h-400 mb-lg-10 mb-20 mr-4 reverse-shadow-4  position-relative`}
                >
                  <div className="w-100 max-w-lg-450 max-h-372 mr-lg-32 position-relative overflow-hidden rounded-20">
                    <motion.div className="w-100 h-100 rounded-20">
                      <Link href={item?.slug}>
                        {(item?.img_json_url && (
                          <LottieAnimation url={item?.img_json_url} />
                          // <Image
                          //   src={`${process.env.IMG_PATH}${item?.course_img_url}`}
                          //   alt="course image"
                          //   className="rounded-20 img-fluid w-100"
                          //   style={{ objectFit: 'cover' }}
                          //   width={450}
                          //   height={374}
                          // />
                        )) || (
                          <Image
                            src={'/images/detault-course-img.svg'}
                            width={444}
                            height={396}
                            alt="Image"
                            className="img-fluid"
                          />
                        )}
                      </Link>
                    </motion.div>
                  </div>
                  <div className="explore-crs-content mt-20 mt-lg-0 w-full max-w-xl-631 max-w-lg-450">
                    {/* <div className="fs-14 fw-600 text-white reverse-shadow-4 readiness-program position-absolute end-0 px-20 d-none d-lg-flex align-items-center">
                    Career Readiness Program
                  </div> */}
                    <Link href={item?.slug}>
                      <h3 className="fs-20 lh-30 fw-600 text-color-1 mb-16">{item?.course_name}</h3>
                    </Link>
                    {item?.course_short_description && (
                      <div className="fs-14 lh-21 text-color-7 mb-16">{parse(item?.course_short_description)}</div>
                    )}
                    <div className="d-flex align-items-center mb-lg-24 mb-16 exp-ratings">
                      <span className="fs-14 text-color-1 lh-21">{item?.course_review}</span>
                      <ReviewCount reviewCount={item?.course_review} />
                      <span className="fs-14 text-color-28 lh-21">({numberFormat(item.course_review_count)})</span>
                    </div>
                    {/* <div className="d-xl-none d-flex align-items-center mb-16">
                      <div className="d-flex align-items-center ms-xl-3 enrolled-users max-w-100">
                        <div
                          className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
          justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                        >
                          <Image
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
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
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
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
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
                            className="img-fluid"
                            alt="Image"
                            width={36}
                            height={36}
                          />
                        </div>
                      </div>
                      <div className="fs-14 text-color-16 text-nowrap">
                        {formatNumberCount(item?.course_total_learners)} <span className="text-color-15">Enrolled</span>
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
                        <div className="min-w-190 w-50 d-flex me-lg-0 me-3 align-items-center">
                          <div className="bg-color-29 w-size-44 rounded-circle me-lg-3 me-2 h-size-44 d-flex align-items-center justify-content-center">
                            <Image
                              src={process.env.IMG_PATH + 'images/icons/green-calendar-icon.svg'}
                              alt="icon"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          {(item?.course_duration || item?.duration_unit) && (
                            <div>
                              <p className="fs-16 mb-lg-1 mb-0 text-color-10">Duration</p>
                              <span className="fs-16 fw-600 text-color-17">
                                {item?.course_duration} {item?.duration_unit}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="min-w-190 w-50 d-flex align-items-center">
                          <div className="bg-color-29 w-size-44 rounded-circle me-lg-3 me-2 h-size-44 d-flex align-items-center justify-content-center">
                            <Image
                              src={process.env.IMG_PATH + 'images/icons/salary-icon.svg'}
                              alt="icon"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          {item?.course_live_session && (
                            <div>
                              <p className="fs-16 mb-lg-1 mb-0 text-color-10">Live Sessions</p>
                              <span className="fs-16 fw-600 text-color-17"> {item?.course_live_session}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="d-xl-flex d-none align-items-center ms-lg-3 enrolled-users max-w-100">
                        <div
                          className="rounded-circle min-w-36 h-size-36 border-w border-color-1 
          justify-content center card-shadow-2 d-flex align-items-center enrolled-user"
                        >
                          <Image
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
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
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
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
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
                            className="img-fluid"
                            alt="Image"
                            width={36}
                            height={36}
                          />
                        </div>
                      </div>
                      <div className="fs-14 d-xl-flex d-none text-color-16 text-nowrap">
                        {formatNumberCount(item?.course_total_learners)}
                        <span className="text-color-15 ms-1"> Enrolled</span>
                      </div> */}
                    </div>

                    <div className="d-flex align-items-center justify-content-left mt-4">
                      {(item?.course_brochure && (
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.7 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => {
                            // if (item?.slug === 'data-analytics-course') {
                            //   window.open(process.env.IMG_PATH + item?.course_brochure);
                            // } else {
                            setCurrUrl(process.env.IMG_PATH + item?.course_brochure);
                            setCrmCrsId(item?.crm_lead_course_id);
                            setShowLeadModal(true);
                            setLeadHeading('Download Curriculum');
                            setCourseSlug(item?.slug);
                            // }
                          }}
                          className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 px-22 w-50 mr-lg-12 mr-8"
                        >
                          Download Curriculum
                        </motion.button>
                      )) ||
                        ''}
                      <Link href={item?.slug} className="w-50">
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.7 }}
                          transition={{ duration: 0.3 }}
                          className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-40 px-22 w-100 ml-lg-12 ml-8"
                        >
                          Learn More
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
    </>
  );
}

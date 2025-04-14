import Image from 'next/image';
import React from 'react';
import ReviewCount from '../Layouts/Common/ReviewCount';
import { formatNumberCount, numberFormat } from '@/_helper/Common';
import Link from 'next/link';
import { LottieAnimation } from '@/_services/lottieAnimations';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';

export default function JobsReadyCourses({
  centerCoursesData,
  centerSlug,
  setCurrUrl,
  setCrmCrsId,
  setLeadNote,
  setShowLeadModal,
  setLeadHeading,
  setCategorySlug,
  setCourseSlug,
  headingData,
}) {
  const slidesToShow = 3;
  const isEnoughItems = centerCoursesData?.length > slidesToShow;

  const settings = {
    dots: (centerCoursesData?.length > 3 && true) || false,
    infinite: isEnoughItems,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: (centerCoursesData?.length > 3 && true) || false,
    swipeToSlide: true,
    draggable: (centerCoursesData?.length > 3 && true) || false,
    swipeToSlide: (centerCoursesData?.length > 3 && true) || false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          infinite: true,
          dots: true,
          draggable: (centerCoursesData?.length > 2 && true) || false,
          swipeToSlide: (centerCoursesData?.length > 2 && true) || false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          draggable: true,
          swipeToSlide: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-lg-80 pb-lg-114 pt-64 pb-80">
      <div className="container-main container-w-xl-1202">
        <div className="section-info text-lg-start text-center text-color-1 mb-64">
          <h2 className="fw-600 fs-32 lh-48 mb-12">{headingData?.heading}</h2>
          <p className="fs-14 fw-400 lh-21 text-color-7 mb-0">{headingData?.subHeading}</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="slider-with-dots custom-arrows custom-arrow-postion centers-course-arrow">
              <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                {centerCoursesData?.map((course, index) => {
                  return (
                    <div className="px-10" key={index}>
                      <div className="custom-card upcoming-class-card rounded-20 border-w-2 border-color-1 h-100 min-h-571 details-course-card">
                        <div className="min-h-190 w-100 overflow-hidden rounded-tl-20 rounded-tr-20 img-box position-relative">
                          <Link href={`/${centerSlug}/${course?.slug}`}>
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
                        </div>
                        <div className="custom-card-body p-xl-20 p-14  pb-0">
                          <Link href={`/${centerSlug}/${course?.slug}`}>
                            <h3
                              className="fw-600 fs-16 text-color-1 lh-24 mb-8 courser-pointer line-clamp-2"
                              title={course?.course_name}
                            >
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
                              <li className="mb-2 fs-14 lh-21 text-color-10 d-flex align-items-center">
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
                              <li className="mb-24 fs-14 text-color-10  d-flex align-items-center ">
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
                        <div className="new-card-footer p-xl-20 pt-0 p-14">
                          <div className="d-flex align-items-center justify-content-between">
                            {(course?.course_brochure && (
                              <>
                                <button
                                  onClick={() => {
                                    setCurrUrl(process.env.IMG_PATH + course?.course_brochure);
                                    setCrmCrsId(course?.crm_lead_course_id);
                                    setLeadNote('Download Curriculum - Center Page - Our Job-ready Courses');
                                    setShowLeadModal(true);
                                    setLeadHeading('View Curriculum');
                                    setCategorySlug(course?.CategoryMasters[0]?.slug);
                                    setCourseSlug(course?.slug);
                                  }}
                                  className="outline-none fs-xl-14 fs-12 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 min-h-40 px-xl-16 px-6 w-50"
                                >
                                  View Curriculum
                                </button>
                                <span className="px-xl-10 px-6"></span>
                              </>
                            )) ||
                              ''}
                            <Link href={`/${centerSlug}/${course?.slug}`} className="w-50">
                              <button className="outline-none fs-xl-14 fs-12 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20 w-100">
                                Learn More
                              </button>
                            </Link>
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
    </section>
  );
}

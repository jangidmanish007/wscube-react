import { convertToLPA, formatNumberCount, numberFormat } from '@/_helper/Common';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import ReviewCount from '@/components/Layouts/Common/ReviewCount';

export default function RecomOffering({ categoryCoursesData }) {
  const tagsArray = categoryCoursesData?.course_tags && categoryCoursesData?.course_tags?.split(', ');
  return (
    <section className="recommended-offering py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12 text-center mb-40">
            <h2 className="fw-700 fs-32 lh-48 text-color-1 mb-0">Recommended Offerings</h2>
          </div>
          <div className="col-12">
            <div
              className={`mx-auto bg-white border-w-2 reverse-shadow-4 rounded-24 py-16 py-lg-40 pl-lg-40 pr-lg-17 p-16 d-lg-flex explore-crs-card position-relative mb-20 min-h-455`}
            >
              <div className="w-100 max-w-lg-450 max-h-372 mr-lg-32 position-relative overflow-hidden rounded-20">
                <div className="w-100 h-100 rounded-20">
                  {(categoryCoursesData?.course_img_url && (
                    <Image
                      src={`${process.env.IMG_PATH}${categoryCoursesData?.course_img_url}`}
                      alt="course image"
                      className="rounded-20 img-fluid w-100"
                      style={{ objectFit: 'cover' }}
                      width={450}
                      height={374}
                    />
                  )) || (
                    <Image
                      src={process.env.IMG_PATH + 'images/home-images/explore-crs-img.jpg'}
                      alt="course image"
                      className="rounded-20 img-fluid w-100"
                      style={{ objectFit: 'cover' }}
                      width={450}
                      height={374}
                    />
                  )}
                </div>
              </div>
              <div className="explore-crs-content mt-20 mt-lg-0 w-full max-w-xl-631 max-w-lg-450">
                {/* <div className="fs-14 fw-600 text-white reverse-shadow-4 readiness-program position-absolute end-0 px-20 d-none d-lg-flex align-items-center">
                  Career Readiness Program
                </div> */}
                <h3 className="fs-20 lh-30 fw-600 text-color-1 mb-16">{categoryCoursesData?.course_name}</h3>
                {categoryCoursesData?.course_short_description && (
                  <div className="fs-14 lh-21 text-color-7 mb-16">
                    {parse(categoryCoursesData?.course_short_description)}
                  </div>
                )}
                <div className="d-flex align-items-center mb-lg-24 mb-16 exp-ratings">
                  <span className="fs-14 text-color-1 lh-21">{categoryCoursesData?.course_review}</span>
                  <ReviewCount reviewCount={categoryCoursesData?.course_review} />
                  <span className="fs-14 text-color-28 lh-21">({numberFormat(item.course_review_count)})</span>
                </div>
                <div className="d-xl-none d-flex align-items-center mb-16">
                  <div className="d-flex align-items-center ms-xl-3 enrolled-users max-w-100">
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
                    18.8K <span className="text-color-15">Enrolled</span>
                  </div>
                </div>
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
                      {(categoryCoursesData?.course_duration || categoryCoursesData?.duration_unit) && (
                        <div>
                          <p className="fs-16 mb-lg-1 mb-0 text-color-10">Duration</p>
                          <span className="fs-16 fw-600 text-color-17">
                            {categoryCoursesData?.course_duration} {categoryCoursesData?.duration_unit}
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
                      {categoryCoursesData?.course_maximum_compensation && (
                        <div>
                          <p className="fs-16 mb-lg-1 mb-0 text-color-10">Highest salary</p>
                          <span className="fs-16 fw-600 text-color-17">
                            ₹ {convertToLPA(categoryCoursesData?.course_maximum_compensation)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-xl-flex d-none align-items-center ms-lg-3 enrolled-users max-w-100">
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
                  <div className="fs-14 d-xl-flex d-none text-color-16 text-nowrap">
                    {formatNumberCount(categoryCoursesData?.course_total_learners)}
                    <span className="text-color-15">Enrolled</span>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-4">
                  <button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 px-lg-22 w-50 mr-lg-12 mr-8"
                  >
                    Book Demo Now
                  </button>
                  <button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-40 px-lg-22 w-50 ml-lg-12 ml-8"
                  >
                    Consult with a pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

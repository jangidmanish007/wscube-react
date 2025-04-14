import { numberFormat } from '@/_helper/Common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function CategoryBanner({ bannerData }) {
  return (
    <section className="course-category-section pb-xl-87 pb-40 pt-106 pt-lg-140">
      <div className="container-main container-w-xl-1202">
        <div className="d-xl-flex grid-gap-71 align-items-center justify-content-between">
          <div className="max-w-xl-543 max-w-500 text-center text-xl-start me-lg-auto category-banner-left">
            <div className="d-lg-inline-flex d-none align-items-center job-guarantee-badge rounded-pill px-12 py-1 mb-16">
              <Image
                src={`${process.env.IMG_PATH}images/icons/job-guarantee-icon.svg`}
                width={16}
                height={17}
                className="img-fluid"
                alt="job-guarantee-icon"
              />
              <span className="ms-1 fs-14 fw-400 lh-21 text-color-1 text-capitalize">Career Preparation Program</span>
            </div>
            <div className="d-lg-flex align-items-start justify-content-xl-start justify-content-center mb-lg-24 mb-15 cat-banner-heading">
              <h1 className="text-color-1 lh-48 max-w-lg-450 fw-600 fs-40">
                {bannerData?.CategoryMasterContent?.page_title}
              </h1>
              <span>
                <Image
                  src={`${process.env.IMG_PATH}images/categories/mic-pink.svg`}
                  width={60}
                  height={60}
                  alt="Icon"
                />
              </span>
            </div>
            <p className="text-color-7 fs-18 lh-24 mb-lg-40 mb-20 cat-banner-text">
              {bannerData?.CategoryMasterContent?.page_short_description}
            </p>
            <ul className="list-unstyled d-flex align-items-center justify-content-between p-0 mb-lg-0 mb-48 cat-banner-features">
              <li className="d-lg-flex align-items-center">
                <div
                  className="min-w-xl-64 h-size-xl-64 w-size-55 h-size-55 rounded-circle d-flex align-items-center
                   justify-content-center mr-lg-14 category-feature-icon bg-white"
                >
                  <Image
                    src={`${process.env.IMG_PATH}images/categories/blue-star.svg`}
                    width={27}
                    height={27}
                    alt="Icon"
                  />
                </div>
                <div>
                  <p className="fw-600 fs-22 lh-33 text-color-17 mb-lg-1 mb-0">
                    {numberFormat(bannerData?.CategoryMasterContent?.category_numbers_one)} +
                  </p>
                  <span className="fw-600 fs-14 lh-21 text-color-10">
                    {bannerData?.CategoryMasterContent?.category_unit_one}
                  </span>
                </div>
              </li>
              <li className="d-lg-flex align-items-center">
                <div
                  className="min-w-xl-64 h-size-xl-64 w-size-55 h-size-55 rounded-circle d-flex align-items-center
                   justify-content-center mr-lg-14 category-feature-icon bg-white"
                >
                  <Image
                    src={`${process.env.IMG_PATH}images/categories/blue-users.svg`}
                    width={27}
                    height={27}
                    alt="Icon"
                  />
                </div>
                <div>
                  <p className="fw-600 fs-22 lh-33 text-color-17 mb-lg-1 mb-0">
                    {bannerData?.CategoryMasterContent?.category_numbers_two}
                  </p>
                  <span className="fw-600 fs-14 lh-21 text-color-10">
                    {bannerData?.CategoryMasterContent?.category_unit_two}
                  </span>
                </div>
              </li>
              <li className="d-lg-flex align-items-center">
                <div
                  className="min-w-xl-64 h-size-xl-64 w-size-55 h-size-55 rounded-circle d-flex align-items-center
                   justify-content-center mr-lg-14 category-feature-icon bg-white"
                >
                  <Image
                    src={`${process.env.IMG_PATH}images/categories/blue-users.svg`}
                    width={27}
                    height={27}
                    alt="Icon"
                  />
                </div>
                <div>
                  <p className="fw-600 fs-22 lh-33 text-color-17 mb-lg-1 mb-0">
                    {bannerData?.CategoryMasterContent?.category_numbers_three}
                  </p>
                  <span className="fw-600 fs-14 lh-21 text-color-10">
                    {bannerData?.CategoryMasterContent?.category_unit_three}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="category-banner-right text-center ms-xl-auto w-full max-w-546 mx-xl-0 mx-auto">
            <p className="m-0 fs-xl-18 fs-16 fw-xl-600 fw-400 text-color-1 mb-0">
              <span className="fs-14 fw-700 text-white px-12 me-2 py-10 position-relative d-xl-inline-block d-none">
                Our Alumni
              </span>
              {bannerData?.CategoryMasterContent?.category_page_top_tagline}
            </p>
            <div className="d-xl-block d-none mt-lg-32 mt-16 mb-12">
              <div className="d-flex learners-placed-row justify-content-center">
                {(bannerData?.CategoryMasterContent?.job_source_link && (
                  <Link href={bannerData?.CategoryMasterContent?.job_source_link} target="_blank">
                    <div
                      className="p-12 rounded-12 job-numbers-card w-100 h-100 mx-2 d-flex aluign-items-center 
                  text-center flex-column justify-content-center text-white"
                    >
                      <p className="fs-14 mb-1 fw-400 lh-21">Jobs on LinkedIn Alone</p>
                      <span className="fs-22 fw-600 lh-33">
                        {numberFormat(bannerData?.CategoryMasterContent?.job_count_alone)}+
                      </span>
                    </div>
                  </Link>
                )) || (
                  <div
                    className="p-12 rounded-12 job-numbers-card w-100 h-100 mx-2 d-flex aluign-items-center 
              text-center flex-column justify-content-center text-white"
                  >
                    <p className="fs-14 mb-1 fw-400 lh-21">Jobs on LinkedIn Alone</p>
                    <span className="fs-22 fw-600 lh-33">
                      {numberFormat(bannerData?.CategoryMasterContent?.job_count_alone || '10000')}+
                    </span>
                  </div>
                )}
                <div className="p-12 rounded-12 place-card w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_1}`}
                    width={88}
                    height={88}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_1}
                  </div>
                </div>
                <div className="p-12 rounded-12 place-card w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_2}`}
                    width={88}
                    height={88}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_2}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-xl-block d-none">
              <div className="d-flex learners-placed-row justify-content-center">
                <div className="p-12 rounded-12 place-card w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_3}`}
                    width={88}
                    height={88}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_3}
                  </div>
                </div>
                <div className="p-12 rounded-12 place-card w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_4}`}
                    width={88}
                    height={88}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_4}
                  </div>
                </div>
                <div
                  className="p-12 rounded-12 job-numbers-card w-100 h-100 mx-2 d-flex aluign-items-center 
                 text-center flex-column justify-content-center text-white"
                >
                  <p className="fs-14 mb-1 fw-400 lh-21">Maximum Compensation</p>
                  <span className="fs-22 fw-600 lh-33">
                    ₹ {bannerData?.CategoryMasterContent?.maximum_compensation} LPA
                  </span>
                </div>
                <div className="p-12 rounded-12 place-card w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_5}`}
                    width={88}
                    height={88}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_5}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-xl-none learners-placed-row my-24">
              <Marquee pauseOnHover autoFill speed={50}>
                <div className="p-12 rounded-12 place-card min-h-150 w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_1}`}
                    width={108}
                    height={108}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_1}
                  </div>
                </div>
                {(bannerData?.CategoryMasterContent?.job_source_link && (
                  <Link href={bannerData?.CategoryMasterContent?.job_source_link} target="_blank">
                    <div
                      className="p-12 rounded-12 job-numbers-card min-h-150 w-100 h-100 mx-2 d-flex aluign-items-center 
                 text-center flex-column justify-content-center text-white"
                    >
                      <p className="fs-16 mb-1 fw-600 lh-24">Jobs on LinkedIn Alone</p>
                      <span className="fs-25 fw-600 lh-37">
                        {numberFormat(bannerData?.CategoryMasterContent?.job_count_alone)}+
                      </span>
                    </div>
                  </Link>
                )) || (
                  <div
                    className="p-12 rounded-12 job-numbers-card w-100 h-100 mx-2 d-flex aluign-items-center 
             text-center flex-column justify-content-center text-white"
                  >
                    <p className="fs-16 mb-1 fw-600 lh-24">Jobs on LinkedIn Alone</p>
                    <span className="fs-25 fw-600 lh-37">
                      {numberFormat(bannerData?.CategoryMasterContent?.job_count_alone || '10000')} +
                    </span>
                  </div>
                )}
                <div className="p-12 rounded-12 place-card min-h-150 w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_2}`}
                    width={108}
                    height={108}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_2}
                  </div>
                </div>
                <div className="p-12 rounded-12 place-card min-h-150 w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_3}`}
                    width={108}
                    height={108}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_3}
                  </div>
                </div>
                <div className="p-12 rounded-12 place-card min-h-150 w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_4}`}
                    width={108}
                    height={108}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_4}
                  </div>
                </div>
                <div
                  className="p-12 rounded-12 job-numbers-card w-100 min-h-150 h-100 mx-2 d-flex aluign-items-center 
                 text-center flex-column justify-content-center text-white"
                >
                  <p className="fs-16 mb-1 fw-600 lh-24">Maximum Compensation</p>
                  <span className="fs-25 fw-600 lh-37">
                    ₹ {bannerData?.CategoryMasterContent?.maximum_compensation} LPA
                  </span>
                </div>
                <div className="p-12 rounded-12 place-card min-h-150 w-100 h-100 mx-2">
                  <Image
                    src={`${process.env.IMG_PATH}${bannerData?.CategoryMasterContent?.alumni_img_5}`}
                    width={108}
                    height={108}
                    alt="Learner"
                    className="rounded-12 img-fluid"
                  />
                  <div className="text-center mt-10 fs-12 fw-600 lh-18">
                    {bannerData?.CategoryMasterContent?.alumni_name_5}
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

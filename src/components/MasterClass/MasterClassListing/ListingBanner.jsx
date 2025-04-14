'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

export default function ListingBanner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2100,
    centerMode: false,
    centerPadding: '90px',
    vertical: true,
    verticalScrolling: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bannerSliderData = [
    { id: 1, image: 'uploads/images/masterclass/master-class-short-1.webp' },
    { id: 2, image: 'uploads/images/masterclass/master-class-short-2.webp' },
    { id: 3, image: 'uploads/images/masterclass/master-class-short-3.webp' },
    { id: 4, image: 'uploads/images/masterclass/master-class-short-4.webp' },
    { id: 5, image: 'uploads/images/masterclass/master-class-short-5.webp' },
    { id: 6, image: 'uploads/images/masterclass/master-class-short-6.webp' },
    { id: 7, image: 'uploads/images/masterclass/master-class-short-7.webp' },
  ];

  return (
    <>
      <section className="course-category-section pt-lg-80 pt-136 pb-lg-0 pb-43">
        <div className="listing-master-class-bg-layer h-size-xl-198 h-size-160 position-absolute w-full top-0 start-0"></div>
        <div className="container-main container-w-xl-1202">
          <div className="d-lg-flex justify-content-between grid-gap-40 align-items-center">
            <div className="left-listing-content w-full max-w-xl-571 max-w-lg-500 position-relative">
              <h1 className="text-lg-start text-center fs-lg-32 fs-25 lh-32 lh-lg-48 fw-600 text-color-1 mb-xl-8 mb-0 listing-banner-heading">
                WsCube Tech <span className="text-color-3"> Masterclasses,</span>
              </h1>
              <span className="text-lg-start text-center d-block fs-lg-32 fs-25 lh-32 lh-lg-48 text-color-1 fw-600 mb-xl-24 mb-20 ">
                You cannot afford to miss it!
              </span>
              <p className="text-lg-start text-center fs-xl-18 fs-14 lh-xl-27 lh-21 fw-400 text-color-7 pr-xl-50 mb-xl-32 mb-28">
                Register for free masterclasses led by Industry Maestros and give an extra edge to your Career game
                plan!
              </p>
              <ul className="list-unstyled d-flex justify-content-lg-start justify-content-center grid-gap-xl-44 grid-gap-20">
                <li className="text-lg-start text-center py-xl-16 py-12 px-xl-32 px-20 rounded-xl-20 rounded-8 bg-color-3 h-full list-banner-shadow">
                  <h3 className="fs-xl-28 fs-18 fw-600 lh-xl-42 lh-28 text-color-2 mb-0">42521</h3>
                  <span className="fs-xl-14 fs-12 lh-xl-21 lh-16 fw-400 text-color-2">Attendees Till Date</span>
                </li>
                <li className="text-lg-start text-center py-xl-16 py-12 px-xl-32 px-20 rounded-xl-20 rounded-8 bg-color-25 h-full list-banner-shadow">
                  <h3 className="fs-xl-28 fs-18 fw-600 lh-xl-42 lh-28 text-color-1 mb-0">20136</h3>
                  <span className="fs-xl-14 fs-12 lh-xl-21 lh-16 fw-400 text-color-1">Completed By Learner</span>
                </li>
              </ul>
            </div>
            <div className="right-listing-content max-w-xl-429 max-w-400 position-relative d-lg-block d-none">
              <div className="banner-listing-slider vertical-slider-track pointer-none">
                <Slider {...settings}>
                  {bannerSliderData?.map((item, index) => {
                    return (
                      <div className="pb-34" key={index}>
                        <div className="banner-slider-card">
                          <Image
                            src={`${process.env.IMG_PATH}${item?.image}`}
                            width={429}
                            height={216}
                            alt=""
                            className="img-fluid rounded-12"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="bg-layer position-absolute bottom-0 star-0 w-full h-size-158 d-flex">
                <Image
                  src={'/images/master-class/listing-banner-bg-layer-bottom.svg'}
                  width={429}
                  height={158}
                  alt=""
                  className="img-fluid mt-auto d-flex w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { animationFromBottom } from '@/_utils/Animation';

export default function ToolsYouWillLearn({
  heading,
  tools,
  setLeadNote,
  setDownloadCrs,
  setShowLeadModal,
  crsCurr,
  setLeadHeading,
}) {
  const slidesToShow = 5;
  const isEnoughItems = tools?.length >= slidesToShow;

  const settings = {
    dots: true,
    rows: (tools?.length >= 10 && 2) || 1,
    infinite: isEnoughItems,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="tools-you-learn-wrapper w-full max-w-1060 mx-auto">
      <motion.div
        initial={animationFromBottom.initial}
        whileInView={animationFromBottom.whileInView}
        transition={animationFromBottom.transition}
        viewport={{ once: true }}
        className="section-info text-center text-color-1 mb-lg-52 mb-40"
      >
        <h2 className="fs-32 fw-700 lh-48 mb-0">{heading || 'Tools you will learn'}</h2>
      </motion.div>
      <div className="slider-with-dots mb-lg-98 mb-80 slick-track-start master-classes-slider">
        <Slider {...settings}>
          {tools?.map((item, key) => {
            return (
              <div className="px-lg-12 pl-lg-0 pl-16 mb-lg-24 mb-16" key={`tools_key`}>
                <div
                  className="tools-you-learn-card border-w-2 border-color-1 rounded-12 h-full min-h-lg-70 px-lg-14 px-10 d-flex align-items-center
                 justify-content-center hover-shadow-4 cursor-pointer"
                >
                  <div className="p-0 d-flex align-items-center">
                    <Image
                      src={`${process.env.IMG_PATH}${item?.img_url}`}
                      width={122}
                      height={30}
                      className="img-fluid my-auto max-w-lg-122 max-w-112"
                      alt={item?.name}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {(crsCurr && (
        <div className="text-center">
          {/* <button
            onClick={() => {
              setLeadNote('Download Curriculum - Course Page - Tools you will master');
              setDownloadCrs(true);
              setShowLeadModal(true);
              setLeadHeading('Download Curriculum');
            }}
            className="blue-fill-btn min-h-56 py-14 px-20 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 mx-auto hover-shadow-4"
          >
            Download Curriculum
          </button> */}
          <button
            onClick={() => {
              setLeadNote('Apply Now - Course Curriculum - What Will You Learn');
              setDownloadCrs(false);
              setShowLeadModal(true);
              setLeadHeading('Apply Now');
            }}
            className="blue-fill-btn min-h-56 py-14 px-20 fs-lg-18 fs-16 fw-600 lh-lg-27 min-w-188 lh-24 rounded-12 mx-auto hover-shadow-4"
          >
            Apply Now
          </button>
        </div>
      )) ||
        ''}
    </div>
  );
}

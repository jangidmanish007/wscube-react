'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animationFromLeft } from '@/_utils/Animation';
import CourseReviewCard from './CourseReviewCard';
import { numberFormat } from '@/_helper/Common';

export default function CourseTestimonials({ tagline, testimonials, review, rating }) {
  const [displayedItemCount, setDisplayedItemCount] = useState(4);
  const fullContent = (testimonials?.length <= 4 && true) || false;
  const [showFullContent, setShowFullContent] = useState(fullContent);

  const handleSeeAllClick = () => {
    setShowFullContent(true); // Update state to show full content
    setDisplayedItemCount(testimonials?.length); // Optional callback to parent component
  };

  return (
    <section className="pt-lg-80 pt-64 pb-lg-85 pb-64 overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <motion.div
            initial={animationFromLeft.initial}
            whileInView={animationFromLeft.whileInView}
            transition={animationFromLeft.transition}
            viewport={{ once: true }}
            className="section-heading mb-52 text-lg-start text-center"
          >
            <div className="d-flex align-items-center justify-content-lg-start justify-content-center mb-lg-20 mb-12">
              <div className="d-flex align-items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index}>
                    {/* Render star icon here */}
                    {index < rating ? (
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/fill-star-icon.svg`}
                        width={36}
                        height={36}
                        alt="star-icon"
                        className="mr-12 w-size-lg-36 w-size-24"
                      />
                    ) : (
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/half-fill-star-icon.svg`}
                        width={36}
                        height={36}
                        alt="star-icon"
                        className="mr-12 w-size-lg-36 w-size-24"
                      />
                    )}
                  </span>
                ))}
              </div>
              <p className="mb-0  align-middle d-flex align-items-center fs-lg-22 fs-20 fw-600 lh-lg-33 lh-24 text-color-1">
                {rating}
                <span className="ml-3 fs-16 fw-600 lh-24 text-color-1 d-sm-block d-none">
                  ({numberFormat(review)} Reviews)
                </span>
              </p>
            </div>
            <span className="ml-3 fs-16 fw-400 lh-24 text-color-1 d-sm-none d-block mb-16">
              ({numberFormat(review)} Reviews)
            </span>
            <h2 className="fs-20 fw-600 lh-lg-33 lh-28 text-color-1">
              {tagline || 'Thousands of people love pro digital marketer with Wscube Tech'}
            </h2>
          </motion.div>
          <div className="people-review-main-wrapper d-md-block d-none">
            <div className="mesonery-wrapper">
              {testimonials?.map((item, index) => (
                <CourseReviewCard reviewData={item} index={index} />
              ))}
            </div>
          </div>
          <div className="people-review-main-wrapper d-md-none d-block">
            <div className="mesonery-wrapper mb-24">
              {testimonials?.slice(0, displayedItemCount).map((item, index) => (
                <CourseReviewCard reviewData={item} index={index} />
              ))}
            </div>
            {!showFullContent && (
              <div className="text-center">
                <button
                  className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20"
                  onClick={handleSeeAllClick}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

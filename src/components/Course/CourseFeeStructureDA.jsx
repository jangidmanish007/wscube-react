'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { animationFromBottom } from '@/_utils/Animation';
import parse from 'html-react-parser';
import { numberFormat } from '@/_helper/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function CourseFeeStructureDA({ fee, setShowLeadModal, setLeadNote, setDownloadCrs, setLeadHeading }) {
  const container = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section className="py-lg-80 py-64 overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <motion.div
            initial={animationFromBottom.initial}
            whileInView={animationFromBottom.whileInView}
            transition={animationFromBottom.transition}
            viewport={{ once: true }}
            className="section-info text-color-1 text-center mb-lg-60 mb-40"
          >
            <h2 className="fs-32 fw-600 lh-48 mb-16 text-color-1">Fee structure of this program</h2>
          </motion.div>
          <motion.div
            ref={container}
            className="border-w border-color-1 overflow-hidden fee-structure-card
             transation-2 py-xl-44 py-lg-30 py-20 pl-lg-0 pl-20 rounded-20 pr-xl-47 pr-lg-30 pr-20"
          >
            <div className="p-0">
              <div className="d-flex align-items-center justify-content-between grid-gap-xl-50 grid-gap-30">
                <motion.div
                  className="img-wrapper position-relative w-full max-w-xl-577 max-w-lg-380 min-w-xl-477 
                  min-w-lg-320 fee-structure-left-img da-fee-structure-bg d-lg-block d-none"
                >
                  {(pathname && pathname?.includes('jaipur')) ||
                    (pathname && pathname?.includes('jodhpur') && (
                      <Image
                        src={`${process.env.IMG_PATH}images/courses-details/offline-center-img.webp`}
                        width={577}
                        height={440}
                        alt="fees-structure-img"
                        className="img-fluid min-h-xl-524 h-size-300"
                        style={{ objectFit: 'cover' }}
                      />
                    )) || (
                      <Image
                        src={`${process.env.IMG_PATH}images/courses-details/free-programe-course-img.webp`}
                        width={577}
                        height={440}
                        alt="fees-structure-img"
                        className="img-fluid min-h-xl-524 h-size-300"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                </motion.div>
                <div className="course-price-wrapper w-full max-w-lg-496">
                  <h3 className="fs-lg-36 fs-24 fw-600 lh-lg-54 lh-36 text-color-1 mb-lg-20 ">
                    Data Analytics Mentorship Cohort July 2024
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="price-section w-full py-20 border-w border-color-28 border-end-0 border-start-0 border-dashed mb-20">
                      <div className="d-lg-flex align-items-center mb-20">
                        <div
                          style={{ backgroundColor: '#20CD67', borderColor: '#26A65A' }}
                          className="text-white d-flex align-items-center fs-lg-18 fs-16 lh-30 border-w rounded-24 max-w-270 px-20 min-h-46 justify-content-lg-center fw-600  mb-lg-0 mb-8"
                        >
                          <Image
                            src={`/images/courses-details/offer-live-icon.svg`}
                            width={30}
                            height={30}
                            alt="Icon"
                            className="img-fluid mr-8 mt-1"
                          />
                          <span style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>Early Bird Offer Live</span>
                        </div>
                        <span className="pl-lg-12 text-color-17 fs-14 fw-600">40% off for First 50 Seats</span>
                      </div>
                      <div>
                        <p className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 text-color-34 d-block mb-1">
                          Total Program Fee:
                        </p>
                        <div className="d-flex align-items-center">
                          <p className="m-0 fs-lg-25 fs-22 fw-600 text-color-1 position-relative cut-pr-line d-flex align-items-center">
                            ₹89,000/-
                          </p>
                          <p className="mb-0 ml-12 fs-lg-36 fs-30 fw-600 text-color-1">₹53,400/-</p>
                        </div>
                        <p className="fs-14 lh-21 text-color-17 mt-10 mb-20">
                          <b className="fw-600">No cost EMI </b>options available.
                        </p>
                      </div>
                      <div className="d-lg-flex align-items-center">
                        <button
                          onClick={() => {
                            setLeadNote('Talk to Program Advisor - Course Page - Fee structure of this program');
                            setDownloadCrs(false);
                            setShowLeadModal(true);
                            setLeadHeading('Talk to Program Advisor');
                          }}
                          className="blue-fill-btn min-h-lg-56 py-lg-14 py-12 px-16 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mr-lg-28 mb-14 mb-lg-0"
                        >
                          Talk to Program Advisor
                        </button>
                        <div className="d-flex align-items-center text-color-34 fs-16">
                          <Image
                            src={`/images/courses-details/trend-up.svg`}
                            width={28}
                            height={28}
                            alt="Icon"
                            className="img-fluid mr-12"
                          />
                          3785 already upskilled!
                        </div>
                      </div>
                    </li>
                    {(Number(fee?.demo_price) > 0 && (
                      <div className="border-dashed border-w border-color-1 rounded-8 px-12 py-8 d-flex align-items-center mb-20 bg-color-32">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-color-17 mr-8 w-size-15 fs-15" />
                        <span className="fs-16 text-color-17">
                          Experience our demo class for just Rs. {Number(fee?.demo_price)}/- (refundable)
                        </span>
                      </div>
                    )) ||
                      ''}
                    <li className="mb-20">
                      <ul className="list-unstyled about-highlight-list mb-0 fee-structure-list">
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          Professional Certification in <span className="fw-600">Data Analytics</span>
                        </li>
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          Assured <span className="fw-600">Job-readiness & Placement Assistance</span>
                        </li>
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          100% Project based Cohort designed by <span className="fw-600">Top Industry Mentors</span>
                        </li>
                        <li className="pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          <span className="fw-600"> Hybrid Cohort</span> developed to cater Gen Z Upskilling needs
                        </li>
                      </ul>
                    </li>
                    <li className="fs-12 lh-18 text-color-7">
                      The Cohort Fee can be paid via custom payment link offered by Program Advisor at the point of
                      enrollment. The fees paid are non-refundable, non-transferable and cannot be applied to other
                      courses, services, or individuals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

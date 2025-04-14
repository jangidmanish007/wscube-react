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
import { hideCtaPages } from './hideButtonPages';
import moment from 'moment';

export default function CourseFeeStructure({
  fee,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  setLeadHeading,
  courseSlug,
  details,
}) {
  const offlineSlug = courseSlug == 'jaipur' || courseSlug == 'jodhpur';
  const dmSlug = details.slug == 'digital-marketing-course';

  const container = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const slug = pathname.split('/').pop();
  const isHideCtaPage = hideCtaPages.includes(slug);

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
              <div className="d-flex align-items-center grid-gap-xl-100 grid-gap-40">
                <motion.div
                  className="img-wrapper position-relative w-full max-w-xl-477 max-w-lg-380 min-w-xl-477 
                  min-w-lg-320 fee-structure-left-img d-lg-block d-none"
                >
                  {/* images/courses-details/free-programe-course-img.webp */}
                  {(((pathname && pathname?.includes('jaipur')) || (pathname && pathname?.includes('jodhpur'))) && (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/offline-center-img.webp`}
                      width={477}
                      height={440}
                      alt="fees-structure-img"
                      className="img-fluid rounded-20 rounded-start-0 min-h-xl-420 h-size-300"
                      style={{ objectFit: 'cover' }}
                    />
                  )) || (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/free-programe-course-img.webp`}
                      width={477}
                      height={440}
                      alt="fees-structure-img"
                      className="img-fluid rounded-20 rounded-start-0 min-h-xl-420 h-size-300"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </motion.div>
                {(slug === 'digital-marketing-course' && (
                  <div className="course-price-wrapper w-full max-w-lg-547">
                    <ul className="list-unstyled mb-0">
                      {(offlineSlug && dmSlug && (
                        <>
                          <li>
                            <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12">
                              If you are interested for this course:
                            </h3>
                          </li>
                        </>
                      )) || (
                        <>
                          <div className="" style={{ borderColor: '1px solid rgba(254, 224, 177, 1)' }}>
                            {(details?.cohort_start_date && (
                              <div
                                className={`rounded-8 border-w min-w-135 overflow-hidden position-relative w-max-content ${
                                  (!details?.sale_content && 'mb-16') || ''
                                }`}
                                style={{ borderColor: 'rgba(254, 224, 177, 1)', zIndex: '10' }}
                              >
                                <p
                                  className="m-0 w-100 h-size-26 d-flex align-items-center justify-content-center fs-14 fw-500  "
                                  style={{ color: '#6A4201', backgroundColor: '#FEE0B1' }}
                                >
                                  {details?.cohort_heading}
                                </p>
                                <p
                                  className="m-0 w-100 h-size-40 text-color-1 d-flex align-items-center justify-content-center fs-16 fw-600"
                                  style={{ backgroundColor: '#FFF5E6' }}
                                >
                                  {(details?.slug === 'data-analytics-course' &&
                                    moment(details?.cohort_start_date).format('Do MMM, YY')) ||
                                    moment(details?.cohort_start_date).format('Do MMM, YY')}
                                </p>
                              </div>
                            )) ||
                              ''}
                            {details?.sale_content && (
                              <div className="pt-28 text-center pb-16">
                                <p className="mb-0 sale-content-text fs-20 fw-600 lh-27">{details?.sale_content}</p>
                              </div>
                            )}
                          </div>
                          <div className="d-lg-flex align-items-center mb-16">
                            {details?.discount_title && (
                              <div
                                style={{ backgroundColor: '#10A24C', borderColor: '#26A65A' }}
                                className="text-white d-flex align-items-center fs-13 lh-21 border-w rounded-24
                                   max-w-200 px-10 min-h-34 justify-content-lg-center fw-600 mb-lg-0 mb-8"
                              >
                                <Image
                                  src={`/images/courses-details/offer-live-icon.svg`}
                                  width={20}
                                  height={20}
                                  alt="Icon"
                                  className="img-fluid mr-6 mt-1"
                                />
                                <span style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
                                  {details?.discount_title}
                                </span>
                              </div>
                            )}
                            <span className="pl-lg-12 text-color-17 fs-14 fw-600">{fee?.fee_discount_text}</span>
                          </div>
                          <div
                            className={`price-section w-full border-w pt-lg-16 pb-16 border-color-28 border-end-0 border-start-0 border-dashed border-bottom-0`}
                          >
                            <div>
                              <p className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 text-color-34 d-block mb-0">
                                Total Program Fee:
                              </p>
                              <div className="d-lg-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  {fee?.actual_price > 0 && (
                                    <p
                                      className={`mb-0 fw-600 text-color-7 fs-xl-22 fs-20 position-relative cut-pr-line d-flex align-items-center mr-12`}
                                    >
                                      ₹{numberFormat(fee?.actual_price)}/-
                                    </p>
                                  )}
                                  <p className={`mb-0 fw-600 text-color-1 fs-xl-32 fs-22`}>
                                    ₹{numberFormat(fee?.sale_price)}/-
                                  </p>
                                </div>
                                <div
                                  style={{ backgroundColor: '#10A24C' }}
                                  className="text-white d-flex align-items-center fs-lg-12 fs-10 lh-18 rounded-24
                                   max-w-lg-130 w-max-content my-2 my-lg-0 px-lg-12 px-8 min-h-26 justify-content-lg-center fw-400 ms-lg-2"
                                >
                                  <span style={{ textShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)' }}>
                                    Flat ₹{numberFormat(Number(fee?.actual_price) - Number(fee?.sale_price))} OFF
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <li className="mb-28">{parse(fee?.description)}</li>
                      {fee?.sale_price <= 0 && (
                        <li className="px-lg-12 mt-28">
                          <p className="fs-14 fw-600 lh-21 text-color-7">If you are interested for this course:</p>
                        </li>
                      )}
                      <li className="mb-28">
                        {(!isHideCtaPage && (
                          <div className="d-sm-flex w-full align-items-center justify-content-lg-start justify-content-center text-sm-start text-center mx-sm-0 mx-auto">
                            {(fee?.sale_price > 0 && (
                              <button
                                className="blue-fill-btn min-h-56 px-46 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mr-md-28 mb-sm-0 mb-4 apply-now-btn"
                                title="Apply Now"
                                onClick={() => {
                                  setLeadNote('Apply Now - Course Page - Fee structure of this program');
                                  setDownloadCrs(false);
                                  setShowLeadModal(true);
                                  setLeadHeading('Apply Now');
                                }}
                              >
                                Apply Now
                              </button>
                            )) || (
                              <button
                                className="blue-fill-btn min-h-56 px-46 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mr-md-28 mb-sm-0 mb-4 apply-now-btn"
                                title="Consult with a pro"
                                onClick={() => {
                                  setLeadNote('Consult with a pro - Course Page - Fee structure of this program');
                                  setDownloadCrs(false);
                                  setShowLeadModal(true);
                                  setLeadHeading('Consult with a pro');
                                }}
                              >
                                Consult with a pro
                              </button>
                            )}
                            {/* {(details?.course_total_learners && (
                              <div className="d-block ml-lg-28 ml-0 total-applied">
                                <Image
                                  src={`${process.env.IMG_PATH}images/icons/trend-up-icon.svg`}
                                  width={28}
                                  height={28}
                                  alt="trend-up"
                                  className="img-fluid mr-12 w-size-lg-28 w-size-20"
                                />
                                <span className="fs-lg-16 fs-14 fw-400 lh-lg-24 lh-21 text-color-34">
                                  {numberFormat(details?.course_total_learners)} already applied
                                </span>
                              </div>
                            )) ||
                              ''} */}
                          </div>
                        )) ||
                          ''}
                      </li>
                    </ul>
                  </div>
                )) || (
                  <div className="course-price-wrapper w-full max-w-lg-547">
                    <ul className="list-unstyled mb-0">
                      {(fee?.sale_price > 0 && (
                        <>
                          {/* <li className="price-section d-lg-flex align-items-center w-full py-lg-8 pb-20 border-w border-color-28 border-end-0 border-start-0 border-dashed px-12 mb-20"> */}
                          {/* <div className="mr-lg-28 text-lg-start text-center">
                            <p className="text-color-17 mb-lg-1 mb-0 d-inline-block">
                              <span className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 align-middle"> Start at </span>
                              <span className="fs-lg-25 fs-22 fw-600 lh-37 align-middle">
                                INR {numberFormat(fee?.actual_price)}
                              </span>
                              <span className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 align-middle ms-1">/month</span>
                            </p>
                          </div> */}
                          {/* {fee?.emi_available && (
                        <button className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20 d-lg-block d-none">
                          View Plans
                        </button>
                      )} */}
                          {/* </li> */}
                          {/* <li className="d-block d-lg-none mb-28 text-center">
                          <button className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20 ">
                            View Plans
                          </button>
                        </li> */}
                          <li className="mb-28 px-lg-12 text-lg-start text-center">
                            <span className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 text-color-34 d-block mb-1">
                              Total Program Fee:
                            </span>
                            <h3 className="fs-lg-40 fs-28 fw-lg-600 fw-700 lh-lg-48 lh-36 text-color-17 align-items-center d-flex">
                              INR {numberFormat(fee?.sale_price)}/-{' '}
                              {fee?.actual_price > 0 && (
                                <s className="fs-20 text-color-28 ps-2">INR {numberFormat(fee?.actual_price)}/-</s>
                              )}
                            </h3>
                            {fee?.emi_available && (
                              <p className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 text-color-17 mb-0">
                                <span className="fw-600"> No cost EMI</span> options available.
                              </p>
                            )}
                          </li>
                        </>
                      )) || (
                        <li className=" px-lg-12">
                          <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12">
                            If you are interested for this course:
                          </h3>
                        </li>
                      )}
                      {(Number(fee?.demo_price) > 0 && (
                        <div className="border-dashed border-w ml-lg-12 border-color-1 rounded-8 px-12 py-8 d-flex align-items-center mb-20 bg-color-32">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-color-17 mr-8 w-size-15 fs-15" />
                          <span className="fs-16 text-color-17">
                            Experience our demo class for just Rs. {Number(fee?.demo_price)}/- (refundable)
                          </span>
                        </div>
                      )) ||
                        ''}
                      <li className="mb-28 px-lg-12">
                        {parse(fee?.description)}
                        {/* <ul className="list-unstyled about-highlight-list mb-0 fee-structure-list">
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          <span className="fw-600">Live instruction </span>from Industry Veterans
                        </li>
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          <span className="fw-600">Official certification</span> in Human Resources
                        </li>
                        <li className="mb-12 pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          <span className="fw-600">Vibrant community</span> just like a College Campus
                        </li>
                        <li className="pl-26 position-relative fs-14 fw-400 lh-21 text-color-1">
                          <span className="fw-600">Hand-on curriculum</span> with Real-Life Projects
                        </li>
                      </ul> */}
                      </li>
                      {fee?.sale_price <= 0 && (
                        <li className="px-lg-12 mt-28">
                          <p className="fs-14 fw-600 lh-21 text-color-7">If you are interested for this course:</p>
                        </li>
                      )}
                      <li className="mb-28 px-lg-12">
                        {(!isHideCtaPage && (
                          <div className="d-sm-flex w-full align-items-center justify-content-lg-start justify-content-center text-sm-start text-center mx-sm-0 mx-auto">
                            {(fee?.sale_price > 0 && (
                              <button
                                className="blue-fill-btn min-h-56 px-46 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mr-md-28 mb-sm-0 mb-4 apply-now-btn"
                                title="Apply Now"
                                onClick={() => {
                                  setLeadNote('Apply Now - Course Page - Fee structure of this program');
                                  setDownloadCrs(false);
                                  setShowLeadModal(true);
                                  setLeadHeading('Apply Now');
                                }}
                              >
                                Apply Now
                              </button>
                            )) || (
                              <button
                                className="blue-fill-btn min-h-56 px-46 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mr-md-28 mb-sm-0 mb-4 apply-now-btn"
                                title="Consult with a pro"
                                onClick={() => {
                                  setLeadNote('Consult with a pro - Course Page - Fee structure of this program');
                                  setDownloadCrs(false);
                                  setShowLeadModal(true);
                                  setLeadHeading('Consult with a pro');
                                }}
                              >
                                Consult with a pro
                              </button>
                            )}
                            {/* <div className="d-block ml-lg-28 ml-0 total-applied">
                          <Image
                            src={`${process.env.IMG_PATH}images/icons/trend-up-icon.svg`}
                            width={28}
                            height={28}
                            alt="trend-up"
                            className="img-fluid mr-12 w-size-lg-28 w-size-20"
                          />
                          <span className="fs-lg-16 fs-14 fw-400 lh-lg-24 lh-21 text-color-34">
                            254 already applied
                          </span>
                        </div> */}
                          </div>
                        )) ||
                          ''}
                      </li>
                      {/* <li className="px-lg-12 text-lg-start text-center">
                      <p className="fs-12 fw-400 lh-18 text-color-7 mb-0">
                        The Course Fee is payable through Net Banking and Credit/Debit Cards. With our Corporate
                        Financial Partnerships, you can avail Education Loans at 0% Interest Rate.*
                      </p>
                    </li> */}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

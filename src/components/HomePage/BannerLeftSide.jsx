'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { numberFormat } from '@/_helper/Common';
import HompageLead from './HompageLead';

export default function BannerLeftSide({ impactFullNumberData, handleButtonClick }) {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'bookDemo'}
        leadNote={'Book Demo - Homepage Banner'}
        leadHeading={leadHeading}
        setCourseSlug={setCourseSlug}
        courseSlug={courseSlug}
        setCategorySlug={setCategorySlug}
        categorySlug={categorySlug}
      />
      <AnimatePresence>
        <motion.div className="banner-info-wrapepr w-full max-w-xl-533 mr-lg-31">
          <div className="mb-lg-48">
            <motion.h1
              className="fs-40 fw-600 lh-48 text-color-2 mb-lg-32 mb-20"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, type: 'tween' }}
              viewport={{ once: true }}
            >
              Don’t Just Upskill, Get Career-ready, Get Hired
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, type: 'tween' }}
              viewport={{ once: true }}
              className="fs-18 fw-400 lh-28 mb-lg-0 mb-25 text-color-2"
            >
              Top Mentorship Programs in Tech, Marketing, & Data- Designed and Delivered by industry maestros.
            </motion.p>
          </div>
          <motion.ul className="list-unstyled d-flex mb-lg-48 mb-40">
            {impactFullNumberData?.instructors && (
              <motion.li
                className="mr-20 min-w-154"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
              >
                <div className="d-xl-flex align-items-center">
                  <div
                    className="img-box min-w-xl-48 min-w-40 w-size-48 min-h-xl-48 min-h-40 h-size-48 rounded-circle bg-color-2 common-box-shadow-2
             d-flex align-items-center justify-content-center mr-lg-14 hover-shadow-none transation-2"
                  >
                    <Image
                      src={process.env.IMG_PATH + `images/icons/instructors-icon.svg`}
                      width={20}
                      height={18}
                      alt="instruction-icon"
                      className=" img-fluid"
                    />
                  </div>
                  <div className="about-info">
                    <span className="fs-lg-20 fs-18 fw-400 lh-lg-30 lh-28 text-color-2 d-block mb-1">
                      {/* {numberFormat(impactFullNumberData?.instructors)} */}
                      1.5 Lakh +
                    </span>
                    <span className="fs-14 fw-600 lh-21 text-color-2 d-block text-capitalize">Aspirants Mentored</span>
                  </div>
                </div>
              </motion.li>
            )}
            {impactFullNumberData?.courses && (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
                className="mr-lg-20 mr-20 min-w-154"
                variants={itemVariants}
              >
                <div className="d-xl-flex align-items-center">
                  <div
                    className="img-box min-w-xl-48 min-w-40 w-size-48 min-h-xl-48 min-h-40 h-size-48 rounded-circle bg-color-2 common-box-shadow-2
             d-flex align-items-center justify-content-center mr-lg-14 hover-shadow-none transation-2"
                  >
                    <Image
                      src={process.env.IMG_PATH + `images/icons/courses-icon.svg`}
                      width={20}
                      height={18}
                      alt="instruction-icon"
                      className=" img-fluid"
                    />
                  </div>
                  <div className="about-info">
                    <span className="fs-lg-20 fs-18 fw-400 lh-lg-30 lh-28 text-color-2 d-block mb-1">
                      {/* {numberFormat(impactFullNumberData?.courses)}+
                       */}
                      1700+
                    </span>
                    <span className="fs-14 fw-600 lh-21 text-color-2 d-block text-capitalize">Cohorts Delivered </span>
                  </div>
                </div>
              </motion.li>
            )}
            {impactFullNumberData?.videos && (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
                className="mr-lg-20 mr-20 min-w-154"
                variants={itemVariants}
              >
                <div className="d-xl-flex align-items-center">
                  <div
                    className="img-box min-w-xl-48 min-w-40 w-size-48 min-h-xl-48 min-h-40 h-size-48 rounded-circle bg-color-2 common-box-shadow-2
             d-flex align-items-center justify-content-center mr-lg-14 hover-shadow-none transation-2"
                  >
                    <Image
                      src={process.env.IMG_PATH + `images/icons/videos-icon.svg`}
                      width={20}
                      height={18}
                      alt="instruction-icon"
                      className=" img-fluid"
                    />
                  </div>
                  <div className="about-info">
                    <span className="fs-lg-20 fs-18 fw-400 lh-lg-30 lh-28 text-color-2 d-block mb-1">
                      {/* {numberFormat(impactFullNumberData?.videos)}+  */}
                      40+
                    </span>
                    <span className="fs-14 fw-600 lh-21 text-color-2 d-block text-capitalize">Industry Mentors </span>
                  </div>
                </div>
              </motion.li>
            )}
          </motion.ul>
          <motion.div
            className="d-xl-flex"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, type: 'tween' }}
            viewport={{ once: true }}
          >
            <div className="position-relative mr-32 drak-fill-btn-wrapper">
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className="blue-fill-btn min-h-56 py-14 px-36 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow"
                onClick={handleButtonClick}
              >
                Explore Programs
              </motion.button>
            </div>
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setShowLeadModal(true);
                setLeadHeading('Book Mentor Session');
              }}
              className="common-white-btn orange-500-hover-shadow min-h-56 py-14 px-36 fs-18 fw-600 lh-27 rounded-12"
            >
              Book Mentor Session
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

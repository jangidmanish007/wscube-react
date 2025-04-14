/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BannerRightSide() {
  return (
    <AnimatePresence>
      <motion.div
        className="position-relative banner-right-side-wrapper w-full max-w-606 px-2xl-80 px-70 d-xl-block d-none pt-40"
        // initial={{ scale: 0.6 }}
        // whileInView={{ scale: 1 }}
        // transition={{ delay: 0.1, duration: 0.3, type: 'tween' }}
      >
        {/* first row */}
        <div className="position-relative mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="banner-lg-layer-1 position-absolute "
          >
            <Image
              src={process.env.IMG_PATH + `images/bg-layers/banner-bg-layer-1.svg`}
              width={58}
              height={58}
              alt="bg-star"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="banner-lg-layer-2 position-absolute z-1"
          >
            <Image
              src={process.env.IMG_PATH + `images/bg-layers/bg-star-2.svg`}
              width={32}
              height={32}
              alt="bg-star"
            ></Image>
          </motion.div>
          <div className="d-flex first-row justify-content-center align-items-end">
            <div className="banner-img-box-wrapper position-relative mr-31 cursor-pointer">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-120 w-size-lg-125 w-size-100 h-size-2xl-120
                 h-size-lg-125 h-size-100 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-image-1.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
              {/* <div
                className="position-absolute mentor-dropdown-info w-100 max-w-227 min-w-227 rounded-12 bg-color-2
             opacity-0 d-none p-16 border-w-2 border-color-17 common-box-shadow"
              >
                <p className="fs-12 fw-400 lh-18 text-color-10 mb-12">
                  I was able to learn many new concepts & gained expertise in marketing along with new Job with 70%
                  hike.
                </p>
                <ul className="d-flex list-unstyled text-color-10 fs-11 fw-400 lh-17 mb-12">
                  <li className="fw-600">Aarshi Agrawal</li>
                  <li className="px-1">|</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="company-logo">
                  <Image
                    src={process.env.IMG_PATH + `images/home-images/company-logo/banner-wallmart-logo.svg`}
                    width={83}
                    height={20}
                    alt="copany-logo"
                    className="img-fluid"
                  />
                </div>
              </div> */}
            </div>
            <div className="banner-img-box-wrapper position-relative mr-38">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-104 w-size-lg-118 w-size-100 
                h-size-2xl-104 h-size-lg-118 h-size-100 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-2.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </div>
            <div className="banner-img-box-wrapper position-relative mr-58">
              {/* <div
                className="position-absolute mentor-dropdown-info w-100 max-w-227 min-w-227 rounded-12 bg-color-2
             opacity-0 d-none p-16 border-w-2 border-color-17 common-box-shadow"
              >
                <p className="fs-12 fw-400 lh-18 text-color-10 mb-12">
                  I was able to learn many new concepts & gained expertise in marketing along with new Job with 70%
                  hike.
                </p>
                <ul className="d-flex list-unstyled text-color-10 fs-11 fw-400 lh-17 mb-12">
                  <li className="fw-600">Aarshi Agrawal</li>
                  <li className="px-1">|</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="company-logo">
                  <Image
                    src={process.env.IMG_PATH + `images/home-images/company-logo/banner-wallmart-logo.svg`}
                    width={83}
                    height={20}
                    alt="copany-logo"
                    className="img-fluid"
                  />
                </div>
              </div> */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-86 w-size-lg-94 w-size-80 h-size-2xl-86
                 h-size-lg-94 h-size-80 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-3.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="second-row-wrapper position-relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="banner-lg-layer-3 position-absolute z-1 star-animation-1"
          >
            <Image
              src={process.env.IMG_PATH + `images/bg-layers/bg-star-1.svg`}
              width={29}
              height={29}
              alt="bg-star"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="course-name-box-1 d-flex mb-auto position-absolute animate-lavenderCursor-1"
          >
            <div className="bg-color-2 py-12 px-16 rounded-pill border-w-2 border-color-1 fs-12 fw-600 lh-18 text-color-1 mr-2">
              Python
            </div>
            <div className="arrow-img mt-1">
              <Image
                src={process.env.IMG_PATH + `images/icons/banner-arrow-icon.svg`}
                width={13}
                height={11}
                alt="bnner-arrow"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="course-name-box-2 mb-auto position-absolute animate-lavenderCursor-2"
          >
            <div className="bg-color-2 py-12 px-16 rounded-pill border-w-2 border-color-1 fs-12 fw-600 lh-18 text-color-1">
              Full Stack Development
            </div>
            <div className="arrow-img full-stack-arrow text-end">
              <Image
                src={process.env.IMG_PATH + `images/icons/banner-arrow-icon.svg`}
                width={13}
                height={11}
                alt="bnner-arrow"
              />
            </div>
          </motion.div>
          <div className="d-flex align-items-end ml-0">
            <div className="banner-img-box-wrapper-2 position-relative mr-14">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-81 w-size-lg-87 w-size-67 h-size-2xl-81 h-size-lg-87
                 h-size-67 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-4.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
              {/* <div
                className="position-absolute mentor-dropdown-info w-100 max-w-227 min-w-227 rounded-12 bg-color-2
             opacity-0 d-none p-16 border-w-2 border-color-17 common-box-shadow"
              >
                <p className="fs-12 fw-400 lh-18 text-color-10 mb-12">
                  I was able to learn many new concepts & gained expertise in marketing along with new Job with 70%
                  hike.
                </p>
                <ul className="d-flex list-unstyled text-color-10 fs-11 fw-400 lh-17 mb-12">
                  <li className="fw-600">Aarshi Agrawal</li>
                  <li className="px-1">|</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="company-logo">
                  <Image
                    src={process.env.IMG_PATH + `images/home-images/company-logo/banner-wallmart-logo.svg`}
                    width={83}
                    height={20}
                    alt="copany-logo"
                    className="img-fluid"
                  />
                </div>
              </div> */}
            </div>
            <div className="banner-img-box-wrapper-2 position-relative mr-26">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-104 w-size-lg-118 w-size-100 h-size-2xl-104
                 h-size-lg-118 h-size-100 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-5.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
              {/* <div
                className="position-absolute mentor-dropdown-info w-100 max-w-227 min-w-227 rounded-12 bg-color-2
             opacity-0 d-none p-16 border-w-2 border-color-17 common-box-shadow"
              >
                <p className="fs-12 fw-400 lh-18 text-color-10 mb-12">
                  I was able to learn many new concepts & gained expertise in marketing along with new Job with 70%
                  hike.
                </p>
                <ul className="d-flex list-unstyled text-color-10 fs-11 fw-400 lh-17 mb-12">
                  <li className="fw-600">Aarshi Agrawal</li>
                  <li className="px-1">|</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="company-logo">
                  <Image
                    src={process.env.IMG_PATH + `images/home-images/company-logo/banner-wallmart-logo.svg`}
                    width={83}
                    height={20}
                    alt="copany-logo"
                    className="img-fluid"
                  />
                </div>
              </div> */}
            </div>
            <div className="banner-img-box-wrapper-2 position-relative">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-92 w-size-lg-102 w-size-lg-82 h-size-2xl-92
                 h-size-lg-102 h-size-lg-82 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-6.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
              {/* <div
                className="position-absolute mentor-dropdown-info w-100 max-w-227 min-w-227 rounded-12 bg-color-2
             opacity-0 d-none p-16 border-w-2 border-color-17 common-box-shadow"
              >
                <p className="fs-12 fw-400 lh-18 text-color-10 mb-12">
                  I was able to learn many new concepts & gained expertise in marketing along with new Job with 70%
                  hike.
                </p>
                <ul className="d-flex list-unstyled text-color-10 fs-11 fw-400 lh-17 mb-12">
                  <li className="fw-600">Aarshi Agrawal</li>
                  <li className="px-1">|</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="company-logo">
                  <Image
                    src={process.env.IMG_PATH + `images/home-images/company-logo/banner-wallmart-logo.svg`}
                    width={83}
                    height={20}
                    alt="copany-logo"
                    className="img-fluid"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* third row */}
        <div className="third-row-wrapper position-relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="banner-lg-layer-4 position-absolute z-1 star-animation-1"
          >
            <Image
              src={process.env.IMG_PATH + `images/bg-layers/bg-star-3.svg`}
              width={43}
              height={43}
              alt="bg-star"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="course-name-box-3 position-absolute animate-lavenderCursor-3"
          >
            <div className="bg-color-2 py-12 px-16 rounded-pill border-w-2 border-color-1 fs-12 fw-600 lh-18 text-color-1">
              Performance Marketing
            </div>
            <div className="arrow-img digital-arrow">
              <Image
                src={process.env.IMG_PATH + `images/icons/banner-arrow-icon.svg`}
                width={13}
                height={11}
                alt="bnner-arrow "
                className="rotate-96"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="course-name-box-4 mb-auto position-absolute text-end animate-lavenderCursor-1"
          >
            <div className="arrow-img data-science-arrow">
              <Image
                src={process.env.IMG_PATH + `images/icons/banner-arrow-icon.svg`}
                width={13}
                height={11}
                alt="bnner-arrow "
                className="rotate-96"
              />
            </div>
            <span className="bg-color-2 py-12 px-16 rounded-pill border-w-2 border-color-1 fs-12 fw-600 lh-18 text-color-1 d-block">
              Data Analytics
            </span>
          </motion.div>
          <div className="d-flex justify-content-center ml-44 align-items-center">
            <div className="banner-img-box-wrapper-3 position-relative mr-30">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-72 w-size-lg-75 
                w-size-55 h-size-2xl-72 h-size-lg-75 h-size-55 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-7.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </div>
            <div className="banner-img-box-wrapper-3 position-relative mr-30">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-123 w-size-lg-132 w-size-100 h-size-2xl-123
                 h-size-lg-132 h-size-100 bg-color-2  border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-8.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </div>
            <div className="banner-img-box-wrapper-3 position-relative">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mentor-img-box rounded-circle w-size-2xl-89
                 w-size-lg-98 w-size-78 h-size-2xl-89 h-size-lg-98 h-size-78 bg-color-2 border-w-2 border-color-2 common-box-shadow position-relative"
              >
                <div className="position-absolute bottom-0 banner-img-position">
                  <img
                    src={process.env.IMG_PATH + `images/home-images/banner-images/banner-img-9.webp`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

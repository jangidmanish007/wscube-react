'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { animationFromLeft } from '@/_utils/Animation';

export default function CourseSchedule() {
  return (
    <section className="pt-lg-112 pt-64 cohort-section overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="d-xl-flex justify-content-between grid-gap-60">
            <div className="w-full max-w-xl-476 mr-xl-20 mb-xl-90 mb-md-44 mb-34">
              <motion.div
                initial={animationFromLeft.initial}
                whileInView={animationFromLeft.whileInView}
                transition={animationFromLeft.transition}
                viewport={{ once: true }}
                className="section-info text-color-1 text-xl-start text-center"
              >
                <h2 className="fs-32 fw-600 lh-48 mb-16 text-color-2">Find out when the starting cohort will be...</h2>
                <p className="fs-14 fw-400 lh-21 text-color-2 mb-xl-56 mb-36">
                  Lorem ipsum dolor sit amet consectetur. Netus odio odio pretium morbi at sed.
                </p>
                <button className="fs-lg-18 fs-16 fw-600 lh-27 min-h-56 rounded-12 border-w-2 border-color-24 bg-color-24 px-29 hover-shadow-4">
                  View Schedule
                </button>
              </motion.div>
            </div>
            <div className="cohort-right-side w-full min-w-lg-522 max-w-lg-522 min-w-300 max-w-319 pt-lg-40 mx-xl-0 mx-auto">
              <ul className="list-unstyled mb-0">
                <li className="d-block course-schedule-card text-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                          className=""
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">Cyber Security</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="d-block course-schedule-card text-end">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0.1,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">App Development</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="d-block course-schedule-card text-start">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0.1,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">Digital Marketing</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="d-block course-schedule-card text-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0.1,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">Cyber Security</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="d-block course-schedule-card text-start">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.3,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0.1,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">Web Development</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="d-block course-schedule-card text-end">
                  <motion.div
                    initial={{ scale: 1 }}
                    // animate={{
                    //   scale: [1, 1.08, 1],
                    // }}
                    whileHover={{ scale: [null, 1.12, 1.12] }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                      // times: [0, 0.5, 1],
                      // repeat: Infinity,
                      // repeatDelay: 0,
                      delay: 0.1,
                    }}
                    className="d-inline-block bg-color-35 rounded-pill py-md-12 py-8 px-md-20 px-12 text-start cursor-pointer"
                  >
                    <div className="d-flex align-items-center content-opacity">
                      <div className="img-box mr-6">
                        <Image
                          src={`${process.env.IMG_PATH}/images/icons/clock-white-outline.svg`}
                          width={16}
                          height={16}
                          alt="clock-icon"
                        />
                      </div>
                      <div className="about-course-start">
                        <h3 className="fs-11 fw-600 lh-12 text-color-2 mb-1 course-name">Cyber Security</h3>
                        <p className="fs-8 lh-12 fw-400 text-color-2 mb-0 batch-time">08:00 PM to 09:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

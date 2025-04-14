import React from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

const LiveCoursesSlider = dynamic(import('./LiveCoursesSlider'));

export default function LiveCourses() {
  return (
    <section className="py-108 overflow-hidden position-relative master-classes-section d-none d-lg-block">
      <AnimatePresence>
        <div>
          <div className="d-lg-flex align-items-center justify-content-xl-end">
            <div className="master-classes-info max-w-lg-377 min-w-lg-377 mr-lg-44 text-lg-start text-center">
              <motion.h2
                initial={{ opacity: 0, x: 0, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
                className="fs-32 fw-600 lh-40 text-color-1 mb-16"
              >
                Live Courses
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
                className="fs-14 fw-400 lh-21 mb-lg-49 mb-25 text-color-7"
              >
                Intensive expert-led sessions providing advanced instruction in specific topics/skills.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-lg-end text-center mb-24"
              >
                <div className="fs-14 fw-600 lh-21 text-color-3 d-inline-block cursor-pointer">
                  <span className="">See all live courses</span>
                  <FontAwesomeIcon icon={faChevronRight} width={20} height={20} />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
              viewport={{ once: true }}
              className="master-classes-slider-wrapper"
            >
              <LiveCoursesSlider />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}

'use client';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import MasterClassesCard from './MasterClassesCard';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MainMasterClasses({ masterClassData }) {
  return (
    <section className="py-lg-138 py-65 overflow-hidden position-relative master-classes-section ">
      <AnimatePresence>
        <div className="d-lg-flex align-items-center justify-content-xl-end">
          <MotionConfig>
            <motion.div className="master-classes-info max-w-lg-377 min-w-lg-377 mr-lg-40 mb-lg-50 text-lg-start text-center">
              <motion.h2
                className="fs-32 fw-600 lh-40 text-color-1 mb-16"
                initial={{ opacity: 0, x: 0, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                viewport={{ once: true }}
              >
                Free Masterclasses
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                className="fs-14 fw-400 lh-21 mb-lg-49 mb-25 text-color-7"
                viewport={{ once: true }}
              >
                Expert-led, interactive live sessions designed to deepen your knowledge and skills in your chosen domain
                of interest.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
                className="text-lg-end text-center mb-28"
                viewport={{ once: true }}
              >
                <Link href={'/events'}>
                  <div className="fs-14 fw-600 lh-21 text-color-3 d-inline-block cursor-pointer">
                    <span className="">See all master classes</span>
                    <FontAwesomeIcon icon={faChevronRight} width={20} height={20} className="fs-13 mt-1" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
              viewport={{ once: true }}
              className="master-classes-slider-wrapper"
            >
              <MasterClassesCard masterClassData={masterClassData} />
            </motion.div>
          </MotionConfig>
        </div>
      </AnimatePresence>
      {/* <section className="py-138 overflow-hidden">
      <div className="position-relative min-h-454 my-auto">
        <div className="m-auto h-100" style={{ maxWidth: '1370px' }}>
          <div className="master-classes-info max-w-lg-428 min-w-lg-428 mr-lg-44 text-lg-start text-center">
            <h2 className="fs-40 fw-700 lh-48 text-color-1 mb-16">Master Classes</h2>
            <p className="fs-16 fw-400 lh-24 mb-46 text-color-7">
              Intensive expert-led sessions providing advanced instruction in specific topics/skills.
            </p>
            <div className="text-end">
              <div className="fs-14 fw-600 lh-21 text-color-3 d-inline-block cursor-pointer">
                <span className="">See all master classes</span>
                <FontAwesomeIcon icon={faChevronRight} width={20} height={20} />
              </div>
            </div>
          </div>
          
        </div>
        <MasterClassesCard />
      </div>
    </section> */}
    </section>
  );
}

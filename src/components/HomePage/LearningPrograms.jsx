'use client';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HompageLead from './HompageLead';

export default function LearningPrograms() {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');
  const [courseSlug, setCourseSlug] = useState('');

  const exploreCoursesData = [
    { id: 1, course_name: 'Web Development', slug: '/full-stack-developer-course', image: 'images/home-images/learn-web-dev.svg' },
    {
      id: 2,
      course_name: 'App Development',
      slug: '/mobile-app-development-course',
      image: 'images/home-images/app-development-icon.svg',
    },
    { id: 3, course_name: 'Data Analytics', slug: '/data-analytics-course', image: 'images/home-images/data-science-icon.svg' },
    {
      id: 4,
      course_name: 'Digital Marketing',
      slug: '/marketing',
      image: 'images/home-images/digital-marketing-icon.svg',
    },
    {
      id: 5,
      course_name: 'Cyber Security',
      slug: '/cyber-security',
      image: 'images/home-images/cyber-security-icon.svg',
    }
    // { id: 6, course_name: 'Design', slug: '/design', image: 'images/home-images/design-icon.svg' },
  ];

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'bookDemo'}
        leadHeading={leadHeading}
        setCourseSlug={setCourseSlug}
        courseSlug={courseSlug}
      />
      <section className="pt-108 pb-84 learning-programs-section">
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="row programs-row">
              <div className="col-lg-6 mb-4 d-lg-flex align-items-center programs-column">
                <div className="max-w-lg-476">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                    className="text-white fs-32 fw-600 lh-48 mb-16"
                    viewport={{ once: true }}
                  >
                    Explore Top Career Domains
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                    className="text-white fs-14 lh-21 fw-400 mb-24"
                    viewport={{ once: true }}
                  >
                    Discover career paths that truly resonate with your passion & explore mentorship programs that align
                    perfectly with you.
                  </motion.p>
                  {/* <motion.button
                    initial={{ scale: 1, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="d-none d-lg-inline outline-none fs-16 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-46 px-27"
                    onClick={() => setShowLeadModal(true)}
                  >
                    Join for Free
                  </motion.button> */}
                </div>
              </div>
              {exploreCoursesData?.map((item, index) => (
                <div className="col-lg-3 col-6 mb-lg-4 mb-3 programs-column" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: index / 10, duration: 0.3, type: 'tween' } }}
                    whileHover={{ y: -10, transition: { duration: 0.3, type: 'tween' } }}
                    viewport={{ once: true }}
                    className="bg-white rounded-24 l-program-card border-w-2 min-h-276 w-100 d-flex align-items-center justify-content-center py-lg-0 py-20 px-lg-0 px-24"
                  >
                    <div className="text-center">
                      <Image
                        src={`${process.env.IMG_PATH}${item?.image}`}
                        width={80}
                        height={80}
                        alt="Icon"
                        className="img-fluid mb-lg-16 mb-12 w-lg-80 w-60"
                      />
                      <h3 className="fw-600 fs-lg-20 fs-14 mb-lg-16 mb-12 text-color-1">{item?.course_name}</h3>
                      <Link href={item?.slug} className="">
                        <motion.span
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.7 }}
                          transition={{ duration: 0.2 }}
                          className="d-block text-color-3 fs-lg-14 fs-10  lh-21 fw-400"
                        >
                          See Programs
                          <FontAwesomeIcon icon={faChevronRight} className="ms-1 fs-lg-11 fs-10" height={10} />
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* <div className="col-12 d-block d-lg-none text-center mt-4">
                <motion.button
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="outline-none fs-16 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-46 px-27"
                >
                  Join for Free
                </motion.button>
              </div> */}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

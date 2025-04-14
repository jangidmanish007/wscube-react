'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FreeResources() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const icons = [
    '/images/home-images/pdf-icon.svg',
    '/images/home-images/videos-icon.svg',
    '/images/home-images/adob-icon.svg',
    '/images/home-images/doubts-icon.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="pb-80 pt-lg-180 pt-180 home-free-resource">
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="d-lg-flex align-items-center w-100 justify-content-between">
              <div className="max-w-2xl-379 max-w-lg-340">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                  className="fw-lg-600 fw-700 fs-32 lh-40  text-color-1 mb-24"
                  viewport={{ once: true }}
                >
                  Upskill with our Free Resources
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                  className="fs-16 lh-24 text-color-7 mb-lg-50 mb-20"
                  viewport={{ once: true }}
                >
                  Engage and excel with our diverse collection of free learning resources, from quizzes to e-books and
                  interactive challenges- designed to lift your career at zero cost!
                </motion.p>
                <Link href={'/resources'}>
                  <motion.button
                    initial={{ scale: 1, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="blue-fill-btn d-none d-lg-inline min-h-68 py-20 px-lg-60 px-30 fs-18 fw-600 lh-27 rounded-16 orange-hover-shadow"
                  >
                    Explore Now
                  </motion.button>
                </Link>
              </div>
              <div className="free-resources d-lg-flex w-100 align-items-center mb-40 pl-xl-0 pl-40">
                <div className="pulse-animate">
                  <div className="bg-pulse"></div>
                  <div className="button-pulse">
                    {icons.map((icon, index) => (
                      <Image
                        key={index}
                        src={icon}
                        width={index === currentIconIndex ? 60 : 0} // Show current icon, hide others
                        height={index === currentIconIndex ? 60 : 0}
                        alt="icon"
                        className={(index === currentIconIndex && 'img-fluid pulse-img') || 'img-fluid'}
                        style={{
                          transition: 'width 0.5s, height 0.5s', // Add transition effect
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="resources-capsules w-100">
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-0 mr-163"
                  >
                    Interview Bites
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-16 mr-60"
                  >
                    Quizzes
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
            d-block ms-auto mt-29 mr-125"
                  >
                    Articles
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-20 mr-210"
                  >
                    eBooks
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-26 mr-11"
                  >
                    Interactive Challenges
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-36 mr-70"
                  >
                    Courses
                  </motion.button>
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="fs-18 lh-27 fw-400 outline-none bg-white w-max-content px-4 reverse-shadow-4
             d-block ms-auto mt-17 mr-245"
                  >
                    Tools
                  </motion.button>
                </div>
              </div>
              <Link href={'/resources'} className="d-inline-block">
                <motion.button
                  initial={{ scale: 1, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="blue-fill-btn d-block d-lg-none min-h-48 py-10 px-lg-60 px-30 fs-18 fw-500 lh-27 rounded-16 orange-hover-shadow"
                >
                  Explore Now
                </motion.button>
              </Link>
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

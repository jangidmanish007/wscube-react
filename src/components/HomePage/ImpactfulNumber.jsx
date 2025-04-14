'use client';
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatNumberCount } from '@/_helper/Common';

export default function ImpactfulNumber({ impactFullNumbersData }) {
  return (
    <section className="py-80 home-numbers-section">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="row">
            <div className="col-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                viewport={{ once: true }}
                className="text-center col-12"
              >
                <h2 className="fs-32 lh-48 fw-lg-600 fw-700 text-color-1 mb-16">Our Impact Numbers</h2>
                <p className="fs-14 lh-21 fw-400 text-color-7 mb-40">
                  Join our rapidly growing learning community and acquire real-world skills.
                </p>
              </motion.div>
              <div className="d-lg-flex align-items-stretch mx-auto grid-gap-28 max-w-1060">
                <div className="w-100 max-w-440 mr-lg-28 mx-lg-0 mx-auto">
                  <motion.div
                    initial={{ opacity: 0.3, y: -10 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.1, type: 'tween' } }}
                    whileHover={{ y: -4, transition: { duration: 0.1, type: 'tween' } }}
                    viewport={{ once: true }}
                    className="students-trained mb-20 border-w border-color-1 w-100 rounded-24 reverse-shadow-4 p-lg-34 p-20 text-white"
                  >
                    <span className="fw-600 fs-40 pb-6">
                      {formatNumberCount(impactFullNumbersData?.students_trained)}+
                    </span>
                    <h3 className="fw-600 fs-22 mb-lg-20 mb-12">Students Trained</h3>
                    <p className="m-0 fs-14">
                      Empowering futures through skilled students trained by our EdTech expertise
                    </p>
                  </motion.div>
                  <div className="row align-items-stretch">
                    <div className="col-6">
                      <motion.div
                        initial={{ opacity: 0.3, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.1, type: 'tween' } }}
                        whileHover={{ y: -4, transition: { duration: 0.1, type: 'tween' } }}
                        viewport={{ once: true }}
                        className="interns-number border-w border-color-1 w-100 rounded-24 reverse-shadow-4 py-lg-36 py-20 text-white"
                      >
                        <Image
                          src={process.env.IMG_PATH + 'images/home-images/interns-icon.svg'}
                          alt="icon"
                          className="img-fluid mb-12"
                          width={40}
                          height={44}
                        />
                        <span className="fw-600 fs-32 pb-lg-6 d-block">
                          {formatNumberCount(impactFullNumbersData?.interns)}+
                        </span>
                        <h3 className="fw-600 fs-18 mb-0 mt-lg-0 mt-1">Interns</h3>
                      </motion.div>
                    </div>
                    <div className="col-6">
                      <motion.div
                        initial={{ opacity: 0.3, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.1, type: 'tween' } }}
                        whileHover={{ y: -4, transition: { duration: 0.1, type: 'tween' } }}
                        viewport={{ once: true }}
                        className="domains-number border-w border-color-1 w-100 rounded-24 reverse-shadow-4 py-lg-36 py-20 text-white"
                      >
                        <Image
                          src={process.env.IMG_PATH + 'images/home-images/comains-icon.svg'}
                          alt="icon"
                          className="img-fluid mb-12"
                          width={40}
                          height={44}
                        />
                        <span className="fw-600 fs-32 pb-lg-6 d-block">
                          {formatNumberCount(impactFullNumbersData?.traning_domains)}+
                        </span>
                        <h3 className="fw-600 fs-18 mb-0 mt-lg-0 mt-1">Training Domains</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0.3, y: -10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.1, type: 'tween' } }}
                  whileHover={{ y: -4, transition: { duration: 0.1, type: 'tween' } }}
                  viewport={{ once: true }}
                  className="learners-yt mt-lg-0 mt-4 w-100 max-w-440 max-w-xl-592 mx-lg-0 mx-auto d-flex align-items-end justify-content-center pb-lg-45 pb-22 text-center rounded-24 reverse-shadow-4 border-w border-color-1"
                >
                  <div>
                    <span className="fs-lg-58 fs-32 fw-lg-600 fw-700 lh-lg-70 lh-44 text-color-1 mb-1">
                      {formatNumberCount(impactFullNumbersData?.learners_on_youtube)}+
                    </span>
                    <h3 className="fs-lg-25 fs-18 lh-28 lh-lg-37 fw-600 text-color-1 mb-lg-13 mb-2">
                      Learners On <span className="text-color-11">YouTube</span>
                    </h3>
                    <motion.a
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2, type: 'tween' } }}
                      href="https://www.youtube.com/@wscubetech"
                      target="blank"
                      style={{ color: '#4568F2' }}
                      className="fs-16 d-block"
                    >
                      @wscubetech | {formatNumberCount(impactFullNumbersData?.youtube_videos)} Videos
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

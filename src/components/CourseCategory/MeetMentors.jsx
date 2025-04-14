/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function MeetMentors({ mentorsData, headingData }) {
  return (
    <section className="py-80 meet-mentors-section">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="row">
            <div className="col-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                className="text-center col-12"
              >
                <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-16">{headingData?.title}</h2>
                <p className="fs-14 fw-400 lh-21 mb-30 mb-lg-50 text-color-7">{headingData?.tagline}</p>
              </motion.div>
              <div className="d-flex meet-mentors-list pt-lg-0 pt-3 scrollbar-hidden flex-lg-wrap grid-gap-lg-48 grid-gap-32  justify-content-lg-center max-w-lg-956 mx-auto">
                {mentorsData?.map((items, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index / 10, duration: 0.3, type: 'tween' },
                    }}
                    whileHover={{ y: -10, transition: { duration: 0.3, type: 'tween' } }}
                    className="text-center max-w-200 min-w-200 m-lg-0 mr-7 mentore-box-wrapper"
                    viewport={{ once: true }}
                    key={index}
                  >
                    <div className="rounded-8 reverse-shadow-4 border-w border-color-1 position-relative meet-mentor-card mb-lg-28 mb-16">
                      {/* <a
                        href="https://www.linkedin.com/"
                        target="blank"
                        className="text-text-decoration-none d-block w-max-content position-absolute"
                      >
                        <Image
                          src={'/images/categories/linkedin-icon.svg'}
                          width={24}
                          height={24}
                          alt="Linkedin"
                          className="img-fluid"
                        />
                      </a> */}
                      {items?.profile_pic && (
                        <Image
                          src={`${process.env.IMG_PATH}${items?.profile_pic}`}
                          width={200}
                          height={200}
                          alt="Mentore"
                          className="img-fluid rounded-8 mentor-img"
                        />
                      )}
                    </div>
                    <h3 className="fs-lg-20 fs-16 fw-600 text-color-1 lh-lg-30 lh-24 mb-1">{items?.mentor_name}</h3>
                    <p className="fs-16 lh-24 text-color-10 mb-0">{items?.designation_text}</p>
                    <div className="img-box d-flex align-items-center min-h-80 justify-content-center">
                      <Image
                        src={`${process.env.IMG_PATH}${items?.organization_img_url}`}
                        width={90}
                        height={80}
                        alt="organization-image"
                        className="img-fluid"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

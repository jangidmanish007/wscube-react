import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { AnimatePresence, motion } from 'framer-motion';
import parse from 'html-react-parser';

export default function CourseFeatures({ heading, subHeading, features, description }) {
  return (
    <section className="who-can-apply-section py-lg-80 py-64">
      <AnimatePresence>
        <div className="container-main container-w-xl-1202 px-xl-16 mobile-container-p-0">
          <div className="d-xl-flex mb-xl-60 mb-40">
            <motion.div
              className="section-info w-size-full max-w-xl-318 mr-xl-20 text-xl-start text-center mb-xl-0 mb-40 px-xl-0 px-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35, type: 'tween' }}
              viewport={{ once: true }}
            >
              <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-16">{heading || 'Who can apply for the course?'}</h2>
              {/* <p className="fs-14 fw-400 lh-21 text-color-7">
                {subHeading || 'Highlighting the Best Course Features.'}
              </p> */}
            </motion.div>
            <div className="w-full max-w-xl-832 who-apply-card-wrapper">
              <Marquee pauseOnHover autoFill speed={25}>
                {features?.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: -15 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index / 10, duration: 0.2, type: 'tween' },
                      }}
                      viewport={{ once: true }}
                      className="mb-6"
                      key={index}
                    >
                      <div className="border-w-2 border-color-1 rounded-14 p-14 hover-shadow-4 max-w-156 min-h-200 mx-10">
                        <div className="p-0 text-center">
                          <div className="img-box mb-10 text-center">
                            <Image
                              src={`${process.env.IMG_PATH}${item?.feature_img_url}`}
                              width={127}
                              height={96}
                              className="rounded-9 img-fluid w-full"
                              alt={(item?.feature_title).toLowerCase()}
                            />
                          </div>
                          <span className="fs-14 fw-600 lh-21 text-color-1 text-center">{item?.feature_title}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </Marquee>
            </div>
          </div>
          <div className="px-xl-0 px-16">
            <div className="fs-14 fw-400 lh-21 text-color-7 mb-0 text-xl-start text-center">
              {description && parse(description)}
            </div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}

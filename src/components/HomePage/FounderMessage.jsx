/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';

export default function FounderMessage({ homeMentorsData }) {
  return (
    <section className="pt-lg-80 pt-80 pb-lg-0 pb-44 founder-section">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="d-lg-flex min-h-xl-517">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.2, type: 'tween' } }}
              viewport={{ once: true }}
              className="w-100 max-w-550 min-w-xl-550 d-none d-lg-block founder-img-box position-relative"
            >
              <div className="center-shadow left-shadow"></div>
              <Image
                src={process.env.IMG_PATH + 'images/home-images/founder-image.webp'}
                alt="Founder"
                className="rounded-24 img-fluid  w-100"
                width={598}
                height={562}
              />
              {/* <div className="center-shadow"></div>
              <div className="position-absolute top-50 start-50 plus-outline-btn cursor-pointer rounded-circle">
                <Image
                  src={process.env.IMG_PATH + `images/icons/play-fill-icon.svg`}
                  width={60}
                  height={60}
                  alt="banner-img"
                  className="img-fluid rounded-20 w-size-xl-90 w-size-50 h-size-xl-90 h-size-50"
                />
              </div> */}
            </motion.div>
            <div className="ml-xl-64 ml-lg-40 pt-3 founder-content max-w-xl-618 max-w-lg-500 min-w-lg-500">
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.2, type: 'tween' }}
                className="fs-32 lh-40 fw-lg-600 fw-700 text-color-1 mb-20"
                viewport={{ once: true }}
              >
                Founder’s Message
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.2, type: 'tween' }}
                className="fs-14 lh-21 text-color-7  mb-lg-14 mb-40"
                viewport={{ once: true }}
              >
                Our Mission is clear. We are building to train over 10 Crores of Career Aspirants living in
                under-resourced demographics of Bharat. We are tirelessly working to empower Career Seekers with
                Professional & Practical Tech/Non-tech Skills to help them compete globally for their dream career
                opportunities. Ab har career aspirant seekhega top professional skills! Kahi bhi, kabhi bhi! WsCube Tech
                ke sath, Aapke sapno ki udaan ab hogi aasan!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.2, type: 'tween' }}
                className="fs-16 lh-24 text-color-7 mb-12 pb-12 border-bottom d-lg-block d-none"
                viewport={{ once: true }}
              >
                Kushagra Bhatia
              </motion.p>
              <div className="w-100 mt-2 founder-img-box position-relative d-lg-none">
                <Image
                  src={process.env.IMG_PATH + 'images/home-images/founder-image.webp'}
                  alt="Founder"
                  className="rounded-24 img-fluid w-full"
                  width={598}
                  height={562}
                />
                {/* <div className="position-absolute top-50 start-50 plus-outline-btn cursor-pointer rounded-circle">
                  <Image
                    src={process.env.IMG_PATH + `images/icons/play-fill-icon.svg`}
                    width={60}
                    height={60}
                    alt="banner-img"
                    className="img-fluid rounded-20 w-size-xl-90 w-size-50 h-size-xl-90 h-size-50"
                  />
                </div> */}
              </div>
              <h2 className="fs-22 fw-600 text-color-1 d-lg-block d-none">Meet the Mentors</h2>
            </div>
          </div>
        </AnimatePresence>
      </div>
      {homeMentorsData?.length > 0 && (
        <Marquee
          pauseOnHover
          autoFill
          speed={25}
          className="pt-3 align-items-start h-size-225 overflow-hidden mentors-row"
        >
          {homeMentorsData?.map((mentor, index) => (
            <div key={index} className="ms-3 home-mentors position-relative rounded-12 text-center">
              {mentor?.profile_pic && (
                <Image
                  src={`${process.env.IMG_PATH}${mentor?.profile_pic}`}
                  alt="Mentor"
                  className="rounded-12 img-fluid"
                  width={140}
                  height={140}
                />
              )}
              <h4 className="text-color-1 fw-600 fs-16 mb-6 mt-6">{mentor?.mentor_name}</h4>
              {/* <p className="fs-12 text-color-7 mb-0">{mentor?.experience} yrs of Exp.</p> */}
            </div>
          ))}
        </Marquee>
      )}
    </section>
  );
}

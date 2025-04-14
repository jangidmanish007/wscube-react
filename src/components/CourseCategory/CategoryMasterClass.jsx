/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import useCountdownTimer from '../MasterClass/MasterClassDetails/useCountdownTimer';

export default function CategoryMasterClass({ headingData, masterClassData }) {
  const masterData = masterClassData && masterClassData[0];
  const targetDate = masterClassData[0]?.class_start_datetime;
  const timeLeft = useCountdownTimer(targetDate);

  return (
    <section className="py-lg-80 py-64 cat-master-class">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="row">
            <motion.div className="col-12">
              <div className="text-center">
                <h2 className="fs-32 fw-700 lh-48 text-color-1 mb-16">{headingData?.title}</h2>
                <p className="text-color-7 fs-14 lh-21 mb-0">{headingData?.tagline}</p>
              </div>
              <div
                className="mt-52 category-master-class w-100 max-w-1058 rounded-24 mx-auto
                  border-w-2 border-color-1 position-relative overflow-hidden d-none d-lg-block"
              >
                <div className="w-100 bottom-0 start-0 master-mentor-bg position-absolute"></div>
                <div className="row align-items-end">
                  <div className="col-12">
                    <div className="pt-20 pl-42 text-start mb-7 d-flex align-items-center">
                      <span className="text-uppercase text-white fs-20 fw-700 mr-30">masterclass</span>
                      <span className="fs-12 text-white">
                        <Image
                          src={'/images/categories/white-ribbon.svg'}
                          width={14}
                          height={20}
                          alt="icon"
                          className="img-fluid me-1"
                        />
                        Certificate Provided
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="position-relative d-flex flex-column" style={{ zIndex: 10 }}>
                      {masterData?.Mentors[0]?.full_img_url && (
                        <motion.img
                          src={`${process.env.IMG_PATH}${masterData?.Mentors[0]?.full_img_url}`}
                          width={314}
                          height={381}
                          alt="icon"
                          className="img-fluid ml-42"
                        />
                      )}
                      <div className="text-white position-absolute py-12 pl-28 pr-43 text-start mentor-title start-0">
                        <span className="fs-14 lh-21 mb-1 fw-400">Mentored by</span>
                        <p className="fs-14 fw-400 lh-27 m-0">
                          {/* {masterData?.mentors[0]?.full_img_url} */}
                          <span className="fs-18 fw-600">{masterData?.Mentors[0]?.mentor_name}</span> Founder,
                          <span className="ms-1"> {masterData?.Mentors[0]?.organization}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex align-items-center">
                    <div className="position-relative pr-40 pb-48" style={{ zIndex: 10 }}>
                      <span className="fs-20 fw-600 text-white">Learn to create</span>
                      <h3 className="fs-28 fw-600 lh-42 text-white m-0">{masterData.class_title}</h3>
                      <p className="fs-14 lh-21 fw-400 mb-24 text-white">
                        Intensive expert-led sessions providing advanced instruction in specific topics/skills.
                      </p>
                      <div className="d-flex align-items-center mb-24">
                        <div className="bg-white border-w-2 master-batch-time border-color-1 rounded-40 lh-24 fs-16 text-color-1 fw-600 p-12 mr-14">
                          <Image
                            src={'/images/categories/calender.svg'}
                            width={20}
                            height={20}
                            alt="icon"
                            className="img-fluid me-2"
                          />
                          {moment(masterData?.class_start_datetime).format('Do MMM, ddd')}
                        </div>
                        <div className="bg-white border-w-2 master-batch-time border-color-1 rounded-40 lh-24 fs-16 text-color-1 fw-600 p-12 mr-14">
                          <Image
                            src={'/images/categories/clock.svg'}
                            width={20}
                            height={20}
                            alt="icon"
                            className="img-fluid me-2"
                          />
                          {moment(masterData?.class_start_datetime).format('hh:mm A')} -{' '}
                          {moment(masterData?.class_end_datetime).format('hh:mm A')}
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-24">
                        <div className="d-flex align-items-start">
                          <div className="text-center text-white mr-8">
                            <p className="m-0 fs-25 fw-600 lh-37">{String(timeLeft.days).padStart(2, '0')}</p>
                            <span className="fs-12 fw-400 lh-20">Days</span>
                          </div>
                          <div className="mr-10 fs-18 text-white lh-21 pt-6">:</div>
                          <div className="text-center text-white mr-8">
                            <p className="m-0 fs-25 fw-600 lh-37">{String(timeLeft.hours).padStart(2, '0')}</p>
                            <span className="fs-12 fw-400 lh-20">Hours</span>
                          </div>
                          <div className="mr-10 fs-18 text-white lh-21 pt-6">:</div>
                          <div className="text-center text-white mr-8">
                            <p className="m-0 fs-25 fw-600 lh-37">{String(timeLeft.minutes).padStart(2, '0')}</p>
                            <span className="fs-12 fw-400 lh-20">Minutes</span>
                          </div>
                        </div>
                        {/* <div className="d-lg-flex d-none align-items-center ml-28 enrolled-users max-w-100">
                          <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                            <Image
                              src={process.env.IMG_PATH + 'images/review-user.png'}
                              className="img-fluid"
                              alt="Image"
                              width={36}
                              height={36}
                            />
                          </div>
                          <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                            <Image
                              src={process.env.IMG_PATH + 'images/review-user.png'}
                              className="img-fluid"
                              alt="Image"
                              width={36}
                              height={36}
                            />
                          </div>
                          <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                            <Image
                              src={process.env.IMG_PATH + 'images/review-user.png'}
                              className="img-fluid"
                              alt="Image"
                              width={36}
                              height={36}
                            />
                          </div>
                        </div>
                        <p className="m-0 text-white lh-21 fs-14">
                          <span className="fw-600 mr-6">{formatNumberCount(masterData?.class_enrolled_count)}</span>
                          Enrolled
                        </p> */}
                      </div>
                      <Link href={`/events/${masterData?.slug_url}`}>
                        <button className="bg-color-24 outline-none rounded-12 hover-shadow-4 h-size-56 px-35 fs-18 lh-27 fw-600 text-color-1 border-0">
                          Register Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card d-lg-none mt-40 max-w-280 mx-auto text-center rounded-24 border-w-2 cursor-pointer overflow-hidden position-relative"
                style={{ borderRadius: '24px' }}
              >
                <Link href={`/events/${masterData?.slug_url}`} className="rounded-24">
                  <Image
                    src={`${process.env.IMG_PATH}${masterData?.class_full_thumbnail}`}
                    width={428}
                    height={460}
                    alt="image"
                    className="img-fluid w-100 rounded-24"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import HompageLead from './HompageLead';

export default function OurCenters({ centersData }) {
  const [activeCenter, setActiveCenter] = useState('jaipur');
  const [frnchId, setFrnchId] = useState('');
  const activeCenterData = centersData && centersData.find((center) => center.slug_url === activeCenter);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  useEffect(() => {
    if (activeCenterData) {
      setFrnchId(activeCenterData?.crm_center_id);
    }
  }, [activeCenterData]);

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'bookDemo'}
        leadNote={'Book Demo - Homepage - Our Career Schools'}
        frnchId={frnchId}
        leadHeading={leadHeading}
        courseSlug={courseSlug}
        setCourseSlug={setCourseSlug}
        categorySlug={categorySlug}
        setCategorySlug={setCategorySlug}
      />
      <section className="home-our-centers">
        <div className="w-100 h-100 pt-80 our-centers-container">
          <div className="container-main container-w-xl-1202">
            <AnimatePresence>
              <div className="row">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                  viewport={{ once: true }}
                  className="col-12 text-center"
                >
                  <h2 className="fs-32 lh-40 text-white fw-lg-600 fw-700 mb-16 center-heading">Our Career Schools</h2>
                  <p className="fs-14 lh-21 text-white mb-0">
                    Replicating online impact through offline centers city-by-city.
                  </p>
                </motion.div>
              </div>
              <div className="h-size-184 w-100 max-w-xl-1190 max-w-860 mt-lg-140 mt-50 ml-lg-18 center-stepper d-flex mb-40">
                <div
                  onClick={() => setActiveCenter('jaipur')}
                  className={`
            ${(activeCenter == 'jaipur' && 'active-center') || ''}
            center-card cursor-pointer user-select-none text-center min-w-116 w-max-content h-max-content p-lg-12 p-8 bg-white rounded-18 ms-xl-auto ml-110 jd-center`}
                >
                  <Image
                    src={process.env.IMG_PATH + 'images/home-images/jaipur-center.png'}
                    width={97}
                    height={97}
                    alt="Jaipur"
                    className="img-fluid rounded-14"
                  />
                  <h3 className="fs-16 fw-600 text-color-1 my-2">Jaipur</h3>
                  <p className="fs-10 text-color-1 mb-0">Rajasthan</p>
                </div>
                <div
                  onClick={() => setActiveCenter('jodhpur')}
                  className={`
            ${(activeCenter == 'jodhpur' && 'active-center') || ''}
            center-card cursor-pointer user-select-none text-center min-w-116 w-max-content h-max-content p-lg-12 p-8 bg-white rounded-18 ms-xl-auto ml-120 jp-center`}
                >
                  <Image
                    src={process.env.IMG_PATH + 'images/home-images/jodhpur-center.png'}
                    width={97}
                    height={97}
                    alt="Jodhpur"
                    className="img-fluid rounded-14"
                  />
                  <h3 className="fs-16 fw-600 text-color-1 my-2">Jodhpur</h3>
                  <p className="fs-10 text-color-1 mb-0">Rajasthan</p>
                </div>
                <div className="center-card user-select-none text-center min-w-116 w-max-content h-max-content p-lg-12 p-8 bg-white rounded-18 ms-auto mr-2xl-142 mr-xl-150 mr-110 cs-center">
                  <Image
                    src={process.env.IMG_PATH + 'images/home-images/coming-center.svg'}
                    width={80}
                    height={80}
                    alt="Jodhpur"
                    className="img-fluid rounded-14"
                  />
                  <h3 className="fs-16 fw-600 text-color-1 my-2">Coming Soon</h3>
                  <p className="fs-10 text-color-1 mb-0">to your city</p>
                </div>
              </div>
              <motion.div className="max-w-1158 bg-white p-16 p-lg-48 p-md-30 rounded-24 mx-auto border-w-2 border-color-1 center-content-card">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="fw-600 fs-22 text-color-1 mb-lg-18 mb-12 mt-16 mt-lg-0">
                      WsCube Tech {activeCenterData?.name} Center
                    </h2>
                    <p className="text-color-7 mb-20">
                      {activeCenterData?.address}, {activeCenterData?.name} - {activeCenterData?.state} - India (
                      {activeCenterData?.pincode})
                    </p>
                    <a href={`${activeCenterData?.map_link} `} target="_blank">
                      <button
                        className="fs-16 fw-400 text-color-1 px-3 rounded-8 h-size-48 hover-shadow-2 bg-white outline-none mb-20 mb-lg-44"
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        Get Direction
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/navigation.svg'}
                          width={20}
                          height={20}
                          alt="icon"
                          className="img-fluid ms-1"
                        />
                      </button>
                    </a>
                    <ul className="ps-0 list-unstyled pt-lg-0 pt-20">
                      <motion.li
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className="mb-10"
                      >
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/email-gray.svg'}
                          width={20}
                          height={20}
                          alt="icon"
                          className="img-fluid me-1"
                        />
                        <a
                          href={`mailto:${activeCenterData?.email}`}
                          className="text-color-7 text-text-decoration-none"
                        >
                          {activeCenterData?.email}
                        </a>
                      </motion.li>
                    </ul>
                    <div className="d-flex pt-3 justify-content-lg-start justify-content-center">
                      <motion.button
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 0.7 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          setShowLeadModal(true);
                          setLeadHeading('Request callback');
                        }}
                        className="fs-14 text-white fw-600 bg-color-3 reverse-shadow-2 px-3 h-size-40 rounded-12 outline-none border-w-2 border-color-1"
                      >
                        Request callback
                      </motion.button>
                      <Link href={`/${activeCenter}`}>
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.7 }}
                          transition={{ duration: 0.3 }}
                          className="fs-14 text-color-1 bg-white fw-600 hover-shadow-2 ms-3 px-3 h-size-40 rounded-12 outline-none border-w-2 border-color-1 ms-lg-4"
                        >
                          Explore Courses
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image
                      src={`${process.env.IMG_PATH}images/home-images/jodhpur-team.webp`}
                      width={521}
                      height={345}
                      alt="Image"
                      className="img-fluid rounded-20 w-100"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

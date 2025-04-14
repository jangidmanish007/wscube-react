'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import parse from 'html-react-parser';

//component imports
import TopCompanies from './TopCompanies';
import { numberFormat } from '@/_helper/Common';
import FeeStructureDA from './FeeStructureDA';

export default function BannerDetailsDA({
  details,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  courseSlug,
  setLeadHeading,
}) {
  return (
    <section className="pt-lg-168 pt-106 pb-lg-43 pb-60 banner-section">
      <AnimatePresence>
        <div className="container-main container-w-xl-1202 mb-lg-42 mb-32">
          <div className="d-lg-flex align-items-center align-items-center justify-content-between">
            <div className="deatils-banner-left-side w-size-full max-w-xl-584 max-w-lg-480 mr-xl-110 mr-lg-40 mb-xl-0 mb-44">
              {/* <motion.div
                className="d-lg-inline-flex d-none align-items-center job-guarantee-badge rounded-pill px-12 py-1 mb-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.35, type: 'tween' }}
                viewport={{ once: true }}
              >
                <Image
                  src={`${process.env.IMG_PATH}images/icons/job-guarantee-icon.svg`}
                  width={16}
                  height={17}
                  className="img-fluid"
                  alt="job-guarantee-icon"
                />
                <span className="ms-1 fs-14 fw-400 lh-21 text-color-1 text-capitalize">Job Ready Program</span>
              </motion.div> */}
              {(details?.course_sub_name && (
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35, type: 'tween' }}
                  viewport={{ once: true }}
                  className="fs-40 lh-48 fw-600 text-color-2 mb-lg-12 text-lg-start text-center"
                >
                  {details?.course_name}
                  <div
                    className="d-lg-inline-flex d-none align-items-center job-guarantee-badge rounded-pill px-12 py-1 mb-0 ml-md-12"
                    style={{ transform: 'translateY(-4px)' }}
                  >
                    <Image
                      src={`${process.env.IMG_PATH}images/icons/job-guarantee-icon.svg`}
                      width={16}
                      height={17}
                      className="img-fluid"
                      alt="job-guarantee-icon"
                    />
                    <span className="ms-1 fs-14 fw-400 lh-21 text-color-1 text-capitalize">Job Ready Program</span>
                  </div>
                </motion.h2>
              )) || (
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35, type: 'tween' }}
                  viewport={{ once: true }}
                  className="fs-40 lh-48 fw-600 text-color-2 mb-lg-12 text-lg-start text-center"
                >
                  {details?.course_name}
                  <div
                    className="d-lg-inline-flex d-none align-items-center job-guarantee-badge rounded-pill px-12 py-1 mb-0 ml-md-12"
                    style={{ transform: 'translateY(-4px)' }}
                  >
                    <Image
                      src={`${process.env.IMG_PATH}images/icons/job-guarantee-icon.svg`}
                      width={16}
                      height={17}
                      className="img-fluid"
                      alt="job-guarantee-icon"
                    />
                    <span className="ms-1 fs-14 fw-400 lh-21 text-color-1 text-capitalize">Job Ready Program</span>
                  </div>
                </motion.h1>
              )}
              {(details?.course_sub_name && (
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35, type: 'tween' }}
                  viewport={{ once: true }}
                  style={{ color: '#B9DAF7' }}
                  className="fs-20 lh-30 fw-600 mb-lg-24 text-lg-start text-center"
                >
                  {details?.course_sub_name}
                </motion.h1>
              )) ||
                ''}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.75, type: 'tween' }}
                viewport={{ once: true }}
                className="fs-lg-18 fs-14 fw-400 lh-lg-27 lh-22 text-color-2 mb-lg-52 mb-34 text-lg-start text-center"
              >
                {parse(details?.course_short_description)}
              </motion.div>
              <ul
                className="list-unstyled d-lg-flex d-grid grid-cols-3 justify-content-between w-size-full max-w-xl-532 border-w border-right-0 border-end-0 border-start-0
             border-color-30-y py-lg-12 pr-lg-12 mb-xl-52 mb-lg-52 mb-44 course-info"
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
                  viewport={{ once: true }}
                  className="d-flex flex-column text-center min-w-lg-120"
                >
                  <div className="d-lg-flex justify-content-center mb-1 text-center">
                    <Image
                      src={`${process.env.IMG_PATH}images/icons/suitcase.svg`}
                      width={21}
                      height={18}
                      className="img-fluid w-size-lg-21 w-size-21 mb-lg-0 mb-1 d-lg-none"
                      alt="job-guarantee-icon"
                    />
                    <span className="ms-lg-1 fs-lg-22 fw-600 lh-lg-33 fs-18 lh-28 text-color-2 d-lg-flex d-block">
                      ₹{details?.course_maximum_compensation} LPA
                    </span>
                  </div>
                  <span className="fs-lg-16 lh-lg-24 fs-12 lh-16 fw-400 text-color-2">Average CTC</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, type: 'tween' }}
                  viewport={{ once: true }}
                  className="d-flex flex-column text-center min-w-lg-120"
                >
                  <div className="d-lg-flex justify-content-center mb-1 text-center">
                    <Image
                      src={`${process.env.IMG_PATH}images/icons/linked-in-white.svg`}
                      width={27}
                      height={27}
                      className="img-fluid w-size-lg-27 w-size-21 mb-lg-0 mb-1"
                      alt="job-guarantee-icon"
                    />
                    <span className="ms-lg-1 fs-lg-22 fw-600 lh-lg-33 fs-18 lh-28 text-color-2 d-lg-flex d-block">
                      {details?.course_linkedin_jobs}+
                    </span>
                  </div>
                  <span className="fs-lg-16 lh-lg-24 fs-12 lh-16 fw-400 text-color-2">Jobs on LinkedIn Alone</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, type: 'tween' }}
                  viewport={{ once: true }}
                  className="d-flex flex-column text-center min-w-lg-120"
                >
                  <div className="d-lg-flex justify-content-center mb-1 text-center">
                    <Image
                      src={`${process.env.IMG_PATH}images/icons/avaliable-seats-icon.svg`}
                      width={27}
                      height={27}
                      className="img-fluid w-size-lg-27 w-size-21 mb-lg-0 mb-1"
                      alt="job-guarantee-icon"
                    />
                    <span className="ms-lg-1 fs-lg-22 fw-600 lh-lg-33 fs-18 lh-28 text-color-2 d-lg-flex d-block">
                      {details?.course_avaiable_seats}+
                    </span>
                  </div>
                  <span className="fs-lg-16 lh-lg-24 fs-12 lh-16 fw-400 text-color-2">Industry Mentors</span>
                </motion.li>
              </ul>
              <div className="d-md-flex course-banner-btn">
                <motion.button
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setLeadNote(
                      (details?.page_type == 2 && 'Talk to Program Advisor' + ' - Course Page - Banner') ||
                        'Book Demo' + ' - Course Page - Banner'
                    );
                    setDownloadCrs(false);
                    setShowLeadModal(true);
                    setLeadHeading(details?.page_type == 2 && 'Talk to Program Advisor') || 'Book Demo Now';
                  }}
                  className="common-white-btn orange-500-hover-shadow min-h-56 px-xl-34 px-20 fs-18 fw-600 lh-27 rounded-12 mr-xl-32 mr-20 mb-md-0 mb-24"
                >
                  {/*
                  white-fill-btn min-h-56 px-xl-36 px-lg-26 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow mr-xl-32 mr-20 mb-md-0 mb-24*/}
                  {(details?.page_type == 2 && 'Talk to Program Advisor') || 'Book Demo Now'}
                </motion.button>

                {(details?.page_type == 3 && details?.course_brochure && (
                  <motion.button
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setLeadNote('Download Curriculum - Course Page - Banner');
                      setDownloadCrs(true);
                      setShowLeadModal(true);
                      setLeadHeading('Download Curriculum');
                    }}
                    className="common-white-btn orange-500-hover-shadow min-h-56 px-xl-34 px-20 fs-18 fw-600 lh-27 rounded-12"
                  >
                    Download Curriculum
                  </motion.button>
                )) || (
                  <>
                    {(details?.course_total_learners && (
                      <div className="d-flex align-items-center text-white justify-content-center justify-content-lg-start fs-16">
                        <Image
                          src={`/images/courses-details/trend-up.svg`}
                          width={28}
                          height={28}
                          alt="Icon"
                          className="img-fluid mr-12"
                        />
                        {numberFormat(details?.course_total_learners)} already upskilled!
                      </div>
                    )) ||
                      ''}
                  </>
                )}
              </div>
            </div>
            <div>
              <FeeStructureDA
                details={details}
                fee={details?.fee}
                setShowLeadModal={setShowLeadModal}
                setLeadNote={setLeadNote}
                setDownloadCrs={setDownloadCrs}
                setLeadHeading={setLeadHeading}
                courseSlug={courseSlug}
              />
            </div>
          </div>
        </div>
        <TopCompanies />
      </AnimatePresence>
    </section>
  );
}

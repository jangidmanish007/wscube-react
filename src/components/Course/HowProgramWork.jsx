'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { animationFromLeft } from '../../_utils/Animation';
import { hideCtaPages } from './hideButtonPages';
import { usePathname } from 'next/navigation';

export default function HowProgramWork({
  heading,
  subHeading,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  isCentersPage,
  setCrmCrsId,
  courseSlug,
  setLeadHeading,
  details,
}) {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const isHideCtaPage = hideCtaPages.includes(slug);
  return (
    <section className="py-lg-80 py-64 overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="d-lg-flex align-items-center grid-gap-xl-86 grid-gap-40 mb-lg-0 mb-40">
            <motion.div
              initial={animationFromLeft.initial}
              whileInView={animationFromLeft.whileInView}
              transition={animationFromLeft.transition}
              viewport={{ once: true }}
              className="section-info w-full max-w-lg-377 mb-lg-0 mb-40 text-lg-start text-center"
            >
              <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-16 pr-lg-28">
                {heading || 'How does our program work?'}
              </h2>
              <p className="fs-14 fw-400 lh-21 text-color-7 mb-52">{subHeading || ''}</p>
              {(!isHideCtaPage && (
                <button
                  onClick={() => {
                    if (!isCentersPage) {
                      setLeadNote(
                        (details?.page_type == 2 &&
                          'Talk to Program Advisor' + ' - Course Page - How does this program work ?') ||
                          'Apply Now' + ' - Course Page - How does this program work?'
                      );
                      setLeadHeading((details?.page_type == 2 && 'Talk to Program Advisor') || 'Apply Now');
                      setDownloadCrs(false);
                    } else {
                      setCrmCrsId(null);
                      setLeadNote('Apply Now - Center Page - How does this program work?');
                      setLeadHeading((details?.page_type == 2 && 'Talk to Program Advisor') || 'Apply Now');
                    }
                    setShowLeadModal(true);
                  }}
                  className="blue-fill-btn min-h-56 py-14 px-46 fs-18 fw-600 lh-27 rounded-12 hover-shadow-4 mx-lg-0 mx-auto d-lg-block d-none"
                >
                  {(details?.page_type == 2 && 'Talk to Program Advisor') || 'Apply Now'}
                </button>
              )) ||
                ''}
            </motion.div>
            <div className="w-full">
              <div className="program-work-card p-xl-32 p-20 position-relative min-h-149 cursor-pointer border-w border-dashed rounded-30">
                <div className="bg-layers">
                  <span className="remove-extra-border block position-absolute end-0 h-size-1 w-size-30 bg-color-2"></span>
                  <span className="remove-extra-border-2 block position-absolute end-0 h-size-1 w-size-30 bg-color-2"></span>
                  <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
                  <div className="polygon-icon polygon-icon-1 position-absolute w-size-10 h-size-12"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.2, type: 'tween' },
                  }}
                  viewport={{ once: true }}
                  className="d-md-flex align-items-center w-full max-w-551 program-card-body"
                >
                  <div className="img-box mr-md-5 text-center position-relative">
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/learn-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="without-fill-img transation-3"
                    />
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/blue-learn-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="with-fill-img position-absolute start-0 top-0 opacity-0 transation-3"
                    />
                  </div>
                  <div className="content align-middle">
                    <h3 className="fs-lg-22 fs-18 lh-28 fw-600 lh-lg-33 text-color-1 mb-10 d-flex align-items-center justify-content-md-start  justify-content-center">
                      Learn
                      <span className="bg-color-32 fs-11 fw-400 lh-17 py-1 px-12 rounded-pill align-middle ml-10">
                        Live Classes
                        <Image
                          src={`${process.env.IMG_PATH}images/icons/ellipse-icon.svg`}
                          width={4}
                          height={4}
                          alt="ellips-icon"
                          className="img-fluid mx-1 align-middle"
                        />
                        Self-Paced
                      </span>
                    </h3>
                    <p className="fs-14 fw-400 text-md-start text-center lh-21 text-color-7 mb-0 line-clamp-3 ">
                      Upskill yourself by gaining insights from leading professionals' vast experience.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="program-work-card p-xl-32 p-20 position-relative min-h-149 cursor-pointer border-w border-dashed rounded-30">
                <div className="bg-layers">
                  <span className="remove-extra-border position-absolute h-size-1 w-size-30 bg-color-2"></span>
                  <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
                  <div className="polygon-icon polygon-icon-2 position-absolute w-size-10 h-size-12"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -55 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.3, type: 'tween' },
                  }}
                  viewport={{ once: true }}
                  className="d-md-flex align-items-center w-full max-w-551 program-card-body"
                >
                  <div className="img-box mr-md-5 text-center position-relative">
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/practice-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="without-fill-img transation-3"
                    />
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/blue-practice-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="with-fill-img position-absolute start-0 top-0 opacity-0 transation-3"
                    />
                  </div>
                  <div className="content align-middle">
                    <h3 className="fs-lg-22 fs-18 lh-28 fw-600 text-md-start text-center lh-lg-33 text-color-1 mb-10">
                      Practice
                    </h3>
                    <p className="fs-14 fw-400 text-md-start text-center lh-21 text-color-7 mb-0 line-clamp-3 ">
                      Sharpen your skills by learning through course assignments, live projects, and regular assessments
                      and quizzes.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="program-work-card p-xl-32 p-20 position-relative min-h-149 cursor-pointer border-w border-dashed rounded-30">
                <div className="bg-layers">
                  <span className="remove-extra-border block position-absolute end-0 h-size-1 w-size-30 bg-color-2"></span>
                  <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
                  <div className="polygon-icon polygon-icon-3 position-absolute w-size-10 h-size-12"></div>
                  <div className="polygon-icon polygon-icon-1 position-absolute w-size-10 h-size-12"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.4, duration: 0.3, type: 'tween' },
                  }}
                  viewport={{ once: true }}
                  className="d-md-flex align-items-center w-full max-w-551 program-card-body"
                >
                  <div className="img-box mr-md-5 text-center position-relative">
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/build-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="without-fill-img transation-3"
                    />
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/blue-build-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="with-fill-img position-absolute start-0 top-0 opacity-0 transation-3"
                    />
                  </div>
                  <div className="content align-middle">
                    <h3 className="fs-lg-22 fs-18 lh-28 fw-600 text-md-start text-center lh-lg-33 text-color-1 mb-10">
                      Ask
                    </h3>
                    <p className="fs-14 fw-400 text-md-start text-center lh-21 text-color-7 mb-0 line-clamp-3 ">
                      Resolve your queries from industry experts with our dedicated one-to-one doubt-clearing sessions.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="program-work-card p-xl-32 p-20 position-relative min-h-149 cursor-pointer border-w border-dashed rounded-30">
                <div className="bg-layers">
                  <span className="remove-extra-border position-absolute h-size-1 w-size-30 bg-color-2"></span>
                  <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -55 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.3, type: 'tween' },
                  }}
                  viewport={{ once: true }}
                  className="d-md-flex align-items-center w-full max-w-551 program-card-body"
                >
                  <div className="img-box mr-md-5 text-center position-relative">
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/success-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="without-fill-img transation-3"
                    />
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/blue-success-icon.svg`}
                      width={85}
                      height={85}
                      alt="program-card-img"
                      className="with-fill-img position-absolute start-0 top-0 opacity-0 transation-3"
                    />
                  </div>
                  <div className="content align-middle">
                    <h3 className="fs-lg-22 fs-18 lh-28 fw-600 text-md-start text-center lh-lg-33 text-color-1 mb-10">
                      Build
                    </h3>
                    <p className="fs-14 fw-400 text-md-start text-center lh-21 text-color-7 mb-0 line-clamp-3 ">
                      Craft a diverse portfolio and appealing resume, and optimize LinkedIn to showcase your data
                      analytics skills.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {(!isHideCtaPage && (
            <button
              onClick={() => {
                if (!isCentersPage) {
                  setLeadNote('Apply Now - Course Page - How does this program work?');
                } else {
                  setLeadNote('Apply Now - Center Page - How does this program work?');
                }
                setDownloadCrs(false);
                setShowLeadModal(true);
                setLeadHeading('Apply Now');
              }}
              className="blue-fill-btn min-h-56 py-14 px-46 fs-lg-18 fw-600 lh-lg-27 fs-16 lh-24 rounded-12 hover-shadow-4 mx-lg-0 mx-auto d-lg-none d-block"
            >
              Apply Now
            </button>
          )) ||
            ''}
        </AnimatePresence>
      </div>
    </section>
  );
}

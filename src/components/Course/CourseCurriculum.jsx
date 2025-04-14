'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { animationFromBottom } from '@/_utils/Animation';
import ToolsYouWillLearn from './ToolsYouWillLearn';
import Curriculum from './Curriculum';
import CourseScheduleCard from './CourseScheduleCard';
import CurriculumDA from './CurriculumDA';
import { downLoadCrsPdf } from '@/_helper/DownloadPdf';
import CurriculumDM from './CurriculumDM';
import { hideCtaPages } from './hideButtonPages';
import { usePathname } from 'next/navigation';
import CurriculumAD from './CurriculumAD';

export default function CourseCurriculum({
  details,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  courseSlug,
  setLeadHeading,
}) {
  const dataCourseSlug = courseSlug === 'data-analytics-course';
  const dmCourseSlug = courseSlug === 'digital-marketing-course';
  const adCourseSlug = courseSlug === 'mobile-app-development-course';
  const dmOfflineCourseSlug = details.slug === 'digital-marketing-course';

  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const isHideCtaPage = hideCtaPages.includes(slug);
  return (
    <section className="py-lg-80 py-64 bg-color-19 overflow-hidden">
      <div className="container-main container-w-xl-1202 p-0">
        <AnimatePresence>
          <div className="section-info d-lg-flex justify-content-between align-items-start text-color-1 mb-lg-60 mb-40 px-16">
            <motion.div
              initial={animationFromBottom.initial}
              whileInView={animationFromBottom.whileInView}
              transition={animationFromBottom.transition}
              viewport={{ once: true }}
              className="mb-lg-0 mb-4 text-lg-start text-center"
            >
              <h2 className="fs-32 fw-600 lh-48 mb-16">{details?.what_you_learn_heading || 'What Will You Learn'}</h2>
              <p className="fs-14 fw-400 lh-21 text-color-7 mb-0">
                {details?.what_you_learn_sub_heading ||
                  'A detailed overview of the course, including key topics, objectives, and module sequence.'}
              </p>
            </motion.div>
            {(details?.course_brochure && !isHideCtaPage && (
              <button
                onClick={() => {
                  // if (dataCourseSlug) {
                  //   window.open(process?.env?.IMG_PATH + details?.course_brochure);
                  // } else {
                  setLeadNote('Download Curriculum - Course Page - Course Syllabus');
                  setDownloadCrs(true);
                  setShowLeadModal(true);
                  setLeadHeading('Download Curriculum');
                  // }
                }}
                className="blue-fill-btn min-h-56 py-14 px-20 fs-18 fw-600 lh-27 rounded-12 hover-shadow-4 mx-lg-0 mx-auto"
              >
                Download Curriculum
              </button>
            )) ||
              ''}
          </div>
          <div className="mb-60">
            <div className="course-related-info d-flex px-16">
              <div
                className="d-lg-flex align-items-center d-grid grid-cols-2 grid-gap-lg-48 grid-gap-16 py-lg-16 py-24 pr-lg-0 
                pr-35 pl-28 bg-color-31 w-full rounded-lg-60 rounded-16 border-w-2 border-color-1"
              >
                <div className="course-info min-w-xl-168 max-w-xl-192 position-relative">
                  <ul className="list-unstyled mb-0">
                    <li className="fs-lg-14 fs-11 fw-400 lh-lg-21 lh-16 text-color-7">
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/duration-icon.svg`}
                        width={16}
                        height={16}
                        alt="duration"
                        className="w-size-lg-20 w-size-12 img-fuild"
                      />
                      <span className="align-middle ms-1">Duration</span>
                    </li>
                    <li className="fs-lg-18 fw-600 lh-lg-24 fs-14 lh-21 text-color-1">
                      {details?.course_duration} {details?.duration_unit}
                    </li>
                    {/* <li className="fs-lg-11 fw-400 lh-lg-17 fs-10 lh-14 text-color-10">
                      Includes 3-months virtual internship
                    </li> */}
                  </ul>
                </div>
                <div className="course-info min-w-xl-168 max-w-xl-192 position-relative">
                  <ul className="list-unstyled mb-0">
                    <li className="fs-lg-14 fs-11 fw-400 lh-lg-21 lh-16 text-color-7">
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/mode-icon.svg`}
                        width={16}
                        height={16}
                        alt="duration"
                        className="w-size-lg-20 w-size-12 img-fuild"
                      />
                      <span className="align-middle ms-1">Mode</span>
                    </li>
                    <li className="fs-lg-18 fw-600 lh-lg-24 fs-14 lh-21 text-color-1">
                      {details?.course_mode_display}
                    </li>
                    {/* <li className="fs-lg-11 fw-400 lh-lg-17 fs-10 lh-14 text-color-10">
                      Live Online + Optional In-Person
                    </li> */}
                  </ul>
                </div>
                <div className="course-info min-w-xl-168 max-w-xl-192 position-relative">
                  <ul className="list-unstyled mb-0">
                    <li className="fs-lg-14 fs-11 fw-400 lh-lg-21 lh-16 text-color-7">
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/live-sessions-icon.svg`}
                        width={16}
                        height={16}
                        alt="duration"
                        className="w-size-lg-20 w-size-12 img-fuild"
                      />
                      <span className="align-middle ms-1">Live Sessions</span>
                    </li>
                    <li className="fs-lg-18 fw-600 lh-lg-24 fs-14 lh-21 text-color-1">
                      {details?.course_live_session}+ hrs
                    </li>
                    {/* <li className="fs-lg-11 fw-400 lh-lg-17 fs-10 lh-14 text-color-10">
                      Live Online + Optional In-Person
                    </li> */}
                  </ul>
                </div>
                <div className="course-info min-w-xl-168 max-w-xl-192 position-relative">
                  <ul className="list-unstyled mb-0">
                    <li className="fs-lg-14 fs-11 fw-400 lh-lg-21 lh-16 text-color-7">
                      <Image
                        src={`${process.env.IMG_PATH}images/icons/projects-icon.svg`}
                        width={16}
                        height={16}
                        alt="duration"
                        className="w-size-lg-20 w-size-12 img-fuild"
                      />
                      <span className="align-middle ms-1">Projects</span>
                    </li>
                    <li className="fs-lg-18 fw-600 lh-lg-24 fs-14 lh-21 text-color-1">
                      {details?.course_projects}
                      {(!dataCourseSlug && '+') || ''}
                    </li>
                    {/* <li className="fs-lg-11 fw-400 lh-lg-17 fs-10 lh-14 text-color-10">
                      Live Online + Optional In-Person
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="w-full max-w-270 d-xl-block d-none rounded-pill border-w-2 border-color-1 bg-color-31 placement-box position-relative">
                <div className="position-absolute smile-with-box">
                  <Image
                    src={`${process.env.IMG_PATH}images/courses-details/with-smile-img.svg`}
                    width={62}
                    height={25}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center px-32 h-100">
                  <Image
                    src={`${process.env.IMG_PATH}images/courses-details/placement-img.svg`}
                    width={85}
                    height={105}
                    alt="placement-img"
                    className="img-fluid max-h-101"
                  />
                  <span className="fs-xl-22 fs-18 fw-600 lh-2xl-33 lh-24 text-color-1 ml-8">Placement Support</span>
                </div>
              </div>
            </div>
            {(dataCourseSlug && (
              <div className="pl-16 pe-3 pe-lg-0 pr-md-16 mt-lg-60 mt-40">
                {/* <Curriculum curriculum={details?.curriculum} /> */}
                {/* <CourseScheduleCard curriculum={details?.curriculum} dataCourseSlug={dataCourseSlug} /> */}
                <CurriculumDA curriculum={details?.curriculum} dataCourseSlug={dataCourseSlug} />
              </div>
            )) ||
              ((dmCourseSlug || dmOfflineCourseSlug) && (
                <div className="pl-16 pe-3 pe-lg-0 pr-md-16 mt-lg-60 mt-40">
                  <CurriculumDM curriculum={details?.curriculum} dmCourseSlug={dmCourseSlug} />
                </div>
              )) ||
              (adCourseSlug && (
                <div className="pl-16 pe-3 pe-lg-0 pr-md-16 mt-lg-60 mt-40">
                  <CurriculumAD curriculum={details?.curriculum} dmCourseSlug={adCourseSlug} />
                </div>
              )) || (
                <div className="px-16 mt-lg-60 mt-40">
                  <Curriculum curriculum={details?.curriculum} dataCourseSlug={dataCourseSlug} />
                </div>
              )}
          </div>
          {details?.tools && (
            <ToolsYouWillLearn
              heading={details?.tool_heading}
              tools={details?.tools}
              setShowLeadModal={setShowLeadModal}
              setLeadNote={setLeadNote}
              setDownloadCrs={setDownloadCrs}
              crsCurr={details?.course_brochure}
              setLeadHeading={setLeadHeading}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

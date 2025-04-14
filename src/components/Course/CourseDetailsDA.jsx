'use client';
import { useEffect, useState } from 'react';
import HompageLead from '../HomePage/HompageLead';
//component imports
import BannerDetailsDA from './BannerDetailsDA';
import CoursesHighlights from './CoureseHighlights';
import CourseApplyNow from './CourseApplyNow';
import CourseCareer from './CourseCareer';
import CourseCertified from './CourseCertified';
import CourseCurriculum from './CourseCurriculum';
import CourseFaqs from './CourseFaqs';
import CourseFeatures from './CourseFeatures';
import CourseFeeStructure from './CourseFeeStructure';
import CourseMentors from './CourseMentors';
import CourseSchedule from './CourseSchedule';
import CourseTestimonials from './CourseTestimonials';
import HowProgramWork from './HowProgramWork';
import CourseFeeStructureDA from './CourseFeeStructureDA';
import CourseCohorts from './CourseCohorts';
import StickyAdsContent from '../Layouts/Common/StickyAdsContent';

export default function CourseDetailsDA({ details, params, stickyAdsData }) {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadContact, setLeadContact] = useState('');
  const [crmCrsId, setCrmCrsId] = useState(null);
  const [crmFrncId, setCrmFrncId] = useState(null);
  const [currUrl, setCurrUrl] = useState('');
  const [downloadCrs, setDownloadCrs] = useState(false);
  const [leadNote, setLeadNote] = useState('');
  const [leadHeading, setLeadHeading] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  const courseSlug = (params?.course && params?.course) || params?.slug;

  useEffect(() => {
    if (details && details?.crm_lead_course_id) {
      setCrmCrsId(details?.crm_lead_course_id);
    }
  }, [details, details?.crm_lead_course_id]);

  useEffect(() => {
    if (details && details?.Centers?.length > 0) {
      const center = details?.Centers[0];
      if (center?.name != 'Online') {
        setCrmFrncId(center.crm_center_id);
      }
    }
  }, [details, details?.Centers]);

  useEffect(() => {
    if (details && details?.course_brochure && downloadCrs) {
      setCurrUrl(process.env.IMG_PATH + details?.course_brochure);
    } else {
      setCurrUrl('');
    }
  }, [details, details?.course_brochure, downloadCrs]);

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'exploreCrs'}
        leadNote={leadNote}
        currUrl={currUrl}
        crmCrsId={crmCrsId}
        leadContact={leadContact}
        frnchId={crmFrncId}
        courseSlug={courseSlug}
        leadHeading={leadHeading}
        categorySlug={details?.CategoryMasters[0]?.slug}
        setCategorySlug={setCategorySlug}
        centerSlug={''}
      />
      <BannerDetailsDA
        details={details}
        setShowLeadModal={setShowLeadModal}
        setLeadNote={setLeadNote}
        setDownloadCrs={setDownloadCrs}
        courseSlug={params?.slug}
        setLeadHeading={setLeadHeading}
      />

      {details?.mentors && (
        <CourseMentors
          heading={details?.meet_your_mentor_heading}
          subHeading={details?.meet_your_mentor_sub_heading}
          mentors={details?.mentors}
          courseSlug={params?.slug}
          details={details}
        />
      )}
      {details?.highlights && (
        <CoursesHighlights
          heading={details?.highlights_heading}
          subHeading={details?.highlights_sub_heading}
          highlights={details?.highlights}
        />
      )}
      {details?.features && (
        <CourseFeatures
          heading={details?.who_can_apply_heading}
          subHeading={details?.who_can_apply_sub_heading}
          features={details?.features}
          description={details?.course_description}
        />
      )}
      <CourseCurriculum
        details={details}
        setShowLeadModal={setShowLeadModal}
        setLeadHeading={setLeadHeading}
        setLeadNote={setLeadNote}
        setDownloadCrs={setDownloadCrs}
        courseSlug={params?.slug}
      />
      {details?.cohort_details && details?.cohort_details?.cohorts?.length > 0 && (
        <CourseCohorts
          cohortDetails={details?.cohort_details}
          setShowLeadModal={setShowLeadModal}
          setLeadHeading={setLeadHeading}
          setLeadNote={setLeadNote}
          setDownloadCrs={setDownloadCrs}
        />
      )}
      <CourseCareer
        heading={details?.career_heading}
        subHeading={details?.career_sub_heading}
        setShowLeadModal={setShowLeadModal}
        setLeadNote={setLeadNote}
        setDownloadCrs={setDownloadCrs}
        setLeadHeading={setLeadHeading}
      />
      <CourseCertified />
      <HowProgramWork
        heading={details?.how_program_work_heading}
        subHeading={details?.how_program_work_sub_heading}
        setShowLeadModal={setShowLeadModal}
        setLeadNote={setLeadNote}
        setDownloadCrs={setDownloadCrs}
        setLeadHeading={setLeadHeading}
        courseSlug={params?.slug}
        details={details}
      />

      {/* <CourseSchedule details={details} /> */}

      <CourseApplyNow
        heading={details?.apply_now_heading}
        subHeading={details?.apply_now_sub_heading}
        setShowLeadModal={setShowLeadModal}
        setLeadContact={setLeadContact}
        setLeadNote={setLeadNote}
        setDownloadCrs={setDownloadCrs}
        setLeadHeading={setLeadHeading}
        courseSlug={params?.slug}
        details={details}
      />
      {details?.testimonials && (
        <CourseTestimonials
          tagline={details?.testimonials_line}
          rating={details?.course_review}
          review={details?.course_review_count}
          testimonials={details?.testimonials}
        />
      )}
      {(details?.page_type == 2 && <span></span>) || (
        <>
          {details?.faqs && (
            <CourseFaqs heading={details?.faq_heading} subHeading={details?.faq_sub_heading} faqs={details?.faqs} />
          )}
        </>
      )}
      {stickyAdsData && <StickyAdsContent stickyAdsData={stickyAdsData} />}
    </>
  );
}

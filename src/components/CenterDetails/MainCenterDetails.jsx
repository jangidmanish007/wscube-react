'use client';
import React, { useEffect, useState } from 'react';
import CentersBanner from './CentersBanner';
import JobsReadyCourses from './JobsReadyCourses';
import SpotlightOnLearner from './SpotlightOnLearner';
import ExperienceLearning from './ExperienceLearning';
import HowProgramWork from '../Course/HowProgramWork';
import HompageLead from '../HomePage/HompageLead';
import ProductCompanies from './ProductCompanies';
import CompanyImpactfulNumbers from './CompanyImpactfulNumbers';
import TopCompaniesWithAlumni from './TopCompaniesWithAlumni';
import WscubeTechCampus from './WscubeTechCampus';
import CenterTestmonials from './CenterTestmonials';
import CentersFaq from './CentersFaq';
import FounderVision from './FounderVision';
import EducationComparision from './EducationComparision';
import CenterContact from './CenterContact';

export default function MainCenterDetails({ centerCoursesData, params }) {
  const centerSlug = params?.slug;
  const centerData = centerCoursesData?.centerListData?.find((center) => center?.slug_url === params?.slug);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [crmCrsId, setCrmCrsId] = useState(null);
  const [currUrl, setCurrUrl] = useState('');
  const [frnchId, setFrnchId] = useState('');
  const [leadHeading, setLeadHeading] = useState('');
  const [downloadCrs, setDownloadCrs] = useState(false);
  const [leadNote, setLeadNote] = useState('');
  const [categorySlug, setCategorySlug] = useState('');
  const [courseSlug, setCourseSlug] = useState('');

  useEffect(() => {
    if (centerData?.crm_center_id) {
      setFrnchId(centerData?.crm_center_id);
    }
  }, [centerData, centerData?.crm_center_id]);

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={(crmCrsId && 'exploreCrs') || 'bookDemo'}
        leadNote={leadNote}
        frnchId={frnchId}
        currUrl={currUrl}
        crmCrsId={crmCrsId}
        leadHeading={leadHeading}
        categorySlug={categorySlug}
        setCategorySlug={setCategorySlug}
        courseSlug={courseSlug}
        setCourseSlug={setCourseSlug}
        centerSlug={centerSlug || ''}
      />
      <CentersBanner
        centerData={centerData}
        centerSlug={centerSlug}
        setLeadNote={setLeadNote}
        setShowLeadModal={setShowLeadModal}
        setCrmCrsId={setCrmCrsId}
        setLeadHeading={setLeadHeading}
        centerAllData={centerCoursesData?.centerDetailsAllData?.CenterDetail}
      />
      {centerCoursesData?.coursersData?.length > 0 && (
        <JobsReadyCourses
          centerCoursesData={centerCoursesData?.coursersData}
          centerSlug={centerSlug}
          setCurrUrl={setCurrUrl}
          setCrmCrsId={setCrmCrsId}
          setLeadNote={setLeadNote}
          setShowLeadModal={setShowLeadModal}
          setLeadHeading={setLeadHeading}
          setCategorySlug={setCategorySlug}
          setCourseSlug={setCourseSlug}
          headingData={{
            heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.job_ready_title,
            subHeading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.job_ready_tagline,
          }}
        />
      )}
      <SpotlightOnLearner centerSlug={centerSlug} />
      {centerCoursesData?.centerAlumniesData?.length > 0 && (
        <ProductCompanies
          headingData={{
            heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.our_learner_title,
            maximumCompenation: centerCoursesData?.centerDetailsAllData?.CenterDetail?.maximum_compenation,
            linkdinJobs: centerCoursesData?.centerDetailsAllData?.CenterDetail?.job_on_linkedin,
          }}
          centerAlumniesData={centerCoursesData?.centerAlumniesData}
        />
      )}
      {centerCoursesData?.impactFullNumbersData && (
        <CompanyImpactfulNumbers
          headingData={{
            heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.impactful_title,
            subHeading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.impactful_tagline,
          }}
          inpactfullNumber={centerCoursesData?.impactFullNumbersData}
        />
      )}
      <CenterContact centerData={centerData} centerCoursesData={centerCoursesData} />
      <TopCompaniesWithAlumni
        headingData={{
          heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.top_company_title,
        }}
        topRecuritersData={centerCoursesData?.topRecuritersData}
      />
      <WscubeTechCampus
        headingData={{
          heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.why_choose_ws_title,
          subHeading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.why_choose_ws_tagline,
        }}
      />
      {centerCoursesData?.centerTestmonialsData?.length > 0 && (
        <CenterTestmonials
          centerTestmonialsData={centerCoursesData?.centerTestmonialsData}
          heading={centerCoursesData?.centerDetailsAllData?.CenterDetail?.learner_saying_title}
        />
      )}
      <HowProgramWork
        setLeadNote={setLeadNote}
        setShowLeadModal={setShowLeadModal}
        setLeadHeading={setLeadHeading}
        setDownloadCrs={setDownloadCrs}
        isCentersPage={true}
        setCrmCrsId={setCrmCrsId}
      />
      {/* <EducationComparision /> */}
      <ExperienceLearning
        headingData={{
          heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.campus_gallery_title,
          subHeading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.campus_gallery_tagline,
        }}
        centerSlug={centerSlug}
      />
      {/* <FounderVision /> */}
      {centerCoursesData?.centerFaqData?.length > 0 && (
        <CentersFaq
          headingData={{
            heading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.faq_title,
            subHeading: centerCoursesData?.centerDetailsAllData?.CenterDetail?.faq_tagline,
          }}
          centerFaqData={centerCoursesData?.centerFaqData}
        />
      )}
    </>
  );
}

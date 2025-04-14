'use client';
import React, { useState } from 'react';
import PortfolioDetailsBanner from './PortfolioDetailsBanner';
import BioDetails from './BioDetails';
import FeatureProjects from './FeatureProjects';
import AllProjectsList from './AllProjectsList';
import AwardsAndCertificate from './AwardsAndCertificate';
import ViewProjectModal from '@/components/Modals/ViewProjectModal';
import PortfolioVideoModal from '@/components/Modals/PortfolioVideoModal';

export default function PortfolioDetailsMain({ portfolioDetailsData }) {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [viewProjectData, setViewProjectData] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  function handleViewProjectPopup(item) {
    setShowProjectModal(true);
    setViewProjectData(item);
  }

  function handlePortfolioPopup(url, title) {
    setShowPortfolioModal(true);
    setVideoUrl(url);
    setPopupTitle(title);
  }

  return (
    <>
      {showProjectModal && (
        <ViewProjectModal
          showProjectModal={showProjectModal}
          setShowProjectModal={setShowProjectModal}
          viewProjectData={viewProjectData}
        />
      )}
      {showPortfolioModal && (
        <PortfolioVideoModal
          showPortfolioModal={showPortfolioModal}
          setShowPortfolioModal={setShowPortfolioModal}
          handlePortfolioPopup={handlePortfolioPopup}
          videoUrl={videoUrl}
          popupTitle={popupTitle}
        />
      )}
      <PortfolioDetailsBanner
        handlePortfolioPopup={handlePortfolioPopup}
        bannerData={{
          userInfo: portfolioDetailsData?.detailsData?.User,
          ourProjects: portfolioDetailsData?.detailsData?.tools,
          githubLink: portfolioDetailsData?.detailsData?.github_profile_link,
          introVideoUrl: portfolioDetailsData?.detailsData?.intro_video_link,
        }}
      />
      <BioDetails
        bioDetails={{
          bioInfo: portfolioDetailsData?.detailsData?.User?.UsersWorkProfile?.bio,
          techSkills: portfolioDetailsData?.detailsData?.User?.UsersWorkProfile?.technical_skills,
        }}
      />
      {portfolioDetailsData?.detailsData?.UsersPortfolioProject && (
        <FeatureProjects
          featuredProject={portfolioDetailsData?.detailsData?.UsersPortfolioProject}
          handlePortfolioPopup={handlePortfolioPopup}
          handleViewProjectPopup={handleViewProjectPopup}
        />
      )}
      {portfolioDetailsData?.portfolioProjects?.length > 0 && (
        <AllProjectsList
          handleViewProjectPopup={handleViewProjectPopup}
          portfolioProjectsList={portfolioDetailsData?.portfolioProjects}
        />
      )}
      {portfolioDetailsData?.portfolioAwards?.length > 0 && (
        <AwardsAndCertificate awardsAndCertificateData={portfolioDetailsData?.portfolioAwards} />
      )}
    </>
  );
}

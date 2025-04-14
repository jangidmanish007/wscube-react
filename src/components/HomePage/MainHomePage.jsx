'use client';

import { useEffect, useRef, useState } from 'react';
import ExploreCourses from './ExploreCourses';
import FounderMessage from './FounderMessage';
import FreeResources from './FreeResources';
import ImpactfulNumber from './ImpactfulNumber';
import LearningPrograms from './LearningPrograms';
import MainBanner from './MainBanner';
import MainDiscoverYourPath from './MainDiscoverYourPath';
import MainMasterClasses from './MainMasterClasses';
import OurCenters from './OurCenters';
import StudentReviews from './StudentReviews';
import Cookies from 'js-cookie';

export default function MainHomePage({
  masterClassData,
  categoriesList,
  homeDetailsData,
  topRecuritersData,
  impactFullNumbersData,
  categoryCoursesData,
  centersData,
  homeMentorsData,
}) {
  const discoverPathSectionRef = useRef(null);
  const [showSecitotn, setShowSecitotn] = useState(false);

  useEffect(() => {
    const scrollTo = Cookies.get('scrollTo');
    if (scrollTo === 'programs') {
      setShowSecitotn(true);
    }
  }, []);

  useEffect(() => {
    if (showSecitotn) {
      handleButtonClick();
    }
  }, [showSecitotn]);

  const handleButtonClick = () => {
    discoverPathSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setShowSecitotn(false);
    Cookies.remove('scrollTo', { path: '/' });
  };

  return (
    <>
      <MainBanner
        impactFullNumberData={{
          instructors: impactFullNumbersData?.instructors,
          courses: impactFullNumbersData?.courses,
          videos: impactFullNumbersData?.videos,
        }}
        handleButtonClick={handleButtonClick}
      />
      <ExploreCourses
        categoryCoursesData={categoryCoursesData}
        categoriesList={categoriesList}
        discoverPathSectionRef={discoverPathSectionRef}
      />
      <LearningPrograms />
      {impactFullNumbersData && <ImpactfulNumber impactFullNumbersData={impactFullNumbersData} />}
      <MainDiscoverYourPath
        categoriesList={categoriesList}
        homeDetailsData={homeDetailsData}
        topRecuritersData={topRecuritersData}
        discoverPathSectionRef={discoverPathSectionRef}
      />
      <OurCenters centersData={centersData} />
      <FreeResources />
      <MainMasterClasses masterClassData={masterClassData} />
      {/* <LiveCourses /> */}
      <StudentReviews homeReview={true} />
      <FounderMessage homeMentorsData={homeMentorsData} />
    </>
  );
}

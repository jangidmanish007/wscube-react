import React from 'react';
import CategoryBanner from './CategoryBanner';
import ReguralCourses from './ReguralCourses';
import WhyStudy from './WhyStudy';
import MeetMentors from './MeetMentors';
import CategoryJobs from './CategoryJobs';
import CategoryMasterClass from './CategoryMasterClass';
import CategoryTestimonial from './CategoryTestimonial';
import StudentReviews from '../HomePage/StudentReviews';
import StickyAdsContent from '../Layouts/Common/StickyAdsContent';

export default function CourseCategory({ categoryDetailsData, stickyAdsData }) {
  return (
    <>
      <CategoryBanner bannerData={categoryDetailsData?.categoryData} />
      {categoryDetailsData?.categoryCourses?.length > 0 && (
        <ReguralCourses
          headingData={{
            title: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_course_title,
            tagline: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_course_tagline,
          }}
          regularCoursesData={categoryDetailsData?.categoryCourses}
          categoryDetailsData={categoryDetailsData}
        />
      )}
      <WhyStudy
        whyStudyData={categoryDetailsData?.categoryData}
        testimonialData={categoryDetailsData?.testmonialsData}
      />
      {categoryDetailsData?.mentors?.length > 0 && (
        <MeetMentors
          mentorsData={categoryDetailsData?.mentors}
          headingData={{
            title: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_mentor_title,
            tagline: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_mentor_tagline,
          }}
        />
      )}
      {(categoryDetailsData?.targetsRoles?.length > 0 || categoryDetailsData?.topRecruiters?.length > 0) && (
        <CategoryJobs
          topOpeningsData={categoryDetailsData?.topOpenings}
          targetsRolesData={categoryDetailsData?.targetsRoles}
          topRecruitersData={categoryDetailsData?.topRecruiters}
          headingData={{
            title: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_company_title,
          }}
        />
      )}
      {/* {categoryDetailsData?.masterClass?.length > 0 && (
        <CategoryMasterClass
          headingData={{
            title: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_masterclass_title,
            tagline: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_masterclass_tagline,
          }}
          masterClassData={categoryDetailsData?.masterClass}
        />
      )} */}
      <div className="category-reviews">
        <StudentReviews
          headingData={{
            title: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_testimonial_title,
            tagline: categoryDetailsData?.categoryData?.CategoryMasterContent?.page_testimonial_tagline,
          }}
        />
      </div>
      {stickyAdsData && <StickyAdsContent stickyAdsData={stickyAdsData} />}
    </>
  );
}

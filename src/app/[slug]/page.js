import { getCategoryDetails, getCategoryList, getCategoryMentorsList, getCategoryTargetsRoles, getCategoryTestmonials, getCategoryTopOpenings, getCategoryTopRecruiters, getStickyAdsContent } from '@/_services/categoryService';
import { getCoursesCohorts, getCoursesCurriculum, getCoursesDetails, getCoursesFaqs, getCoursesFeatures, getCoursesFee, getCoursesHighlights, getCoursesList, getCoursesMentors, getCoursesTestimonials, getCoursesTools } from '@/_services/courseService';
import { getCentersAlumnies, getCentersCoursesList, getCentersDetails, getCentersFaq, getCentersList, getTopCompaniesList } from '@/_services/centerService';
import CouresDetails from '@/components/Course/CourseDetails';
import CourseCategory from '@/components/CourseCategory/CourseCategory';
import { getCategoryCoursesList, getImpactFulNumbersList } from '@/_services/homeService';
import { getMetaData } from '@/_services/otherService';
// import MainCenterDetails from '@/components/OldCenterDetails/MainCenterDetails';
import { getMasterClassList, getTestmonialsList } from '@/_services/eventsService';
import PageNotFound from '@/components/Layouts/Common/PageNotFound';
import MainCenterDetails from '@/components/CenterDetails/MainCenterDetails';
import CourseDetailsDA from '@/components/Course/CourseDetailsDA';
import CourseDetailsEH from '@/components/Course/CourseDetailsEH';
import { notFound } from 'next/navigation';

//generate meta data
export async function generateMetadata({ params }) {
  const { slug } = params;
  const metaData = await getMetaData({ slug: slug });
  if (metaData) {
    return metaData;
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = params;
  let pageType = '';
  let courseDetails = null;

  const parameters = {
    course_slug: slug,
    course_mode: 'Online'
  }

  let categoryDetailsData = null;
  let centerDetailsData = null;
  let stickyAdsData = null;
  if (slug) {
    const categories = await getCategoryList();
    const category = categories?.result?.filter(category => category?.slug == slug);

    const courses = await getCoursesList({ course_mode: 'Online' });
    const course = courses?.result?.filter(course => course?.slug == slug);
    const centers = await getCentersList();
    const center = centers?.result?.filter(center => center?.slug_url == slug);

    //  sticky ads data
    if (category?.length > 0) {
      //  get category details 
      const categoryDetails = await getCategoryDetails(slug);
      if (categoryDetails?.status) {
        categoryDetailsData = { ...categoryDetailsData, categoryData: categoryDetails?.result, categoryId: categoryDetails?.result?.id }

        if (categoryDetailsData?.categoryId) {
          const masterClassList = await getMasterClassList({ category: categoryDetailsData?.categoryId, limit: 1 });
          if (masterClassList?.status) {
            categoryDetailsData = { ...categoryDetailsData, masterClass: masterClassList?.result }
          }
        }
      }

      //  get category mentors list 
      const mentorsData = await getCategoryMentorsList(slug);
      if (mentorsData?.status) {
        categoryDetailsData = { ...categoryDetailsData, mentors: mentorsData?.result }
      }

      //  get top openings list 
      const topOpeningsData = await getCategoryTopOpenings(slug);
      if (topOpeningsData?.status) {
        categoryDetailsData = { ...categoryDetailsData, topOpenings: topOpeningsData?.result }
      }

      // targets roles list
      const targetsRolesData = await getCategoryTargetsRoles(slug);
      if (targetsRolesData?.status) {
        categoryDetailsData = { ...categoryDetailsData, targetsRoles: targetsRolesData?.result }
      }

      // Recruiters list 
      const recruitersData = await getCategoryTopRecruiters(slug);
      if (recruitersData?.status) {
        categoryDetailsData = { ...categoryDetailsData, topRecruiters: recruitersData?.result }
      }

      // get category courses list
      const categoryCoursesData = await getCategoryCoursesList({ category_slug: slug, limit: 5, course_mode: 'Online' });
      if (categoryCoursesData?.status) {
        categoryDetailsData = { ...categoryDetailsData, categoryCourses: categoryCoursesData?.result }
      }

      // get category courses list
      const categoryTestmonialsData = await getCategoryTestmonials({ category_slug: slug });
      if (categoryTestmonialsData?.status) {
        categoryDetailsData = { ...categoryDetailsData, testmonialsData: categoryTestmonialsData?.result }
      }



      pageType = 'category';
    } else if (course?.length > 0) {
      // get course details
      const courseData = await getCoursesDetails(parameters);
      if (courseData?.status) {
        courseDetails = courseData?.result
      }

      if (courseDetails) {

        // get course features
        const courseFeatures = await getCoursesFeatures(parameters);
        if (courseFeatures?.status) {
          courseDetails = { ...courseDetails, features: courseFeatures?.result || null }
        }

        // get course highlights
        const courseHighlights = await getCoursesHighlights(parameters);
        if (courseHighlights?.status) {
          courseDetails = { ...courseDetails, highlights: courseHighlights?.result || null }
        }

        // get course tools
        const courseTools = await getCoursesTools(parameters);
        if (courseTools?.status) {
          courseDetails = { ...courseDetails, tools: courseTools?.result || null }
        }

        // get course curriculum
        const courseCurriculum = await getCoursesCurriculum(parameters);
        if (courseCurriculum?.status) {
          courseDetails = { ...courseDetails, curriculum: courseCurriculum?.result || null }
        }

        // get course cohorts
        const courseCohorts = await getCoursesCohorts(parameters);
        if (courseCohorts?.status) {
          courseDetails = { ...courseDetails, cohort_details: courseCohorts?.result || null }
        }

        // get course fee
        const courseFee = await getCoursesFee(parameters);
        if (courseFee?.status) {
          courseDetails = { ...courseDetails, fee: courseFee?.result || null }
        }

        // get course mentors
        const courseMentors = await getCoursesMentors(parameters);
        if (courseMentors?.status) {
          courseDetails = { ...courseDetails, mentors: courseMentors?.result || null }
        }

        // get course testimonials
        const courseTestimonials = await getCoursesTestimonials(parameters);
        if (courseTestimonials?.status) {
          courseDetails = { ...courseDetails, testimonials: courseTestimonials?.result || null }
        }

        // get course faqs
        const courseFAQs = await getCoursesFaqs(parameters);
        if (courseFAQs?.status) {
          courseDetails = { ...courseDetails, faqs: courseFAQs?.result || null }
        }

        pageType = 'course';
      }
    } else if (center?.length > 0) {

      // center details api
      const centerData = await getCentersDetails({ center_slug: slug });
      if (centerData?.status) {
        centerDetailsData = { ...centerDetailsData, centerDetailsAllData: centerData?.result }
      }

      // center details api
      const centersAlumnies = await getCentersAlumnies({ center_slug: slug });
      if (centersAlumnies?.status) {
        centerDetailsData = { ...centerDetailsData, centerAlumniesData: centersAlumnies?.result }
      }

      //  get category details 
      const centerCoursers = await getCentersCoursesList({ center_slug: slug, course_mode: 'Offline' });
      if (centerCoursers?.status) {
        centerDetailsData = { ...centerDetailsData, coursersData: centerCoursers?.result }
      }

      //  inpect full numbers list api
      const impactFullNumbers = await getImpactFulNumbersList();
      if (impactFullNumbers?.status) {
        centerDetailsData = { ...centerDetailsData, impactFullNumbersData: impactFullNumbers?.result }
      }


      // top recruitersList api
      const topRecuriters = await getTopCompaniesList();
      if (topRecuriters?.status) {
        centerDetailsData = { ...centerDetailsData, topRecuritersData: topRecuriters?.result }
      }

      // testimonials list Api
      const centerTestmonials = await getTestmonialsList({ module_name: 'course', limit: 30 });
      if (centerTestmonials?.status) {
        centerDetailsData = { ...centerDetailsData, centerTestmonialsData: centerTestmonials?.result }
      }

      //center faq data Api
      const centerFaq = await getCentersFaq({ center_slug: slug });
      if (centerFaq?.status) {
        centerDetailsData = { ...centerDetailsData, centerFaqData: centerFaq?.result }
      }

      // center list data api
      const centersListData = await getCentersList({ show_in_web: true });
      if (centersListData?.status) {
        centerDetailsData = { ...centerDetailsData, centerListData: centersListData?.result }
      }
      pageType = 'center';
    }

    if (pageType != 'center') {
      const getStickyAdsDataResponse = await getStickyAdsContent(slug);
      if (getStickyAdsDataResponse?.status) {
        stickyAdsData = getStickyAdsDataResponse?.result[0] || null;
      }
    }
  }

  // Handle the case where data is not found
  if (!pageType) {
    notFound();
  }

  return (
    <div>
      {pageType == 'category' && (
        <>
          <CourseCategory categoryDetailsData={categoryDetailsData} stickyAdsData={stickyAdsData} />
        </>
      )}
      {pageType == 'course' && (
        <>
          {courseDetails?.page_type == 2 &&
            <CourseDetailsDA details={courseDetails} params={params} stickyAdsData={stickyAdsData} /> || courseDetails?.page_type == 3 && <CourseDetailsEH details={courseDetails} params={params} stickyAdsData={stickyAdsData} />
            ||
            <CouresDetails details={courseDetails} params={params} stickyAdsData={stickyAdsData} />
          }
        </>
      )}
      {pageType == 'center' && (
        <>
          {/* <MainCenterDetails centerCoursesData={centerDetailsData} params={params} /> */}
          <MainCenterDetails centerCoursesData={centerDetailsData} params={params} />
        </>
      )}
    </div>
  );
}

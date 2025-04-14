import { getCategoryList, getStickyAdsContent } from '@/_services/categoryService';
import { getCoursesCohorts, getCoursesCurriculum, getCoursesDetails, getCoursesFaqs, getCoursesFeatures, getCoursesFee, getCoursesHighlights, getCoursesList, getCoursesMentors, getCoursesTestimonials, getCoursesTools } from '@/_services/courseService';
import { getCentersList } from '@/_services/centerService';
import CouresDetails from '@/components/Course/CourseDetails';
import { getMetaData } from '@/_services/otherService';
import PageNotFound from '@/components/Layouts/Common/PageNotFound';
import { notFound } from 'next/navigation';

//generate meta data
export async function generateMetadata({ params }) {
    const { slug, course } = params;
    const metaData = await getMetaData({ slug: `${slug}/${course}` });
    if (metaData) {
        return metaData;
    }
}

export default async function DynamicPage({ params }) {
    const { slug, course } = params;
    let pageType = '';
    let courseDetails = null;
    let stickyAdsData = null;

    const parameters = {
        center_slug: slug,
        course_mode: 'Offline',
        course_slug: course
    }

    if (slug && course) {
        const courses = await getCoursesList();
        const filteredCourse = courses?.result?.filter(item => item?.slug == course);
        if (filteredCourse?.length > 0) {
            // get course details
            const courseData = await getCoursesDetails(parameters);

            if (courseData?.status) {
                courseDetails = courseData?.result || null
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

                const getStickyAdsDataResponse = await getStickyAdsContent(course);
                if (getStickyAdsDataResponse?.status) {
                    stickyAdsData = getStickyAdsDataResponse?.result[0] || null;
                }

                pageType = 'course';
            }
        }
    }

    // Handle the case where data is not found
    if (!pageType) {
        notFound()
    }

    return (
        <>
            {pageType == 'course' && (
                <>
                    <CouresDetails details={courseDetails} params={params} stickyAdsData={stickyAdsData} />
                </>
            )}
        </>
    );
}

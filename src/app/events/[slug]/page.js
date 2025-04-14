import { getMasterClassDetails, getMasterClassFeaturesList, getMasterClassList, getMentorDetails, getTestmonialsList } from "@/_services/eventsService";
import { getCategoryCoursesList } from "@/_services/homeService";
import { getMetaData } from "@/_services/otherService";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";
import MasterClassMain from "@/components/MasterClass/MasterClassDetails/MasterClassMain";


export const dynamic = 'force-dynamic';
export const revalidate = 0;

//generate meta data
export async function generateMetadata({ params }) {
  const { slug } = params;
  const metaData = await getMetaData({ slug: `${slug}`, isEvent: true });
  const robots = {
    index: false,
    follow: false,
  }
  if (metaData) {
    return {
      ...metaData,
      robots
    }
  } else {
    return {
      title: 'Events | ' + process.env.APP_NAME,
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function EventsDetailsPage({ params }) {
  const { slug } = params;
  let eventDetailsData = null;

  if (slug) {
    //  master class details api response
    const eventsAllDetailsData = await getMasterClassDetails({ slug_url: slug });
    if (eventsAllDetailsData?.status) {
      eventDetailsData = eventsAllDetailsData?.result;
      eventDetailsData = { ...eventDetailsData, eventData: eventsAllDetailsData?.result, masterclassId: eventsAllDetailsData?.result?.id, mentorId: eventsAllDetailsData?.result?.Mentors[0].id }
      //  master class features list api response
      if (eventDetailsData?.masterclassId) {
        const masterClassFeatures = await getMasterClassFeaturesList({ classId: eventDetailsData?.masterclassId });
        if (masterClassFeatures?.status) {
          eventDetailsData = { ...eventDetailsData, masterClassFeaturesData: masterClassFeatures?.result }
        }
      }
      //  master class upcomming list api response
      const upcommingEvents = await getMasterClassList({ limit: 3, class_mode: eventDetailsData?.class_mode });
      if (upcommingEvents?.status) {
        eventDetailsData = { ...eventDetailsData, upcommingEventsData: upcommingEvents?.result }
      }

      //  get testmonials list api response
      const eventsTestmonials = await getTestmonialsList({ module_name: 'course', limit: 30 });
      if (eventsTestmonials?.status) {
        eventDetailsData = { ...eventDetailsData, eventsTestmonialsData: eventsTestmonials?.result }
      }

      //  get Mentor details api response
      if (eventDetailsData?.mentorId) {
        const mentorsInfo = await getMentorDetails({ mentor_id: eventDetailsData?.mentorId });
        if (mentorsInfo?.status) {
          eventDetailsData = { ...eventDetailsData, mentorsData: mentorsInfo?.result }
        }
      }

      //  get category courses list data
      const categoryCourses = await getCategoryCoursesList({
        category_slug: slug,
        limit: 1
      });
      if (categoryCourses?.status) {
        eventDetailsData = { ...eventDetailsData, categoryCoursesData: categoryCourses?.result }
      }

    } else {
      return (
        <>
          <PageNotFound />
        </>
      );
    }
  }

  return (
    <>
      <MasterClassMain
        masterClassDetailsData={eventDetailsData?.eventData}
        masterClassFeaturesData={eventDetailsData?.masterClassFeaturesData}
        upcommingEventsData={eventDetailsData?.upcommingEventsData}
        eventsTestmonialsData={eventDetailsData?.eventsTestmonialsData}
        mentorsData={eventDetailsData?.mentorsData}
        categoryCoursesData={eventDetailsData?.categoryCoursesData}
      />
    </>
  );
}

import { getCategoryList } from "@/_services/categoryService";
import { getCentersList } from "@/_services/centerService";
import { getMasterClassList } from "@/_services/eventsService";
import { getCategoryCoursesList, getHomeDetails, getHomeMentorsList, getImpactFulNumbersList, getMentorshipCoursesList, getTopRecruitersList } from "@/_services/homeService";
import { getMetaData } from "@/_services/otherService";
import MainHomePage from "@/components/HomePage/MainHomePage";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: 'home-page' });
  if (metaData) {
    return metaData;
  }
}

export default async function Home() {
  let homePageData = null;

  //  inpect full numbers list api
  const impactFullNumbersResponse = await getImpactFulNumbersList();
  if (impactFullNumbersResponse?.status) {
    homePageData = { ...homePageData, impactFullNumbersData: impactFullNumbersResponse?.result }
  }

  //  catergory list api response
  const categories = await getCategoryList();
  if (categories?.status) {
    homePageData = { ...homePageData, categoriesData: categories?.result }

    const homeDetailsDataResponse = await getHomeDetails({ category_slug: 'data' });
    if (homeDetailsDataResponse?.status) {
      homePageData = { ...homePageData, homeDetailsData: homeDetailsDataResponse?.result }
    }
    // top recruitersList response api
    const topRecuritersDataResponse = await getTopRecruitersList({ category_slug: 'data' });
    if (topRecuritersDataResponse?.status) {
      homePageData = { ...homePageData, topRecuritersData: topRecuritersDataResponse?.result }
    }
    //  get category courses list data
    const categoryCoursesResponse = await getMentorshipCoursesList({ category_slug: 'data', limit: 4 });
    if (categoryCoursesResponse?.status) {
      homePageData = { ...homePageData, categoryCoursesData: categoryCoursesResponse?.result }
    }
  }

  //  master class list response
  const masterClassList = await getMasterClassList();
  if (masterClassList?.status) {
    homePageData = { ...homePageData, masterClassListData: masterClassList?.result }
  }

  //  centers list api
  const centersResponse = await getCentersList({ show_in_web: true });
  if (centersResponse?.status) {
    homePageData = { ...homePageData, centersData: centersResponse?.result }
  }

  //  get mentors list response
  const homeMentorsResponse = await getHomeMentorsList();
  if (homeMentorsResponse?.status) {
    homePageData = { ...homePageData, homeMentorsData: homeMentorsResponse?.result }
  }

  return (
    <>
      <MainHomePage
        categoriesList={homePageData?.categoriesData}
        masterClassData={homePageData?.masterClassListData}
        homeDetailsData={homePageData?.homeDetailsData}
        topRecuritersData={homePageData?.topRecuritersData}
        impactFullNumbersData={homePageData?.impactFullNumbersData}
        categoryCoursesData={homePageData?.categoryCoursesData}
        centersData={homePageData?.centersData}
        homeMentorsData={homePageData?.homeMentorsData}
      />
    </>
  );
}

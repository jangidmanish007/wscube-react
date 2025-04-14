import { getMasterClassCategoryList, getMasterClassList, getTestmonialsList } from "@/_services/eventsService";
import { getMetaData } from "@/_services/otherService";
import MainMasterClassListing from "@/components/MasterClass/MasterClassListing/MainMasterClassListing";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `events` });
  if (metaData) {
    return metaData;
  }
}

export default async function EventsPage() {
  let categoryId = 0
  let eventsAllData = null;

  const categories = await getMasterClassCategoryList();
  if (categories?.status) {
    eventsAllData = { ...eventsAllData, categoriesData: categories?.result }
  }

  const masterClassList = await getMasterClassList(categoryId);

  if (masterClassList?.status) {
    eventsAllData = { ...eventsAllData, masterClassListData: masterClassList?.result }
  }


  const eventsTestmonialsResponse = await getTestmonialsList({ module_name: 'master_class', limit: 30 });
  if (eventsTestmonialsResponse?.status) {
    eventsAllData = { ...eventsAllData, eventsTestmonialsData: eventsTestmonialsResponse?.result }
  }

  return (
    <>
      <MainMasterClassListing
        categoriesList={eventsAllData?.categoriesData}
        masterClassListData={eventsAllData?.masterClassListData}
        eventsTestmonialsData={eventsAllData?.eventsTestmonialsData}
      />
    </>
  );
}

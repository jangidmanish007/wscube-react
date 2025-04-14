import ContactUs from "@/components/ContactUs/ContactUs";
import { getCentersList } from "@/_services/centerService";
import { getMetaData } from "@/_services/otherService";

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `contact` });
  if (metaData) {
    return metaData;
  }
}

export default async function ContactUsPage({ searchParams }) {
  let centersData = null;

  //  centers list api
  const centersResponse = await getCentersList({ show_in_web: true });
  if (centersResponse?.status) {
    centersData = centersResponse?.result
  } else {
    centersData = null
  }

  return (
    <ContactUs centers={centersData} utmParameters={searchParams} />
  );
}
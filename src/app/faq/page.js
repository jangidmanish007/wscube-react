import { getFaqBasic } from "@/_services/cmsServices";
import { getMetaData } from "@/_services/otherService";
import MainFaq from "@/components/Faq/MainFaq";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: 'faq' });
  if (metaData) {
    return metaData;
  }
}

export default async function FaqPage() {
  let faqAllData = null;

  //  centers list api
  const faqBasicResponse = await getFaqBasic();
  if (faqBasicResponse?.status) {
    faqAllData = faqBasicResponse?.result
  }

  if (!faqAllData) {
    return (
      <PageNotFound />
    )
  }

  return (
    <>
      <MainFaq faqAllData={faqAllData} />
    </>
  );
}
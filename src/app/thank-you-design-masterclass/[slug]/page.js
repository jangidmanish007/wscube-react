import { getEventShortDetails } from "@/_services/courseService";
import ThankYouMasterEvent from "@/components/Layouts/Common/ThankYouMasterEvent";
import Cookies from "js-cookie";

export async function generateMetadata({ params }) {
  return {
    title: 'Thank You' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ThankYouPage({ params }) {
  const { slug } = params;
  let pageData = null;
  let courseId = Cookies.get('leadCrs');

  if (slug) {
    const content = await getEventShortDetails(slug);
    if (content?.status) {
      pageData = { ...pageData, data: content?.result };
    }
  }
  return (
    <>
      <ThankYouMasterEvent pageData={pageData} />
    </>
  );
}
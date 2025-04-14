import { getEventShortDetails } from "@/_services/courseService";
import ThankYouMaster from "@/components/Layouts/Common/ThankYouMaster";
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


  if (slug) {
    const content = await getEventShortDetails(slug);
    if (content?.status) {
      pageData = { ...pageData, data: content?.result };
    }
  }
  return (
    <>
      <ThankYouMaster pageData={pageData} />
    </>
  );
}
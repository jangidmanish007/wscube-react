import { getEventShortDetails } from "@/_services/courseService";
import ThankYouMaster from "@/components/Layouts/Common/ThankYouMaster";
import Cookies from "js-cookie";
import moment from "moment";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers';

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
  const cookiesStore = cookies();
  let pageData = null;
  let currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  let hasVisited = cookiesStore.get('thankYouPageVisited');
  if (currentTime > hasVisited?.value) {
    redirect('/');
  } else {
    Cookies.remove('thankYouPageVisited');
  }

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
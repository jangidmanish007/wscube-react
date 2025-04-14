// app/about-us/page.js
import { getApplicationCourse } from "@/_services/applicationFormServices";
import ApplyNowThankYou from "@/components/ApplyNow/ApplyNowThankYou";

export default async function ApplyNowThankYouPage({ params }) {
  const { slug } = params;
  let crsData = null;

  const content = await getApplicationCourse(slug);
  if (content?.status) {
    crsData = { ...crsData, data: content?.result }
  }

  return (
    <>
      <ApplyNowThankYou courseData={crsData?.data} />
    </>
  );
}

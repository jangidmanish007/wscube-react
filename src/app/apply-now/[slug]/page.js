// app/about-us/page.js
import { decrypt } from "@/_helper/EncryptDecrypt";
import { getApplicationCourse } from "@/_services/applicationFormServices";
import ApplyNow from "@/components/ApplyNow/ApplyNow";
// generate meta data

let MetaTitle = null;

export default async function ApplyNowPage({ params, searchParams }) {
  const { slug } = params;
  let crsData = null;
  let decryptedJson = null;
  const url = decodeURIComponent(searchParams?.user)?.replace(/ /g, '+');

  if (searchParams?.user && url) {
    decryptedJson = decrypt(url);
  }

  if (slug) {
    const content = await getApplicationCourse(slug);
    if (content?.status) {
      crsData = { ...crsData, data: content?.result }
    }
  }

  return (
    <>
      <ApplyNow pageSlug={slug} courseData={crsData?.data} decryptedJson={decryptedJson} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  let metaData = null;
  if (slug) {
    const content = await getApplicationCourse(slug);
    if (content?.status) {
      metaData = { ...metaData, data: content?.result }
    }
  }

  return {
    title: metaData?.data?.course_name && `${metaData?.data?.course_name} - Application Form` || 'Application Form',
    robots: {
      index: false,
      follow: false,
    },
  };
}

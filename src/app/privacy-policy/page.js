// app/about-us/page.js
import { getMetaData } from "@/_services/otherService";
import PrivacyPolicy from "@/components/CMS/PrivacyPolicy";

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `privacy-policy` });
  if (metaData) {
      return metaData;
  }
}

export default async function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}

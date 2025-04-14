// app/about-us/page.js

import { getMetaData } from "@/_services/otherService";
import TermsAndCondition from "@/components/CMS/TermsAndCondition";

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `terms-and-conditions` });
  if (metaData) {
    return metaData;
  }
}

export default async function TermsAndConditionsPage() {
  return (
    <>
      <TermsAndCondition />
    </>
  );
}

// app/about-us/page.js
import { getMetaData } from "@/_services/otherService";
import RefundPolicy from "@/components/CMS/RefundPolicy";

//generate meta data
export async function generateMetadata() {
  const metaData = await getMetaData({ slug: `refund-and-cancellation` });
  if (metaData) {
    return metaData;
  }
}

export default async function RefundPolicyPage() {
  return (
    <>
      <RefundPolicy />
    </>
  );
}

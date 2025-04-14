import LandingThankYou from "@/components/LandingPages/DigitalMarketing/LandingThankYou";

//generate meta data
export async function generateMetadata() {
  return {
    title: 'Thank You | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DmThankYouPage() {
  return (
    <>
      <LandingThankYou />
    </>
  );
}
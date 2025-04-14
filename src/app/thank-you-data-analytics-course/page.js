import DAThankYou from "@/components/Layouts/Common/DAThankYou";

export async function generateMetadata({ params }) {
  return {
    title: 'Thank You' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DaThankYouPage() {

  return (
    <>
      <DAThankYou />
    </>
  );
}
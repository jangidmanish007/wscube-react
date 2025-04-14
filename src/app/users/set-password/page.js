import SetRegisterdPassword from "@/components/Layouts/Authentication/SetRegisterdPassword";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";

//generate meta data
export async function generateMetadata() {
  return {
    title: 'Set Password | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SetPasswordPage({ searchParams }) {
  return (
    <>
      {searchParams?.token && (
        <SetRegisterdPassword emailToken={(searchParams?.token)?.replace(/ /g, '+')} />
      ) || <PageNotFound />}
    </>
  );
}
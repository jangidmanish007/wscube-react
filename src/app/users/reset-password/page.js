import ResetPasswordMain from "@/components/Layouts/Authentication/ResetPasswordMain";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";

//generate meta data
export async function generateMetadata() {
  return {
    title: 'Reset Password | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ResetPasswordPage({ searchParams }) {
  return (
    <>
      {searchParams?.token && (
        <ResetPasswordMain emailToken={(searchParams?.token)?.replace(/ /g, '+')} />
      ) || <PageNotFound />}
    </>
  );
}
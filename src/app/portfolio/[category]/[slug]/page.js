import { getAwardsList, getProjectList, getTechnicalSkills, portfolioDetails } from "@/_services/portfolioServices";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";
import PortfolioDetailsMain from "@/components/Portfolio/PortfolioDetails/PortfolioDetailsMain";



export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: 'Portfolio Details | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PortfolioDetailsPage({ params, searchParams }) {
  const { slug, category } = params;
  const detailsSlug = category + '/' + slug
  const detailsParams = searchParams?.u ? category + '/' + slug + '?u=' + searchParams?.u : category + '/' + slug;
  let portfolioDetailsData = null;
  let portfolioId = null;

  const portfolioDetailsResponse = await portfolioDetails({ slug_url: detailsParams });


  if (portfolioDetailsResponse?.result) {
    portfolioId = portfolioDetailsResponse?.result?.id
    portfolioDetailsData = { detailsData: portfolioDetailsResponse?.result }

    const projectResponse = await getProjectList({ portfolio_id: portfolioId })

    if (projectResponse?.status) {
      portfolioDetailsData = { ...portfolioDetailsData, portfolioProjects: projectResponse?.result }
    }

    const awardsResponse = await getAwardsList({ portfolio_id: portfolioId })
    if (awardsResponse?.status) {
      portfolioDetailsData = { ...portfolioDetailsData, portfolioAwards: awardsResponse?.result }
    }

    const technicalSkillRes = await getTechnicalSkills();
    if (technicalSkillRes?.status) {
      portfolioDetailsData = { ...portfolioDetailsData, technicalSkillsData: technicalSkillRes?.result }
    }
  } else {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }

  return (
    <>
      <PortfolioDetailsMain portfolioDetailsData={portfolioDetailsData} />
    </>
  );
}
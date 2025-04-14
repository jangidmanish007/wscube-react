import { decryptId } from "@/_helper/EncryptDecrypt";
import { getAwardsList, getProjectList, getTechnicalSkills, portfolioDetailsForAdmin } from "@/_services/portfolioServices";
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

export default async function PortfolioDetailsPage({ params }) {
  const { pId } = params;
  let portfolioDetailsData = null;
  let portfolioId = null;
  let urlId = null;

  if (pId) {
    const decodedQuery = decodeURIComponent(pId); // Decode before decryption
    urlId = decryptId(decodedQuery);
  }

  if (urlId) {
    const portfolioDetailsResponse = await portfolioDetailsForAdmin({ portfolio_id: urlId });

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
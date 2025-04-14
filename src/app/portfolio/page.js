import { getPortfolioCategoryList, getPortfolioList, portfolioCategoryDetails } from "@/_services/portfolioServices";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";
import PortfolioListingMain from "@/components/Portfolio/PortfolioListing/PortfolioListingMain";


export async function generateMetadata({ params }) {
  return {
    title: 'Portfolio Listing | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PortfolioPage() {
  let portfolioListingData = null;


  const categoryDetails = await portfolioCategoryDetails();
  if (categoryDetails?.status) {
    portfolioListingData = { portfolioCategoryData: categoryDetails?.result }
  } else {
    return (
      <PageNotFound />
    );
  }

  return (
    <>
      <PortfolioListingMain portfolioListingData={portfolioListingData} />
    </>
  );
}
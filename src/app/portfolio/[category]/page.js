import { getPortfolioCategoryList, getPortfolioList, portfolioCategoryDetails } from "@/_services/portfolioServices";
import PageNotFound from "@/components/Layouts/Common/PageNotFound";
import PortfolioListingMain from "@/components/Portfolio/PortfolioListing/PortfolioListingMain";

export async function generateMetadata() {
  return {
    title: 'Portfolio Listing | ' + process.env.APP_NAME,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PortfolioCategoryPage({ params }) {
  const slug = params;
  const categorySlug = params?.category;
  let portfolioListingData = null;

  const categoryDetails = await portfolioCategoryDetails({ category_slug: categorySlug });
  if (categoryDetails?.status) {
    portfolioListingData = { portfolioCategoryData: categoryDetails?.result }
  } else {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }

  return (
    <>
      <PortfolioListingMain portfolioListingData={portfolioListingData} categorySlug={categorySlug} />
    </>
  );
}
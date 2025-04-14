'use client';
import React from 'react';
import PortfolioListingBanner from './PortfolioListingBanner';
import CreatePortfolio from './CreatePortfolio';
import UserPortfolioCategory from './UserPortfolioCategory';

export default function PortfolioListingMain({ portfolioListingData, categorySlug }) {
  return (
    <>
      <PortfolioListingBanner portfolioBannerData={portfolioListingData?.portfolioCategoryData} />
      <CreatePortfolio categorySlug={categorySlug} />
      <UserPortfolioCategory
        usersPortfolioData={portfolioListingData?.portfolioData}
        portfolioCategoryList={portfolioListingData?.categoryListData}
        categorySlug={categorySlug}
      />
      {/* <PortfolioBenefits />
      <PortfolioBottomContent /> */}
    </>
  );
}

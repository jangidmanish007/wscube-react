import React from 'react';
import BannerLeftSide from './BannerLeftSide';
import BannerRightSide from './BannerRightSide';

export default function MainBanner({ impactFullNumberData, handleButtonClick }) {
  return (
    <section className="pt-lg-175 pb-86 pt-106 banner-section position-relative">
      <div className="header-gradiant w-100 min-h-183 position-absolute top-0 start-0 d-lg-block d-none"></div>
      <div className="container-main container-w-xl-1202">
        <div className="d-xl-flex justify-content-between align-items-start banner-content-box">
          <BannerLeftSide impactFullNumberData={impactFullNumberData} handleButtonClick={handleButtonClick} />
          <BannerRightSide />
        </div>
      </div>
    </section>
  );
}

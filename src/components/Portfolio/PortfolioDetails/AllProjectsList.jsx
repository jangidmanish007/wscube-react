import Image from 'next/image';
import React, { useState } from 'react';
import parse from 'html-react-parser';

export default function AllProjectsList({ handleViewProjectPopup, portfolioProjectsList }) {
  const [displayedItemCount, setDisplayedItemCount] = useState(12);
  const fullContent = (portfolioProjectsList?.length <= 12 && true) || false;
  const [showFullContent, setShowFullContent] = useState(fullContent);

  const handleSeeAllClick = () => {
    setShowFullContent(true);
    setDisplayedItemCount(portfolioProjectsList?.length);
  };

  return (
    <section className="mb-52">
      <div className="container-main container-w-xl-1202">
        <div className="mb-20">
          <h3 className="fs-22 fw-600 lh-33 text-color-1 mb-0">All Projects</h3>
        </div>
        <div className="row mb-32">
          {portfolioProjectsList?.slice(0, displayedItemCount).map((item, index) => {
            return (
              <div className="col-xl-4 col-md-6 col-12 mb-20" key={index}>
                <div className="custom-card h-100 rounded-12 bg-color-19 border-w-2 hover-shadow-4">
                  <div className="custom-card-body">
                    <div className="img-box h-size-190 rounded-12 rounded-bottom-0 overflow-hidden position-relative">
                      <Image
                        src={`${process.env.IMG_PATH}${item?.project_cover_photo}`}
                        width={377}
                        height={190}
                        className="w-full img-fuild object-fit-cover"
                      />
                      <div
                        className="position-absolute bottom-0 start-0 w-full h-full d-flex align-items-end px-28 pb-31"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 62.89%, rgba(0, 0, 0, 0.6) 92.02%)',
                        }}
                      >
                        <div className="d-flex grid-gap-10">
                          {item?.main_tools?.slice(0, 2).map((tool, toolkey) => {
                            return (
                              <div
                                className="d-flex align-items-center rounded-2 py-1 px-2 min-h-26 bg-white"
                                key={toolkey}
                              >
                                {tool?.skill_img_url && (
                                  <div className="img-box mr-8 d-inline-flex">
                                    <Image
                                      src={`${process.env.IMG_PATH}${tool?.skill_img_url}`}
                                      width={17}
                                      height={17}
                                      className="img-fluid min-w-17 min-h-17 max-w-17"
                                    />
                                  </div>
                                )}
                                <span className="text-nowrap fs-12 fw-400 lh-21 text-color-1 d-block">
                                  {tool?.title}
                                </span>
                              </div>
                            );
                          })}
                          {item?.main_tools?.length > 2 && (
                            <div className="d-flex align-items-center rounded-2 py-1 px-2 min-h-26 bg-white">
                              <span className="text-nowrap fs-12 fw-400 lh-21 text-color-1 d-block">
                                {`${item.main_tools.length - 2} more...`}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="px-28 pt-28">
                      <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12 line-clamp-3" title={item?.project_title}>
                        {item?.project_title}
                      </h3>
                      {item?.short_description && (
                        <div
                          className="fs-16 fw-400 lh-24 text-color-34 mb-0 line-clamp-3"
                          // title={item?.project_description}
                        >
                          {parse(item?.short_description)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="custom-card-footer px-28 py-28">
                    <button
                      className="outline-none fs-14 hover-shadow-2 min-h-46 bg-color-3 fw-600 text-white border-w-2 rounded-12 min-h-40 px-lg-16 px-12"
                      onClick={() => handleViewProjectPopup(item)}
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!showFullContent && (
          <div className="row">
            <div className="col-12 text-center">
              <button
                className="outline-none fs-14 hover-shadow-2 min-h-40 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-lg-20 px-14"
                onClick={handleSeeAllClick}
              >
                <Image src={`/images/portfolio/exchange-icon.svg`} width={14} height={12} alt="icon" className="mr-8" />
                Load more...
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

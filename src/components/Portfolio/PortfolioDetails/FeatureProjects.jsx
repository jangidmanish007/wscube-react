import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '@/components/Layouts/Common/CustomArrowBtn';

export default function FeatureProjects({ featuredProject, handlePortfolioPopup, handleViewProjectPopup }) {
  const settings = {
    dots: (featuredProject?.project_presentation_photos?.length > 1 && true) || false,
    infinite: (featuredProject?.project_presentation_photos?.length > 1 && true) || false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: (featuredProject?.project_presentation_photos?.length > 1 && true) || false,
    draggable: (featuredProject?.project_presentation_photos?.length > 1 && true) || false,
    swipeToSlide: (featuredProject?.project_presentation_photos?.length > 1 && true) || false,
  };
  function downloadFile(url) {
    window.open(`${process.env.IMG_PATH}${url}`, '_blank');
  }

  return (
    <section className="mb-52">
      <div className="container-main container-w-xl-1202">
        <div className="d-inline-block feature-project-heading pt-12 pl-22 pr-30">
          <h2 className="fs-22 lh-33 fw-600 text-color-1 mb-0">Feature Projects</h2>
        </div>
        <div
          className=""
          style={{
            background: 'linear-gradient(96.4deg, #E5EBFF 10.5%, #FFF5E6 92.28%)',
            borderRadius: '0 12px 12px 12px',
          }}
        >
          <div className="d-xl-flex grid-gap-14 pb-41 pt-39 px-lg-36 px-20">
            <div className="w-full max-w-xl-596">
              <h3 className="fs-18 fw-600 lh-27 text-color-1">{featuredProject?.project_title}</h3>
              <div className="d-xl-none d-block max-w-500 mx-auto mt-30 mb-60">
                <div
                  className={`slider-with-dots custom-arrows product-companies-arrow portfolio-arrows px-lg-20 mb-30 feature-projects-prev-img`}
                >
                  <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                    {(featuredProject?.project_presentation_photos?.length > 0 &&
                      featuredProject?.project_presentation_photos?.map((item, index) => {
                        return (
                          <div className="px-1" key={index}>
                            <div className="img-box">
                              <Image
                                src={`${process.env.IMG_PATH}${item}`}
                                width={488}
                                height={274}
                                className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 min-h-274 object-fit-cover"
                              />
                            </div>
                          </div>
                        );
                      })) || (
                      <div className="px-1">
                        <div className="img-box">
                          <Image
                            src={`${process.env.IMG_PATH}${featuredProject?.project_cover_photo}`}
                            width={488}
                            height={274}
                            alt="Image"
                            className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 min-h-274 object-fit-cover"
                          />
                        </div>
                      </div>
                    )}
                  </Slider>
                </div>
              </div>
              {featuredProject?.short_description && (
                <div className="fs-16 fw-400 lh-24 text-color-34 mb-28">
                  {parse(featuredProject?.short_description)}
                </div>
              )}
              <ul className="list-unstyled d-flex flex-wrap grid-gap-12 mb-32">
                {featuredProject?.linkedin_post_link && (
                  <li className="border-w border-color-45 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                    <Link href={featuredProject?.linkedin_post_link} legacyBehavior>
                      <a rel="nofollow" target="_blank">
                        <div className="d-flex align-items-center">
                          <div className="img-box mr-8">
                            <Image
                              src={`/images/portfolio/linkdin-icon.svg`}
                              width={18}
                              height={18}
                              alt="icon"
                              className=""
                            />
                          </div>
                          <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1">View Project Engagement</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                )}
                {featuredProject?.github_project_link && (
                  <li className="border-w border-color-45 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                    <Link href={featuredProject?.github_project_link} legacyBehavior>
                      <a rel="nofollow" target="_blank">
                        <div className="d-flex align-items-center">
                          <div className="img-box mr-8">
                            <Image
                              src={`/images/portfolio/github-icon.svg`}
                              width={18}
                              height={18}
                              alt="icon"
                              className=""
                            />
                          </div>
                          <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1">View on Github</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                )}
                {/* {featuredProject?.pdf_url && (
                  <li
                    className="border-w border-color-45 rounded-pill bg-color-2 py-lg-14 py-10 px-16"
                    style={{ background: '#194CFF1A' }}
                    onClick={() => downloadFile(featuredProject?.pdf_url)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-box mr-8">
                        <Image src={`/images/download.svg`} width={18} height={18} alt="icon" className="" />
                      </div>
                      <span className="fs-14 fw-400 lh-21 text-color-1">Download Project</span>
                    </div>
                  </li>
                )} */}
              </ul>
              {featuredProject?.project_video_link && (
                <div className="d-flex align-items-center">
                  <div
                    className="cursor-pointer rounded-circle d-inline-block mr-12"
                    style={{ border: '2px solid #0000004D' }}
                    onClick={() =>
                      handlePortfolioPopup(featuredProject?.project_video_link, featuredProject?.project_title)
                    }
                  >
                    <Image
                      src={process.env.IMG_PATH + `images/icons/play-fill-icon.svg`}
                      width={36}
                      height={36}
                      alt="banner-img"
                      className="img-fluid rounded-20 w-size-36 h-size-36"
                    />
                  </div>
                  <span
                    className="fs-14 fw-400 lh-21 text-color-3 cursor-pointer"
                    onClick={() =>
                      handlePortfolioPopup(featuredProject?.project_video_link, featuredProject?.project_title)
                    }
                  >
                    Project Video
                  </span>
                </div>
              )}
            </div>
            <div className="w-full max-w-xl-498 d-xl-block d-none">
              <div
                className={`slider-with-dots custom-arrows product-companies-arrow portfolio-arrows px-lg-20 mb-30 feature-projects-prev-img`}
              >
                <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                  {(featuredProject?.project_presentation_photos?.length > 0 &&
                    featuredProject?.project_presentation_photos?.map((item, index) => {
                      return (
                        <div className="px-1" key={index}>
                          <div className="img-box">
                            <Image
                              src={`${process.env.IMG_PATH}${item}`}
                              width={488}
                              height={274}
                              className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 min-h-274 object-fit-cover"
                            />
                          </div>
                        </div>
                      );
                    })) || (
                    <div className="px-1">
                      <div className="img-box">
                        <Image
                          src={`${process.env.IMG_PATH}${featuredProject?.project_cover_photo}`}
                          width={488}
                          height={274}
                          className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 min-h-274 object-fit-cover"
                        />
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
          <div
            className="d-lg-flex justify-content-between py-18 px-lg-36 px-28 align-items-center"
            style={{ background: '#FFFFFF99' }}
          >
            <div className="d-sm-flex mb-lg-0 mb-22 justify-content-center">
              <h3 className="fs-14 lh-21 fw-400 text-color-1 mb-0 py-9 mr-12 text-nowrap text-sm-start text-center">
                Technology Stack:
              </h3>
              <ul className="list-unstyled d-flex justify-content-sm-start justify-content-center flex-wrap grid-gap-12 mb-0">
                {featuredProject?.main_tools?.map((item, index) => {
                  return (
                    <li className="border-w border-color-28 rounded-8 py-8 px-12 min-h-37 bg-white" key={index}>
                      <div className="d-flex align-items-center">
                        {item?.skill_img_url && (
                          <div className="img-box mr-8">
                            <Image
                              src={`${process.env.IMG_PATH}${item?.skill_img_url}`}
                              width={18}
                              height={18}
                              className="img-fluid"
                            />
                          </div>
                        )}
                        <span className="text-nowrap fs-14 fw-400 lh-21 text-color-1 text-nowrap">{item?.title}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-lg-start text-center text-nowrap">
              <span
                className="fs-14 fw-600 lh-21 text-color-3 d-inline-block mx-lg-0 mx-auto cursor-pointer"
                onClick={() => handleViewProjectPopup(featuredProject)}
              >
                View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={20} height={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

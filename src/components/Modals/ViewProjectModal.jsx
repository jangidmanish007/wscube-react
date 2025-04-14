import Image from 'next/image';
import React from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';
import { extractYouTubeVideoId } from '@/_helper/Common';
import parse from 'html-react-parser';
import Link from 'next/link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ViewProjectModal({ showProjectModal, setShowProjectModal, viewProjectData }) {
  const settings = {
    dots: (viewProjectData?.project_presentation_photos?.length > 1 && true) || false,
    infinite: (viewProjectData?.project_presentation_photos?.length > 1 && true) || false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: (viewProjectData?.project_presentation_photos?.length > 1 && true) || false,
    draggable: (viewProjectData?.project_presentation_photos?.length > 1 && true) || false,
    swipeToSlide: (viewProjectData?.project_presentation_photos?.length > 1 && true) || false,
  };

  const match = extractYouTubeVideoId(viewProjectData?.project_video_link);
  const embeddedUrl = `https://www.youtube.com/embed/${match}`;

  function downloadFile(url) {
    window.open(`${process.env.IMG_PATH}${url}`, '_blank');
  }

  return (
    <Modal
      show={showProjectModal}
      centered
      onHide={() => setShowProjectModal(false)}
      // backdrop="static"
      keyboard={false}
      className="rounded-16 p-2 bg-transparent landing-page-video-modal project-modal"
    >
      <Modal.Body className={`w-full postion-relative p-0 max-w-1202 mx-auto rounded-12 bg-white`}>
        <div className="position-relative px-12 py-14 border-w border-color-45 border-top-0 border-start-0 border-end-0 d-flex justify-content-between">
          <h4 className="fs-18 fw-600 text-color-1 lh-27 mb-0 line-clamp-1">{viewProjectData?.project_title}</h4>
          <Image
            src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
            width={24}
            height={24}
            alt="Close"
            onClick={() => setShowProjectModal(false)}
            className="img-fluid cursor-pointer  ml-10"
          />
        </div>
        <div className="project-modal-content px-lg-36 py-lg-36 px-md-24 px-18 py-14">
          <div className="d-flex flex-wrap grid-gap-38 mb-lg-94 mb-40 mt-lg-0 mt-20">
            <div className="max-w-xl-547 max-w-lg-500 max-w-400 w-full mx-auto mb-lg-0 mb-20">
              <div
                className={`slider-with-dots custom-arrows product-companies-arrow portfolio-arrows px-lg-20 feature-projects-prev-img`}
              >
                <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                  {(viewProjectData?.project_presentation_photos?.length > 0 &&
                    viewProjectData?.project_presentation_photos?.map((item, index) => {
                      return (
                        <div className="px-1" key={index}>
                          <div className="img-box">
                            <Image
                              src={`${process.env.IMG_PATH}${item}`}
                              width={488}
                              height={274}
                              className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 object-fit-cover"
                            />
                          </div>
                        </div>
                      );
                    })) || (
                    <div className="px-1">
                      <div className="img-box">
                        <Image
                          src={`${process.env.IMG_PATH}${viewProjectData?.project_cover_photo}`}
                          width={488}
                          height={274}
                          className="img-fuild border-w border-color-1 w-full h-auto rounded-16 reverse-shadow-4 max-h-274 object-fit-cover"
                        />
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
            <div className="max-w-xl-512 max-w-lg-460 max-w-md-400 w-full">
              <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12 line-clamp-3 overflow-hidden">
                {viewProjectData?.project_title}
              </h3>
              {viewProjectData?.short_description && (
                <div className="fs-14 fw-400 lh-21 text-color-34 mb-20 overflow-hidden" style={{ maxWidth: '100%' }}>
                  {parse(viewProjectData?.short_description)}
                </div>
              )}
              <div className="mb-40 d-flex flex-wrap grid-gap-10">
                {viewProjectData?.main_tools.map((tools, toolsIndex) => {
                  return (
                    <div
                      className="d-flex align-items-center border-w border-color-28 rounded-8 py-8 px-12 min-h-37"
                      key={toolsIndex}
                    >
                      <div className="img-box mr-8 h-size-28 max-w-21 min-w-21">
                        <Image
                          alt="icon"
                          width="21"
                          height="28"
                          className="img-fluid w-auto max-w-21"
                          src={`${process.env.IMG_PATH}${tools?.skill_img_url}`}
                        />
                      </div>
                      <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1">{tools?.title}</span>
                    </div>
                  );
                })}
              </div>
              <ul className="list-unstyled d-flex flex-wrap grid-gap-12">
                {viewProjectData?.linkedin_post_link && (
                  <li className="border-w border-color-45 rounded-pill py-8 px-16" style={{ background: '#194CFF1A' }}>
                    <Link href={viewProjectData?.linkedin_post_link} legacyBehavior>
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
                          <span className="fs-14 fw-400 lh-21 text-color-1">View Project Engagement</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                )}
                {viewProjectData?.github_project_link && (
                  <li className="border-w border-color-45 rounded-pill py-8 px-16" style={{ background: '#194CFF1A' }}>
                    <Link href={viewProjectData?.github_project_link} legacyBehavior>
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
                          <span className="fs-14 fw-400 lh-21 text-color-1">View on Github</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                )}
                {viewProjectData?.pdf_url && (
                  <li
                    className="border-w border-color-45 rounded-pill py-8 px-16 cursor-pointer"
                    style={{ background: '#194CFF1A' }}
                    onClick={() => downloadFile(viewProjectData?.pdf_url)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="img-box mr-8">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={20} height={20} />
                        {/* <Image src={`/images/download.svg`} width={18} height={18} alt="icon" className="" /> */}
                      </div>
                      <span className="fs-14 fw-400 lh-21 text-color-1">View Project</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="border-w w-full border-top-0 border-color-44 mb-lg-60 mb-40"></div>
          <div className="project-details-modal-wrapper">
            <div className="mb-lg-40 pb-20">
              <h4 className="fs-18 fw-600 lh-27 text-color-1 mb-12">Project Details</h4>
              {viewProjectData?.project_description && (
                <div
                  className="bottom-content-box-wrapper project-modal-content overflow-hidden"
                  style={{ maxWidth: '100%' }}
                >
                  {parse(viewProjectData?.project_description)}
                </div>
              )}
            </div>
            {match && (
              <div className="modal-video-box-wrapper w-full max-w-739">
                <h4 className="fs-18 fw-600 lh-27 text-color-1 mb-12">Project Video</h4>
                <iframe
                  width="100%"
                  src={embeddedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-12 h-size-361"
                ></iframe>
              </div>
            )}
            {viewProjectData?.live_dashboard_link && (
              <div className="w-full mt-lg-60 mt-40">
                <h4 className="fs-18 fw-600 lh-27 text-color-1 mb-22">Project Preview</h4>
                <iframe
                  width="100%"
                  src={viewProjectData?.live_dashboard_link}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-12 h-size-350 h-size-lg-600"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import parse from 'html-react-parser';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { handleUrlCopy } from '@/_helper/Common';

export default function PortfolioDetailsBanner({ handlePortfolioPopup, bannerData }) {
  const [tooltipText, setTooltipText] = useState('Copy Link');
  const [isCopied, setIsCopied] = useState(false);
  const countOccurrences = (str, pattern) => {
    const regex = new RegExp(pattern, 'gi');
    return (str?.match(regex) || [])?.length;
  };
  const privateEmail = countOccurrences(bannerData?.userInfo?.email, 'XX') > 3;
  const privateMobile = countOccurrences(bannerData?.userInfo?.phone_number, 'XX') > 2;

  const outputRef = useRef(null);

  function copyOutputToClipboard(event) {
    const outputText = outputRef.current.innerText;
    const tempElement = document.createElement('textarea');
    tempElement.value = outputText;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    toast.success('Email Copied', toastConfig);
    event.target.setAttribute('title', 'Copied!');
  }

  function resetButtonTitle(event) {
    event.target.setAttribute('title', 'Click to copy');
  }

  function downloadResume(url) {
    window.open(`${process.env.IMG_PATH}${url}`, '_blank');
  }

  return (
    <>
      <section className="cms-banner h-size-lg-295 h-size-240 position-relative">
        <div className="header-gradiant w-100 min-h-145 position-absolute top-0 start-0 d-block"></div>
      </section>
      <section className="portfolio-details-banner-section mb-40">
        <div className="container-main container-w-xl-1202">
          <div className="portfolio-banner-wrapper position-relative" style={{ marginTop: '-116px' }}>
            <div className="user-portfolio-info bg-color-31 rounded-12 d-xl-flex rounded-12 rounded-tr-0 mb-8">
              <div
                className="portifolio-user-info w-full max-w-xl-734 px-md-40 px-16 rounded-12 rounded-end-0 pb-lg-0 pb-20"
                style={{ borderRight: '1px solid var(--label-color-43)' }}
              >
                <div className="d-flex grid-gap-md-48 grid-gap-30 pb-lg-0 pb-20 pt-lg-0 pt-24">
                  <div className="py-lg-20">
                    <div className="img-box w-size-lg-181 max-h-181 w-size-120 position-relative user-profile-img-wrapper">
                      {(bannerData?.userInfo?.profile_pic && (
                        <Image
                          src={`${process.env.IMG_PATH}${bannerData?.userInfo?.profile_pic}`}
                          width={181}
                          height={181}
                          className="rounded-circle img-fuild w-size-lg-181 w-size-120 h-size-lg-181 h-size-120 object-fit-cover user-portfolio-img"
                        />
                      )) || (
                        <Image
                          src={`/images/portfolio/default-user-avtar.svg`}
                          width={181}
                          height={181}
                          className="rounded-circle img-fuild w-size-lg-181 w-size-120 h-size-lg-181 h-size-120 object-fit-cover user-portfolio-img"
                        />
                      )}
                      {bannerData?.introVideoUrl && (
                        <div
                          className="position-absolute cursor-pointer rounded-circle play-btn-box"
                          style={{ bottom: '10px', right: '0px', border: '4px solid #0000004D' }}
                          onClick={() =>
                            handlePortfolioPopup(bannerData?.introVideoUrl, bannerData?.userInfo?.full_name)
                          }
                        >
                          <Image
                            src={process.env.IMG_PATH + `images/icons/play-fill-icon.svg`}
                            width={44}
                            height={44}
                            alt="banner-img"
                            className="img-fluid rounded-20 w-size-44 h-size-44"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="user-details-data py-lg-24 w-full">
                    <Image
                      src={`/images/portfolio/hello-i-am-img.svg`}
                      width={120}
                      height={30}
                      className="img-fluid hello-img"
                    />
                    <h3 className="fs-lg-32 fs-26 fw-600 lh-lg-48 lh-42 text-color-1 mb-8 user-name max-w-lg-378 max-w-185 overflow-hidden line-clamp-3">
                      {bannerData?.userInfo?.full_name}
                    </h3>
                    <div className="fs-14 fw-400 lh-21 text-color-34 mb-lg-20 mb-6 max-w-lg-378 max-w-185 overflow-hidden">
                      {(bannerData?.userInfo?.highlights && <>{parse(bannerData?.userInfo?.highlights)}</>) ||
                        'Product | Growth | MDI Gurgaon | HBTU Kanpur'}
                    </div>
                    <ul className="d-lg-flex flex-wrap list-unstyled grid-gap-12 mb-0 d-none">
                      {bannerData?.userInfo?.UsersWorkProfile?.resume_url && (
                        <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16 cursor-pointer">
                          <div onClick={() => downloadResume(bannerData?.userInfo?.UsersWorkProfile?.resume_url)}>
                            <div className="d-flex align-items-center">
                              <div className="img-box mr-8">
                                <Image
                                  src={`/images/portfolio/resume-icon.svg`}
                                  width={20}
                                  height={20}
                                  alt="icon"
                                  className=""
                                />
                              </div>
                              <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">Resume</span>
                            </div>
                          </div>
                        </li>
                      )}
                      {bannerData?.userInfo?.UsersWorkProfile?.linkedin_url && (
                        <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                          <Link href={`${bannerData?.userInfo?.UsersWorkProfile?.linkedin_url}`} legacyBehavior>
                            <a rel="nofollow" target="_blank">
                              <div className="d-flex align-items-center">
                                <div className="img-box mr-8">
                                  <Image src={`/images/portfolio/linkdin-icon.svg`} width={20} height={20} alt="icon" />
                                </div>
                                <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">LinkedIn</span>
                              </div>
                            </a>
                          </Link>
                        </li>
                      )}
                      {bannerData?.githubLink && (
                        <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                          <Link href={`${bannerData?.githubLink}`} legacyBehavior>
                            <a rel="nofollow" target="_blank">
                              <div className="d-flex align-items-center">
                                <div className="img-box mr-8">
                                  <Image
                                    src={`/images/portfolio/github-icon.svg`}
                                    width={20}
                                    height={20}
                                    alt="icon"
                                    className=""
                                  />
                                </div>
                                <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">Github</span>
                              </div>
                            </a>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <ul className="d-lg-none flex-wrap list-unstyled grid-gap-12 mb-0 d-flex">
                  {bannerData?.userInfo?.UsersWorkProfile?.resume_url && (
                    <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                      <div onClick={() => downloadResume(bannerData?.userInfo?.UsersWorkProfile?.resume_url)}>
                        <div className="d-flex align-items-center">
                          <div className="img-box mr-8">
                            <Image
                              src={`/images/portfolio/resume-icon.svg`}
                              width={20}
                              height={20}
                              alt="icon"
                              className=""
                            />
                          </div>
                          <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">Resume</span>
                        </div>
                      </div>
                    </li>
                  )}
                  {bannerData?.userInfo?.UsersWorkProfile?.linkedin_url && (
                    <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                      <Link href={`${bannerData?.userInfo?.UsersWorkProfile?.linkedin_url}`} legacyBehavior>
                        <a rel="nofollow" target="_blank">
                          <div className="d-flex align-items-center">
                            <div className="img-box mr-8">
                              <Image
                                src={`/images/portfolio/linkdin-icon.svg`}
                                width={20}
                                height={20}
                                alt="icon"
                                className=""
                              />
                            </div>
                            <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">LinkedIn</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  )}
                  {bannerData?.githubLink && (
                    <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                      <Link href={`${bannerData?.githubLink}`} legacyBehavior>
                        <a rel="nofollow" target="_blank">
                          <div className="d-flex align-items-center">
                            <div className="img-box mr-8">
                              <Image
                                src={`/images/portfolio/github-icon.svg`}
                                width={20}
                                height={20}
                                alt="icon"
                                className=""
                              />
                            </div>
                            <span className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap">Github</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className="d-flex w-full max-w-xl-436 pl-md-40 pr-md-50 pr-16 pl-16 py-xl-52 py-20">
                <ul className="list-unstyled grid-gap-12 mb-0 d-flex grid-gap-xl-0 flex-wrap grid-gap-20 flex-xl-column align-items-xl-start align-items-center">
                  {bannerData?.userInfo?.email && (
                    <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16">
                      <div className="d-flex align-items-center">
                        <div className="img-box mr-md-12 mr-8">
                          <Image
                            src={`/images/portfolio/mail-icon.svg`}
                            width={20}
                            height={20}
                            alt="icon"
                            className=""
                          />
                        </div>
                        <div className="mb-0  fs-14 lh-21 fw-700 text-color-3">
                          {(privateEmail && (
                            <span className="text-color-3 mr-12 text-break line-clamp-1" title={bannerData?.userInfo}>
                              {bannerData?.userInfo?.email}
                            </span>
                          )) || (
                            <div className="d-flex">
                              <Link
                                href={`mailto:${bannerData?.userInfo?.email}`}
                                className="text-color-3 mr-12 text-break line-clamp-1"
                                title={bannerData?.userInfo?.email}
                                ref={outputRef}
                              >
                                {bannerData?.userInfo?.email}
                              </Link>
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip id="tooltip">{tooltipText}</Tooltip>}
                                onExited={() => {
                                  if (!isCopied) {
                                    setTooltipText('Copy Link');
                                  }
                                }}
                              >
                                <button
                                  className="d-inline-block border-0 bg-transparent"
                                  disabled={privateEmail}
                                  onClick={(event) => {
                                    if (bannerData?.userInfo?.email) {
                                      handleUrlCopy(event, setTooltipText, setIsCopied, bannerData?.userInfo?.email);
                                    }
                                  }}
                                  onMouseOut={resetButtonTitle}
                                  title="Click to copy"
                                >
                                  <Image
                                    src={`/images/portfolio/copy-test-icon.svg`}
                                    width={16}
                                    height={16}
                                    className="img-fuild d"
                                  />
                                </button>
                              </OverlayTrigger>
                              {/* <button
                                className="d-inline-block border-0 bg-transparent"
                                disabled={privateEmail}
                                onClick={copyOutputToClipboard}
                                onMouseOut={resetButtonTitle}
                                title="Click to copy"
                              >
                                <Image
                                  src={`/images/portfolio/copy-test-icon.svg`}
                                  width={16}
                                  height={16}
                                  className="img-fuild d"
                                />
                              </button> */}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  )}
                  {bannerData?.userInfo?.phone_number && (
                    <li className="border-w border-color-42 rounded-pill bg-color-2 py-lg-14 py-10 px-16 d-inline-block">
                      <div className="d-flex align-items-center">
                        <div className="img-box mr-md-12 mr-8">
                          <Image
                            src={`/images/portfolio/call-icon.svg`}
                            width={20}
                            height={20}
                            alt="icon"
                            className=""
                          />
                        </div>
                        <p className="mb-0 fs-14 lh-21 fw-400 text-color-1">
                          +{bannerData?.userInfo?.country_code}{' '}
                          {(privateMobile && (
                            <span className="text-color-1"> {bannerData.userInfo.phone_number}</span>
                          )) || (
                            <Link href={`tel:${bannerData?.userInfo?.phone_number}`} className="text-color-1">
                              {bannerData.userInfo.phone_number}
                            </Link>
                          )}
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {bannerData?.ourProjects?.length > 0 && (
              <div className="bg-color-19 py-18 px-lg-32 px-22 rounded-12">
                <div className="">
                  <span className="fs-14 fw-600 lh-21 text-color-1 align-middle mt-1 d-inline-block text-nowrap mb-lg-3 mb-2">
                    Projects :
                  </span>
                  <ul className="d-flex flex-wrap list-unstyled align-items-sm-center mb-0 grid-gap-18 our-project-list">
                    {bannerData?.ourProjects?.map((item, index) => {
                      const isLastItem = index === bannerData?.ourProjects?.length - 1;
                      return (
                        <li className="position-relative other-porject-list pb-10 pb-1 mr-lg-29 mr-20" key={index}>
                          {!isLastItem && (
                            <div
                              className="position-absolute top-0 h-100 w-size-1 bg-color-44 d-lg-block d-none"
                              style={{ right: '-25%', transform: 'translateX(-50%)' }}
                            ></div>
                          )}
                          <div className="d-flex align-items-center text-start">
                            <div className="img-box me-sm-2 h-size-28 max-w-30 min-w-30 max-h-30 text-center text-sm-start">
                              <Image
                                src={`${process.env.IMG_PATH}${item?.skill_img_url}`}
                                width={30}
                                height={28}
                                alt="icon"
                                className="img-fluid max-h-28"
                              />
                            </div>
                            <p className="fs-lg-16 fs-14 fw-400 lh-24 text-color-1 text-nowrap mb-0">
                              <span className="fw-500"> {item?.count}</span> {item?.title}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoModalDA from '../Modals/VideoModalDA';
import { numberFormat } from '@/_helper/Common';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FeeStructureDA({
  details,
  fee,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  setLeadHeading,
  courseSlug,
}) {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {showVideoModal && (
        <VideoModalDA
          setShowVideoModal={setShowVideoModal}
          showVideoModal={showVideoModal}
          videoUrl={details?.course_video_url}
          details={details}
        />
      )}
      <div className="rounded-20 w-full max-w-478 mx-auto ms-lg-auto me-lg-0">
        <div className="max-h-151 min-h-151 overflow-hidden rounded-tl-20 rounded-tr-20 position-relative">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: 'rgba(0, 0, 0, 0.3)', zIndex: '9' }}
          ></div>
          <Image
            src={`${process.env.IMG_PATH}images/courses-details/details-banner-img.webp`}
            width={478}
            height={151}
            alt="image"
            style={{ zIndex: '8', bottom: '-3rem' }}
            className="img-fluid position-absolute"
          />
          <button
            onClick={() => setShowVideoModal(true)}
            className="h-size-44 w-size-44 rounded-circle border-0 outline-none bg-white position-absolute text-color-1 p-0 
          d-flex align-items-center justify-content-center"
            style={{ zIndex: '10', top: '12px', right: '12px' }}
          >
            <FontAwesomeIcon icon={faPlay} className="fs-17 w-size-17" width={17} />
          </button>
        </div>
        <div
          className={`px-lg-28 px-16 pb-lg-28 pb-16 rounded-bl-20 rounded-br-20 ${
            (courseSlug === 'ethical-hacking-course' && 'fees-stricture-bg bg-white') || 'bg-white'
          }`}
        >
          <div className="" style={{ borderColor: '1px solid rgba(254, 224, 177, 1)' }}>
            {(details?.cohort_start_date && (
              <div
                className={`rounded-8 border-w min-w-135 overflow-hidden position-relative w-max-content ${
                  (!details?.sale_content && 'mb-16') || ''
                }`}
                style={{ borderColor: 'rgba(254, 224, 177, 1)', marginTop: '-26px', zIndex: '10' }}
              >
                <p
                  className="m-0 w-100 h-size-26 d-flex align-items-center justify-content-center fs-12"
                  style={{ color: '#6A4201', backgroundColor: '#FEE0B1' }}
                >
                  {(details?.slug === 'data-analytics-course' && <>{details?.cohort_heading}</>) || (
                    <>{details?.cohort_heading}</>
                  )}
                </p>
                <p
                  className="m-0 w-100 h-size-40 text-color-1 d-flex align-items-center justify-content-center fs-16 fw-600"
                  style={{ backgroundColor: '#FFF5E6' }}
                >
                  {(details?.slug === 'data-analytics-course' &&
                    moment(details?.cohort_start_date).format('Do MMM, YY')) ||
                    moment(details?.cohort_start_date).format('Do MMM, YY')}
                </p>
              </div>
            )) ||
              ''}
            {details?.sale_content && (
              <div className="pt-28 text-center pb-16">
                <p className="mb-0 sale-content-text fs-20 fw-600 lh-27">{details?.sale_content}</p>
              </div>
            )}
          </div>
          {(fee?.fee_discount_text && pathName === '/data-analytics-course' && (
            <div className="d-lg-flex align-items-center mb-16">
              {details?.discount_title && (
                <div
                  style={{ backgroundColor: '#20CD67', borderColor: '#26A65A' }}
                  className="text-white d-flex align-items-center fs-13 lh-21 border-w rounded-24
           max-w-200 px-10 min-h-34 justify-content-lg-center fw-600 mb-lg-0 mb-8"
                >
                  <Image
                    src={`/images/courses-details/offer-live-icon.svg`}
                    width={20}
                    height={20}
                    alt="Icon"
                    className="img-fluid mr-6 mt-1"
                  />

                  <span style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>{details?.discount_title}</span>
                </div>
              )}
              <span className="pl-lg-12 text-color-17 fs-14 fw-600">{fee?.fee_discount_text}</span>
            </div>
          )) ||
            ''}
          <div
            className={`price-section w-full border-w border-color-28 border-end-0 border-start-0 border-dashed border-bottom-0 ${
              (pathName === '/data-analytics-course' && 'pt-lg-16 pb-16') || 'py-16'
            }`}
          >
            <div>
              <p className="fs-lg-14 fs-12 fw-400 lh-lg-21 lh-20 text-color-34 d-block mb-0">Total Program Fee:</p>
              <div className="d-flex align-items-center">
                {fee?.actual_price > 0 && (
                  <p
                    className={`mb-0 fw-600 text-color-7 position-relative cut-pr-line d-flex align-items-center mr-12 ${
                      (pathName === '/data-analytics-course' && 'fs-xl-22 fs-20') || 'fs-lg-25 fs-22'
                    }`}
                  >
                    ₹{numberFormat(fee?.actual_price)}/-
                  </p>
                )}
                <p
                  className={`mb-0 fw-600 text-color-1 ${
                    (pathName === '/data-analytics-course' && 'fs-xl-32 fs-22') || 'fs-lg-36 fs-30'
                  }`}
                >
                  ₹{numberFormat(fee?.sale_price)}/-
                </p>
                {pathName === '/data-analytics-course' && (
                  <div
                    style={{ backgroundColor: '#10A24C' }}
                    className="text-white d-flex align-items-center fs-lg-12 fs-10 lh-18 rounded-24
           max-w-lg-110 px-lg-12 px-8 min-h-26 justify-content-lg-center fw-400 ms-2"
                  >
                    <span style={{ textShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)' }}> 40% OFF</span>
                  </div>
                )}
              </div>
              {pathName !== '/data-analytics-course' && (
                <p className="fs-11 lh-17 text-color-17 mb-16">
                  <b className="fw-600">No cost EMI </b>options available.
                </p>
              )}
              {/* {pathName === '/data-analytics-course' && (
                <>
                  <div
                    style={{ backgroundColor: 'rgba(25, 76, 255, 0.1)' }}
                    className="mt-16 mx-auto w-max-content rounded-tl-8 rounded-tr-8 align-items-center text-color-1 d-none d-lg-flex px-10 h-size-26 fs-12 lh-18"
                  >
                    We offer financing options with partner company
                  </div>
                  <div
                    style={{ backgroundColor: 'rgba(25, 76, 255, 0.1)', transform: 'translateY(5px)', zIndex: '0' }}
                    className="mt-16 mx-auto position-relative w-100 rounded-tl-8 rounded-tr-8 align-items-center justify-content-between text-color-1 d-flex d-lg-none px-14 py-8 h-size-58 fs-11 lh-16"
                  >
                    <span>We offer financing options with partner company</span>
                    <Image src={'/images/propelld.svg'} width={98} height={30} alt="propelld" className="img-fluid" />
                  </div>
                  <div
                    style={{ zIndex: '9' }}
                    className="w-100 position-relative border-w border-dashed rounded-8 min-h-60 border-color-28 mb-lg-26 mb-18 d-lg-flex align-items-center overflow-hidden"
                  >
                    <div
                      className="zero-cost-box min-w-117 max-w-117 h-size-lg-60 py-6 py-lg-0 bg-color-31 text-lg-end border-w fw-600 fs-14 border-top-0 border-start-0 border-bottom-0 d-flex align-items-center justify-content-center"
                      style={{ borderColor: '#FFDFAC', color: '#E58E03' }}
                    >
                      <i>
                        Zero Cost
                        <br className="d-lg-block d-none" /> EMI Starts at
                      </i>
                    </div>
                    <div className="d-flex align-items-center justify-content-center py-6 py-lg-0">
                      <p className="mb-0 text-color-34 fs-18 fw-600 ms-lg-3 me-lg-0">
                        <i>₹8,900/month</i>
                      </p>
                      <div className="w-size-1 min-h-36 max-h-36 bg-color-28 ml-xl-37 ml-13 mr-13 d-none d-lg-block"></div>
                      <div className="d-none d-lg-block pr-8">
                        <Image
                          src={'/images/propelld.svg'}
                          width={98}
                          height={30}
                          alt="propelld"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )} */}
            </div>
            {(Number(fee?.demo_price) > 0 && (
              <div className="border-dashed border-w border-color-1 rounded-8 px-12 py-8 d-flex align-items-center mb-20 bg-color-32">
                <FontAwesomeIcon icon={faCheckCircle} className="text-color-17 mr-8 w-size-15 fs-14" />
                <span className="fs-12 text-color-17">
                  Experience our demo class for just Rs. {Number(fee?.demo_price)}/- (refundable)
                </span>
              </div>
            )) ||
              ''}
            <div className="d-lg-flex align-items-center mt-4">
              <button
                onClick={() => {
                  setLeadNote('Apply Now - Course Page - Banner Fee structure');
                  setDownloadCrs(false);
                  setShowLeadModal(true);
                  setLeadHeading('Apply Now');
                }}
                className="blue-fill-btn min-h-lg-56 min-h-56 px-16 fs-lg-18 fs-16 fw-600 w-100 lh-lg-27 lh-24 rounded-12 hover-shadow-4 mb-lg-0"
              >
                Apply Now
              </button>
            </div>
          </div>
          {(fee?.chort_short_description && pathName !== '/data-analytics-course' && (
            <div className="fs-12 lh-18 text-color-7">{fee?.chort_short_description}</div>
          )) ||
            (pathName !== '/data-analytics-course' && (
              <div className="fs-12 lh-18 text-color-7">
                The Cohort Fee can be paid via custom payment link offered by Program Advisor at the point of
                enrollment. The fees paid are non-refundable, non-transferable and cannot be applied to other courses,
                services, or individuals.
              </div>
            ))}
          {pathName === '/data-analytics-course' && (
            <div className="fs-12 lh-17 text-color-7">
              By continuing, you agree to WsCube Tech’s{' '}
              <Link className="fw-600 text-color-7 text-decoration-underline" target="blank" href={'/privacy-policy'}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                className="fw-600 text-color-7 text-decoration-underline"
                target="blank"
                href={'/terms-and-conditions'}
              >
                Terms & Conditions
              </Link>
              . Please note that the Cohort Fee can be paid via custom payment link offered by Program Advisor at the
              point of enrollment only and we don’t offer any public link for payments.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

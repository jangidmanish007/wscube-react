import { numberFormat } from '@/_helper/Common';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { LottieAnimation } from '@/_services/lottieAnimations';
import { BannerCounter } from './Counter/CountdownTimer';

export default function MasterBanner({
  masterClassDetailsData,
  targetDate,
  setShowLeadModal,
  isEventsExpired,
  enrolledCount,
}) {
  const mentor = masterClassDetailsData?.Mentors[0];

  return (
    <section
      className={`master-banner-section ${
        (masterClassDetailsData?.class_mode == 'Offline' && masterClassDetailsData?.address && 'pb-lg-178 pb-104') ||
        'pb-lg-58 pb-40'
      } pt-106 pt-lg-138 position-relative`}
    >
      <div className="header-gradiant w-100 min-h-145 position-absolute top-0 start-0 d-lg-block d-none"></div>
      <div className="container-main container-w-xl-1202">
        <div className="d-flex align-items-center grid-gap-xl-60 grid-gap-40 justify-content-between">
          <div className="w-100 max-w-xl-600 max-w-lg-650 master-left-section">
            <p className="text-white fw-300 text-uppercase fs-25 lh-18 mb-38 position-relative master-shadow-text d-inline-block">
              masterclass
            </p>
            <div
              className={`${
                (masterClassDetailsData?.img_json_url && 'd-none') || ''
              } text-center mb-25 mobile-mentor-master mx-auto d-lg-none text-white`}
            >
              <div className="w-size-96 h-size-96 mx-auto rounded-circle pt-2 text-center mobile-banner-mentor mb-14 overflow-hidden">
                {(mentor?.full_img_url && (
                  <Image
                    src={`${process.env.IMG_PATH}${mentor?.full_img_url}`}
                    width={138}
                    height={171}
                    className="img-fluid"
                    alt="Image"
                  />
                )) || (
                  <Image
                    src={process.env.IMG_PATH + 'images/master-class/mobile-banner-mentor.png'}
                    width={138}
                    height={171}
                    className="img-fluid"
                    alt="Image"
                  />
                )}
              </div>
              <p className="fs-16 lh-24 fw-600 mb-0">{mentor?.mentor_name}</p>
              <span className="fs-16 lh-24">({mentor?.experience} years of experience)</span>
            </div>
            <h1 className="text-white fs-40 lh-48 fw-600 mb-20">{masterClassDetailsData?.class_title}</h1>
            <p className="fs-18 text-white lh-27 fw-400 mb-28">{masterClassDetailsData?.class_short_description}</p>
            <div className="master-banner-schedule mb-32 w-100 max-w-lg-466 max-w-407 min-h-69 d-lg-flex align-items-center px-24 bg-white rounded-80 border-w border-color-1">
              <p className="text-color-1 fs-18 fw-600 lh-27 m-0">
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/cal-outline-black.svg'}
                  width={20}
                  height={20}
                  className="img-fluid mr-12 mb-1"
                  alt="icon"
                />
                {moment(masterClassDetailsData?.class_start_datetime).format('Do MMM, ddd')}
              </p>
              <span className="border-w w-size-1 h-size-37 d-block mx-3" style={{ opacity: 0.3 }}></span>
              <p className="text-color-1 fs-18 fw-600 lh-27 m-0">
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/clock-outline-black.svg'}
                  width={20}
                  height={20}
                  className="img-fluid mr-12 mb-1"
                  alt="icon"
                />
                {moment(masterClassDetailsData?.class_start_datetime).format('hh:mm A')} -{' '}
                {moment(masterClassDetailsData?.class_end_datetime).format('hh:mm A')}
              </p>
            </div>
            {/* <bannerCounter targetDate={targetDate} /> */}
            {!isEventsExpired && <BannerCounter targetDate={targetDate} />}
            <div className="d-flex align-items-center justify-content-lg-start justify-content-center mb-lg-28">
              {(isEventsExpired && (
                <>
                  {masterClassDetailsData?.is_certificate && (
                    <div className="d-flex align-items-center mr-20">
                      <Image
                        src={process.env.LOCAL_IMAGE_PATH + 'images/master-class/certificate.svg'}
                        width={28}
                        height={28}
                        className="img-fluid mr-6"
                        alt="icon"
                      />
                      <p className="mb-0 fs-16 lh-24 text-white">Certificate Included</p>
                    </div>
                  )}
                  {enrolledCount > 0 && (
                    <div className="d-flex align-items-center">
                      <Image
                        src={process.env.LOCAL_IMAGE_PATH + 'images/master-class/learner.svg'}
                        width={28}
                        height={28}
                        className="img-fluid mr-8"
                        alt="icon"
                      />
                      <p className="mb-0 fs-18 lh-27 text-white fw-400">
                        {numberFormat(Number(enrolledCount))} already registered
                      </p>
                    </div>
                  )}
                </>
              )) || (
                <div className="d-lg-flex align-items-cetner">
                  <button
                    onClick={() => setShowLeadModal(true)}
                    className="blue-fill-btn min-h-56 py-14 px-36 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow mr-22"
                  >
                    Register for free!!
                  </button>
                  {masterClassDetailsData?.is_certificate && (
                    <div className="d-flex align-items-center mb-lg-0 mb-10">
                      <Image
                        src={process.env.LOCAL_IMAGE_PATH + 'images/master-class/certificate.svg'}
                        width={28}
                        height={28}
                        className="img-fluid mr-6"
                        alt="icon"
                      />
                      <p className="mb-0 fs-16 lh-24 text-white">Certificate Included</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            {!isEventsExpired && enrolledCount > 0 && (
              <div className="d-flex justify-content-lg-start justify-content-center">
                <div className="d-flex align-items-center">
                  <Image
                    src={process.env.LOCAL_IMAGE_PATH + 'images/master-class/learner.svg'}
                    width={28}
                    height={28}
                    className="img-fluid mr-8"
                    alt="icon"
                  />
                  <p className="mb-0 fs-18 lh-27 text-white fw-400">
                    {numberFormat(Number(enrolledCount))} already registered
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={`w-100  ${
              (masterClassDetailsData?.img_json_url && 'max-w-xl-490 max-w-lg-410') || 'max-w-xl-426 max-w-lg-380 pt-24'
            } d-lg-block d-none text-center rounded-20 master-right-section overflow-hidden`}
          >
            <div className={`master-mentor ${(masterClassDetailsData?.img_json_url && ' ') || 'max-h-343'}`}>
              {(masterClassDetailsData?.img_json_url && (
                <LottieAnimation url={`${masterClassDetailsData?.img_json_url}`} />
              )) || (
                <>
                  {(mentor?.full_img_url && (
                    <Image
                      src={`${process.env.IMG_PATH}${mentor?.full_img_url}`}
                      width={426}
                      height={343}
                      className="img-fluid max-h-343 w-auto"
                      alt="Image"
                    />
                  )) || (
                    <Image
                      src={process.env.IMG_PATH + 'images/master-class/ayushi.png'}
                      width={426}
                      height={343}
                      className="img-fluid max-h-343 w-auto"
                      alt="Image"
                    />
                  )}
                </>
              )}
            </div>
            {!masterClassDetailsData?.img_json_url && (
              <div className="bg-white pt-16 pb-28 px-20">
                <p className="text-color-3 fw-600 fs-17 lh-26 mb-0">{mentor?.mentor_name}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="text-color-17 fs-16 lh-24">
                    {mentor?.designation}
                    {/* {mentor?.organization} */} at
                  </span>
                  <Image
                    src={process.env.IMG_PATH + mentor?.organization_img_url}
                    width={80}
                    height={44}
                    className="img-fluid ms-2"
                    alt="Image"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

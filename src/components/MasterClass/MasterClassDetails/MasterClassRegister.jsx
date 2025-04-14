import Image from 'next/image';
import React from 'react';
import { RegisterCounter } from './Counter/CountdownTimer';
import { numberFormat } from '@/_helper/Common';

export default function MasterClassRegister({
  masterClassDetailsData,
  targetDate,
  setShowLeadModal,
  isEventsExpired,
  enrolledCount,
}) {
  return (
    <section className="master-register-section py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="d-xl-flex justify-content-between">
          <div className="w-100 mb-xl-0 mb-8 d-lg-flex align-items-end max-w-xl-862 px-lg-18 px-12 pt-lg-42 pt-24 rounded-30 hurry-up-box overflow-hidden">
            <div className="master-reg-montor max-w-lg-329 max-w-270 me-lg-4 mx-lg-0 mx-auto">
              <div className="position-relative" style={{ zIndex: 9 }}>
                {(masterClassDetailsData?.Mentors[0]?.full_img_url && (
                  <Image
                    src={`${process.env.IMG_PATH}${masterClassDetailsData?.Mentors[0]?.full_img_url}`}
                    width={329}
                    height={408}
                    className="img-fluid min-w-329"
                    alt="Image"
                  />
                )) || (
                  <Image
                    src={process.env.IMG_PATH + 'images/master-class/ayushi.png'}
                    width={329}
                    height={408}
                    className="img-fluid min-w-329"
                    alt="Image"
                  />
                )}
                <div className="position-absolute text-white w-100 start-0 mentor-info text-center">
                  <div className="blured-name w-100 px-12 py-10 rounded-52 mb-10">
                    <p className="fs-12 lh-18 mb-1">Mentored by</p>
                    <h3 className="fs-15 lh-23 fw-600 mb-1">{masterClassDetailsData?.Mentors[0]?.mentor_name}</h3>
                    <p className="fs-12 lh-18 mb-0">
                      {masterClassDetailsData?.Mentors[0]?.designation} at
                      <Image
                        src={process.env.IMG_PATH + masterClassDetailsData?.Mentors[0]?.organization_img_url}
                        width={80}
                        height={44}
                        className="img-fluid ms-2 min-w-80"
                        style={{ minWidth: '80px' }}
                        alt="Image"
                      />
                      {/* <span className="d-block">{masterClassDetailsData?.Mentors[0]?.organization}</span> */}
                    </p>
                  </div>
                  <p className="fs-12 lh-18 fw-600 m-0 px-4 d-none d-lg-block">
                    {masterClassDetailsData?.mentor_guideline ||
                      'Build your own Excel dashboards – from spreadsheets to insights.'}
                  </p>
                </div>
              </div>
              <svg
                className="position-absolute top-0"
                style={{ zIndex: 8, left: '-9rem' }}
                xmlns="http://www.w3.org/2000/svg"
                width="543"
                height="585"
                viewBox="0 0 543 585"
                fill="none"
              >
                <g filter="url(#filter0_f_4414_27878)">
                  <path
                    d="M148.568 276.503C140.797 296.72 118.132 327.047 107.771 339.684C90.2863 373.982 107.771 384.813 107.771 403.767C107.771 422.722 107.771 428.137 116.513 439.871C125.256 451.604 148.568 458.825 161.196 458.825C171.298 458.825 165.405 476.275 161.196 485L375.868 480.487C393.676 477.779 427.933 469.656 422.493 458.825C415.694 445.286 422.493 438.968 422.493 421.819C422.493 404.67 433.178 406.475 439.978 384.813C446.778 363.151 439.978 360.443 439.978 305.385C439.978 288.236 435.121 276.503 422.493 257.548C409.866 238.594 402.095 213.321 371.011 177.218C339.927 141.115 349.641 151.946 323.414 115.842C297.187 79.7387 287.474 114.037 263.189 132.991C238.905 151.946 235.991 162.777 229.192 172.705C222.392 182.634 215.593 190.757 186.452 205.198C157.311 219.64 158.282 251.23 148.568 276.503Z"
                    fill="#FFCF8C"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_4414_27878"
                    x="0"
                    y="0"
                    width="543"
                    height="585"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4414_27878" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="text-center text-lg-start pt-lg-0 pt-45 pb-30">
              <h2 className="fs-28 lh-42 fw-600 text-color-1 mb-13">
                {masterClassDetailsData?.mark_your_calendar_heading || 'Hurry Up! Mark your Calendar'}
              </h2>
              <p className="fs-16 lh-24 text-color-7 mb-27">
                {masterClassDetailsData?.mark_your_calendar_sub_heading ||
                  'If you’re an aspiring digital marketer, this is an opportunity you should not miss! Register now.'}
              </p>
              {!isEventsExpired && <RegisterCounter targetDate={targetDate} />}
              <div className="d-lg-flex reg-cta align-items-center">
                {(isEventsExpired && (
                  <>
                    {enrolledCount && (
                      <div>
                        <p className="m-0 text-color-15 lh-21 fs-16 fw-400">
                          <span className="fw-500 text-color-16">
                            {numberFormat(Number(masterClassDetailsData?.class_enrolled_count))}{' '}
                          </span>{' '}
                          already registered
                        </p>
                      </div>
                    )}
                  </>
                )) || (
                  <button
                    onClick={() => setShowLeadModal(true)}
                    className="blue-fill-btn h-size-56 px-46 fs-15 fw-600 lh-22 rounded-10 orange-hover-shadow mx-auto mx-lg-0"
                  >
                    Register for free!!
                  </button>
                )}
                {/* <div className="d-flex align-items-center justify-content-lg-start justify-content-center py-lg-0 py-24 ml-lg-27">
                  <div className="d-flex align-items-center enrolled-users max-w-100">
                    <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                      <Image
                        src={`${process.env.IMG_PATH}images/user-icon.png`}
                        className="img-fluid"
                        alt="Image"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                      <Image
                        src={`${process.env.IMG_PATH}images/user-icon.png`}
                        className="img-fluid"
                        alt="Image"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                      <Image
                        src={`${process.env.IMG_PATH}images/user-icon.png`}
                        className="img-fluid"
                        alt="Image"
                        width={36}
                        height={36}
                      />
                    </div>
                  </div>
                  <p className="m-0 text-color-15 lh-21 fs-14">
                    <span className="fw-600 text-color-16">
                      {formatNumberCount(masterClassDetailsData?.class_enrolled_count)}
                    </span>{' '}
                    Enrolled
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="w-100 ml-xl-11 join-whatsapp rounded-30 max-w-xl-300 d-flex align-items-center
            justify-content-center p-xl-0 p-24"
          >
            <div className="text-center px-lg-40">
              <Image
                src={process.env.IMG_PATH + 'images/master-class/whatsapp-icon.svg'}
                width={51}
                height={51}
                className="img-fluid mb-16"
                alt="Image"
              />
              <h3 className="fs-15 lh-23 fw-600 mb-17 text-color-1 px-xl-3">Join this event&apos;s WhatsApp Group</h3>
              {(masterClassDetailsData?.community_qr_img && (
                <Image
                  src={`${process.env.IMG_PATH}${masterClassDetailsData?.community_qr_img}`}
                  width={147}
                  height={148}
                  className="img-fluid mb-17 d-none d-xl-inline"
                  alt="Image"
                />
              )) || (
                <Image
                  src={`${process.env.IMG_PATH}images/masterclass-whatsapp-channel.svg`}
                  width={147}
                  height={148}
                  className="img-fluid mb-17 d-none d-xl-inline"
                  alt="Image"
                />
              )}
              <a
                className="m-0 fs-12 lh-18 fw-600 cursor-poniter d-none d-lg-block w-max-content mx-auto"
                style={{ color: '#4568F2' }}
                href={
                  (masterClassDetailsData?.community_url && masterClassDetailsData?.community_url) ||
                  'https://www.whatsapp.com/channel/0029VacQ1KKA89MZe6UFkh3d'
                }
                target="_blank"
              >
                Join from PC instead
              </a>
              <a
                href={
                  (masterClassDetailsData?.community_url && masterClassDetailsData?.community_url) ||
                  'https://www.whatsapp.com/channel/0029VacQ1KKA89MZe6UFkh3d'
                }
                className="d-lg-none w-100 mx-auto max-w-186 h-size-48 rounded-12 text-white 
                 fs-14 text-white fw-600 whatsapp-mobile align-items-center justify-content-center d-flex text-decoration-none"
              >
                <Image
                  src={process.env.IMG_PATH + 'images/master-class/whatsapp-mobile.svg'}
                  width={30}
                  height={30}
                  className="img-fluid me-1"
                  alt="Icon"
                />
                Go to WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import React from 'react';

export default function ToolsYouLearn(props) {
  const { openScheduleModal } = props;

  const toolsYouLearnData = [
    { id: 1, image: 'images/landing-page/hiring-compines-logo/gravitywrite-logo.svg' },
    { id: 2, image: 'images/landing-page/hiring-compines-logo/godaddy-logo-1.svg' },
    { id: 3, image: 'images/landing-page/hiring-compines-logo/afternic-logo.svg' },
    { id: 4, image: 'images/landing-page/hiring-compines-logo/sedo-logo.svg' },
    { id: 5, image: 'images/landing-page/hiring-compines-logo/dan-tan-logo.svg' },
    { id: 6, image: 'images/landing-page/hiring-compines-logo/filla-logo.svg' },
    { id: 7, image: 'images/landing-page/hiring-compines-logo/canva-logo.svg' },
    { id: 8, image: 'images/landing-page/hiring-compines-logo/freepike.svg' },
    { id: 9, image: 'images/landing-page/hiring-compines-logo/elemenator-logo.svg' },
    { id: 10, image: 'images/landing-page/hiring-compines-logo/grammerly-logo.svg' },
    { id: 11, image: 'images/landing-page/hiring-compines-logo/heluim-10-logo.svg' },
    { id: 12, image: 'images/landing-page/hiring-compines-logo/google-alert-logo.svg' },
    { id: 13, image: 'images/landing-page/hiring-compines-logo/google-bussinus-logo.svg' },
    { id: 14, image: 'images/landing-page/hiring-compines-logo/vidlq-logo.svg' },
    { id: 15, image: 'images/landing-page/hiring-compines-logo/tubebuddy-logo.svg' },
    { id: 16, image: 'images/landing-page/hiring-compines-logo/video-script-logo.svg' },
    { id: 17, image: 'images/landing-page/hiring-compines-logo/peoplehours-logo.svg' },
    { id: 18, image: 'images/landing-page/hiring-compines-logo/truecaller-logo.svg' },
    { id: 19, image: 'images/landing-page/hiring-compines-logo/semrush-logo.svg' },
    { id: 20, image: 'images/landing-page/hiring-compines-logo/guru-logoo.svg' },
    { id: 21, image: 'images/landing-page/hiring-compines-logo/angel-list-logo.svg' },
    { id: 22, image: 'images/landing-page/hiring-compines-logo/upwork-lgoo.svg' },
    { id: 23, image: 'images/landing-page/hiring-compines-logo/hotstar-logo.svg' },
    { id: 24, image: 'images/landing-page/hiring-compines-logo/zee5-logo.svg' },
    { id: 25, image: 'images/landing-page/hiring-compines-logo/get-response-logo.svg' },
    { id: 26, image: 'images/landing-page/hiring-compines-logo/mailclip-logo.svg' },
    { id: 27, image: 'images/landing-page/hiring-compines-logo/tag-manager-logo.svg' },
    { id: 28, image: 'images/landing-page/hiring-compines-logo/buffer-logo-new.svg' },
    { id: 29, image: 'images/landing-page/hiring-compines-logo/google-analysis-logo.svg' },
    { id: 30, image: 'images/landing-page/hiring-compines-logo/build-with-logo.svg' },
    { id: 31, image: 'images/landing-page/hiring-compines-logo/moz-logo.svg' },
    { id: 32, image: 'images/landing-page/hiring-compines-logo/similer-web-logo.svg' },
    { id: 33, image: 'images/landing-page/hiring-compines-logo/google-search-logo.svg' },
    { id: 34, image: 'images/landing-page/hiring-compines-logo/rank-math-logo.svg' },
    { id: 35, image: 'images/landing-page/hiring-compines-logo/chat-gpt-logo-2.svg' },
    { id: 36, image: 'images/landing-page/hiring-compines-logo/meta-logo.svg' },
    { id: 37, image: 'images/landing-page/hiring-compines-logo/linkdin-ads-logo.svg' },
    { id: 38, image: 'images/landing-page/hiring-compines-logo/instaads-logo.svg' },
  ];

  const BatchDataList = [
    {
      id: 1,
      batch_month: 'June 10',
      batch_start_Time: '07:30 PM to 09:30 AM',
      batch_open: 'Weekday (Mon to Fri)',
      batch_expire: false,
    },
    {
      id: 2,
      batch_month: 'June 24',
      batch_start_Time: '07:30 AM to 09:30 PM',
      batch_open: 'Weekday (Mon to Fri)',
      batch_expire: false,
    },
    {
      id: 3,
      batch_month: 'June 5',
      batch_start_Time: '07:30 AM to 09:30 AM',
      batch_open: 'Weekday (Mon to Fri)',
      batch_expire: true,
    },
  ];

  return (
    <section className="bg-color-41 py-lg-116 py-88">
      <div className="container-main container-w-xl-1092">
        <div className="mb-80">
          <div className="section-heading mb-40">
            <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Tools you will learn</h2>
            <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">
              Master all Industry-Leading Digital Marketing Tools
            </p>
          </div>
          <div className="d-grid grid-lg-cols-5 grid-sm-cols-3 grid-cols-2 grid-gap-24">
            {toolsYouLearnData?.map((item, index) => {
              return (
                <div
                  className="rounded-12 align-middle h-full d-flex align-item-center min-h-73 px-16 roadmap-card-wrapper transation-3 common-card-box"
                  key={index}
                >
                  <Image
                    src={`${process.env.LANDING_IMG_PATH}${item?.image}`}
                    width={113}
                    height={33}
                    className="max-h-42 my-auto w-auto min-w-113"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="heading-wrapper mb-lg-40 mb-24">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-0 d-flex">
            <Image
              src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/heading-star.svg`}
              width={33}
              height={33}
              alt=""
              className="mr-3"
            />
            Next Batch Starting From
          </h2>
        </div>
        <div className="d-lg-flex grid-gap-38">
          <div className="h-full w-full max-w-lg-640 order-lg-1 order-2">
            <div className="d-grid grid-cols-1">
              {BatchDataList?.map((item, index) => {
                return (
                  <div className="bg-white rounded-12 p-lg-24 p-16 mb-20" key={index}>
                    <div className="d-sm-flex justify-content-between">
                      <ul className="content list-unstyled mb-0">
                        <li>
                          <h3 className="fw-600 text-color-26 fs-20 mb-2">
                            {item?.batch_month}
                            <sup> th</sup>
                          </h3>
                        </li>
                        <li className="">
                          <div className="d-sm-flex">
                            <span className="fs-14 fw-400 mb-sm-0 mb-1 py-1 d-flex text-color-26">
                              <Image
                                src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/time.svg`}
                                width={20}
                                height={20}
                                alt="time"
                                className="mr-2"
                              />
                              {item?.batch_start_Time}
                            </span>
                            <span
                              className="ms-sm-2 fs-12 py-6 px-2 rounded text-color-26"
                              style={{ background: '#E7E8F0' }}
                            >
                              {item?.batch_open}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div className="my-md-auto mt-2">
                        {(item?.batch_expire && (
                          <span
                            className="py-1 px-6 text-color-2 fs-12 fw-500 rounded"
                            style={{ background: '#EB5757' }}
                          >
                            Sold Out
                          </span>
                        )) || (
                          <span className="fs-14 fw-500 rounded d-flex align-items-center" style={{ color: '#FC9C03' }}>
                            <Image
                              src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/filling-fast-iocn.svg`}
                              width={18}
                              height={18}
                              alt="time"
                              className="mr-1"
                            />
                            Filling Fast
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-full w-full max-w-lg-380 mx-lg-0 mx-auto order-lg-2 order-1">
            <div
              className="postion-relative p-24 rounded-12 min-h-370 d-flex flex-column justify-content-center "
              style={{
                background: "url('/images/landing-page/background/price-info-bg.svg') no-repeat center center / cover",
              }}
            >
              <ul className="list-unstyled price-info-wrapper text-center mb-0">
                <li className="mb-24">
                  <span className="fs-14 fw-500 mb-1" style={{ color: '#DEDEDE' }}>
                    Build your career in
                  </span>
                  <h3 className="fs-24 fs-700 text-color-2 mb-0">Digital Marketer!</h3>
                </li>
                <li className="mb-32 text-center">
                  <div
                    className="border-w border-color-2 border-dashed rounded-8 px-4 py-3 w-max-content mx-auto"
                    style={{
                      background: ' linear-gradient(180deg, rgba(36, 57, 133, 0.62) 0%, rgba(36, 57, 133, 0.09) 100%)',
                    }}
                  >
                    <p className="fs-24 fw-600 text-color-2 mb-0">
                      ₹34,999/- <span className="fs-16 fw-500 line-through align-middle">₹45,000/-</span>
                    </p>
                    <span className="fs-12 fw-500 text-color-2 opacity-75">(including GST)</span>
                  </div>
                </li>
                <li className="mb-32">
                  <button
                    className="rounded-12 w-full max-w-336 px-12 text-16 text-color-26 fw-600 text-color-1 min-h-62 book-demo-btn schedule-shoadow"
                    onClick={() => openScheduleModal('Schedule_Demo')}
                  >
                    Schedule Free Demo
                  </button>
                </li>
                {/* <li className="mb-1">
                   <ul className="list-none flex justify-content-center mb-0 text-center">
                    <li className="flex flex-col">
                      <span className="fs-16 fs-700 text-color-2 leading-[1.3rem]">01</span>
                      <span className="fs-12 fw-500 text-[#DEDEDE] leading-[0.975rem]">hours</span>
                    </li>
                    <li className="px-1.5 text-color-2 align-middle my-auto">:</li>
                    <li className="flex flex-col">
                      <span className="fs-16 fs-700 text-color-2 leading-[1.3rem]">58</span>
                      <span className="fs-12 fw-500 text-[#DEDEDE] leading-[0.975rem]">minutes</span>
                    </li>
                    <li className="px-1.5 text-color-2 align-middle my-auto">:</li>

                    <li className="flex flex-col">
                      <span className="fs-16 fs-700 text-color-2 leading-[1.3rem]">41</span>
                      <span className="fs-12 fw-500 text-[#DEDEDE] leading-[0.975rem]">sec</span>
                    </li>
                  </ul> 
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

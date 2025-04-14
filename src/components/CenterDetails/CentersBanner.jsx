import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

export default function CentersBanner({
  centerData,
  centerSlug,
  setLeadNote,
  setShowLeadModal,
  setCrmCrsId,
  setLeadHeading,
  centerAllData,
}) {
  const videoRef2 = useRef(null);

  useEffect(() => {
    const video = videoRef2.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

  return (
    <>
      <section className="min-h-84 bg-white center-top-section"></section>
      <section className="center-section pt-lg-107 pb-lg-114 pt-64 pb-80">
        <div className="container-main container-w-xl-1202">
          <div className="d-lg-flex grid-gap-lg-59 align-items-center">
            <div className="w-full max-w-lg-584 mx-auto mb-lg-0 mb-40">
              <div className="mb-44">
                <h1 className="fs-40 lh-48 fw-600 text-color-2 text-lg-start text-center">{centerAllData?.title}</h1>
              </div>
              <div className="mb-44">
                {centerAllData?.description && (
                  <div className="common-list-style banner-list-styled">{parse(centerAllData?.description)}</div>
                )}
              </div>
              <div>
                <div className="d-md-flex course-banner-btn">
                  <button
                    onClick={() => {
                      setLeadNote('Book Demo - Center page - Banner');
                      setCrmCrsId(null);
                      setShowLeadModal(true);
                      setLeadHeading('Book Demo Class');
                    }}
                    className="blue-fill-btn min-h-56 px-xl-36 px-lg-26 fs-18 fw-600 lh-27 rounded-16 orange-hover-shadow mr-xl-32 mr-20 mb-md-0 mb-24"
                  >
                    Book Demo Class
                  </button>
                  <Link href={`tel:${centerData?.phone_number}`} className=" text-color-2 d-block min-w-220">
                    <button
                      initial={{ scale: 1 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="common-white-btn orange-500-hover-shadow min-h-56 px-xl-34 px-20 fs-18 fw-600 lh-27 rounded-16 w-100"
                    >
                      <span className="me-2">
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/call-gray.svg'}
                          width={17}
                          height={17}
                          alt="icon"
                          className="img-fluid me-1"
                        />
                      </span>
                      Call us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full max-w-528 mx-auto">
              <div className="center-details position-relative">
                {(centerAllData?.img_url && (
                  <>
                    <Image
                      src={`${process.env.IMG_PATH}${centerAllData?.img_url}`}
                      width={528}
                      height={372}
                      alt="deatils-banner"
                      className="w-full rounded-16 img-fluid"
                    />
                  </>
                  // <div className="video-container-wrapper rounded-16">
                  //   <video
                  //     width="100%"
                  //     height="244"
                  //     autoplay
                  //     loop
                  //     controls
                  //     className="rounded-16 object-fit-cover"
                  //     ref={videoRef2}
                  //   >
                  //     <source
                  //       src={`${process.env.IMG_PATH}${centerAllData?.video_url}`}
                  //       type="video/mp4"
                  //       className="rounded-16"
                  //     />
                  //     Your browser does not support the video tag.
                  //   </video>
                  // </div>
                )) || (
                  <>
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/details-banner-img.webp`}
                      width={528}
                      height={372}
                      alt="deatils-banner"
                      className="w-full rounded-16 img-fluid"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

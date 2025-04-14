import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { Translate } from 'aws-sdk';

export default function MasterLearn({ whatYouLearnData, masterClassDetailsData }) {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

  function handleShowVideoModal(videoUrl) {
    setVideoUrl(videoUrl);
    // setShowVideoModal(true);
  }

  return (
    <>
      <section className="master-learn-section py-lg-80 py-64">
        <div className="container-main container-w-xl-1202">
          <div className="d-flex align-items-center justify-content-between">
            <div className="w-100 max-w-xl-501 max-w-lg-460">
              <h2 className="text-color-1 fw-600 fs-32 lh-44 mb-24">What you’ll Learn?</h2>
              {whatYouLearnData?.whatYouLearnDescription && (
                <div className="text-color-7 fs-14 lh-21 fw-400 mb-xl-60 mb-lg-30 mb-20">
                  {parse(whatYouLearnData?.whatYouLearnDescription)}
                </div>
              )}
              {whatYouLearnData?.keyFeatures.length > 0 && (
                <ul className="list-unstyled p-0 master-learn-list">
                  {whatYouLearnData?.keyFeatures.map((item, index) => (
                    <li className="text-color-1 fs-14 lh-21 fw-400 mb-18 position-relative pl-30" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-100 max-w-xl-572 max-w-400 p-28 master-learn-video d-none d-lg-block position-relative rounded-38">
              {(masterClassDetailsData?.class_desc_media_url && (
                <div className="img-box mb-20 position-relative">
                  <div className="video-container-wrapper rounded-16">
                    <video
                      width="100%"
                      height="490"
                      autoPlay
                      loop
                      controls
                      className="rounded-16 object-fit-cover"
                      ref={videoRef}
                    >
                      <source
                        src={`${process.env.IMG_PATH}${masterClassDetailsData?.class_desc_media_url}`}
                        type="video/mp4"
                        className="rounded-16"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )) ||
                (masterClassDetailsData?.class_desc_img_url && (
                  <div className="rounded-20 overflow-hidden d-flex align-items-center justify-content-center">
                    <Image
                      src={`${process.env.IMG_PATH + masterClassDetailsData?.class_desc_img_url}`}
                      width={516}
                      height={490}
                      className="img-fluid rounded-20"
                      alt="icon"
                    />
                  </div>
                )) || (
                  <Image
                    src={`${process.env.IMG_PATH}images/master-class/master-classroom.webp`}
                    width={516}
                    height={490}
                    className="img-fluid rounded-20"
                    alt="icon"
                  />
                )}
              {/* <div
                className="position-absolute top-50 start-50 cursor-pointer rounded-circle"
                style={{ transform: `translate(-50%, -50%)` }}
              >
                <Image
                  src={`${process.env.IMG_PATH}images/master-class/play-class-btn.svg`}
                  width={90}
                  height={90}
                  alt="banner-img"
                  className="img-fluid rounded-circle w-size-xl-90 w-size-50 h-size-xl-90 h-size-50"
                />
              </div>
              <div className="rounded-20 overflow-hidden d-flex align-items-center justify-content-center">
                <Image
                  src={`${process.env.IMG_PATH}images/master-class/master-classroom.webp`}
                  width={516}
                  height={490}
                  className="img-fluid rounded-20"
                  alt="icon"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

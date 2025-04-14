'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { studentReviewData } from './homepageData/studentReviewData';
import VideoModal from '../Modals/VideoModal';

export default function StudentReviews({ headingData, homeReview }) {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [currentVideoUrl, setCurrentVideo] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [LearnerData, setLearnerData] = useState({ videoUrl: '', userName: '' });

  function onPlayClick(videoUrl) {
    if (!isVideoPlay || currentVideoUrl !== videoUrl) {
      setIsVideoPlay(true);
      setCurrentVideo(videoUrl);
      setActiveItem(null);
    } else {
      setIsVideoPlay(false);
      setCurrentVideo(null);
    }
  }

  function handleShowVideoModal(item) {
    setVideoUrl(item?.video_url);
    setLearnerData({ videoUrl: item?.video_url, userName: item?.student_full_name });
    setShowVideoModal(true);
  }

  return (
    <>
      <VideoModal
        setShowVideoModal={setShowVideoModal}
        showVideoModal={showVideoModal}
        videoUrl={videoUrl}
        ModalType="Normal_Video"
        LearnerData={LearnerData}
      />
      <section className={`home-st-reviews ${(homeReview && 'pt-160 pb-80') || 'pt-250 pb-100 '}  d-lg-block d-none`}>
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-lg-flex align-items-center mb-3 text-lg-start text-center">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                    viewport={{ once: true }}
                    className="fs-32 fw-lg-600 fw-700 lh-40 text-color-1 mb-lg-0 mb-3"
                  >
                    {headingData?.title || 'Hear it From Our Learners'}
                  </motion.h2>
                  <span
                    className="py-1 px-2 fs-12 fw-600 lh-18 text-color-2 bg-color-24 rounded-1 ms-1"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                    viewport={{ once: true }}
                  >
                    Testimonials
                  </span>
                </div>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, type: 'tween' }}
                  viewport={{ once: true }}
                  className="fs-16 fw-400 text-color-7 text-lg-start text-center"
                >
                  {headingData?.tagline || 'WsCube Tech Alumni Stories, You can’t afford to miss.'}
                </motion.p>
              </div>
            </div>
          </AnimatePresence>

          {/* /  */}
          {/* {studentReviewData?.map((item, index) => {
            return (
              <div key={index} className="mx-3 slider-item-wrapper mb-6">
                <div
                  className={`min-h-454 position-relative rounded-16 review-slide ${
                    activeItem === item.id && 'active-slider'
                  }  ${isVideoPlay && currentVideoUrl === item?.id && 'video-player-box'}`}
                  style={{
                    backgroundImage:
                      (isVideoPlay && currentVideoUrl === item?.id && 'none') || `url(${item.student_background})`,
                  }}
                  onMouseEnter={() => setActiveItem(item?.id)}
                >
                  {(isVideoPlay && currentVideoUrl === item?.id && (
                    <div className="video-container-wrapper">
                      <video
                        width="654"
                        height="454"
                        autoPlay
                        controls
                        className="rounded-16 w-100 h-100 object-fit-cover"
                      >
                        <source src={item?.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )) || (
                    <div className="d-flex align-items-end w-100 min-h-454 p-lg-20 p-15 review-text-content rounded-16">
                      {item?.video_url && (
                        <button
                          className="position-absolute rounded-circle h-size-56 text-color-17 text-nowrap card-shadow-2 w-size-56 btn-play-review
                             border-0 p-0 d-flex align-items-center justify-content-center"
                          // onClick={() => onPlayClick(item?.id)}
                        >
                          <FontAwesomeIcon icon={faPlay} width={20} className="fs-20" />
                          <span className="d-none ms-2">Play</span>
                        </button>
                      )}
                      <div className="review-text">
                        <h3 className="text-white fw-600 fs-20 line-clamp-1 student-name">{item?.student_name}</h3>
                        <p
                          className="text-white fw-400 fs-16 mb-0 line-clamp-3"
                          title="WSCube Tech stands out as a premier EdTech company, leading the way in digital marketing
                      education with excellence and innovation."
                        >
                          {item?.student_disc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })} */}
          <div className="testimonials-block mt-lg-50 mt-20 master-classes-slider testmonial-slider-track">
            <div className="home-page-slider-wrapper overflow-hidden pb-10">
              <div className="d-flex grid-gap-20 position-relative" style={{ zIndex: 99 }}>
                {studentReviewData?.map((item, index) => {
                  return (
                    <div key={index} className="slider-item-wrapper">
                      <div
                        className={`min-h-454 position-relative rounded-16 review-slide
                           ${activeItem === item.id && 'active-slider'}  ${
                          isVideoPlay && currentVideoUrl === item?.id && 'video-player-box'
                        }`}
                        // style={{
                        //   backgroundImage:
                        //     (isVideoPlay && currentVideoUrl === item?.id && 'none') ||
                        //     `url(${item.student_background})`,
                        // }}
                        style={{
                          backgroundImage:
                            (isVideoPlay && currentVideoUrl === item?.id && `url(${item.student_background})`) ||
                            `url(${process.env.IMG_PATH}${item.student_background})`,
                        }}
                        onMouseEnter={() => {
                          if (!isVideoPlay) {
                            setActiveItem(item?.id);
                          }
                        }}
                      >
                        {(isVideoPlay && currentVideoUrl === item?.id && (
                          <div className="video-container-wrapper">
                            <video
                              width="654"
                              height="454"
                              autoPlay
                              controls
                              className="rounded-16 w-100 h-100 object-fit-cover"
                            >
                              <source src={item?.video_url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )) || (
                          <div className="d-flex align-items-end w-100 min-h-454 p-lg-20 p-15 review-text-content rounded-16">
                            {item?.video_url && (
                              <button
                                className="position-absolute rounded-circle h-size-56 text-color-17 text-nowrap card-shadow-2 w-size-56 btn-play-review
                             border-0 p-0 d-flex align-items-center justify-content-center"
                                onClick={() => handleShowVideoModal(item)}
                                //onClick={() => handleShowVideoModal(item?.id)}
                              >
                                <FontAwesomeIcon icon={faPlay} width={20} className="fs-20" />
                                <span className="d-none ms-2">Play</span>
                              </button>
                            )}
                            <div className="review-text">
                              <h3 className="text-white fw-600 fs-20 line-clamp-1 student-name">
                                {item?.student_name}
                              </h3>
                              {/* <p
                                className="text-white fw-400 fs-16 mb-0 line-clamp-3"
                                title="WSCube Tech stands out as a premier EdTech company, leading the way in digital marketing
                      education with excellence and innovation."
                              >
                                {item?.student_disc}
                              </p> */}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

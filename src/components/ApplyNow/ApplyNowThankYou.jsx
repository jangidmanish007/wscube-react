'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import successAnimation from '@/components/Layouts/Common/sucessful.json';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';
import moment from 'moment';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export default function ApplyNowThankYou({ courseData }) {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoPlay) {
      handleVideoPlay();
    }
  }, [isVideoPlay]);

  useEffect(() => {
    const name = Cookies.get('user_full_name');
    if (name) {
      setUserName(name);
    }
  }, [Cookies.get('user_full_name')]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsVideoPlay(true);
      video.addEventListener('play', handlePlay);

      return () => {
        video.removeEventListener('play', handlePlay);
      };
    }
  }, [videoRef]);

  function handleVideoPlay() {
    setIsVideoPlay(true);
    const video = videoRef.current;
    if (isVideoPlay) {
      video.muted = false;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }

  return (
    <>
      <section className="cms-banner pt-lg-145 pt-120 pb-90 min-h-366">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center text-white">
              <div className="max-w-lg-200 min-h-lg-70 max-w-200 mx-auto">
                <Lottie animationData={successAnimation} loop={true} />
              </div>
              <h2 className="fs-600 fs-32 lh-48 text-color-2 mb-0">Cheers!</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-main container-w-xl-972">
          <div className="mb-80">
            <div
              className="thank-you-apply-form pt-32 rounded-16 mb"
              style={{
                boxShadow: '0px 18px 30px 0px #26323814',
                border: '1px solid #E5E7EB',
                background: '#F9FAFB',
                transform: 'translateY(-45px)',
              }}
            >
              <div className="user-info-wrapper w-full max-w-680 mx-auto text-center px-16 mb-lg-51 mb-44">
                <h3 className="fs-22 fw-600 lh-36 text-color-1 mb-0">Hey {userName}, </h3>
                <p className="fs-20 fw-500 lh-36 text-color-1 mb-lg-33 mb-24">
                  You have successfully completed your Program Application step!
                </p>
                <ul className="mb-lg-30 mb-24 d-sm-flex justify-content-center grid-gap-13 list-unstyled">
                  <li className="d-block  rounded-8 overflow-hidden mb-sm-0 mb-20">
                    <h3
                      className="fs-14 fw-400 lh-21 py-1 mb-0 px-17"
                      style={{ color: '#6A4201', background: '#FEE0B1' }}
                    >
                      Program
                    </h3>
                    <span
                      className="d-block fs-16 fw-400 lh-24 text-color-1 px-12 py-2"
                      style={{ background: '#FFF5E6' }}
                    >
                      {courseData?.course_name}
                    </span>
                  </li>
                  <li className="d-block mb-0 rounded-8 overflow-hidden">
                    <h3
                      className="fs-14 fw-400 lh-21 py-1 mb-0 px-17"
                      style={{ color: '#6A4201', background: '#FEE0B1' }}
                    >
                      {courseData?.cohort_heading}
                    </h3>
                    <span
                      className="d-block fs-16 fw-400 lh-24 text-color-1 px-12 py-2"
                      style={{ background: '#FFF5E6' }}
                    >
                      {moment(courseData?.cohort_start_date).format('Do MMM, YYYY')}
                    </span>
                  </li>
                </ul>
                <p className="fs-16 lh-24 fw-400 text-color-10 mb-lg-20 mb-18 max-w-528 mx-auto">
                  We're thrilled to review your application and appreciate your interest. One of our Sr. Program Advisor
                  will call you very soon.
                </p>

                <p className="fs-16 lh-24 fw-400 text-color-10 mb-0">
                  Stay tuned for updates, and get ready to embark on a Career Transformative journey!
                </p>
              </div>
              {/* {courseData?.course_video_url && (
                <div className="video-container-wrapper rounded-16 rounded-top-0 thank-you-video-wrapper position-relative">
                  <video
                    width="100%"
                    height="547"
                    autoplay
                    loop
                    controls
                    className="rounded-16 rounded-top-0 object-fit-cover"
                    style={{ marginBottom: '-10px' }}
                    ref={videoRef}
                  >
                    <source
                      src={`${process.env.IMG_PATH}${courseData?.course_video_url}`}
                      type="video/mp4"
                      className="rounded-16 rounded-top-0"
                    />
                    Your browser does not support the video tag.
                  </video>
                  {!isVideoPlay && (
                    <div
                      className="position-absolute top-50 start-50 plus-outline-btn cursor-pointer rounded-circle"
                      onClick={handleVideoPlay}
                    >
                      <Image
                        src={process.env.IMG_PATH + `images/icons/play-fill-icon.svg`}
                        width={60}
                        height={60}
                        alt="banner-img"
                        className="img-fluid rounded-20 w-size-xl-60 w-size-50 h-size-xl-60 h-size-50"
                      />
                    </div>
                  )}
                </div>
              )} */}
            </div>
            <button
              onClick={() => {
                Cookies.remove('leadCrs');
                router.push('/');
              }}
              className="blue-fill-btn mx-auto min-h-56 py-14 px-36 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { numberFormat } from '@/_helper/Common';
import { LottieAnimation } from '@/_services/lottieAnimations';

export default function BannerVideo({ details, courseSlug }) {
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.25, type: 'tween' }}
      viewport={{ once: true }}
      className="deatils-banner-right-side p-lg-22 p-16 rounded-lg-30 rounded-20 w-100 max-w-476 min-w-xl-476 min-w-lg-400 mx-xl-0 mx-auto mb-lg-0 mb-32"
    >
      <div className="img-box mb-20 position-relative">
        {(details?.page_type == 2 && (
          <div className="video-container-wrapper rounded-16">
            <video
              width="100%"
              height="244"
              autoPlay
              loop
              controls
              className="rounded-16 object-fit-cover"
              ref={videoRef}
            >
              <source
                src={`${process.env.IMG_PATH}${details?.course_video_url}`}
                type="video/mp4"
                className="rounded-16"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )) || (
          <>
            <div className="">
              {(details?.img_json_url && <LottieAnimation url={details?.img_json_url} />) || (
                <Image
                  src={'/images/detault-course-img.svg'}
                  width={444}
                  height={396}
                  alt="Image"
                  className="img-fluid"
                />
              )}
            </div>
            {/* <Image
              src={`${process.env.IMG_PATH}images/courses-details/details-banner-img.webp`}
              width={526}
              height={376}
              alt="banner-img"
              className="img-fluid rounded-lg-16 rounded-12 max-h-xl-276 max-h-lg-280 h-100 w-full object-fit-cover banner-video-box"
            /> */}
            {/* <div className="position-absolute top-50 start-50 plus-outline-btn cursor-pointer rounded-circle">
              <Image
                src={`${process.env.IMG_PATH}images/icons/Play-outline-btn.svg`}
                width={72}
                height={72}
                alt="banner-img"
                className="img-fluid rounded-20 w-size-xl-72 w-size-50 h-size-xl-72 h-size-50"
              />
            </div> */}
          </>
        )}
      </div>
      <div className="d-grid grid-cols-2">
        {(details?.job_source_link && (
          <Link href={details?.job_source_link} target="_blank" rel="nofollow">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-lg-7 mb-6">
                <Image
                  src={`${process.env.IMG_PATH}images/icons/linkdin-icon.svg`}
                  width={21}
                  height={21}
                  alt="logo"
                  className="img-fluid rounded-20 w-size-lg-26 w-size-20 h-lg-26 h-20"
                />
              </div>
              <span className="fs-lg-20 fs-14 fw-600 lh-lg-30 lh-22 text-color-1 d-block">
                {numberFormat(details?.course_linkedin_jobs)}+
              </span>
              <span className="fs-lg-12 fw-400 lh-lg-18 fs-10 lh-14 text-color-1">Jobs on LinkedIn Alone</span>
            </div>
          </Link>
        )) || (
          <div className="d-flex flex-column align-items-center">
            <div className="mb-lg-7 mb-6">
              <Image
                src={`${process.env.IMG_PATH}images/icons/linkdin-icon.svg`}
                width={21}
                height={21}
                alt="logo"
                className="img-fluid rounded-20 w-size-lg-26 w-size-20 h-lg-26 h-20"
              />
            </div>
            <span className="fs-lg-20 fs-14 fw-600 lh-lg-30 lh-22 text-color-1 d-block">
              {details?.course_linkedin_jobs}+
            </span>
            <span className="fs-lg-12 fw-400 lh-lg-18 fs-10 lh-14 text-color-1">Jobs on LinkedIn Alone</span>
          </div>
        )}
        {(details?.max_compensation_source_link && (
          <Link href={details?.max_compensation_source_link} target="_blank" rel="nofollow">
            <div className="d-flex flex-column align-items-center">
              <motion.div className="mb-lg-7 mb-6">
                <Image
                  src={`${process.env.IMG_PATH}images/icons/compensation-icon.svg`}
                  width={21}
                  height={21}
                  alt="logo"
                  className="img-fluid rounded-20 w-size-lg-26 w-size-20 h-lg-26 h-20"
                />
              </motion.div>
              <span className="fs-lg-20 fs-14 fw-600 lh-lg-30 lh-22 text-color-1 d-block">
                ₹{details?.course_maximum_compensation} LPA
              </span>
              <span className="fs-lg-12 fw-400 lh-lg-18 fs-10 lh-14 text-color-1">Maximum Compensation</span>
            </div>
          </Link>
        )) || (
          <div className="d-flex flex-column align-items-center">
            <motion.div className="mb-lg-7 mb-6">
              <Image
                src={`${process.env.IMG_PATH}images/icons/compensation-icon.svg`}
                width={21}
                height={21}
                alt="logo"
                className="img-fluid rounded-20 w-size-lg-26 w-size-20 h-lg-26 h-20"
              />
            </motion.div>
            <span className="fs-lg-20 fs-14 fw-600 lh-lg-30 lh-22 text-color-1 d-block">
              ₹{details?.course_maximum_compensation} LPA
            </span>
            <span className="fs-lg-12 fw-400 lh-lg-18 fs-10 lh-14 text-color-1">Maximum Compensation</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CourseReviewCard(props) {
  const { reviewData, index } = props;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <>
      {(reviewData?.video_url && (
        <motion.div
          ref={container}
          className="mesonery-item people-video-cards d-inline-block position-relative rounded-12 reverse-shadow-4 overflow-hidden w-full"
          key={index}
        >
          <div className="review-card">
            <motion.div className="position-relative" style={{ scale: scaleImage }}>
              <Image
                src={`${process.env.IMG_PATH}${reviewData?.thumbnailImage}`}
                alt="Video thumbnail"
                className="img-fluid w-full h-auto max-h-321 min-h-300 people-review-img rounded-12"
                width={420}
                height={198}
                style={{ objectFit: 'cover' }}
              />
              <div className="position-absolute bottom-0 h-100 w-full people-review-bg"></div>
              <div
                className="position-absolute top-50 start-50"
                // onClick={() => handleYoutubeVideoModal(reviewData?.videoUrl)}
              >
                <Image
                  src={`${process.env.IMG_PATH}images/icons/review-play-icon.svg`}
                  width={54}
                  height={54}
                  className="cursor-pointer plus-outline-btn rounded-circle"
                  alt="play-icon"
                />
              </div>
            </motion.div>
            <div className="position-absolute w-full people-review-info">
              <h3 className="fs-16 fw-600 lh-26 text-color-2 mb-6">{reviewData?.name}</h3>
              <p className="fs-14 fw-400 lh-21 mb-0 text-color-2">{reviewData?.designation}</p>
            </div>
          </div>
        </motion.div>
      )) || (
        <motion.div
          className="mesonery-item review-card-box border-w border-color-1 rounded-12 reverse-shadow-4"
          key={index}
        >
          <div className="card-content p-24">
            <p className="fs-14 fw-400 lh-21 text-color-26 mb-20">{reviewData?.review}</p>
            <div className="d-flex align-items-center">
              <div className="img-box me-3">
                {(reviewData?.reviewee_pic && (
                  <Image
                    src={`${process.env.IMG_PATH}${reviewData?.reviewee_pic}`}
                    alt="Profile"
                    width={42}
                    height={42}
                    className="img-fluid"
                  />
                )) || (
                  <Image
                    src={`${process.env.IMG_PATH}images/user-icon.png`}
                    alt="Profile"
                    width={42}
                    height={42}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="user-info">
                <h3 className="fs-16 fw-600 lh-24 text-color-17 mb-6">{reviewData?.reviewee_name}</h3>
                <p className="fs-14 fw-400 lh-21 text-color-10 mb-0">{reviewData?.reviewee_company}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

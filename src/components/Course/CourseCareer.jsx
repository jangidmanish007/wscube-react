import React from 'react';
import { Button } from 'react-bootstrap';
import { careerSupportData } from './careerSupportData';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { animationFromBottom } from '@/_utils/Animation';
import CareerSupportCard from './CareerSupportCard';
import { hideCtaPages } from './hideButtonPages';
import { usePathname } from 'next/navigation';

export default function CourseCareer({
  heading,
  subHeading,
  setShowLeadModal,
  setLeadNote,
  setDownloadCrs,
  setLeadHeading,
  courseSlug,
}) {
  const slidesToShow = 2;
  const isEnoughItems = careerSupportData?.length >= slidesToShow;

  const settings = {
    dots: true,
    infinite: isEnoughItems,
    slidesToShow: slidesToShow,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const listVariants = {
    initial: {
      x: -20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.2,
        // ease: 'linear',
        type: 'tween',
      },
    },
  };
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const isHideCtaPage = hideCtaPages.includes(slug);

  return (
    <section className="career-support-section py-lg-80 py-64 overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="row">
            <div lg={12} className="col-12">
              <motion.div
                initial={animationFromBottom.initial}
                whileInView={animationFromBottom.whileInView}
                transition={animationFromBottom.transition}
                viewport={{ once: true }}
                className="section-info text-center mb-40"
              >
                <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-16">{heading || 'Last Mile Prep'}</h2>
                <p className="fs-14 fw-400 lh-21 text-color-7">
                  {subHeading || 'Comprehensive Career Support to Help You Shine.'}
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={listVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="d-lg-flex flex-wrap grid-gap-20 justify-content-center mb-xl-20 mb-40 d-none career-card-wrapper"
          >
            {careerSupportData?.slice(0, 3).map((item, index) => {
              return (
                <motion.div variants={listVariants} className="p-0 w-100 max-w-277" key={index}>
                  <CareerSupportCard careerSupportAllData={item} />
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            variants={listVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="d-lg-flex flex-wrap grid-gap-20 justify-content-center mb-xl-20 mb-40 d-none career-card-wrapper"
          >
            {careerSupportData?.slice(3, 7).map((item, index) => {
              return (
                <motion.div variants={listVariants} className="p-0 w-100 max-w-277" key={index}>
                  <CareerSupportCard careerSupportAllData={item} />
                </motion.div>
              );
            })}
          </motion.div>

          <div className="d-lg-none d-flex">
            <div className="col-12 p-0 slider-with-dots mb-80">
              <Slider {...settings}>
                {careerSupportData?.map((item, index) => {
                  return (
                    <div className="px-1 mb-12" key={index}>
                      <CareerSupportCard careerSupportAllData={item} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          {!isHideCtaPage && (
            <div className="text-center pt-lg-4">
              <button
                className="blue-fill-btn min-h-56 px-46 fs-lg-18 fs-16 fw-600 lh-lg-27 lh-24 rounded-12 mx-auto hover-shadow-4"
                title="Apply Now"
                onClick={() => {
                  setLeadNote('Talk to Program Advisor - Course Page - Last Mile Prep');
                  setDownloadCrs(false);
                  setShowLeadModal(true);
                  setLeadHeading('Talk to Program Advisor');
                }}
              >
                Talk to Program Advisor
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { animationFromRight } from '@/_utils/Animation';
import CertificateCards from './CertificateCard';
import { usePathname } from 'next/navigation';

export default function CourseCertified() {
  const pathname = usePathname();
  const spotlightData = [
    {
      id: '1',
      icon: 'images/icons/certificate-icons.svg',
      title: 'Industry-Recognized Certificate',
      description: 'Earn a certificate valued by top companies.',
    },
    {
      id: '2',
      icon: 'images/icons/job-market-icon.svg',
      title: 'Stand Out in Job Market',
      description: 'Fortify Your Profile to Increase Credibility',
    },
    {
      id: '3',
      icon: 'images/icons/career-growth-icon.svg',
      title: 'Your Passport to Career Growth',
      description: 'Access Well-Paying Data Analyst positions',
    },
  ];

  const settings = {
    dots: true,
    rows: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
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

  return (
    <section className="pt-lg-102 pb-lg-125 pt-64 pb-64 grab-spotlight-section position-relative overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="main-wrapper position-relative">
            <div className="grid-xl-gap-80 grid-gap-40 d-flex px-xl-35 px-lg-30">
              <div className="w-full max-w-xl-322 max-w-lg-280 max-w-322 d-lg-block d-none">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.35, type: 'tween' }}
                  viewport={{ once: true }}
                  className="position-absolute top-0 max-w-xl-322 max-w-lg-280 max-w-322"
                >
                  {(pathname && pathname?.includes('jaipur') && (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/jaipur-certificate.webp`}
                      className="max-w-xl-322 max-w-lg-280 max-w-322 img-fluid rounded-20"
                      width={322}
                      height={455}
                      alt=""
                    />
                  )) || (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/certificatecourse.webp`}
                      className="max-w-xl-322 max-w-lg-280 max-w-322 img-fluid rounded-20"
                      width={322}
                      height={455}
                      alt=""
                    />
                  )}
                </motion.div>
              </div>
              <div className="w-full max-w-738 ms-auto mt-xl-48">
                <motion.div
                  initial={animationFromRight.initial}
                  whileInView={animationFromRight.whileInView}
                  transition={animationFromRight.transition}
                  viewport={{ once: true }}
                  className="section-info mb-xl-52 mb-30 text-color-2 text-lg-start text-center"
                >
                  <h2 className="fs-32 fw-600 lh-48 mb-20">Be in the spotlight by getting certified!</h2>
                  <p className="fs-14 fw-400 lh-21 text-color-2 mb-0">
                    A detailed overview of the course, including key topics, objectives, and module sequence.
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="w-full d-lg-flex grid-xl-gap-80 grid-gap-40 mentor-main-wrapper
           bg-color-3 rounded-24 px-xl-35 px-lg-30 pb-xl-80 pt-xl-35 pt-lg-30 pb-lg-40"
            >
              <div className="w-full max-w-xl-322 max-w-lg-280 max-w-322 mx-auto mb-lg-0 mb-40">
                <div className="mb-lg-0 d-lg-none d-block text-center">
                  {(pathname && pathname?.includes('jaipur') && (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/jaipur-certificate.webp`}
                      className="w-full max-w-xl-322 max-w-lg-280 max-w-322 mx-auto img-fluid rounded-20"
                      alt=""
                      width={322}
                      height={455}
                    />
                  )) || (
                    <Image
                      src={`${process.env.IMG_PATH}images/courses-details/certificatecourse.webp`}
                      className="w-full max-w-xl-322 max-w-lg-280 max-w-322 mx-auto img-fluid rounded-20"
                      alt=""
                      width={322}
                      height={455}
                    />
                  )}
                </div>
              </div>
              <div className="w-full max-w-lg-846 ms-lg-auto d-lg-block d-none">
                <motion.div
                  variants={listVariants}
                  initial="initial"
                  whileInView="animate"
                  // viewport={{ once: false }}
                  className="d-grid grid-lg-cols-3 grid-gap-20"
                >
                  {spotlightData?.map((item, index) => {
                    return (
                      <motion.div variants={listVariants} key={index}>
                        <CertificateCards featureData={item} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="d-flex d-lg-none mb-42">
                <div className="col-12 p-0">
                  <div className="slider-with-dots white-dots">
                    <Slider {...settings}>
                      {spotlightData?.map((item, index) => {
                        return (
                          <div className="px-12" key={index}>
                            <CertificateCards featureData={item} />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

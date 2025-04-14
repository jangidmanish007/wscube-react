import React, { useEffect, useRef } from 'react';

export default function PortfolioListingBanner({ portfolioBannerData }) {
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
    <section className="course-category-section pb-81 pt-106 pt-lg-119 position-relative">
      <div className="category-header-gradiant w-100 min-h-145 position-absolute top-0 start-0 d-block"></div>
      <div className="container-main container-w-xl-1202 position-relative">
        <div className="d-lg-flex justify-content-between align-items-center grid-gap-40">
          <div className="w-full max-w-593 mx-lg-0 mx-auto text-lg-start text-center mb-lg-0 mb-24">
            <h1 className="fs-lg-40 fs-28 fw-600 lh-48 text-color-1 mb-8">
              {portfolioBannerData?.heading || 'Portfolio - The Proof of Work!'}
            </h1>
            <p className="fs-lg-32 fs-28 fw-600 lh-48 text-color-1 mb-24">
              {portfolioBannerData?.sub_heading || 'Stand Out. Get Hired'}
            </p>
            <p className="fs-18 fw-400 lh-27 mb-0">
              {portfolioBannerData?.description || 'Explore the Portfolio Websites of Our Top Performers'}
            </p>
          </div>
          <div className="w-full max-w-476 mx-lg-0 mx-auto">
            <div
              className="p-lg-20 p-14 rounded-32"
              style={{
                background:
                  'conic-gradient(from 180deg at 50% 76.59%, #FFFFFF 0deg, #E6EBFF 360deg, #E6EBFF 360.04deg)',
              }}
            >
              <div className="video-container-wrapper rounded-16">
                {/* <video
                  width="100%"
                  height="267"
                  autoPlay
                  loop
                  controls
                  muted
                  className="rounded-16 object-fit-cover h-auto min-h-lg-267"
                  ref={videoRef}
                >
                  <source
                    src={`${process.env.IMG_PATH}${
                      portfolioBannerData?.video_url || 'images/home-images/home_video/Jayanyt_Web_Testimonial.mp4'
                    }`}
                    type="video/mp4"
                    className="rounded-16"
                  />
                  Your browser does not support the video tag.
                </video> */}
                <img src={`${process.env.IMG_PATH}uploads/portfolio/banner-img.webp`} className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

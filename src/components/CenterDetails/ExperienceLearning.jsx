import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function ExperienceLearning({ headingData, centerSlug }) {
  const campusGalleryJaipurData = [
    { id: 1, image: 'images/centers/campus-gallary-img-1.webp' },
    { id: 2, image: 'images/centers/campus-gallary-img-2.webp' },
    { id: 3, image: 'images/centers/campus-gallery-img-3.webp' },
    { id: 4, image: 'images/centers/campus-gallery-img-4.webp' },
    { id: 5, image: 'images/centers/campus-gallery-img-5.webp' },
    { id: 6, image: 'images/centers/campus-gallery-img-6.webp' },
    { id: 7, image: 'images/centers/campus-gallery-img-7.webp' },
  ];

  const campusGalleryJodhpurData = [
    { id: 1, image: 'images/centers/campus-gallary-img-8.webp' },
    { id: 2, image: 'images/centers/campus-gallary-img-9.webp' },
    { id: 3, image: 'images/centers/campus-gallary-img-10.webp' },
    { id: 4, image: 'images/centers/campus-gallary-img-11.webp' },
    { id: 5, image: 'images/centers/campus-gallary-img-12.webp' },
    { id: 6, image: 'images/centers/campus-gallary-img-13.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-14.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-15.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-16.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-17.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-18.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-19.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-20.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-21.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-22.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-23.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-24.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-25.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-26.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-27.webp' },
    { id: 7, image: 'images/centers/campus-gallary-img-28.webp' },
  ];

  return (
    <section className="py-lg-80 py-64 overflow-hidden experience-learning-section">
      <div className="container-main container-w-xl-1202">
        <div className="section-info text-center text-color-1 mb-64">
          <h2 className="fw-600 fs-32 lh-48 mb-0">{headingData?.heading || 'Campus Gallery'}</h2>
          <p className="fs-14 fw-400 lh-21 text-color-7 mb-0">{headingData?.subHeading}</p>
        </div>
      </div>
      <div className="mb-32">
        {(centerSlug == 'jaipur' && (
          <Marquee pauseOnHover autoFill speed={25}>
            {campusGalleryJaipurData?.map((item, index) => {
              return (
                <div
                  className="mx-10 user-select-none campus-galley-card p-1 min-w-200 min-h-220 max-w-220 max-w-220 rounded-20"
                  key={index}
                >
                  <div className="w-100 h-100 img-box rounded-20 overflow-hidden">
                    <Image
                      src={`${process.env.IMG_PATH}${item?.image}`}
                      width={192}
                      height={216}
                      alt=""
                      className="img-fluid object-fit-cover min-h-220"
                    />
                  </div>
                </div>
              );
            })}
          </Marquee>
        )) || (
          <Marquee pauseOnHover autoFill speed={25}>
            {campusGalleryJodhpurData?.map((item, index) => {
              return (
                <div
                  className="mx-10 user-select-none campus-galley-card p-1 min-w-200 min-h-220 max-w-220 max-w-220 rounded-20"
                  key={index}
                >
                  <div className="w-100 h-100 img-box rounded-20 overflow-hidden">
                    <Image
                      src={`${process.env.IMG_PATH}${item?.image}`}
                      width={192}
                      height={216}
                      alt=""
                      className="img-fluid object-fit-cover min-h-220"
                    />
                  </div>
                </div>
              );
            })}
          </Marquee>
        )}
      </div>
      {/* <div className="mb-64">
        <Marquee pauseOnHover autoFill speed={25} direction={'right'}>
          {campusGalleryJaipurData?.map((item, index) => {
            return (
              <div
                className="mx-10 user-select-none campus-galley-card p-1 min-w-200 min-h-220 max-w-220 max-w-220 rounded-20"
                key={index}
              >
                <div className="w-100 h-100 img-box rounded-20 overflow-hidden">
                  <Image
                    src={item?.image}
                    width={192}
                    height={216}
                    alt=""
                    className="img-fluid object-fit-cover min-h-220"
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div> */}
      {/* <div className="text-center">
        <button className="blue-fill-btn min-h-56 py-14 px-46 fs-18 fw-600 lh-27 rounded-12 hover-shadow-4 mx-auto">
          Apply Now
        </button>
      </div> */}
    </section>
  );
}

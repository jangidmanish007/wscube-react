import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MasterClassFor({ masterClassFeaturesData }) {
  return (
    <section className="master-class-for py-lg-138 py-64">
      <div className="container-main container-w-xl-1202 mobile-container-p-0">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="w-100 max-w-xl-318 max-w-lg-400 text-center text-lg-start mb-40 mb-lg-0 px-sm-0 px-3">
            <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-16">Who is this masterclass for?</h2>
            <p className="fs-14 lh-21 text-color-7 mb-0">Highlighting the Best Course Features.</p>
          </div>
          <div className="w-100 ml-lg-20 max-w-xl-832  max-w-lg-600 marquee-for position-relative who-apply-card-wrapper">
            <Marquee pauseOnHover autoFill speed={50}>
              {masterClassFeaturesData?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="border-w-2 border-color-1 rounded-14 p-14 h-full hover-shadow-4 w-full max-w-156 mx-10 mb-1">
                      <div className="p-0">
                        <div className="img-box mb-10 text-center">
                          {(item?.feature_img_url && (
                            <Image
                              src={`${process.env.IMG_PATH}${item?.feature_img_url}`}
                              width={127}
                              height={96}
                              className="rounded-9 img-fluid w-full"
                              alt="why-can-apply-img"
                            />
                          )) || (
                            <Image
                              src={process.env.IMG_PATH + `images/courses-details/copywriter-img.webp`}
                              width={127}
                              height={96}
                              className="rounded-9 img-fluid w-full"
                              alt="why-can-apply-img"
                            />
                          )}
                        </div>
                        <h3 className="fs-14 fw-600 lh-21 text-color-1 text-center">{item?.feature_title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

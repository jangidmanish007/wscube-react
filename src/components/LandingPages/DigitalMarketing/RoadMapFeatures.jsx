import Image from 'next/image';
import React from 'react';

export default function RoadMapFeatures() {
  return (
    <section className="bg-color-41 py-lg-116 py-88">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading mb-lg-52 mb-32">
          <h2 className="text-color-33 fs-lg-28 text-[1.3rem] lh-33 fw-500 mb-0 text-center">
            At the end of this program, you'll be able to….
          </h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center grid-gap-20">
          <div className="w-full max-w-lg-518 h-auto py-lg-16 py-12 px-lg-28 px-20 rounded-45 roadmap-card-wrapper transation-3 common-card-box">
            <div className="roadmap-for-cards d-flex align-items-center h-full">
              <div className="img-box mr-lg-20 mr-12">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/checked-icon.svg`}
                  width={22}
                  height={22}
                  className="min-w-22 min-h-22"
                />
              </div>
              <div className="content">
                <p className="mb-0 text-color-33 fs-lg-18 text-md fw-400">
                  Build an impressive portfolio with real-world projects, making you job-ready for Digital Marketer
                  roles.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg-518 h-auto py-lg-16 py-12 px-lg-28 px-20 rounded-45 roadmap-card-wrapper transation-3 common-card-box">
            <div className="roadmap-for-cards d-flex align-items-center h-full">
              <div className="img-box mr-lg-20 mr-12">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/checked-icon.svg`}
                  width={22}
                  height={22}
                  className="min-w-22 min-h-22"
                />
              </div>
              <div className="content">
                <p className="mb-0 text-color-33 fs-lg-18 text-md fw-400">
                  Run marketing campaigns on meta ads, Google ads, and LinkedIn ads to increase sales & awareness using
                  fundamental strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg-518 h-auto py-lg-16 py-12 px-lg-28 px-20 rounded-45 roadmap-card-wrapper transation-3 common-card-box">
            <div className="roadmap-for-cards d-flex align-items-center h-full">
              <div className="img-box mr-lg-20 mr-12">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/checked-icon.svg`}
                  width={22}
                  height={22}
                  className="min-w-22 min-h-22"
                />
              </div>
              <div className="content">
                <p className="mb-0 text-color-33 fs-lg-18 text-md fw-400">
                  Create a marketing automation strategy for WhatsApp, email marketing, and push notifications for
                  different business niches.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg-518 h-auto py-lg-16 py-12 px-lg-28 px-20 rounded-45 roadmap-card-wrapper transation-3 common-card-box">
            <div className="roadmap-for-cards d-flex align-items-center h-full">
              <div className="img-box mr-lg-20 mr-12">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/checked-icon.svg`}
                  width={22}
                  height={22}
                  className="min-w-22 min-h-22"
                />
              </div>
              <div className="content">
                <p className="mb-0 text-color-33 fs-lg-18 text-md fw-400">
                  Perform on-page, off-page, and technical SEO based on customer behaviors and preferences to make more
                  informed decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg-518 h-auto py-lg-16 py-12 px-lg-28 px-20 rounded-45 roadmap-card-wrapper transation-3 common-card-box">
            <div className="roadmap-for-cards d-flex align-items-center h-full">
              <div className="img-box mr-lg-20 mr-12">
                <Image
                  src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/checked-icon.svg`}
                  width={22}
                  height={22}
                  className="min-w-22 min-h-22"
                />
              </div>
              <div className="content">
                <p className="mb-0 text-color-33 fs-lg-18 text-md fw-400">
                  Build a landing page for domain marketing, website planning, and creation with free domain and website
                  hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

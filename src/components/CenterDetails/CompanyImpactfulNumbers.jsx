import { formatNumberCount } from '@/_helper/Common';
import React from 'react';

export default function CompanyImpactfulNumbers({ inpactfullNumber, headingData }) {
  return (
    <section className="inpactful-number-wrapper pt-md-80 pt-40 px-43 pb-md-22 pb-40">
      <div className="container-main container-w-xl-1202">
        <div className="">
          <div className="row">
            <div className="col-12 mb-64 text-center">
              <h2 className="mb-lg-20 mb-16 fs-32 fw-600 lh-lg-48 text-color-2">{headingData?.heading}</h2>
              <p className="mb-0 fs-14 lh-21 fw-400 text-color-2">{headingData?.subHeading}</p>
            </div>
            <div className="col-12">
              <div className="d-grid grid-lg-cols-4 grid-md-cols-2 grid-cols-1 grid-gap-xl-48 grid-gap-20 impactful-cards-wrapper">
                <div className="impactful-number-card position-relative pb-xl-68 pb-33">
                  <div className="d-md-flex justify-content-lg-start jus text-md-start text-center text-color-2 card-content max-w-216 mx-lg-0 mx-auto">
                    <h3 className="fs-xl-40 fs-32 lh-xl-48 lh-40 fw-600 mb-0 mr-12">
                      {formatNumberCount(inpactfullNumber?.learners_on_youtube)}+
                    </h3>
                    <span className="fs-14 lh-21 fw-400 ">Learners On YouTube </span>
                  </div>
                </div>
                <div className="impactful-number-card position-relative pb-xl-68 pb-33">
                  <div className="d-md-flex justify-content-lg-start jus text-md-start text-center text-color-2 card-content max-w-216 mx-lg-0 mx-auto">
                    <h3 className="fs-xl-40 fs-32 lh-xl-48 lh-40 fw-600 mb-0 mr-12">
                      {formatNumberCount(inpactfullNumber?.students_trained)}+
                    </h3>
                    <span className="fs-14 lh-21 fw-400 ">Aspirants Trained</span>
                  </div>
                </div>
                <div className="impactful-number-card position-relative pb-xl-68 pb-33">
                  <div className="d-md-flex text-md-start text-center text-color-2 card-content max-w-xl-172 max-w-lg-129 max-w-216 mx-lg-0 mx-auto">
                    <h3 className="fs-xl-40 fs-32 lh-xl-48 lh-40 fw-600 mb-0 mr-12">
                      {formatNumberCount(inpactfullNumber?.traning_domains)}+
                    </h3>
                    <span className="fs-14 lh-21 fw-400 ">Training Domains </span>
                  </div>
                </div>
                <div className="impactful-number-card position-relative pb-xl-68">
                  <div className="d-md-flex text-md-start text-center text-color-2 card-content max-w-226 mx-lg-0 mx-auto">
                    <h3 className="fs-xl-40 fs-32 lh-xl-48 lh-40 fw-600 mb-0 mr-12">{inpactfullNumber?.ratings}/5</h3>
                    <span className="fs-14 lh-21 fw-400 ">Average Learner Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

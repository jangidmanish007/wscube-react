import React from 'react';

export default function HowCourseWork(props) {
  const { openScheduleModal } = props;
  return (
    <section className="py-lg-116 py-88 why-learn-the-program-section position-relative overflow-hidden">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading text-center mb-60">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">How does this program work?</h2>
          <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">Your step-by-step guide to career advancement</p>
        </div>
        <div className="d-grid grid-col-1 max-w-601 w-full mx-auto mb-60">
          <div className="program-work-card new-program-work-card p-xl-32 p-20 position-relative min-h-lg-149 cursor-pointer border-w border-dashed rounded-30">
            <div className="bg-layers">
              <span className="remove-extra-border block position-absolute end-0 h-size-1 w-size-30 bg-color-40"></span>
              <span className="remove-extra-border-2 block position-absolute end-0 h-size-1 w-size-30 bg-color-40"></span>
              <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
              <div className="polygon-icon polygon-icon-1 position-absolute w-size-10 h-size-12"></div>
            </div>
            <div className="d-flex align-items-center program-card-body">
              <div className="learn-count mr-20">
                <span
                  className="fs-lg-80 lh-lg-96 lh-64 fs-48 text-color-33 mb-0 align-middle transation-3"
                  style={{ opacity: '0.1' }}
                >
                  1
                </span>
              </div>
              <div className="content align-middle">
                <h3 className="fs-20 text-color-2 mb-10">Learn</h3>
                <p className="mb-0 fs-14 fw-normal text-color-2 line-clamp-2">
                Upskill yourself by gaining insights from leading professionals' vast experience.
                </p>
              </div>
            </div>
          </div>
          <div className="program-work-card new-program-work-card p-xl-32 p-20 position-relative min-h-lg-149 cursor-pointer border-w border-dashed rounded-30">
            <div className="bg-layers">
              <span className="remove-extra-border position-absolute h-size-1 w-size-30 bg-color-40"></span>
              <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
              <div className="polygon-icon polygon-icon-2 position-absolute w-size-10 h-size-12"></div>
            </div>
            <div className="d-flex align-items-center program-card-body">
              <div className="learn-count mr-20">
                <span
                  className="fs-lg-80 lh-lg-96 lh-64 fs-48 text-color-33 mb-0 align-middle transation-3"
                  style={{ opacity: '0.1' }}
                >
                  2
                </span>
              </div>
              <div className="content align-middle">
                <h3 className="fs-20 text-color-2 mb-10">Practice</h3>
                <p className="mb-0 fs-14 fw-normal text-color-2 line-clamp-2">
                  Sharpen your skills by learning through course assignments, live projects, and regular assessments and
                  quizzes.
                </p>
              </div>
            </div>
          </div>
          <div className="program-work-card new-program-work-card p-xl-32 p-20 position-relative min-h-lg-149 cursor-pointer border-w border-dashed rounded-30">
            <div className="bg-layers">
              <span className="remove-extra-border block position-absolute end-0 h-size-1 w-size-30 bg-color-40"></span>
              <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
              <div className="polygon-icon polygon-icon-3 position-absolute w-size-10 h-size-12"></div>
              <div className="polygon-icon polygon-icon-1 position-absolute w-size-10 h-size-12"></div>
            </div>
            <div className="d-flex align-items-center program-card-body">
              <div className="learn-count mr-20">
                <span
                  className="fs-lg-80 lh-lg-96 lh-64 fs-48 text-color-33 mb-0 align-middle transation-3"
                  style={{ opacity: '0.1' }}
                >
                  3
                </span>
              </div>
              <div className="content align-middle">
                <h3 className="fs-20 text-color-2 mb-10">Ask</h3>
                <p className="mb-0 fs-14 fw-normal text-color-2 line-clamp-2">
                Resolve your queries from industry experts with our dedicated one-to-one doubt-clearing sessions.
                </p>
              </div>
            </div>
          </div>
          <div className="program-work-card new-program-work-card p-xl-32 p-20 position-relative min-h-lg-149 cursor-pointer border-w border-dashed rounded-30">
            <div className="bg-layers">
              <span className="remove-extra-border position-absolute h-size-1 w-size-30 bg-color-40"></span>
              <div className="hover-bg-grident position-absolute top-0 start-0 w-full h-full rounded-30 opacity-0"></div>
            </div>
            <div className="d-flex align-items-center program-card-body">
              <div className="learn-count mr-20">
                <span
                  className="fs-lg-80 lh-lg-96 lh-64 fs-48 text-color-33 mb-0 align-middle transation-3"
                  style={{ opacity: '0.1' }}
                >
                  4
                </span>
              </div>
              <div className="content align-middle">
                <h3 className="fs-20 text-color-2 mb-10">Build</h3>
                <p className="mb-0 fs-14 fw-normal text-color-2 line-clamp-2">
                  Craft a diverse portfolio and resume with LinkedIn optimization showcasing your Digital Marketing
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="rounded-12 w-full max-w-lg-410 max-w-250 py-lg-20 py-16 px-lg-12 fs-lg-18 fs-16 fw-600 text-color-26 book-demo-btn"
            onClick={() => openScheduleModal('Schedule_Demo')}
          >
            Book Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}

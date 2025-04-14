'use client';
import moment from 'moment';
import Image from 'next/image';

export default function CourseCohorts({
  cohortDetails,
  setShowLeadModal,
  setLeadHeading,
  setLeadNote,
  setDownloadCrs,
}) {
  const today = moment().utc().startOf('day');

  return (
    <section className="pt-lg-80 pt-64 cohorts-section">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12">
            <div className="max-w-1055 mx-auto w-100 pb-lg-60 pb-64 course-cohorts-list px-lg-2">
              <h2 className="text-white fs-lg-32 fs-24 lh-48 fw-600 text-center mb-28 mb-lg-40">
                <Image
                  width={33}
                  height={33}
                  alt="Icon"
                  className="img-fluid mr-16 mb-1"
                  src={process.env.IMG_PATH + 'images/bg-layers/bg-star-1.svg'}
                />
                Next Cohort Starting From
              </h2>
              <ul className="m-0 list-unstyled">
                {cohortDetails?.cohorts?.length > 0 &&
                  cohortDetails?.cohorts.map((item, key) => {
                    const startDateTime = `${item.start_date.split('T')[0]}T${item.start_time}`;
                    const endDateTime = `${item.start_date.split('T')[0]}T${item.end_time}`;
                    const cohortStartDate = moment.utc(item.start_date);
                    const startDate = moment(item.start_date).format('Do MMM, YY');
                    const startTime = moment(startDateTime).format('LT');
                    return (
                      <li key={key} className="d-md-flex align-items-lg-center mb-20">
                        <div
                          className="rounded-12 border-w min-w-161 w-max-content min-h-66 mr-12 max-h-66 overflow-hidden d-md-block d-none"
                          style={{ borderColor: 'rgba(254, 224, 177, 1)' }}
                        >
                          <div
                            className="m-0 w-100 h-size-26 d-flex align-items-center justify-content-center fs-12"
                            style={{ color: '#6A4201', backgroundColor: '#FEE0B1' }}
                          >
                            Cohort {(cohortStartDate.isSameOrBefore(today) && 'started') || 'start'} on
                          </div>
                          <div
                            className="m-0 w-100 h-size-40 text-color-1 d-flex align-items-center justify-content-center fs-16 fw-600"
                            style={{ backgroundColor: '#FFF5E6' }}
                          >
                            <span className="pb-1">{moment(item.start_date).format('Do MMM, YY')}</span>
                          </div>
                        </div>
                        <div
                          className="d-md-none h-size-30 fs-14 fw-600 justify-content-center 
                          rounded-tl-8 rounded-tr-8 min-w-120 d-flex align-items-center ml-20 w-max-content"
                          style={{ backgroundColor: '#FFF5E6' }}
                        >
                          {moment(item.start_date).format('Do MMM, YY')}
                        </div>
                        <div className="bg-white min-h-66 w-100 py-lg-0 py-16 rounded-12 px-lg-24 px-16 d-lg-flex align-items-center">
                          <div className="d-md-flex align-items-center">
                            <p className="m-0 fs-xl-14 fs-12 text-color-34">
                              <Image
                                width={18}
                                height={18}
                                alt="Icon"
                                className="img-fluid mr-8"
                                src={process.env.IMG_PATH + 'images/icons/gray-dot-clock.svg'}
                              />
                              {moment(startDateTime).format('LT')} to {moment(endDateTime).format('LT')}
                            </p>{' '}
                            <div className="d-flex align-items-center mt-md-0 mt-12">
                              {(item?.cohort_type == 'evening' && (
                                <span
                                  className="d-flex align-items-center w-max-content px-8 text-color-3 rounded-14 border-w fs-xl-14 fs-12 
                            w-size-95 h-size-29 justify-content-center ml-md-12"
                                  style={{ borderColor: '#CCD6FF', backgroundColor: '#E5EBFF' }}
                                >
                                  <Image
                                    width={13}
                                    height={13}
                                    alt="Icon"
                                    className="img-fluid mr-8"
                                    src={process.env.IMG_PATH + 'images/icons/evening-icon.svg'}
                                  />
                                  Evening
                                </span>
                              )) ||
                                ''}

                              {(item?.cohort_type == 'morning' && (
                                <span
                                  className="d-flex align-items-center w-max-content px-8 rounded-14 border-w fs-xl-14 fs-12 
                            w-size-95 h-size-29 justify-content-center ml-md-12"
                                  style={{ borderColor: '#FEE0B1', backgroundColor: '#FFF5E6', color: '#B36F02' }}
                                >
                                  <Image
                                    width={13}
                                    height={13}
                                    alt="Icon"
                                    className="img-fluid mr-8"
                                    src={process.env.IMG_PATH + 'images/icons/morning-icon.svg'}
                                  />
                                  Morning
                                </span>
                              )) ||
                                ''}
                              <span
                                className="text-color-34 fs-xl-14 fs-12 d-flex align-items-center px-8 h-size-29 rounded-14 border-w bg-color-19 ml-12"
                                style={{ borderColor: '#E5EBFF' }}
                              >
                                Weekday (Mon to Sat)
                              </span>
                            </div>
                          </div>
                          {(item?.button_status == 1 && (
                            <div className="ms-lg-auto mt-12 mt-lg-0 d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                {item?.filling_fast && (
                                  <span className="d-flex align-items-center text-color-24 fs-xl-14 fs-12">
                                    <Image
                                      width={16}
                                      height={17}
                                      alt="Icon"
                                      className="img-fluid mr-4"
                                      src={process.env.IMG_PATH + 'images/icons/fill-fast-icon.svg'}
                                    />
                                    Filling Fast
                                  </span>
                                )}
                                {(item?.seats_left_tagline && (
                                  <>
                                    <span className="rounded-circle w-size-4 h-size-4 d-block mx-6 bg-color-28"></span>
                                    <span className="text-color-11 fs-xl-14 fs-12 mr-12">
                                      {item?.seats_left_tagline}
                                    </span>
                                  </>
                                )) ||
                                  ''}
                              </div>
                              <button
                                onClick={() => {
                                  setLeadNote('Apply Now - Course Page Cohort - ' + startDate + ' ' + startTime);
                                  setDownloadCrs(false);
                                  setShowLeadModal(true);
                                  setLeadHeading('Apply Now');
                                }}
                                className="d-block ms-lg-0 ms-auto mt-md-0 mt-10 outline-none fs-xl-14 fs-12 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 min-h-40 px-lg-16 px-12"
                              >
                                Apply Now
                              </button>
                            </div>
                          )) || (
                            <div className="ms-lg-auto mt-12 mt-lg-0 text-nowrap bg-color-11 h-size-26 w-size-61 rounded-2 d-flex align-items-center justify-content-center text-white fs-12">
                              Sold Out
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

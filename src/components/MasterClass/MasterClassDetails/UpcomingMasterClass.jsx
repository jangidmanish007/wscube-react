import { numberFormat } from '@/_helper/Common';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function UpcomingMasterClass({ upcommingEventsData }) {
  return (
    <section className="upcoming-master-class py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="d-lg-flex text-lg-start text-center justify-content-between align-items-center mb-52">
          <h2 className="mb-lg-0 mb-3 fs-32 lh-48 fw-600 text-color-1">Upcoming Masterclasses</h2>
          <Link href={'/events'} className="text-color-3 fw-700 fs-14 lh-21 text-decoration-none">
            See all master classes <FontAwesomeIcon icon={faChevronRight} className="w-size-8 mt-1 ms-2" />
          </Link>
        </div>
        <div className="row">
          {upcommingEventsData?.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-20" key={index}>
              <div className="custom-card upcoming-class-card rounded-12 border-w-2 border-color-1 h-100">
                <div className="custom-card-body">
                  <Link href={(item?.custom_url && item?.custom_url) || `/events/${item?.slug_url}`}>
                    <div className="img-box">
                      {(item?.class_short_thumbnail && (
                        <Image
                          src={`${process.env.IMG_PATH}${item?.class_short_thumbnail}`}
                          width={429}
                          height={216}
                          className="img-fluid rounded-12"
                          alt="Image"
                        />
                      )) || (
                        <Image
                          src={process.env.IMG_PATH + 'images/master-class/upcoming-class.webp'}
                          width={429}
                          height={216}
                          className="img-fluid rounded-12"
                          alt="Image"
                        />
                      )}
                    </div>
                  </Link>
                  <div className="p-24 pb-0">
                    <Link href={(item?.custom_url && item?.custom_url) || `/events/${item?.slug_url}`}>
                      <h3 className="fs-18 lh-27 fw-600 text-color-1 mb-3">{item?.class_title}</h3>
                    </Link>
                    <ul className="list-unstyled p-0 mb-20">
                      <li className="fs-14 lh-21 text-color-1 mb-2">
                        <Image
                          src={process.env.IMG_PATH + 'images/master-class/cal-outline-black.svg'}
                          width={14}
                          height={14}
                          className="img-fluid me-2 mb-1"
                          alt="Image"
                        />
                        {moment(item?.class_start_datetime).format('Do MMM, ddd')}
                      </li>
                      <li className="fs-14 lh-21 text-color-1 mb-2">
                        <Image
                          src={process.env.IMG_PATH + 'images/master-class/clock-outline-black.svg'}
                          width={14}
                          height={14}
                          className="img-fluid me-2 mb-1"
                          alt="Image"
                        />
                        {moment(item?.class_start_datetime).format('hh:mm A')} -{' '}
                        {moment(item?.class_end_datetime).format('hh:mm A')}
                      </li>
                    </ul>
                    {/* <div className="d-flex align-items-center mb-28">
                      <div className="d-lg-flex d-none align-items-center enrolled-users max-w-100">
                        <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                          <Image
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
                            className="img-fluid"
                            alt="Image"
                            width={36}
                            height={36}
                          />
                        </div>
                        <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                          <Image
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
                            className="img-fluid"
                            alt="Image"
                            width={36}
                            height={36}
                          />
                        </div>
                        <div className="rounded-circle min-w-36 h-size-36 border-w border-color-1 justify-content center card-shadow-2 d-flex align-items-center enrolled-user">
                          <Image
                            src={`${process.env.IMG_PATH}images/user-icon.png`}
                            className="img-fluid"
                            alt="Image"
                            width={36}
                            height={36}
                          />
                        </div>
                      </div>
                      <p className="m-0 text-color-15 lh-21 fs-14">
                        <span className="fw-600 text-color-16">{formatNumberCount(item?.class_enrolled_count)}</span>{' '}
                        Enrolled
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="custom-card-footer p-24 pt-0">
                  {(item?.class_status == 'registration-open' && (
                    <Link href={`/events/${item?.slug_url}`}>
                      <button className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 w-100">
                        Register now
                      </button>
                    </Link>
                  )) ||
                    ''}
                  {(item?.class_status == 'join-now' && (
                    <Link href={`${item?.zoom_meeting_link}`} target="_blank" rel="nofollow">
                      <button className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 w-100">
                        Join now
                      </button>
                    </Link>
                  )) ||
                    ''}
                  {(item?.class_status == 'coming-soon' && (
                    <button
                      disabled
                      className="outline-none fs-14 w-100 fw-600 text-color-1 bg-color-24 border-w-2 rounded-12 h-size-40"
                    >
                      Coming soon
                    </button>
                  )) ||
                    ''}
                  {/* {(item?.class_status == 'expired' && (
                    <button
                      disabled
                      className="outline-none fs-14 w-100 fw-600 text-color-1 border-w-2 rounded-12 h-size-40"
                      style={{ opacity: '0.5', backgroundColor: '#d1d5db' }}
                    >
                      Expired
                    </button>
                  )) ||
                    ''} */}
                  {(item?.class_status == 'expired' && item?.class_enrolled_count && (
                    <span className="fs-15 text-color-7 fw-500">
                      <b className="fw-600">{numberFormat(Number(item?.class_enrolled_count))}</b> people have
                      participated
                    </span>
                  )) ||
                    ''}
                  {/* {(item?.custom_url && (
                    <Link href={`${item?.custom_url}`} target="_blank" rel="nofollow">
                      <button className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 w-100">
                        Join now
                      </button>
                    </Link>
                  )) || (
                    <Link href={`/events/${item?.slug_url}`}>
                      <button className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 w-100">
                        Register now
                      </button>
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

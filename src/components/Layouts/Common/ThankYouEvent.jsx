'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import successAnimation from './sucessful.json';
import { getEventShortDetails } from '@/_services/courseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import JionWithWhatsApp from '@/components/MasterClass/MasterClassListing/JionWithWhatsApp';
import { ThankYouCounter } from '@/components/MasterClass/MasterClassDetails/Counter/CountdownTimer';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

function ThankYouEvent({ pageData }) {
  const [userName, setUserName] = useState(null);
  const [eventSlug, setEventSlug] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [eventMetore, setEventMetore] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const name = Cookies.get('leadUser');
    if (name) {
      setUserName(name);
    }
  }, []);

  useEffect(() => {
    const slug = pathname;
    if (slug) {
      const url = slug.split('/').pop();
      setEventSlug(url);
    }
  }, [pathname]);

  useEffect(() => {
    if (pageData) {
      setEventData(pageData);
      const mentore = pageData?.Mentors[0];
      setEventMetore(mentore);
    }
  }, [pageData]);

  // useEffect(() => {
  //   if (eventSlug) {
  //     getEvent();
  //   }
  // }, [eventSlug]);

  // async function getEvent() {
  //   const res = await getEventShortDetails(eventSlug);
  //   if (res.status) {
  //     const data = res.result;
  //     setEventData(data);
  //     const mentore = data?.Mentors[0];
  //     setEventMetore(mentore);
  //   }
  // }

  return (
    <>
      <section className="pt-lg-110 pt-60 pb-lg-160 pb-40 thank-you-event-banner">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center">
              <div className="max-w-lg-300 min-h-lg-170 max-w-200 mx-auto">
                <Lottie animationData={successAnimation} loop={true} />
              </div>
              <h1 className="fs-lg-32 fs-25 fw-600 text-white lh-48 mb-lg-14">Hello {userName},</h1>
              <p className="fs-14 lh-21 text-white m-0">Your registration has been done successfully.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-40 pt-lg-0 pt-40 thank-you-detail-section">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12">
              <div className="event-details-box rounded-24 p-xl-44 p-lg-32 p-20 d-lg-flex align-items-center">
                <div className="text-center max-w-202 mx-auto mx-lg-0 mb-lg-0 mb-3">
                  <div
                    className="min-w-lg-135 max-w-lg-135 max-h-lg-135 min-h-lg-135 rounded-circle overflow-hidden mb-12 mx-auto event-mentor-thank-you"
                    style={{ backgroundColor: '#3D56D5' }}
                  >
                    <Image
                      src={process.env.IMG_PATH + eventMetore?.full_img_url}
                      width={135}
                      height={135}
                      alt="Mentor"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <p className="mb-1 fs-lg-18 fs-16 fw-600 text-color-1">By {eventMetore?.mentor_name}</p>
                  {/* <p className="text-color-7 fs-lg-14 fs-13 mb-1">(4+ years of Experience)</p> */}
                  <p className="text-color-7 fs-lg-14 fs-13 mb-2">{eventMetore?.designation}</p>
                  <Image
                    src={process.env.IMG_PATH + eventMetore?.organization_img_url}
                    width={80}
                    height={45}
                    alt="Company"
                    className="img-fluid"
                  />
                </div>
                <div className="mx-xl-80 mx-lg-30 center-content-event max-w-470 text-center text-lg-start">
                  <div
                    className="px-12 py-10 d-flex align-items-center rounded-12"
                    style={{ background: 'rgba(73, 206, 127, 0.2)' }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-size-23 fs-23 mr-6"
                      style={{ color: '#49CE7F' }}
                    />
                    <p className="text-color-1 fs-lg-16 fs-14 m-0">
                      Hurray! Your registration for this event has been done!
                    </p>
                  </div>
                  <h2 className="my-20 fs-lg-28 fs-20 fw-600 lh-42 text-color-1">{eventData?.class_title}</h2>
                  <ul className="d-lg-flex p-0 list-unstyled mb-lg-0 align-items-center justify-content-lg-start justify-content-center">
                    <li className="pr-lg-24 fs-lg-16 fs-14 d-flex mx-auto mb-2 mx-lg-0 align-items-center text-color-1 w-max-content">
                      <Image
                        src={process.env.IMG_PATH + 'images/master-class/cal-outline-black.svg'}
                        width={21}
                        height={23}
                        alt="Icon"
                        className="img-fluid me-2 w-size-lg-21 w-size-16"
                      />
                      {moment(eventData?.class_start_datetime).format('Do MMM, ddd')}
                    </li>
                    <li className="pr-lg-24 fs-lg-16 fs-14 d-flex mx-auto mb-2 mx-lg-0 align-items-center text-color-1 w-max-content">
                      <Image
                        src={process.env.IMG_PATH + 'images/master-class/clock-outline-black.svg'}
                        width={21}
                        height={23}
                        alt="Icon"
                        className="img-fluid me-2 w-size-lg-21 w-size-16"
                      />
                      {moment(eventData?.class_start_datetime).format('hh:mm A')} -{' '}
                      {moment(eventData?.class_end_datetime).format('hh:mm A')}
                    </li>
                  </ul>
                </div>
                <div className="text-center w-100 max-w-275 mx-lg-0 mx-auto">
                  <h3 className="mb-lg-20 mb-12 text-color-1 fw-600 fs-lg-22 fs-18">Event starts soon</h3>
                  {(eventData?.class_start_datetime && (
                    <ThankYouCounter targetDate={eventData?.class_start_datetime} />
                  )) ||
                    ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JionWithWhatsApp communityQrImg={eventData?.community_qr_img} communityUrl={eventData?.community_url} />
    </>
  );
}

export default ThankYouEvent;

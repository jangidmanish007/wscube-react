'use client';
import { getCrmCourseNameBySlug } from '@/_services/courseService';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ThankYouEventDa() {
  const [courseId, setCourseId] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [courseSlug, setCourseSlug] = useState(null);
  const [centerSlug, setCenterSlug] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const id = Cookies.get('leadCrs');
    if (id) {
      setCourseId(id);
    }
  }, []);

  useEffect(() => {
    if (courseSlug) {
      getCourse();
    }
  }, [courseSlug]);

  useEffect(() => {
    const slug = '/data-analytics-course';
    const center = Cookies.get('leadCenter');
    if (slug) {
      const url = slug.split('/')[1];
      const baseCourseSlug =
        url.includes('jaipur') || url.includes('jodhpur') ? url.replace('-jaipur', '').replace('-jodhpur', '') : url;
      setCourseSlug(baseCourseSlug);
      setCenterSlug(center);
    }
  }, []);

  // useEffect(() => {
  //   if (courseSlug === 'data-analytics-course') {
  //     router.push('/thank-you-data-analytics-course');
  //   }
  // }, [courseSlug]);
  async function getCourse() {
    const res = await getCrmCourseNameBySlug(courseSlug, centerSlug);
    if (res.status) {
      setCourseData(res.result);
    }
  }

  return (
    <>
      <section className="py-lg-130 py-100">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fs-600 fs-22 text-color-1 mb-30 lh-34">
                Thank you for showing your interest in {courseData?.course_name} by WsCube Tech!
              </h2>
              <p className="text-color-10 fs-18 lh-28 mb-40">
                We have received your request and our team will get in touch with you shortly to share further details.
              </p>
              <button
                onClick={() => {
                  Cookies.remove('leadCrs');
                  router.push('/');
                }}
                className="blue-fill-btn mx-auto min-h-56 py-14 px-36 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow"
              >
                Go to Home Page
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYouEventDa;

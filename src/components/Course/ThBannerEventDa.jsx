'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import successAnimation from '@/components/Layouts/Common/sucessful.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

function ThBannerEventDa() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = Cookies.get('leadUser');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <>
      <section className="pt-lg-110 pt-60 pb-lg-110 pb-40 thank-you-event-banner">
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
    </>
  );
}

export default ThBannerEventDa;

'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function DAThankYou() {
  const router = useRouter();

  useEffect(() => {
    const preventBackNavigation = () => {
      history.pushState(null, null, window.location.href);
    };

    const handlePopState = (event) => {
      router.replace('/');
    };

    preventBackNavigation();
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return (
    <section className="py-lg-190 py-100">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12 text-center">
            <Image
              src={`/images/thank-you-check.svg`}
              width={125}
              height={125}
              alt="image"
              className="img-fluid mb-50"
            />
            <h2 className="fs-600 fs-22 text-color-1 mb-30 lh-34">
              Thank you for showing your interest in Data Analytics Mentorship Program by WsCube Tech!
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
  );
}

export default DAThankYou;

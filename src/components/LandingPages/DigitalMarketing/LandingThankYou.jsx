import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LandingThankYou() {
  return (
    <section className="landing-banner-section" style={{ minHeight: '100vh' }}>
      <div className="container-main container-w-xl-1092">
        <div className="pt-lg-80 pt-60">
          <div className="w-full logo-wrapper mb-lg-64 mb-40">
            <Image
              src={`${process.env.LANDING_IMG_PATH}images/landing-page/ws-logo.svg`}
              width={175}
              height={70}
              alt="logo"
            />
          </div>
          <div className="w-full max-w-798 mx-auto pb-80 pt-40">
            <div className="img-box max-w-lg-400 max-w-300 mb-40 mx-auto">
              <Image
                src={`${process.env.LANDING_IMG_PATH}images/landing-page/background/thankyou-icon.svg`}
                width={175}
                height={248}
                alt=""
                className="w-full"
              />
            </div>
            <div className="banner-heading mb-40">
              <h1 className="capitalize fs-lg-28 fs-23 text-center lh-lg-38 lh-32 fw-700 text-color-2 mb-16">
                Thank you for showing your interest in the skill-oriented Online
                <span style={{ color: '#fc9c03' }}> Digital Marketing </span>
                Course by WsCube Tech.
              </h1>
              <p
                className="fs-lg-18 fs-16 text-center lh-lg-24 lh-20 fw-400 text-base opacity-75 mb-16"
                style={{ color: '#ECECEC' }}
              >
                We have received your request and our team will get in touch with you shortly to share further details.
              </p>
            </div>
            <div className="max-w-lg-326 max-w-230 w-full mx-auto">
              <Link href={'/'}>
                <button className="rounded-12 w-full py-16 px-2 fs-lg-18 fs-13 fw-700 text-white download-curiculm-btn">
                  Go to Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

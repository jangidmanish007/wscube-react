import Link from 'next/link';
import React from 'react';

export default function CreatePortfolio({ categorySlug }) {
  return (
    <section className="position-relative mb-64" style={{ marginTop: '-40px' }}>
      <div className="container-main container-w-xl-1202">
        <div
          className="px-lg-60 px-30 py-lg-40 py-30 rounded-24"
          style={{ background: 'linear-gradient(97.91deg, #002CCD 7.06%, #000825 98.51%)' }}
        >
          <div className="d-lg-flex justify-content-between align-items-center text-lg-start text-center">
            <div className="w-full max-w-566 mb-lg-0 mb-20">
              <h2 className="fs-lg-28 fs-26 fw-600 lh-42 text-color-2">Create Your Own Portfolio</h2>
              <p className="fs-16 fw-400 lh-24 text-color-2 mb-0">
                Take the first step towards building a professional portfolio that makes you stand out in your field.
              </p>
            </div>
            <Link
              href={`https://www.wscubetech.com/${(categorySlug && categorySlug !== 'all' && categorySlug) || 'data'}`}
            >
              <button className="border-w-2 border-color-25 bg-color-25 rounded-12 px-md-28 px-22 h-size-56 outline-none text-color-1 fw-600 fs-lg-16 fs-14 contact-counselor-btn">
                Explore Programs!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

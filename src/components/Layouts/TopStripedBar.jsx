import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function TopStripedBar({ tobarBarData }) {
  return (
    <>
      <div className="header-striped bg-color-31 py-12 d-lg-flex d-none justify-content-center px-16 mx-auto align-items-center">
        <div className="div mr-12">
          <p className="fs-14 lh-21 fw-600 text-black mb-0">
            <span className="fw-400 ps-1">{parse(tobarBarData?.content)}</span>
          </p>
        </div>
        {tobarBarData?.button_text && tobarBarData?.link && (
          <Link href={tobarBarData?.link} target="_blank" rel="nofollow">
            <button className="rounded-pill border-0 bg-color-24 text-color-1 fs-14 lh-18 fw-400 py-7 px-10">
              {tobarBarData?.button_text}
            </button>
          </Link>
        )}
      </div>
      <div className="d-lg-none d-flex fs-14 text-black bg-color-31 py-2 pe-3">
        <Marquee pauseOnHover={true} speed={40}>
          <div className="pl-300 pr-300">{parse(tobarBarData?.content)}</div>
        </Marquee>
        {tobarBarData?.button_text && tobarBarData?.link && (
          <Link href={tobarBarData?.link} target="_blank" rel="nofollow" className="ms-2 text-color-3 fw-600">
            {tobarBarData?.button_text}
          </Link>
        )}
      </div>
    </>
  );
}

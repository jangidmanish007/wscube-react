'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function MasterClassJoin({ whyJoinMasterClassData, setShowLeadModal, isEventsExpired }) {
  return (
    <section className="master-why-join pt-xl-0 pt-64">
      <div className="container-main container-w-xl-1202 d-xl-block d-none">
        <div className="d-flex justify-content-end px-10 py-0 position-relative">
          <div className="position-absolute" style={{ inset: '0' }}>
            <div className="why-join-left-section">
              <div className="w-full max-w-xl-568 max-w-350">
                <h2 className="fs-lg-51 fs-32 fw-600 text-color-1 lh-lg-61 lh-44 mb-24">Why join this Masterclass</h2>
                <p className="fs-14 lh-21 text-color-7 mb-lg-44">{whyJoinMasterClassData?.whyJoinDescription}</p>
                {!isEventsExpired && (
                  <button
                    onClick={() => setShowLeadModal(true)}
                    className="blue-fill-btn h-size-56 px-56 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow mr-32 d-none d-lg-inline"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
          <ul
            className={`d-flex flex-column position-relative list-unstyled why-join-card-main-wrapper`}
            style={{ gap: '190px' }}
          >
            {whyJoinMasterClassData?.whyJoinkeyFeatures?.map((item, index) => (
              <li
                key={index}
                className="bg-white reverse-shadow-6 max-w-429 p-36 rounded-28 position-sticky why-join-card"
                style={{ top: 'calc(50% - 12rem)', minHeight: '322px' }}
              >
                <div className="div">
                  {(item?.imgUrl && (
                    <Image
                      src={process.env.IMG_PATH + item?.imgUrl}
                      width={212}
                      height={137}
                      alt="img"
                      className="img-fluid rounded-16 mb-16"
                    />
                  )) || (
                    <Image
                      src={process.env.IMG_PATH + `images/master-class/buiss-tips.jpg`}
                      width={212}
                      height={137}
                      alt="img"
                      className="img-fluid rounded-16 mb-16"
                    />
                  )}
                  <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-10">{item?.title}</h3>
                  <p className="fs-14 lh-21 text-color-34 mb-0">{item?.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile view */}
      <div className="d-xl-none d-block">
        <div className="container-main container-w-xl-1202">
          <div className="w-100 max-w-568 text-xl-start text-center mx-auto">
            <h2 className="fs-lg-51 fs-32 fw-600 text-color-1 lh-lg-61 lh-44 mb-24">Why Join WsCube Masterclasses?</h2>
            <p className="fs-14 lh-21 text-color-7 mb-lg-44">{whyJoinMasterClassData?.whyJoinDescription}</p>
            {!isEventsExpired && (
              <button
                onClick={() => setShowLeadModal(true)}
                className="blue-fill-btn h-size-56 px-56 fs-18 fw-600 lh-27 rounded-12 orange-hover-shadow mr-32 d-none d-lg-inline"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex d-xl-none grid-gap-20 align-items-center overflow-auto scrollbar-hidden pt-40 pb-64 px-16">
        {whyJoinMasterClassData?.whyJoinkeyFeatures?.map((item, index) => {
          return (
            <div key={index} className="bg-white reverse-shadow-6 max-w-328 min-w-328 min-h-340 p-24 rounded-28">
              {(item?.imgUrl && (
                <Image
                  src={process.env.IMG_PATH + item?.imgUrl}
                  width={212}
                  height={137}
                  alt="img"
                  className="img-fluid rounded-16 mb-20"
                />
              )) || (
                <Image
                  src={process.env.IMG_PATH + `images/master-class/buiss-tips.jpg`}
                  width={212}
                  height={137}
                  alt="img"
                  className="img-fluid rounded-16 mb-20"
                />
              )}
              <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-12">{item?.title}</h3>
              <p className="fs-16 lh-24 text-color-34 mb-0">{item?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

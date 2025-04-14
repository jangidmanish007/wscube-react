import Image from 'next/image';
import React from 'react';

export default function CenterContact({ centerData }) {
  return (
    <>
      <section className="pt-lg-80 pt-64">
        <div className="container-main container-w-xl-1202">
          <div className="section-info text-center text-color-1 mb-64">
            <h2 className="fw-600 fs-32 lh-48 mb-12">Get in touch</h2>
            <p className="text-color-7 fs-14 lh-24 m-0">
              We’ love to hear from you. Our friendly team is always hear to chat.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-44">
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src={'/images/icons/mail-black.svg'}
                    width={24}
                    height={24}
                    className="img-fluid mr-12"
                    alt="Icon"
                  />
                  <h3 className="fs-20 fw-600 text-black mb-0">Chat to us</h3>
                </div>
                <p className="text-color-7 fs-16 lh-24 mb-3">Our friendly team is here to help.</p>
                <a href={'mailto:' + centerData?.email} className="text-color-1 fs-16 lh-24 link-hover">
                  {centerData?.email}
                </a>
              </div>
              <div className="mb-44">
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src={'/images/icons/map-pin-black.svg'}
                    width={24}
                    height={24}
                    className="img-fluid mr-12"
                    alt="Icon"
                  />
                  <h3 className="fs-20 fw-600 text-black mb-0">Office</h3>
                </div>
                <p className="text-color-7 fs-16 lh-24 mb-3">Come say hello at our {centerData?.name} office</p>
                <a className="text-color-1 fs-16 lh-24">
                  {centerData?.address}, {centerData?.name} - {centerData?.state} - India ({centerData?.pincode})
                </a>
              </div>
              <div className="mb-44">
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src={'/images/icons/phone-call-black.svg'}
                    width={24}
                    height={24}
                    className="img-fluid mr-12"
                    alt="Icon"
                  />
                  <h3 className="fs-20 fw-600 text-black mb-0">Phone</h3>
                </div>
                <p className="text-color-7 fs-16 lh-24 mb-3">Mon-Sat from 10am to 7pm</p>
                <a href={'tel:' + centerData?.phone_number} className="text-color-1 fs-16 lh-24 link-hover">
                  +91-{centerData?.phone_number}
                </a>
                {(centerData?.aleternative_phone_number && (
                  <a
                    href={'tel:' + centerData?.aleternative_phone_number}
                    className="text-color-1 fs-16 lh-24 link-hover"
                  >
                    {', +91-'}
                    {centerData?.aleternative_phone_number}
                  </a>
                )) ||
                  ''}
              </div>
            </div>
            {(centerData?.map_url && (
              <div className="col-lg-6">
                <div className="rounded-16 map-box w-100 max-w-570">
                  <iframe
                    src={centerData?.map_url}
                    // width="570"
                    height="435"
                    frameBorder="0"
                    style={{ border: '0', outline: '0' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-16 w-100"
                  ></iframe>
                </div>
              </div>
            )) ||
              ''}
            <div className="col-12">
              <div
                className="border-w border-top-0 border-start-0 border-end-0 w-100 mt-52"
                style={{ borderColor: '#D9D9D9' }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

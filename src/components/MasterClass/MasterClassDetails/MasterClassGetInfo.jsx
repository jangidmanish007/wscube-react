import Image from 'next/image';
import React from 'react';

export default function MasterClassGetInfo({ centerInfo }) {
  return (
    <section className="master-class-get-info-section position-relative">
      <div className="container-main container-w-xl-1202">
        <div className="max-w-1158 bg-white p-16 p-lg-32 p-md-30 rounded-24 mx-auto border-w-2 border-color-1 center-content-card">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-20">
              <h2 className="fw-600 fs-22 text-color-1 mb-lg-18 mb-12 mt-16 mt-lg-0">
                WsCube Tech {centerInfo?.address?.city} Center
              </h2>
              <p className="text-color-7 mb-20">
                {centerInfo?.address?.address}, {centerInfo?.address?.city} - {centerInfo?.address?.state} - India (
                {centerInfo?.address?.pincode})
              </p>
              <a href={`${centerInfo?.direction_link} `} target="_blank">
                <button className="fs-16 fw-400 text-color-1 px-3 rounded-8 h-size-48 hover-shadow-2 bg-white outline-none mb-10 mb-lg-44">
                  Get Direction
                  <Image
                    src={process.env.IMG_PATH + 'images/icons/navigation.svg'}
                    width={20}
                    height={20}
                    alt="icon"
                    className="img-fluid ms-1"
                  />
                </button>
              </a>
              <ul className="ps-0 list-unstyled pt-lg-0 pt-20">
                <li className="mb-10">
                  <Image
                    src={process.env.IMG_PATH + 'images/icons/email-gray.svg'}
                    width={18}
                    height={18}
                    alt="icon"
                    className="img-fluid mr-6"
                  />
                  <a
                    href={`mailto:${centerInfo?.enquiry_email}`}
                    className="text-color-7 text-text-decoration-none fs-14"
                  >
                    {centerInfo?.enquiry_email}
                  </a>
                </li>
                <li className="mb-10">
                  <Image
                    src={process.env.IMG_PATH + 'images/icons/call-gray.svg'}
                    width={18}
                    height={18}
                    alt="icon"
                    className="img-fluid mr-6"
                  />
                  <div className="d-inline-block">
                    {centerInfo?.enquiry_number?.includes(',')
                      ? centerInfo.enquiry_number.split(',').map((number, index) => (
                          <a
                            key={index}
                            href={`tel:${number}`}
                            className="text-color-7 text-text-decoration-none fs-14"
                          >
                            <span>
                              {index > 0 && ', '}
                              +91-{number.trim()}
                            </span>
                          </a>
                        ))
                      : `+91-${centerInfo?.enquiry_number}`}
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="rounded-16 map-box w-100 max-w-lg-570 max-w-md-610" style={{ marginBottom: '-2px' }}>
                <iframe
                  src={centerInfo?.map_url}
                  // width="570"
                  height="265"
                  frameBorder="0"
                  style={{ border: '0', outline: '0' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-16 w-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import ViewCertificateModal from '@/components/Modals/ViewCertificateModal';
import moment from 'moment';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';

export default function AwardsAndCertificate({ awardsAndCertificateData }) {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateImage, setCertificateImage] = useState('');
  const slidesToShow = 3;
  const isEnoughItems = awardsAndCertificateData?.length > slidesToShow;

  const settings = {
    dots: (awardsAndCertificateData?.length > 3 && true) || false,
    infinite: isEnoughItems,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: (awardsAndCertificateData?.length > 3 && true) || false,
    draggable: (awardsAndCertificateData?.length > 3 && true) || false,
    swipeToSlide: (awardsAndCertificateData?.length > 3 && true) || false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          infinite: (awardsAndCertificateData?.length > 2 && true) || false,
          draggable: (awardsAndCertificateData?.length > 2 && true) || false,
          swipeToSlide: (awardsAndCertificateData?.length > 2 && true) || false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: (awardsAndCertificateData?.length > 1 && true) || false,
          draggable: true,
          swipeToSlide: true,
          dots: (awardsAndCertificateData?.length > 1 && true) || false,
          slidesToShow: 1,
        },
      },
    ],
  };

  function handleShowCertificate(image) {
    setShowCertificateModal(true);
    setCertificateImage(image);
  }

  return (
    <>
      {showCertificateModal && (
        <ViewCertificateModal
          setShowCertificateModal={setShowCertificateModal}
          showCertificateModal={showCertificateModal}
          certificateImage={certificateImage}
        />
      )}
      <section className="mb-md-150 mb-110">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-22 fw-600 lh-33 text-color-1 mb-20">Award & Certificates</h2>
            </div>
            <div className="col-12 p-0">
              <div className="slider-with-dots slick-track-start">
                <Slider {...settings}>
                  {awardsAndCertificateData?.map((item, index) => {
                    return (
                      <div className="px-14 mx-auto text-center" key={index}>
                        <div
                          className="certificate-card max-h-243 max-w-369 mx-auto rounded-12 position-relative transation-3 overflow-hidden cursor-pointer"
                          onClick={() => handleShowCertificate(item?.certificate_photo)}
                        >
                          <Image
                            src={`${process?.env.IMG_PATH}${item?.certificate_photo}`}
                            width={367}
                            height={239}
                            alt=""
                            className="w-full rounded-12 border-w border-color-29 img-fuild max-h-239 object-fit-cover"
                          />
                          <div
                            className="position-absolute h-size-80 bg-color-19 d-flex flex-column py-3 px-3 justify-content-start align-items-center rounded-b-12 certificate-card-text transation-3 "
                            // style={{ bottom: '-2px', left: '-1px', width: '100.5%' }}
                            style={{ left: '-1px', width: '100.5%' }}
                          >
                            <h3
                              title={item?.title}
                              className="fs-16 fw-400 lh-24 text-color-1 mb-1 text-start line-clamp-1 me-auto"
                              style={{ maxWidth: '100%' }}
                            >
                              {item?.title}
                            </h3>
                            {item?.issued_date && (
                              <span className="fs-lg-13 fs-12 text-color-7 mt-auto me-auto">
                                Issued on: {moment(item?.issued_date).format('DD-MM-YYYY')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

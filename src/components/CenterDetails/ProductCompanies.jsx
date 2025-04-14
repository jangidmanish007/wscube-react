import React from 'react';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../Layouts/Common/CustomArrowBtn';
import Image from 'next/image';
import { numberFormat } from '@/_helper/Common';

export default function ProductCompanies({ headingData, centerAlumniesData }) {
  const slidesToShow1 = 5;
  const isEnoughItems1 = centerAlumniesData?.length >= slidesToShow1;

  const settings1 = {
    dots: false,
    infinite: isEnoughItems1,
    slidesToShow: slidesToShow1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: (centerAlumniesData?.length >= 5 && true) || false,
    draggable: (centerAlumniesData?.length >= 5 && true) || false,
    swipeToSlide: (centerAlumniesData?.length >= 5 && true) || false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerpadding: '40px',
        },
      },
    ],
  };

  // const slidesToShow2 = 15;
  // const isEnoughItems2 = centerAlumniesData?.length >= slidesToShow2;

  // const settings2 = {
  //   dots: false,
  //   infinite: isEnoughItems2,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2900,
  //   arrows: (centerAlumniesData?.length >= 15 && true) || false,
  //   draggable: true,
  //   swipeToSlide: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 468,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //         centerpadding: '40px',
  //       },
  //     },
  //   ],
  // };

  return (
    <section className="py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="section-info text-center text-color-1 mb-64">
          <h2 className="fw-600 fs-32 lh-48 mb-12">{headingData?.heading}</h2>
          <div className="d-flex justify-content-center grid-gap-32">
            <div className="bg-color-31 rounded-12 py-8 px-12">
              <p className="fs-14 fw-400 lh-21 text-color-7 mb-1"> Jobs on LinkedIn Alone</p>
              <span className="fs-22 fw-600 lh-33 text-color-3">{numberFormat(headingData?.linkdinJobs)}+</span>
            </div>
            <div className="bg-color-31 rounded-12 py-8 px-12">
              <p className="fs-14 fw-400 lh-21 text-color-7 mb-1"> Maximum Compensation</p>
              <span className="fs-22 fw-600 lh-33 text-color-3">₹{headingData?.maximumCompenation} LPA</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="px-md-75">
              <div
                className={`custom-arrows product-companies-arrow mb-20 ${
                  centerAlumniesData.length >= 5 && 'slick-track-start'
                }`}
              >
                {/* .slice(0, 10) */}
                <Slider {...settings1} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                  {centerAlumniesData?.map((item, index) => {
                    return (
                      <div className="px-10 pb-10 text-center" key={index}>
                        <div className="border-w-2 border-color-1 bg-color-19 p-19 rounded-20 hover-shadow-4 min-h-284">
                          <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-2">{item?.name}</h3>
                          <div className="img-box mb-19 position-relative min-h-140 text-center">
                            {item?.img_url && (
                              <Image
                                src={`${process.env.IMG_PATH}${item?.img_url}`}
                                width={140}
                                height={140}
                                alt="learners img"
                                className="img-fluid max-w-140 max-h-140 w-full object-fit-cover min-h-140 rounded-20 mx-auto"
                              />
                            )}
                            <div
                              className="position-absolute bottom-0 start-50"
                              style={{ transform: 'translate(-50%)' }}
                            >
                              <span className="rounded-pill fs-11 fw-600 lh-16 bg-color-2 py-1 px-2 d-inline-block mb-8">
                                ₹{item?.salary}
                              </span>
                            </div>
                          </div>
                          <p className="fs-11 fw-600 lh-21 text-color-3 mb-1">WsCube Tech Alumni</p>
                          {item?.company_img_url && (
                            <div className="logo">
                              <Image
                                src={`${process.env.IMG_PATH}${item?.company_img_url}`}
                                width={78}
                                height={24}
                                alt="learners img"
                                className="img-fluid max-h-24 mx-auto "
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              {/* {centerAlumniesData?.length >= 10 && (
                <div
                  className={`custom-arrows product-companies-arrow mb-20 ${
                    centerAlumniesData.length > 15 && 'slick-track-start'
                  }`}
                >
                  <Slider {...settings2} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                    {centerAlumniesData?.slice(11, 50).map((item, index) => {
                      return (
                        <div className="px-10 pb-10 text-center" key={index}>
                          <div className="border-w-2 border-color-1 bg-color-19 p-19 rounded-20 hover-shadow-4 min-h-274">
                            <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-2">{item?.name}</h3>
                            <div className="img-box mb-19 position-relative">
                              {(item?.img_url && (
                                <Image
                                  src={`${process.env.IMG_PATH}/${item?.img_url}`}
                                  width={140}
                                  height={140}
                                  alt="learners img"
                                  className="img-fluid max-w-140 max-h-140 w-full object-fit-cover min-h-140 rounded-20"
                                />
                              )) || (
                                <Image
                                  src={`/images/centers/learners-img-1.webp`}
                                  width={140}
                                  height={140}
                                  alt="learners img"
                                  className="img-fluid max-w-140 max-h-140 w-full object-fit-cover min-h-140 rounded-20"
                                />
                              )}
                              <div
                                className="position-absolute bottom-0 start-50"
                                style={{ transform: 'translate(-50%)' }}
                              >
                                <span className="rounded-pill fs-11 fw-600 lh-16 bg-color-2 py-1 px-2 d-inline-block mb-8">
                                  ₹{item?.salary}
                                </span>
                              </div>
                            </div>
                            <p className="fs-11 fw-600 lh-21 text-color-3 mb-1">WsCube Tech Alumni</p>
                            {item?.company_img_url && (
                              <div className="logo">
                                <Image
                                  src={`${process.env.IMG_PATH}${item?.company_img_url}`}
                                  width={78}
                                  height={24}
                                  alt="learners img"
                                  className="img-fluid max-w-78 max-h-24 w-full"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

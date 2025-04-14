import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
// import { masterClassesData } from './homepageData/masterClassesData';
import { CustomNextArrow, CustomPrevArrow } from '@/components/Layouts/Common/CustomArrowBtn';

export default function MasterClassesCard({ masterClassData }) {
  // eslint-disable-next-line react/prop-types

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
  };

  return (
    <div className="master-classes-slider mb-0 slick-track-start custom-arrows">
      <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
        {masterClassData?.map((item, index) => {
          return (
            <div className="pr-20 pb-16" key={index}>
              {((item?.class_status == 'registration-open' || item?.class_status == 'join-now') && (
                <Link href={`/events/${item?.slug_url}`} target="_blank">
                  <div className="master-classes-card rounded-24 border-w-2 transation-2 cursor-pointer overflow-hidden position-relative">
                    {(item?.class_full_thumbnail && (
                      <Image
                        src={`${process.env.IMG_PATH}${item?.class_full_thumbnail}`}
                        width={428}
                        height={460}
                        alt="image"
                        className="img-fluid w-100 rounded-24"
                      />
                    )) || (
                      <Image
                        src={process.env.IMG_PATH + `images/mClass.webp`}
                        width={428}
                        height={460}
                        alt="image"
                        className="img-fluid w-100 rounded-24"
                      />
                    )}
                  </div>
                </Link>
              )) || (
                // <Link href={`/events/${item?.slug_url}`}>
                <div className="master-classes-card rounded-24 border-w-2 transation-2 overflow-hidden position-relative">
                  {(item?.class_full_thumbnail && (
                    <Image
                      src={`${process.env.IMG_PATH}${item?.class_full_thumbnail}`}
                      width={428}
                      height={460}
                      alt="image"
                      className="img-fluid w-100 rounded-24"
                    />
                  )) || (
                    <Image
                      src={process.env.IMG_PATH + `images/mClass.webp`}
                      width={428}
                      height={460}
                      alt="image"
                      className="img-fluid w-100 rounded-24"
                    />
                  )}
                </div>
                // </Link>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '@/components/Layouts/Common/CustomArrowBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function LiveCoursesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
  };

  const bgcolors = ['#E2F6ED', '#FFEDEA', '#FFFFD6'];

  return (
    <div className="master-classes-slider mb-0 slick-track-start custom-arrows live-courses-slider">
      <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
        {Array(4)
          .fill()
          .map((_, key) => (
            <div className="pr-20" key={key}>
              <div className="live-ccourses-card hover-shadow-4 rounded-24 border-w-2 p-lg-20 p-16 overflow-hidden position-relative">
                <div>
                  <div className="min-h-282">
                    <Image
                      src={process.env.IMG_PATH + 'images/home-images/courses-image/hacking-image.svg'}
                      alt="icon"
                      className="img-fluid mb-10"
                      width={40}
                      height={40}
                    />
                    <h3 className="text-color-1 fw-600 fs-18 mb-2">Ethical Hacking Course</h3>
                    <p
                      className="fs-14 fw-400 lh-21 text-color-10 line-clamp-2 mb-2"
                      title=" Intensive expert-led sessions providing advanced instruction in specific topics/skills."
                    >
                      Intensive expert-led sessions providing advanced instruction in specific topics/skills.
                    </p>
                    <div className="d-flex align-items-center mb-20">
                      <span className="fs-14 text-color-1 lh-21">4.3</span>
                      <span className="d-flex align-items-center fs-16 ps-2 pe-1">
                        <FontAwesomeIcon icon={faStar} className="me-1 text-color-27" width={16} />
                        <FontAwesomeIcon icon={faStar} className="me-1 text-color-27" width={16} />
                        <FontAwesomeIcon icon={faStar} className="me-1 text-color-27" width={16} />
                        <FontAwesomeIcon icon={faStar} className="me-1 text-color-27" width={16} />
                        <FontAwesomeIcon icon={faStar} className="me-1 text-color-27" width={16} />
                      </span>
                      <span className="fs-14 text-color-28 lh-21">(13,124)</span>
                    </div>
                    <ul className="p-0 list-unstyled mb-15">
                      <li className="mb-2 fs-14 text-color-10 d-flex align-items-center">
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/mentorship-icon.svg'}
                          alt="icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                        <span className="ps-2">Career Mentorship Sessions</span>
                      </li>
                      <li className="mb-2 fs-14 text-color-10 d-flex align-items-center">
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/clock-outfill-icon.svg'}
                          alt="icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                        <span className="ps-2">64 total hours</span>
                      </li>
                      <li className="mb-2 fs-14 text-color-10 d-flex align-items-center">
                        <Image
                          src={process.env.IMG_PATH + 'images/icons/calendar-outfill-icon.svg'}
                          alt="icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                        <span className="ps-2">Thu, Oct 31 - 1:48 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <button className="outline-none fs-14 hover-shadow-2 bg-color-3 fw-600 text-white border-w-2 rounded-12 h-size-40 px-16 w-100 mr-12">
                      Book Demo Now
                    </button>
                    <button className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 h-size-40 px-16 w-100 ml-12">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

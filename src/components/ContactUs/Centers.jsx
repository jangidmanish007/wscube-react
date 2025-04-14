'use client';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import HompageLead from '../HomePage/HompageLead';
import { useState } from 'react';

export default function Centers({ centers }) {
  const [frnchId, setFrnchId] = useState('');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadHeading, setLeadHeading] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [categorySlug, setCategorySlug] = useState('');

  const jaipurCenterImage = [
    { id: 3, image: 'images/centers/campus-gallery-img-3.webp' },
    { id: 4, image: 'images/centers/campus-gallery-img-4.webp' },
    { id: 5, image: 'images/centers/campus-gallery-img-5.webp' },
    { id: 7, image: 'images/centers/campus-gallery-img-7.webp' },
  ];

  const jodhpurCenterImages = [
    { id: 1, image: 'images/centers/campus-gallary-img-1.webp' },
    { id: 2, image: 'images/centers/campus-gallary-img-2.webp' },
    { id: 3, image: 'images/centers/campus-gallery-img-3.webp' },
  ];

  return (
    <>
      <HompageLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadType={'bookDemo'}
        leadNote={'Book Demo - Contact Us Page - Visit Our Career Schools'}
        frnchId={frnchId}
        leadHeading={leadHeading}
        courseSlug={courseSlug}
        setCourseSlug={setCourseSlug}
        categorySlug={categorySlug}
        setCategorySlug={setCategorySlug}
      />
      <section className="contact-skill-center pt-lg-0 pb-lg-104 py-31 pt-31 pb-31">
        <div className="container-main container-w-xl-1202">
          <div className="row cotact-center-row">
            <div className="col-12">
              <h2 className="text-white fs-20 lh-33 fw-600 mb-24">Visit Our Career Schools</h2>
            </div>
            {centers?.map((center, key) => {
              return (
                <div className="col-lg-6 mb-lg-0 mb-4" key={key}>
                  <div className="bg-white border-w-2 border-color-1 rounded-24 skill-cen-card h-100">
                    <div className="p-lg-30 p-16">
                      <div className="d-flex align-items-center mb-20">
                        <Image
                          src={
                            (center?.name === 'Jaipur' && `${process.env.IMG_PATH}images/jd-center.webp`) ||
                            `${process.env.IMG_PATH}images/jp-center.webp`
                          }
                          width={180}
                          height={123}
                          alt="icon"
                          className={'img-fluid mr-lg-32 mr-16 rounded-12'}
                        />
                        <h3 className="fs-38 lh-48 fw-700 text-color-1 mb-0">{center?.name}</h3>
                      </div>
                      <p className="fs-16 lh-26 text-color-7 mb-20">
                        {center?.address}, {center?.name} - {center?.state} - India ({center?.pincode})
                      </p>
                      <Link href={`${center?.map_link}`} target="_blank">
                        <button className="fs-16 fw-400 text-color-1 px-3 rounded-8 h-size-48 hover-shadow-2 bg-white outline-none mb-20">
                          Get Direction
                          <Image
                            src={process.env.IMG_PATH + 'images/icons/navigation.svg'}
                            width={20}
                            height={20}
                            alt="icon"
                            className="img-fluid ms-1"
                          />
                        </button>
                      </Link>
                      <div className="bg-color-19 rounded-12 p-16 p-lg-24 w-100 mb-32">
                        <ul className="ps-0 m-0 list-unstyled">
                          <li className="mb-10">
                            <Image
                              src={process.env.IMG_PATH + 'images/icons/email-gray.svg'}
                              width={20}
                              height={20}
                              alt="icon"
                              className="img-fluid me-1"
                            />
                            <a href="mailto:learner@wscubetech.com" className="text-color-7 text-text-decoration-none">
                              learner@wscubetech.com
                            </a>
                          </li>
                          <li>
                            <div className="d-flex">
                              <Image
                                src={process.env.IMG_PATH + 'images/icons/call-gray.svg'}
                                width={17}
                                height={17}
                                alt="icon"
                                className="img-fluid mr-4"
                              />
                              <div className="div">
                                <a href="tel:+91 90242-44886" className="text-color-7 text-text-decoration-none">
                                  +91 {center?.phone_number}
                                </a>
                                {center?.aleternative_phone_number && (
                                  <a href="tel:+91 92696-98122" className="text-color-7 text-text-decoration-none ms-1">
                                    , +91 <span className="text-nowrap"> {center?.aleternative_phone_number}</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-lg-start justify-content-center">
                        <button
                          onClick={() => {
                            setFrnchId(center?.crm_center_id);
                            setShowLeadModal(true);
                            setLeadHeading('Book free class');
                          }}
                          className="fs-14 text-white fw-600 bg-color-3 reverse-shadow-2 px-lg-3 px-md-20 px-12 h-size-lg-40 h-size-md-48 h-size-40 rounded-12 outline-none border-w-2 border-color-1"
                        >
                          Book free class
                        </button>
                        <Link href={`/${center?.slug_url}`}>
                          <button className="fs-14 text-color-1 bg-white fw-600 hover-shadow-2 ms-3 px-lg-3 px-md-20 px-12 h-size-lg-40 h-size-md-48 h-size-40 rounded-12 outline-none border-w-2 border-color-1 ms-lg-4">
                            Explore Courses
                          </button>
                        </Link>
                      </div>
                    </div>
                    {(key == 1 && (
                      <div className="d-none d-lg-block mb-30">
                        <Marquee pauseOnHover autoFill speed={30}>
                          {jaipurCenterImage.map((item, index) => (
                            <div className="mr-12" key={index}>
                              <Image
                                src={`${process.env.IMG_PATH}${item?.image}`}
                                width={160}
                                height={100}
                                alt="Image"
                                className={'img-fluid rounded-12 max-h-120 min-h-120 object-fit-cover'}
                              />
                            </div>
                          ))}
                        </Marquee>
                      </div>
                    )) || (
                      <div className="d-none d-lg-block mb-30">
                        <Marquee pauseOnHover autoFill speed={30}>
                          {jodhpurCenterImages.map((item, index) => (
                            <div className="mr-12" key={index}>
                              <Image
                                src={`${process.env.IMG_PATH}${item?.image}`}
                                width={160}
                                height={100}
                                alt="Image"
                                className={'img-fluid rounded-12 max-h-120 min-h-120 object-fit-cover'}
                              />
                            </div>
                          ))}
                        </Marquee>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

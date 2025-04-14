import React, { useState } from 'react';
import Image from 'next/image';
import { syllabusAllData, syllabusData } from './Course-syllabus-content';
import { Accordion, AccordionBody, AccordionHeader } from 'react-bootstrap';

export default function CourseSyllabus(props) {
  const { openScheduleModal } = props;
  const [isShowAllSylabus, setIsShowAllSylabus] = useState(false);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? 'rotate-180' : ''} w-size-20 h-size-20 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <div className="container-main container-w-xl-1092">
      <div className="d-lg-flex grid-gap-8 mb-lg-60 mb-40">
        <div className="w-full max-w-lg-700 mb-lg-0 mb-24">
          <div className="section-heading">
            <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Here’s what you’ll learn in the program</h2>
            <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">
              Upskill your career with a curriculum that will prepare you for real-world challenges, ensuring you're
              job-ready from day one.
            </p>
          </div>
        </div>
        <div className="w-full max-w-lg-350 text-lg-end text-center">
          <button
            className="bg-grident-color-4 rounded-8 w-full max-w-187 min-h-41 fs-14 fw-600 text-white download-curiculm-btn"
            onClick={() => openScheduleModal('Download_Curriculum')}
          >
            Download Curriculum
          </button>
        </div>
      </div>
      <ul className="course-short-info-list d-flex flex-wrap list-unstyled fs-14 lh-16 fw-400 text-color-36 opacity-75 mb-20">
        <li className="position-relative pl-17 mb-lg-0 mb-12">16 Module</li>
        <li className="position-relative pl-17 mb-lg-0 mb-12">99 Live Classes</li>
        <li className="position-relative pl-17 mb-lg-0 mb-12">14 Projects</li>
        <li className="position-relative pl-17 mb-lg-0 mb-12">18 Assessments</li>
        <li className="position-relative pl-17 mb-lg-0 mb-12">15 Case Studies</li>
      </ul>
      {syllabusData?.length > 0 && (
        <div className="mb-96">
          <div className="courses-accordion-wrapper position-relative mb-20">
            {syllabusData?.map((item, index) => {
              return (
                <div className="d-flex w-full grid-gap-12 mb-12" key={index}>
                  <div className="w-full max-w-209 d-lg-inline-block d-none">
                    <div
                      className={`accordion-module-count cursor-pointer text-color-33 fs-16 fw-600 flex align-items-center py-lg-24 py-16 px-lg-28 px-16 rounded-8`}
                      style={{ border: `${(open === item.id && '1px solid #66CFFF80') || '1px solid transparent'}` }}
                      onClick={() => handleOpen(item.id)}
                    >
                      <Icon id={item.id} open={open} />
                      <span className="ml-12">Module {item?.id}</span>
                    </div>
                  </div>
                  <div className="w-full max-w-836 h-full">
                    <div className="rounded-8 accordion-right-side" style={{ border: '1px solid #66CFFF80' }}>
                      <div>
                        <div onClick={() => handleOpen(item.id)} className="py-lg-24 py-16 px-lg-28 px-16">
                          <div className="d-flex justify-content-between w-full">
                            <div className="d-lg-flex w-full justify-content-between align-items-center">
                              <h3 className="text-color-33 fs-16 fw-600 mr-lg-12 mb-lg-0 mb-12 max-w-lg-324">
                                <span className="d-lg-none d-inline-block mr-4">{item?.id}.</span> {item?.question}
                              </h3>
                              <ul className="list-unstyled d-flex flex-wrap fs-12 fw-500 text-color-33 ms-auto mb-0">
                                {item?.syllabus_info.map((stllabus, childIndex) => {
                                  return (
                                    <li
                                      className="rounded-16 py-6 px-12 mr-4 mb-1"
                                      style={{ background: '#FFFFFF1A' }}
                                      key={childIndex}
                                    >
                                      {stllabus?.name}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="d-lg-none d-flex justify-content-end">
                              <Icon id={1} open={open} />
                            </div>
                          </div>
                        </div>
                        <div
                          className={`px-lg-28 px-16 custom-accordion-body  ${
                            (open === item.id && 'body-collapsed pb-lg-24 pb-16 pt-2') || 'max-h-0'
                          }`}
                        >
                          <div className="d-grid grid-lg-cols-2 grid-cols-1 courses-syllabus-topic-wrapper mb-20">
                            {item?.about_course?.length > 0 && (
                              <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                {item?.about_course?.map((list, childIndex2) => {
                                  return (
                                    <li className="mb-2" key={childIndex2}>
                                      {list?.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            {item?.about_course_2?.length > 0 && (
                              <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                {item?.about_course_2?.map((list, childIndex3) => {
                                  return (
                                    <li className="mb-2" key={childIndex3}>
                                      {list?.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                          {(item?.sponsor_by?.image || item?.assignment?.image) && (
                            <div className="sponsored-by d-grid grid-lg-cols-3 grid-md-cols-2 grid-cols-1 grid-gap-20 mb-20">
                              {item?.sponsor_by?.image && (
                                <div
                                  className="p-lg-16 p-12 rounded-8 w-full d-flex align-items-center justify-content-center"
                                  style={{ border: '1px solid #66CFFF80', background: '#FFFFFF1A' }}
                                >
                                  <span className="mr-12 fs-14 fw-500 text-color-33 opacity-75 text-nowrap">
                                    Case study
                                  </span>
                                  <Image
                                    src={process.env.LANDING_IMG_PATH + item?.sponsor_by?.image}
                                    width={106}
                                    height={67}
                                    className="w-auto max-w-130  rounded-8"
                                    alt=""
                                  />
                                </div>
                              )}
                              {item?.assignment?.image && (
                                <div
                                  className="p-lg-16 p-12 rounded-8 w-full d-flex align-items-center justify-content-center"
                                  style={{ border: '1px solid #66CFFF80', background: '#FFFFFF1A' }}
                                >
                                  <span className="me-3 fs-14 fw-500 text-color-33 opacity-70">Assignment</span>
                                  <Image
                                    src={process.env.LANDING_IMG_PATH + item?.assignment.image}
                                    width={106}
                                    height={67}
                                    className="max-w-130 w-auto h-auto bg-white rounded-8"
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          )}
                          {(item?.outcome_info || item?.project_info) && (
                            <div
                              className="d-md-flex justify-content-between gap-12 p-16 rounded-8"
                              style={{ border: '1px solid #66CFFF80', background: '#FFFFFF1A' }}
                            >
                              {item?.project_info && (
                                <div className="max-w-lg-244 w-full mb-lg-0 mb-24">
                                  <ul className="left-content list-unstyled">
                                    <li className="text-color-33 fs-14 fw-400 opacity-75 mb-20">Project</li>
                                    <li className="text-color-33 fs-14 fw-700 mb-12">{item?.project_info?.name}</li>
                                    {item?.project_info?.image && (
                                      <li>
                                        <Image
                                          src={process.env.LANDING_IMG_PATH + item?.project_info?.image}
                                          width={168}
                                          height={78}
                                          alt=""
                                          className="w-auto h-auto"
                                        />
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              )}
                              {item?.outcome_info && (
                                <div className="max-w-lg-489 w-full">
                                  <ul className="right-content list-unstyled mb-0">
                                    <li className="text-color-33 fs-14 fw-400 opacity-75 mb-20">Outcome</li>
                                    <li className="text-color-33 fs-14 fw-700 mb-12">{item?.outcome_info?.name}</li>
                                    <li>
                                      <div className="d-grid grid-lg-cols-2 grid-cols-1 gap-3">
                                        <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                          {item?.outcome_info?.outcome_list_1?.map((list1, childIndex5) => {
                                            return (
                                              <li className="mb-2" key={childIndex5}>
                                                {list1?.title}
                                              </li>
                                            );
                                          })}
                                        </ul>
                                        <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                          {item?.outcome_info?.outcome_list_2.map((list2, childIndex6) => {
                                            return (
                                              <li className="mb-2" key={childIndex6}>
                                                {list2?.title}
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className={`overflow-hidden custom-accordion-body ${
                (isShowAllSylabus && 'new-accordion-collapsed') || ''
              }`}
            >
              {syllabusAllData?.map((item, index) => {
                return (
                  <div className="d-flex w-full grid-gap-12 mb-12" key={index}>
                    <div className="w-full max-w-209 d-lg-inline-block d-none">
                      <div
                        className={`accordion-module-count cursor-pointer text-color-33 fs-16 fw-600 flex align-items-center py-lg-24 py-16 px-lg-28 px-16 rounded-8`}
                        style={{ border: `${(open === item.id && '1px solid #66CFFF80') || '1px solid transparent'}` }}
                        onClick={() => handleOpen(item.id)}
                      >
                        <Icon id={item.id} open={open} />
                        <span className="ml-12">Module {item?.id}</span>
                      </div>
                    </div>
                    <div className="w-full max-w-836 h-full">
                      <div className="rounded-8 accordion-right-side" style={{ border: '1px solid #66CFFF80' }}>
                        <div>
                          <div onClick={() => handleOpen(item.id)} className="py-lg-24 py-16 px-lg-28 px-16">
                            <div className="d-flex justify-content-between w-full">
                              <div className="d-lg-flex w-full justify-content-between align-items-center">
                                <h3 className="text-color-33 fs-16 fw-600 mr-lg-12 mb-lg-0 mb-12 max-w-lg-324">
                                  <span className="d-lg-none d-inline-block mr-4">{item?.id}.</span> {item?.question}
                                </h3>
                                <ul className="list-unstyled d-flex flex-wrap fs-12 fw-500 text-color-33 ms-auto mb-0">
                                  {item?.syllabus_info.map((stllabus, childIndex) => {
                                    return (
                                      <li
                                        className="rounded-16 py-6 px-12 mr-4 mb-1"
                                        style={{ background: '#FFFFFF1A' }}
                                        key={childIndex}
                                      >
                                        {stllabus?.name}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                              <div className="d-lg-none d-flex justify-content-end">
                                <Icon id={1} open={open} />
                              </div>
                            </div>
                          </div>
                          <div
                            className={`px-lg-28 px-16 custom-accordion-body  ${
                              (open === item.id && 'body-collapsed pb-lg-24 pb-16 pt-2') || 'max-h-0'
                            }`}
                          >
                            <div className="d-grid grid-lg-cols-2 grid-cols-1 courses-syllabus-topic-wrapper mb-20">
                              {item?.about_course?.length > 0 && (
                                <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                  {item?.about_course?.map((list, childIndex2) => {
                                    return (
                                      <li className="mb-2" key={childIndex2}>
                                        {list?.title}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                              {item?.about_course_2?.length > 0 && (
                                <ul className="fs-14 fw-400 text-color-33 pl-16" style={{ listStyle: 'disc' }}>
                                  {item?.about_course_2?.map((list, childIndex3) => {
                                    return (
                                      <li className="mb-2" key={childIndex3}>
                                        {list?.title}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                            {(item?.sponsor_by?.image || item?.assignment?.image) && (
                              <div className="sponsored-by d-grid grid-lg-cols-3 grid-md-cols-2 grid-cols-1 grid-gap-20 mb-20">
                                {item?.sponsor_by?.image && (
                                  <div className="bg-[#FFFFFF1A] border border-[#66CFFF80] p-lg-16 p-12 rounded-8 w-full d-flex align-items-center justify-content-center">
                                    <span className="mr-12 fs-14 fw-500 text-color-33 opacity-75 text-nowrap">
                                      Case study
                                    </span>
                                    <Image
                                      src={process.env.LANDING_IMG_PATH + item?.sponsor_by?.image}
                                      width={106}
                                      height={67}
                                      className="w-auto max-w-130  rounded-8"
                                      alt=""
                                    />
                                  </div>
                                )}
                                {item?.assignment?.image && (
                                  <div className="bg-[#FFFFFF1A] border border-[#66CFFF80] p-lg-16 p-12 rounded-8 w-full d-flex align-items-center justify-content-center">
                                    <span className="me-3 fs-14 fw-500 text-color-33 opacity-70">Assignment</span>
                                    <Image
                                      src={process.env.LANDING_IMG_PATH + item?.assignment.image}
                                      width={106}
                                      height={67}
                                      className="max-w-130 w-auto h-auto bg-white rounded-8"
                                      alt=""
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                            {(item?.outcome_info || item?.project_info) && (
                              <div
                                className="d-md-flex justify-content-between gap-12 p-16 rounded-8"
                                style={{ border: '1px solid #66CFFF80', background: '#FFFFFF1A' }}
                              >
                                {item?.project_info && (
                                  <div className="max-w-lg-244 w-full mb-lg-0 mb-24">
                                    <ul className="left-content list-unstyled">
                                      <li className="text-color-33 fs-14 fw-400 opacity-75 mb-20">Project</li>
                                      <li className="text-color-33 fs-14 fw-700 mb-12">{item?.project_info?.name}</li>
                                      {item?.project_info?.image && (
                                        <li>
                                          <Image
                                            src={process.env.LANDING_IMG_PATH + item?.project_info?.image}
                                            width={168}
                                            height={78}
                                            alt=""
                                            className="w-auto h-auto"
                                          />
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                )}
                                {item?.outcome_info && (
                                  <div className="max-w-lg-489 w-full">
                                    <ul className="right-content list-unstyled mb-0">
                                      <li className="text-color-33 fs-14 fw-400 opacity-75 mb-20">Outcome</li>
                                      <li className="text-color-33 fs-14 fw-700 mb-12">{item?.outcome_info?.name}</li>
                                      <li>
                                        <div className="d-grid grid-lg-cols-2 grid-cols-1 gap-3">
                                          <ul
                                            className="fs-14 fw-400 text-color-33 pl-16"
                                            style={{ listStyle: 'disc' }}
                                          >
                                            {item?.outcome_info?.outcome_list_1?.map((list1, childIndex5) => {
                                              return (
                                                <li className="mb-2" key={childIndex5}>
                                                  {list1?.title}
                                                </li>
                                              );
                                            })}
                                          </ul>
                                          <ul
                                            className="fs-14 fw-400 text-color-33 pl-16"
                                            style={{ listStyle: 'disc' }}
                                          >
                                            {item?.outcome_info?.outcome_list_2.map((list2, childIndex6) => {
                                              return (
                                                <li className="mb-2" key={childIndex6}>
                                                  {list2?.title}
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-[-10px] left-0 w-full h-[50px] bg-grident-color-12"></div>
          </div>
          {(!isShowAllSylabus && (
            <div className="w-full text-center">
              <button
                className="py-12 px-20 rounded-8 text-color-33 fs-14 fw-500 custom-white-outline-btn"
                onClick={() => setIsShowAllSylabus(true)}
              >
                See all path syllabus
              </button>
            </div>
          )) || (
            <div className="w-full text-center">
              <button
                className="rounded-8 w-full max-w-187 min-h-41 fs-14 fw-600 text-color-2 download-curiculm-btn"
                onClick={() => openScheduleModal('Download_Curriculum')}
              >
                Download Curriculum
              </button>
            </div>
          )}
        </div>
      )}

      <div className="w-full text-center">
        <button
          className="rounded-12 px-12 w-full max-w-lg-410 max-w-250 min-h-62 text-color-26 fs-lg-18 fs-16 fw-600 text-color-2 book-demo-btn"
          onClick={() => openScheduleModal('Schedule_Demo')}
        >
          Book Demo Now
        </button>
      </div>
    </div>
  );
}

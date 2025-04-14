'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function Curriculum({ curriculum, dataCourseSlug }) {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const fullContent = (curriculum?.length <= 6 && true) || false;
  const [showFullContent, setShowFullContent] = useState(fullContent);

  const handleSeeAllClick = () => {
    setShowFullContent(true); // Update state to show full content
    setDisplayedItemCount(curriculum.length); // Optional callback to parent component
  };
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (key) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === key ? null : key));
  };

  return (
    <div className="mb-lg-60 mb-40 syllabus-curriculum-accordion">
      <Accordion defaultActiveKey={0} className="mb-40">
        {curriculum?.slice(0, displayedItemCount).map((module, key) => {
          return (
            <Accordion.Item
              eventKey={key}
              className={`rounded-24 mb-lg-28 mb-22 ${(activeItem == key && 'active-item') || ''}`}
              key={key}
            >
              <Accordion.Header as="span" onClick={() => handleItemClick(key)} className="rounded-24">
                <div className="d-lg-flex align-items-center justify-content-between w-full">
                  <h3 className="pe-2 fs-16 fw-lg-600 fw-400 lh-24 text-color-1 mb-lg-0 mb-1">
                    <span className="mr-12 text-color-28 d-lg-inline-block d-none"> Module {key + 1}</span>
                    <span className="text-color-28 d-lg-none d-inline-block mr-5"> {key + 1}.</span>
                    {module?.module_name}
                  </h3>
                  <ul className="d-flex align-items-center list-unstyled syllabus-info-list mb-0 mr-10 flex-wrap max-w-xl-469 max-w-lg-300">
                    {module?.live_classes_count != 0 && module?.live_classes_count != null && (
                      <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                        <div
                          className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-blue-bg`}
                        >
                          {module?.live_classes_count}
                        </div>
                        Live Classes
                      </li>
                    )}
                    {module?.project_count != 0 && module?.project_count != null && (
                      <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                        <div
                          className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-orange-bg`}
                        >
                          {module?.project_count}
                        </div>
                        Projects
                      </li>
                    )}
                    {module?.case_study_count != 0 && module?.case_study_count != null && (
                      <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                        <div
                          className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-green-bg`}
                        >
                          {module?.case_study_count}
                        </div>
                        Case Study
                      </li>
                    )}
                    {module?.assignment_count != 0 && module?.assignment_count != null && (
                      <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                        <div
                          className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-sky-bg`}
                        >
                          {module?.assignment_count}
                        </div>
                        Assignment
                      </li>
                    )}
                  </ul>
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-28 pb-28 pt-0 section-subtitle mb-0 fw-400 fs-lg-16 fs-14 lh-lg-24 lh-21 faq-body">
                <ul className="about-syllabus-list d-flex flex-wrap fs-16 fw-400 text-color-1 mb-32 pl-26">
                  {module?.module_content?.map((content, contentKey) => {
                    return (
                      <li
                        className="max-w-xl-449 max-w-lg-400 max-w-md-200 w-full mr-xl-32 mr-10 lh-28 mb-1 text-color-1"
                        key={`content_${contentKey}`}
                      >
                        {parse(content)}
                      </li>
                    );
                  })}
                </ul>
                {dataCourseSlug && (
                  <>
                    {module?.CourseMasterCurriculumCaseStudies &&
                      module?.CourseMasterCurriculumCaseStudies?.length > 0 && (
                        <>
                          <div className="w-full border-w border-bottom-0"></div>
                          <div className="case-study-wrapper py-32 px-8">
                            <span className="d-block mb-16 fs-16 fw-400 lh-24 text-color-10">Case Studies on</span>
                            <div className="case-companyies d-flex align-items-center">
                              {module?.CourseMasterCurriculumCaseStudies?.map((study, studyKey) => {
                                return (
                                  <div className="img-box mr-10" key={`study_${studyKey}`}>
                                    <Image
                                      src={`${process.env.IMG_PATH}${study?.case_img_url}`}
                                      width={129}
                                      height={38}
                                      alt={study?.case_name}
                                      className="max-w-129 h-auto"
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    {module?.CourseMasterCurriculumProjects && module?.CourseMasterCurriculumProjects?.length > 0 && (
                      <>
                        <div className="w-full border-w border-bottom-0"></div>
                        <div className="projects-wrapper pt-32 px-8">
                          <span className="d-block mb-16 fs-16 fw-400 lh-24 text-color-10">Project</span>
                          {module?.CourseMasterCurriculumProjects?.map((project, projectKey) => {
                            return (
                              <div className="d-md-flex grid-gap-60" key={`project_${projectKey}`}>
                                <div className="img-box mr-10 min-w-220 mb-md-0 mb-16">
                                  <span className="fs-16 fw-400 lh-24 text-color-1 d-block mb-12">
                                    {project?.project_name}
                                  </span>
                                  <Image
                                    src={`${process.env.IMG_PATH}${project?.project_img_url}`}
                                    width={157}
                                    height={46}
                                    alt={project?.project_name}
                                    className="max-w-157 h-auto"
                                  />
                                </div>
                                {project?.project_description && (
                                  <div className="project-content max-w-xl-600 max-w-560">
                                    {parse(project?.project_description)}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </>
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      {!showFullContent && (
        <div className="text-center">
          <button
            className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20"
            onClick={handleSeeAllClick}
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
}

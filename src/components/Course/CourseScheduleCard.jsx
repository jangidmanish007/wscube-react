import Image from 'next/image';
import React, { useState } from 'react';
import parse from 'html-react-parser';

export default function CourseScheduleCard({ curriculum, dataCourseSlug }) {
  const [displayedItemCount, setDisplayedItemCount] = useState(6);
  const fullContent = (curriculum?.length <= 6 && true) || false;
  const [showFullContent, setShowFullContent] = useState(fullContent);

  const handleSeeAllClick = () => {
    setShowFullContent(true); // Update state to show full content
    setDisplayedItemCount(curriculum?.length); // Optional callback to parent component
  };
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (key) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === key ? null : key));
  };

  return (
    <>
      <div className="d-lg-grid d-none grid-xl-cols-3 grid-lg-cols-2 grid-cols-1 grid-gap-30 position-relative">
        {curriculum?.slice(0, displayedItemCount).map((module, key) => {
          return (
            <div className="mb-24 col-12 p-0 schedule-card-wrapper" key={key}>
              <div className="custom-card schedule-card h-full rounded-12 border-w-2 border-color-1 hover-shadow-4 position-relative">
                <div className="custom-card-body bg-white rounded-12 p-20">
                  <div className="position-absolute start-0 week-badge d-lg-block d-none">
                    <span className="fs-14 fw-600 lh-21 text-color-17 ml-20 bg-color-32 rounded-t-12 px-16 py-1">
                      Week {key + 1}
                    </span>
                  </div>
                  <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-lg-34 mb-20"> {module?.module_name}</h3>
                  <ul className="pl-20 fs-14 fw-400 lh-28 mb-16">
                    {module?.module_content?.map((content, contentKey) => {
                      return <li key={`content_${contentKey}`}> {parse(content)} </li>;
                    })}
                  </ul>
                </div>
                <div className="bg-white border-0 p-0 rounded-0 rounded-b-12 schededule-card-footer">
                  {module?.CourseMasterCurriculumCaseStudies &&
                    module?.CourseMasterCurriculumCaseStudies?.length > 0 && (
                      <div className="py-16 px-20 case-studies">
                        <span className="d-block mb-8 fs-14 fw-400 lh-21 text-color-7">Case studies on</span>
                        {module?.CourseMasterCurriculumCaseStudies?.map((study, studyKey) => {
                          return (
                            <div className="img-box" key={`study_${studyKey}`}>
                              <Image
                                src={`${process.env.IMG_PATH}${study?.case_img_url}`}
                                width={101}
                                height={30}
                                className="img-fluid"
                                alt={study?.case_name}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  {module?.CourseMasterCurriculumProjects && module?.CourseMasterCurriculumProjects?.length > 0 && (
                    <div className="py-16 px-20 border-top">
                      <span className="d-block mb-8 fs-114 fw-400 lh-21 text-color-7">Working on these projects</span>
                      <div className="d-flex gap-20 align-items-centers">
                        {module?.CourseMasterCurriculumProjects?.map((project, projectKey) => {
                          return (
                            <div className="img-box mr-10 min-w-90 mb-md-0 mb-6" key={`project_${projectKey}`}>
                              <Image
                                src={`${process.env.IMG_PATH}${project?.project_img_url}`}
                                width={157}
                                height={46}
                                alt={project?.project_name}
                                className="w-100 h-auto min-h-40 max-w-140"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {!showFullContent && (
          <div className="position-absolute bottom-0 start-0 w-full h-full max-h-256 syllabus-bottom-grident"></div>
        )}
      </div>
      <div className="p-0 d-flex grid-gap-16 overflow-auto flex-nowrap d-lg-none mb-36 scrollbar-hidden">
        {curriculum?.slice(0, displayedItemCount).map((module, key) => {
          const isLastCard = key === displayedItemCount - 1 && displayedItemCount < curriculum.length;
          return (
            <div className="mb-6 mt-32 max-w-316 min-w-316 w-full">
              <div className="custom-card schedule-card h-full rounded-12 border-w-2 border-color-1 hover-shadow-4 position-relative">
                <div className="custom-card-body bg-white rounded-12  p-16">
                  {!isLastCard && (
                    <div className="position-absolute start-0 week-badge">
                      <span className="fs-14 fw-600 lh-21 text-color-17 ml-20 bg-color-32 rounded-t-12 px-16 py-1">
                        Week {key + 1}
                      </span>
                    </div>
                  )}
                  <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-lg-34 mb-20"> {module?.module_name}</h3>
                  <ul className="pl-20 fs-14 fw-400 lh-28 mb-16">
                    {module?.module_content?.map((content, contentKey) => {
                      return <li key={`content_${contentKey}`}> {parse(content)} </li>;
                    })}
                  </ul>
                </div>
                <div className="bg-white border-0 p-0 rounded-0 rounded-b-12 schededule-card-footer">
                  {module?.CourseMasterCurriculumCaseStudies &&
                    module?.CourseMasterCurriculumCaseStudies?.length > 0 && (
                      <div className="py-16 px-20 case-studies">
                        <span className="d-block mb-8 fs-14 fw-400 lh-21 text-color-7">Case studies on</span>
                        {module?.CourseMasterCurriculumCaseStudies?.map((study, studyKey) => {
                          return (
                            <div className="img-box" key={`study_${studyKey}`}>
                              <Image
                                src={`${process.env.IMG_PATH}${study?.case_img_url}`}
                                width={101}
                                height={30}
                                className="img-fluid"
                                alt={study?.case_name}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  {module?.CourseMasterCurriculumProjects && module?.CourseMasterCurriculumProjects?.length > 0 && (
                    <div className="py-16 px-20 border-top">
                      <span className="d-block mb-8 fs-114 fw-400 lh-21 text-color-7">Weekly Project</span>
                      <div className="d-flex gap-20 align-items-centers">
                        {module?.CourseMasterCurriculumProjects?.map((project, projectKey) => {
                          return (
                            <div className="img-box mr-10 min-w-90 mb-md-0 mb-6" key={`project_${projectKey}`}>
                              <Image
                                src={`${process.env.IMG_PATH}${project?.project_img_url}`}
                                width={157}
                                height={46}
                                alt={project?.project_name}
                                className="w-100 h-auto min-h-40 max-w-140"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                {isLastCard && !showFullContent && (
                  <div className="position-absolute top-0 left-0 last-card-layer w-full h-full rounded-12 d-lg-none d-block">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <button
                        className="outline-none fs-14 reverse-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20 see-all-btn"
                        onClick={handleSeeAllClick}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!showFullContent && (
        <div className="text-center d-lg-block d-none">
          <button
            className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20"
            onClick={handleSeeAllClick}
          >
            View more
          </button>
        </div>
      )}
    </>
  );
}

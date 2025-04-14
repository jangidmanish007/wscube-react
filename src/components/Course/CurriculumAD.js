'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function CurriculumAD({ curriculum, dmCourseSlug }) {
  const curriculumData = [
    {
      module_name: 'Stepping into Flutter & Dart',
      // module_icon: '/images/dm-icons/excel-logo.svg',
      module_description:
        'This milestone offers a complete journey from setting up Flutter and Dart environments to mastering the programming fundamentals needed for mobile app development. It equips you with the essential skills and insights to build scalable, high-performance applications right from the start.',
      live_classes_count: 6,
      project_count: 3,
      cheat_sheet_count: 2,
      notes_count: 2,
      video_session: 7,
      duration: '2 weeks',
      module_content: [
        {
          week_count: 1,
          content_title: 'Flutter Setup & Dart Fundamentals',
          content_list: [
            'Flutter Environment Setup',
            'Platform-Specific Essentials',
            'Device Configuration & Virtual Setup',
            'Programming Fundamentals',
            'Functions & Parameters',
            'Control Flow & Loops'
          ],
          project: [{ title: 'Multifaceted Programming Challenges' }]
        },
        {
          week_count: 2,
          content_title: 'Handshaking with Dart',
          content_list: [
            'Data Collections Overview',
            'Lists, Maps, and Sets Mastery',
            'Managing Complex Data Structures',
            'Core Object-Oriented Programming Concepts',
            'Advanced OOP Techniques',
            'Fundamental Keywords and Identifiers',
            'High Order Functions and Callbacks'
          ],
          project: [{ title: 'Diverse Programming tasks' }, { title: 'Multidimensional Programming Problems' }]
        }
      ]
    },
    {
      module_name: 'Flutter Unveiled',
      // module_icon: '/images/dm-icons/sql-logo.svg',
      module_description:
        'This milestone delves into Flutter\'s core architecture, exploring widget lifecycles and effective navigation strategies. It provides the essential insights and techniques for crafting dynamic, responsive user interfaces, setting a solid foundation for advanced mobile app development.',
        live_classes_count: 6,
        project_count: 2,
        cheat_sheet_count: 2,
        notes_count: 2,
        video_session: 19,
        duration: '2 weeks',
      module_content: [
        {
          week_count: 3,
          content_title: 'Widget Essentials & UI Firepower',
          content_list: [
            'Flutter Project Setup & Stateless Widget Introduction',
            'Exploring Flutter App Architecture & Basic Widgets',
            'Version Control with GitHub: Branches, Pulls & Rebase',
            'Mastering Layouts: Rows, Columns, Wrap & Interactive Elements',
            'Building Your First Flutter UI with Core Fundamentals',
            'State Management with Stateful Widgets & BMI App Implementation',
            'Building TIP calculator App'
          ],
          project: [{ title: 'Tip Calculator App: Smart Bill Splitting & Tipping' }]
        },
        {
          week_count: 4,
          content_title: 'Delving Deeper into Flutter',
          content_list: [
            'List & Grid Views Mastery',
            'Widget Essentials: ListTile, CircleAvatar, GridTile & Clip',
            'Layered Layouts: Stack, Positioned, Align & Card',
            'Navigation & Routing Fundamentals',
            'UI Essentials: AppBar, FAB, Tabs, Drawer & Nav',
            'Implicit, Explicit Animations & Hero',
            'Advanced Animations: Controllers, Tween, Lottie & Rive'
          ],
          project: [{ title: 'WhatsApp UI Clone: Replicating the Chat Interface' }]
        }
      ],
    },
    {
      module_name: 'Efficient Persistent Data Management in Flutter',
      // module_icon: '/images/dm-icons/power-bi-logo.svg',
      module_description:
        'This milestone focuses on robust strategies for managing persistent data in Flutter applications. It covers best practices for local storage, database integration, and offline capabilities, ensuring data integrity and an optimal user experience.',
        live_classes_count: 3,
        project_count: 1,
        cheat_sheet_count: 1,
        notes_count: 1,
        video_session: 3,
      duration: '1 week',
      module_content: [
        {
          week_count: 5,
          content_title: 'Offline Database Mastery',
          content_list: [
            'Database Fundamentals & Async Programming',
            'Shared Preferences Overview',
            'Session Management with Shared Preferences',
            'SQFLite: Adding & Fetching Data',
            'Data Modeling: fromMap & toMap',
            'SQFLite: Update & Delete Operations',
            'Local Database Authentication: Login & Signup'
          ],
          project: [{ title: 'Building Databse Rich Notes App: A Fully Functional Note-Taking Solution' }]
        }
      ],
    },
    {
      module_name: 'Flutter Excellence',
      // module_icon: '/images/dm-icons/tableau-logo.svg',
      module_description:
        'This milestone focuses on mastering advanced Flutter techniques, including effective state management and sophisticated UI styling. It also offers practical experience by guiding you through the development of a complete, production-ready expense app.',
        live_classes_count: 9,
        project_count: 3,
        cheat_sheet_count: 2,
        notes_count: 2,
        video_session: 6,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 6,
          content_title: 'Flutter State Management Demystified',
          content_list: [
            'State Management Overview',
            'Provider & MultiProvider Essentials',
            'Consumer & ContextFlow Techniques',
            'Cubit for State Management',
            'Bloc Pattern: Event & State Handling',
            'GetX State Management',
            'Comprehensive State Management Strategies'
          ],
          project: [{ title: 'Building Database Rich To-Do App: Task Management Simplified' }]
        },
        {
          week_count: 7,
          content_title: 'Styling & Customization Mastery',
          content_list: [
            'Responsive UI & MediaQuery Essentials',
            'Orientation & Layout Builders',
            'Flexible Widgets & Screen Util Alternatives',
            'Design Styles & Theme Fundamentals',
            'Global App Utilities Management',
            'Dark/Light Theme Customization with Provider'
          ],
          project: [{ title: 'Building Quiz App: Engaging & Interactive Assessments' }]
        },
        {
          week_count: 8,
          content_title: 'First Live Project: Flutter Database Essentials',
          content_list: [
            'Expense App: UI Foundation & State Management',
            'Project Foundation Setup',
            'Core UI & State Management',
            'Data Handling Techniques',
            'Persistence Strategies',
            'Charts & Analytics Integration',
            'Feature Finalization'
          ],
          project: [{ title: 'Advanced Expense Tracker: Insights with Graphs & Smart Filters' }]
        }
      ],
    },
    {
      module_name: 'Unlocking the Potential of Dynamic App Development',
      // module_icon: '/images/dm-icons/python-logo.svg',
      module_description:
        'This milestone unveils innovative approaches to dynamic app development, focusing on building adaptive, interactive user experiences. It integrates cutting-edge UI techniques and agile methodologies to empower developers in creating scalable, high-performance applications.',
        live_classes_count: 6,
        project_count: 2,
        cheat_sheet_count: 2,
        notes_count: 2,
        video_session: 10,
      duration: '2 weeks',
      module_content: [
        {
          week_count: 9,
          content_title: 'Dynamic Flutter: Enriching Apps with API',
          content_list: [
            'API Fundamentals & Integration',
            'GET/POST Requests & FutureBuilder',
            'API Handling in Flutter Apps',
            'JSON Parsing & Data Modeling',
            'News & Weather API Integration',
            'BLoC API Handling: Setup',
            'BLoC API Handling: Implementation & Error Management'
          ],
          project: [{ title: 'Advanced Wallpaper App: Search, Browse & Set with Ease' }]
        },
        {
          week_count: 10,
          content_title: 'Firebase-Enabled Flutter',
          content_list: [
            'Firebase Setup & Firestore Data Write',
            'Firestore Data Retrieval & Querying',
            'Email Auth & FCM Notifications',
            'Phone Auth via OTP',
            'Firebase Storage & Image Handling',
            'Ads Integration & Q&A Session',
            'Payment Gateway Integration'
          ],
          project: [{ title: 'Building Chat App: Real-Time Messaging with Full Features' }]
        }
      ],
    },
    {
        module_name: 'Capstone Project',
        // module_icon: '/images/dm-icons/python-logo.svg',
        module_description:
          'This capstone project provides a comprehensive opportunity to apply your skills in a real-world scenario, guiding you from initial development through to final testing and deployment. It emphasizes practical problem-solving, robust optimization, and the delivery of a polished, production-ready application.',
          live_classes_count: 6,
          project_count: 2,
          cheat_sheet_count: 2,
          notes_count: 2,
          video_session: 7,
        duration: '2 weeks',
        module_content: [
          {
            week_count: 11,
            content_title: 'Building the Capstone Project',
            content_list: [
                'Career Essentials: Resume & Interview Prep',
                'Audio Player Implementation in Flutter',
                'Video Player Implementation in Flutter',
                'Google Maps Integration: UI, Markers & Overlays',
                'Displaying User Location via GPS',
                'E-Commerce App Day 1: Setup & UI Design',
                'E-Commerce App Day 2: API Integration & Cart System'
            ],
            project: [{ title: 'Portfolio App: Showcase Your Skills & Projects' }]
          },
          {
            week_count: 12,
            content_title: 'Finalising the Capstone Project',
            content_list: [
                'User Authentication (Login & Signup)',
                'Checkout Process & App Optimization',
                'Final App Touches',
                'Playstore Deployment',
                'Appstore Deployment',
                'Web Hosting Deployment',
                'Live App Launch'
            ],
            project: [{ title: 'E-Commerce App: Shop, Browse & Purchase Easily' }]
          }
        ],
      },
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (key) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === key ? null : key));
  };

  return (
    <div className="mb-lg-60 mt-60 syllabus-curriculum-accordion">
      <Accordion defaultActiveKey={0} className="mb-40">
        {curriculumData.map((module, key) => {
          return (
            <Accordion.Item
              eventKey={key}
              className={`rounded-24 mb-60 position-relative ${
                (activeItem == key && 'active-item') || ''
              } da-curr-accordion`}
              key={key}
            >
              <div
                className="fs-16 fw-600 text-white min-w-270 h-size-48 bg-color-1 px-12 pt-1 w-max-content rounded-tl-12 rounded-tr-12 position-absolute start-0"
                style={{ zIndex: '0', top: '-33px' }}
              >
                Milestone {key + 1} - Duration: {module?.duration}
              </div>
              <Accordion.Header
                as="span"
                onClick={() => handleItemClick(key)}
                className="rounded-24 position-relative"
                style={{ zIndex: '9' }}
              >
                <div>
                  <div className="d-lg-flex align-items-center justify-content-between w-full">
                    <h3 className="pe-2 fs-16 fw-600 lh-24 text-color-1 mb-lg-0 mb-1 d-flex align-items-center">
                      <span>{module?.module_name}</span>
                      {module?.module_icon && (
                        <img src={module?.module_icon} height={36} className="img-fluid ml-12" alt="Icon" />
                      )}
                    </h3>
                    <ul className="d-flex align-items-center list-unstyled syllabus-info-list mb-0 mr-10 flex-wrap max-w-xl-520 max-w-lg-400">
                      {module?.live_classes_count != 0 && module?.live_classes_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-blue-bg`}
                          >
                            {module?.live_classes_count}
                          </div>
                          Live Sessions
                        </li>
                      )}
                      {module?.project_count != 0 && module?.project_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-orange-bg`}
                          >
                            {module?.project_count}
                          </div>
                          Projects
                        </li>
                      )}
                      {module?.cheat_sheet_count != 0 && module?.cheat_sheet_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-green-bg`}
                          >
                            {module?.cheat_sheet_count}
                          </div>
                          Cheat sheets
                        </li>
                      )}
                      {module?.notes_count != 0 && module?.notes_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-orange-bg`}
                          >
                            {module?.notes_count}
                          </div>
                          Notes
                        </li>
                      )}
                      {module?.video_session != 0 && module?.video_session != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-sky-bg`}
                          >
                            {module?.video_session}
                          </div>
                          Video Session
                        </li>
                      )}
                    </ul>
                  </div>
                  {module?.module_description && (
                    <p className="text-color-17 fs-14 lh-21 mb-0 mt-12 d-none d-lg-block">
                      {module?.module_description}
                    </p>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body className="px-lg-28 px-16 pb-28 pt-0 section-subtitle mb-0 fw-400 fs-lg-16 fs-14 lh-lg-24 lh-21 faq-body da-curr-body">
                {module?.module_description && (
                  <p className="text-color-17 fs-14 lh-21 mb-12 d-lg-none">{module?.module_description}</p>
                )}
                {module?.module_content?.length > 0 && (
                  <div className="row">
                    {module?.module_content.map((content, index) => (
                      <>
                        <div key={index} className="col-lg-4 col-md-6 mb-lg-28 mb-20 d-flex">
                          <div className="h-100 d-flex flex-column w-100">
                            <span className="ml-10 d-block min-h-30 w-max-content fs-14 fw-600 px-16 px-lg-0 text-color-17 min-w-lg-90 bg-color-32 rounded-tl-12 rounded-tr-12 d-flex justify-content-center align-items-center">
                              Module {content?.week_count}
                            </span>
                            <div className="d-flex flex-column h-100 bg-white border-w border-color-45 h-100 position-relative px-lg-20 px-16 py-16 rounded-12">
                              <h4 className="fs-16 fw-600 lh-24 mb-12">{content?.content_title}</h4>
                              <ul className="m-0 ps-4 mb-3">
                                {content?.content_list?.map((listItem, i) => (
                                  <li className="text-color-34 fs-14 lh-26 mb-lg-1" key={i}>
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                              <div className="d-flex align-items-start justify-content-between border-bottom-0 border-end-0 border-start-0 border-w border-color-45 mt-auto border-dashed">
                                {(content?.project?.length > 0 && (
                                  <div className="mt-2">
                                    <span className="text-color-1 fw-600 fs-14">Project</span>
                                    {content?.project.map((proj, i) => (
                                      <p className="m-0" key={i}>
                                        {(proj?.icon && (
                                          <Image
                                            width={70}
                                            height={70}
                                            src={proj.icon}
                                            className="img-fluid mt-2 min-h-28 max-h-28 w-auto"
                                            alt="icon"
                                          />
                                        )) || <span className="fs-13 text-color-7 fw-500">{proj?.title}</span>}
                                      </p>
                                    ))}
                                  </div>
                                )) ||
                                  ''}
                                {(content?.cs_study?.length > 0 && (
                                  <div className="mt-2">
                                    <span className="text-color-1 fw-600 fs-14">Case Study</span>
                                    {content?.cs_study.map((cs, i) => (
                                      <p className="m-0" key={i}>
                                        {(cs?.icon && (
                                          <Image
                                            width={70}
                                            height={70}
                                            src={cs.icon}
                                            className="img-fluid mt-2 min-h-28 max-h-28 w-auto"
                                            alt="icon"
                                          />
                                        )) || <span className="fs-13 text-color-7 fw-500">{cs?.title}</span>}
                                      </p>
                                    ))}
                                  </div>
                                )) ||
                                  ''}
                              </div>
                            </div>
                          </div>
                        </div>
                        {(content?.week_count === 23 && (
                          <div className="col-12 d-flex align-items-center">
                            <div className="h-100 d-flex flex-column w-100">
                              <span className="ml-10 d-block min-h-30 w-max-content fs-14 fw-600 px-16 px-lg-0 text-color-17 min-w-lg-90 bg-color-32 rounded-tl-12 rounded-tr-12 d-flex justify-content-center align-items-center">
                                Module 24
                              </span>
                              <div className="d-lg-flex justify-content-lg-between align-items-center h-100 bg-white border-w border-color-45 h-100 position-relative px-lg-20 px-16 py-16 rounded-12">
                                <div className="pr-lg-40">
                                  <h4 className="fs-lg-26 fs-20 fw-600 lh-lg-40 mb-12">Mega Capstone Project</h4>
                                  <p className="fs-14 text-color-7 fw-400 lh-22">
                                    Showcase your digital marketing expertise by applying everything you ve learned from
                                    SEO and paid campaigns to social media management and marketing automation. This
                                    real-world project lets you analyze data, craft strategies, and execute high-impact
                                    campaigns, proving your skills to potential employers.
                                  </p>
                                </div>
                                <div className="min-w-lg-350 mx-auto mx-lg-0 text-center">
                                  <Image
                                    width={350}
                                    height={346}
                                    src={'/images/dm-icons/mega-cap.svg'}
                                    className="img-fluid"
                                    alt="Image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )) ||
                          ''}
                      </>
                    ))}
                  </div>
                )}
                {/* {module?.module_projects?.length > 0 && (
                  <div className="pt-16 px-20 border-color-45 border-w rounded-12">
                    <h4 className="fs-16 fw-600 lh-24 text-color-1 mb-12">Project</h4>
                    {module?.module_projects.map((project, prI) => (
                      <div key={prI} className="d-lg-flex align-items-start mb-16">
                        <div className="min-w-lg-320 d-flex align-items-center mb-20 mb-lg-0">
                          <img src={project?.project_icon} height={76} className="img-fluid me-3" alt="Icon" />
                          <h5 className="text-color-34 fs-14 fw-600 lh-21 mb-0 max-w-144">{project?.project_title}</h5>
                        </div>
                        <p className="text-color-17 fs-14 lh-21 mb-0">{project?.project_description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {module?.session_title && (
                  <div className="py-16 px-20 border-color-45 border-w rounded-12 mt-lg-28 mt-20">
                    <h4 className="fs-16 fw-600 lh-24 text-color-1 mb-12">{module?.session_title}</h4>
                    <p className="text-color-17 fs-14 lh-21 mb-0">{module?.session_description}</p>
                  </div>
                )} */}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function CurriculumDA({ curriculum, dataCourseSlug }) {
  const daCurriculum = [
    {
      module_name: 'Get started with Excel',
      module_icon: '/images/da-icons/excel-logo.svg',
      module_description:
        "Kickstart your Data Analytics journey with Excel! From pivot tables to essential functions and from charts to dashboards learn every essential to become a Data Analyst. Excel isn't just a tool, it's your new superpower!",
      live_classes_count: 10,
      project_count: 1,
      cheat_sheet_count: 3,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 1,
          content_title: 'Overview of Excel',
          content_list: [
            'Introduction to Data Analytics',
            'Basic Features in Excel',
            'Formatting in Excel',
            'Dealing with Raw Data',
            'Functions in Excel',
          ],
        },
        {
          week_count: 2,
          content_title: 'Deep Dive with Excel - II',
          content_list: [
            'Data Connectors in Excel',
            'Cleaning in Power Query Editor',
            'Adding Conditional Columns using Power Query Editor',
            'Data Modelling and its Importance',
            'Cardinality and Filter Direction in Power Pivot',
          ],
        },
        {
          week_count: 3,
          content_title: 'Master Advanced Excel - III',
          content_list: [
            'Pivot Tables in Excel',
            'Charts in Excel',
            'Slicers in Excel',
            'Measures in Excel',
            'Creating a Dashboard in Excel',
          ],
        },
      ],
      module_projects: [
        {
          project_icon: '/images/da-icons/mac-d-logo.svg',
          project_title: "McDonald's Restaurant Sales Analysis",
          project_description:
            'As an data analyst at a McDonald, you have been tasked with Excel proficiency, develop a comprehensive dashboard. Analyze sales data to optimize staff management, identify peak days, busy hours, best selling dishes, and popular cuisines.',
        },
      ],
      session_title: 'Excel Jam Session',
      session_description:
        "In this session, you'll master Excel for data analytics interviews. Learn insider tips on using Excel effectively, tackling real world scenarios, and impressing interviewers with your data manipulation skills.",
    },
    {
      module_name: 'Programming with SQL',
      module_icon: '/images/da-icons/sql-logo.svg',
      module_description:
        'Want to retrieve, clean, manipulate and analyse the data?? Do it efficiently by using SQL queries!! This milestone covers everything from basic queries to complex joins, empowering you to extract valuable insights from large datasets with ease.',
      live_classes_count: 10,
      project_count: 1,
      cheat_sheet_count: 3,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 4,
          content_title: 'Welcome to MySQL',
          content_list: [
            'Introduction to MySQL',
            'Basic MySQL Syntax',
            'Clauses in MySQL',
            'Operators in MySQL',
            'Dealing With Null Values in MySQL',
          ],
        },
        {
          week_count: 5,
          content_title: 'Advanced SQL Queries and Functions in MySQL',
          content_list: [
            'Functions in MySQL',
            'Case Operator in MySQL',
            'Group By in MySQL',
            'Having Clause in MySQL',
            'Joins in MySQL',
          ],
        },
        {
          week_count: 6,
          content_title: 'Advanced SQL Concepts and Techniques in MySQL',
          content_list: [
            'Subqueries in MySQL',
            'Union, Intersect, Except  in MySQL',
            'Stored Procedures in MySQL',
            'Common Table Expressions(CTE)',
            'Window Functions in MySQL',
          ],
        },
      ],
      module_projects: [
        {
          project_icon: '/images/da-icons/swiggy-logo.svg',
          project_title: 'Swiggy Analysis Using SQL',
          project_description:
            'Swiggy seeks insights from its SQL dataset. Implement sophisticated SQL queries with intricate joins for in-depth analysis and strategic decision-making.',
        },
      ],
      session_title: 'SQL Jam Session',
      session_description:
        'SQL is the backbone of data analysis. Get ready to deep dive into complex queries, optimize your understanding of database management, and leave with pro tips to stand out in SQL-based interview questions.',
    },
    {
      module_name: 'Data Visualization Power BI',
      module_icon: '/images/da-icons/power-bi-logo.svg',
      module_description:
        'Empower your data journey with Python! Learn Pandas, NumPy, and Matplotlib to wield the tools of data magic. Uncover insights, visualize trends, and conquer complex datasets with flair!',
      live_classes_count: 10,
      project_count: 1,
      cheat_sheet_count: 3,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 7,
          content_title: 'Data Visualisation with Power BI',
          content_list: [
            'Introduction to Power BI',
            'Data Connectors',
            'Power Query Editor and Tools Power Query Editor',
            'Append Queries and Merge Queries',
            'Pivoting and Unpivoting of data',
          ],
        },
        {
          week_count: 8,
          content_title: 'Advanced-Data Modeling and DAX in Power BI',
          content_list: [
            'Data Modelling and Cardinality',
            'Cross Filter Direction',
            'Measures vs Calculated Columns',
            'Functions in DAX',
            'Cumulative Sales and Moving Average Using DAX',
          ],
        },
        {
          week_count: 9,
          content_title: 'Visualizations and Dashboard Creation in Power BI',
          content_list: [
            'ChatGPT for Measures',
            'Column Charts and Slicers',
            'Matrix vs Tables',
            'Cards, KPI and Gauge Chart',
            'Formatting a Dashboard',
          ],
        },
      ],
      module_projects: [
        {
          project_icon: '/images/da-icons/itc-hotel-logo.svg',
          project_title: 'ITC Hotels Revenue Analysis',
          project_description:
            'ITC aims to develop a Power BI dashboard to analyze hotel booking data across metro cities. Determine occupancy rates, average revenue per room, and RevPAR to optimize revenue strategies.',
        },
      ],
      session_title: 'Power BI Jam Session',
      session_description:
        'Visual storytelling is crucial for any data analyst. In this jam session, discover how to leverage Power BI to create impactful reports, turn data into insights, and gain a competitive edge in interviews.',
    },
    {
      module_name: 'Python & Libraries',
      module_icon: '/images/da-icons/python-logo.svg',
      module_description: `Master Python for Data Analytics! From data manipulation with Pandas to visualization with Matplotlib & Seaborn, and numerical computing with NumPy, this milestone will equip you with 
      essential coding skills to alyze, transform, and visualize data efficiently.`,
      live_classes_count: 13,
      project_count: 1,
      cheat_sheet_count: 4,
      quizzes_count: 4,
      duration: '4 weeks',
      module_content: [
        {
          week_count: 10,
          content_title: 'Python Basics',
          content_list: [
            'Introduction to Python for Data Analytics',
            'Datatypes and Variables',
            'Operators in Python',
            'Control Flow in Python',
            'Data Structures in Python',
          ],
        },
        {
          week_count: 11,
          content_title: 'Python Advance',
          content_list: [
            'Functions in Python',
            'In built Modules',
            'Pickle Library',
            'Introduction to Numpy',
            'Statistical Functions in Array',
          ],
        },
        {
          week_count: 12,
          content_title: 'Python Libraries - Pandas, Matplotlib and Seaborn',
          content_list: [
            'Introduction to Pandas',
            'Cleaning Data with Pandas',
            'Merge, concatenate and join Pandas',
            'Introduction to Matplotlib',
            'Charts in Matplotlib',
          ],
        },
        {
          week_count: 13,
          content_title: 'Python Libraries - Web scraping and Text Analysis',
          content_list: [
            'What is WebScraping',
            'BeautifulSoup and Requests Library in Pythonn',
            'Extracting Data from Tables',
            'Extracting Data from Multi Page Websites',
            'Text Analysis using Python',
          ],
        },
      ],
      module_projects: [
        {
          project_icon: '/images/da-icons/amazon-logo.svg',
          project_title: 'Amazon Sentimental Analysis',
          project_description:
            "Amazon seeks to analyze customer sentiments. As a data analyst, you're tasked with performing sentiment analysis and EDA on their data to gauge customer sentiments effectively.",
        },
      ],
      session_title: 'Stats & Python Jam Session',
      session_description:
        'Elevate your understanding of statistics and Python for data analysis interviews. From hypothesis testing to coding challenges, this session will prepare you to demonstrate your statistical and programming expertise.',
    },
    {
      module_name: 'Stats & Machine Learning',
      module_icon: '/images/da-icons/ai-ml-logo.svg',
      module_description: `Build a strong foundation in Statistics & Machine Learning! Learn probability, hypothesis testing, and inferential statistics, then advance to regression, classification, clustering,
       and AI-driven insights. Gain hands on experience applying ML algorithms to real world datasets and making data driven decisions!`,
      live_classes_count: 10,
      project_count: 1,
      cheat_sheet_count: 3,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 14,
          content_title: 'Maths & Applied Statistics',
          content_list: [
            'Introduction to Statistics',
            'Descriptive Statistics',
            'Hypothesis Testing',
            'AB Testing',
            'Fundamentals of Probability',
          ],
        },
        {
          week_count: 15,
          content_title: 'Machine Learning  - I',
          content_list: [
            'What is ML?',
            'Applications of Machine Learning',
            'Linear Regression',
            'Decision Trees',
            'Random Forests and Ensemble Methods',
          ],
        },
        {
          week_count: 16,
          content_title: 'Machine Learning  - II & AI',
          content_list: [
            'Clustering algorithms',
            'K means clustering',
            'Dimensionality Reduction',
            'Cross validation',
            'K-fold validation',
            'Leave one out validation',
            'Model selection',
            'Evaluation metrics and ROC curves',
            'AI for data analytics',
          ],
        },
      ],
      module_projects: [
        {
          project_icon: '/images/da-icons/hdfc-logo.svg',
          project_title: 'HDFC Credit Card Fraud Detection',
          project_description:
            'You are a data analyst at HDFC tasked with developing a credit card fraud detection system using machine learning to enhance transaction security and prevent fraudulent activities.',
        },
      ],
      session_title: 'ML & AI Jam Session',
      session_description:
        "Ready to dive into the future of data analytics? In this jam session, you'll explore machine learning and AI applications, and gain tips on how to shine in interviews by showcasing your ability to implement these cutting-edge technologies.",
    },
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (key) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === key ? null : key));
  };

  return (
    <div className="mb-lg-60 mt-60 syllabus-curriculum-accordion">
      <Accordion defaultActiveKey={0} className="mb-40">
        {daCurriculum.map((module, key) => {
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
                      <img src={module?.module_icon} height={36} className="img-fluid ml-12" alt="Icon" />
                    </h3>
                    <ul className="d-flex align-items-center list-unstyled syllabus-info-list mb-0 mr-10 flex-wrap max-w-xl-469 max-w-lg-350">
                      {module?.live_classes_count != 0 && module?.live_classes_count != null && (
                        <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-blue-bg`}
                          >
                            {module?.live_classes_count}
                          </div>
                          Live Sessions
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
                      {module?.cheat_sheet_count != 0 && module?.cheat_sheet_count != null && (
                        <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-green-bg`}
                          >
                            {module?.cheat_sheet_count}
                          </div>
                          Cheat sheets
                        </li>
                      )}
                      {module?.quizzes_count != 0 && module?.quizzes_count != null && (
                        <li className="px-lg-12 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-sky-bg`}
                          >
                            {module?.quizzes_count}
                          </div>
                          Quizzes
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
                      <div key={index} className="col-lg-4 col-md-6 mb-lg-28 mb-20 d-flex">
                        <div className="h-100 d-flex flex-column w-100">
                          <span className="ml-10 d-block min-h-30 w-max-content fs-14 fw-600 px-16 px-lg-0 text-color-17 min-w-lg-90 bg-color-32 rounded-tl-12 rounded-tr-12 d-flex justify-content-center align-items-center">
                            Week {content?.week_count}
                          </span>
                          <div className="bg-white border-w border-color-45 h-100 position-relative px-lg-20 px-16 py-16 rounded-12">
                            <h4 className="fs-16 fw-600 lh-24 mb-12">{content?.content_title}</h4>
                            <ul className="m-0 ps-4">
                              {content?.content_list?.map((listItem, i) => (
                                <li className="text-color-34 fs-14 lh-26 mb-lg-1" key={i}>
                                  {listItem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {module?.module_projects?.length > 0 && (
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
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

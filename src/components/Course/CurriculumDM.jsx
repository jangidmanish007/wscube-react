'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function CurriculumDM({ curriculum, dmCourseSlug }) {
  const daCurriculum = [
    {
      module_name: 'Digital Marketing, Website Planning & Creation',
      // module_icon: '/images/dm-icons/excel-logo.svg',
      module_description:
        'This milestone covers essential digital marketing strategies, audience research, and campaign execution alongside mastering website creation with WordPress. Learners will develop market insights, craft value-driven strategies, and build optimized, professional websites that align with marketing objectives.',
      live_classes_count: 9,
      project_count: 3,
      cheat_sheet_count: 3,
      case_study_count: 2,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 1,
          content_title: 'Fundamentals of Digital Marketing',
          content_list: [
            'Marketing Objectives',
            'Business and Competitive Analysis',
            'Customer Engagement',
            'Brand Development',
            'Campaign Execution',
            'Market Analysis',
          ],
          project: [{ icon: '/images/dm-icons/Jio-Hotstar.svg' }],
          cs_study: [{ icon: '/images/dm-icons/swiggy.svg' }],
        },
        {
          week_count: 2,
          content_title: 'Market Research',
          content_list: [
            'Market Understanding',
            'Buyer Persona Development',
            'Value Proposition Design',
            'Research Techniques',
            'Survey Development',
            'Digital Marketing Strategies',
          ],
          project: [{ icon: '/images/dm-icons/nayka.svg' }],
          cs_study: [{ icon: '/images/dm-icons/netflix.svg' }],
        },
        {
          week_count: 3,
          content_title: 'Website Creation',
          content_list: [
            'WordPress Basics',
            'Website Fundamentals',
            'WordPress Configuration',
            'Theme and Design Customization',
            'Content Management',
            'Advanced Features and Tools',
          ],
          project: [{ icon: '/images/dm-icons/thrive.svg' }],
          cs_study: [],
        },
      ],
      // module_projects: [
      //   {
      //     project_icon: '/images/dm-icons/mac-d-logo.svg',
      //     project_title: "McDonald's Restaurant Sales Analysis",
      //     project_description:
      //       'As an data analyst at a McDonald, you have been tasked with Excel proficiency, develop a comprehensive dashboard. Analyze sales data to optimize staff management, identify peak days, busy hours, best selling dishes, and popular cuisines.',
      //   },
      // ],
    },
    {
      module_name: 'Search Engine Optimization & Content Marketing',
      // module_icon: '/images/dm-icons/sql-logo.svg',
      module_description:
        'This milestone dives into the fundamentals of SEO, from understanding search engines and SERPs to advanced onpage, technical, and local SEO strategies. Learners will explore keyword research, content optimization, and schema markup while mastering tools and techniques to enhance site performance and visibility. It also emphasizes local SEO tactics to help businesses dominate neighborhood searches effectively.',
      live_classes_count: 18,
      project_count: 6,
      case_study_count: 4,
      cheat_sheet_count: 6,
      quizzes_count: 6,
      duration: '5 weeks',
      module_content: [
        {
          week_count: 4,
          content_title: 'Introduction to SEO',
          content_list: [
            'SEO Fundamentals',
            'Search Engines and SERPs',
            'SEO Practices and Ethics',
            'Keyword Essentials',
            'Keyword Research Techniques',
            'Advanced Keyword Analysis',
          ],
          project: [{ icon: '/images/dm-icons/mmt.svg' }, { icon: '/images/dm-icons/healthline.svg' }],
          cs_study: [{ icon: '/images/dm-icons/myntra.svg' }, { title: 'Keyword Research 1' }],
        },
        {
          week_count: 5,
          content_title: 'On Page SEO',
          content_list: [
            'On-Page SEO Basics',
            'Meta Tag Optimization',
            'Website Structure and Internal Linking',
            'Content and SEO Integration',
            'Avoiding Common SEO Mistakes',
            'Comprehensive On-Page SEO Strategies',
            'SEO Authority Factors',
            'Technical SEO Fundamental',
            'Sitemap Implementation',
            'Robots.txt and Access Control',
          ],
          project: [{ icon: '/images/dm-icons/meta.svg' }],
          cs_study: [],
        },
        {
          week_count: 6,
          content_title: 'Technical SEO',
          content_list: [
            'Link and Redirection Management',
            'Enhancing SEO with Meta Tags',
            'Security and SEO',
            'Optimizing Site Performance and Mobile Usability',
            'Advanced SEO Tools and Extensions',
            'Schema Markup: Implementation and Validation',
            'Introduction to Google Search Console',
            'Setup and Configuration of GSC',
            'Sitemap Management in GSC',
            'URL Inspection Techniques',
          ],
          project: [{ icon: '/images/dm-icons/robotstxt.svg' }],
          cs_study: [{ icon: '/images/dm-icons/myntra.svg' }, { title: 'Keyword Research 2' }],
        },
        {
          week_count: 7,
          content_title: 'Web Analytics & Monitoring',
          content_list: [
            'Overview of Google Analytics',
            'Setting Up Google Analytics',
            'Advanced Reporting in Google Analytics',
            'Introduction to Google Analytics 4',
            'SEO Performance Reporting',
            'Off-Page SEO Basics',
            'Understanding Backlinks',
            'Backlink Types and Their Impact',
            'Backlink Acquisition Strategies',
            'Content Submission Techniques',
            'Link Building Best Practices',
          ],
          project: [{ icon: '/images/dm-icons/GA4.svg' }, { icon: '/images/dm-icons/GSC.svg' }],
          cs_study: [],
        },
        {
          week_count: 8,
          content_title: 'Content Marketing',
          content_list: [
            'The Importance of Site Audits',
            'Conducting Site Audits',
            'Technical SEO Audits',
            'Introduction to Content Marketing',
            'Benefits of Content Marketing',
            'Types of Content Marketing',
            'Content Marketing Funnel: TOFU, MOFU, BOFU',
            'Audience Research and Strategy',
            'Copywriting vs. Content Writing',
            'Role of Copywriting in Marketing',
            'Effective Copywriting Techniques',
          ],
          project: [{ icon: '/images/dm-icons/seo-audit.svg' }],
          cs_study: [{ icon: '/images/dm-icons/mpnrc.svg' }],
        },
      ],
    },
    {
      module_name: 'Social Media and Influencer Marketing',
      // module_icon: '/images/dm-icons/power-bi-logo.svg',
      module_description:
        'This milestone focuses on mastering social media platforms like Facebook, LinkedIn, YouTube, and Instagram while developing effective marketing strategies. It also covers influencer marketing, including campaign planning, connecting with influencers, and leveraging paid promotions to enhance brand reach and engagement.',
      live_classes_count: 9,
      project_count: 3,
      case_study_count: 3,
      cheat_sheet_count: 3,
      quizzes_count: 3,
      duration: '3 weeks',
      module_content: [
        {
          week_count: 9,
          content_title: 'Social Media Marketing - I',
          content_list: [
            'Social Media Marketing Basics',
            'SMM Strategies and Organic Marketing',
            'Social Brand Management',
            'Audience Persona Development',
            'Facebook Marketing Essentials',
            'Utilizing Meta Business Suite',
            'YouTube Marketing Strategies',
            'Instagram Marketing and Content Planning',
          ],
          project: [{ icon: '/images/dm-icons/Nothingphone.svg' }],
          cs_study: [{ icon: '/images/dm-icons/zomato.svg' }, { icon: '/images/dm-icons/blinkit.svg' }],
        },
        {
          week_count: 10,
          content_title: 'Social Media Marketing - II',
          content_list: [
            'Introduction to LinkedIn',
            'LinkedIn Strategy Development',
            'Content Creation for LinkedIn',
            'LinkedIn Page Optimization for Businesses',
            'Twitter Marketing Techniques',
            'Marketing with Pinterest',
            'Social Media Marketing Strategy for Product Launch (B2B & B2C)',
            'Key Metrics in Social Media Marketing',
            'Utilization of Social Media Management Tools',
            'Creation of Social Media Content Calendar and Progress Reports',
          ],
          project: [{ icon: '/images/dm-icons/cred-new.svg' }],
          cs_study: [],
          // cs_study: [{ icon: '/images/dm-icons/hootsuite.svg' }, { icon: '/images/dm-icons/buffer.svg' }],
        },
        {
          week_count: 11,
          content_title: 'Influencer Marketing',
          content_list: [
            'Introduction to Influencer Marketing',
            'Benefits of Influencer Marketing for Brands',
            'Successful Influencer Marketing Campaigns',
            'Connecting with the Right Influencers',
            'Influencer Marketing Platforms',
            'Strategies for Paid Promotions, Gifts, and Giveaways',
            'Brand Ambassadors and Affiliate Programs',
            'Influencer Campaign Strategy and Setup',
          ],
          project: [{ icon: '/images/dm-icons/paisabazaar.svg' }],
          cs_study: [{ icon: '/images/dm-icons/kukufm.svg' }],
        },
      ],
    },
    {
      module_name: 'Performance Marketing',
      // module_icon: '/images/dm-icons/tableau-logo.svg',
      module_description:
        'This milestone focuses on mastering paid marketing strategies across platforms for B2B, B2C, and D2C. Learners will explore Meta Ads, Facebook Pixel, e commerce catalogs, and advanced tools for ad creation, targeting, and optimization. It also covers SEM, remarketing, and Google Ads, along with third-party advertising strategies like Disney+ Hotstar campaigns, ensuring a result-driven marketing approach.',
      live_classes_count: 21,
      project_count: 7,
      case_study_count: 7,
      cheat_sheet_count: 7,
      quizzes_count: 7,
      duration: '7 weeks',
      module_content: [
        {
          week_count: 12,
          content_title: 'Introduction to Meta Ads',
          content_list: [
            'Performance Marketing Basics',
            'Platform Types for Marketing',
            'Competitor Analysis in Marketing',
            'Platform Selection: B2B, B2C, D2C',
            'Meta Ads Introduction',
            'Facebook Page Creation and Boosting',
            'Ads Manager & Ads Library Features',
            'Campaign Structure and Objectives',
            'Budgeting, Scheduling, and Detailed Targeting',
          ],
          project: [{ title: 'Targeting Tourists for Dubai' }, { icon: '/images/dm-icons/meta.svg' }],
          cs_study: [{ icon: '/images/dm-icons/passport.svg' }],
        },
        {
          week_count: 13,
          content_title: 'Meta Ads Campaign Structure',
          content_list: [
            'Ad Placement Strategies',
            'Creating AI-Powered Ad Mockups',
            'Campaign Budget Optimization Benefits',
            'A/B Testing and Dynamic Creatives',
            'Brand Safety and Suitability Insights',
            'Setting Up Brand Awareness Campaigns',
            'Ad Placement Types: Advantage+ & Manual',
            'Facebook Engagement and Conversion Strategies',
            'Lead Generation: Ads, Forms, and Auto Chat Features',
            'Setting Up Facebook Business and Ads Manager',
            'Facebook Pixel Setup and Manual Installation',
            'Pixel Integration: GTM and Plugins',
          ],
          project: [{ icon: '/images/dm-icons/meta.svg' }, { title: 'Campaign' }],
          cs_study: [{ icon: '/images/dm-icons/royal-enf.svg' }],
        },
        {
          week_count: 14,
          content_title: 'Meta Ads Conversion Tracking',
          content_list: [
            'Live Pixel Tracking via Chrome Extension',
            'Pixel Reporting and Troubleshooting Techniques',
            'Advanced Pixel Integration through Partners',
            'Conversion API Setup with GTM',
            'Custom and Lookalike Audience Creation',
            'Utilizing Custom Conversion Audiences',
            'Understanding Catalogues and Their Types',
            'Creating E-commerce Catalogues',
            'Introduction to Collection Ads',
          ],
          project: [{ icon: '/images/dm-icons/jio-c.svg' }],
          cs_study: [{ icon: '/images/dm-icons/ajio.svg' }],
        },
        {
          week_count: 15,
          content_title: 'Meta Ads Reporting',
          content_list: [
            'Campaign Performance Analysis',
            'Optimizing Campaigns Effectively',
            'Ad Automation Techniques',
            'Rule and Creative Automation Platforms',
            'Executing Campaigns on Meta',
            'Managing Instagram Campaigns',
            'SEM Marketing Basics',
            'Google Ads: Overview and Benefits',
            'Google Ads Formats Explained',
            'Smart Campaigns Introduction',
            'Ad Objectives and Bidding Strategies',
            'Setting Up Search Ads',
            'Keywords in SEM: Importance and Types',
            'Keyword Research Tools (Google Keyword Planner)',
            'Using Negative Keywords Effectively',
            'Ad Rotation Strategies',
            'Ad Scheduling Best Practices',
          ],
          project: [{ icon: '/images/dm-icons/nitido.svg' }],
          cs_study: [{ icon: '/images/dm-icons/boat.svg' }],
        },
        {
          week_count: 16,
          content_title: 'Google Search Ads',
          content_list: [
            'Dynamic Search Ads: Settings and Case Studies',
            'Crafting Search Ad Copies with AI',
            'Ad Extensions: Sitelink, App, Call, Callout, Location, Price',
            'Display Campaigns: Setup Guide',
            'Targeting Options: Placement, Topics, Demographics',
          ],
          project: [{ icon: '/images/dm-icons/haldiram.svg' }],
          cs_study: [{ icon: '/images/dm-icons/mmt.svg' }, { title: 'Keyword Research' }],
        },
        {
          week_count: 17,
          content_title: 'Google Display & Video Ads',
          content_list: [
            'Video Campaign Goals and Subtypes',
            'Video Ads Network and Frequency Capping',
            'YouTube Ads Bid Strategies',
            'Ad Scheduling for Video Campaigns',
            'Creating Video Ad Sequences',
            'Storytelling with Video Ads',
            'Conversion Actions: Setup and Integration',
            'GTM for Conversion Tracking',
            'Using Conversion Linker Effectively',
          ],
          project: [{ icon: '/images/dm-icons/aesthetic.svg' }],
          cs_study: [{ icon: '/images/dm-icons/lodha-new.svg' }],
        },
        {
          week_count: 18,
          content_title: 'Conversion Tracking',
          content_list: [
            'Remarketing in Google Ads: Overview and Benefits',
            'Audience Manager and List Creation',
            'Linking GA4 with Google Ads',
            'Implementing Remarketing Audiences in Campaigns',
            'Shopping Ads Setup with Google Merchant Center',
            'Product Listing and Linking Merchant Center',
            'Performance Max Campaign: Setup and Advantages',
            'Demand Campaign Configuration',
          ],
          project: [{ icon: '/images/dm-icons/mi.svg' }],
          cs_study: [{ icon: '/images/dm-icons/winzo.svg' }, { icon: '/images/dm-icons/policy.svg' }],
        },
      ],
    },
    {
      module_name: 'Marketing Automation & AI',
      // module_icon: '/images/dm-icons/python-logo.svg',
      module_description:
        'This milestone focuses on leveraging automation tools and AI for efficient marketing. Learners will explore email and WhatsApp marketing strategies, Google AdSense setup, and freelancing fundamentals. It also covers creating impactful campaigns, landing pages, and content using AI tools, along with mastering workflows, analytics, and optimization for streamlined marketing success.',
      live_classes_count: 6,
      project_count: 2,
      case_study_count: 2,
      cheat_sheet_count: 2,
      quizzes_count: 2,
      duration: '2 weeks',
      module_content: [
        {
          week_count: 19,
          content_title: 'Email, WhatsApp Marketing, Automation & Freelancing',
          content_list: [
            'Itroduction to Email Marketing and Its Benefits',
            'Growing and Managing Email Lists',
            'Crafting Effective Email Campaigns and Strategies',
            'Creating Impactful Email Content',
            'Email Marketing Analytics and Optimization',
            'Overview of WhatsApp Marketing and Strategies',
            'Integrating WhatsApp with Other Marketing Channels',
            'Analytics, Optimization, and Compliance in WhatsApp Marketing',
            'Marketing Automation: Tools, Workflows, and Importance',
            'Getting Started with Freelancing',
            'Freelancer Profile Creation and Optimization',
            'Finding Your Niche and Domain in Freelancing',
            'Client Outreach and Lead Nurturing',
          ],
          project: [
            { icon: '/images/dm-icons/upwork.svg' },
            { icon: '/images/dm-icons/getresponse-logo.svg' },
            { icon: '/images/dm-icons/mailchimp.svg' },
            { icon: '/images/dm-icons/freelancer.svg' },
          ],
          cs_study: [{ icon: '/images/dm-icons/lenskart.svg' }],
        },
        {
          week_count: 20,
          content_title: 'Chat GPT & AI Tools',
          content_list: [
            'Creating Landing Page Copies with AI Tools',
            'Developing Marketing Strategies Using AI (ChatGPT and Others)',
            'Email Marketing Content Creation with AI',
            'Social Media Content Writing Powered by AI Tools',
            'Crafting Effective Ad Copies Using AI',
            'Generating SEO-Optimized Content with AI Assistance',
            'Building Marketing Funnels with AI Tools',
            'Writing High-Quality Blog Posts Using AI',
          ],
          project: [{ icon: '/images/dm-icons/chatgpt-3.svg' }],
          cs_study: [{ icon: '/images/dm-icons/mac-d.svg' }],
        },
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
                      {module?.case_study_count != 0 && module?.case_study_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
                          <div
                            className={`text-color-2 min-w-19 min-h-19 rounded-circle mr-4 text-center d-flex align-items-center justify-content-center light-orange-bg`}
                          >
                            {module?.case_study_count}
                          </div>
                          Case Studies
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
                      {module?.quizzes_count != 0 && module?.quizzes_count != null && (
                        <li className="px-lg-8 pr-12 py-6 fs-12 fw-500 lh-14 text-color-1 text-nowrap d-flex align-items-center">
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

'use client';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { exploreCoursesData } from './navData';

export default function Footer(props) {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setCurrentYear(newYear);
  }, []);

  const digitalMarketingCourses = [
    { id: 1, link: '/digital-marketing-course', name: 'Digital Marketing Course' },
    { id: 2, link: '/seo-course', name: 'SEO Course' },
    { id: 3, link: '/social-media-marketing-course', name: 'Social Media Marketing Course' },
    { id: 4, link: '/content-writing-course', name: 'Content Writing Course' },
    { id: 5, link: '/youtube-seo-course', name: 'YouTube Course' },
    { id: 6, link: '/instagram-marketing-course', name: 'Instagram Marketing Course' },
    { id: 7, link: '/google-ads-course', name: 'Google Ads Course' },
    { id: 8, link: '/copywriting-course', name: 'Copywriting Course' },
    { id: 9, link: '/performance-marketing-course', name: 'Performance Marketing Course' },
  ];

  const webDevelopmentCorses = [
    { id: 1, link: '/full-stack-developer-course', name: 'Full Stack Developer Course' },
    { id: 2, link: '/wordpress-course', name: 'WordPress Course' },
    { id: 3, link: '/mern-stack-course', name: 'MERN Stack Course' },
    { id: 4, link: '/laravel-course', name: 'Laravel Course' },
    { id: 5, link: '/web-development-course', name: 'Web Development Course' },
    { id: 6, link: '/html-course', name: 'HTML Course' },
    { id: 7, link: '/reactjs-course', name: 'ReactJS Course' },
    { id: 8, link: '/javascript-course', name: 'Javascript Course' },
    { id: 9, link: '/php-course', name: 'PHP Course' },
    { id: 10, link: '/nodejs-course', name: 'NodeJS Course' },
    { id: 11, link: '/front-end-development-course', name: 'Front-End Development Course' },
    { id: 12, link: '/web-designing-course', name: 'Web Designing Course' },
    { id: 13, link: '/css-course', name: 'CSS Course' },
  ];

  const professionalCourses = [
    { id: 1, link: '/cyber-security-course', name: 'Cyber Security Course' },
    { id: 2, link: '/tableau-course', name: 'Tableau Course' },
    { id: 3, link: '/android-app-development-course', name: 'Android App Development Course' },
    { id: 4, link: '/mobile-app-development-course', name: 'Mobile App Development Course' },
    { id: 5, link: '/power-bi-course', name: 'Power BI Course' },
  ];

  const freeCourses = [
    { id: 1, link: '/resources/semrush/free-course', name: 'Semrush Course' },
    { id: 2, link: '/resources/google-tag-manager/free-course', name: 'Google Tag Manager Course' },
    { id: 3, link: '/resources/blogging/free-course', name: 'Blogging Course' },
    { id: 4, link: '/resources/photoshop/free-course', name: 'Photoshop Course' },
    { id: 5, link: '/resources/video-editing/free-course', name: 'Video Editing Course' },
    { id: 6, link: '/resources/angular/free-course', name: 'AngularJS Course' },
    { id: 7, link: '/resources/shopify/free-course', name: 'Shopify Course' },
    { id: 8, link: '/resources/django/free-course', name: 'Django Course' },
    { id: 9, link: '/resources/email-marketing/free-course', name: 'Email Marketing Course' },
    { id: 10, link: '/resources/affiliate-marketing/free-course', name: 'Affiliate Marketing Course' },
  ];

  const inerviewQuestions = [
    { id: 1, link: '/blog/html-interview-questions-answers', name: 'HTML Interview Questions' },
    { id: 2, link: '/blog/css-interview-questions-answers', name: ' CSS Interview Questions' },
    { id: 3, link: '/blog/php-interview-questions-answers', name: 'PHP Interview Questions' },
    { id: 4, link: '/blog/javascript-interview-questions', name: 'JavaScript Interview Questions' },
    { id: 5, link: '/blog/flutter-interview-questions', name: 'Flutter Interview Questions' },
    { id: 6, link: '/blog/data-structures-interview-questions', name: 'Data Structure Interview Questions' },
    { id: 7, link: '/blog/java-interview-questions-answers', name: 'Java Interview Questions' },
    { id: 8, link: '/blog/mysql-interview-questions-answers', name: 'MySQL Interview Questions' },
    { id: 9, link: '/blog/python-interview-questions-and-answers', name: 'Python Interview Questions' },
    { id: 10, link: '/blog/dbms-interview-questions', name: 'DBMS Interview Questions' },
    { id: 11, link: '/blog/power-bi-interview-questions', name: 'Power BI Interview Questions' },
    { id: 12, link: '/blog/angular-interview-questions', name: 'Angular Interview Questions' },
    { id: 13, link: '/blog/reactjs-interview-questions-answers', name: 'ReactJS Interview Questions' },
    { id: 14, link: '/blog/c-programming-interview-questions-answers', name: 'C Interview Questions' },
    { id: 15, link: '/blog/top-65-django-interview-questions-and-answers', name: 'Django Interview Questions' },
    {
      id: 16,
      link: '/blog/top-email-marketing-interview-questions-answers',
      name: 'Email Marketing Interview Questions',
    },
    { id: 17, link: '/blog/content-writing-interview-questions-answers', name: 'Content Writing Interview Questions' },
    { id: 18, link: '/blog/nodejs-interview-questions', name: 'NodeJS Interview Questions' },
    { id: 19, link: '/blog/seo-interview-questions', name: 'SEO Interview Questions' },
    { id: 20, link: '/blog/oops-interview-questions', name: 'OOPS Interview Questions' },
    { id: 21, link: '/blog/sql-interview-questions', name: 'SQL Interview Questions' },
    {
      id: 22,
      link: '/blog/digital-marketing-interview-questions-answers',
      name: 'Digital Marketing Interview Questions',
    },
  ];

  const popularCareerResources = [
    { id: 1, link: '/blog/professional-courses-after-12th', name: 'Professional Courses After 12th' },
    { id: 2, link: '/blog/courses-after-graduation', name: 'Courses After Graduation' },
    { id: 3, link: '/blog/how-to-become-seo-freelancer', name: 'How to Become SEO Freelancer?' },
    { id: 4, link: '/blog/high-income-skills', name: 'High-Income Skills' },
    { id: 5, link: '/blog/digital-marketing-books', name: 'Digital Marketing Books' },
    { id: 6, link: '/blog/how-to-become-google-ads-expert', name: 'Become Google Ads Expert' },
    { id: 7, link: '/blog/career-in-digital-marketing', name: 'Build a Career in Digital Marketing' },
    { id: 8, link: '/blog/seo-career-path', name: 'SEO Career Path' },
    { id: 9, link: '/blog/how-to-make-money-online-students', name: 'Make Money Online' },
    { id: 10, link: '/blog/how-to-become-data-analyst', name: 'Become Data Analyst' },
    { id: 11, link: '/blog/how-to-become-flutter-developer', name: 'Become a Flutter Developer' },
    { id: 12, link: '/blog/best-programming-languages', name: 'Best Programming Languages to Learn' },
    { id: 13, link: '/blog/how-to-become-ethical-hacker', name: 'Become Ethical Hacker' },
    { id: 14, link: '/blog/python-developer-salary-india', name: 'Python Developer Salary' },
    { id: 15, link: '/blog/full-stack-developer-salary-in-india', name: 'Full Stack Developer Salary' },
    { id: 16, link: '/blog/data-analyst-salary-india', name: 'Data Analyst Salary' },
    { id: 17, link: '/blog/free-digital-marketing-projects-for-students', name: 'Free Digital Marketing Projects' },
  ];

  return (
    <>
      <footer className="bg-color-23 pt-lg-80 pt-64 pb-lg-40 pb-30">
        <section className="footer-section">
          <div className="container-main container-w-xl-1202">
            <Row className="mb-lg-32 mb-40">
              <div className="col-xl-3 col-lg-3 col-12 mb-lg-0 mb-50">
                <div className="company-info text-lg-start">
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex justify-content-lg-start mb-24">
                      <Link href={'/'}>
                        <Image
                          src={process.env.IMG_PATH + `images/ws-cube-white-logo.svg`}
                          alt="footer-logo"
                          width="180"
                          height="72"
                        />
                      </Link>
                    </li>
                    <li className="d-flex justify-content-lg-start">
                      <div className="mb-24 pe-3 footer-disc">
                        <p className="text-color-19 fs-14 fw-600 lh-21 mb-0 text-color-19">
                          Elevate Your Learning Journey with Cutting-Edge Education Technology.
                        </p>
                      </div>
                    </li>
                    <li>
                      <ul className="list-unstyled mb-0 d-flex">
                        <li className="social-media-icon rounded-circle border-w border-color-2 border-opacity-50 mr-10 min-w-32 w-size-32 h-size-32">
                          <Link href={'https://twitter.com/wscubetechindia'} target="_blank">
                            <div className="icon twitter-icon d-flex justify-content-center align-items-center h-100 cursor-pointer">
                              <FontAwesomeIcon icon={faTwitter} width={13} height={10} className="text-color-2" />
                            </div>
                          </Link>
                        </li>
                        <li className="social-media-icon rounded-circle border-w border-color-2 border-opacity-50 mr-10 min-w-32 w-size-32 h-size-32">
                          <Link href={'https://www.instagram.com/wscubetechindia/'} target="_blank">
                            <div className="icon d-flex insta-icon justify-content-center align-items-center h-100  cursor-pointer">
                              <div className="white-icon d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faInstagram} width={13} height={10} className="text-color-2" />
                              </div>
                              <div className="hover-icon align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="instagram">
                                  <linearGradient
                                    id="a"
                                    x1="255.531"
                                    x2="255.531"
                                    y1="117.176"
                                    y2="406.065"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop offset="0" stopColor="#ea8928"></stop>
                                    <stop offset="1" stopColor="#cf2b8f"></stop>
                                  </linearGradient>
                                  <path
                                    fill="url(#a)"
                                    d="M326.1 104.1H185c-47.9 0-86.9 39-86.9 86.9v141c0 47.9 39 86.9 86.9 86.9h141c47.9
                                   0 86.9-39 86.9-86.9V191c0-47.9-38.9-86.9-86.8-86.9zm58.9 228c0 32.5-26.4 58.9-58.9
                                    58.9H185c-32.5 0-58.9-26.4-58.9-58.9V191c0-32.5 26.4-58.9 58.9-58.9h141c32.5 0 58.9 
                                    26.4 58.9 58.9l.1 141.1z"
                                  ></path>
                                  <linearGradient
                                    id="b"
                                    x1="255.531"
                                    x2="255.531"
                                    y1="117.176"
                                    y2="406.065"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop offset="0" stopColor="#ea8928"></stop>
                                    <stop offset="1" stopColor="#cf2b8f"></stop>
                                  </linearGradient>
                                  <path
                                    fill="url(#b)"
                                    d="M255.5 180.4c-44.7 0-81.1 36.4-81.1 81.1 0 44.7 36.4 81.1 81.1 81.1s81.1-36.4 81.1-81.1c0-44.7-36.3-81.1-81.1-81.1zm0
                                   134.3c-29.3 0-53.2-23.9-53.2-53.2 0-29.3 23.9-53.2 53.2-53.2s53.2 23.9 53.2 53.2c0 29.4-23.8 53.2-53.2 53.2z"
                                  ></path>
                                  <linearGradient
                                    id="c"
                                    x1="340.043"
                                    x2="340.043"
                                    y1="117.176"
                                    y2="406.065"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop offset="0" stopColor="#ea8928"></stop>
                                    <stop offset="1" stopColor="#cf2b8f"></stop>
                                  </linearGradient>
                                  <path
                                    fill="url(#c)"
                                    d="M340 156.7c-5.4 0-10.7 2.2-14.5 6-3.8 3.8-6 9.1-6 14.5s2.2 10.7 6 14.5c3.8 3.8 9.1 6 14.5 6s10.7-2.2 14.5-6c3.8-3.8 6-9.1
                                   6-14.5s-2.2-10.7-6-14.5c-3.8-3.8-9.1-6-14.5-6z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="social-media-icon rounded-circle border-w border-color-2 border-opacity-50 mr-10 min-w-32 w-size-32 h-size-32">
                          <Link href={'https://in.linkedin.com/company/wscubetechindia'} target="_blank">
                            <div className="icon linkdin-icon d-flex justify-content-center align-items-center h-100  cursor-pointer">
                              <FontAwesomeIcon icon={faLinkedinIn} width={13} height={10} />
                            </div>
                          </Link>
                        </li>
                        <li className="social-media-icon rounded-circle border-w border-color-2 border-opacity-50 mr-10 min-w-32 w-size-32 h-size-32">
                          <Link href={'https://www.youtube.com/c/wscubetechjodhpur'} target="_blank">
                            <div className="icon d-flex youtube-icon justify-content-center align-items-center h-100  cursor-pointer">
                              <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 4.95691C14 4.92305 14 4.88458 13.9984 4.83995C13.9969 4.7153 13.9938 4.57525 13.9906
                                 4.42598C13.9781 3.99661 13.9563 3.56879 13.9219 3.16559C13.875 2.61003 13.8062 2.14681 13.7125
                                  1.79901C13.6136 1.43606 13.4196 1.10503 13.1501 0.839022C12.8806 0.573014 12.5449 0.381342 12.1766
                                  0.283164C11.7344 0.166205 10.8687 0.093875 9.65 0.0492459C9.07031 0.0277008 8.45 0.0138503 7.82969
                                  0.00615565C7.6125 0.00307778 7.41094 0.00153894 7.22969 0H6.77031C6.58906 0.00153894 6.3875 0.00307778
                                  6.17031 0.00615565C5.55 0.0138503 4.92969 0.0277008 4.35 0.0492459C3.13125 0.0954139 2.26406 0.167744
                                  1.82344 0.283164C1.455 0.381101 1.11917 0.572692 0.8496 0.838737C0.580029 1.10478 0.386188 1.43594
                                  0.2875 1.79901C0.192188 2.14681 0.125 2.61003 0.078125 3.16559C0.04375 3.56879 0.021875 3.99661
                                  0.00937498 4.42598C0.00468748 4.57525 0.00312498 4.7153 0.00156248 4.83995C0.00156248 4.88458
                                  0 4.92305 0 4.95691V5.04309C0 5.07695 -2.38651e-08 5.11542 0.00156248 5.16005C0.00312498 5.2847
                                  0.00624998 5.42475 0.00937498 5.57402C0.021875 6.00339 0.04375 6.43121 0.078125 6.83441C0.125
                                  7.38997 0.19375 7.85319 0.2875 8.20098C0.4875 8.93813 1.075 9.51985 1.82344 9.71684C2.26406
                                  9.83379 3.13125 9.90612 4.35 9.95075C4.92969 9.9723 5.55 9.98615 6.17031 9.99384C6.3875
                                  9.99692 6.58906 9.99846 6.77031 10H7.22969C7.41094 9.99846 7.6125 9.99692 7.82969 9.99384C8.45
                                  9.98615 9.07031 9.9723 9.65 9.95075C10.8687 9.90458 11.7359 9.83226 12.1766 9.71684C12.925
                                  9.51985 13.5125 8.93967 13.7125 8.20098C13.8078 7.85319 13.875 7.38997 13.9219 6.83441C13.9563
                                  6.43121 13.9781 6.00339 13.9906 5.57402C13.9953 5.42475 13.9969 5.2847 13.9984 5.16005C13.9984
                                  5.11542 14 5.07695 14 5.04309V4.95691ZM12.875 5.03693C12.875 5.06925 12.875 5.10465 12.8734
                                  5.1462C12.8719 5.26624 12.8688 5.39858 12.8656 5.5417C12.8547 5.95106 12.8328 6.36042
                                  12.8 6.74053C12.7578 7.23607 12.6984 7.64235 12.625 7.91474C12.5281 8.27024 12.2437 8.55186
                                  11.8844 8.64574C11.5562 8.73192 10.7297 8.80117 9.60625 8.84272C9.0375 8.86426 8.425 8.87812
                                  7.81406 8.88581C7.6 8.88889 7.40156 8.89043 7.22344 8.89043H6.77656L6.18594 8.88581C5.575
                                  8.87812 4.96406 8.86426 4.39375 8.84272C3.27031 8.79963 2.44219 8.73192 2.11562 8.64574C1.75625
                                  8.55032 1.47187 8.27024 1.375 7.91474C1.30156 7.64235 1.24219 7.23607 1.2 6.74053C1.16719 6.36042
                                  1.14688 5.95106 1.13438 5.5417C1.12969 5.39858 1.12813 5.2647 1.12656 5.1462C1.12656 5.10465
                                  1.125 5.06771 1.125 5.03693V4.96307C1.125 4.93075 1.125 4.89535 1.12656 4.8538C1.12813
                                  4.73376 1.13125 4.60142 1.13438 4.45829C1.14531 4.04894 1.16719 3.63958 1.2 3.25946C1.24219
                                  2.76393 1.30156 2.35765 1.375 2.08526C1.47187 1.72976 1.75625 1.44814 2.11562 1.35426C2.44375
                                  1.26808 3.27031 1.19883 4.39375 1.15728C4.9625 1.13573 5.575 1.12188 6.18594 1.11419C6.4
                                  1.11111 6.59844 1.10957 6.77656 1.10957H7.22344L7.81406 1.11419C8.425 1.12188 9.03594 1.13573
                                  9.60625 1.15728C10.7297 1.20037 11.5578 1.26808 11.8844 1.35426C12.2437 1.44968 12.5281 1.72976
                                  12.625 2.08526C12.6984 2.35765 12.7578 2.76393 12.8 3.25946C12.8328 3.63958 12.8531 4.04894 12.8656
                                  4.45829C12.8703 4.60142 12.8719 4.7353 12.8734 4.8538C12.8734 4.89535 12.875 4.93229 12.875 4.96307V5.03693ZM5.60938
                                  7.06217L9.23438 4.98461L5.60938 2.93783V7.06217Z"
                                  fill="#E9F3FC"
                                />
                              </svg>
                            </div>
                          </Link>
                        </li>
                        <li className="social-media-icon rounded-circle border-w border-color-2 border-opacity-50 mr-10 min-w-32 w-size-32 h-size-32">
                          <Link href={'https://www.facebook.com/wscubetech.india'} target="_blank">
                            <div className="icon fb-icon d-flex justify-content-center align-items-center h-100  cursor-pointer">
                              <FontAwesomeIcon icon={faFacebook} width={13} height={10} />
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mb-lg-0 mb-2">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-40">
                    <div className="footer-links-list">
                      <span className="fs-lg-16 fs-20 fw-lg-600 fw-700 lh-24 text-color-2 mb-lg-30 mb-16 d-block">
                        Company
                      </span>
                      <ul className="list-unstyled text-bottom-hover-effect ul-categories fs-14 fw-400">
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/contact'} className="text-color-19">
                            Contact
                          </Link>
                        </li>
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/about'} className="text-color-19">
                            About
                          </Link>
                        </li>
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'https://www.wscubetech.com/blog/'} target="_blank" className="text-color-19">
                            WsCube Tech Blog
                          </Link>
                        </li>
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/online-courses'} className="text-color-19">
                            Online Courses
                          </Link>
                        </li> */}
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'https://courses.wscubetech.com/'} target="_blank" className="text-color-19">
                            Self-Paced Courses
                          </Link>
                        </li>
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Success Stories
                          </Link>
                        </li> */}
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Careers
                          </Link>
                        </li> */}
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/events'} className="text-color-19">
                            Events
                          </Link>
                        </li>
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Summer Training
                          </Link>
                        </li> */}
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Verify Certificate
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-40">
                    <div className="footer-links-list">
                      <span className="fs-lg-16 fs-20 fw-lg-600 fw-700 lh-24 text-color-2 mb-lg-30 mb-16 d-block">
                        Our Programs
                      </span>
                      <ul className="list-unstyled text-bottom-hover-effect ul-categories fs-14 fw-400">
                        {exploreCoursesData?.map((category, index) => {
                          return (
                            <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12" key={index}>
                              <Link href={category?.slug} className="text-color-19">
                                {category?.course_name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 mb-md-0 mb-40">
                    <div className="footer-links-list">
                      <span className="fs-lg-16 fs-20 fw-lg-600 fw-700 lh-24 text-color-2 mb-lg-30 mb-16 d-block">
                        Support
                      </span>
                      <ul className="list-unstyled text-bottom-hover-effect ul-categories fs-14 fw-400">
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Become Mentor
                          </Link>
                        </li> */}
                        {/* <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/'} className="text-color-19">
                            Our Centers
                          </Link>
                        </li> */}
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/privacy-policy'} className="text-color-19">
                            Privacy Policy
                          </Link>
                        </li>
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/terms-and-conditions'} className="text-color-19">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/refund-and-cancellation'} className="text-color-19">
                            Refund Policy
                          </Link>
                        </li>
                        <li className="text-color-19 fs-lg-14 fs-16 lh-lg-21 lh-24 fw-400 mb-12">
                          <Link href={'/faq'} className="text-color-19">
                            FAQ's
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-sm-6 col-12 mb-md-0">
                    <div className="footer-links-list">
                      <span className="fs-lg-16 fs-20 fw-lg-600 fw-700 lh-24 text-color-2 mb-lg-30 mb-16 d-block">
                        Telegram Community
                      </span>
                      <div className="qr-code-wrapper">
                        <Image
                          src={process.env.IMG_PATH + `images/icons/wscube-tech-qr.svg`}
                          width={233}
                          height={233}
                          alt="ws-qr-code"
                          className="max-w-xl-190 max-w-148 h-auto"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </Row>
            <Row className="mb-lg-36 mb-30">
              <Col lg={12}>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
            </Row>
            <Row className="mb-36 d-none d-lg-flex">
              <Col lg={12} className="mb-24">
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">Digital Marketing Courses</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {digitalMarketingCourses?.map((course, index) => {
                    return (
                      <li key={index} className="mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < digitalMarketingCourses.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
              <Col lg={12} className="mb-24">
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">Web Development Courses</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {webDevelopmentCorses?.map((course, index) => {
                    return (
                      <li key={index} className="mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < webDevelopmentCorses.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
              <Col lg={12} className="mb-24">
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">More Professional Courses</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {professionalCourses?.map((course, index) => {
                    return (
                      <li key={index} className="fs-12 fw-400 lh-18 text-color-19 mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < professionalCourses.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
              <Col lg={12} className="mb-24">
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">Free Courses</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {freeCourses?.map((course, index) => {
                    return (
                      <li key={index} className="fs-12 fw-400 lh-18 text-color-19 mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < freeCourses.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
              <Col lg={12} className="mb-24">
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">Interview Questions</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {inerviewQuestions?.map((course, index) => {
                    return (
                      <li key={index} className="fs-12 fw-400 lh-18 text-color-19 mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < inerviewQuestions.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
              <Col lg={12}>
                <span className="fs-14 fw-600 lh-21 text-color-2 mb-16 d-block">Popular Career Resources</span>
                <ul className="courses-link-list list-unstyled d-flex flex-wrap mb-12">
                  {popularCareerResources?.map((course, index) => {
                    return (
                      <li key={index} className="fs-12 fw-400 lh-18 text-color-19 mb-12">
                        <Link href={course.link}>
                          <div className="fs-12 fw-400 lh-18 text-color-19 courses-link-text">
                            <span className="courses-name">{course.name}</span>
                            {index < popularCareerResources.length - 1 && <span className="px-10">|</span>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-w border-top-0 border-color-22"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="fs-14 lh-21 fw-400 text-color-2 text-center copyright-footer">
                  © Copyright {currentYear}, All Rights Reserved
                  <Link
                    href={'https://www.wscubetech.com/'}
                    // eslint-disable-next-line max-len
                    title="Web development course in jodhpur | Android training in jodhpur | php training in jodhpur | java training in jodhpur"
                    target="_blank"
                  >
                    <span className="design-by text-color-19"> By WsCube Tech</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </footer>
    </>
  );
}

Footer.propTypes = {
  footerLogo: PropTypes.string,
};

// 'use client';
import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import { AnimatePresence, useScroll, useTransform, motion } from 'framer-motion';
import { animationFromBottom } from '../../_utils/Animation';

export default function CoursesHighlights({ heading, subHeading, highlights }) {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleTabClick = (sectionId) => {
    const section = sectionRefs.current.find((ref) => ref && Number(ref.id) === sectionId);
    if (section) {
      const scrollMarginTop = 120;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({
        top: sectionTop,
      });
      setActiveSection(Number(sectionId));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number(entry?.target?.id));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="course-heighlight-section py-lg-80 py-64 bg-color-19">
      <div className="container-main container-w-xl-1202 mobile-container-lp-0">
        <AnimatePresence>
          <motion.div
            initial={animationFromBottom.initial}
            whileInView={animationFromBottom.whileInView}
            transition={animationFromBottom.transition}
            viewport={{ once: true }}
            className="section-info text-center text-color-1 mb-40"
          >
            <h2 className="fw-600 fs-32 lh-48 mb-12">{heading || 'Course Highlights'}</h2>
            <p className="fs-14 fw-400 lh-21 text-color-7 mb-0">
              {subHeading || 'Highlighting the Best Course Features.'}
            </p>
          </motion.div>
          <div className="scroll-spy-wrapper d-flex grid-gap-20">
            <div className="scroll-spy-tab w-full max-w-lg-278 max-w-278 d-xl-block d-none">
              <ul id="list-example" className="border-0 tab-list position-sticky list-unstyled">
                {highlights.map((item, index) => {
                  return (
                    <li key={index} className="mb-20 w-full">
                      <button
                        className={`tab-btns bg-transparent rounded-12 py-16 px-20 fs-16 fw-600 lh-24 text-color-1 d-block w-full text-start ${
                          (activeSection === item.id && 'active') || ''
                        }`}
                        onClick={() => handleTabClick(item.id)}
                      >
                        {item?.highlight_title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="scroll-spy-content w-full d-xl-block d-flex overflow-auto grid-gap-lg-30 grid-gap-10 scrollbar-hidden">
              {highlights.map((item, index) => {
                return (
                  <div
                    id={item.id}
                    ref={addToRefs}
                    key={index}
                    className="highlight-card-wrapper about-highlight-list mb-24 min-w-lg-600 min-w-350 mr-xl-0 mr-lg-4"
                  >
                    <div className="bg-white border-w-2 border-color-1 hover-shadow-2 p-lg-20 p-14 rounded-lg-12 rounded-20 h-full">
                      <div className="p-0">
                        <div className="d-flex flex-xl-row flex-column grid-gap-xl-20 grid-gap-32">
                          <div className="w-full max-w-2xl-489 order-xl-1 order-2">
                            <div className="course-highlight info">
                              <h3 className="fw-600 fs-16 lh-24 text-color-1 mb-12">{item?.highlight_title}</h3>
                              <div className="fs-14 fw-400 lh-21 text-color-7 mb-12">
                                {item?.highlight_description && parse(item?.highlight_description)}
                              </div>
                            </div>
                          </div>
                          <div className="w-full max-w-xl-361 order-xl-2 order-1">
                            <Image
                              src={`${process.env.IMG_PATH}${item?.highlight_image}`}
                              width={325}
                              height={327}
                              alt="courses-highlight-images"
                              className="img-fluid rounded-8 w-full max-h-xl-300 max-h-280 object-fit-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

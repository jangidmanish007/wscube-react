'use client';

import React, { useEffect, useRef, useState } from 'react';
import FaqBanner from './FaqBanner';
import FaqCategories from './FaqCategories';
import FaqRightSide from './FaqRightSide';

export default function MainFaq({ faqAllData }) {
  // handle content scroll
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
      const scrollMarginTop = 100;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
      window.scrollTo({
        top: sectionTop,
      });
      setActiveSection(Number(sectionId));
    }
  };

  useEffect(() => {
    // Scroll to the first section and set it as active on component mount
    if (sectionRefs.current.length > 0) {
      const firstSection = sectionRefs.current[0];
      if (firstSection) {
        const scrollMarginTop = 100;
        const sectionTop = firstSection.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
        setActiveSection(Number(firstSection.id));
      }
    }

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
        rootMargin: '-100px',
        threshold: 0.3, // Trigger when 30% of the section is visible
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
    <>
      <section
        className="min-h-84 bg-white center-top-section border-bottom"
        style={{ borderColor: '#E5E7EB' }}
      ></section>
      <section className="pt-lg-35 pt-67 pb-60 pb-lg-37 faq-banner-section">
        <FaqBanner
          faqBannerData={{ title: faqAllData?.title, tagline: faqAllData?.tagline, image: faqAllData?.image }}
        />
      </section>
      <section className="pt-lg-91 pt-28 pb-lg-125 pb-75">
        <div className="container-main container-w-xl-1202">
          <div className="d-md-flex grid-gap-lg-70 grid-gap-40">
            <div className="w-full max-w-lg-327 max-w-md-280">
              <FaqCategories
                handleTabClick={handleTabClick}
                activeSection={activeSection}
                faqCategoryList={faqAllData?.categories}
              />
            </div>
            <div className="w-full max-w-775">
              <FaqRightSide addToRefs={addToRefs} faqData={faqAllData?.categories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

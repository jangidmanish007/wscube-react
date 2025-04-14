'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import ExploreCourseCard from './ExploreCourseCard';
import { getCategoryCoursesList, getMentorshipCoursesList } from '@/_services/homeService';

export default function ExploreCourses({ categoryCoursesData, categoriesList, discoverPathSectionRef }) {
  const [selectedCategory, setSelectedCategory] = useState('data');
  const [categoryAllCourses, setCategoryAllCourses] = useState(null);

  useEffect(() => {
    if (categoryCoursesData) {
      setCategoryAllCourses(categoryCoursesData);
    }
  }, [categoryCoursesData]);

  useEffect(() => {
    filteredCategoryCoursesData();
  }, [selectedCategory, categoryCoursesData]);

  async function filteredCategoryCoursesData() {
    const params = {
      category_slug: selectedCategory,
      limit: 4,
    };
    const response = await getMentorshipCoursesList(params);
    if (response?.status) {
      setCategoryAllCourses(response?.result);
    } else {
      setCategoryAllCourses(null);
    }
  }

  return (
    <>
      <section className="pt-80 pb-120 home-explore-courses discover-path-section" ref={discoverPathSectionRef}>
        <div className="container-main container-w-xl-1202">
          <AnimatePresence>
            <div className="row">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: 'tween' }}
                className="text-lg-start text-center col-12"
                viewport={{ once: true }}
              >
                <h2 className="fs-32 fw-lg-600 fw-700 lh-40 text-color-1 mb-16">Mentorship Programs</h2>
                <p className="fs-16 fw-400 lh-24 mb-40 text-color-7">
                  Choose your program, get certified, and grab new career opportunities.
                </p>
              </motion.div>
              <div className="col-12">
                <motion.ul
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.2, type: 'tween' } }}
                  viewport={{ once: true }}
                  className="d-flex align-items-center justify-content-start mb-lg-40 mb-20 path-categor-list p-0 pb-2 mx-auto"
                >
                  {categoriesList?.map((item, index) => {
                    return (
                      <motion.li
                        className={`cursor-pointer px-4 h-size-40 d-flex align-items-center mr-16 text-nowrap
                    bg-white fw-600 label-color-1 border-w-2 border-color-1 rounded-12 ${
                      (selectedCategory == item?.slug && 'active') || ''
                    }`}
                        onClick={() => setSelectedCategory(item?.slug)}
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                      >
                        {item?.category_name}
                      </motion.li>
                    );
                  })}
                </motion.ul>
                <div className={`w-100`}>
                  <ExploreCourseCard categoryAllCourses={categoryAllCourses} selectedCategory={selectedCategory} />
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

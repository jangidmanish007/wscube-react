'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { animationFromBottom } from '@/_utils/Animation';
import parse from 'html-react-parser';

export default function CourseFaqs({ heading, subHeading, faqs }) {
  return (
    <section className="py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="max-w-1060 mx-auto">
          <AnimatePresence>
            <motion.div
              initial={animationFromBottom.initial}
              whileInView={animationFromBottom.whileInView}
              transition={animationFromBottom.transition}
              viewport={{ once: true }}
              className="section-info text-center mb-44"
            >
              <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-12">{heading || 'Frequently asked questions'}</h2>
              <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                {subHeading || 'Everything you need to know about the product and billing.'}
              </p>
            </motion.div>
            <div className="faq-accordion mb-lg-44 mb-64">
              <Accordion defaultActiveKey="0">
                {faqs?.map((item, index) => {
                  return (
                    <Accordion.Item eventKey={index} key={index} className={``}>
                      <Accordion.Header as="span">
                        <h3 className="pe-2 fs-lg-18 fs-16 fw-lg-600 fw-400 lh-lg-27 lh-24 text-color-1 mb-0">
                          {' '}
                          {item?.question}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className="px-0 pb-3 pt-0 section-subtitle mb-0 fw-400 fs-lg-16 fs-14 lh-lg-24 lh-21 faq-body opacity-75">
                        {parse(item?.answer)}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
            {/* <div className="text-center">
              <button className="outline-none fs-14 hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-20">
                See All Our FAQ’s
              </button>
            </div> */}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

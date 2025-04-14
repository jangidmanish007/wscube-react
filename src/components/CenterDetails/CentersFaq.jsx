import React from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function CentersFaq({ headingData, centerFaqData }) {
  return (
    <section className="py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="max-w-1060 mx-auto">
          <div className="section-info text-center mb-44">
            <h2 className="fs-32 fw-600 lh-48 text-color-1 mb-12">{headingData?.heading}</h2>
            <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">{headingData?.subHeading}</p>
          </div>
          <div className="faq-accordion mb-lg-44 mb-64">
            <Accordion defaultActiveKey={0}>
              {centerFaqData?.map((item, index) => {
                return (
                  <Accordion.Item eventKey={index} key={index} className={``}>
                    <Accordion.Header as="span">
                      <h3 className="pe-2 fs-lg-18 fs-16 fw-lg-600 fw-400 lh-lg-27 lh-24 text-color-1 mb-0">
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
        </div>
      </div>
    </section>
  );
}

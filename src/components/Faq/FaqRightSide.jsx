import React from 'react';
import { Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';

export default function FaqRightSide({ addToRefs, faqData }) {
  return (
    <div>
      {faqData?.map((item, index) => {
        return (
          <div id={item.id} ref={addToRefs} key={index} className="mb-lg-96 mb-60 faq-content-right-side">
            <h2 className="mb-lg-24 mb-20 fs-lg-25 fs-22 fw-600 lh-lg-27 lh-33 text-color-1 text-capitalize">
              {item?.name}
            </h2>
            <div className="faq-accordion mb-lg-44 mb-64 faq-common">
              <Accordion defaultActiveKey={0}>
                {item?.faqs?.map((faq, faqIndex) => {
                  return (
                    <Accordion.Item
                      eventKey={faqIndex}
                      key={faqIndex}
                      className={`border-0 mb-lg-20 mb-12 px-20 rounded-12`}
                      style={{ background: '#194CFF0D' }}
                    >
                      <Accordion.Header as="span" style={{ background: '#194CFF0D' }}>
                        <h3 className="pe-2 fs-lg-18 fs-16 fw-lg-600 fw-400 lh-lg-27 lh-24 text-color-1 mb-0">
                          {faq?.question}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className="px-0 pb-3 pt-0 section-subtitle mb-0 fw-400 fs-lg-16 fs-14 lh-lg-24 lh-21 opacity-75">
                        <div className="editor-content-box-wrapper">{faq?.answer && parse(faq?.answer)}</div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        );
      })}
    </div>
  );
}

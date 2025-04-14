import Image from 'next/image';
import React, { useState } from 'react';
import { faqData } from './faqData';
import { Accordion, AccordionBody, AccordionHeader } from 'react-bootstrap';

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-color-40 py-lg-116 py-72">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading text-center mb-60">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Frequently asked questions</h2>
          <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">Here’s everything you may ask.</p>
        </div>
        <div className="faq-accordion mb-lg-44 mb-64 landing-page-accordion">
          <Accordion defaultActiveKey="0">
            {faqData?.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} key={index} className={``}>
                  <Accordion.Header as="span">
                    <h3 className="pe-2 fs-16 fw-500 lh-lg-27 lh-24 text-color-2 mb-0">{item?.faqTitle}</h3>
                  </Accordion.Header>
                  <Accordion.Body className="fs-16 fw-400 text-color-36 opacity-75 mb-2 px-0 pt-0">
                    {item?.faqAnswer?.map((ans, faqAnswerIndex) => {
                      return <div key={faqAnswerIndex}>{ans.answer}</div>;
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

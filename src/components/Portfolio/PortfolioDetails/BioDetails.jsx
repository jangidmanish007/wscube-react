import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';

export default function BioDetails({ bioDetails }) {
  return (
    <section className="mb-52">
      <div className="container-main container-w-xl-1202">
        <div className="d-md-flex grid-gap-60">
          <div className="bio-wrapper w-full max-w-md-555 mb-lg-0 mb-24">
            <h3 className="fs-22 fw-600 lh-33 text-color-1 mb-12">Bio</h3>
            {bioDetails?.bioInfo && (
              <div className="fs-16 fw-400 lh-24 text-color-34 max-w-555 overflow-hidden">
                {parse(bioDetails?.bioInfo)}
              </div>
            )}
          </div>
          {bioDetails?.techSkills?.length > 0 && (
            <div className="tech-skills-wrapper w-full max-w-555">
              <h3 className="fs-22 fw-600 lh-33 text-color-1 mb-12">Technical Skills</h3>
              <ul className="list-unstyled d-flex flex-wrap grid-gap-12">
                {bioDetails?.techSkills?.map((item, index) => {
                  return (
                    <li className="border-w border-color-28 rounded-8 py-8 px-12 min-h-37" key={index}>
                      <div className="d-flex align-items-center">
                        {item?.skill_img_url && (
                          <div className="img-box mr-8 max-w-18 min-w-18">
                            <Image
                              src={`${process?.env.IMG_PATH}${item?.skill_img_url}`}
                              width={18}
                              height={18}
                              className="img-fluid max-h-18 max-w-18 h-auto"
                            />
                          </div>
                        )}
                        <span className="text-nowrap fs-14 fw-400 lh-21 text-color-1">{item?.title}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

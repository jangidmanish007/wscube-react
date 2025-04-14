import Image from 'next/image';
import React from 'react';

export default function ConnectWithTeam() {
  return (
    <section className="connect-with-us-section overflow-hidden pb-lg-80 pb-38">
      <div className="container-main container-w-xl-1202 px-lg-3 px-0 connect-with-us-container">
        {/* <div className="connect-with-us d-lg-flex justify-content-between align-items-end px-lg-78 w-full rounded-lg-16"> */}
        <div className="connect-with-us px-lg-78 w-full rounded-lg-16">
          <div className="connect-with-content py-35 px-lg-0 px-16 d-lg-flex align-items-center justify-content-between">
            <div className="">
              <p className="fs-16 fw-400 lh-24 text-color-2 mb-8 text-lg-start text-center">
                Want more information about Upskilling Programs?
              </p>
              <h2 className="fs-28 fw-600 lh-42 text-color-2 mb-lg-0 mb-24 text-lg-start text-center">
                Connect with the team for a chat
              </h2>
            </div>
            <div className="mx-lg-0 mx-auto text-lg-start text-center">
              <button className="border-w-2 border-color-25 bg-color-25 rounded-12 px-16 h-size-56 outline-none text-color-1 fw-600 fs-lg-18 fs-16 contact-counselor-btn">
                Request a Callback
              </button>
            </div>
          </div>
          {/* <div className="d-lg-block d-none w-100 max-w-291 chat-moentors-wrapper position-relative">
            <Image
              src={process.env.IMG_PATH + `images/master-class/master-class-montors.png`}
              width={291}
              height={216}
              alt="img"
              className="img-fluid position-relative"
            />
            <div className="bg-layer-mentor position-absolute bottom-0 start-0 w-full h-full"></div>
          </div> */}
          {/* <div className="d-lg-none mx-auto text-center position-relative">
            <div className="img-box">
              <Image
                src={process.env.IMG_PATH + `images/master-class/master-class-montors-2.webp`}
                width={410}
                height={321}
                alt="img"
                className="img-fluid d-lg-none position-relative w-full"
              />
            </div>
            <div className="bg-layer-mentor position-absolute bottom-0 start-0 w-full h-full rounded-lg-16 rounded-0"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

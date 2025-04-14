import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function JionWithWhatsApp({ communityQrImg, communityUrl }) {
  return (
    <section className="pb-lg-115 pb-80">
      <div className="container-main container-w-xl-1202">
        <div className="comunity-mian-wrapper py-lg-34 py-32 px-lg-45 px-26 rounded-16">
          <div className="d-lg-flex align-items-center grid-gap-52">
            <div className="join-comunity-content text-lg-start text-center">
              <h2 className="fs-25 fw-lg-600 lh-37 text-color-1 mb-6">Join WsCube WhatsApp Community</h2>
              <p className="fs-lg-18 fs-16 fw-400 lh-lg-27 lh-24 text-color-1 mb-lg-52 mb-32">
                to get regular updates on Masterclasses 
              </p>
              <div className="d-lg-none d-block mb-50">
                <div className="whatsapp-qr-wrapper text-center d-flex flex-column align-items-center">
                  {/* {(communityQrImg && (
                    <Image
                      src={process.env.IMG_PATH + communityQrImg}
                      width={164}
                      height={165}
                      alt=""
                      className="img-fluid w-auto rounded-8 mb-12 max-w-164"
                    />
                  )) || (
                    <Image
                      src={process.env.IMG_PATH + 'images/master-class/whatsapp-qr-scan.svg'}
                      width={164}
                      height={165}
                      alt=""
                      className="img-fluid w-auto rounded-8 mb-12 max-w-164"
                    />
                  )} */}
                  {(communityUrl && (
                    <Link href={communityUrl} className="fs-14 fw-600 lh-21 text-color-3 text-center">
                      Join WhatsApp group
                    </Link>
                  )) || (
                    <Link
                      href={'https://whatsapp.com/channel/0029VacQ1KKA89MZe6UFkh3d'}
                      className="fs-14 fw-600 lh-21 text-color-3 text-center"
                    >
                      Join WhatsApp group
                    </Link>
                  )}
                </div>
              </div>
              <div className="d-grid grid-lg-cols-3 grid-md-cols-2 grid-gap-lg-36 grid-gap-32">
                <div>
                  <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-2">Project-Based Approach</h3>
                  <p className="fs-14 fw-400 lh-21 text-color-34 mb-0">
                    Practical and engaging learning can be achieved through a hands-on project.
                  </p>
                </div>
                <div>
                  <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-2">Free Prep Material</h3>
                  <p className="fs-14 fw-400 lh-21 text-color-34 mb-0">
                    Access additional study resources at no extra cost to prepare more effectively.
                  </p>
                </div>
                <div>
                  <h3 className="fs-18 fw-600 lh-27 text-color-1 mb-2">Expert Career Guidance</h3>
                  <p className="fs-14 fw-400 lh-21 text-color-34 mb-0">
                    Get professional guidance on steering your career in the right direction and make well-informed
                    choices.
                  </p>
                </div>
              </div>
            </div>
            <div className="whatsapp-qr-wrapper w-full max-w-142 text-center d-lg-block d-none">
              {(communityQrImg && (
                <Image
                  src={`${process.env.IMG_PATH}${communityQrImg}`}
                  width={164}
                  height={165}
                  alt=""
                  className="img-fluid w-auto rounded-8 mb-12"
                />
              )) || (
                <Image
                  src={`${process.env.IMG_PATH}images/masterclass-whatsapp-channel.svg`}
                  width={164}
                  height={165}
                  alt=""
                  className="img-fluid w-auto rounded-8 mb-12"
                />
              )}
              {(communityUrl && (
                <Link
                  href={communityUrl}
                  target="_blank"
                  rel="nofollow"
                  className="fs-14 fw-600 lh-21 text-color-3 text-center"
                >
                  Join from PC instead
                </Link>
              )) || (
                <Link
                  href={'https://whatsapp.com/channel/0029VacQ1KKA89MZe6UFkh3d'}
                  target="_blank"
                  rel="nofollow"
                  className="fs-14 fw-600 lh-21 text-color-3 text-center"
                >
                  Join from PC instead
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PageNotFound() {
  const pathname = usePathname();

  return (
    <>
      {(pathname == '/faq' && (
        <section className="h-size-80" style={{ borderBottom: '1px solid #E5E7EB' }}>
          <div className="container-main container-w-xl-1202"></div>
        </section>
      )) || (
        <section className="bg-color-3 h-size-80">
          <div className="container-main container-w-xl-1202"></div>
        </section>
      )}
      <section
        className={`py-md-4 page-not-found-section d-flex align-items-center no-result-found `}
        style={{ minHeight: '85vh' }}
      >
        <Container className="error-page py-md-0 py-4">
          <Row className="justify-content-center">
            <Col sm={12}>
              <div className="max-w-614 mx-auto position-relative min-h-300">
                <div className="text-center mb-md-5 mb-4">
                  <Image
                    src={`${process.env.IMG_PATH}images/404page-img.svg`}
                    width={600}
                    height={500}
                    className="img-fluid w-full max-w-614"
                    alt="no-result-img"
                  />
                </div>
                <div
                  className="position-absolute start-50 w-full max-w-525"
                  style={{ transform: `translateX(-50%)`, bottom: '10%' }}
                >
                  <div className="text-center">
                    <h1 className="text-capitalize fs-25 lh-27 text-color-1 mb-12 text-center">Page not found!</h1>
                    <p className="fs-16 fw-400 lh-21 text-color-10 mb-20">
                      You have some patience, we will bring the course for you soon.
                    </p>
                  </div>
                  <div className="text-center d-flex justify-content-center">
                    <Link href={'/'}>
                      <button
                        className="px-20 py-2 border-w-2 min-h-40 bg-color-3 text-color-2 reverse-shadow-2 rounded-12 fs-14 lh-21 fw-600"
                        title="Go Back"
                      >
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

PageNotFound.propTypes = {};

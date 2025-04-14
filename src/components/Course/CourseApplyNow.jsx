'use client';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Image } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { animationFromLeft } from '@/_utils/Animation';

export default function CourseApplyNow({
  heading,
  subHeading,
  setShowLeadModal,
  setLeadContact,
  setLeadNote,
  setDownloadCrs,
  setLeadHeading,
  courseSlug,
  details,
}) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    mobile: '',
  });

  const [userMobile, setUserMobile] = useState({
    code: '',
    number: '',
    numWithoutCode: '',
  });

  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
    setLeadContact({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let mobileMsg = '';
    let isValid = false;

    if (!userMobile?.numWithoutCode) {
      mobileMsg = 'Please enter your mobile number';
    } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
      mobileMsg = 'Please enter a valid mobile number';
    }
    if (!mobileMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        mobile: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        mobile: mobileMsg,
      });
      return false;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    if (formValidation()) {
      setLeadNote('Book Demo - Course Page - Want to know more');
      setDownloadCrs(false);
      setShowLeadModal(true);
      setLeadHeading('Talk to Program Advisor');
    }
  }

  return (
    <section className="py-lg-80 py-64 apply-now-section overflow-hidden">
      <div className="container-main container-w-xl-1202">
        <AnimatePresence>
          <div className="d-xl-flex align-items-center justify-content-between grid-gap-70">
            <div className="w-full max-w-lg-584 mx-xl-0 mx-auto mb-xl-0 mb-40">
              <motion.div
                initial={animationFromLeft.initial}
                whileInView={animationFromLeft.whileInView}
                transition={animationFromLeft.transition}
                viewport={{ once: true }}
                className="section-info text-color-1 mb-40 text-xl-start text-center"
              >
                <h2 className="fs-32 fw-600 lh-48 text-color-2 mb-0">
                  {heading || 'Still Confused? Want to know more?'}
                </h2>
              </motion.div>
              <form onSubmit={submitForm} className="d-md-flex align-items-start mb-40">
                <div className="mb-md-0 mb-24">
                  <div
                    className="text-start common-input-box mr-md-20 min-h-lg-68 min-h-58 
                mobile-no-input border-w border-color-2 bg-color-2 rounded-12 max-w-lg-336"
                  >
                    <PhoneInput
                      country={'in'}
                      value={userMobile.number}
                      onChange={handleOnChange}
                      disableCountryCode={false}
                      placeholder="Enter Mobile Number"
                      className="min-h-lg-68 min-h-58 rounded-12 px-20"
                    />
                  </div>
                  {(error && errorMessage?.mobile && (
                    <span className="fs-13 text-color-2 fw-500">{errorMessage?.mobile}</span>
                  )) ||
                    ''}
                </div>
                <button className="fs-lg-16 fs-16 fw-600 lh-lg-27 lh-24 min-h-lg-68 min-h-56 py-lg-20 py-16 rounded-12 border-w-2 border-color-24 bg-color-24 px-18 hover-shadow-4 w-full max-w-md-228">
                  {(details?.page_type == 2 && 'Talk to Program Advisor') || 'Book Demo Now'}
                </button>
              </form>
              <p className="fs-16 fw-400 lh-24 text-color-2 text-xl-start text-center d-xl-block d-none">
                {subHeading ||
                  'Secure your spot quickly—seats are filling fast!\nDon’t miss out—enroll now and take the first step towards transforming your career!'}
              </p>
            </div>
            <div className="w-full max-w-xl-517 mx-xl-0 max-w-500 mx-auto text-xl-start text-center">
              <span className="fs-14 fw-400 lh-24 text-color-2 mb-10 d-block">
                WSCUBE TECH GRADUATES HAVE BEEN HIRED BY
              </span>
              <div className="border-0 rounded-11 bg-color-2 company-logo-card transation-2 mr-xl-0 mr-2 mb-xl-0 mb-40">
                <div className="p-0">
                  <Image
                    src={`${process.env.IMG_PATH}images/home-images/company-logo/top-company-hiring.webp`}
                    width={517}
                    height={200}
                    alt="company-logo"
                    className="img-fluid rounded-11 w-auto"
                  />
                  {/* <ul className="list-unstyled d-flex gap-24">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
                </div>
              </div>
              <p className="fs-20 fw-400 lh-30 text-color-2 text-xl-start text-center d-xl-none d-block">
                {subHeading ||
                  'Secure your spot quickly—seats are filling fast!\nDon’t miss out—enroll now and take the first step towards transforming your career!'}
              </p>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

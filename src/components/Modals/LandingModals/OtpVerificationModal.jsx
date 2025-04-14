'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import { Modal } from 'react-bootstrap';
import { leadResendOtp, leadVerifyOtp } from '@/_services/modalService';
import dynamic from 'next/dynamic';

// Dynamically import OTPInput and ResendOTP
const OTPInput = dynamic(() => import('otp-input-react').then((mod) => mod.default), { ssr: false });
const ResendOTP = dynamic(() => import('otp-input-react').then((mod) => mod.ResendOTP), { ssr: false });

export default function OtpVerificationModal(props) {
  const {
    showOtpPopup,
    setShowOtpPopup,
    otpToken,
    userMobile,
    closePopup,
    seconds,
    setSeconds,
    setOtpToken,
    userId,
    downLoadPdf,
    modalType,
  } = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ otp: '' });
  const [oneTimePassword, setOneTimePassword] = useState('');
  const [otpVerificationLoading, setOtpVerificationLoading] = useState(false);

  // Validate OTP
  function validateOtp() {
    let isValid = false;
    let otpMessage = '';

    if (oneTimePassword == '') {
      otpMessage = 'Please enter 6-digit code.';
    }

    if (!otpMessage) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        otp: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        otp: otpMessage,
      });
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateOtp()) {
      setOtpVerificationLoading(true);
      const response = await leadVerifyOtp({
        one_time_password: oneTimePassword,
        request_token: otpToken,
        lm_user_id: userId,
      });
      if (response.status) {
        const data = response.result;
        toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
        closePopup();
        setOtpVerificationLoading(false);
        setOneTimePassword(null);
        setShowOtpPopup(false);
        if (modalType == 'Download_Curriculum') {
          // landingDownloadPDF(
          //   `${process.env.LANDING_IMG_PATH}images/landing-page/pdf/Digital-Marketing-Online-Course-Brochure.pdf`,
          //   'Digital Marketing Online Course Brochure.pdf'
          // );
          window.open(
            `${process.env.LANDING_IMG_PATH}images/landing-page/pdf/Digital-Marketing-Online-Course-Brochure.pdf`
          );
        }
        window.location.href = `/landing-page/digital-marketing/thank-you`;
      } else {
        toast.error(response?.message, toastConfig);
        setError(true);
        setErrorMessage({
          otp: response.message,
        });
        setOtpVerificationLoading(false);
      }
    }
  }

  // Resend OTP
  async function resendOtp() {
    let interval = 0;
    let counter = 30;
    setSeconds(30);
    setOneTimePassword(null);
    const response = await leadResendOtp({
      mobile_number: userMobile?.numWithoutCode,
    });
    if (response?.status) {
      setOtpToken(response?.data);
      toast.success(response?.message, toastConfig);
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        counter = counter - 1;
        if (counter == 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      toast.error(response?.message, toastConfig);
    }
  }

  function handleClosePopup() {
    setOneTimePassword(null);
    setShowOtpPopup(false);
    closePopup();
    setError(false);
    setErrorMessage({
      otp: '',
    });
  }

  return (
    <Modal
      show={showOtpPopup}
      centered
      size="lg"
      className="rounded-2xl p-2 bg-transparent overflow-hidden shadow-none landing-book-demo-modal"
    >
      <Modal.Body className="w-full position-relative p-1 z-1 max-w-600 mx-auto rounded-20">
        <div
          className="position-absolute top-0 start-0 h-full w-full z-[-1] rounded-20"
          style={{
            background: `linear-gradient(
                            281.17deg,
                            #00aeff 2.2%,
                            #ffd158 14.88%,
                            #ffffff 26.65%,
                            rgba(0, 174, 255, 0) 42.32%,
                            rgba(0, 174, 255, 0) 49.75%,
                            rgba(0, 174, 255, 0) 56.98%,
                            #ffffff 71.06%,
                            #ffd158 81.99%,
                            #00aeff 99.04%
                          )`,
            zIndex: '-1',
          }}
        ></div>
        <div className="rounded-20" style={{ background: '#110E38' }}>
          <div className="pt-16 pr-16">
            <button
              className="btn-close-icon d-flex justify-content-end border-0 mb-0 ms-auto bg-transparent"
              onClick={handleClosePopup}
            >
              <Image
                src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/fill-close.svg`}
                alt="closeImg"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="pt-lg-28 px-lg-60 pb-lg-60 p-16 pb-36">
            <div className="mb-lg-28 mb-16">
              <h3 className="fs-26 lh-44 text-color-2 fw-600 text-center mb-16">OTP Verification</h3>
              <p className="fw-400 lh-24 text-color-7 text-center">
                Please enter the 6-digit code sent to you at &nbsp; +{userMobile?.code}-{userMobile?.numWithoutCode}
              </p>
            </div>
            <div className="enter-otp-section">
              <form onSubmit={handleSubmit}>
                <div className="otp-form mb-28 d-flex justify-content-center">
                  <OTPInput
                    value={oneTimePassword}
                    onChange={setOneTimePassword}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    inputClassName="otp-number-input text-center label-color-8 fs-20 w-44 h-44 mr-14 text-color-1"
                  />
                </div>
                {error && errorMessage['otp'] ? (
                  <div className="invalid-feedback text-start d-block mb-2">{errorMessage['otp']}</div>
                ) : (
                  ''
                )}
                <button
                  type="submit"
                  className="rounded-12 w-full h-size-lg-62 h-size-48 fs-lg-18 fw-700 text-white download-curiculm-btn "
                  disabled={otpVerificationLoading ? true : false}
                >
                  {otpVerificationLoading ? 'Verifying...' : 'Verify & Proceed'}
                </button>
              </form>
              <div className="text-center mt-4 fs-16 lh-24 lh-24 text-color-7 mb-12">
                <span>Didnt receive OTP? </span>
                <Link href="#" className="text-decoration-none fs-14 label-color-4 fw-700">
                  {(seconds > 0 && <span>Resend OTP in {seconds} Seconds</span>) || (
                    <span onClick={resendOtp} className="">
                      Resend OTP
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

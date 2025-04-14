import React, { useEffect, useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
// import OTPInput, { ResendOTP } from 'otp-input-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import OTPInput and ResendOTP
const OTPInput = dynamic(() => import('otp-input-react').then((mod) => mod.default), { ssr: false });
const ResendOTP = dynamic(() => import('otp-input-react').then((mod) => mod.ResendOTP), { ssr: false });

function VerifyOtpModal(props) {
  const {
    setShowOtp,
    oneTimePassword,
    setOneTimePassword,
    errorOtp,
    renderTime,
    resendOtp,
    setTimerComplete,
    timerComplete,
    verifyOtp,
    isLoading,
    userMobile,
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal show={true} centered className="otp-modal">
        <Modal.Body className="p-xl-24 p-16">
          <Image
            src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
            width={24}
            height={24}
            alt="Close"
            onClick={() => setShowOtp(false)}
            className="img-fluid cursor-pointer position-absolute close-modal"
          />
          <div className="row min-h-lg-587 text-center text-lg-start">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="h-100 w-100 rounded-20 d-flex flex-column modal-left-container py-60">
                <div className="px-2 h-100 d-flex align-items-center justify-content-center">
                  <Image
                    src={'/images/modals/login-hero.svg'}
                    width={384}
                    height={322}
                    className="img-fluid"
                    alt="Image"
                  />
                </div>
                <div className="text-center mt-auto">
                  <p className="fs-25 lh-38 text-white mb-0">Let&apos;s enable fun learning experiences, together</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 py-lg-3 d-flex flex-column">
              <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-lg-16 mb-12">Verify OTP</h4>
              <p className="fs-16 lh-24 text-color-7 mb-lg-28 mb-16">
                Please enter the 6-digit code sent to you at <br />+{userMobile?.code}-{userMobile?.numWithoutCode}
              </p>
              <form onSubmit={verifyOtp} className="d-flex flex-column h-100">
                <div className="mb-16 otp-form text-center">
                  <div className="w-max-xontent inputs-otp">
                    <OTPInput
                      value={oneTimePassword}
                      onChange={setOneTimePassword}
                      autoFocus
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      id="otp"
                      className="otp-inputs justify-content-center justify-content-lg-start"
                    />
                    {errorOtp && (
                      <div className="pt-2">
                        <small className="text-danger fs-13 fw-500">{errorOtp}</small>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mx-auto w-max-content d-flex mx-lg-0 mb-3 mb-lg-0">
                  <span className="fs-14 lh-21 text-color-28">Didn’t receive OTP? </span>
                  {!timerComplete && <span className="fs-14 lh-21 text-color-1 ps-1">Resend OTP in </span>}
                  <ResendOTP
                    maxTime={30}
                    renderTime={renderTime}
                    onResendClick={resendOtp}
                    onTimerComplete={() => setTimerComplete(true)}
                    className={`resend-otp ${(!timerComplete && 'hide-resend') || ''}`}
                  />
                </div>
                <div className="text-center mt-auto">
                  <button
                    disabled={oneTimePassword?.length < 6 || isLoading}
                    className="blue-fill-btn min-h-56 px-36 fs-18 fw-600 rounded-12 w-100 submit-book-class mx-auto"
                  >
                    {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VerifyOtpModal;

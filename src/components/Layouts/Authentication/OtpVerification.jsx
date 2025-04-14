import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import { otpResend, otpVerify } from '@/_services/authService';
import Cookies from 'js-cookie';
import { useAuth } from '@/_context/AuthContext';
import { useRouter } from 'next/navigation';

const OTPInput = dynamic(() => import('otp-input-react').then((mod) => mod.default), { ssr: false });
const ResendOTP = dynamic(() => import('otp-input-react').then((mod) => mod.ResendOTP), { ssr: false });

export default function OtpVerification({
  userMobile,
  handleClosePopup,
  userEmail,
  otpToken,
  setOtpToken,
  openLoginPopup,
  verifyOtpFor,
  openRegisterPopup,
  openForgotPasswordPopup,
  openResetPasswordPopup,
  openRegisterEdit,
  setPopupState,
}) {
  const router = useRouter();
  const [errorOtp, setErrorOtp] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const isApplicationPage = Cookies.get('isApplicationPage');
  const { fetchUser } = useAuth();

  async function resendOtp() {
    // let params = {};
    // if (verifyOtpFor === 'FORGOT_PASSWORD') {
    //   params = {
    //     type: 'email',
    //     email: userEmail,
    //   };
    // } else {
    const params = {
      type: 'mobile',
      phone_number: userMobile?.numWithoutCode,
      country_code: userMobile?.code,
    };
    // }

    const response = await otpResend(params);
    if (response.status) {
      const data = response.result;
      toast.success(response.message, toastConfig);
      setOtpToken(data?.request_token);
      setTimerComplete(false);
      setOneTimePassword(null);
      setErrorOtp(null);
    } else {
      toast.error(response.message, toastConfig);
    }
  }

  const renderTime = (remainingTime) => {
    return (remainingTime && <span className="fs-14 text-color-1 ps-1">{remainingTime} sec</span>) || '';
  };

  async function verifyOtp(e) {
    e.preventDefault();
    if (oneTimePassword?.length == 6) {
      setIsLoading(true);
      // if (verifyOtpFor === 'FORGOT_PASSWORD') {
      //   const params = {
      //     type: 'email',
      //     email: userEmail,
      //     otp: oneTimePassword,
      //   };
      //   const verified = await otpVerify(params);
      //   if (verified?.status) {
      //     setIsLoading(false);
      //     openResetPasswordPopup();
      //     toast.success(verified?.message, toastConfig);
      //   } else {
      //     toast.error(verified?.message, toastConfig);
      //     setIsLoading(false);
      //   }
      // } else {
      const params = {
        type: 'mobile',
        country_code: userMobile?.code,
        phone_number: userMobile?.numWithoutCode,
        otp: oneTimePassword,
      };
      const verified = await otpVerify(params);
      if (verified?.status) {
        const token = verified?.result?.token;
        const isApplicationPage = Cookies.get('isApplicationPage');
        // Cookies.set('_token', token, { expires: 30 });
        Cookies.set('_token', token, {
          expires: 30,
          domain: `${process.env.COOKIES_DOMAIN}`,
        });
        if (!isApplicationPage) {
          setTimeout(() => {
            router.push(`${process.env.DASHBOARD_URL}`);
          }, 200);
        } else {
          Cookies.remove('isApplicationPage');
        }
        setIsLoading(false);
        fetchUser();
        handleClosePopup();
        toast.success('Welcome to Wscube Tech!', toastConfig);
      } else {
        setIsLoading(false);
        toast.error(verified?.message, toastConfig);
      }
      // }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsMounted(true);
    Cookies.remove('showLoginSideBar');
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {(!isApplicationPage && (
        <Image
          src={'/images/icons/close-grey-icon.svg'}
          width={24}
          height={24}
          alt="Close"
          onClick={handleClosePopup}
          className="img-fluid cursor-pointer close-modal mb-2xl-104 mb-lg-50 mb-40"
        />
      )) || <div className="mb-2xl-104 mb-lg-50 mb-40"></div>}
      <div className="px-lg-32 px-6 pb-40">
        <div className="mb-lg-40 mb-20">
          <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 mb-8">We've sent an OTP on</h4>
          <p className="fs-14 fw-400 lh-21 text-color-28 mb-0">
            {(verifyOtpFor == 'FORGOT_PASSWORD' && <span>{userEmail} </span>) || (
              <>
                +{userMobile?.code} {userMobile?.numWithoutCode}{' '}
              </>
            )}
            {(verifyOtpFor === 'LOGIN' && (
              <span
                onClick={() =>
                  setPopupState({
                    showLogin: true,
                    showRegister: false,
                    showForgetPassword: false,
                    showResetPassword: false,
                    showOtp: false,
                  })
                }
                className="text-color-3 cursor-pointer"
              >
                Edit
              </span>
            )) ||
              (verifyOtpFor === 'FORGOT_PASSWORD' && (
                <span
                  onClick={() =>
                    setPopupState({
                      showLogin: false,
                      showRegister: false,
                      showForgetPassword: true,
                      showResetPassword: false,
                      showOtp: false,
                    })
                  }
                  className="text-color-3 cursor-pointer"
                >
                  Edit
                </span>
              )) || (
                <span
                  onClick={() =>
                    setPopupState({
                      showLogin: false,
                      showRegister: true,
                      showForgetPassword: false,
                      showResetPassword: false,
                      showOtp: false,
                    })
                  }
                  className="text-color-3 cursor-pointer"
                >
                  Edit
                </span>
              )}
          </p>
        </div>
        <div className="user-top-verification">
          <form onSubmit={verifyOtp} className="d-flex flex-column h-100">
            <div className="mb-12 otp-form text-center">
              <div className="w-max-content inputs-otp">
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
            <div className="d-flex mb-2xl-40 mb-32 text-start">
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
                disabled={oneTimePassword?.length < 6 || isLoading || !oneTimePassword}
                className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 rounded-12 w-100 submit-book-class mx-auto"
              >
                {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

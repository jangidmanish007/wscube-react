'use client';
import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail, validName } from '@/_helper/Regex';
import { userRegister } from '@/_services/authService';
// import { LeadStoreApi, getLeadCoursesList } from '@/_services/FormsApi';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import successAnimation from '@/components/Layouts/Common/sucessful.json';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export default function SignUp(props) {
  const {
    userMobile,
    setUserMobile,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    handleClosePopup,
    openLoginPopup,
    openOtpPopup,
    setVerifyOtpFor,
    setCheckYourEmail,
    checkYourEmail,
  } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const isApplicationPage = Cookies.get('isApplicationPage');
  const handleMobileNumber = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let nameMsg = '';
    let mobileMsg = '';
    let emailMsg = '';
    let isValid = false;

    if (!userName) {
      nameMsg = 'Please enter name';
    }
    if (userName && !validName(userName)) {
      nameMsg = 'Please enter valid name';
    }
    if (!userMobile?.numWithoutCode) {
      mobileMsg = 'Please enter your mobile number';
    } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
      mobileMsg = 'Please enter a valid mobile number';
    }
    if (!userEmail) {
      emailMsg = 'Please enter email';
    }
    if (userEmail && !validEmail(userEmail)) {
      emailMsg = 'Please enter valid email';
    }

    if (!nameMsg && !mobileMsg && !emailMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        mobile: '',
        email: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        mobile: mobileMsg,
        email: emailMsg,
      });
      return false;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let leadMode = 1;
    if (formValidation()) {
      setIsLoading(true);
      const params = {
        full_name: userName,
        country_code: userMobile?.code,
        phone_number: userMobile?.numWithoutCode,
        email: userEmail,
        whatsapp_updates: true,
      };
      const user = await userRegister(params);
      if (user?.status) {
        if (userMobile?.code == '91') {
          toast.success('OTP sent successfully!', toastConfig);
          openOtpPopup();
        } else {
          toast.success('Mail sent successfully!', toastConfig);
          setCheckYourEmail(true);
          // handleClosePopup();
        }
        setVerifyOtpFor('SIGN_UP');
      } else {
        toast.error(user?.message, toastConfig);
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitForm(e);
    }
  };

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
      )) || <div className="mb-lg-5"></div>}
      {(checkYourEmail && (
        <div className="text-center px-lg-32 px-6 pb-40">
          <div className="max-w-lg-300 min-h-lg-70 max-w-300 mx-auto mb-10">
            <Lottie animationData={successAnimation} loop={true} />
          </div>
          <div className="mb-lg-24 mb-20">
            <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 lh-29 mb-12">Check your email</h4>
            <p className="fs-14 fw-400 lh-21 text-color-10 mb-20">
              We sent you an email with instructions to set your password.
            </p>
            <p className="fs-14 fw-400 lh-21 text-color-10">
              If you haven't received this email within a few minutes, please check your spam folder.
            </p>
          </div>
          <button
            onClick={openLoginPopup}
            className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 w-100 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-24"
          >
            Back to login
          </button>
        </div>
      )) || (
        <div className="px-lg-30 px-6 pb-40">
          <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 lh-29 mb-2xl-24 mb-20">Create an account</h4>
          <form onSubmit={submitForm}>
            <div className="mb-2xl-32 mb-26">
              <label htmlFor="studentName" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                Full Name <span className="text-color-11">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value.trimStart().replace(/  +/g, ' '))}
                className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                autocomplete="off"
              />
              {(error && errorMessage?.name && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
              )) ||
                ''}
            </div>
            <div className="mb-2xl-32 mb-26">
              <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                Email <span className="text-color-11">*</span>
              </label>
              <input
                type="email"
                id="studentEmail"
                placeholder="Enter your email"
                value={userEmail || ''}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                autocomplete="off"
              />
              {(error && errorMessage?.email && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
              )) ||
                ''}
            </div>
            <div className="mobile-with-country mb-40 flag-gap">
              <label htmlFor="studentPhone" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                Mobile Number <span className="text-color-11">*</span>
              </label>
              <PhoneInput
                country={'in'}
                value={userMobile?.number}
                onChange={handleMobileNumber}
                disableCountryCode={false}
                placeholder="Enter your mobile number"
                onKeyDown={handleKeyDown}
              />
              {(error && errorMessage?.mobile && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
              )) ||
                ''}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="blue-fill-btn h-size-lg-56 h-size-46 px-36 w-100 fs-lg-18 fs-16 fw-lg-600 fw-500 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-20"
            >
              {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
              Sign Up
            </button>
          </form>
          <p className="fs-14 fw-400 lh-21 text-color-34 mb-24 text-capitalize">
            By continuing, you agree to WsCubeTech's
            <Link
              href={'/terms-and-conditions'}
              className="text-color-34 text-decoration-underline mx-1 d-inline-block"
            >
              Terms of Service
            </Link>
            and
            <Link href={'/privacy-policy'} className="text-color-34 text-decoration-underline mx-1">
              Privacy Policy.
            </Link>
          </p>
          <p className="fs-14 fw-400 lh-21 mb-0 text-color-10">
            Already a member?
            <span className="text-color-3 fw-600 ml-4 cursor-pointer" onClick={openLoginPopup}>
              Log In
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

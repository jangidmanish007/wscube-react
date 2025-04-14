import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail, validName } from '@/_helper/Regex';
import { forgotPasswordApi } from '@/_services/authService';
// import { LeadStoreApi, getLeadCoursesList } from '@/_services/FormsApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import successAnimation from '@/components/Layouts/Common/sucessful.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export default function ForgotPassword(props) {
  const {
    userEmail,
    setUserEmail,
    handleClosePopup,
    openLoginPopup,
    setVerifyOtpFor,
    setCheckYourEmail,
    checkYourEmail,
  } = props;
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function formValidation() {
    let isValid = true;
    const errors = {};

    if (!userEmail) {
      errors.email = 'Please enter email';
      isValid = false;
    }
    if (userEmail && !validEmail(userEmail)) {
      errors.email = 'Please enter valid email';
      isValid = false;
    }

    setError(!isValid);
    setErrorMessage(errors);
    return isValid;
  }

  async function submitForm(e) {
    e.preventDefault();
    if (formValidation()) {
      setIsLoading(true);
      const params = {
        email: userEmail,
      };
      const res = await forgotPasswordApi(params);
      if (res.status) {
        toast.success(res?.message, toastConfig);
        setVerifyOtpFor('FORGOT_PASSWORD');
        setCheckYourEmail(true);
        // openOtpPopup();
        // handleClosePopup();
        setIsLoading(false);
      } else {
        toast.error(res?.message, toastConfig);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Image
        src={'/images/icons/close-grey-icon.svg'}
        width={24}
        height={24}
        alt="Close"
        onClick={handleClosePopup}
        className="img-fluid cursor-pointer close-modal mb-xl-104 mb-lg-90 mb-60"
      />
      {(checkYourEmail && (
        <div className="text-center px-lg-32 px-6 pb-40">
          <div className="max-w-lg-300 min-h-lg-70 max-w-300 mx-auto mb-10">
            <Lottie animationData={successAnimation} loop={true} />
          </div>
          <div className="mb-lg-24 mb-20">
            <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-12">Check your email</h4>
            <p className="fs-14 fw-400 lh-21 text-color-10 mb-20">
              We sent you an email with instructions to reset your password.
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
        <div className="px-lg-32 px-6 pb-40">
          <div className="d-flex justify-content-between align-items-center mb-lg-24 mb-20">
            <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-0">Forgot Password</h4>
          </div>
          <form onSubmit={submitForm}>
            <div className="mb-32">
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
              />
              {(error && errorMessage?.email && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
              )) ||
                ''}
            </div>
            <button
              disabled={isLoading}
              className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 w-100 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-24"
            >
              {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
              Reset Password
            </button>
          </form>
          <p className="fs-14 fw-400 lh-21 mb-40 text-color-10">
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

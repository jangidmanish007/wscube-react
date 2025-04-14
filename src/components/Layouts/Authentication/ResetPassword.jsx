import Image from 'next/image';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'react-phone-input-2/lib/style.css';
import successAnimation from '@/components/Layouts/Common/sucessful.json';
import { resetPasswordApi } from '@/_services/authService';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export default function ResetPassword(props) {
  const { handleClosePopup, openLoginPopup, resetSuccessFully, setResetSuccessfully, otpToken } = props;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({ newPass: false, confirmPass: false });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function formValidation() {
    let passwordMsg = '';
    let confirmPassMsg = '';
    let isValid = false;

    if (!newPassword) {
      passwordMsg = 'Please enter your password';
    }
    if (newPassword) {
      if (String(newPassword).length <= 5) {
        passwordMsg = 'min length 6 digits';
      }
    }

    if (!confirmPassword) {
      confirmPassMsg = 'Please enter your password';
    }

    if (confirmPassword) {
      if (newPassword != confirmPassword) {
        confirmPassMsg = 'does not match';
      }
    }

    if (!passwordMsg && !confirmPassMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        newPass: '',
        ConfirmPass: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        newPass: passwordMsg,
        ConfirmPass: confirmPassMsg,
      });
      return false;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    if (formValidation()) {
      setIsLoading(true);
      const params = {
        token: otpToken,
        password: newPassword,
      };
      const res = await resetPasswordApi(params);
      if (res.status) {
        setIsLoading(false);
        const data = res.result;
        toast.success(res?.message, toastConfig);
        setResetSuccessfully(true);
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
        className="img-fluid cursor-pointer close-modal mb-2xl-104 mb-lg-50 mb-40"
      />
      <div className="px-lg-32 px-6 pb-40">
        {!resetSuccessFully && (
          <div className="mb-lg-24 mb-20">
            <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 lh-29 mb-12">Set your new Password</h4>
            <p className="fs-14 fw-400 lh-21 text-color-10">Please enter your password and confirm password.</p>
          </div>
        )}
        {(resetSuccessFully && (
          <div className="text-center">
            <div className="max-w-lg-300 min-h-lg-70 max-w-300 mx-auto mb-40">
              <Lottie animationData={successAnimation} loop={true} />
            </div>
            <div className="mb-lg-24 mb-20">
              <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 lh-29 mb-12">
                Password reset successfully!
              </h4>
              <p className="fs-14 fw-400 lh-21 text-color-10">Please login to your account again.</p>
            </div>
            <button
              onClick={openLoginPopup}
              className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 w-100 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-24"
            >
              Login Now
            </button>
          </div>
        )) || (
          <form onSubmit={submitForm}>
            <div className="mb-32">
              <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                Password <span className="text-color-11">*</span>
              </label>
              <div className="position-relative">
                <input
                  type={(showPassword.newPass && 'text') || 'password'}
                  placeholder="Enter Password"
                  name="password"
                  value={newPassword || ''}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-100 common-form-control h-size-57 rounded-12 pl-16 pr-38 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                  autocomplete="off"
                />
                <span
                  className="password-icon input-icon position-absolute top-50"
                  style={{ right: '15px', transform: 'translateY(-50%)' }}
                >
                  <Image
                    width="18"
                    height="18"
                    src={`/images/icons/${showPassword.newPass ? 'eye-close' : 'eye-open'}.svg`}
                    className="fs-18 fw-500 cursor-pointer base-color"
                    alt="eye-toggle"
                    onClick={() => setShowPassword({ ...showPassword, newPass: !showPassword.newPass })}
                  />
                </span>
              </div>
              {(error && errorMessage?.newPass && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.newPass}</span>
              )) ||
                ''}
            </div>
            <div className="mb-40">
              <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                Confirm Password <span className="text-color-11">*</span>
              </label>
              <div className="position-relative">
                <input
                  type={showPassword.confirmPass ? 'text' : 'password'}
                  placeholder="Enter Confirm Password"
                  name="password"
                  value={confirmPassword || ''}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-100 common-form-control h-size-57 rounded-12 pl-16 pr-38 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                  autocomplete="off"
                />
                <span
                  className="password-icon input-icon position-absolute top-50"
                  style={{ right: '15px', transform: 'translateY(-50%)' }}
                >
                  <Image
                    width="18"
                    height="18"
                    src={`/images/icons/${showPassword.confirmPass ? 'eye-close' : 'eye-open'}.svg`}
                    className="fs-18 fw-500 cursor-pointer base-color"
                    alt="eye-toggle"
                    onClick={() => setShowPassword({ ...showPassword, confirmPass: !showPassword.confirmPass })}
                  />
                </span>
              </div>
              {(error && errorMessage?.ConfirmPass && (
                <span className="fs-13 text-danger fw-500">{errorMessage?.ConfirmPass}</span>
              )) ||
                ''}
            </div>
            <button
              disabled={isLoading}
              className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 w-100 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-24"
            >
              {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
              Done
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

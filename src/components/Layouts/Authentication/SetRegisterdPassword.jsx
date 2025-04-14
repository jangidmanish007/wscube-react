'use client';
import { toastConfig } from '@/_helper/PluginSettings';
import { isValidPassword } from '@/_helper/Regex';
import { checkResetUrlApi, resetPasswordApi } from '@/_services/authService';
import AuthButton from '@/components/Utilities/AuthButton';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function SetRegisterdPassword({ emailToken }) {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState({ newPass: false, confirmPass: false });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tokenExpiredLoading, setTokenExpiredLoading] = useState(true);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    if (emailToken) {
      checkTokenExpired();
    }
  }, [emailToken]);

  async function checkTokenExpired() {
    const params = {
      token: emailToken,
    };
    const response = await checkResetUrlApi(params);
    if (response?.status) {
      setIsTokenExpired(false);
    } else {
      if (response?.message === 'Url is expired!') {
        setIsTokenExpired(true);
      } else {
        setIsTokenExpired(true);
      }
    }
    setTokenExpiredLoading(false);
  }

  function formValidation() {
    let passwordMsg = '';
    let confirmPassMsg = '';
    let isValid = false;

    if (!newPassword) {
      passwordMsg = 'Please enter your password';
    } else {
      const passwordError = isValidPassword(newPassword);
      if (passwordError) {
        passwordMsg = passwordError;
      }
    }

    if (!confirmPassword) {
      confirmPassMsg = 'Please enter your confirm password';
    }

    if (confirmPassword) {
      if (newPassword != confirmPassword) {
        confirmPassMsg = 'Password does not match';
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
        token: emailToken,
        password: newPassword,
      };
      const res = await resetPasswordApi(params);
      if (res.status) {
        const token = res.result?.token;
        const isApplicationPage = Cookies.get('isApplicationPage');
        setIsLoading(false);
        // Cookies.set('_token', token, { expires: 30 });
        Cookies.set('_token', token, {
          expires: 30,
          domain: `${process.env.COOKIES_DOMAIN}`,
        });
        toast.success('Welcome to Wscube Tech!', toastConfig);
        if (!isApplicationPage) {
          setTimeout(() => {
            router.push(`${process.env.DASHBOARD_URL}`);
          }, 200);
        } else {
          Cookies.remove('isApplicationPage');
        }
        setIsLoading(false);
      } else {
        if (res?.message === 'This url is expired!') {
          setIsTokenExpired(true);
          toast.error(res?.message, toastConfig);
        } else {
          toast.error(res?.message, toastConfig);
        }
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="bg-color-3 h-size-80">
        <div className="container-main container-w-xl-1202"></div>
      </section>
      <section className={`py-40 d-flex align-items-center`} style={{ minHeight: '85vh' }}>
        {(tokenExpiredLoading && <></>) || (
          <>
            {(isTokenExpired && (
              <div className="max-w-614 w-full mx-auto position-relative min-h-380">
                <div className="text-center mb-md-5 mb-4">
                  <Image
                    src={`/images/token-expired-image.svg`}
                    width={600}
                    height={500}
                    className="img-fluid w-full max-w-614"
                    alt="no-result-img"
                  />
                </div>
                <div
                  className="position-absolute start-50 w-full max-w-525 px-16"
                  style={{ transform: `translateX(-50%)`, bottom: '15%' }}
                >
                  <div className="text-center">
                    <h1 className="text-capitalize fs-25 fw-600 lh-27 text-color-1 mb-12 text-center">
                      Whoops, that's an expired link
                    </h1>
                    <p className="fs-16 fw-400 lh-21 text-color-10 mb-20">
                      This password reset link is expired for security reasons. Get a new link by trying
                      <AuthButton
                        title={'Sign up'}
                        btnClass={'border-0 bg-transparent px-1 text-color-3 fw-500 outline-0'}
                        openPopup={'SIGN_UP'}
                      />
                      again.
                    </p>
                  </div>
                  <div className="text-center d-flex justify-content-center">
                    <AuthButton
                      title={'Return to Login'}
                      btnClass={
                        'px-20 py-2 border-w-2 min-h-40 bg-color-3 text-color-2 reverse-shadow-2 rounded-12 fs-14 lh-21 fw-600'
                      }
                      openPopup={'LOGIN_WITH_EMAIL'}
                    />
                  </div>
                </div>
              </div>
            )) || (
              <div className="px-lg-32 px-16 pb-40 w-full max-w-520 mx-auto">
                <div className="mb-lg-24 mb-20">
                  <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-12">Create your new Password</h4>
                  <p className="fs-14 fw-400 lh-21 text-color-10">Please enter your password and confirm password.</p>
                </div>
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
                    Create Password
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

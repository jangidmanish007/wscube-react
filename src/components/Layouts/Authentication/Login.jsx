import { useAuth } from '@/_context/AuthContext';
import { toastConfig } from '@/_helper/PluginSettings';
import { isValidPassword, validEmail } from '@/_helper/Regex';
import { userLogin } from '@/_services/authService';
import Cookies from 'js-cookie';
// import { LeadStoreApi, getLeadCoursesList } from '@/_services/FormsApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

export default function Login(props) {
  const {
    userMobile,
    userEmail,
    setUserEmail,
    setUserMobile,
    setOtpToken,
    loginWithEmail,
    setLoginWithEmail,
    handleClosePopup,
    openRegisterPopup,
    openOtpPopup,
    openForgotPasswordPopup,
    setVerifyOtpFor,
  } = props;

  const { fetchUser } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const isApplicationPage = Cookies.get('isApplicationPage');
  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  function formValidation() {
    let isValid = true;
    const errors = {};

    if (loginWithEmail) {
      if (!userEmail) {
        errors.email = 'Please enter email';
        isValid = false;
      }
      if (userEmail && !validEmail(userEmail)) {
        errors.email = 'Please enter valid email';
        isValid = false;
      }

      if (!password) {
        errors.pass = 'Please enter your password';
        isValid = false;
      }
    } else {
      const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
      if (!userMobile?.numWithoutCode) {
        errors.mobile = 'Please enter your mobile number';
        isValid = false;
      } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
        errors.mobile = 'Please enter a valid mobile number';
        isValid = false;
      }
    }

    setError(!isValid);
    setErrorMessage(errors);
    return isValid;
  }

  async function submitForm(e) {
    e.preventDefault();
    if (formValidation()) {
      setIsLoading(true);
      if (loginWithEmail) {
        const params = {
          type: 'email',
          email: userEmail,
          password: password,
        };
        const response = await userLogin(params);
        if (response?.status) {
          setIsLoading(false);
          const token = response?.result?.token;
          if (token) {
            // Cookies.set('_token', token, { expires: 30 });
            const isApplicationPage = Cookies.get('isApplicationPage');
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
            fetchUser();
            handleClosePopup();
            toast.success(response?.message, toastConfig);
          } else {
            toast.error(response?.message, toastConfig);
          }
        } else {
          setIsLoading(false);
          toast.error(response?.message, toastConfig);
        }
      } else {
        if (userMobile?.code === '91') {
          const params = {
            type: 'mobile',
            country_code: userMobile?.code,
            phone_number: userMobile?.numWithoutCode,
          };
          const user = await userLogin(params);
          if (user?.status) {
            setIsLoading(false);
            if (userMobile?.code === '91') {
              toast.success(user?.message, toastConfig);
              openOtpPopup();
              setVerifyOtpFor('LOGIN');
            } else {
              toast.success('Please login via email', toastConfig);
            }
          } else {
            setIsLoading(false);
            toast.error(user?.message, toastConfig);
          }
        } else {
          toast.error('Please login using your email address.', toastConfig);
        }
      }
      setIsLoading(false);
    }
  }

  function resetFeilds() {
    setError('');
    setErrorMessage('');
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
    setPassword('');
    setUserEmail('');
  }

  function handleOpenLoginWithEmail() {
    setLoginWithEmail(true);
    resetFeilds();
  }

  function handleCloseWithEmail() {
    setLoginWithEmail(false);
    resetFeilds();
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
      )) || <div className="mb-2xl-104 mb-lg-50 mb-40"></div>}

      <div className="px-lg-32 px-6 pb-40">
        <div className="d-flex justify-content-between align-items-center mb-lg-24 mb-20">
          <h4 className="fs-2xl-25 fs-23 fw-600 text-color-1 lh-2xl-38 lh-29 mb-0">Login</h4>
          {(!loginWithEmail && (
            <span
              className="fs-14 fw-600 lh-21 cursor-pointer"
              style={{ color: '#0F62FE' }}
              onClick={() => handleOpenLoginWithEmail()}
            >
              Use email, instead
            </span>
          )) || (
            <span
              className="fs-14 fw-600 lh-21 cursor-pointer"
              style={{ color: '#0F62FE' }}
              onClick={() => handleCloseWithEmail()}
            >
              Use mobile number, instead
            </span>
          )}
        </div>
        <form onSubmit={submitForm}>
          {(!loginWithEmail && (
            <>
              <div className="mobile-with-country mb-2xl-32 mb-26 flag-gap">
                <label htmlFor="studentPhone" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Mobile Number <span className="text-color-11">*</span>
                </label>
                <PhoneInput
                  country={'in'}
                  value={userMobile?.number}
                  onChange={handleOnChange}
                  disableCountryCode={false}
                  placeholder="Enter your mobile number"
                  onKeyDown={handleKeyDown}
                />
                {(error && errorMessage?.mobile && (
                  <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
                )) ||
                  ''}
              </div>
            </>
          )) || (
            <>
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
              <div className="mb-12">
                <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Password <span className="text-color-11">*</span>
                </label>
                <div className="position-relative">
                  <input
                    type={(showPassword && 'text') || 'password'}
                    placeholder="Enter your password"
                    name="password"
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
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
                      src={`/images/icons/${(showPassword && 'eye-close') || 'eye-open'}.svg`}
                      className="fs-18 fw-500 cursor-pointer base-color"
                      alt="eye-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </span>
                </div>
                {(error && errorMessage?.pass && (
                  <span className="fs-13 text-danger fw-500">{errorMessage?.pass}</span>
                )) ||
                  ''}
              </div>
              <p className="text-end fs-14 fw-400 lh-21 mb-2xl-40 mb-32" style={{ color: '#1A1A1A' }}>
                Credentials not working?
                <span className="text-color-3 fw-600 ml-4 cursor-pointer" onClick={openForgotPasswordPopup}>
                  Forgot password
                </span>
              </p>
            </>
          )}
          <button
            type="submit"
            className="blue-fill-btn h-size-lg-56 h-size-46 px-36 fs-lg-18 fs-16 fw-lg-600 fw-500 w-100 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto mb-24"
            disabled={(isLoading && true) || false}
          >
            {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
            Login
          </button>

          <p className={`fs-14 fw-400 lh-21 text-color-10 ${(isApplicationPage && 'mb-20') || 'mb-40'}`}>
            Don't have an account?
            <span className="text-color-3 fw-600 ml-4 cursor-pointer" onClick={openRegisterPopup}>
              Create an account
            </span>
          </p>
          {isApplicationPage && (
            <p className="fs-14 text-color-17">
              <span className="fw-600">Note:</span> Please use your registered mobile number to log in.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

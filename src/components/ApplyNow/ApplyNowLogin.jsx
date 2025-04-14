import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail } from '@/_helper/Regex';
import { userLoginForm } from '@/_services/applicationFormServices';
import { userLogin } from '@/_services/authService';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

export default function ApplyNowLogin(props) {
  const {
    userMobile,
    userEmail,
    setUserEmail,
    setUserMobile,
    loginWithEmail,
    setLoginWithEmail,
    openOtpPopup,
    country,
    courseName,
    stName,
  } = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
          is_verify: true,
        };
        const response = await userLoginForm(params);
        if (response?.status) {
          toast.success(response?.message, toastConfig);
          setIsLoading(false);
          openOtpPopup();
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
          const user = await userLoginForm(params);
          if (user?.status) {
            toast.success(user?.message, toastConfig);
            setIsLoading(false);
            openOtpPopup();
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

  useEffect(() => {
    if (country != '91') {
      setLoginWithEmail(true);
    }
  }, [country]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitForm(e);
    }
  };

  return (
    <div>
      <div className="px-lg-32 px-6 pb-40 pt-60">
        {courseName && (
          <>
            <div className="mb-lg-24 mb-20">
              <h4 className="fs-22 fw-600 text-color-1 lh-28 mb-1">Program Applied:</h4>
              <p className="fs-16 fw-400 text-color-1 m-0">{courseName}</p>
            </div>
            <div className="w-100 h-size-1 bg-color-44 mb-24"></div>
          </>
        )}
        {/* {stName && ( */}
        <div>
          <h5 className="fw-600 text-capitalize fs-22 lh-33 text-color-1 mb-2 line-clamp-2">
            Hi {(stName && stName) || 'Guest User'},
          </h5>
        </div>
        {/* )} */}
        <p className="mb-24 fs-14 lh-21 text-color-10">
          Congratulations, you are just one step away from completing your Application Process. Signin & submit required
          details
        </p>
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
                  disabled={userMobile?.number}
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
                  disabled={userEmail}
                />
                {(error && errorMessage?.email && (
                  <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
                )) ||
                  ''}
              </div>
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
        </form>
      </div>
    </div>
  );
}

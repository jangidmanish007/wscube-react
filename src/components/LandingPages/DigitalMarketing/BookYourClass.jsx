import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function BookYourClass(props) {
  const { openScheduleModal, handleOnChange, userMobile } = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    mobile: '',
  });

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

  return (
    <section className="bg-color-41 py-lg-116 py-72">
      <div className="container-main container-w-xl-1092">
        <div className="section-heading text-center mb-60">
          <h2 className="text-color-33 fs-28 lh-33 fw-500 mb-20">Secure Your Spot Now!</h2>
          <p className="fs-16 fw-400 text-color-36 mb-0 opacity-75">
            Don't miss out on the opportunity to kickstart your career in Digital Marketing. Seats are filling fast!
          </p>
        </div>
        <div className="d-lg-flex max-w-lg-883 w-full mx-auto justify-content-center text-center">
          <div className="w-full max-w-460 mb-lg-0 mb-16 mx-auto">
            <div
              className="text-start form-group common-input-box-2 mobile-no-input-2 form-group min-h-75 pt-8 pl-20 pb-20 pr-20 rounded-12"
              style={{ border: '1px solid #FFFFFF33' }}
            >
              <label htmlFor="phone-input" className="fs-12 fw-400 text-white">
                Mobile Number :
              </label>
              <PhoneInput
                country={'in'}
                value={userMobile.number || '91'}
                onChange={handleOnChange}
                disableCountryCode={false}
              />
              {error && errorMessage.mobile && (
                <p className="text-danger fs-14 error-message my-1">{errorMessage.mobile}</p>
              )}
            </div>
          </div>
          <button
            className="ml-lg-28 book-demo-btn rounded-12 w-full max-w-lg-410 max-w-250 py-lg-20 
            py-16 px-12 fs-lg-18 fs-16 fw-600 text-color-1 common-fill-btn btn-hover-layer text-color-26"
            onClick={() => openScheduleModal('Schedule_Demo')}
          >
            Book Demo Now
          </button>
        </div>
      </div>
    </section>
  );
}

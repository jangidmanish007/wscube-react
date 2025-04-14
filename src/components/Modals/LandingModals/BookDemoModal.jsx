'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import { validEmail } from '@/_helper/Regex';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import { Modal } from 'react-bootstrap';
import { leadStore } from '@/_services/modalService';
import OtpVerificationModal from './OtpVerificationModal';

export default function BookDemoModal(props) {
  const {
    showScheduleClassModal,
    setShowScheduleClassModal,
    modalType,
    setUserMobile,
    userMobile,
    handleOnChange,
    parameters,
  } = props;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [otpToken, setOtpToken] = useState(null);
  const [userId, setUserId] = useState('');
  const [bookDemoBtnLoading, setBookDemoBtnLoading] = useState(false);
  const utmMedium = parameters?.utm_medium;
  const utmSource = parameters?.utm_source;
  const utmCampaign = parameters?.utm_campaign;
  const utmAdset = parameters?.utm_adset;
  const utmAd = parameters?.utm_ad;
  const utmTerm = parameters?.utm_term;
  const utmDevice = parameters?.utm_device;
  const utmDevicemodel = parameters?.utm_device_modal;
  const utmNetwork = parameters?.utm_network;
  const gClid = parameters?.gclid;

  const utmChannel = parameters?.utm_channel;
  const utmPostId = parameters?.utm_post_id;
  const utmPage = parameters?.utm_page;

  useEffect(() => {
    if (buttonClicked) {
      formValidation();
    }
  }, [userName, buttonClicked, userEmail]);

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let mobileMsg = '';
    let nameMsg = '';
    let userEmailMsg = '';
    let isValid = false;

    if (userName.length < 3) {
      nameMsg = 'Please enter your name';
    }

    if (!userEmail) {
      userEmailMsg = 'Please enter your email';
    } else if (!validEmail(userEmail)) {
      userEmailMsg = 'Please enter valid email';
    }

    if (!userMobile?.numWithoutCode) {
      mobileMsg = 'Please enter your mobile number';
    } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
      mobileMsg = 'Please enter a valid mobile number';
    }

    if (!mobileMsg && !nameMsg && !userEmailMsg) {
      isValid = true;
    }
    if (isValid) {
      setError(true);
      setErrorMessage({
        mobile: '',
        name: '',
        userEmail: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        mobile: mobileMsg,
        name: nameMsg,
        userEmail: userEmailMsg,
      });
      return false;
    }
  }

  function closePopup() {
    setButtonClicked(false);
    setShowScheduleClassModal(false);
    setBookDemoBtnLoading(false);
    setUserName('');
    setUserMobile({ number: '', code: '91', numWithoutCode: '' });
    setUserEmail('');
    setShowOtpPopup(false);
    setError(false);
    setErrorMessage({
      mobile: '',
      name: '',
      userEmail: '',
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!buttonClicked) {
      setButtonClicked(true);
    }
    if (formValidation()) {
      setBookDemoBtnLoading(true);
      const params = {
        lead_source: 5,
        parent_lead_type: 1,
        lead_type: 3,
        course_id: 10,
        mobile_number: userMobile?.numWithoutCode,
        country_code: userMobile?.code,
        email: userEmail,
        name: userName,
        lead_note:
          (modalType == 'Download_Curriculum' && 'Lead For - Download Brochure') || 'Lead For - Book Free Demo',
        lead_mode: 1,
        course_type_request: 'Online',
      };

      if (utmSource) {
        params.utm_source = utmSource;
      }
      if (utmMedium) {
        params.utm_medium = utmMedium;
      }
      if (utmCampaign) {
        params.utm_campaign = utmCampaign;
      }
      if (utmAdset) {
        params.utm_adset = utmAdset;
      }
      if (utmAd) {
        params.utm_ad = utmAd;
      }
      if (utmTerm) {
        params.utm_term = utmTerm;
      }

      if (utmDevice) {
        params.utm_device = utmDevice;
      }
      if (utmDevicemodel) {
        params.utm_device_modal = utmDevicemodel;
      }
      if (utmNetwork) {
        params.utm_network = utmNetwork;
      }
      if (gClid) {
        params.gclid = gClid;
      }

      if (utmChannel) {
        params.utm_channel = utmChannel;
      }

      if (utmPostId) {
        params.utm_post_id = utmPostId;
      }

      if (utmPage) {
        params.utm_page = utmPage;
      }

      const response = await leadStore(params);
      if (response.status == true || response.status == false) {
        if (response?.result.request_token) {
          setOtpToken(response?.result.request_token);
          setUserId(response?.result.lm_user_id);
          setShowScheduleClassModal(false);
          setBookDemoBtnLoading(false);
          if (userMobile?.code == 91) {
            setShowOtpPopup(true);
            let interval = 0;
            let counter = 30;
            interval = setInterval(() => {
              setSeconds((seconds) => seconds - 1);
              counter = counter - 1;
              if (counter == 0) {
                clearInterval(interval);
              }
            }, 1000);
          } else {
            toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
            closePopup();
            if (modalType == 'Download_Curriculum') {
              window.open(
                `${process.env.LANDING_IMG_PATH}images/landing-page/pdf/Digital-Marketing-Online-Course-Brochure.pdf`
              );
            }
            window.location.href = `/landing-page/digital-marketing/thank-you`;
          }
        } else {
          setShowScheduleClassModal(false);
          toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
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
          closePopup();
        }
      } else {
        toast.error(response?.message, toastConfig);
        setError(true);
        setErrorMessage({
          mobile: response.message,
        });
        setBookDemoBtnLoading(false);
      }
    }
  }

  return (
    <>
      <OtpVerificationModal
        showOtpPopup={showOtpPopup}
        setShowOtpPopup={setShowOtpPopup}
        otpToken={otpToken}
        userName={userName}
        userEmail={userEmail}
        userMobile={userMobile}
        closePopup={closePopup}
        setSeconds={setSeconds}
        seconds={seconds}
        setOtpToken={setOtpToken}
        userId={userId}
        modalType={modalType}
      />
      <Modal
        show={showScheduleClassModal}
        onHide={closePopup}
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
                onClick={closePopup}
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
              <h3
                className="fs-26 lh-44 text-color-2 fw-600  text-center mb-lg-40 mb-16"
                style={{ letterSpacing: '-1px' }}
              >
                {(modalType == 'Download_Curriculum' && 'Download Course Brochure!') || 'Book Your Demo Class!'}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-40">
                  <div className="mb-28">
                    <label variant="span" color="blue-gray" className="fs-12 fw-400 mb-6 text-color-2">
                      Full Name
                    </label>
                    <input
                      className="w-full form-group min-h-48 bg-white rounded-8 p-8 fs-16 text-color-1 book-demo-input-box"
                      placeholder="Full Name"
                      name="name"
                      value={userName || ''}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    {error && errorMessage.name && (
                      <p className="text-danger text-12 text-gray-500 my-1">{errorMessage.name}</p>
                    )}
                  </div>
                  <div className="mb-28">
                    <label variant="span" color="blue-gray" className="fs-12 fw-400 mb-6 text-color-2">
                      Email Address
                    </label>
                    <input
                      className="w-full form-group min-h-48 bg-white rounded-8 p-8 fs-16 text-color-1 book-demo-input-box"
                      placeholder="you@company.com"
                      name="email"
                      value={userEmail || ''}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {error && errorMessage.userEmail && (
                      <p className="text-danger text-sm text-gray-500 my-1">{errorMessage.userEmail}</p>
                    )}
                  </div>
                  <div className="mb-28 common-input-box-2 mobile-input-2 modal-mobile-input">
                    <label variant="span" color="blue-gray" className="fs-12 fw-400 mb-6 text-color-2">
                      Mobile number
                    </label>
                    <PhoneInput
                      country={'in'}
                      value={userMobile.number}
                      onChange={handleOnChange}
                      disableCountryCode={false}
                    />
                    {error && errorMessage.mobile && (
                      <p className="text-danger text-sm text-gray-500 my-1">{errorMessage.mobile}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-12 w-full h-size-lg-62 h-size-48 fs-18 fw-700 download-curiculm-btn text-color-2"
                  disabled={bookDemoBtnLoading ? true : false}
                >
                  {bookDemoBtnLoading ? 'Please wait...' : 'SUBMIT NOW'}
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

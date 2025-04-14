'use client';
import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail, validName } from '@/_helper/Regex';
import { eventRegister, leadStore } from '@/_services/modalService';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import { thankyouCategory } from '../Layouts/navData';
import Link from 'next/link';
import { useAuth } from '@/_context/AuthContext';

function MasterLeadModal(props) {
  const {
    setShowBookmodal,
    setShowOtp,
    userMobile,
    setUserMobile,
    setUserId,
    setOtpToken,
    isLoading,
    setIsLoading,
    setShowLeadModal,
    crmCrsId,
    frnchId,
    leadNote,
    currUrl,
    courseSlug,
    leadHeading,
    zoomLink,
    crmEventId,
    crsReqType,
    categorySlug,
  } = props;

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [franchise, setFranchise] = useState('');
  const [error, setError] = useState(false);
  const [checkTerms, setCheckTerms] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const { getUtmParams } = useAuth();
  const pathName = usePathname();
  const utmData = getUtmParams();
  const router = useSearchParams();
  const userouter = useRouter();
  const utmMedium = router.get('utm_medium');
  const utmSource = router.get('utm_source');
  const utmCampaign = router.get('utm_campaign');
  const utmAdset = router.get('utm_adset');
  const utmAd = router.get('utm_ad');
  const utmTerm = router.get('utm_term');
  const utmDevice = router.get('utm_device');
  const utmDevicemodel = router.get('utm_device_modal');
  const utmNetwork = router.get('utm_network');
  const gClid = router.get('gclid');

  const utmChannel = router.get('utm_channel');
  const utmPostId = router.get('utm_post_id');
  const utmPage = router.get('utm_page');

  const leadSources = {
    lead_source: 5,
    parent_lead_type: 1,
    lead_mode: 1,
    lead_type: 10,
  };

  useEffect(() => {
    if (crmCrsId) {
      setCourseId(`${crmCrsId}`);
    }
  }, [crmCrsId]);

  useEffect(() => {
    if (frnchId) {
      setFranchise(`${frnchId}`);
    }
  }, [frnchId]);

  const handleOnChange = (value, country) => {
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

  async function registerEvent() {
    const eventParams = {
      event_id: crmEventId,
      name: userName,
      email: userEmail,
      mobile_number: userMobile?.number,
      country_code: userMobile?.code,
      franchise_id: franchise,
      meeting_id: zoomLink?.meetId,
    };
    const response = await eventRegister(eventParams);
    if (response.status) {
      setIsLoading(false);
      setShowOtp(true);
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let leadMode = 1;
    const utmPathName = Cookies.get('utm_pathname') || null;
    if (formValidation()) {
      setIsLoading(true);
      const eventParams = {
        event_id: crmEventId,
        name: userName,
        email: userEmail,
        mobile_number: userMobile?.numWithoutCode,
        country_code: userMobile?.code,
        franchise_id: franchise,
        meeting_id: zoomLink?.meetId,
      };
      const params = {
        lead_source: leadSources?.lead_source,
        parent_lead_type: leadSources?.parent_lead_type,
        lead_mode: leadMode,
        lead_type: leadSources?.lead_type,
        course_id: courseId,
        mobile_number: userMobile?.numWithoutCode,
        country_code: userMobile?.code,
        email: userEmail,
        name: userName,
        course_type_request: crsReqType,
        lead_note: leadNote,
        education_id: '',
        profession_id: '',
        state_id: '',
        franchise_id: franchise,
        ...(utmPathName === pathName && utmData?.utm_source && utmData),
      };

      if (utmData?.utm_source && utmPathName && utmPathName === pathName) {
        params.redirect_source = true;
      } else if (utmData?.utm_source) {
        params.redirect_source = false;
        params.utm_source = utmData?.utm_source;
      }

      if (!utmData?.utm_source && utmSource) {
        params.utm_source = utmSource;
        params.redirect_source = true;
      }
      if (!utmData?.utm_source && utmMedium) {
        params.utm_medium = utmMedium;
      }
      if (!utmData?.utm_source && utmCampaign) {
        params.utm_campaign = utmCampaign;
      }
      if (!utmData?.utm_source && utmAdset) {
        params.utm_adset = utmAdset;
      }
      if (!utmData?.utm_source && utmAd) {
        params.utm_ad = utmAd;
      }
      if (!utmData?.utm_source && utmTerm) {
        params.utm_term = utmTerm;
      }

      if (!utmData?.utm_source && utmDevice) {
        params.utm_device = utmDevice;
      }
      if (!utmData?.utm_source && utmDevicemodel) {
        params.utm_device_modal = utmDevicemodel;
      }
      if (!utmData?.utm_source && utmNetwork) {
        params.utm_network = utmNetwork;
      }
      if (!utmData?.utm_source && gClid) {
        params.gclid = gClid;
      }

      if (!utmData?.utm_source && utmChannel) {
        params.utm_channel = utmChannel;
      }

      if (!utmData?.utm_source && utmPostId) {
        params.utm_post_id = utmPostId;
      }

      if (!utmData?.utm_source && utmPage) {
        params.utm_page = utmPage;
      }

      const res = await leadStore(params);
      if (res.status) {
        const data = res.result;
        setUserId(data?.lm_user_id);
        setOtpToken(data?.request_token);
        const response = await eventRegister(eventParams);
        if (response.status) {
          if (!data?.mobile_number_verified && userMobile?.code == '91') {
            if (courseSlug && courseSlug != '') {
              Cookies.set('leadUser', userName);
              Cookies.remove('social_url_source');
              Cookies.remove('utm_pathname');
              Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
              Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
            }
            setShowOtp(true);
          } else {
            setUserMobile({
              code: '91',
              number: '',
              numWithoutCode: '',
            });
            toast.success(response.message, toastConfig);
            if (courseSlug && courseSlug != '') {
              Cookies.set('leadUser', userName);
              Cookies.remove('social_url_source');
              Cookies.remove('utm_pathname');
              Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
              Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
              window.location.href = `/thank-you-${thankyouCategory[categorySlug]}-masterclass/${courseSlug}`;
            }
          }
          setShowBookmodal(false);
          setShowLeadModal(false);
          setIsLoading(false);
        } else if (!response.status && !data?.mobile_number_verified && userMobile?.code == '91') {
          if (courseSlug && courseSlug != '') {
            Cookies.remove('social_url_source');
            Cookies.remove('utm_pathname');
            Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.set('leadUser', userName);
          }
          setShowOtp(true);
          setShowBookmodal(false);
          setShowLeadModal(false);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error(response.message, toastConfig);
        }
      } else {
        setUserMobile({
          code: '91',
          number: '',
          numWithoutCode: '',
        });
        toast.success(res.message, toastConfig);
        if (courseSlug && courseSlug != '') {
          Cookies.set('leadUser', userName);
          Cookies.remove('social_url_source');
          Cookies.remove('utm_pathname');
          Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
          Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
          window.location.href = `/thank-you-${thankyouCategory[categorySlug]}-masterclass/${courseSlug}`;
        }
        setShowBookmodal(false);
        setShowLeadModal(false);
        setIsLoading(false);
      }
    }
  }

  function closeModal() {
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
    setShowBookmodal(false);
    setShowLeadModal(false);
  }

  return (
    <>
      <Modal
        show={true}
        onHide={closeModal}
        centered
        size="lg"
        className="book-class-modal"
        backdropClassName="ws-modal-backdrop"
      >
        <Modal.Body className="p-xl-24 p-16">
          <Image
            src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
            width={24}
            height={24}
            alt="Close"
            onClick={() => {
              setUserMobile({
                code: '91',
                number: '',
                numWithoutCode: '',
              });
              setShowBookmodal(false);
              setShowLeadModal(false);
            }}
            className="img-fluid cursor-pointer position-absolute close-modal"
          />
          <div className="row">
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
            <div className="col-lg-6 py-lg-3">
              <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-lg-28 mb-20">Register for free!!</h4>
              <form className="row" onSubmit={submitForm}>
                <div className="col-lg-12 mb-lg-28 mb-20">
                  <div>
                    <label htmlFor="studentName" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Name
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value.trimStart().replace(/  +/g, ' '))}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                    />
                    {(error && errorMessage?.name && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
                    )) ||
                      ''}
                  </div>
                </div>
                <div className="col-lg-12 mb-lg-28 mb-20">
                  <div className="mobile-with-country">
                    <label htmlFor="studentPhone" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={'in'}
                      value={userMobile.number}
                      onChange={handleOnChange}
                      disableCountryCode={false}
                    />
                    {(error && errorMessage?.mobile && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
                    )) ||
                      ''}
                  </div>
                </div>
                <div className="col-lg-12 mb-lg-28 mb-20">
                  <div>
                    <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Email
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      placeholder="Your Email"
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
                </div>
                <div className="col-lg-12 mb-16">
                  <div className="form-check">
                    <input
                      className="form-check-input shadow-none"
                      type="checkbox"
                      value=""
                      id="checkTerms"
                      defaultChecked
                      onChange={(e) => setCheckTerms(e.target.checked)}
                    />
                    <label htmlFor="checkTerms" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      I have read and agree to the{' '}
                      <Link className="text-color-1 text-decoration-underline" target="blank" href={'/privacy-policy'}>
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link
                        className="text-color-1 text-decoration-underline"
                        target="blank"
                        href={'/terms-and-conditions'}
                      >
                        Terms & Conditions
                      </Link>
                      .
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input shadow-none"
                      type="checkbox"
                      value=""
                      id="checkWhatsapp"
                      defaultChecked
                    />
                    <label htmlFor="checkWhatsapp" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Send me updates on WhatsApp
                    </label>
                  </div>
                </div>
                <div className="col-12 text-lg-start text-center">
                  <button
                    disabled={isLoading || !checkTerms}
                    className="blue-fill-btn min-h-56 px-36 fs-18 w-100 fw-600 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto"
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

export default MasterLeadModal;

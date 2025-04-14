'use client';
import { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import { fetchModalCourses, getCountriesList, leadResendOtp, leadStore, leadVerifyOtp } from '@/_services/modalService';
import { Spinner } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { categoryData } from './categoryData';
import Link from 'next/link';
import { validEmail, validName } from '@/_helper/Regex';
import { thankyouCategory } from '../Layouts/navData';
import VerifyOtpModal from '../Modals/VerifyOtpModal';
import CustomDropdown from '../Layouts/Common/CustomDropDown';

export default function ReachOutDirectly({ centers, utmParameters }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [courseType, setCourseType] = useState('');
  const [frenchise, setFrenchise] = useState('');
  const [centerSlug, setCenterSlug] = useState('');
  const [courseName, setCourseName] = useState('');
  const [coursesList, setCoursesList] = useState([]);
  const [categorySlug, setCategorySlug] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [userMobile, setUserMobile] = useState({
    code: '',
    number: '',
    numWithoutCode: '',
  });
  const [userMsg, setUserMsg] = useState('');
  const [submitBtnLoading, setSubmitBtnLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const [userId, setUserId] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [errorOtp, setErrorOtp] = useState(null);
  const [timerComplete, setTimerComplete] = useState(false);
  const [otpToken, setOtpToken] = useState('');

  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ countryId: '', countryName: '' });
  let showCountries = ['ethical-hacking-course', 'penetration-testing-course'].includes(courseSlug);

  const utmMedium = utmParameters?.utm_medium;
  const utmSource = utmParameters?.utm_source;
  const utmCampaign = utmParameters?.utm_campaign;
  const utmAdset = utmParameters?.utm_adset;
  const utmAd = utmParameters?.utm_ad;
  const utmTerm = utmParameters?.utm_term;
  const utmDevice = utmParameters?.utm_device;
  const utmDevicemodel = utmParameters?.utm_device_modal;
  const utmNetwork = utmParameters?.utm_network;
  const gClid = utmParameters?.gclid;

  const utmChannel = utmParameters?.utm_channel;
  const utmPostId = utmParameters?.utm_post_id;
  const utmPage = utmParameters?.utm_page;

  const leadSources = {
    lead_source: 5,
    parent_lead_type: 1,
    lead_mode: 1,
    lead_type: 3,
  };

  const handleButtonClick = () => {
    Cookies.set('scrollTo', 'programs', { path: '/' });
  };

  useEffect(() => {
    getCourses();
  }, [frenchise]);

  useEffect(() => {
    getCoutries();
  }, [showCountries]);

  async function getCoutries() {
    const res = await getCountriesList();
    if (res.status) {
      const data = res.result;
      setCountriesList(data);
    }
  }

  async function getCourses() {
    const res = await fetchModalCourses(frenchise);
    if (res.status) {
      const data = res.result;
      setCoursesList(data);
    }
  }

  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let nameMsg = '';
    let mobileMsg = '';
    let emailMsg = '';
    let noteMsg = '';
    let crsTypeMsg = '';
    let centerMsg = '';
    let crsNameMsg = '';
    let countryMsg = '';
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
    if (!userMsg) {
      noteMsg = 'Please enter message';
    }
    if (!courseType) {
      crsTypeMsg = 'Please select course type';
    }
    if (courseType != 'Online' && !frenchise) {
      centerMsg = 'Please select Career School';
    }
    if (!courseName || courseName == '') {
      crsNameMsg = 'Please select course';
    }

    if (showCountries && !selectedCountry.countryId) {
      countryMsg = 'Please select country';
    }
    if (!nameMsg && !mobileMsg && !emailMsg && !noteMsg && !crsTypeMsg && !centerMsg && !crsNameMsg && !countryMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        mobile: '',
        email: '',
        msg: '',
        crsType: '',
        centers: '',
        crsName: '',
        country: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        mobile: mobileMsg,
        email: emailMsg,
        msg: noteMsg,
        crsType: crsTypeMsg,
        centers: centerMsg,
        crsName: crsNameMsg,
        country: countryMsg,
      });
      return false;
    }
  }

  const handleSelectCenter = (e) => {
    const selectedId = e.target.value;
    const selectedCenter = centers.find((center) => center.crm_center_id == selectedId);
    const selectedSlug = selectedCenter ? selectedCenter.slug_url : '';

    setFrenchise(selectedId);
    setCenterSlug(selectedSlug);
    setCourseName('');
    setCategorySlug('');
    setCourseSlug('');
    showCountries = false;
    setSelectedCountry({ countryId: '', countryName: '' });
  };

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setCourseName(selectedCourseName);

    const course = coursesList.find((course) => course.id == selectedCourseName);
    if (course?.web_category_slug) {
      setCategorySlug(course?.web_category_slug);
    }
    if (course?.web_course_slug) {
      setCourseSlug(course?.web_course_slug);
    }
    setSelectedCountry({ countryId: '', countryName: '' });
  };

  const handleSelectCountry = (id, name) => {
    setSelectedCountry({ countryId: id, countryName: name });
  };

  async function submitForm(e) {
    e.preventDefault();
    let leadMode = 1;
    if (formValidation()) {
      setSubmitBtnLoading(true);
      const params = {
        lead_source: leadSources?.lead_source,
        parent_lead_type: leadSources?.parent_lead_type,
        lead_mode: leadMode,
        lead_type: leadSources?.lead_type,
        course_id: courseName,
        mobile_number: userMobile?.numWithoutCode,
        country_code: userMobile?.code,
        email: userEmail,
        name: userName,
        course_type_request: courseType,
        lead_note: userMsg,
        education_id: '',
        profession_id: '',
        state_id: '',
        franchise_id: frenchise,
      };

      if (selectedCountry?.countryId) {
        params.country_id = selectedCountry?.countryId;
      }

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

      const res = await leadStore(params);
      if (res.status) {
        const data = res.result;
        setUserId(data?.lm_user_id);
        setOtpToken(data?.request_token);
        if (!data?.mobile_number_verified && userMobile?.code == '91') {
          if (courseName && courseName != '') {
            Cookies.set('leadCrs', courseName);
            Cookies.set('leadCenter', frenchise);
          }
          setSubmitBtnLoading(false);
          setShowOtp(true);
        } else {
          setUserMobile({
            code: '91',
            number: '',
            numWithoutCode: '',
          });
          setSelectedCountry({ countryId: '', countryName: '' });
          toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
          if (courseName && courseName != '') {
            Cookies.set('leadCrs', courseName);
            // userouter.push('/thank-you');
            Cookies.set('leadCenter', frenchise);

            if (centerSlug) {
              window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}-${centerSlug}`;
            } else {
              window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}`;
            }
          }
        }
        setSubmitBtnLoading(false);
      } else {
        setUserMobile({
          code: '91',
          number: '',
          numWithoutCode: '',
        });
        setSelectedCountry({ countryId: '', countryName: '' });
        toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
        if (courseName && courseName != '') {
          Cookies.set('leadCrs', courseName);
          Cookies.set('leadCenter', frenchise);
          // userouter.push('/thank-you');
          if (centerSlug) {
            window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}-${centerSlug}`;
          } else {
            window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}`;
          }
        }
        setSubmitBtnLoading(false);
      }
    }
  }

  async function resendOtp() {
    const response = await leadResendOtp({
      mobile_number: userMobile?.numWithoutCode,
    });
    if (response.status) {
      const data = response.result;
      setOtpToken(data?.request_token);
      setTimerComplete(false);
      setOneTimePassword(null);
      setErrorOtp(null);
    }
  }

  const renderTime = (remainingTime) => {
    return (remainingTime && <span className="fs-14 text-color-1 ps-1">{remainingTime} sec</span>) || '';
  };

  async function verifyOtp(e) {
    e.preventDefault();
    if (oneTimePassword?.length == 6) {
      setIsLoading(true);
      const params = {
        one_time_password: oneTimePassword,
        request_token: otpToken,
        lm_user_id: userId,
      };
      const res = await leadVerifyOtp(params);
      if (res.status) {
        setIsLoading(false);
        setUserMobile({
          code: '91',
          number: '',
          numWithoutCode: '',
        });
        setUserId('');
        setShowOtp(false);
        setOtpToken('');
        setOneTimePassword('');
        setErrorOtp(null);
        if (centerSlug) {
          window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}-${centerSlug}`;
        } else {
          window.location.href = `/thank-you-${thankyouCategory[categorySlug]}/${courseSlug}`;
        }
        toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
      } else {
        setIsLoading(false);
        setErrorOtp('Please enter valid OTP');
      }
    }
  }

  return (
    <>
      {showOtp && (
        <VerifyOtpModal
          setShowOtp={setShowOtp}
          oneTimePassword={oneTimePassword}
          setOneTimePassword={setOneTimePassword}
          errorOtp={errorOtp}
          renderTime={renderTime}
          resendOtp={resendOtp}
          setTimerComplete={setTimerComplete}
          timerComplete={timerComplete}
          verifyOtp={verifyOtp}
          isLoading={isLoading}
          userMobile={userMobile}
        />
      )}
      <section className="contact-form-section py-lg-80 py-55">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-color-1 fw-600 fs-32 lh-48 mb-16">Prefer to reach out directly?</h2>
              <p className="text-color-7 fs-14 lh-21 mb-lg-58 mb-40">
                If you have any questions, inquiries, or would like to get in touch with us, please use the following
                contact information
              </p>
            </div>
            <div className="col-12 mb-lg-80 mb-40">
              <div className="w-100 contact-form bg-color-19 rounded-24 p-lg-40 p-20 border-w-2 border-color-1">
                <form className="row" onSubmit={submitForm}>
                  <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                    <div>
                      <label htmlFor="userName" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Name
                      </label>
                      <input
                        type="text"
                        id="userName"
                        placeholder="Your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value.trimStart().replace(/  +/g, ' '))}
                        className="w-100 h-size-57 rounded-12 px-16 text-color-1 fs-16 
            border-w-2 border-color-1 input-focus-shadow bg-white transation-2"
                      />
                      {(error && errorMessage?.name && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
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
                        className="w-100 h-size-57 rounded-12 px-16 text-color-1 fs-16 
            border-w-2 border-color-1 input-focus-shadow bg-white transation-2"
                      />
                      {(error && errorMessage?.email && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                    <div className="mobile-with-country">
                      <label htmlFor="studentPhone" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Phone Number
                      </label>
                      <PhoneInput
                        country={'in'}
                        value={userMobile.number}
                        onChange={handleOnChange}
                        disableCountryCode={false}
                        placeholder="Your Mobile Number"
                      />
                      {(error && errorMessage?.mobile && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                    <div>
                      <label htmlFor="crsType" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Course Type
                      </label>
                      <div className="shadow-select">
                        <select
                          id="crsType"
                          onChange={(e) => {
                            setCourseType(e.target.value);
                            setFrenchise('');
                          }}
                          className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                        >
                          <option value="">Select Course Type</option>
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                        </select>
                        {(error && errorMessage?.crsType && (
                          <span className="fs-13 text-danger fw-500">{errorMessage?.crsType}</span>
                        )) ||
                          ''}
                      </div>
                    </div>
                  </div>
                  {courseType != 'Online' && (
                    <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                      <div>
                        <label htmlFor="centers" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                          Career School
                        </label>
                        <div className="shadow-select">
                          <select
                            id="centers"
                            onChange={handleSelectCenter}
                            className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                          >
                            <option value="">Select Career School</option>
                            {centers?.length > 0 &&
                              centers.map((center, key) => (
                                <option value={`${center?.crm_center_id}`} key={key}>
                                  {center.name}
                                </option>
                              ))}
                          </select>
                          {(error && errorMessage?.centers && (
                            <span className="fs-13 text-danger fw-500">{errorMessage?.centers}</span>
                          )) ||
                            ''}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                    <div>
                      <label htmlFor="chooseCourse" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Courses
                      </label>
                      <div className="shadow-select">
                        <select
                          id="chooseCourse"
                          onChange={handleCourseChange}
                          value={courseName}
                          className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                        >
                          <option value="">Select Course</option>
                          {coursesList?.length > 0 &&
                            coursesList.map((course, key) => (
                              <option value={course.id} key={key}>
                                {course.name}
                              </option>
                            ))}
                        </select>
                        {(error && errorMessage?.crsName && (
                          <span className="fs-13 text-danger fw-500">{errorMessage?.crsName}</span>
                        )) ||
                          ''}
                      </div>
                    </div>
                  </div>
                  {showCountries && (
                    <div className="col-lg-4 col-md-6 mb-lg-32 mb-20">
                      <label htmlFor="chooseCourse" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Country
                      </label>
                      <CustomDropdown
                        label="Select Country"
                        items={countriesList}
                        selectedValue={selectedCountry.countryName || 'Select Country'}
                        onSelectValue={handleSelectCountry}
                        itemId={selectedCountry.countryId}
                        searchBy={true}
                      />
                      {error && errorMessage.country && (
                        <span className="fs-13 text-danger fw-500">{errorMessage.country}</span>
                      )}
                    </div>
                  )}
                  <div className="col-lg-12 mb-lg-32 mb-20">
                    <div>
                      <label htmlFor="userMsg" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                        Message
                      </label>
                      <textarea
                        name="userMsg"
                        id="userMsg"
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value.trimStart().replace(/  +/g, ' '))}
                        placeholder="Type your message here."
                        className="w-100 h-size-114 rounded-12 px-16 text-color-1 fs-16 
          border-w-2 border-color-1 input-focus-shadow bg-white resize-none shadow-textarea transation-2 pt-2"
                      ></textarea>
                      {(error && errorMessage?.msg && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.msg}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button
                      disabled={submitBtnLoading}
                      className="blue-fill-btn min-h-56 px-36 fs-18 fw-600 rounded-12 orange-hover-shadow mx-lg-0 ms-lg-auto mx-auto"
                    >
                      {submitBtnLoading && (
                        <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>
                      )}
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div className="transform-box rounded-28 overflow-hidden">
                <div className="d-lg-flex text-lg-start text-center align-items-start px-xl-70 px-20 pt-xl-70 pt-lg-45 pt-64 pb-40 pb-lg-0">
                  <div className="max-w-620 min-w-620 w-100">
                    <h2 className="fs-32 lh-48 fw-600 text-white mb-20">Start your transformation today!</h2>
                    <p className="fs-14 lh-21 text-white mb-lg-12 mb-32">
                      Are you ready to revolutionize the way you do business? WsCube Tech is your catalyst for success,
                      combining innovation, seamless integration, and tailored solutions.
                    </p>
                  </div>
                  <div className="w-100 text-lg-end text-center">
                    <Link href={'/'}>
                      <button
                        className="fs-18 fw-600 text-color-1 border-w-2 border-color-24 bg-color-24 rounded-12
                    outline-none px-36 h-size-56"
                        onClick={handleButtonClick}
                      >
                        Explore Programs
                      </button>
                    </Link>
                  </div>
                </div>
                <AnimatePresence>
                  <motion.ul className="position-relative m-0 list-unstyled d-lg-flex justify-content-center d-none p-2 pb-0 min-h-130 mt-3">
                    {categoryData.map((course, index) => (
                      <li key={index}>
                        <Link href={course?.slug}>
                          <motion.div
                            className={`px-16 h-size-40 text-nowrap rounded-20 border-w-2 border-color-1 min-w-175 ${
                              course.bgColor === '#194CFF' ? 'text-white' : 'text-color-1'
                            } fs-14 lh-21 d-flex align-items-center justify-content-center`}
                            style={{ backgroundColor: course.bgColor }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: -200, rotate: -180 }}
                            whileInView={{
                              opacity: 1,
                              y: course.y,
                              rotate: course.rotate,
                              x: course.x,
                              transition: { delay: course.delay, duration: 0.5, type: 'tween' },
                            }}
                          >
                            <FontAwesomeIcon icon={faCheck} width={13} className="me-2" />
                            {course.course_name}
                          </motion.div>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

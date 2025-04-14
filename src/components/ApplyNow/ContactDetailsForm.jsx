'use client';
import { validEmail, validName } from '@/_helper/Regex';
import { getEducationList, leadStore, submitCourseQuestion } from '@/_services/modalService';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ClearFormPopup from './ClearFormPopup';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';
import { useAuth } from '@/_context/AuthContext';
import { submitApplicationQuestion } from '@/_services/applicationFormServices';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';

export default function ContactDetailsForm({
  userStatus,
  isLoading,
  setIsLoading,
  crsReqType,
  franchise,
  courseId,
  questionsList,
  userMobile,
  setUserMobile,
  setShowOtp,
  userId,
  setUserId,
  setOtpToken,
  setSubQueParams,
  crsName,
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  address,
  setAddress,
  selectedQuestions,
  setSelectedQuestions,
  setShowContactForm,
  setShowQuesForm,
  crmCrsId,
  lmLeadId,
  user,
  isLoggedIn,
}) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [showClearModal, setShowClearModal] = useState(false);
  const [education, setEducation] = useState('');
  const [educationList, setEducationList] = useState([]);
  const router = useSearchParams();
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
  // const { user, isLoggedIn } = useAuth();
  const leadSources = {
    lead_source: 5,
    parent_lead_type: 1,
    lead_mode: 1,
    lead_type: 3,
  };

  useEffect(() => {
    getEducation();
  }, []);

  useEffect(() => {
    if (user) {
      setUserName(user?.full_name);
      setUserMobile({
        code: user?.country_code,
        number: String(user?.country_code) + String(user?.phone_number),
        numWithoutCode: user?.phone_number,
      });
      setUserEmail(user?.email);
      if (user?.parmanent_address?.address) {
        setAddress(
          user?.parmanent_address?.address +
            ' ' +
            user?.parmanent_address?.city +
            ' ' +
            user?.parmanent_address?.pincode +
            ' ' +
            user?.parmanent_address?.state +
            ' ' +
            user?.parmanent_address?.country
        );
      }
    }
  }, [user]);

  useEffect(() => {
    if (userStatus) {
      questionsList.forEach((item) => {
        const questionId = item.id;
        const questionAnswerId = item?.question_answers?.lm_course_ques_option_id;
        // Check if there is a question answer to pre-select
        if (questionAnswerId) {
          handleOptionChange(questionId, questionAnswerId);
        }
      });
    }
    if (userStatus?.user_address) {
      setAddress(userStatus?.user_address);
    }
    if (userStatus?.education_id) {
      setEducation(userStatus?.education_id);
    }
  }, [userStatus, questionsList]);
  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  useEffect(() => {
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
  }, [selectedQuestions]);

  async function getEducation() {
    const res = await getEducationList();
    if (res.status) {
      const data = res.result;
      setEducationList(data);
    }
  }

  const handleOptionChange = (questionId, optionId) => {
    setSubQueParams({ crm_course_id: courseId, question_id: questionId, option_id: optionId });
    setSelectedQuestions((prevState) => {
      const existingQuestion = prevState.find((q) => q.question_id === questionId);
      if (existingQuestion) {
        return prevState.map((q) => (q.question_id === questionId ? { ...q, option_id: optionId } : q));
      } else {
        return [...prevState, { question_id: questionId, option_id: optionId, answer: null }];
      }
    });
  };

  const isOptionSelected = (questionId, optionId) => {
    const question = selectedQuestions.find((q) => q.question_id === questionId);
    return question ? question.option_id === optionId : false;
  };

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let nameMsg = '';
    let mobileMsg = '';
    let emailMsg = '';
    let addMsg = '';
    let queMsg = '';
    let eduMsg = '';
    let isValid = false;

    if (!userName) {
      nameMsg = 'Please enter name';
    }
    if (userName && !validName(userName)) {
      nameMsg = 'Please enter valid name';
    }
    if (user?.country_code == '91') {
      if (!userMobile?.numWithoutCode) {
        mobileMsg = 'Please enter your mobile number';
      } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
        mobileMsg = 'Please enter a valid mobile number';
      }
    }
    if (!userEmail) {
      emailMsg = 'Please enter email';
    }
    if (userEmail && !validEmail(userEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!address) {
      addMsg = 'Please enter address';
    }
    if (!education) {
      eduMsg = 'Please select education';
    }
    if (selectedQuestions?.length < 1) {
      queMsg = 'Please select an option';
    }
    if (!nameMsg && !mobileMsg && !emailMsg && !addMsg && !queMsg && !eduMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        mobile: '',
        email: '',
        addr: '',
        que: '',
        education: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        mobile: mobileMsg,
        email: emailMsg,
        addr: addMsg,
        que: queMsg,
        education: eduMsg,
      });
      return false;
    }
  }

  async function submitQuestions(e) {
    e.preventDefault();
    const getToken = Cookies.get('_application_token');
    if (formValidation() && getToken) {
      if (userStatus?.status && userStatus?.status !== 'Pending') {
        setIsLoading(true);
        setShowContactForm(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowQuesForm(true);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const quesParam = {
          crm_course_id: crmCrsId,
          // lm_user_id: lmUserId,
          lm_lead_id: lmLeadId,
          questions: selectedQuestions,
          user_address: address,
          email: userEmail,
          education_id: education,
        };
        const response = await submitApplicationQuestion(quesParam);
        if (response.status) {
          localStorage.setItem('applyParams', JSON.stringify(response.result));
          setShowContactForm(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShowQuesForm(true);
          setIsLoading(false);
          // if (!data?.mobile_number_verified && userMobile?.code == '91') {
          //   setShowOtp(true);
          // } else {
          //   setShowContactForm(false);
          //   window.scrollTo({ top: 0, behavior: 'smooth' });
          //   setShowQuesForm(true);
          // }
        } else {
          toast.error(response.message, toastConfig);
          setIsLoading(false);
        }
      }
    } else if (!getToken) {
      window.location.reload();
    }
  }
  async function submitForm(e) {
    e.preventDefault();
    let leadMode = 1;
    if (formValidation()) {
      setIsLoading(true);

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
        address: address,
        course_type_request: crsReqType,
        lead_note: 'Apply Now Form Page - ' + crsName,
        education_id: '',
        profession_id: '',
        state_id: '',
        franchise_id: franchise,
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

      const res = await leadStore(params);
      if (res.status) {
        const data = res.result;
        setUserId(data?.lm_user_id);
        setOtpToken(data?.request_token);
        const quesParam = {
          crm_course_id: courseId,
          lm_user_id: data?.lm_user_id,
          lm_lead_id: data?.lead_id,
          questions: selectedQuestions,
        };

        submitQuestions(quesParam, data);
        Cookies.set('mainQusId', selectedQuestions[0]?.option_id);
        Cookies.set('leadUser', userName);
      } else if (res?.result?.mobile_number_verified || res?.message == 'Lead already added.') {
        const quesParam = {
          crm_course_id: courseId,
          lm_user_id: res?.result?.lm_user_id,
          lm_lead_id: res?.result?.lead_id,
          questions: selectedQuestions,
        };
        submitQuestions(quesParam, res?.result);
        Cookies.set('mainQusId', selectedQuestions[0]?.option_id);
        Cookies.set('leadUser', userName);
      } else {
        setIsLoading(false);
      }
    }
  }

  function clearForm() {
    // setUserName('');
    // setUserEmail('');
    // setUserMobile({
    //   code: '91',
    //   number: '',
    //   numWithoutCode: '',
    // });
    // setAddress('');
    setSelectedQuestions([]);
  }

  return (
    <>
      {showClearModal && <ClearFormPopup setShowClearModal={setShowClearModal} clearForm={clearForm} />}
      <section className="pt-69 pb-80">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12">
              <div className="mx-auto max-w-515 w-100">
                <div className="form-fill-progress-wrapper mb-35 text-center">
                  <span className="text-center fs-14 fw-400 lh-21 text-color-7 d-inline-block mb-8">Step 1 of 3</span>
                  <div className="progress-bar-box">
                    <ProgressBar now={'25'} />
                  </div>
                </div>
                <form className="" onSubmit={submitQuestions}>
                  <div className="mb-lg-32 mb-20">
                    <label htmlFor="userName" className="fs-16 fw-400 lh-24 text-color-1 mb-lg-12 mb-8">
                      Full Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="userName"
                      placeholder="Enter Your Full Name"
                      value={userName}
                      disabled={user?.full_name || !isLoggedIn}
                      style={{
                        cursor: `${user?.full_name && 'not-allowed'}`,
                      }}
                      onChange={(e) => setUserName(e.target.value.trimStart().replace(/  +/g, ' '))}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow"
                    />
                    {(error && errorMessage?.name && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
                    )) ||
                      ''}
                  </div>
                  <div className="mb-lg-32 mb-20">
                    <div className="mobile-with-country">
                      <label htmlFor="userMobile" className="fs-16 fw-400 lh-24 text-color-1 mb-lg-12 mb-8">
                        Phone Number<span className="text-danger">*</span>
                      </label>
                      <PhoneInput
                        country={'in'}
                        value={userMobile.number}
                        onChange={handleOnChange}
                        disableCountryCode={false}
                        id="userMobile"
                        disabled={user?.phone_number || !isLoggedIn}
                      />
                      {(error && errorMessage?.mobile && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  <div className="mb-lg-32 mb-20">
                    <label htmlFor="studentEmail" className="fs-16 fw-400 lh-24 text-color-1 mb-lg-12 mb-8">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      placeholder="Your Email"
                      value={userEmail || ''}
                      onChange={(e) => setUserEmail(e.target.value)}
                      disabled={user?.email || !isLoggedIn}
                      style={{
                        cursor: `${user?.email && 'not-allowed'}`,
                      }}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow"
                    />
                    {(error && errorMessage?.email && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
                    )) ||
                      ''}
                  </div>
                  <div className="mb-lg-32 mb-20">
                    <label htmlFor="userName" className="fs-16 fw-400 lh-24 text-color-1 mb-lg-12 mb-8">
                      Address (City, State, Country)<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter Your Address"
                      value={address}
                      disabled={user?.parmanent_address?.address || !isLoggedIn || userStatus?.user_address}
                      style={{
                        cursor: `${
                          ((user?.parmanent_address?.address || userStatus?.user_address) && 'not-allowed') || 'inherit'
                        }`,
                      }}
                      onChange={(e) => setAddress(e.target.value.trimStart().replace(/  +/g, ' '))}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow"
                    />
                    {(error && errorMessage?.addr && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.addr}</span>
                    )) ||
                      ''}
                  </div>
                  <div className="mb-lg-32 mb-20">
                    <label htmlFor="userName" className="fs-16 fw-400 lh-24 text-color-1 mb-lg-12 mb-8">
                      Highest Education<span className="text-danger">*</span>
                    </label>
                    <div className="shadow-select">
                      <select
                        id="education"
                        onChange={(e) => setEducation(e.target.value)}
                        value={education}
                        disabled={userStatus?.education_id}
                        className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                        style={{ cursor: `${(userStatus?.education_id && 'not-allowed') || 'pointer'}` }}
                      >
                        <option value="">Select High Education</option>
                        {educationList?.length > 0 &&
                          educationList.map((item, key) => (
                            <option value={item.id} key={key}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                      {(error && errorMessage?.education && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.education}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                  {questionsList?.length > 0 &&
                    questionsList.map((item, key) => (
                      <div className="mb-lg-32 mb-20 apply-question" key={key}>
                        <h3 className="fs-16 lh-24 fw-400 text-color-1 mb-3">
                          {parse(item?.question)}
                          <span className="text-danger">*</span>
                        </h3>
                        {item?.options?.length > 0 &&
                          item?.options.map((opt, index) => {
                            let defChecked = false;
                            if (index == 0) {
                              defChecked = true;
                            }
                            return (
                              <div
                                className="form-check d-flex align-items-start"
                                key={index}
                                style={{ marginBottom: '12px' }}
                              >
                                <input
                                  className="form-check-input cursor-pointer custom-check-radio-1 mr-10"
                                  type="radio"
                                  name={'ques' + item.id}
                                  id={'opt' + `${item.id}` + opt.id}
                                  defaultChecked={defChecked}
                                  checked={isOptionSelected(item.id, opt.id)}
                                  onChange={() => handleOptionChange(item.id, opt.id)}
                                  disabled={item?.question_answers?.lm_course_ques_option_id}
                                />
                                <label
                                  className="fs-16 lh-24 text-color-7 mb-1 user-select-none cursor-pointer custom-label"
                                  for={'opt' + `${item.id}` + opt.id}
                                >
                                  {opt.option}
                                </label>
                              </div>
                            );
                          })}
                        {(error && errorMessage?.que && (
                          <span className="fs-13 text-danger fw-500">{errorMessage?.que}</span>
                        )) ||
                          ''}
                      </div>
                    ))}
                  <div className="text-center">
                    <button
                      disabled={isLoading || !isLoggedIn}
                      className="blue-fill-btn min-h-56 px-36 px-4 min-w-120 fs-16 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled w-100 mb-20"
                    >
                      {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                      Next
                    </button>
                    <button
                      disabled={
                        userStatus?.status !== 'Pending' ||
                        (selectedQuestions?.length == 0 &&
                          !userName &&
                          !address &&
                          !userEmail &&
                          !userMobile?.numWithoutCode)
                      }
                      type="button"
                      onClick={() => setShowClearModal(true)}
                      className="text-decoration-none cursor-pointer text-color-7 fw-500 fs-16 border-0 bg-transparent p-0 outline-none shadow-none btn-blue-disabled"
                    >
                      Clear form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

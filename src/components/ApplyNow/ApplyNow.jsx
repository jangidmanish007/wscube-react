'use client';
import { leadResendOtp, leadVerifyOtp } from '@/_services/modalService';
import ContactDetailsForm from './ContactDetailsForm';
import React, { useEffect, useState } from 'react';
import VerifyOtpModal from '../Modals/VerifyOtpModal';
import QuestionsForm from './QuestionsForm';
import { getCourseQuestion, getUserApplicationProfile } from '@/_services/applicationFormServices';
import SubmittedFormModal from './SubmittedFormModal';
import { Spinner } from 'react-bootstrap';
import Cookies from 'js-cookie';
import ApplyNowAuth from './ApplyNowAuth';
import Image from 'next/image';

export default function ApplyNow({ pageSlug, courseData, decryptedJson }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const [showQuesForm, setShowQuesForm] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [errorOtp, setErrorOtp] = useState(null);
  const [timerComplete, setTimerComplete] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [address, setAddress] = useState('');
  const [userId, setUserId] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [crsReqType, setCrsReqType] = useState('');
  const [courseId, setCourseId] = useState('');
  const [franchise, setFranchise] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [subQueList, setSubQueList] = useState([]);
  const [courseSlug, setCourseSlug] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState('');
  const [selfieImage, setSelfieImage] = useState(null);
  const [frontDocument, setFrontDocument] = useState(null);
  const [frontPreview, setFrontPreview] = useState(null);
  const [backDocument, setBackDocument] = useState(null);
  const [backPreview, setBackPreview] = useState(null);
  const [crmCrsId, setCmCrsId] = useState(null);
  const [lmLeadId, setLmLeadId] = useState(null);
  const [encryptedMobile, setEncryptedMobile] = useState(null);
  const [encryptedEmail, setEncryptedEmail] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [showSubimttedModal, setShowSubimttedModal] = useState(false);
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showLoginSideBar, setShowLoginSideBar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subQueParams, setSubQueParams] = useState({ crm_course_id: null, question_id: null, option_id: null });
  const [userMobile, setUserMobile] = useState({
    code: '91',
    number: '',
    numWithoutCode: '',
  });
  // const {  loading } = useAuth();

  useEffect(() => {
    if (Cookies.get('_application_token')) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [Cookies.get('_application_token')]);

  useEffect(() => {
    if (courseData) {
      setCrsReqType(courseData?.course_mode);
      setCourseId(courseData?.crm_lead_course_id);
      setFranchise(courseData?.crm_center_id);
      setCourseSlug(courseData?.slug);
    }
  }, [courseData]);

  useEffect(() => {
    if (decryptedJson) {
      if (decryptedJson?.lm_lead_id) {
        setLmLeadId(decryptedJson?.lm_lead_id);
      }
      if (decryptedJson?.crm_course_id) {
        setCmCrsId(decryptedJson?.crm_course_id);
      }
      if (decryptedJson?.mobile_number) {
        setEncryptedMobile(Number(decryptedJson?.mobile_number));
      }
      if (decryptedJson?.email_id) {
        setEncryptedEmail(decryptedJson?.email_id);
      }
    }
  }, [decryptedJson]);

  useEffect(() => {
    setShowLoginSideBar(true);
    if (!isLoggedIn && !loading) {
      Cookies.remove('_application_token');
      Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
      setShowLoginSideBar(true);
    } else if (isLoggedIn && user?.country_code == '91' && encryptedMobile && !loading) {
      if (isLoggedIn && Number(user?.phone_number) !== encryptedMobile && !loading) {
        logout();
        setShowLoginSideBar(true);
      } else if (isLoggedIn && Number(user?.phone_number) === encryptedMobile && !loading) {
        if (crmCrsId && lmLeadId) {
          getQuestionList();
        }
      }
    } else if (isLoggedIn && user?.email && encryptedEmail && !loading) {
      if (isLoggedIn && user?.email !== encryptedEmail && !loading) {
        logout();
        setShowLoginSideBar(true);
      } else if (isLoggedIn && user?.email == encryptedEmail && !loading) {
        if (crmCrsId && lmLeadId) {
          getQuestionList();
        }
      }
    }
  }, [isLoggedIn, crmCrsId, lmLeadId, encryptedMobile, encryptedEmail, user, pageSlug, loading]);

  const fetchUser = async () => {
    const accessToken = Cookies.get('_application_token');
    if (accessToken) {
      try {
        const data = await getUserApplicationProfile();
        if (data?.status) {
          setUser(data?.result);
          setIsLoggedIn(true);
          setLoading(false);
          Cookies.set('user_full_name', data?.result?.full_name);
        } else {
          Cookies.remove('_application_token');
          Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
        }
      } catch (err) {
        setIsLoggedIn(false);
        setLoading(false);
        Cookies.remove('_application_token');
        Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
        console.error('Failed to fetch user:', err);
      }
    }
    setLoading(false);
  };

  const logout = async () => {
    Cookies.remove('_application_token');
    Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    setIsLoggedIn(false);
    setUser(null);
  };

  async function getQuestionList() {
    setIsQuestionLoading(true);
    const res = await getCourseQuestion(crmCrsId, lmLeadId);
    if (res?.status) {
      const questions = res?.result?.questions;
      const status = res?.result?.user_status;
      if (questions?.length > 0) {
        setQuestionsList(questions);
      }
      if (status) {
        setUserStatus(status);
        if (status?.status === 'Submitted' || status?.status === 'Re-Submitted' || status?.status === 'Approved') {
          setShowSubimttedModal(true);
        }
      }
      setIsQuestionLoading(false);
    } else {
      setIsQuestionLoading(false);
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
        setShowContactForm(false);
        setShowQuesForm(true);
        setShowOtp(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOtpToken('');
        setOneTimePassword('');
        setErrorOtp(null);
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
      {showSubimttedModal && <SubmittedFormModal setShowSubimttedModal={setShowSubimttedModal} />}
      {/* {showLoginPrompt && <ApplicationLoginPrompt setShowLoginPrompt={setShowLoginPrompt} />} */}
      {!isLoggedIn && !loading && (
        <ApplyNowAuth
          showLoginSideBar={showLoginSideBar}
          setShowLoginSideBar={setShowLoginSideBar}
          mobileNo={decryptedJson?.mobile_number}
          email={decryptedJson?.email_id}
          country={decryptedJson?.country_code}
          stName={decryptedJson?.name}
          courseName={courseData?.course_name}
          setIsLoggedIn={setIsLoggedIn}
          setLoading={setLoading}
          setUser={setUser}
          fetchUser={fetchUser}
        />
      )}
      <section
        className={`cms-banner position-relative ${(showContactForm && 'pt-36 pb-96') || 'pt-lg-36 pt-36 pb-96'}`}
      >
        {/* <div className="header-gradiant w-100 min-h-96 position-absolute top-0 start-0 d-lg-block d-none"></div> */}
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 ">
              <div className="text-center text-white max-w-744 mx-auto">
                <Image
                  src={process.env.IMG_PATH + `images/ws-cube-white-logo.svg`}
                  alt="header-logo"
                  width="150"
                  height="60"
                  className="img-fluid mb-35"
                />
                <h1 className="fs-lg-32 fs-25 lh-48 fw-600">{courseData?.course_name}</h1>
                <p className="fs-14 lh-21 m-0">
                  This form is to acquire and assess important screening details of the Applicants. Kindly fill only
                  verifiable details and share clear intent behind applying for this Cohort. The information shared
                  shall be treated with utmost confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-600 min-w-200">
        {(showContactForm && !isQuestionLoading && (
          <ContactDetailsForm
            userStatus={userStatus}
            userName={userName}
            setUserName={setUserName}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            address={address}
            setAddress={setAddress}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            courseId={courseId}
            crsReqType={crsReqType}
            questionsList={questionsList}
            userMobile={userMobile}
            userId={userId}
            franchise={franchise}
            setShowOtp={setShowOtp}
            setUserMobile={setUserMobile}
            setUserId={setUserId}
            setOtpToken={setOtpToken}
            setSubQueParams={setSubQueParams}
            crsName={courseData?.course_name}
            setShowContactForm={setShowContactForm}
            setShowQuesForm={setShowQuesForm}
            selectedQuestions={selectedQuestions}
            setSelectedQuestions={setSelectedQuestions}
            crmCrsId={crmCrsId}
            lmLeadId={lmLeadId}
            user={user}
            isLoggedIn={isLoggedIn}
          />
        )) ||
          ''}
        {(isQuestionLoading && (
          <div className="mx-auto text-center p-5 mt-lg-150">
            <Spinner animation="border" role="status" size={'lg'} variant="primary" className=""></Spinner>
          </div>
        )) ||
          ''}
        {showQuesForm && (
          <QuestionsForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            courseId={courseId}
            subQueParams={subQueParams}
            setShowContactForm={setShowContactForm}
            setShowQuesForm={setShowQuesForm}
            subQueList={subQueList}
            setSubQueList={setSubQueList}
            courseSlug={courseSlug}
            answeredQuestions={answeredQuestions}
            setAnsweredQuestions={setAnsweredQuestions}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            selfieImage={selfieImage}
            setSelfieImage={setSelfieImage}
            frontDocument={frontDocument}
            setFrontDocument={setFrontDocument}
            frontPreview={frontPreview}
            setFrontPreview={setFrontPreview}
            backDocument={backDocument}
            setBackDocument={setBackDocument}
            backPreview={backPreview}
            setBackPreview={setBackPreview}
            crmCrsId={crmCrsId}
            lmLeadId={lmLeadId}
            pageSlug={pageSlug}
          />
        )}
      </div>
      <section className={`bg-color-23 py-40`}>
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center">
              <p className="m-0 fw-400 text-white fs-14 lh-21">
                &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by WsCube Tech
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

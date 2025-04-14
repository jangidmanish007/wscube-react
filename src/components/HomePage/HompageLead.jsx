'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import DemoSessionModal from '../Modals/DemoSessionModal';
import VerifyOtpModal from '../Modals/VerifyOtpModal';
import { leadResendOtp, leadResendOtpDA, leadVerifyOtp, leadVerifyOtpDA } from '@/_services/modalService';
import { usePathname } from 'next/navigation';
import { thankyouCategory } from '../Layouts/navData';
import Cookies from 'js-cookie';

export default function HompageLead({
  showModal,
  setShowLeadModal,
  leadType,
  crmCrsId,
  frnchId,
  leadContact,
  leadNote,
  currUrl,
  courseSlug,
  setCourseSlug,
  leadHeading,
  categorySlug,
  setCategorySlug,
  centerSlug,
  lmLeadCourse,
}) {
  const [showBookmodal, setShowBookmodal] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [errorOtp, setErrorOtp] = useState(null);
  const [timerComplete, setTimerComplete] = useState(false);
  const [userId, setUserId] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userMobile, setUserMobile] = useState({
    code: '91',
    number: '',
    numWithoutCode: '',
  });

  const pathname = usePathname();
  let newCategoryUrl = categorySlug || pathname.split('/').join('');

  useEffect(() => {
    if (showModal) {
      setShowBookmodal(true);
    }
  }, [showModal]);

  useEffect(() => {
    if (leadContact) {
      setUserMobile(leadContact);
    }
  }, [leadContact]);

  async function resendOtp() {
    const crsId = Cookies.get('leadCrs');
    let response = null;
    if (crsId == '47' || crsId == '8' || crsId == '9') {
      response = await leadResendOtpDA({
        mobile_number: userMobile?.numWithoutCode,
      });
    } else {
      response = await leadResendOtp({
        mobile_number: userMobile?.numWithoutCode,
      });
    }
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
      const crsId = Cookies.get('leadCrs');
      let res = null;
      setIsLoading(true);
      const params = {
        one_time_password: oneTimePassword,
        request_token: otpToken,
        lm_user_id: userId,
      };

      const paramsDA = {
        one_time_password: oneTimePassword,
        request_token: otpToken,
      };

      if (crsId == '47' || crsId == '8' || crsId == '9') {
        res = await leadVerifyOtpDA(paramsDA);
      } else {
        res = await leadVerifyOtp(params);
      }

      if (res.status) {
        setIsLoading(false);
        setUserMobile({
          code: '91',
          number: '',
          numWithoutCode: '',
        });
        setUserId('');
        setShowOtp(false);
        setShowLeadModal(false);
        setOtpToken('');
        setOneTimePassword('');
        setErrorOtp(null);
        if (currUrl) {
          window.open(currUrl);
        }
        if (pathname === '/events/data-analytics-course') {
          window.location.href = `/thank-you-data-masterclass/data-analytics-course`;
        } else if (centerSlug) {
          window.location.href = `/${courseSlug}-${centerSlug}/thank-you`;
          // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}-${centerSlug}`;
        } else {
          window.location.href = `/${courseSlug}/thank-you`;
        }
        // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}`;
        toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
      } else {
        setIsLoading(false);
        setErrorOtp('Please enter valid OTP');
        // toast.error('error', toastConfig);
      }
    }
  }

  return (
    <>
      {showBookmodal && (
        <>
          <DemoSessionModal
            setShowBookmodal={setShowBookmodal}
            setShowOtp={setShowOtp}
            userMobile={userMobile}
            setUserMobile={setUserMobile}
            setUserId={setUserId}
            setOtpToken={setOtpToken}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setShowLeadModal={setShowLeadModal}
            leadType={leadType}
            crmCrsId={crmCrsId}
            frnchId={frnchId}
            leadNote={leadNote}
            currUrl={currUrl}
            leadHeading={leadHeading}
            courseSlug={courseSlug}
            setCategorySlug={setCategorySlug}
            categorySlug={categorySlug}
            newCategoryUrl={newCategoryUrl}
            setCourseSlug={setCourseSlug}
            centerSlug={centerSlug}
            lmLeadCourse={lmLeadCourse}
          />
        </>
      )}
      {showOtp && (
        <>
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
        </>
      )}
    </>
  );
}

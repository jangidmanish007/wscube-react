'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import VerifyOtpModal from '../Modals/VerifyOtpModal';
import { leadResendOtp, leadVerifyOtp } from '@/_services/modalService';
import { useRouter } from 'next/navigation';
import MasterLeadModal from '../Modals/MasterLeadModal';
import { thankyouCategory } from '../Layouts/navData';

export default function MasterClassLead({
  showModal,
  setShowLeadModal,
  crmCrsId,
  frnchId,
  leadNote,
  currUrl,
  courseSlug,
  leadHeading,
  zoomLink,
  crmEventId,
  categorySlug,
}) {
  const [showBookmodal, setShowBookmodal] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [errorOtp, setErrorOtp] = useState(null);
  const [timerComplete, setTimerComplete] = useState(false);
  const [userId, setUserId] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [crsReqType, setCrsReqType] = useState('Online');
  const [isLoading, setIsLoading] = useState(false);
  const [userMobile, setUserMobile] = useState({
    code: '91',
    number: '',
    numWithoutCode: '',
  });
  const userouter = useRouter();
  useEffect(() => {
    if (showModal) {
      setShowBookmodal(true);
    }
  }, [showModal]);

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
        setShowLeadModal(false);
        setOtpToken('');
        setOneTimePassword('');
        setErrorOtp(null);
        toast.success('Successfully enrolled in event.', toastConfig);
        window.location.href = `/thank-you-${thankyouCategory[categorySlug]}-masterclass/${courseSlug}`;
      } else {
        setIsLoading(false);
        setErrorOtp('Please enter valid OTP');
      }
    }
  }

  return (
    <>
      {showBookmodal && (
        <MasterLeadModal
          setShowBookmodal={setShowBookmodal}
          setShowOtp={setShowOtp}
          userMobile={userMobile}
          setUserMobile={setUserMobile}
          setUserId={setUserId}
          setOtpToken={setOtpToken}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setShowLeadModal={setShowLeadModal}
          crmCrsId={crmCrsId}
          frnchId={frnchId}
          leadNote={leadNote}
          currUrl={currUrl}
          leadHeading={leadHeading}
          courseSlug={courseSlug}
          zoomLink={zoomLink}
          crmEventId={crmEventId}
          crsReqType={crsReqType}
          categorySlug={categorySlug}
        />
      )}
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
    </>
  );
}

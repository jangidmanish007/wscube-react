'use client';
import React, { useState } from 'react';
import HomeBannner from './HomeBannner';
import WhoCanApply from './WhoCanApply';
import ToolsYouLearn from './ToolsYouLearn';
import HowCourseWork from './HowCourseWork';
import RoadMapFeatures from './RoadMapFeatures';
import WhatShouldILearn from './WhatShouldILearn';
import MeetTheMentor from './MeetTheMentor';
import SuccessCertificate from './SuccessCertificate';
import PeopleReviews from './PeopleReviews';
import BookYourClass from './BookYourClass';
import LangingStickyFooter from './LangingStickyFooter';
import Faq from './Faq';
import ReviewYoutubeModal from '@/components/Modals/LandingModals/ReviewYoutubeModal';
import BookDemoModal from '@/components/Modals/LandingModals/BookDemoModal';
import LandingFooter from './LandingFooter';

export default function MainDigitalMarketing({ parameters }) {
  const [showScheduleClassModal, setShowScheduleClassModal] = useState(false);
  const [modalType, setModalType] = useState('SCHEDULE_MODAL');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [userMobile, setUserMobile] = useState({
    number: '',
    code: '',
    numWithoutCode: '',
  });

  function openScheduleModal(type) {
    setModalType(type);
    setShowScheduleClassModal(!showScheduleClassModal);
  }

  function handleYoutubeVideoModal(url) {
    setYoutubeUrl(url);
    setShowVideoModal(true);
  }

  const handleOnChange = (value, country) => {
    const numberWithoutCountryCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCountryCode });
  };

  return (
    <div>
      {showVideoModal && (
        <ReviewYoutubeModal
          showVideoModal={showVideoModal}
          setShowVideoModal={setShowVideoModal}
          youtubeUrl={youtubeUrl}
        />
      )}
      <BookDemoModal
        parameters={parameters}
        showScheduleClassModal={showScheduleClassModal}
        modalType={modalType}
        setShowScheduleClassModal={setShowScheduleClassModal}
        setUserMobile={setUserMobile}
        handleOnChange={handleOnChange}
        userMobile={userMobile}
      />
      <HomeBannner openScheduleModal={openScheduleModal} handleYoutubeVideoModal={handleYoutubeVideoModal} />
      <WhoCanApply openScheduleModal={openScheduleModal} />
      <ToolsYouLearn openScheduleModal={openScheduleModal} />
      <HowCourseWork openScheduleModal={openScheduleModal} />
      <RoadMapFeatures />
      <WhatShouldILearn openScheduleModal={openScheduleModal} />
      <MeetTheMentor />
      <SuccessCertificate openScheduleModal={openScheduleModal} />
      <PeopleReviews handleYoutubeVideoModal={handleYoutubeVideoModal} />
      <BookYourClass openScheduleModal={openScheduleModal} handleOnChange={handleOnChange} userMobile={userMobile} />
      <Faq />
      <LandingFooter />
      <LangingStickyFooter openScheduleModal={openScheduleModal} />
    </div>
  );
}

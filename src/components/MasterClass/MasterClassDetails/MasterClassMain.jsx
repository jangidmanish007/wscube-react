'use client';
import MasterBanner from './MasterBanner';
import MasterLearn from './MasterLearn';
import MasterClassFor from './MasterClassFor';
import MasterClassRegister from './MasterClassRegister';
import MasterClassJoin from './MasterClassJoin';
import MasterTeam from './MasterTeam';
import UpcomingMasterClass from './UpcomingMasterClass';
import RecomOffering from './RecomOffering';
import MasterTestimonials from './MasterTestimonials';
import MasterClassSticky from './MasterClassSticky';
import { useEffect, useState } from 'react';
import MasterClassLead from '../MasterClassLead';
import MasterClassGetInfo from './MasterClassGetInfo';

export default function MasterClassMain({
  masterClassDetailsData,
  masterClassFeaturesData,
  upcommingEventsData,
  eventsTestmonialsData,
  categoryCoursesData,
}) {
  const targetDate = masterClassDetailsData?.class_start_datetime;
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [crmCrsId, setCrmCrsId] = useState(null);
  const [crmEventId, setCrmEventId] = useState(null);
  const [currUrl, setCurrUrl] = useState('');
  const [frnchId, setFrnchId] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [zoomLink, setZoomLink] = useState({ meetId: '', meetLink: '' });
  const [leadHeading, setLeadHeading] = useState('');

  const isEventsExpired = masterClassDetailsData?.class_status === 'expired';
  const enrolledCount = masterClassDetailsData?.enrolled_count || masterClassDetailsData?.class_enrolled_count;

  useEffect(() => {
    if (masterClassDetailsData) {
      setCrmCrsId(masterClassDetailsData?.crm_lead_course_id);
      setFrnchId(masterClassDetailsData?.crm_center_id);
      setCourseSlug(masterClassDetailsData?.slug_url);
      setCrmEventId(masterClassDetailsData?.crm_event_id);
      if (masterClassDetailsData?.zoom_meeting_id && masterClassDetailsData?.zoom_meeting_link) {
        setZoomLink({
          meetId: masterClassDetailsData?.zoom_meeting_id,
          meetLink: masterClassDetailsData?.zoom_meeting_link,
        });
      }
    }
  }, [masterClassDetailsData]);

  return (
    <>
      <MasterClassLead
        showModal={showLeadModal}
        setShowLeadModal={setShowLeadModal}
        leadNote={'Masterclass Registration'}
        frnchId={frnchId}
        currUrl={currUrl}
        crmCrsId={crmCrsId}
        courseSlug={courseSlug}
        leadHeading={'Book your Spot!'}
        zoomLink={zoomLink}
        crmEventId={crmEventId}
        categorySlug={masterClassDetailsData?.CategoryMasters[0]?.slug}
      />
      <MasterBanner
        masterClassDetailsData={masterClassDetailsData}
        targetDate={targetDate}
        setShowLeadModal={setShowLeadModal}
        isEventsExpired={isEventsExpired}
        enrolledCount={enrolledCount}
      />
      {masterClassDetailsData?.class_mode == 'Offline' && masterClassDetailsData?.address && (
        <MasterClassGetInfo centerInfo={masterClassDetailsData} />
      )}
      <MasterLearn
        whatYouLearnData={{
          whatYouLearnDescription: masterClassDetailsData?.class_description,
          keyFeatures:
            (masterClassDetailsData?.class_key_points && JSON.parse(masterClassDetailsData?.class_key_points)) || [],
          mediaUrl: masterClassDetailsData?.class_desc_media_url,
        }}
        masterClassDetailsData={masterClassDetailsData}
      />
      {masterClassFeaturesData?.length > 0 && <MasterClassFor masterClassFeaturesData={masterClassFeaturesData} />}
      <MasterClassRegister
        masterClassDetailsData={masterClassDetailsData}
        targetDate={targetDate}
        setShowLeadModal={setShowLeadModal}
        isEventsExpired={isEventsExpired}
        enrolledCount={enrolledCount}
      />
      <MasterClassJoin
        whyJoinMasterClassData={{
          whyJoinDescription: masterClassDetailsData?.why_join_class_desc,
          whyJoinkeyFeatures:
            (masterClassDetailsData?.why_join_class_key_points &&
              JSON.parse(masterClassDetailsData?.why_join_class_key_points)) ||
            [],
        }}
        setShowLeadModal={setShowLeadModal}
        isEventsExpired={isEventsExpired}
      />
      {/* <MasterTeam /> */}

      {(upcommingEventsData?.length > 0 || upcommingEventsData) && (
        <UpcomingMasterClass upcommingEventsData={upcommingEventsData} />
      )}
      {categoryCoursesData?.length > 0 && <RecomOffering categoryCoursesData={categoryCoursesData[0]} />}
      {masterClassDetailsData?.testimonials?.length > 0 && (
        <MasterTestimonials
          eventsTestmonialsData={masterClassDetailsData?.testimonials}
          headingData={{ title: masterClassDetailsData?.testimonial_title }}
        />
      )}
      {!isEventsExpired && (
        <MasterClassSticky
          masterClassDetailsData={masterClassDetailsData}
          targetDate={targetDate}
          setShowLeadModal={setShowLeadModal}
        />
      )}
    </>
  );
}

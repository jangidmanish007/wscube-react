'use client';
import ListingBanner from './ListingBanner';
import MainAllMasterClasses from './AllMasterClasses/MainAllMasterClasses';
import ConnectWithTeam from './ConnectWithTeam';
import JionWithWhatsApp from './JionWithWhatsApp';
import MoreMasterClasses from './MoreMasterClasses';
import MasterTestimonials from '../MasterClassDetails/MasterTestimonials';
import WhyJoinThisMasterClass from './WhyJoinThisMasterClass';

export default function MainMasterClassListing({ categoriesList, masterClassListData, eventsTestmonialsData }) {
  return (
    <>
      <ListingBanner />
      <MainAllMasterClasses categoriesList={categoriesList} masterClassListData={masterClassListData} />
      {/* <ConnectWithTeam /> */}
      {/* <MoreMasterClasses /> */}
      <JionWithWhatsApp />
      <WhyJoinThisMasterClass />
      {eventsTestmonialsData?.length > 0 && <MasterTestimonials eventsTestmonialsData={eventsTestmonialsData} />}
    </>
  );
}

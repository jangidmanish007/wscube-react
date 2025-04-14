'use client';
import ThankYou from '@/components/Layouts/Common/ThankYou';
import ThankYouEvent from '@/components/Layouts/Common/ThankYouEvent';
import { useSearchParams } from 'next/navigation';

function ThankYouMaster({ pageData }) {
  // const searchParams = useSearchParams();
  // const eventsParams = searchParams.get('type');

  return (
    <>
      <ThankYou />
      {/* {(eventsParams == 'events' && <ThankYouEvent pageData={pageData?.data} />) || <ThankYou />} */}
    </>
  );
}

export default ThankYouMaster;

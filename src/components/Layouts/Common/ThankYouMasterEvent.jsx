'use client';
import ThankYouEvent from '@/components/Layouts/Common/ThankYouEvent';

function ThankYouMasterEvent({ pageData }) {
  return (
    <>
      <ThankYouEvent pageData={pageData?.data} />
    </>
  );
}

export default ThankYouMasterEvent;

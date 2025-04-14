import React from 'react';
import MasterClassesListingCard from './AllMasterClasses/MasterClassesListingCard';

export default function MoreMasterClasses() {
  const allMasterClassesData = [
    {
      id: 1,
      name: 'Learn to create Excel Dashboards for Data Analytics',
      date: '14th Mar, Thu',
      time: '07:30 PM - 10:00 PM',
      totalEnrolled: '18.8K',
      image: '/images/master-class/masterclass-listing-banner-img-1.webp',
      userImages: [
        { id: 1, image: '/images/review-user.png' },
        { id: 2, image: '/images/review-user.png' },
        { id: 3, image: '/images/review-user.png' },
      ],
    },
    {
      id: 2,
      name: 'Learn to create Excel Dashboards for Data Analytics',
      date: '14th Mar, Thu',
      time: '07:30 PM - 10:00 PM',
      totalEnrolled: '18.8K',
      image: '/images/master-class/masterclass-listing-banner-img-2.webp',
      userImages: [
        { id: 1, image: '/images/review-user.png' },
        { id: 2, image: '/images/review-user.png' },
        { id: 3, image: '/images/review-user.png' },
      ],
    },
    {
      id: 3,
      name: 'Learn to create Excel Dashboards for Data Analytics',
      date: '14th Mar, Thu',
      time: '07:30 PM - 10:00 PM',
      totalEnrolled: '18.8K',
      image: '/images/master-class/masterclass-listing-banner-img-1.webp',
      userImages: [
        { id: 1, image: '/images/review-user.png' },
        { id: 2, image: '/images/review-user.png' },
        { id: 3, image: '/images/review-user.png' },
      ],
    },
  ];

  return (
    <section className="pb-lg-86 pb-66">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          {allMasterClassesData?.map((item, index) => {
            return (
              <div className="col-xl-4 col-md-6 mb-lg-20 mb-16" key={index}>
                <MasterClassesListingCard allMasterClassData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

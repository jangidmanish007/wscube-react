'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function StickyAdsContent({ stickyAdsData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const isClosed = Cookies.get('whatsappRedirectClosed');
    if (isClosed) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setFadeClass('fade-in');
      }, 3000);
    }
    setIsLoading(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    Cookies.set('whatsappRedirectClosed', 'true', { expires: 1 });
  };

  if (isLoading) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div
      className={`position-fixed bottom-0 mb-lg-20 mb-16 text-end sticky-ads-wrapper ${fadeClass}`}
      style={{ left: '20px', zIndex: '99' }}
    >
      <div className="img-box rounded-16 bg-white position-relative" style={{ border: '2px solid #27D045' }}>
        <button
          className="close-btn-icon w-size-24 h-size-24 d-flex align-items-center justify-content-center text-center
           bg-white rounded-circle border-w border-color-13 position-absolute end-0 mt-12 mr-12 p-0"
          onClick={handleClose}
        >
          <Image
            src={`${process.env.LOCAL_IMAGE_PATH}images/icons/x-circle-fill.svg`}
            width={24}
            height={24}
            className="img-fluid max-w-24"
          />
        </button>
        <Link href={`${stickyAdsData?.link}`} target="_blank">
          <div className="max-w-234 w-full">
            <Image
              src={`${process.env.IMG_PATH}${stickyAdsData?.image_url}`}
              width={234}
              height={417}
              className="img-fluid max-w-234 rounded-16 d-lg-block d-none"
            />
            <Image
              src={`${process.env.IMG_PATH}${stickyAdsData?.res_img_url}`}
              width={234}
              height={251}
              className="img-fluid max-w-234 rounded-16 d-lg-none d-block"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

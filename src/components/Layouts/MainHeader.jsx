'use client';
import { usePathname } from 'next/navigation';
import WhiteHeader from './WhiteHeader';
import DarkHeader from './DarkHeader';
import { useEffect, useState } from 'react';
import { getTopbarContent } from '@/_services/homeService';
import EventHomeModal from '@/components/Modals/EventHomeModal';
import Cookies from 'js-cookie';
import { isDarkHeaderRoute, isShowEventPopupRoute, isShowOtherPopupRoute, isShowStriped } from '@/_utils/headerUtil';

export default function MainHeader() {
  const pathname = usePathname();
  const [tobarBarData, setTopBarData] = useState('');
  const [showEventmodal, setShowEventmodal] = useState(false);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [scrollClass, setScrollClass] = useState(false);
  const [scrollBanner, setScrollBanner] = useState(false);
  const [showHeaderStriped, setShowHeaderStriped] = useState(false);
  const formattedPath = pathname?.startsWith('/') ? pathname?.slice(1) : pathname;
  const [eventTimer, setEventTimer] = useState(null);
  const [saleTimer, setSaleTimer] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, [pathname]);

  useEffect(() => {
    setIsDarkHeader(isDarkHeaderRoute(pathname, searchParams));
  }, [pathname, searchParams]);

  useEffect(() => {
    getTopbarContentData();
  }, [pathname]);

  function handlePopup(showPopupRoute, popupClosedCookie, setShowPopup, timer, setTimer) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
      setShowPopup(false);
    }
    if (showPopupRoute(pathname)) {
      const popupClosed = Cookies.get(popupClosedCookie);
      if (!popupClosed && tobarBarData?.pop_image_link) {
        const newTimer = setTimeout(() => {
          setShowPopup(true);
        }, 4000);
        setTimer(newTimer);
      } else {
        setShowPopup(false);
      }
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }

  useEffect(() => {
    handlePopup(isShowEventPopupRoute, 'homeEventClosed', setShowEventmodal, eventTimer, setEventTimer);
  }, [tobarBarData, pathname]);

  useEffect(() => {
    handlePopup(isShowOtherPopupRoute, 'SalePopupClosed', setShowSaleModal, saleTimer, setSaleTimer);
  }, [tobarBarData, pathname]);

  async function getTopbarContentData() {
    let params = {};

    if (pathname != '/') {
      params = {
        page_slug: formattedPath,
      };
    }
    const response = await getTopbarContent(params);
    if (response?.status) {
      setTopBarData(response?.result);
    } else {
      setTopBarData('');
    }
  }

  useEffect(() => {
    if (tobarBarData) {
      if (isShowStriped(pathname)) {
        setShowHeaderStriped(true);
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 200) {
            setShowHeaderStriped(false);
          } else {
            setShowHeaderStriped(true);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      } else {
        setShowHeaderStriped(false);
      }
    }
  }, [pathname, tobarBarData]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setScrollClass(true);
      } else {
        setScrollClass(false);
      }
      if (scrollY > 900) {
        setScrollBanner(true);
      } else {
        setScrollBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sideMenuActive) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [sideMenuActive]);

  return (
    <>
      {showEventmodal && (
        <EventHomeModal
          setShowEventmodal={setShowEventmodal}
          tobarBarData={tobarBarData}
          pathname={pathname}
          type="EVENT_POPUP"
        />
      )}
      {showSaleModal && (
        <EventHomeModal
          setShowSaleModal={setShowSaleModal}
          tobarBarData={tobarBarData}
          pathname={pathname}
          type="SALE_POPUP"
        />
      )}
      {(isDarkHeader && (
        <DarkHeader
          tobarBarData={tobarBarData}
          sideMenuActive={sideMenuActive}
          setSideMenuActive={setSideMenuActive}
          scrollClass={scrollClass}
          scrollBanner={scrollBanner}
          showHeaderStriped={showHeaderStriped}
        />
      )) || (
        <WhiteHeader
          tobarBarData={tobarBarData}
          sideMenuActive={sideMenuActive}
          setSideMenuActive={setSideMenuActive}
          scrollClass={scrollClass}
          scrollBanner={scrollBanner}
          showHeaderStriped={showHeaderStriped}
        />
      )}
    </>
  );
}

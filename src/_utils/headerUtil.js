'use client'
import { HeaderConfig } from "@/components/Layouts/HeaderConfig";

export function isDarkHeaderRoute(pathname, searchParams) {
  const pathWithoutQuery = pathname;

  const thankYouRoutes = [
    '/thank-you-dm/',
    '/thank-you-app/',
    '/thank-you-data/',
    '/thank-you-design/',
    '/thank-you-cs/',
    '/thank-you-web/'
  ];

  const isThankYouRoute = thankYouRoutes.some(route => pathWithoutQuery.startsWith(route));
  if (isThankYouRoute && searchParams && searchParams.get('type') === 'events') {
    return false;
  }

  const isPortfolioCategory = /^\/portfolio\/[^/]+$/.test(pathWithoutQuery);
  if (isPortfolioCategory) {
    return true;
  }

  // Check for other dark header routes
  return HeaderConfig.DarkHeader.some((route) => {
    const routeRegex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`);
    return routeRegex.test(pathWithoutQuery);
  });
}

// for show event popup
export function isShowEventPopupRoute(pathname) {
  return HeaderConfig.ShowEventPopup.some((route) => {
    const routeRegex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`);
    return routeRegex.test(pathname);
  });
}

// show other Popup
export function isShowOtherPopupRoute(pathname) {
  return HeaderConfig.ShowOtherPopup.some((route) => {
    const routeRegex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`);
    return routeRegex.test(pathname);
  });
}


// for ShowStriped on topbar
export function isShowStriped(pathname) {
  const match = HeaderConfig.ShowStriped.some((route) => {
    const routeRegex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`);
    const isMatch = routeRegex.test(pathname);
    return isMatch;
  });
  return match;
}
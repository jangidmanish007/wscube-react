'use client';
import { Nav, Navbar } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { exploreCoursesData } from './navData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import HeaderMarquee from './HeaderMarquee';
import AuthButton from '../Utilities/AuthButton';
import UserDropdown from './Common/UserDropdown';
import { useAuth } from '@/_context/AuthContext';
import { usePathname } from 'next/navigation';
import TopStripedBar from './TopStripedBar';

export default function DarkHeader({
  tobarBarData,
  sideMenuActive,
  setSideMenuActive,
  scrollClass,
  scrollBanner,
  showHeaderStriped,
}) {
  const pathname = usePathname();
  const { isLoggedIn, loading, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isSkillsDropdownShow, setIsSkillsDropdownShow] = useState(false);
  const [isSkillMenuMobile, setIsSkillMenuMobile] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsSkillsDropdownShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleCloseMenu() {
    setSideMenuActive(false);
    setIsOpen(false);
    setIsSkillMenuMobile(false);
  }

  function afterLoginCloseMenu() {
    setSideMenuActive(false);
    setIsOpen(false);
    setIsSkillMenuMobile(false);
    logout();
  }

  const btnStyle = {
    display: 'block',
    color: 'var(--label-color-1)',
    background: 'transparent',
    transition: '0.2s',
    border: '2px solid rgba(107, 114, 128, 0.4)',
    outline: 'none',
    minHeight: '46px',
    width: '100%',
    padding: '11px 20px',
  };

  const getUserInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    if (nameParts.length >= 2) {
      return nameParts[0][0] + nameParts[1][0];
    }
    return nameParts[0][0] + (nameParts[0][1] || '');
  };

  const initials = getUserInitials(user?.full_name);

  return (
    <>
      {showHeaderStriped && tobarBarData && !sideMenuActive && (
        <TopStripedBar pathname={pathname} tobarBarData={tobarBarData} />
      )}
      <header
        className={`header-section d-none d-lg-block category-header ${(scrollClass && 'navbar-visible') || ''} ${
          (scrollBanner && 'nav-scrolled') || ''
        }`}
        style={{ top: tobarBarData && showHeaderStriped ? '56px' : '' }}
      >
        <div className="header-position px-lg-55 px-26 py-12">
          <Navbar expand="lg" className="py-0">
            <Navbar.Brand className="position-relative lpt-logo py-0 me-0">
              <Link href={'/'} title="WsCube Tech">
                <span className="d-block web-logo">
                  <Image src={`/images/wscube-tech-logo-2.svg`} alt="header-logo" width="149" height="60" />
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="menu-wrapper w-100">
              <Nav className="align-items-center ml-auto">
                <li className={`nav-item main-nav-items ml-44`}>
                  <div className="user-dropdown">
                    <div className="dropdown" ref={dropdownRef}>
                      <button
                        onClick={toggleDropdown}
                        className="white-fill-btn min-h-46 py-12 px-20 rounded-12 fs-16 fw-600 lh-24 d-flex align-items-center user-dropdown-btn dropdown-toggle cursor-pointer category-toggle"
                        style={{ border: `2px solid rgba(107, 114, 128, 0.4)` }}
                      >
                        <span className="mr-8">Explore Courses</span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.33594 10.8333L10.5026 15L14.6693 10.8333M6.33594 5L10.5026 9.16667L14.6693 5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="rounded-12 p-16 position-absolute dropdown-menu-list bg-white">
                          {exploreCoursesData?.map((item, index) => (
                            <div
                              as="span"
                              className="p-0 mb-8 dropdown-item"
                              key={index}
                              onClick={() => toggleDropdown()}
                            >
                              <Link
                                href={item?.slug}
                                // onClick={resetFilter}
                                className=""
                              >
                                <div className="dropdown-item-wrapper d-flex justify-content-between align-items-center py-11 px-20 rounded-8 fs-16 fw-400 lh-24 text-color-1">
                                  <span className="label-gray fw-400 fs-14"> {item?.course_name}</span>
                                  <Image
                                    src={process.env.IMG_PATH + 'images/icons/white-arrow-icon.svg'}
                                    width={13}
                                    height={12}
                                    alt=""
                                  />
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
                <li className={`nav-item main-nav-items ml-14`}>
                  <div className="user-dropdown skills-dropwdown">
                    <div className="dropdown" ref={dropdownRef2}>
                      <button
                        onClick={() => setIsSkillsDropdownShow(!isSkillsDropdownShow)}
                        className="white-fill-btn  min-h-46 py-12 px-20 rounded-12 fs-16 fw-600 lh-24 d-flex align-items-center skills-toggle user-dropdown-btn border-0 dropdown-toggle  cursor-pointer"
                        style={{ border: '2px solid transparent !important' }}
                      >
                        <span className="mr-8">On Campus Programs</span>
                        <FontAwesomeIcon icon={faChevronDown} width={10} height={10} />
                      </button>
                      {isSkillsDropdownShow && (
                        <div className="rounded-12 p-16 position-absolute dropdown-menu-list bg-white">
                          <div
                            as="span"
                            className="p-0 mb-8 dropdown-item"
                            onClick={() => setIsSkillsDropdownShow(false)}
                          >
                            <Link
                              href={'/jaipur'}
                              // onClick={resetFilter}
                            >
                              <div className="dropdown-item-wrapper d-flex justify-content-between align-items-center py-11 px-20 rounded-8 fs-16 fw-400 lh-24 text-color-1">
                                <span className="label-gray fw-400 fs-14"> Jaipur</span>
                                <Image
                                  src={process.env.IMG_PATH + 'images/icons/white-arrow-icon.svg'}
                                  width={13}
                                  height={12}
                                  alt=""
                                />
                              </div>
                            </Link>
                          </div>
                          <div as="span" className="p-0 mb-8 dropdown-item">
                            <Link href={'/jodhpur'} onClick={() => setIsSkillsDropdownShow(false)}>
                              <div className="dropdown-item-wrapper d-flex justify-content-between align-items-center py-11 px-20 rounded-8 fs-16 fw-400 lh-24 text-color-1">
                                <span className="label-gray fw-400 fs-14">Jodhpur</span>
                                <Image
                                  src={process.env.IMG_PATH + 'images/icons/white-arrow-icon.svg'}
                                  width={13}
                                  height={12}
                                  alt=""
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </Nav>
              {/* <Nav className="ms-auto align-items-center mr-20">
                <li className={`nav-item mx-1 main-nav-items`}>
                  <div className={`nav-items-link cursor-pointer`}>
                    <span className="text-color-2 fs-16 fw-600 lh-24 d-block py-lg-16 px-lg-20 px-12 px-16 apply-as-mentor-btn">
                      Apply as Mentor
                    </span>
                  </div>
                </li>
              </Nav>
              */}
              <Nav className="ms-auto align-items-center mr-20">
                <div className="d-flex align-items-center ms-xl-2">
                  <div className={`user-btn-wrapper d-flex align-items-center`}>
                    {(loading && <></>) ||
                      (!isLoggedIn && (
                        <div className="mr-lg-20">
                          <AuthButton
                            btnClass="category-header-btn fs-16 fw-600 lh-24"
                            title={'Login'}
                            btnStyle={btnStyle}
                          />
                        </div>
                      )) || (
                        <>
                          <UserDropdown dropdownClass="dropdown-dark-header" initials={initials} />
                        </>
                      )}
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <header
        className={`d-lg-none mobile-header mobile-category-header position-absolute w-100
        ${(scrollClass && 'navbar-mobile-visible') || ''}
        ${scrollBanner ? 'nav-mobile-scrolled' : ''} 
        ${sideMenuActive ? 'position-sticky top-0' : ''}`}
      >
        <div
          className={`h-size-72 w-100 mobile-navbar d-flex justify-content-between align-items-center px-16
        ${!scrollBanner ? 'bg-transparent' : ''}
        ${sideMenuActive ? 'add-new-bg' : ''}
        `}
        >
          <Link href={'/'} className="d-block">
            <Image src={process.env.IMG_PATH + 'images/wscube-tech-logo-2.svg'} alt="logo" width={120} height={48} />
          </Link>

          <div className="d-flex align-items-center">
            {sideMenuActive && (
              <div className="header-dropdown mr-24">
                <div className="dropdown auth-btns" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="min-h-40 py-9 px-10 rounded-8 fs-14 text-color-1 fw-600 lh-21 d-flex align-items-center header-dropdown-btn"
                  >
                    <span className="mr-8">Courses</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.33594 10.8333L10.5026 15L14.6693 10.8333M6.33594 5L10.5026 9.16667L14.6693 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      className="rounded-12 p-10 position-absolute dropdown-menu-list bg-white"
                      style={{ left: '-84px' }}
                    >
                      {exploreCoursesData?.map((item, index) => (
                        <div as="span" className="p-0 mb-8 dropdown-item" key={index} onClick={handleCloseMenu}>
                          <Link
                            href={item?.slug}
                            // onClick={resetFilter}
                            className=""
                          >
                            <div className="dropdown-item-wrapper d-flex justify-content-between align-items-center py-8 px-14 rounded-8 fs-16 fw-400 lh-24 text-color-1">
                              <span className="label-gray fw-400 fs-14"> {item?.course_name}</span>
                              <Image
                                src={process.env.IMG_PATH + 'images/icons/white-arrow-icon.svg'}
                                width={13}
                                height={12}
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {(sideMenuActive && (
              <button className="p-0 bg-transparent border-0 outline-none shadow-none">
                <Image
                  src={`${process.env.IMG_PATH}images/icons/menu-dark-close-icon.svg`}
                  alt="menu"
                  width={24}
                  height={16}
                  onClick={handleCloseMenu}
                />
              </button>
            )) || (
              <button className="p-0 bg-transparent border-0 outline-none shadow-none">
                <Image
                  src={`${process.env.IMG_PATH}images/mobile-menu-dark-icon.svg`}
                  alt="menu"
                  width={24}
                  height={16}
                  onClick={() => setSideMenuActive(!sideMenuActive)}
                />
              </button>
            )}
          </div>
          {/* 
            <Image
              src={`/images/mobile-menu-dark-icon.svg`}
              alt="menu"
              width={24}
              height={16}
              onClick={handleCloseMenu}
            /> */}
        </div>
      </header>
      <div
        className={`mobile-hamburgur category-sidebar w-100 p-12 d-lg-none d-block scrollbar-hidden  ${
          (sideMenuActive && 'active-hamburger') || ''
        }`}
      >
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="div">
            {(loading && <></>) ||
              (isLoggedIn && (
                <div className={`user-details-responsive-dark px-16 mb-0`}>
                  <ul
                    className="list-unstyled pb-20"
                    style={{
                      borderBottom: '1px solid rgba(107, 114, 128, 0.4)',
                    }}
                  >
                    <li className="user-info py-12 d-flex mb-2 align-items-center">
                      {(user?.profile_pic && (
                        <Image
                          src={`${process.env.IMG_PATH}${user?.profile_pic}`}
                          width={52}
                          height={52}
                          alt="user-login"
                          className="me-3 rounded-circle min-w-52 max-w-52 max-h-52 min-h-52 img-fluid object-fit-cover"
                          style={{ objectPosition: '50% 20%' }}
                        />
                      )) || (
                        <div
                          className="profile-initials w-size-52 h-size-52 d-flex align-items-center justify-content-center rounded-circle fs-14 lh-21 fw-600 text-color-1 text-uppercase"
                          style={{
                            border: '1px solid #D1D5DB',
                            backgroundColor: '#E5E7EB',
                          }}
                        >
                          {initials}
                        </div>
                      )}
                      <div className="ml-12">
                        <h3 className="fs-14 lh-20 fw-500 mb-0 text-capitalize">
                          {(user?.full_name?.length > 24 && `${user?.full_name?.substring(0, 18)}...`) ||
                            user?.full_name}
                        </h3>
                        <span className="fs-14 lh-20 fw-400 label-color-1 d-inline-block text-color-15 show-mobile-number">
                          +{user?.country_code} {user?.phone_number}
                        </span>
                      </div>
                    </li>
                    <li className="py-0 px-0">
                      <Link
                        href={`${process.env.DASHBOARD_URL}`}
                        // onClick={resetFilter}
                        className="d-flex align-items-center mb-0 py-10"
                      >
                        <Image
                          src={`/images/icons/dashboard-home.svg`}
                          className="fs-15 me-2 base-color"
                          width={16}
                          height={16}
                        />
                        <span className="fw-400 fs-14 fw-400">Dashboard</span>
                      </Link>
                    </li>
                    <li className="py-0 px-0">
                      <Link
                        href={`${process.env.DASHBOARD_URL}/basic-details`}
                        // onClick={resetFilter}
                        className="d-flex align-items-center mb-0 py-10"
                      >
                        <Image
                          src={`/images/icons/user-outline-icon.svg`}
                          className="fs-15 me-2 base-color"
                          width={16}
                          height={16}
                        />
                        <span className="fw-400 fs-14 fw-400">My Profile</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            <ul className="list-unstyled mb-24 mobile-category-links">
              <li className="nav-items-list">
                <Link href={'/about'} className="" onClick={handleCloseMenu}>
                  <span className="d-inline-block py-12 px-16 fs-14 fw-600 lh-21 text-color-1">About Us</span>
                </Link>
              </li>
              <li className="nav-items-list">
                <div
                  className="d-flex justify-content-between py-12 px-16 fs-14 fw-600 lh-21 text-color-1 cursor-pointer"
                  onClick={() => setIsSkillMenuMobile(!isSkillMenuMobile)}
                >
                  <span className="d-inline-block">On Campus Programs</span>
                  <div className={`transation-2 ${(isSkillMenuMobile && 'rotate-90') || 'rotate-0'}`}>
                    <FontAwesomeIcon icon={faChevronRight} width={8} height={8} />
                  </div>
                </div>
                <div className={`pl-24 menu-list-show ${isSkillMenuMobile && 'menu-collapsed'}`}>
                  <div as="span" className="p-0 mb-8 dropdown-item">
                    <Link href={'/jaipur'} onClick={() => handleCloseMenu()}>
                      <div className="fs-16 fw-400 lh-24 text-color-1">
                        - <span className="label-gray fw-400 fs-14"> Jaipur</span>
                      </div>
                    </Link>
                  </div>
                  <div as="span" className="p-0 mb-8 dropdown-item">
                    <Link href={'/jodhpur'} onClick={() => handleCloseMenu()}>
                      <div className="fs-16 fw-400 lh-24 text-color-1">
                        - <span className="label-gray fw-400 fs-14"> Jodhpur</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-items-list">
                <Link href={'/'} className="" onClick={handleCloseMenu}>
                  <span className="d-inline-block py-12 px-16 fs-14 fw-600 lh-21 text-color-1">Apply as Mentor</span>
                </Link>
              </li>
              <li className="nav-items-list">
                <Link href={'/contact'} className="" onClick={handleCloseMenu}>
                  <span className="d-inline-block py-12 px-16 fs-14 fw-600 lh-21 text-color-1">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-24">
            {(loading && <></>) ||
              (isLoggedIn && (
                <div className="responisve-auth-button px-14">
                  <button
                    type="button"
                    className={`fs-14 fw-600 lh-24 rounded-12 bg-transparent category-header-btn max-w-300`}
                    st
                    onClick={afterLoginCloseMenu}
                    style={btnStyle}
                  >
                    <Image
                      src={`/images/icons/log-out-icon.svg`}
                      className="fs-15 me-2 base-color"
                      width={16}
                      height={16}
                    />
                    Logout
                  </button>
                </div>
              )) || (
                <div className="d-grid grid-cols-2 grid-gap-12 w-100">
                  <div>
                    <AuthButton
                      title="Login"
                      btnClass="category-header-btn fw-600"
                      btnStyle={btnStyle}
                      handleCloseMenu={handleCloseMenu}
                    />
                  </div>
                  <div>
                    <AuthButton
                      title="Join for Free"
                      btnClass="category-header-btn fw-600"
                      btnStyle={btnStyle}
                      handleCloseMenu={handleCloseMenu}
                    />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
      {sideMenuActive && (
        <div
          className={`hamburger-overlay w-100 vh-100 position-fixed start-0 top-0 ${
            (sideMenuActive && 'active-overlay') || ''
          }`}
          // onClick={() => setSideMenuActive(false)}
        ></div>
      )}
    </>
  );
}

DarkHeader.propTypes = {
  headerLogo: PropTypes.string,
};

import { useAuth } from '@/_context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function UserDropdown({ dropdownClass, initials }) {
  const { user, logout } = useAuth();

  return (
    <>
      <div className={`main-user-dropdown position-relative ${dropdownClass} d-lg-block d-none`}>
        <Dropdown>
          <Dropdown.Toggle
            variant="none"
            id="dropdown-basic"
            className="p-0 border-0 bg-transparent d-flex align-items-center"
          >
            <div className="user-info d-flex mb-2 align-items-center">
              {(user?.profile_pic && (
                <Image
                  src={`${process.env.IMG_PATH}${user?.profile_pic}`}
                  width={44}
                  height={44}
                  alt="user-login"
                  className="rounded-circle min-w-44 max-w-44 max-h-44 min-h-44 img-fluid object-fit-cover"
                  style={{ objectPosition: '50% 5%' }}
                />
              )) || (
                <div
                  className="profile-initials w-size-44 h-size-44 d-flex align-items-center justify-content-center rounded-circle fs-14 lh-21 fw-600 text-color-1 text-uppercase"
                  style={{
                    border: '1px solid #D1D5DB',
                    backgroundColor: '#E5E7EB',
                  }}
                >
                  {initials}
                </div>
              )}
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className=""
            style={{
              boxShadow: '0px 4px 6px -2px #10182808, 0px 12px 20px 0px #1018280F',
              border: '1px solid #F2F4F7',
              BorderRedius: '8px',
            }}
          >
            <div
              className="user-info px-16 py-12 d-flex mb-2 align-items-center"
              style={{ borderBottom: '1px solid #F2F4F7' }}
            >
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
                <h3 className="fs-14 lh-20 fw-500 mb-0 text-capitalize text-color-1">
                  {(user?.full_name?.length > 24 && `${user?.full_name?.substring(0, 18)}...`) || user?.full_name}
                </h3>
                <span className="fs-14 lh-20 fw-400 label-color-1 d-inline-block text-color-15">
                  +{user?.country_code} {user?.phone_number}
                </span>
              </div>
            </div>
            <Dropdown.Item as="span" className="py-0 px-0">
              <Link
                href={`${process.env.DASHBOARD_URL}`}
                // onClick={resetFilter}
                className="d-flex align-items-center mb-0 px-16 py-10"
              >
                <Image
                  src={`/images/icons/dashboard-home.svg`}
                  className="fs-15 me-2 base-color"
                  width={16}
                  height={16}
                />
                <span className="text-color-34 fw-400 fs-14 fw-400">Dashboard</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item as="span" className="py-0 px-0">
              <Link
                href={`${process.env.DASHBOARD_URL}/basic-details`}
                // onClick={resetFilter}
                className="d-flex align-items-center mb-0 px-16 py-10"
              >
                <Image
                  src={`/images/icons/user-outline-icon.svg`}
                  className="fs-15 me-2 base-color"
                  width={16}
                  height={16}
                />
                <span className="text-color-34 fw-400 fs-14 fw-400">My Profile</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item as="span" className="py-0 px-0">
              <div className="d-flex align-items-center px-16 py-10 cursor-pointer" onClick={logout}>
                <Image
                  src={`/images/icons/log-out-icon.svg`}
                  className="fs-15 me-2 base-color"
                  width={16}
                  height={16}
                />
                <span className="text-color-34 fw-400 fs-14 fw-400">Logout</span>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

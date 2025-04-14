import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Cookies from 'js-cookie';
import ApplyNowLogin from './ApplyNowLogin';
import ApplyNowOtpVerify from './ApplyNowOtpVerify';

function ApplyNowAuth({
  showLoginSideBar,
  setShowLoginSideBar,
  mobileNo,
  email,
  country,
  stName,
  courseName,
  setIsLoggedIn,
  fetchUser,
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [popupState, setPopupState] = useState({
    showLogin: false,
    showRegister: false,
    showForgetPassword: false,
    showResetPassword: false,
    showOtp: false,
  });
  const [userEmail, setUserEmail] = useState(email);
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [userMobile, setUserMobile] = useState({
    code: `${country}`,
    number: `${country}${mobileNo}`,
    numWithoutCode: mobileNo,
  });

  useEffect(() => {
    if (showLoginSideBar) {
      setShowAuthModal(true);
      setPopupState({ ...popupState, showLogin: true });
      setShowLoginSideBar(false);
    }
  }, [showLoginSideBar]);

  useEffect(() => {
    if (showAuthModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showAuthModal]);

  function handleClosePopup() {
    setUserEmail('');
    setShowAuthModal(false);
    setPopupState({
      showLogin: false,
      showRegister: false,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: false,
    });
    setLoginWithEmail(false);
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
  }

  function openOtpPopup() {
    setPopupState({
      showLogin: false,
      showRegister: false,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: true,
    });
  }

  return (
    <>
      <Offcanvas
        show={showAuthModal}
        className={`authentication-wrapper-box bg-white p-20 ${showAuthModal && 'sidemenu-bar-active'}`}
        backdrop="static"
        backdropClassName="apply-auth-backdrop"
        placement="end"
      >
        {showAuthModal && (
          <>
            {popupState.showLogin && (
              <ApplyNowLogin
                userMobile={userMobile}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                setUserMobile={setUserMobile}
                loginWithEmail={loginWithEmail}
                setLoginWithEmail={setLoginWithEmail}
                openOtpPopup={openOtpPopup}
                country={country}
                courseName={courseName}
                stName={stName}
              />
            )}
            {popupState.showOtp && (
              <ApplyNowOtpVerify
                userMobile={userMobile}
                handleClosePopup={handleClosePopup}
                userEmail={userEmail}
                country={country}
                setIsLoggedIn={setIsLoggedIn}
                fetchUser={fetchUser}
              />
            )}
          </>
        )}
      </Offcanvas>
    </>
  );
}

export default ApplyNowAuth;

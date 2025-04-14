import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SignUp from '../Layouts/Authentication/SignUp';
import Login from '../Layouts/Authentication/Login';
import ForgotPassword from '../Layouts/Authentication/ForgotPassword';
import { usePathname } from 'next/navigation';
import { Offcanvas } from 'react-bootstrap';
import OtpVerification from '../Layouts/Authentication/OtpVerification';
import ResetPassword from '../Layouts/Authentication/ResetPassword';
import Cookies from 'js-cookie';
import { useAuth } from '@/_context/AuthContext';

function AuthButton({ title, btnClass, btnStyle, handleCloseMenu, openPopup }) {
  const pathname = usePathname();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [popupState, setPopupState] = useState({
    showLogin: false,
    showRegister: false,
    showForgetPassword: false,
    showResetPassword: false,
    showOtp: false,
  });
  const [otpToken, setOtpToken] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [verifyOtpFor, setVerifyOtpFor] = useState('LOGIN');
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [checkYourEmail, setCheckYourEmail] = useState(false);
  const [userMobile, setUserMobile] = useState({
    code: '91',
    number: '',
    numWithoutCode: '',
  });
  // const { showLoginSideBar, setShowLoginSideBar } = useAuth();

  // useEffect(() => {
  //   const getSideBar = Cookies.get('showLoginSideBar');
  //   if (showLoginSideBar && getSideBar) {
  //     setShowAuthModal(true);
  //     setPopupState({ ...popupState, showLogin: true });
  //     setShowLoginSideBar(false);
  //     // Cookies.remove('showLoginSideBar');
  //   }
  // }, [showLoginSideBar]);

  useEffect(() => {
    handleClosePopup();
  }, [pathname]);

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
    setUserName('');
    setUserEmail('');
    setShowAuthModal(false);
    setPopupState({
      showLogin: false,
      showRegister: false,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: false,
    });
    Cookies.remove('isApplicationPage');
    // setResetSuccessfully(false);
    setLoginWithEmail(false);
    setCheckYourEmail(false);
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
  }

  // Open Register Popup
  function openRegisterPopup() {
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
    setPopupState({
      showLogin: false,
      showRegister: true,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: false,
    });
  }

  // Open Login Popup
  function openLoginPopup() {
    if (handleCloseMenu) {
      handleCloseMenu();
    }
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
    setShowAuthModal(true);
    setCheckYourEmail(false);
    setPopupState({
      showLogin: true,
      showRegister: false,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: false,
    });
    // setResetSuccessfully(false);
  }

  function openRegisterEdit() {
    setPopupState({
      showLogin: false,
      showRegister: true,
      showForgetPassword: false,
      showResetPassword: false,
      showOtp: false,
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

  function openForgotPasswordPopup() {
    setUserEmail('');
    setPopupState({
      showLogin: false,
      showRegister: false,
      showForgetPassword: true,
      showResetPassword: false,
      showOtp: false,
    });
  }

  function openResetPasswordPopup() {
    setPopupState({
      showLogin: false,
      showRegister: false,
      showForgetPassword: false,
      showResetPassword: true,
      showOtp: false,
    });
  }

  // function openLoginAfterSetPassword() {
  //   redirectTohome();
  //   if (pathname === '/') {
  //     setTimeout(() => {
  //       openLoginPopup();
  //     }, 5000);
  //   }
  // }

  function handleOpenPopup() {
    setShowAuthModal(true);
    if (openPopup == 'Forget_Password') {
      openForgotPasswordPopup();
    } else if (openPopup == 'SIGN_UP') {
      openRegisterPopup();
    } else if (openPopup == 'LOGIN_WITH_EMAIL') {
      setLoginWithEmail(true);
      openLoginPopup();
    } else {
      openLoginPopup();
    }
  }

  return (
    <>
      <button
        type="button"
        title={title}
        className={`lh-24 rounded-12 bg-transprent ${
          btnClass || 'white-fill-btn min-h-46 py-12 px-28 rounded-12 fs-16 fw-600 lh-24'
        }`}
        style={btnStyle}
        onClick={handleOpenPopup}
      >
        {title}
      </button>
      <Offcanvas
        show={showAuthModal}
        className={`authentication-wrapper-box bg-white p-20 ${showAuthModal && 'sidemenu-bar-active'}`}
        backdrop="static"
        placement="end"
      >
        {showAuthModal && (
          <>
            {popupState.showLogin && (
              <Login
                handleClosePopup={handleClosePopup}
                openRegisterPopup={openRegisterPopup}
                setUserMobile={setUserMobile}
                userMobile={userMobile}
                userEmail={userEmail}
                setLoginWithEmail={setLoginWithEmail}
                loginWithEmail={loginWithEmail}
                setUserEmail={setUserEmail}
                setOtpToken={setOtpToken}
                openOtpPopup={openOtpPopup}
                openForgotPasswordPopup={openForgotPasswordPopup}
                setVerifyOtpFor={setVerifyOtpFor}
              />
            )}
            {popupState.showForgetPassword && (
              <ForgotPassword
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                openLoginPopup={openLoginPopup}
                handleClosePopup={handleClosePopup}
                openOtpPopup={openOtpPopup}
                setVerifyOtpFor={setVerifyOtpFor}
                checkYourEmail={checkYourEmail}
                setCheckYourEmail={setCheckYourEmail}
              />
            )}
            {popupState.showRegister && (
              <SignUp
                handleClosePopup={handleClosePopup}
                openLoginPopup={openLoginPopup}
                setUserMobile={setUserMobile}
                userMobile={userMobile}
                userEmail={userEmail}
                userName={userName}
                setUserName={setUserName}
                setUserEmail={setUserEmail}
                setOtpToken={setOtpToken}
                openOtpPopup={openOtpPopup}
                setVerifyOtpFor={setVerifyOtpFor}
                checkYourEmail={checkYourEmail}
                setCheckYourEmail={setCheckYourEmail}
              />
            )}
            {popupState.showOtp && (
              <OtpVerification
                otpToken={otpToken}
                setOtpToken={setOtpToken}
                handleClosePopup={handleClosePopup}
                userMobile={userMobile}
                openLoginPopup={openLoginPopup}
                verifyOtpFor={verifyOtpFor}
                openRegisterPopup={openRegisterPopup}
                userEmail={userEmail}
                openForgotPasswordPopup={openForgotPasswordPopup}
                openResetPasswordPopup={openResetPasswordPopup}
                openRegisterEdit={openRegisterEdit}
                setPopupState={setPopupState}
              />
            )}
            {/* {popupState.showResetPassword && (
              <ResetPassword
                openResetPasswordPopup={openResetPasswordPopup}
                openLoginPopup={openLoginPopup}
                resetSuccessFully={resetSuccessFully}
                setResetSuccessfully={setResetSuccessfully}
                handleClosePopup={handleClosePopup}
                otpToken={otpToken}
              />
            )} */}
          </>
        )}
      </Offcanvas>
    </>
  );
}

AuthButton.propTypes = {
  title: PropTypes.string,
};

export default AuthButton;

import { useAuth } from '@/_context/AuthContext';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

function ApplicationLoginPrompt({ setShowLoginPrompt }) {
  const { setShowLoginSideBar } = useAuth();
  return (
    <>
      <Modal
        show={true}
        centered
        backdrop="static"
        keyboard={false}
        size="md"
        backdropClassName="ws-modal-backdrop login-prompt-backdrop"
      >
        <Modal.Body className="p-16">
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <Image
              width={60}
              height={60}
              src={`/images/icons/info-circle-gray.svg`}
              alt="icon"
              className="img-fluid mb-3"
            />
            <h5 className="fw-600 fs-20 text-center lh-30">
              You are not logged in or you are not logged in with your registered mobile number.
            </h5>
            <button
              onClick={() => {
                setShowLoginSideBar(true);
                Cookies.set('isApplicationPage', true);
                Cookies.set('showLoginSideBar', true);
                setShowLoginPrompt(false);
              }}
              type="button"
              className="blue-fill-btn min-h-48 min-h-48 px-36 px-4 min-w-120 fs-lg-16 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled mt-3"
            >
              Login
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplicationLoginPrompt;

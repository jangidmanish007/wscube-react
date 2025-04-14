import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from 'react-bootstrap/Modal';

function SubmittedFormModal({ setShowSubimttedModal }) {
  const router = useRouter();
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
          {/* <div>
            <Image
              src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
              width={24}
              height={24}
              alt="Close"
              onClick={() => {
                setShowSubimttedModal(false);
              }}
              className="img-fluid cursor-pointer position-absolute close-modal"
            />
          </div> */}
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <Image
              width={60}
              height={60}
              src={`/images/icons/info-circle-gray.svg`}
              alt="icon"
              className="img-fluid mb-3"
            />
            <h5 className="fw-600 fs-20 text-center">An application form has already been submitted by you.</h5>
            <button
              onClick={() => {
                router.push(process.env.NEXT_PUBLIC_SITE_URL);
                setShowSubimttedModal(false);
              }}
              type="button"
              className="blue-fill-btn min-h-48 min-h-48 px-36 px-4 min-w-120 fs-lg-16 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled mt-3"
            >
              Back to Home
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SubmittedFormModal;

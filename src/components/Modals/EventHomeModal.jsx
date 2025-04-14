'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

function EventHomeModal(props) {
  const { setShowEventmodal, setShowSaleModal, tobarBarData, pathname, type } = props;

  function handleClosePopup() {
    if (type == 'SALE_POPUP') {
      Cookies.set('SalePopupClosed', true, { expires: 1 });
      setShowSaleModal(false);
    } else {
      Cookies.set('homeEventClosed', true, { expires: 1 });
      setShowEventmodal(false);
    }
  }

  return (
    <>
      <Modal
        show={true}
        centered
        size="md"
        className="event-home-modal"
        dialogClassName="max-w-550 mx-auto"
        contentClassName="max-w-550 mx-auto"
        backdropClassName="ws-modal-backdrop"
      >
        <Modal.Body className="py-0 px-2">
          <Image
            src={process.env.LOCAL_IMAGE_PATH + 'images/icons/close-white-bg.svg'}
            width={24}
            height={24}
            alt="Close"
            style={{ top: '20px' }}
            onClick={handleClosePopup}
            className="img-fluid cursor-pointer position-absolute close-modal"
          />
          <a
            onClick={handleClosePopup}
            href={tobarBarData?.pop_image_link}
            target="blank"
            className="text-decoration-none d-flex overflow-hidden align-items-center justify-content-center max-w-550 border-w-4 border-color-2 max-h-550 rounded-24"
          >
            <Image
              src={process.env.IMG_PATH + tobarBarData?.pop_image_url}
              width={550}
              height={550}
              alt="Image"
              className="img-fluid rounded-20"
            />
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EventHomeModal;

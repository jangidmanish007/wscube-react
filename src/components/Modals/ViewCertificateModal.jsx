import Image from 'next/image';
import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ViewCertificateModal({ certificateImage, setShowCertificateModal, showCertificateModal }) {
  return (
    <Modal
      show={showCertificateModal}
      centered
      onHide={() => setShowCertificateModal(false)}
      // backdrop="static"
      keyboard={false}
      size="lg"
      className="rounded-16 p-2 bg-transparent landing-page-video-modal"
    >
      <Image
        src={process.env.IMG_PATH + 'images/icons/close-modal-white.svg'}
        width={24}
        height={24}
        alt="Close"
        onClick={() => setShowCertificateModal(false)}
        style={{ right: '-2rem', top: '-2rem' }}
        className="img-fluid cursor-pointer position-absolute close-modal"
      />
      <Modal.Body className={`w-full postion-relative p-0 max-w-800 mx-auto rounded-12 `}>
        <div className="certificate-img-box rounded-12 text-center mx-auto">
          <Image
            src={process.env.IMG_PATH + certificateImage}
            width={800}
            height={600}
            className="img-fluid cursor-pointer rounded-12 max-h-600 w-auto mx-auto"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

import Image from 'next/image';
import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ReviewYoutubeModal(props) {
  const { showVideoModal, setShowVideoModal, youtubeUrl } = props;

  let videoId = '';
  let modalBodyClass = false;
  if (youtubeUrl.includes('watch?v=')) {
    videoId = youtubeUrl.split('watch?v=')[1];
    modalBodyClass = false;
  } else if (youtubeUrl.includes('/shorts/')) {
    videoId = youtubeUrl.split('/').pop();
    modalBodyClass = true;
  }

  const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;

  function handleClosePopup() {
    setShowVideoModal(false);
  }

  return (
    <Modal
      show={showVideoModal}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
      className="rounded-16 p-2 bg-transparent overflow-hidden landing-page-video-modal"
    >
      <Modal.Body
        className={`w-full postion-relative p-1 ${
          (modalBodyClass && 'max-w-500') || 'max-w-794'
        } mx-auto rounded-[20px]`}
      >
        <div className="rounded-20 px-16">
          <button
            className="btn-close-icon d-flex justify-content-end bg-transparent border-0 mb-0 ms-auto focus-visible:outline-none"
            onClick={handleClosePopup}
          >
            <Image
              src={`${process.env.LANDING_IMG_PATH}images/landing-page/icons/fill-close.svg`}
              alt="closeImg"
              width={24}
              height={24}
            />
          </button>
          <div className="position-relative py-4 pb-28 rounded-0 overflow-hidden">
            <iframe
              width="100%"
              src={embeddedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`rounded-8 ${
                (modalBodyClass && 'h-size-xl-600 h-size-lg-490 h-size-480') || 'h-size-lg-410 h-size-400'
              }`}
            ></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

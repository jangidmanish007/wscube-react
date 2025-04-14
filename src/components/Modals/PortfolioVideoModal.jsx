import Image from 'next/image';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { extractYouTubeVideoId } from '@/_helper/Common';

export default function PortfolioVideoModal({ showPortfolioModal, setShowPortfolioModal, videoUrl, popupTitle }) {
  let videoId = '';
  let embeddedUrl = '';
  if (videoUrl.includes('watch?v=')) {
    videoId = videoUrl.split('watch?v=')[1];
    const match = extractYouTubeVideoId(videoUrl);
    embeddedUrl = `https://www.youtube.com/embed/${match}`;
  } else if (videoUrl.includes('/shorts/')) {
    videoId = videoUrl.split('/').pop();
    embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <Modal
      show={showPortfolioModal}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
      className="rounded-16 p-2 bg-transparent landing-page-video-modal"
    >
      <Modal.Body className={`w-full postion-relative p-0 max-w-600 mx-auto rounded-12 bg-white`}>
        <div className="position-relative px-12 py-14 border-w border-color-45 border-top-0 border-start-0 border-end-0 d-flex justify-content-between">
          <h4 className="fs-18 fw-600 text-color-1 lh-27 mb-0">{popupTitle}</h4>
          <Image
            src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
            width={24}
            height={24}
            alt="Close"
            onClick={() => setShowPortfolioModal(false)}
            className="img-fluid cursor-pointer close-modal ml-12"
          />
        </div>
        <div className="project-details-modal-wrapper p-16">
          <div className="youtube-video-modal w-full">
            <iframe
              width="100%"
              src={embeddedUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-12 h-size-341"
              style={{ marginBottom: '-6px' }}
            ></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoModal(props) {
  const { setShowVideoModal, showVideoModal, videoUrl, ModalType, LearnerData } = props;
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, [showVideoModal, videoUrl]);

  return (
    <>
      <Modal
        show={showVideoModal}
        onHide={() => setShowVideoModal(false)}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        className="video-modal-box"
        backdropClassName="ws-modal-backdrop"
      >
        <Modal.Body className="p-16">
          <div className="">
            <Image
              src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
              width={24}
              height={24}
              alt="Close"
              onClick={() => setShowVideoModal(false)}
              className="img-fluid cursor-pointer position-absolute close-modal"
            />

            <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-lg-30 mb-20">{LearnerData?.userName}</h4>
          </div>
          {ModalType === 'Normal_Video' && (
            <div className="video-container-wrapper rounded-16">
              <video width="100%" height="340" controls className="rounded-16 object-fit-cover" ref={videoRef}>
                <source
                  src={`${process.env.IMG_PATH}${LearnerData?.videoUrl}`}
                  type="video/mp4"
                  className="rounded-16"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoModal;

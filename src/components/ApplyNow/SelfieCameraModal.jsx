import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Webcam from 'react-webcam';

function SelfieCameraModal(props) {
  const { setShowSelfieModal, isCameraActive, setIsCameraActive, setSelfieImage, setImagePreview, lmLeadId } = props;
  const [cameraError, setCameraError] = useState(false);
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: 'user',
  };
  const webcamRef = useRef(null);

  useEffect(() => {
    navigator?.mediaDevices
      ?.getUserMedia({ video: true })
      .then(() => setCameraError(false)) // Camera is available
      .catch(() => setCameraError(true)); // Camera is not available
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // setSelfieImage(imageSrc);
    const base64ToFile = (base64String, filename) => {
      const arr = base64String.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    };

    // Create a File object from the Base64 string
    const selfieFile = base64ToFile(imageSrc, `${lmLeadId}selfie.png`);
    const previewURL = URL.createObjectURL(selfieFile);
    setImagePreview(previewURL);
    setSelfieImage(selfieFile);
  }, [webcamRef]);

  return (
    <>
      <Modal show={true} centered backdrop="static" keyboard={false} size="md" backdropClassName="ws-modal-backdrop">
        <Modal.Body className="p-16">
          <div className="">
            <h4 className="fs-18 fw-600 text-color-1 lh-30">Take a Selfie</h4>
            <Image
              src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
              width={24}
              height={24}
              alt="Close"
              onClick={() => {
                setShowSelfieModal(false);
                setIsCameraActive(false);
              }}
              title="Close"
              className="img-fluid cursor-pointer position-absolute close-modal"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center py-4">
            {/* {isCameraActive && (
              <div className="position-relative w-size-200 h-size-200">
                <Webcam
                  audio={false}
                  height={200}
                  ref={webcamRef}
                  screenshotQuality={1}
                  screenshotFormat="image/png"
                  width={200}
                  style={{ objectFit: 'cover' }}
                  mirrored={false}
                  videoConstraints={videoConstraints}
                />
              </div>
            )}

            {isCameraActive && (
              <button
                onClick={() => {
                  capture();
                  setIsCameraActive(false);
                  setShowSelfieModal(false);
                }}
                type="button"
                className="blue-fill-btn min-h-48 min-h-48 px-36 px-4 min-w-120 fs-lg-16 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled mt-3"
              >
                Take Photo
              </button>
            )} */}
            {cameraError ? (
              <div className="text-center text-danger fs-14">
                <p>Camera not available on this device. Please ensure you have a webcam connected.</p>
              </div>
            ) : (
              isCameraActive && (
                <>
                  <div className="position-relative w-size-200 h-size-200">
                    <Webcam
                      audio={false}
                      height={200}
                      ref={webcamRef}
                      screenshotQuality={1}
                      screenshotFormat="image/png"
                      width={200}
                      style={{ objectFit: 'cover' }}
                      mirrored={false}
                      videoConstraints={videoConstraints}
                    />
                  </div>

                  <button
                    onClick={() => {
                      capture();
                      setIsCameraActive(false);
                      setShowSelfieModal(false);
                    }}
                    type="button"
                    className="blue-fill-btn min-h-48 px-36 min-w-120 fs-lg-16 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled mt-3"
                  >
                    Take Photo
                  </button>
                </>
              )
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SelfieCameraModal;

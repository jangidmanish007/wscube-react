import { toastConfig } from '@/_helper/PluginSettings';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Cropper from 'react-easy-crop';
import { toast } from 'react-toastify';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new window.Image();

    // Ensure CORS is set to anonymous to handle images from external sources
    img.crossOrigin = 'anonymous';

    img.src = url;

    // Image load success
    img.onload = () => resolve(img);

    // Image load failure
    img.onerror = (error) => {
      console.error('Error loading image:', error);
      reject(new Error('Failed to load image: ' + url));
    };
  });

const getCroppedImg = async (imageSrc, croppedAreaPixels, zoom) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const cropWidth = croppedAreaPixels.width;
  const cropHeight = croppedAreaPixels.height;

  // canvas.width = croppedAreaPixels.width;
  // canvas.height = croppedAreaPixels.height;

  const finalWidth = 200;
  const finalHeight = 200;

  canvas.width = finalWidth;
  canvas.height = finalHeight;

  ctx.drawImage(
    image,
    croppedAreaPixels.x * scaleX,
    croppedAreaPixels.y * scaleY,
    cropWidth * scaleX,
    cropHeight * scaleY,
    0,
    0,
    finalWidth,
    finalHeight
  );

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve(URL.createObjectURL(blob));
      },
      'image/jpeg',
      4 / 4
    );
  });
};

function ProfileUploadModal(props) {
  const { setShowUploadModal, setSelfieImage, selfieImage, setImagePreview } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1000 * 1024) {
        toast.error('Please select an image less than 1MB.', toastConfig);
        setSelfieImage(null);
        return;
      } else {
      }
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      setImageSrc(objectUrl);
      setSelfieImage(file);
    } else {
      setSelfieImage(null);
    }
  };

  const handleSave = async () => {
    if (!croppedAreaPixels) {
      toast.error('No area selected for cropping', toastConfig);
      return;
    }
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, zoom);
      // Convert the cropped image URL back to a Blob
      const response = await fetch(croppedImage);
      const blob = await response.blob();

      // Create a new File object
      const file = new File([blob], `${String(selfieImage?.lastModified)}profile-image.jpeg`, { type: 'image/jpeg' });

      // Set the File object to selfieImage and update the preview
      setSelfieImage(file);
      setImagePreview(croppedImage);
      setShowUploadModal(false);
    } catch (error) {
      console.error('Error during image cropping:', error);
      toast.error('Error cropping the image', toastConfig);
    }
  };

  return (
    <>
      <Modal show={true} centered backdrop="static" keyboard={false} size="lg" backdropClassName="ws-modal-backdrop">
        <Modal.Body className="p-16">
          <div className="">
            <h4 className="fs-18 fw-600 text-color-1 lh-30">Upload Photo</h4>
            <Image
              src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
              width={24}
              height={24}
              alt="Close"
              onClick={() => {
                setShowUploadModal(false);
                setSelfieImage(null);
                setImagePreview(null);
              }}
              title="Close"
              className="img-fluid cursor-pointer position-absolute close-modal"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center py-4 position-relative">
            {(imageSrc && (
              <>
                <div className="crop-container min-w-600 min-h-300 max-h-300 position-relative">
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    // zoomWithScroll={false}
                    onCropComplete={onCropComplete}
                  />
                </div>
                <p className="mt-3 mb-0 fs-12 text-color-7">(Scroll or Pinch to zoom image)</p>
              </>
            )) || (
              <div className="mb-3 w-100">
                <div className="d-flex align-items-center w-100 border rounded-8">
                  <label
                    htmlFor="profileUpload"
                    className="min-h-40 py-2 rounded-8 px-3 fs-16 lh-24 fw-400 lh-21 me-2 label-blue cursor-pointer"
                    style={{ background: '#D1D5DB' }}
                    title="Profile Change"
                  >
                    <span className="d-flex align-middle text-nowrap">Choose File</span>
                  </label>
                  {(selfieImage && (
                    <span className="ml-12 fs-14 fw-400 lh-24 text-color-7 line-clamp-1">{selfieImage?.name}</span>
                  )) || <span className="ml-12 fs-14 fw-400 lh-24 text-color-7">No file selected</span>}
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    className="d-none"
                    id={'profileUpload'}
                    onChange={handleProfileChange}
                  />
                </div>
                <small className="fs-12 mt-1 text-color-7">(Accepted file types: .jpg, .jpeg, .png and Max. 1MB)</small>
              </div>
            )}
            <button
              onClick={() => {
                handleSave();
                // setShowUploadModal(false);
              }}
              type="button"
              disabled={!selfieImage}
              className="blue-fill-btn min-h-48 min-h-48 px-36 px-4 min-w-120 fs-lg-16 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled mt-3"
            >
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileUploadModal;

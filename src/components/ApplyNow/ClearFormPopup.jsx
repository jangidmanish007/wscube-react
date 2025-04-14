import Modal from 'react-bootstrap/Modal';

function ClearFormPopup(props) {
  const { setShowClearModal, clearForm } = props;

  return (
    <>
      <Modal show={true} onHide={setShowClearModal} centered size="md" backdropClassName="ws-modal-backdrop">
        <Modal.Body className="p-4">
          <div className="text-center">
            <h3 className="fs-18 fw-600 lh-26 text-color-1 mb-3">Clear form?</h3>
            <p className="fs-14 text-color-7 lh-24 mb-3">
              This will remove your answers from all questions, and cannot be undone.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <button
                onClick={() => setShowClearModal(false)}
                type="button"
                className="hover-shadow-2 bg-white fw-600 text-color-1 border-w-2 min-h-40 px-36 px-4 min-w-120 fs-14 rounded-12 btn-blue-disabled"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowClearModal(false);
                  clearForm();
                }}
                type="button"
                className="blue-fill-btn min-h-40 px-36 ms-3 px-4 min-w-120 fs-14 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled"
              >
                Clear form
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ClearFormPopup;

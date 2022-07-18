 
import Modal from "@mui/material/Modal";
 

const AntModal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </>
  );
};

export default AntModal;
 

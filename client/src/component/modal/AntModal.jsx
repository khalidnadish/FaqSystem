 
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
 

const AntModal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted 
        
     
      >


{children}


         
       
      </Modal>
    </>
  );
};

export default AntModal;
 

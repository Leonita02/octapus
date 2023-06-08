import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <i className="bi bi-bell-fill" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Popup Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Popup content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};



// const Popup = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
      
//       <i class="bi bi-bell-fill"  onClick={handleShow}>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Popup Title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Popup content goes here.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       </i>
      
//     </div>
//   );
// };

export default Popup;
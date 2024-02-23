import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BrewLogForm from './forms/brewLogForm';

function BrewLogModel({ brew, onUpdate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Log
      </Button>

      <Modal show={show} onHide={handleClose}>
        <BrewLogForm brew={brew} onHide={handleClose} onUpdate={onUpdate} />
      </Modal>
    </>
  );
}

export default BrewLogModel;

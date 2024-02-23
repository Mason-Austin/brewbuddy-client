import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BrewLogForm from './forms/brewLogForm';

function BrewLogModel({ brew, onUpdate, brewLog }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {brewLog ? (
        <Button variant="primary" onClick={handleShow}>
          Edit Log
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Create Log
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <BrewLogForm brew={brew} onHide={handleClose} onUpdate={onUpdate} initalBrewLog={brewLog} />
      </Modal>
    </>
  );
}

export default BrewLogModel;

import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { updateBrewLog, createBrewLog } from '../../API/brewLogApi';

const initalState = {
  log: '',
  date: '',
};

function BrewLogForm({ initalBrewLog, brew, onHide, onUpdate }) {
  const [brewLog, setBrewLog] = useState(initalBrewLog || initalState);

  useEffect(() => {
    if (initalBrewLog) {
      setBrewLog(initalBrewLog);
    }
  }, [initalBrewLog]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBrewLog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentBrewLog = {
      log: brewLog.log,
      date: brewLog.date,
      brewId: brew.id,
    };

    // Send POST request to your API
    if (initalBrewLog) {
      updateBrewLog(brewLog).then(() => {
        onHide();
        onUpdate();
      });
    } else {
      createBrewLog(currentBrewLog).then(() => {
        onHide();
        onUpdate();
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control name="date" required value={brewLog.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Log</Form.Label>
          <Form.Control name="log" required value={brewLog.log} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {initalBrewLog ? 'Save' : 'Create'}
        </Button>
      </Form>
    </>
  );
}

export default BrewLogForm;

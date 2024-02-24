/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { deleteSingleBrewLog } from '../API/brewLogApi';
import BrewLogModel from './BrewLogModel';

function BrewLogCard({ brewLog, onUpdate, brew }) {
  const { user } = useAuth();
  const deleteThisBrewLog = () => {
    if (window.confirm(`Delete Log for ${brewLog.date}?`)) {
      deleteSingleBrewLog(brewLog.id).then(() => onUpdate());
    }
  };

  return (
    <Card>
      <Card.Header>{brewLog.date}</Card.Header>
      <Card.Body>
        <Card.Text>{brewLog.log}</Card.Text>
        { brew.user.id === user.id && (
          <>
            <BrewLogModel onUpdate={onUpdate} brewLog={brewLog} brew={brew} />
            <Button variant="danger" onClick={() => { deleteThisBrewLog(); }}>Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default BrewLogCard;
BrewLogCard.propTypes = {
  brewLog: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  brew: PropTypes.object.isRequired,
};

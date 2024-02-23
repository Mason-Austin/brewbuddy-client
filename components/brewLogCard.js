import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { deleteSingleBrewLog } from '../API/brewLogApi';

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
            <Button variant="success">Edit</Button>
            <Button variant="danger" onClick={() => { deleteThisBrewLog(); }}>Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default BrewLogCard;

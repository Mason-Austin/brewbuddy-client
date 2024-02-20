import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BrewLogCard({ brewLog }) {
  return (
    <Card>
      <Card.Header>{brewLog.date}</Card.Header>
      <Card.Body>
        <Card.Text>{brewLog.log}</Card.Text>
        <Button variant="success">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default BrewLogCard;

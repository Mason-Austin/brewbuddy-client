import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import { useAuth } from '../utils/context/authContext';

function BrewCard({ brew }) {
  const { user } = useAuth();
  return (
    <Card style={{ width: '18rem' }}>
      By: {brew.user.name}
      <Card.Img variant="top" src={brew.image ? brew.image : 'https://myfermentedfoods.com/wp-content/uploads/2019/11/Mead.jpg'} />
      <Card.Body>
        <Card.Title>{brew.name}</Card.Title>
        <Card.Text>{brew.description}</Card.Text>
        <Card.Text>Completed: {brew.completed ? 'Yes' : 'No'}</Card.Text>
        <Button variant="primary">Details</Button>
        {(user.id === brew.user.id) ? (
          <>
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
          </>
        ) : ('')}
      </Card.Body>
    </Card>
  );
}

export default BrewCard;

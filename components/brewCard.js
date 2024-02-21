import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import { useAuth } from '../utils/context/authContext';
import { useRouter } from 'next/router';

function BrewCard({ brew }) {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <Card style={{ width: '18rem' }}>
      By: {brew.user.name}
      <Card.Img variant="top" src={brew.image || 'https://myfermentedfoods.com/wp-content/uploads/2019/11/Mead.jpg'} />
      <Card.Body>
        <Card.Title>{brew.name}</Card.Title>
        <Card.Text>{brew.description}</Card.Text>
        <Card.Text>Brewing Stage: {brew.stage}</Card.Text>
        <Button variant="primary" onClick={() => { router.push(`/brew/${brew.id}`); }}>Details</Button>
        {(user.id === brew.user.id) ? (
          <>
            <Button variant="success" onClick={() => { router.push(`/brew/edit/${brew.id}`); }}>Edit</Button>
            <Button variant="danger">Delete</Button>
          </>
        ) : ('')}
      </Card.Body>
    </Card>
  );
}

export default BrewCard;

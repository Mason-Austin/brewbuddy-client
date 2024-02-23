import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import { useAuth } from '../utils/context/authContext';
import { useRouter } from 'next/router';
import { deleteSingleBrew } from '../API/brewApi';

function BrewCard({ brew, onUpdate }) {
  const { user } = useAuth();
  const router = useRouter();

  const deleteThisBrew = () => {
    if (window.confirm(`Delete ${brew.name} brew?`)) {
      deleteSingleBrew(brew.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      By: {brew.user.name}
      <Card.Img variant="top" src={brew.image || 'https://myfermentedfoods.com/wp-content/uploads/2019/11/Mead.jpg'} />
      <Card.Body>
        <Card.Title>{brew.name}</Card.Title>
        <Card.Text>{brew.description}</Card.Text>
        <Card.Text>Categories: {brew.categories.map((category, index) => {
          if (index === brew.categories.length - 1) {
            return category.label;
          }
          return `${category.label}, `;
        })}
        </Card.Text>
        <Card.Text>Brewing Stage: {brew.stage}</Card.Text>
        <Button variant="primary" onClick={() => { router.push(`/brew/${brew.id}`); }}>Details</Button>
        {(user.id === brew.user.id) ? (
          <>
            <Button variant="success" onClick={() => { router.push(`/brew/edit/${brew.id}`); }}>Edit</Button>
            <Button variant="danger" onClick={() => { deleteThisBrew(); }}>Delete</Button>
          </>
        ) : ('')}
      </Card.Body>
    </Card>
  );
}

export default BrewCard;

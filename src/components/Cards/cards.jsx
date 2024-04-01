import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.css'

function Cards() {
  return (
    <div className='centrado'>
      <Card  style={{ width: '18rem' }}>
        
        <Card.Img className='imgn mx-auto d-block' variant="top" src="/src/assets/ricky.jfif" />
        <Card.Body className='d-flex align-items-center justify-content-center'>
          <Card.Title>Rick</Card.Title>
          <Card.Text>
          científico excéntrico, cínico y extremadamente inteligente que 
          se embarca en aventuras interdimensionales con su nieto Morty.
          </Card.Text>
          <Card.Link className='boton' href="#">ver mas</Card.Link>
        </Card.Body>
      </Card>
      </div>
  );
}

export default Cards;

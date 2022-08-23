import React from 'react'
import images from './images/profile.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function navbar() {
  return (
    
    <div className='row mx-0'>
    <div className='col-md-3'>
    <div className='background-img'>
   
    </div>
      
    </div>
    <div className='col-md-9'>
    


    <Card style={{ width: '18rem' }}>
    <div className='image'>
      <Card.Img variant="top" src={images} />
      </div>
      <Card.Body>
        <Card.Title>Hi i'm Arpit</Card.Title>
        <Card.Text>
         Currently pursuing internship training from Codecamp.
        </Card.Text>
        <Button variant="primary">Resume</Button>
      </Card.Body>
    </Card>


       
    </div>
   
    
    </div>
  
    
  );
  }

export default navbar
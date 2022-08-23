import React from 'react';
import Card from 'react-bootstrap/Card';
import images from './images/todo2.png'

function Project() {
  return (
    <div>



    <Card style={{ width: '18rem' }}>
    <div className='project-img'>
      <Card.Img variant="top" src={images} />
      </div>
      <Card.Body>
        <Card.Title>Todo-list Application</Card.Title>
       
       
      </Card.Body>
    </Card>
    </div>
  
    )};
  



   



export default Project
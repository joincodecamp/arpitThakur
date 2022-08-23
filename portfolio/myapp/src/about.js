import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function About() {
  return (
  

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Info</Accordion.Header>
        <Accordion.Body>
        My name is Arpit Thakur.I am from Mandi,Himachal Pradesh.Currently i am pursuing internship training from Codecamp.
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Education</Accordion.Header>
        <Accordion.Body>
        1oth:HP Board Dharmshala.
        12th:HP Board Dharmshala.
        BCA(Bachelor of Computer Application): HPU university Shimla
         
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body>
         <li>HTML</li>
         <li>CSS</li>
         <li>bootstrap</li>
         <li>Javascript</li>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}




  

export default About
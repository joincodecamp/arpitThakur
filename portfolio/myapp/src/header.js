import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from "react-router-dom";



  function Header() {
  return (
    <>
   
    <Navbar bg="white" expand="lg">
    
      <Container fluid>
      
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Link to="/"className='nav-link'>Home</Link>
            <Link to="/about"className='nav-link'>About</Link>
            <Link to="/project"className='nav-link'>Project</Link>
       
          </Nav>
         
        
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  
   
    </>
  );


 

}

export default Header
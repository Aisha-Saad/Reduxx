import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarPlan = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home" as={Link}>Home</Nav.Link>
            <Nav.Link to="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    
  
    </>
       
  )

}

export default NavbarPlan
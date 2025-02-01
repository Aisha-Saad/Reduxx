import React from 'react'
import { NavbarCollapse, NavbarText } from 'react-bootstrap';
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
            <Nav.Link to="/home" as={Link}>products</Nav.Link>
            
          </Nav>
          <NavbarCollapse className='justify-content-end'>
            <NavbarText>
            <Nav.Link to="/cart" as={Link}>My Bag 0</Nav.Link>
            </NavbarText>
          </NavbarCollapse>
        </Container>
      </Navbar>
  
    
  
    </>
       
  )

}

export default NavbarPlan
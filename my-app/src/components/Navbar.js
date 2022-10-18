import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Tel2'>
      <Container>
        <Navbar.Brand href="/">Company Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            <Nav.Link as={Link} to={"/property"}>Properties</Nav.Link>
            <Nav.Link as={Link} to={"/informationCentre"}>Information centre</Nav.Link>
            <Nav.Link as={Link} to={"/testimonials"}>Testimonials</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/contact"}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
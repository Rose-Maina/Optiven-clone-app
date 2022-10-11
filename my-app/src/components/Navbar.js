import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Premium Properties</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            {/* <Nav.Link href="#pricing">About-Us</Nav.Link> */}
            <NavDropdown title="About-Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Who We Are</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Why Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Awards & Milestones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Partners</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Corporate Social Responsibility</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Properties" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Properties In Nairobi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Properties In Nyeri</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Properties In Kisumu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Properties in Nakuru</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Past Projects
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Information-Center" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Customer Information</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">News & Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Photo Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">FAQs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#contacts">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
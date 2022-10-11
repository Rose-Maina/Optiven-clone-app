import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
         <Navbar.Brand href="#home">To Own Property Call or Sms:+25412345678</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rose Maina</a>
        </Navbar.Text>
       </Navbar.Collapse>
     </Container>
    </Navbar>
  );
}

export default TextLinkExample;
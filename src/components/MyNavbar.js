import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">KITCHEN</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default MyNavbar;

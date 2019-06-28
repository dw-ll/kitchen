import React, {Component} from 'react';
import Signup from './Signup';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';


//functional component for navbar
class MyNavbar extends Component  {
  
  handleKey(eventKey){
    
  };

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">KITCHEN</Navbar.Brand>
        <Nav className="mr-auto" onSelect={selectedKey => this.handleKey(selectedKey) }>
          {/*Should change or create below features */}
          <Nav.Link eventKey="signup" ><Signup/></Nav.Link>
          <Nav.Link eventKey="login" >Log in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        
      </Navbar>
      );
  }
}

export default MyNavbar;

import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Menu() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="#">
      <img
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Google Book Search React App"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved Books</Nav.Link>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Menu;
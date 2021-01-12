import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Dirtfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" variant="light" expand="md">
    <Navbar.Brand href="/">
      Dirtfolio
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Item>
          <Nav.Link href="#projects">
            Projects
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#skills">
            Skills
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

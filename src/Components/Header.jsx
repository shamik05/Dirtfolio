import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const headings = ["Projects", "Skills", "Contact"];

  return (
    <Navbar sticky="top" bg="light" variant="light" expand="md">
      <Navbar.Brand href="/">Home</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        {headings.map((e) => (
          <Nav key={`${e}`}>
            <Nav.Item>
              <Nav.Link href={`#${e.toLowerCase()}`}>
                {e}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

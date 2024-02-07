import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./RA-logo2.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="/">
          <img
            alt="Ra logo"
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block"
          />{" "}
          Roland Adams
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/photos">Photography</Nav.Link>
          <Nav.Link href="/socials">Socials</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

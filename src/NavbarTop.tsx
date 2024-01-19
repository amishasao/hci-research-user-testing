import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

type NavbarTopProps = {
  name: string;
};

const NavbarTop: React.FC<NavbarTopProps> = ({ name }) => {
  return (
    <Navbar
      className="bg-body-tertiary"
      style={{ borderColor: "#000", borderBottomWidth: 20 }}
    >
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;

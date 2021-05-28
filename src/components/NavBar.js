import React from "react";
import "../styles/NavBar.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="navbar_page">
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar_bg"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Summary">Summary</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#WhatIDO">What I Do</Nav.Link>
            <Nav.Link href="#MyWorks">My Works</Nav.Link>
            <Nav.Link href="#Connect">Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

import React from 'react';
import { Navbar } from 'react-bootstrap';

const MainNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Navbar.Brand><span className="font-weight-bold">D</span> | eku</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
      </Navbar>
    </>
  );
};

export default MainNav;
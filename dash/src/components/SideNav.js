import React from 'react';
import { Nav } from 'react-bootstrap';

const SideNav = () => {
  return (
      <Nav variant="pills" defaultActiveKey="link-0" className="col-2 flex-column bg-light vh-100">
        <Nav.Link eventKey="link-0" className="p-3">Dashboard</Nav.Link>
        <Nav.Link eventKey="link-1" className="p-3">SMS</Nav.Link>
        <Nav.Link eventKey="link-2" className="p-3">Modems</Nav.Link>
      </Nav>
  );
};

export default SideNav;
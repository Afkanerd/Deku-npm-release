import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsGrid, BsEnvelope, BsWifi } from "react-icons/bs";


const SideNav = () => {
  return (
    <div className="col-md-2 bg-light vh-100">
      <Nav variant="pills" defaultActiveKey="link-0" className="flex-column  ">
        <Nav.Link eventKey="link-0" className="p-3"><BsGrid size={20} className="mr-2" /> Dashboard</Nav.Link>
        <Nav.Link eventKey="link-1" className="p-3"><BsEnvelope size={20} className="mr-2" /> SMS</Nav.Link>
        <Nav.Link eventKey="link-2" className="p-3"><BsWifi size={20} className="mr-2" /> Modems</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideNav;
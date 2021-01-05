import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsGrid, BsEnvelope, BsWifi } from "react-icons/bs";
import { Link } from "react-router-dom";



const SideNav = () => {
  return (
    <div className="col-md-2 bg-white vh-100">
      <Nav variant="pills" defaultActiveKey="link-0" className="flex-column  ">
        <Nav.Link as={Link} to="/" eventKey="link-0" className="p-3"><BsGrid size={20} className="mr-2" /> Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/sms" eventKey="link-1" className="p-3"><BsEnvelope size={20} className="mr-2" /> SMS</Nav.Link>
        <Nav.Link as={Link} to="/modems" eventKey="link-2" className="p-3"><BsWifi size={20} className="mr-2" /> Modems</Nav.Link>
      </Nav>

      <div id="version" className="p-3">
        <p className="font-weight-bold mb-1">version</p>
        <p>0.0.1</p>
      </div>
    </div>
  );
};

export default SideNav;
import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const Topbar = (props) => {
  return (
    <Navbar
      className="navbar navbar-dark sticky-top flex-md-nowrap p-0"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Navbar.Brand href="#home" className="col-sm-3 col-md-2 mr-0">
        MDI Dashboard
      </Navbar.Brand>
      <Form className="form-control-dark w-100">
        <FormControl type="text" placeholder="Search" />
      </Form>
      <Nav className="px-3">
        <Nav.Item className="text-nowrap">
          <Nav.Link eventKey="signout">Sign Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Topbar;

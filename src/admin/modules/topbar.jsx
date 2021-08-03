import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import logo from "../../frontend/assets/img/logo/logo-mdi-02.png";

const Topbar = () => {
  const { page } = useParams();
  return (
    <Navbar className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
      <Navbar.Brand href="#home" className="col-sm-3 col-md-2 mr-0">
        <img src={logo} className="logo" alt="logo" />
      </Navbar.Brand>
      <Form className="form-control-dark w-100" style={{ marginLeft: "10px" }}>
        <FormControl
          type="text"
          placeholder="Search"
          className={page !== "find-enumerator" && "transparent"}
        />
      </Form>
      <Nav className="px-3">
        <Nav.Item className="text-nowrap">
          <Nav.Link as={Link} to="/">
            Sign Out
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Topbar;

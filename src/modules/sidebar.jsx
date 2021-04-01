import React from "react";
import { Nav } from "react-bootstrap";
import * as Icon from "react-feather";

const SubNav = ({ title }) => {
  return (
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>{title}</span>
    </h6>
  );
};

const Sidebar = ({ changePage, page }) => {
  return (
    <Nav
      className="col-md-2 d-none d-md-block bg-light sidebar"
      onSelect={(e) => changePage(e)}
      defaultActiveKey="overview"
    >
      <div className="sidebar-sticky">
        <SubNav title="Home" />
        <Nav.Item>
          <Nav.Link eventKey="overview" href="/#overview">
            <Icon.Trello size={15} /> Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="notifications" href="/#notifications">
            <Icon.Bell size={15} /> Notifications
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Project" />
        <Nav.Item>
          <Nav.Link eventKey="activities" href="/#activities">
            <Icon.Watch size={15} /> Activities
          </Nav.Link>
          <Nav.Item>
            <Nav.Link eventKey="forms" href="/#forms">
              <Icon.FileText size={15} /> Forms
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="monitoring" href="/#monitoring">
            <Icon.BarChart size={15} /> Monitoring
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Enumerator" />
        <Nav.Item>
          <Nav.Link eventKey="find-enumerator" href="/#find-enumerator">
            <Icon.Search size={15} /> Find
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="enumerator-assignee" href="/#enumerator-assignee">
            <Icon.UserCheck size={15} /> Assignee
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Administration" />
        <Nav.Item>
          <Nav.Link eventKey="organisation" href="/#organisation">
            <Icon.Tool size={15} /> Organisation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="accounts" href="/#accounts">
            <Icon.Users size={15} /> Accounts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="payments" href="/#payments">
            <Icon.CreditCard size={15} /> Payment
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};
export default Sidebar;

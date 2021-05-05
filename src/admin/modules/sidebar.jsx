import React from "react";
import { Nav } from "react-bootstrap";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const SubNav = ({ title }) => {
  return (
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>{title}</span>
    </h6>
  );
};

const Sidebar = ({ page }) => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <SubNav title="Home" />
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/overview">
            <Icon.Trello size={15} /> Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/notifications">
            <Icon.Bell size={15} /> Notifications
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Project" />
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/activities">
            <Icon.Watch size={15} /> Activities
          </Nav.Link>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin/forms">
              <Icon.FileText size={15} /> Forms
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/monitoring">
            <Icon.BarChart size={15} /> Monitoring
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Enumerator" />
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/find-enumerator">
            <Icon.Search size={15} /> Find
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/enumerator-assignee">
            <Icon.UserCheck size={15} /> Assignee
          </Nav.Link>
        </Nav.Item>
        <SubNav title="Administration" />
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/organisation">
            <Icon.Tool size={15} /> Organisation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/accounts">
            <Icon.Users size={15} /> Accounts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/payments">
            <Icon.CreditCard size={15} /> Payment
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};
export default Sidebar;

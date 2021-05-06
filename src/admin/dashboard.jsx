import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Sidebar, Topbar } from "./modules";
import * as Icon from "react-feather";
import { Route, Switch, useParams, useHistory } from "react-router";
import "./style-backend.css";
import "./style.scss";

import Activity from "./activity";
import ActivityNew from "./activity-new";
import EnumeratorFind from "./enumerator-find";
import Form from "./form";
import FormNew from "./form-new";
import Notification from "./notification";
import Monitoring from "./monitoring";
import OverView from "./overview";
import UnderConstruction from "./underconstruction";

const Dashboard = (props) => {
  const { page } = useParams();
  const history = useHistory();
  const buttonNew = ["activities", "forms"].includes(page);
  return (
    <>
      <div id="topbar">
        <Topbar page={page} />
      </div>
      <Container className="main" fluid>
        <Row className="main">
          <Col md={2} id="sidebar-wrapper" className="bg-dark">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Row>
              <Col md={buttonNew ? 10 : 12}>
                <h1 className="page-title">{page && page.replace("-", " ")}</h1>
              </Col>
              {buttonNew && (
                <Col md={2}>
                  <Button
                    size="sm"
                    variant="info"
                    className="button-new"
                    onClick={(e) => history.push(`/admin/${page}/new`)}
                  >
                    <Icon.PlusCircle size={14} /> New{" "}
                    {page && page.replace("-", " ")}
                  </Button>
                </Col>
              )}
            </Row>
            <Switch>
              <Route exact path="/admin/overview">
                <OverView />
              </Route>
              <Route exact path="/admin/notifications">
                <Notification />
              </Route>
              <Route exact path="/admin/activities">
                <Activity />
              </Route>
              <Route exact path="/admin/forms">
                <Form />
              </Route>
              <Route exact path="/admin/forms/new">
                <FormNew />
              </Route>
              <Route exact path="/admin/activities/new">
                <ActivityNew />
              </Route>
              <Route exact path="/admin/monitoring">
                <Monitoring />
              </Route>
              <Route exact path="/admin/find-enumerator">
                <EnumeratorFind />
              </Route>
              <Route>
                <UnderConstruction />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Sidebar, Topbar } from "../modules";
import * as Icon from "react-feather";
import Page from "./";

const Dashboard = (props) => {
  const [page, changePage] = useState("overview");
  const [buttonNew, showNewButton] = useState(false);
  return (
    <>
      <div id="topbar">
        <Topbar />
      </div>
      <Container className="main" fluid>
        <Row className="main">
          <Col md={2} id="sidebar-wrapper" className="bg-dark">
            <Sidebar {...{ page, changePage }} />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Row>
              <Col md={buttonNew ? 10 : 12}>
                <h1 className="page-title">{page.replace("-", " ")}</h1>
              </Col>
              {buttonNew && (
                <Col md={2}>
                  <Button
                    size="sm"
                    variant="info"
                    className="button-new"
                    onClick={(e) => changePage(`new-${page}`)}
                  >
                    <Icon.PlusCircle size={14} /> New {page.replace("-", " ")}
                  </Button>
                </Col>
              )}
            </Row>
            <Page page={page} showNewButton={showNewButton} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;

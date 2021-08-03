import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import newArray, { dt, lorem, finance } from "../data";
import * as Icon from "react-feather";
import { useHistory } from "react-router";

const Activity = () => {
  const history = useHistory();
  return (
    <Row>
      <Col md={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }} width={10}>
                No
              </th>
              <th width={300}>Project Name</th>
              <th style={{ textAlign: "center" }} width={80}>
                Due Date
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Budget
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Forms
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Applicants
              </th>
              <th style={{ textAlign: "center" }} width={80}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newArray(20).map((x, i) => (
              <tr key={i}>
                <td align="center">{i + 1}</td>
                <td>{lorem.sentences(1)}</td>
                <td align="center">{dt()}</td>
                <td align="right">{finance.amount()}</td>
                <td align="center">{Math.floor(Math.random() * 20) + 2}</td>
                <td align="right">{Math.floor(Math.random() * 100)}</td>
                <td align="center">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={(e) => history.push("/admin/activity/new")}
                  >
                    <Icon.Edit size={12} /> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Activity;

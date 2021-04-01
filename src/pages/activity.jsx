import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import newArray, { dt, lorem, finance } from "../data";
import * as Icon from "react-feather";

const Activity = () => {
  return (
    <Row>
      <Col md={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th width={10}>No</th>
              <th width={300}>Project Name</th>
              <th style={{ textAlign: "center" }} width={80}>
                Due Date
              </th>
              <th align="center">Funds</th>
              <th style={{ textAlign: "center" }} width={50}>
                Applicants
              </th>
              <th style={{ textAlign: "center" }} width={100}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newArray().map((x, i) => (
              <tr key={i}>
                <td align="center">{i + 1}</td>
                <td>{lorem.sentences(1)}</td>
                <td>{dt()}</td>
                <td>{finance.amount()}</td>
                <td align="right">{Math.floor(Math.random() * 100)}</td>
                <td align="center">
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginRight: "1rem" }}
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

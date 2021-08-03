import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import newArray, { dt, lorem, company } from "../data";
import * as Icon from "react-feather";

const Form = () => {
  const status = ["Published", "Draft"];
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
              <th>Form Name</th>
              <th style={{ textAlign: "center" }} width={80}>
                Questions
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Created at
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Status
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Target
              </th>
              <th style={{ textAlign: "center" }} width={50}>
                Achived
              </th>
              <th style={{ textAlign: "center" }} width={100}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newArray(15).map((x, i) => (
              <tr key={i}>
                <td align="center">{i + 1}</td>
                <td>{company.catchPhrase()}</td>
                <td>{lorem.sentences(1)}</td>
                <td align="center">{Math.floor(Math.random() * 100)}</td>
                <td align="center">{dt("past")}</td>
                <td align="center">
                  {status[Math.floor(Math.random() * status.length)]}
                </td>
                <td align="center">{Math.floor(Math.random() * 100) + 50}</td>
                <td align="center">{Math.floor(Math.random() * 50)}</td>
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

export default Form;

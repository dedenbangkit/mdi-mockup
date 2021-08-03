import React from "react";
import { Col, Row, Card, Image, ButtonGroup, Button } from "react-bootstrap";
import newArray, { name, dt, address, company } from "../data";
import * as Icon from "react-feather";
import monitoringImage from "./images/monitoring.jpeg";

const Monitoring = () => {
  return (
    <>
      <Row
        style={{
          mixBlendMode: "darken",
        }}
      >
        <Col md={12}>
          <Image
            src={monitoringImage}
            alt=""
            fluid
            style={{
              minWidth: "100%",
              marginBottom: "1rem",
            }}
          />
        </Col>
      </Row>
      {newArray(10).map((e, i) => (
        <Row key={i}>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <Image
                    className="icon-avatar"
                    width={25}
                    height={25}
                    alt={`https://picsum.photos/id/${i}/25/25`}
                    src={`https://picsum.photos/id/${i}/25/25`}
                  />
                  <b>
                    {name.findName()}
                    {" - "}
                  </b>
                  <span>
                    {address.streetSuffix()} / {company.bsNoun()}
                  </span>
                  <span className="align-right">
                    {" "}
                    Date Collected: {dt("past")}
                  </span>
                </Card.Text>
              </Card.Body>
              <ButtonGroup
                aria-label="Basic example"
                size="sm"
                className="button-detail"
              >
                <Button variant="primary">
                  <Icon.Eye size={15} /> View
                </Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Monitoring;

import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const UnderConstruction = () => {
  return (
    <Container>
      <Row>
        <Col md={12} style={{ textAlign: "center" }}>
          <h2>Page is Under Construction</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default UnderConstruction;

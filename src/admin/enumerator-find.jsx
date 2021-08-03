import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import findEnumeratorImg from "./images/find-enumerator.jpeg";

const EnumeratorFind = () => {
  return (
    <Row>
      <Col>
        <Image
          src={findEnumeratorImg}
          fluid
          style={{ minWidth: "100%", mixBlendMode: "darken" }}
        />
      </Col>
    </Row>
  );
};

export default EnumeratorFind;

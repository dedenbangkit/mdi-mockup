import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import newArray, { company } from "../data";

const OverView = () => {
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>245 Enumerator Available</Card.Title>
          </Card.Body>
          <Card.Footer>Some quick example text</Card.Footer>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>49 Running Project</Card.Title>
          </Card.Body>
          <Card.Footer>Some quick example text</Card.Footer>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>6892 Data Submitted</Card.Title>
          </Card.Body>
          <Card.Footer>Some quick example text</Card.Footer>
        </Card>
      </Col>
      <Col md={9}>
        <Card>
          <Card.Body>
            <div className="iframe-container">
              <iframe
                title="mali-data"
                src="https://dnh-mali.carto.com/builder/1fc927ca-5664-4e66-ba7f-872804dfd63e/embed"
                frameBorder="0"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Running Project</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Covid Survey in Mali</ListGroup.Item>
            {newArray(6).map((x, i) => (
              <ListGroup.Item key={i}>{company.catchPhrase()}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Card.Footer>Some quick example text</Card.Footer>
      </Col>
    </Row>
  );
};

export default OverView;

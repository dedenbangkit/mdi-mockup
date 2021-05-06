import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import newArray, { company } from "../data";
import CountUp from "react-countup";

const data = [
  {
    name: "Projects",
    count: 200,
    icon: "kanban",
    start: 180,
    color: "#4154f1",
  },
  {
    name: "Data Submitted",
    count: 8000,
    icon: "clipboard-data",
    start: 1000,
    color: "#bb0852",
  },
  {
    name: "Enumerators",
    count: 100,
    icon: "person-lines-fill",
    color: "#15be56",
  },
];

const OverView = () => {
  return (
    <Row>
      {data.map((x, i) => (
        <Col md={4} key={i}>
          <Card>
            <Card.Body>
              <Card.Title className="counter">
                <i
                  className={`bi bi-${x.icon}`}
                  style={{ color: x.color, paddingRight: "1rem" }}
                ></i>
                <CountUp
                  start={x.start || 0}
                  end={x.count}
                  duration={x.count / 2}
                />
              </Card.Title>
            </Card.Body>
            <Card.Footer>{x.name}</Card.Footer>
          </Card>
        </Col>
      ))}
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
          <Card.Footer>Some quick example text</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default OverView;

import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import newArray, { name, dt, lorem, finance } from "../data";
import * as Icon from "react-feather";

const EnumeratorFind = () => {
  const data = newArray(48);
  return (
    <Row>
      {data.map((x, i) => (
        <Col md={3} key={i}>
          <Card>
            <Badge variant="light" style={{ float: "right" }}>
              {name.jobDescriptor()}
            </Badge>
            <Card.Header>{name.firstName()}</Card.Header>
            <Card.Img
              variant="top"
              alt={`https://picsum.photos/id/${i}/100/100`}
              src={`https://picsum.photos/id/${i + 10}/200/150`}
              style={{ width: "100%" }}
            />
            <Card.Body>
              <Card.Text>
                {name.jobTitle().split(" ").splice(1).join(" ")}
              </Card.Text>
              <Card.Link href="/#">
                <Icon.Eye size={20} /> View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default EnumeratorFind;

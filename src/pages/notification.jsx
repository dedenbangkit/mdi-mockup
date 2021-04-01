import React from "react";
import { Col, Row, Card, Image, ButtonGroup, Button } from "react-bootstrap";
import newArray, { name } from "../data";
import * as Icon from "react-feather";

const Notification = () => {
  return (
    <>
      {newArray().map((e, i) => (
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
                  <b>{name.findName()}</b>
                  <span className="align-right"> </span>
                </Card.Text>
              </Card.Body>
              <ButtonGroup
                aria-label="Basic example"
                size="sm"
                className="button-detail"
              >
                <Button variant="primary">
                  <Icon.Eye size={15} />
                </Button>
                <Button variant="success">
                  <Icon.Bookmark size={15} />
                </Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Notification;

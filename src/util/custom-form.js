import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import * as Icon from "react-feather";

const field = {
  SchemaField: (props) => {
    return (
      <Row id="custom-field">
        <Col md={12}>
          <Card>
            <Card.Body>{props.children}</Card.Body>
          </Card>
        </Col>
      </Row>
    );
  },
};

const arrayField = (props) => {
  return (
    <Row>
      <Col md={12}>
        <Card>
          {props.schema?.description && (
            <Card.Header>
              <Row>
                <Col md={6}>
                  <h5>{props.schema.title}</h5>
                </Col>
                <Col md={6}>
                  <span className="text-muted" style={{ float: "right" }}>
                    {props.schema.description}
                  </span>
                </Col>
              </Row>
            </Card.Header>
          )}
          <ListGroup variant="flush">
            {props.items.map((element, i) => {
              return (
                <div key={element.key}>
                  <ListGroup.Item
                    style={{ backgroundColor: "#e04d95", color: "#FFF" }}
                  >
                    {props.schema?.iterationTitle} - {i + 1}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>{element.children}</ListGroup.Item>
                </div>
              );
            })}
          </ListGroup>
          {props.canAdd && (
            <Card.Footer>
              <Button onClick={props.onAddClick} variant="danger" size="sm">
                <Icon.PlusCircle size={16} /> Add More
              </Button>
            </Card.Footer>
          )}
        </Card>
      </Col>
    </Row>
  );
};

const objectField = (props) => {
  return (
    <div>
      {props.description}
      {props.properties.map((element, i) => (
        <div className="property-wrapper" key={i}>
          {element.content}
        </div>
      ))}
    </div>
  );
};

export { field, arrayField, objectField };

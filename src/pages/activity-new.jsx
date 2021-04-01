import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "@rjsf/bootstrap-4";
import newArray, { company } from "../data";

const schema = {
  type: "object",
  properties: {
    activityDetals: {
      title: "Activity Details",
      type: "object",
      properties: {
        name: {
          title: "Activity name",
          type: "string",
        },
      },
      required: ["name"],
    },
    fixedArrayOfConditionals: {
      title: "Add Forms",
      type: "array",
      items: [
        {
          $ref: "#/definitions/forms",
        },
      ],
      additionalItems: {
        title: "----",
        $ref: "#/definitions/forms",
      },
    },
  },
  definitions: {
    forms: {
      type: "object",
      properties: {
        form: {
          title: "Select form / questionnaire",
          type: "string",
          enum: newArray(12).map((x) => company.catchPhrase()),
        },
        target: {
          title: "Submission Target",
          type: "integer",
        },
        location: {
          title: "Add Locations",
          type: "string",
        },
        startDate: {
          title: "Start Date",
          type: "string",
          format: "date",
        },
        endDate: {
          title: "End Date",
          type: "string",
          format: "date",
        },
      },
      dependencies: {
        form: ["target", "location", "startDate", "endDate"],
      },
      required: ["form"],
    },
  },
};

const uiSchema = {};

const ActivityNew = () => {
  return (
    <Row>
      <Col md={12}>
        <Form
          uiSchema={uiSchema}
          schema={schema}
          onSubmit={(e) => console.log(e)}
          onError={(e) => console.error(e)}
        />
      </Col>
    </Row>
  );
};

export default ActivityNew;

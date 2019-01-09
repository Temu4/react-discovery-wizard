import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

export default class ContentForSnmpV1 extends Component {
  render() {
    return (
      <Form inverted>
        <Form.Field
          control={Input}
          label="Read Community"
          placeholder="public"
        />
      </Form>
    );
  }
}

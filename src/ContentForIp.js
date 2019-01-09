import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

export default class ContentForIp extends Component {
  render() {
    return (
      <Form inverted>
        <Form.Field
          control={Input}
          label="IP address"
          placeholder="enter your IP address"
        />
      </Form>
    );
  }
}

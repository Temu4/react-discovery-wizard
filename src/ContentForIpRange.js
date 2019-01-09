import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

export default class ContentForIpRange extends Component {
  render() {
    return (
      <Form inverted>
        <Form.Field
          control={Input}
          label="Starting IP address"
          placeholder="enter your IP address"
        />
        <Form.Field
          control={Input}
          label="Ending IP address"
          placeholder="enter your IP address"
        />
      </Form>
    );
  }
}

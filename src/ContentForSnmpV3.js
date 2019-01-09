import React, { Component } from "react";
import { Form, Dropdown, Checkbox, Input } from "semantic-ui-react";

export default class ContentForSnmpV3 extends Component {
  state = {
    value: [],
    selectOptions: [
      {
        text: "Authentication and No Privacy",
        value: "Authentication and No Privacy"
      },
      {
        text: "Other option",
        value: "Other option"
      },
      {
        text: "Other option",
        value: "Other option"
      }
    ]
  };

  // show/hide Accordion
  showAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  //get value from Form components
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { selectOptions, value } = this.state;
    return (
      <Form inverted>
        <Dropdown
          fluid
          selection
          options={selectOptions}
          value={value}
          placeholder="Choose your source"
          onChange={this.handleChange}
        />
        <br />
        <Form.Field
          control={Input}
          label="Context Name"
          placeholder="sample context"
        />
        <Form.Field
          control={Input}
          label="Context Engine ID"
          placeholder="sample engine"
        />
        <p className="blue-label">Authentication Algorithm</p>
        <Form.Group inline>
          <Form.Field width="1" />
          <Form.Field width="3">
            <Checkbox
              radio
              label="MD5"
              value="md5"
              checked={this.state.value === "md5"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width="3">
            <Checkbox
              radio
              label="SHA"
              value="sha"
              checked={this.state.value === "sha"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width="3">
            <Checkbox
              radio
              label="HMAC128"
              value="hmac128"
              checked={this.state.value === "hmac128"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width="3">
            <Checkbox
              radio
              label="HMAC1192"
              value="hmac192"
              checked={this.state.value === "hmac192"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width="3">
            <Checkbox
              radio
              label="HMAC256"
              value="hmac256"
              checked={this.state.value === "hmac256"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width="2">
            <Checkbox
              radio
              label="HMAC384"
              value="hmac384"
              checked={this.state.value === "hmac384"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field
          control={Input}
          label="Authentication Password"
          placeholder="random password"
        />
      </Form>
    );
  }
}

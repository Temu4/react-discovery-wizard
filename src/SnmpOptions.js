import React, { Component } from "react";
import {
  Accordion,
  Segment,
  Form,
  Icon,
  Checkbox,
  Label
} from "semantic-ui-react";

import ContentForSnmpV1 from "./ContentForSnmpV1";
import ContentForSnmpV3 from "./ContentForSnmpV3";

export default class SnmpOptions extends Component {
  state = {
    activeIndex: 0
  };

  // show/hide Accordion
  showAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  //get value from Radio Checkboxes
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { activeIndex, value } = this.state;

    return (
      <Segment>
        <Accordion fluid inverted>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.showAccordion}
          >
            <Icon name="dropdown" />
            Select Options
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            {/* Select options */}
            <Form>
              <p class="blue-label">SNMP Options</p>
              <Form.Group inline>
                <Form.Field width="2" />
                <Form.Field width="6">
                  <Checkbox
                    radio
                    label="v1"
                    value="v1"
                    checked={this.state.value === "v1"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field width="6">
                  <Checkbox
                    radio
                    label="v2"
                    value="v2"
                    checked={this.state.value === "v2"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field width="3">
                  <Checkbox
                    radio
                    label="v3"
                    value="v3"
                    checked={this.state.value === "v3"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Accordion.Content>
        </Accordion>
        <br />

        {/* Section for addition content */}
        <div>
          {value === "v1" || value === "v2" ? <ContentForSnmpV1 /> : null}
          {value === "v3" ? (
            <div>
              <ContentForSnmpV1 />
              <br />
              <ContentForSnmpV3 />
            </div>
          ) : null}
        </div>
      </Segment>
    );
  }
}

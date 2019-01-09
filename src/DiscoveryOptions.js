import React, { Component } from "react";
import { Accordion, Checkbox, Form, Segment, Icon } from "semantic-ui-react";

export default class DiscoveryOptions extends Component {
  state = {
    activeIndex: 0,
    checkStatus: false,
    value: false
  };

  // show/hide Accordion
  showAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  //get value from SNMP checkbox
  handleChangeToggle = (e, { value }) => {
    const valueStatus = this.state.value ? false : value;
    this.setState({ value: valueStatus, checkStatus: valueStatus });
  };

  //get value from Form components
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { activeIndex, value, checkStatus } = this.state;

    return (
      <Segment>
        <Accordion fluid inverted>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.showAccordion}
          >
            <Icon name="dropdown" />
            Discovery Options
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Form>
              <Form.Field>
                <Checkbox
                  label="SNMP"
                  value="snmp"
                  checked={checkStatus}
                  onChange={this.handleChangeToggle}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="Link"
                  value="link"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="VLan"
                  value="vlan"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="Ports"
                  value="ports"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

import React, { Component } from "react";
import {
  Accordion,
  Button,
  Form,
  Segment,
  Dropdown,
  Step,
  Icon,
  Menu,
  Item
} from "semantic-ui-react";

export default class DiscoverySource extends Component {
  state = {
    activeIndex: 0,
    selectOptions: [
      {
        text: "IP Adress",
        value: "ipAdress"
      },
      {
        text: "IP Range",
        value: "ipRange"
      },
      {
        text: "CVS",
        value: "cvs"
      }
    ],
    hiddenContent: false
  };

  showAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  showHiddenContent = e => {
    this.setState({ hiddenContent: true });
  };

  render() {
    const { activeIndex, hiddenContent, selectOptions } = this.state;

    return (
      <Segment inverted>
        <Form inverted>
          <Accordion fluid inverted>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.showAccordion}
            >
              <Icon name="dropdown" />
              Discovery Source
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Dropdown
                placeholder="source"
                fluid
                selection
                options={selectOptions}
              />
            </Accordion.Content>
          </Accordion>
          {hiddenContent ? (
            <Segment inverted>
              <div>Some text</div>
            </Segment>
          ) : null}

          <Button secondary>Apply</Button>
        </Form>
      </Segment>
    );
  }
}

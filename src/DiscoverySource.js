import React, { Component } from "react";
import { Accordion, Segment, Dropdown, Icon } from "semantic-ui-react";

import ContentForIp from "./ContentForIp";
import ContentForIpRange from "./ContentForIpRange";
import ContentForCvs from "./ContentForCvs";

export default class DiscoverySource extends Component {
  state = {
    activeIndex: 0,
    value: [],
    selectOptions: [
      {
        text: "IP",
        value: [<ContentForIp />]
      },
      {
        text: "IP Range",
        value: [<ContentForIpRange />]
      },
      {
        text: "CVS",
        value: [<ContentForCvs />]
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
    const { activeIndex, selectOptions, value } = this.state;

    return (
      <Segment>
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
            {/* Select options */}
            <Dropdown
              fluid
              selection
              options={selectOptions}
              value={value}
              placeholder="Choose your source"
              onChange={this.handleChange}
            />
          </Accordion.Content>
        </Accordion>
        <br />

        {/* Section for IP, IP Range and CVS contents*/}
        <div>{value}</div>
      </Segment>
    );
  }
}

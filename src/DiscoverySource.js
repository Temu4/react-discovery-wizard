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
  Item,
  Select
} from "semantic-ui-react";

export default class DiscoverySource extends Component {
  state = {
    activeIndex: 0,
    hiddenContentIp: true,
    hiddenContentIpRange: true,
    hiddenContentCvs: true
  };

  // show/hide Disconery Sources content
  showAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  // show/hide Disconery Sources --> IP content
  toggleContentIp = () => {
    let hidden =
      this.state.hiddenContentIpRange || this.state.hiddenContentCvs
        ? true
        : false;
    this.setState({
      hiddenContentIp: !this.state.hiddenContentIp,
      hiddenContentIpRange: hidden,
      hiddenContentCvs: hidden
    });
  };

  // show/hide Disconery Sources --> IP Range content
  toggleContentIpRange = () => {
    let hidden =
      this.state.hiddenContentIp || this.state.hiddenContentCvs ? true : false;
    this.setState({
      hiddenContentIpRange: !this.state.hiddenContentIpRange,
      hiddenContentIp: hidden,
      hiddenContentCvs: hidden
    });
  };

  // show/hide Disconery Sources --> CVS content
  toggleContentCvs = () => {
    let hidden =
      this.state.hiddenContentIpRange || this.state.hiddenContentIp
        ? true
        : false;
    this.setState({
      hiddenContentCvs: !this.state.hiddenContentCvs,
      hiddenContentIp: hidden,
      hiddenContentIpRange: hidden
    });
  };

  render() {
    const {
      activeIndex,
      hiddenContentIp,
      hiddenContentIpRange,
      hiddenContentCvs
    } = this.state;

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
                onChange={this.toggleContentIp}
              />
            </Accordion.Content>
          </Accordion>
          {/* Content for Disconery Sources --> IP  */}

          {hiddenContentIp ? null : <p>Some text 1</p>}
          {/* Content for Disconery Sources --> IP Range  */}

          {hiddenContentIpRange ? null : <p>Some text 2</p>}
          {/* Content for Disconery Sources --> CVS  */}

          {hiddenContentCvs ? null : <p>Some text 3</p>}
          <Button secondary onClick={this.toggleContentIp}>
            Apply
          </Button>
          <Button secondary onClick={this.toggleContentIpRange}>
            Apply
          </Button>
          <Button secondary onClick={this.toggleContentCvs}>
            Apply
          </Button>
        </Form>
      </Segment>
    );
  }
}

{
  /* <Segment inverted>
<form class="ui form">
	<div class="field">
		<label>IP</label>
		<input
			type="text"
			name="ip-address"
			placeholder="IP-address"
		/>
	</div>
</form>
</Segment> */
}

{
  /* <div>
                {discoveryOptions.map((s, i) => (
                  <div key={i}>
                    <p>{s}</p>
                    <button onClick={() => this.toggleHidden(i)}>Toggle</button>
                    {!opened && selected === i && <h1>{s}</h1>}
                  </div>
                ))}
              </div> */
}

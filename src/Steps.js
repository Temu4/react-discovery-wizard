import React, { Component } from "react";
import { Step, Divider, Label } from "semantic-ui-react";

class Steps extends Component {
  state = {
    labelColor: "green",
    labelDisabledColor: ""
  };
  render() {
    return (
      <Step.Group>
        <Step link>
          <Step.Content>
            <Step.Title>Discovery Source</Step.Title>
          </Step.Content>
          <Step.Description>
            <Divider horizontal>
              <Label size="mini" color={this.state.labelColor} circular>
                1
              </Label>
            </Divider>
          </Step.Description>
        </Step>
        <Step link>
          <Step.Content>
            <Step.Title>Discovery Options</Step.Title>
          </Step.Content>
          <Step.Description>
            <Divider horizontal>
              <Label size="mini" color={this.state.labelColor} circular>
                2
              </Label>
            </Divider>
          </Step.Description>
        </Step>
        <Step link>
          <Step.Content>
            <Step.Title>Discovery Input Data</Step.Title>
          </Step.Content>
          <Step.Description>
            <Divider horizontal>
              <Label size="mini" color={this.state.labelColor} circular>
                3
              </Label>
            </Divider>
          </Step.Description>
        </Step>
        <Step link disabled>
          <Step.Content>
            <Step.Title>Summary</Step.Title>
          </Step.Content>
          <Step.Description>
            <Divider horizontal>
              <Label size="mini" color={this.state.labeDisabledlColor} circular>
                4
              </Label>
            </Divider>
          </Step.Description>
        </Step>
      </Step.Group>
    );
  }
}

export default Steps;

import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

export default class ContentForCvs extends Component {
  render() {
    return (
      <Segment inverted textAlign="center">
        <Button color="teal">Select a file</Button>
        <div>Selected file: ...</div>
      </Segment>
    );
  }
}

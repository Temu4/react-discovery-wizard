import React, { Component } from "react";
import { Grid, Button, Progress, Label } from "semantic-ui-react";

class StepsProgress extends Component {
  state = { percent: 0 };

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 25
    });

  render() {
    return (
      <Grid inverted>
        <Grid.Row color="black" centered>
          <Grid.Column width={13}>
            <Progress size="tiny" percent={this.state.percent} indicating />
          </Grid.Column>
        </Grid.Row>
        <Button onClick={this.increment}>Increment</Button>
      </Grid>
    );
  }
}

export default StepsProgress;

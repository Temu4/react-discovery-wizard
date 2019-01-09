import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Image } from "semantic-ui-react";
import Steps from "./Steps";
import DiscoverySource from "./DiscoverySource";
import StepsProgress from "./StepsProgress";
import Click from "./Click";

class App extends Component {
  render() {
    return (
      <Grid celled="internally" inverted>
        <Grid.Row color="black" centered>
          <Grid.Column width={10}>
            <Steps />
            <StepsProgress />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color="black" centered>
          {/* Content for Discovery Source */}
          <Grid.Column width={10}>
            <DiscoverySource />
            <Click />
          </Grid.Column>

          {/* Content for Discovery Options */}
          <Grid.Column width={6}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>

        {/* Content for Selected Options */}
        <Grid.Row color="black" centered>
          <Grid.Column width={10}>
            <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;

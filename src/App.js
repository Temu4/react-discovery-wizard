import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Icon, Button, Modal, Header } from "semantic-ui-react";
import Steps from "./Steps";
import DiscoverySource from "./DiscoverySource";
import DiscoveryOptions from "./DiscoveryOptions";
import SnmpOptions from "./SnmpOptions";

class App extends Component {
  state = {};

  render() {
    return (
      <Grid inverted>
        <Grid.Column width={16} />
        <Grid.Row color="black" centered>
          <Grid.Column width={10}>
            <Steps />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color="black" centered>
          {/* Content for Discovery Source */}
          <Grid.Column width={10} floated="right">
            <DiscoverySource />
          </Grid.Column>

          {/* Content for Discovery Options */}
          <Grid.Column width={5} floated="left">
            <DiscoveryOptions />
          </Grid.Column>
        </Grid.Row>

        {/* Content for SNMP Options */}
        <Grid.Row color="black" centered>
          <Grid.Column width={15}>
            <SnmpOptions />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="12" floated="left">
            <Button>Clear</Button>
          </Grid.Column>
          <Grid.Column floated="right">
            <Modal
              trigger={<Button positive>Discovery</Button>}
              basic
              size="small"
            >
              <Header icon="archive" content="Your information" />
              <Modal.Content>
                <p>There is your information:</p>
              </Modal.Content>
              <Modal.Actions>
                <Button color="green" inverted>
                  <Icon name="checkmark" /> Ok
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
          <Grid.Column width="2" />
        </Grid.Row>
        <Grid.Column width={16} />
      </Grid>
    );
  }
}

export default App;

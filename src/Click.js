import React, { Component } from "react";

let arr = [1, 2, 3, 4];
export default class Click extends Component {
  state = {
    opened: true,
    selected: ""
  };

  toggleHidden = key => {
    this.setState({ opened: !this.state.opened, selected: key });
  };

  render() {
    const { opened, selected } = this.state;
    return (
      <div>
        {arr.map((s, i) => (
          <div key={i}>
            <p>{s}</p>
            <button onClick={() => this.toggleHidden(i)}>Toggle</button>
            {!opened && selected === i && <h1>{s}</h1>}
          </div>
        ))}
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    //Initialize STATE FIRST
    //SUPER = React.components call zala pahije mhanun Super use kartat
    //Reference to parent constructor function
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";


class App extends Component {


  render() {
    console.log('App State', this.state)
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import "./App.css";
import Trello from "./Components/Trello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Trello />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

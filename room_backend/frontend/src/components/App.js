import React, { Component } from "react";
import HomePage from "./HomePage";
import CreateRoom from "./CreateRoom";
import RoomPage from "./RoomPage";

// Component calls Component
export default class App extends Component {
  constructor(props) {
    super(props);

    // this.state={

    // }
  }

  render() {
    // return <h1>{this.props.name}</h1>;
    return (
        <div>
        <HomePage/>
        

        {/* React Ruter */}
        </div>
    );
  }
}

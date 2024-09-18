import React, { Component } from 'react';
import CreateRoom from "./CreateRoom";
import RoomPage from "./RoomPage";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<h1>This is home page</h1>} />
                    <Route path="/join" element={<RoomPage />} />
                    <Route path="/create" element={<CreateRoom />} />
                </Routes>
            </Router>
        );
    }
}

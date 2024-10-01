import React, { Component } from 'react';
import CreateRoom from "./CreateRoom";
import RoomPage from "./RoomPage";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Room from './Room';

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
                    <Route path="/room/:roomCode" element={<Room />} />

                </Routes>
            </Router>
        );
    }
}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import { Grid, Typography, Button } from "@mui/material"; 
import CreateRoom from "./CreateRoom"; // Assuming this is a separate component

const Room = () => {
  const navigate = useNavigate(); // Hook to navigate
  const { roomCode } = useParams(); // Get roomCode from the route params
  const [skipVotes, setSkipVotes] = useState(2);
  const [guestPause, setGuestPause] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // State for showing settings

  useEffect(() => {
    fetchRoomDetails(); // Fetch room details when component mounts or roomCode changes
  }, [roomCode]);

  const fetchRoomDetails = () => {
    fetch("/api/get-room?code=" + roomCode)
      .then((response) => response.json())
      .then((data) => {
        setSkipVotes(data.skip_votes);
        setGuestPause(data.guest_pause);
        setIsHost(data.is_host);
      })
      .catch((error) => console.log("Error fetching room details:", error));
  };

  const updateShowSettings = (value) => {
    setShowSettings(value);
  };

  const handleSettingsUpdate = (updatedVotes, updatedGuestPause) => {
    // Update the state with the new settings
    setSkipVotes(updatedVotes);
    setGuestPause(updatedGuestPause);
    setShowSettings(false); // Close settings after update

    // Optionally, you can trigger the API call to save these settings:
    // fetch("/api/update-room", { method: 'POST', body: JSON.stringify({ votes: updatedVotes, guestPause: updatedGuestPause }) })

    // Re-fetch room details if needed
    fetchRoomDetails();
  };

  const renderSettings = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <CreateRoom
            update={true}
            votesToSkip={skipVotes}
            guestCanPause={guestPause}
            roomCode={roomCode}
            updateCallback={handleSettingsUpdate} // Pass callback to update settings in Room component
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => updateShowSettings(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    );
  };

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    );
  };

  const leaveButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/leave-room", requestOptions)
      .then((_response) => {
        navigate("/"); // Use navigate() instead of history.push() in v6
      })
      .catch((error) => {
        console.error("Error leaving room:", error);
      });
  };

  if (showSettings) {
    return renderSettings();
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes: {skipVotes}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {guestPause !== undefined ? guestPause.toString() : 'Loading...'}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {isHost !== undefined ? isHost.toString() : 'Loading...'}
        </Typography>
      </Grid>
      {isHost ? renderSettingsButton() : null}
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={leaveButtonPressed}
        >
          Leave Room
        </Button>
      </Grid>
    </Grid>
  );
};

export default Room;
       
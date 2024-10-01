import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomCode } = useParams();  // Get roomCode from the route params
  const [skipVotes, setSkipVotes] = useState(2);
  const [guestPause, setGuestPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  // Fetch room details when component mounts
  // useEffect(() => {
  //   fetch("/api/get-room?code=" + roomCode)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSkipVotes(data.votes_to_skip);
  //       setGuestPause(data.guest_can_pause);
  //       setIsHost(data.is_host);
  //     })
  //     .catch((error) => console.log("Error fetching room details:", error));
  // }, [roomCode]);

  useEffect(() => {
    fetch("/api/get-room?code=" + roomCode)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        setSkipVotes(data.skip_votes);
        setGuestPause(data.guest_pause);
        setIsHost(data.is_host);
      })
      .catch((error) => console.log("Error fetching room details:", error));
  }, [roomCode]);
  

  return (
    <div>
      <h3>Room Code: {roomCode}</h3>
      <p>Votes to Skip: {skipVotes}</p>
      <p>Guest Can Pause: {guestPause.toString()}</p>
      <p>Is Host: {isHost.toString()}</p>
    </div>
  );
};

export default Room;

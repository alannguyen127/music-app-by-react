import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Typography from "@mui/material/Typography";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <marquee>
      {" "}
      <Typography variant="h5">Playing: {currentTrackName}</Typography>
    </marquee>
  );
}

export default Header;

import React from "react";
import "./button.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Button() {
  return (
    <div className="button_container">
      <IconButton className="pre_icon">
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <IconButton className="fav_icon">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="next_icon">
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Button;

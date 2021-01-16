import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing">
      <h2 className="landing__title">
        One step towards a more sustianable community
      </h2>
      <div className="landing__menu">
        <Button variant="contained" color="primary">
          Recycle Now
        </Button>
        <Button variant="contained" color="primary">
          Pin a Bin
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;

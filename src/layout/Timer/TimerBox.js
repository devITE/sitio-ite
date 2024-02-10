import React from "react";
import FlipSheet from "./FlipSheet";

const TimerBox = ({ value, label }) => (
  <div className="timer-box">
    <FlipSheet flip={value < 10}>
      <div className="circle-left"></div>
      <p className="primary">{value < 10 ? `0${value}` : value}</p>
      <div className="circle-right"></div>
    </FlipSheet>
    <p className="sub-heading">{label}</p>
  </div>
);

export default TimerBox;

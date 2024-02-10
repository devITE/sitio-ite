import React from "react";

const FlipSheet = ({ children, flip }) => (
  <div className={`sheet ${flip ? "flip" : ""}`}>{children}</div>
);

export default FlipSheet;

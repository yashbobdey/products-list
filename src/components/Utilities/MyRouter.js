import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MySwitch from "./MySwitch.js";

export default function MyRouter() {
  return (
    <div>
      <Router>
        <MySwitch />
      </Router>
    </div>
  );
}

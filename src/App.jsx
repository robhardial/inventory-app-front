import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/cart"></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

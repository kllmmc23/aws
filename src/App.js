import React from "react";
import "./sass/App.scss";
import SetUp from "./Components/Routers/SetUp";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SetUp />
        </header>
      </div>
    </Router>
  );
}

export default App;

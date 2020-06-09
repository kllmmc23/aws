import React from "react";
import "./sass/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import ReactRedux from "./Redux/ReactRedux";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ReactRedux />
        </header>
      </div>
    </Router>
  );
}

export default App;

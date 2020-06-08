import React from "react";
import "./sass/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import PromptRouter from "./Components/Routers/PromptRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PromptRouter />
        </header>
      </div>
    </Router>
  );
}

export default App;

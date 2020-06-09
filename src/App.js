import React from "react";
import "./sass/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import TicTacToe from './TitTacToe/TicTacToe'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <TicTacToe></TicTacToe>
        </header>
      </div>
    </Router>
  );
}

export default App;

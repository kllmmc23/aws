/* eslint-disable no-lone-blocks */
import React from "react";
import "./sass/App.scss";
import UseRef from "./Components/Hooks/UseRef";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseRef />
      </header>
    </div>
  );
}

export default App;

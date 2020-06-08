import React from "react";
import "./sass/App.scss";
import UseCustomHook from "./Components/LifeCycle/UseCustomHook";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <UseCustomHook />
      </header>
    </div>
  );
}

export default App;

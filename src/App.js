/* eslint-disable no-lone-blocks */
import React from "react";
import "./sass/App.scss";
import ForwardingRefs from "./Components/Hooks/ForwardingRefs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ForwardingRefs />
      </header>
    </div>
  );
}

export default App;

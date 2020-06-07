import React, { useState } from "react";
import "./App.scss";
import shortId from "shortid";
import NameTag from "./Components/NameTags";

const initialNames = [
  { id: shortId.generate(), firstName: "John", lastName: "Johnson" },
  { id: shortId.generate(), firstName: "Peter", lastName: "Peterson" },
  { id: shortId.generate(), firstName: "Jill", lastName: "Jillson" },
];
console.log(initialNames);
function App() {
  const [names, setNames] = useState(initialNames);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use State hooks</h1>
        <NameTag
          id={names[0].id}
          firstName={names[0].firstName}
          lastName={names[0].lastName}
        />
        <NameTag
          id={names[1].id}
          firstName={names[1].firstName}
          lastName={names[1].lastName}
        />
        <NameTag
          id={names[2].id}
          firstName={names[2].firstName}
          lastName={names[2].lastName}
        />
      </header>
    </div>
  );
}

export default App;

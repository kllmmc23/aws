import React, { useState, useEffect, Fragment } from "react";

let born = false;

function UseEffect() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "nirvana attained";
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("i am born");
  }, []);

  useEffect(() => {
    if (born) {
      console.log("made a mistake and learn");
    } else {
      born = true;
    }

    if (growth > 30) {
      setNirvana(true);
    }

    return function cleanup() {
      console.log("clean up after mistakes");
    }
  });

  const growHandle = () => {
    setGrowth(growth + 10);
  };

  return (
    <Fragment>
      <h2>Use Effect</h2>
      <h3>Growth: {growth}</h3>
      <button onClick={growHandle}>Learn and Grow</button>
    </Fragment>
  );
}

export default UseEffect;

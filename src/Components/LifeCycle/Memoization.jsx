import React, { Fragment, useState, useMemo } from "react";
import Child from "./Child";

function Memoization() {
  const [i, setI] = useState(0);

  const onClickHandler = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
      return <Child />;
  }, []);

  return (
    <Fragment>
      <h3>Use Memoization</h3>
      <h2>1: {i}</h2>
      <button onClick={onClickHandler}>Increment i</button>
      <h3>Normal Render</h3>
          <Child />
          <h3>Memo Render</h3>
          {memoChild}
    </Fragment>
  );
}

export default Memoization;

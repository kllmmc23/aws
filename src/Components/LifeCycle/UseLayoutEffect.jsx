import React, { useState, useLayoutEffect, Fragment, useRef } from "react";

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);

  return { height, width };
}

function UseLayoutEffect() {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);

  const { height, width } = useDim(valEl, val);

  return (
    <Fragment>
      <h1>
        Height: {height} , width: {width}
      </h1>
      <div ref={valEl}>{val}</div>
      <button onClick={() => setVal(val * 10)}>10*</button>
    </Fragment>
  );
}

export default UseLayoutEffect;

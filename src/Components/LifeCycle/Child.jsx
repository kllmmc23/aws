import React, { useEffect } from "react";

let renderCount = 0;

function Child() {
  useEffect(() => {
    renderCount ++;
  });
    return <div>Render count: {renderCount}</div>
}

export default Child;

import { useRef, useEffect, useDebugValue } from "react";

function UsePrevious(value) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? "to much" : "too little" )

  return ref.current;
}

export default UsePrevious;

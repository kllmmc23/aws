import React, { Fragment, useState } from "react";
import UsePrevious from "./UsePrevious";

function CustomHook() {
  const [age, setAge] = useState(21);
  const previousAge = UsePrevious(age);

  return (
    <Fragment>
          <h3>Current Age: {age}</h3>
          <h3>Previous Age: {previousAge}</h3>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        Decrement
      </button>
    </Fragment>
  );
}

export default CustomHook;

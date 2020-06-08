import React, { Fragment, useRef, useEffect } from "react";
import Input from "../Input";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px",
};

function ForwardingRefs() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const firstNameKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };

  const lastNameKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };

  return (
    <Fragment>
      <Input
        ref={firstNameRef}
        style={inputStyle}
        placeholder="Type first name here"
        onKeyDown={firstNameKeyDown}
      />
      <Input
        ref={lastNameRef}
        style={inputStyle}
        placeholder="Type last name here"
        onKeyDown={lastNameKeyDown}
      />
    </Fragment>
  );
}

export default ForwardingRefs;

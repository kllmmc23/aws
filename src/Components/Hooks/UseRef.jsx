import React, { Fragment, useEffect, useRef } from "react";

function UseRef() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

 const keyPressHandle = (e) => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  }

  const onClickHandle = () => {
    alert("Submitted");
  };

  return (
    <Fragment>
      <h3>Use Refs hook</h3>

      <div className="form-field">
        <span>Name</span>
        <input
          ref={nameRef}
          id="nameInput"
          type="text"
          onKeyDown={keyPressHandle}
        />
      </div>

      <div className="form-field">
        <span>Age</span>
        <input
          ref={ageRef}
          id="ageInput"
          type="text"
          onKeyDown={keyPressHandle}
        />
      </div>

      <div className="form-field">
        <span>Married?</span>
        <input
          ref={marriedRef}
          id="marriedInput"
          type="checkbox"
          onKeyDown={keyPressHandle}
        />
      </div>

      <button onClick={onClickHandle} ref={submitRef} id="submitbutton">
        Submit
      </button>
    </Fragment>
  );
}

export default UseRef;

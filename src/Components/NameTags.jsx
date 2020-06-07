import React from "react";

function NameTag({ firstName, lastName, style }) {
  if (!firstName && !lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3 style={style}>First Name: {firstName}</h3>
      <h3 style={style}>Last Name: {lastName}</h3>
      {firstName === "John" && <div style={{ color: "green" }}>VIP</div>}
    </div>
  );
}

export default NameTag;

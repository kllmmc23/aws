import React from "react";

const NameTag = ({ firstName, lastName }) => {
  if (!firstName && !lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      {firstName === "John" && <div style={{ color: "green" }}>VIP</div>}
    </div>
  );
};

export default NameTag;

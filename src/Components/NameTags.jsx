import React from 'react'

const NameTag = (props) => {
    return (
      <div className="name">
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
      </div>
    );
}

export default NameTag;

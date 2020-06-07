import React from "react";

const Main = (props) => {
  return (
    <div>
          <h1>Stock Data for today</h1>
          <ul>
              <li>Microsoft: {props.microsoftValue}</li>
              <li>Twitter: {props.twitterValue}</li>
              <li>AMazon: {props.amazonValue}</li>
          </ul>
    </div>
  );
};

export default Main;

import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";

function SetUp() {
  return (
    <Fragment>
      <Route
        path="/"
        exact
        render={() => {
          return <h1>Welcome Home</h1>;
        }}
      />
      <Route path="/about" exact component={AboutPage} />
      <Route
        path="/user/:firstname/:lastname"
        exact
        render={({match}) => {
          return <h1>Welcome {match.params.firstname} {match.params.lastname}</h1>;
        }}
      />
    </Fragment>
  );
}

export default SetUp;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { createStore, combineReducers } from "redux";
import balanceReducer from "./Redux/Store/balanceReducer";
import loanReducer from "./Redux/Store/loanReducer";
import { Provider } from "react-redux";

const store = createStore(combineReducers({ balanceReducer, loanReducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

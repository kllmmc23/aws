import React, { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage'
import WithdrawPage from "./pages/WithdrawPage";
import DepositPage from "./pages/DepositPage";

function ReactRedux() {
  return (
    <Fragment>
      <ul className='ul-style'>
        <li className='li-style'>
          <NavLink to="/" className="App-link">
            Home
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink to="/deposit" className="App-link">
            Deposit
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink to="/withdraw" className="App-link">
            Withdraw
          </NavLink>
        </li>
      </ul>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/deposit" exact component={DepositPage}></Route>
      <Route path="/withdraw" exact component={WithdrawPage}></Route>
    </Fragment>
  );
}

export default ReactRedux;

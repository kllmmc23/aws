import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPAge() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();

  function onWitdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button onClick={onWitdrawHandle}>Withdraw</button>
    </div>
  );
}

export default WithdrawPAge;

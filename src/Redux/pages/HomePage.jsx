import React from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const applyLoanHandle = () => {
    dispatch({ type: "APPLY" });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
      <button disabled={loan ? true : false} onClick={applyLoanHandle}>
        {loan ? "Application received" : "Apply for loan"}
      </button>
    </div>
  );
}

export default HomePage;

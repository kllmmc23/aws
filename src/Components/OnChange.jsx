import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Mike");
  const [income, setIncome] = useState("low");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIncomeHandle = (e) => {
    setIncome(e.target.value);
  };

  const onSubmitHandle = () => {
    console.log("state =", name, income);
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <div>
        <span>Name: </span>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <span>Income: </span>
        <select value={income} onChange={handleIncomeHandle}>
          <option value="high">High</option>
          <option value="mid">Mid</option>
          <option value="low">Low</option>
        </select>

        <input type="submit" value="submit" />
      </div>
    </form>
  );
}

export default OnChange;

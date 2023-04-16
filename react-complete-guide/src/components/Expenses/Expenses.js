import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [currDate, setCurrDate] = useState("2022");

  const filterHandler = (selectedYear) => {
    setCurrDate(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterData={filterHandler} selected={currDate} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

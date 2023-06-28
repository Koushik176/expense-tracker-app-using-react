import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            locationOfItem={expense.locationOfItem}
          />
        ))}
      </ul>
      {props.items.length === 1 ? (
        <h2 className="expenses-list__fallback">
          Only single Expense here.please add more..
        </h2>
      ) : null}
    </div>
  );
};

export default ExpensesList;

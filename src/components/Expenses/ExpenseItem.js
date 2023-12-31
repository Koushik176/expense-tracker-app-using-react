import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          locationOfItem={props.locationOfItem}
        />
      </Card>
    </li>
  );
};

export default ExpenseItem;

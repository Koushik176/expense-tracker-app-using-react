import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);


  const clickHandler1 = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const clickHandler2 = () => {
    console.log('deleted!!');
  }

  const clickHandler3 = () => {
    setAmount(100);
    console.log(amount);
  }

  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        locationOfItem={props.locationOfItem}
      />
      <button onClick={clickHandler1}>Change Title</button>
      <button onClick={clickHandler2}>Delete</button>
      <button onClick={clickHandler3}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;

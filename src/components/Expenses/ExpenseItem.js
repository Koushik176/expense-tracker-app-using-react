import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');


  const clickHandlerTitle = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const clickHandlerDelete = () => {
    console.log('deleted!!');
  }

  const clickHandlerAmount = () => {
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
      <button onClick={clickHandlerTitle}>Change Title</button>
      <button onClick={clickHandlerDelete}>Delete</button>
      <button onClick={clickHandlerAmount}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;

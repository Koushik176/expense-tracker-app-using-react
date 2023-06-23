import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler1 = () => {
    console.log("Clicked!!");
  };
  const clickHandler2 = () => {
    console.log('deleted!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        locationOfItem={props.locationOfItem}
      />
      <div>
      <button onClick={clickHandler1}>Change Title</button>
      <button onClick={clickHandler2}>Delete</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

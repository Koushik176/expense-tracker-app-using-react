//import logo from "./logo.svg";
import "./App.css";
//mport ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfItem: "BigBazar",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfItem: "IKEA",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfItem: "Online(GPAY)",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfItem: "IKEA",
    },
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

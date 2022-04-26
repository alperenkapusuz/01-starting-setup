import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // const expenseDate = Date(2022,3,8);
  // const expenseTitle = 'Car Insurence';
  // const expenseAmount = 294.67;
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div class="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

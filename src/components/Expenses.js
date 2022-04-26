import react,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filteredChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  })

  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.lenght>0){
    expensesContent = filteredExpenses.map( expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.items.amount}
        date={expense.items.date}
      />))
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
      {expensesContent}
    </div>
  );
}

export default Expenses;

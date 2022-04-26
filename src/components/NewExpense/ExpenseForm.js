import React, { useState } from "react";
import ExpenseAdd from "./ExpenseAdd";

const ExpenseForm = (props) => {
  const [AddForm, setAddForm] = useState(false);

  const toggleState = () => setAddForm(!AddForm);

  return AddForm == true ? (
    <ExpenseAdd
      onCancelClick={toggleState}
      onSaveExpenseData={props.onSaveExpenseData}
    />
  ) : (
    <button onClick={toggleState} className="new-expense__cancel">
      Add New Expense
    </button>
  );
};

export default ExpenseForm;
import "./ExpenseForm.css";

function AddNewExpense(props) {
  return (
    <div className="new-expense">
      <div className="new_expense__actions">
        <button type="button" onClick={props.clicked}>
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddNewExpense;

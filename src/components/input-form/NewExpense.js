import React, { useState } from "react";
import "./NewExpense.scss";

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(''); 


  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
   setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }
    props.onAddExpense(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm)
  }

  return (
    
    <div className="new-expense">
      {showForm ? (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2018-01-01" onChange={dateChangeHandler} value={enteredDate} />
          </div>
          <div className="new-expense__actions">
            <button type='submit' onClick={showFormHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
      ) : (
          <div className='new-expense__add'>
             <button type='submit' onClick={showFormHandler}>Add new Expense</button>
          </div>
      )}
    </div>
    
  );
};
export default NewExpense;

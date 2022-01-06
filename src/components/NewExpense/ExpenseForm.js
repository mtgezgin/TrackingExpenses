import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    const { onSaveExpenseData, onCancel } = props
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = event => {
        const { value } = event.target;
        setUserInput(prevState => {
            return {...prevState, enteredTitle: value};
        });
    };

    const amountChangeHandler = event => {
        const { value } = event.target;
        setUserInput(prevState => {
            return {...prevState, enteredAmount: +value};
        });
    }

    const dateChangeHandler = event => {
        const { value } = event.target;
        setUserInput(prevState => {
            return {...prevState, enteredDate: value};
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        const { enteredTitle, enteredAmount, enteredDate } = userInput;
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={userInput.enteredTitle} type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={userInput.enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} /> 
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={userInput.enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm

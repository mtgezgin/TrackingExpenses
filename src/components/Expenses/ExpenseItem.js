import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = props => {
  const { title, amount, date } = props;
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle('Updated!')
    console.log(title);
  }

  return (
    <Card className="expense-item">
    <ExpenseDate date= {date}/>
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

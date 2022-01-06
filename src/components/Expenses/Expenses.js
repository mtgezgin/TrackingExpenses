import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
    const { items } = props;
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterByYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilterByYear={filterByYearHandler}/>
        {items.map(item => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
        </Card>
    )
}

export default Expenses

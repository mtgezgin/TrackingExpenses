import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = props => {
    const { items } = props;
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterByYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(item => (
        item.date.getFullYear().toString() === filteredYear
    ));
        /* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map(item => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))} */

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilterByYear={filterByYearHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses

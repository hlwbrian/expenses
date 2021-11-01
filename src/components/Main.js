import React from 'react';
import Calendar from './Calendar';
import Expense from './Expense';
import Income from './Income';
// import expenese, expenseForm, income, incomeForm

const Main = () => {
    return (
        <div>
            <Calendar />
            <Expense />
            <Income />
        </div>
    );
}

export default Main;
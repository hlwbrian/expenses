import React from 'react';
import Calendar from './Calendar';
import Expense from './Expense';
import Income from './Income';
import SortButtons from './SortButtons';
// import expenese, expenseForm, income, incomeForm

const Main = () => {
    return (
        <div>
            <Calendar />
            <SortButtons />
            <Expense />
            <Income />
        </div>
    );
}

export default Main;
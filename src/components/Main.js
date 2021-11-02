import React from 'react';
import Calendar from './Calendar';
import Expense from './Expense';
import Income from './Income';
import SortButtons from './SortButtons';
import { history }  from '../routers/AppRouter';
// import expenese, expenseForm, income, incomeForm

let dateFilter = 'day';

const Main = () => {
    return (
        <div>
            <Calendar dateFilter={dateFilter} />
            <SortButtons />
            <Expense />
            <Income />

            <h3>[View Summary]</h3>
            <button onClick={() => history.push('/summary')}>Summary</button>
        </div>
    );
}

export default Main;
import React from 'react';
import Calendar from './Calendar';
import Expense from './Expense';
import Income from './Income';
import Donate from './Donate';
import SortButtons from './SortButtons';
import { history }  from '../routers/AppRouter';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import expenese, expenseForm, income, incomeForm

let dateFilter = 'day';

const Main = () => {
    return (
        <div>
            <Calendar dateFilter={dateFilter} />
            <SortButtons />
            <Expense />
            <Income />

            <Elements stripe={stripePromise}>
                <Donate />    
            </Elements>
            
            <h3>[View Summary]</h3>
            <button onClick={() => history.push('/summary')}>Summary</button>
        </div>
    );
}

const stripePromise = loadStripe('pk_live_IknwXmnm2Ktg37tx7zpYpdgu00sxuFTIzS'); //TODO save in CONFIG

export default Main;
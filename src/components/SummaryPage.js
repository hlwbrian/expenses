import React, {useState, useEffect} from 'react';
import { history } from '../routers/AppRouter';
import Calender from './Calendar';
import SummaryExpensesSection from './SummaryExpensesSection';
import SummaryIncomesSection from './SummaryIncomesSection';
import moment from 'moment';

const SummaryPage = () => {
    const [dateFilter, setDateFilter] = useState('day'); //create Functional state Hook for dateFilter variable
    const [currentDate, setCurrentDate] = useState(moment()); //create Functional state Hook for dateFilter variable
    
    const updateText = () => {
        if(dateFilter === 'day'){
            document.querySelector('.selectedDateRange').innerText = currentDate.format('L');
        }
        else if(dateFilter === 'month'){
            document.querySelector('.selectedDateRange').innerText = currentDate.format('MM/YYYY');
        }
        else{
            document.querySelector('.selectedDateRange').innerText = currentDate.format('YYYY');
        }
    }

    useEffect(() => {
        document.querySelector('#date').value = currentDate.format('L');
        updateText();
    });

    return (
        <div> 
            <h2>Summary Page</h2> 
            <Calender from={'SummaryPage'} />
            <h3 className="selectedDateRange">{currentDate.format('L')}</h3>

            <div id="dateFilter">
                <button className="day selected" id="day" onClick={() => {setDateFilter('day');}}>DAY</button>
                <button className="month" id="month" onClick={() => {setDateFilter('month');}}>MONTH</button>
                <button className="year" id="year" onClick={() => {setDateFilter('year');}}>YEAR</button>

                <button className="previous" onClick={ () => { setCurrentDate(moment(currentDate.subtract(1, dateFilter))); } }>Previous</button>
                <button className="next" onClick={ () => { setCurrentDate(moment(currentDate.add(1, dateFilter))); } }>Next</button>
            </div>

            <SummaryExpensesSection dateFilter={dateFilter} currentDate={currentDate} />
            <SummaryIncomesSection dateFilter={dateFilter} currentDate={currentDate} />

            <button onClick={() => history.push('/home')}>Back</button>
        </div>
    );
}

export default SummaryPage;
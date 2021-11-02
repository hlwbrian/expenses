import React, {useState} from 'react';
import { SingleDatePicker } from 'react-dates';
import { useDispatch } from 'react-redux'; //use filter reducer
import { setDate } from '../actions/filter';
import moment from 'moment';
import 'react-dates/initialize';

const Calendar = () => {
    //Data and Functions for react-dates
    const dispatch = useDispatch();
    const [createdAt, setCreatedAt] = useState(moment());
    const [calendarFocused, setCalendarFocused] = useState(false);

    const onDateChange = (createdAt) => {
        if (createdAt) {
          setCreatedAt(createdAt);
          dispatch( setDate(createdAt.format('L')) );
        }

        //For Summary Page
        if(document.querySelector('.selectedDateRange') !== null){
            document.querySelector('.selectedDateRange').innerText = createdAt.format('L');
        }
    };
    const onFocusChange = ({ focused }) => {
        setCalendarFocused(focused);
    };

    //Component HTML DOM
    return (
        <div>
            <div id="calendar">
                <SingleDatePicker
                    date={createdAt}
                    onDateChange={onDateChange}
                    focused={calendarFocused}
                    onFocusChange={onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        </div>
    );
}

export default Calendar;
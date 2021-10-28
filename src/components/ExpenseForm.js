import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const ExpenseForm = () => {
    const [createdAt, setCreatedAt] = useState();
    const [calendarFocused, setCalendarFocused] = useState(false);
    const onDateChange = (createdAt) => {
        if (createdAt) {
          setCreatedAt(createdAt);
        }
    };
    const  onFocusChange = ({ focused }) => {
        setCalendarFocused(focused);
    };

    return (
        <div>[Expense Form]
            <SingleDatePicker
                date={createdAt}
                onDateChange={onDateChange}
                focused={calendarFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
    );
}

export default ExpenseForm;
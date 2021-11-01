import React from 'react';
import { useDispatch } from 'react-redux'; //use filter reducer
import { sortType, sortAmount } from '../actions/filter';
import 'react-dates/initialize';

const SortButtons = () => {
    const dispatch = useDispatch();

    //Component HTML DOM
    return (
        <div>
            <button onClick={() => dispatch(sortType())}>Type</button>
            <button onClick={() => dispatch(sortAmount())}>Amount</button>
        </div>
    );
}

export default SortButtons;
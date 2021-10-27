import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub } from '../actions/cal';
import { startLogin } from '../actions/auth'; //IMPORT init login functions

export const Testing = (props) => {
    const total = useSelector( state => state.total );
    const dispatch = useDispatch();

    return (
        <div>
            <p>Testing Page</p>
            <p>Current Total: {total} </p>
            <button onClick={() => dispatch(add())}>+</button>
            <button onClick={() => dispatch(sub())}>-</button>
            <button onClick={() => dispatch(startLogin())}>LOGIN</button>
        </div>
    )
}

export default Testing;
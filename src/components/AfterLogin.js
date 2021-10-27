import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

const AfterLogin = () => {
    const dispatch = useDispatch();

    return (
        <div>
            AfterLogin page (/src/components/AfterLogin.js)
            <button onClick={() => dispatch(startLogout())}>LOGOUT</button>
        </div>
    )
};

export default AfterLogin;
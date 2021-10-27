import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';

const BeforeLogin = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            BeforeLogin page (/src/components/BeforeLogin.js)
            <button onClick={() => dispatch(startLogin())}>LOGIN</button>
        </div>
    );
}

export default BeforeLogin;

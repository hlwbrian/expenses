import React from 'react';
import Header from './Header';          //IMPORT Component: Header
import Main from './Main';    //IMPORT Component: Main
import { useSelector } from 'react-redux';

const AfterLogin = () => {
    const userEmail = useSelector( state => state.auth.email );
    
    return (
        <div>
            <Header />
            <p>Your ID: {userEmail}</p>
            <Main />
        </div>
    )
};

export default AfterLogin;
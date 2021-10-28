import React from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
            <h1>ExpensesApp</h1>
          <button className="button button--link" onClick={() => dispatch(startLogout())}>Logout</button>
        </div>
      </div>
    </header> 
  )
};

export default Header;

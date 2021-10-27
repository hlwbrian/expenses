import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history }  from './routers/AppRouter';                    //IMPORT App Router
import configureStore from './store/configureStore';            //IMPORT Redux Store Config
import { login, logout } from './actions/auth';                 //IMPORT login & logout functions
import { firebase } from './firebase/firebase';

//IMPORT Redux Store
const store = configureStore();

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

/*
Check if app rendered
  - YES: redirect to page
  - NO : show loading page

  let hasRendered = false;
  const renderApp = () => {
    if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
    }
  };
*/

//RENDER Loading Page
const target = document.getElementById('app');
ReactDOM.render(jsx, target);

//CHECK if user is logged-in or not
firebase.auth().onAuthStateChanged((user) => {
  //IF User logged-in
  if (user) {
    console.log('t1');
    console.log(user);
    history.push('/after');
    //TODO: store user info afterwards
  } 
   //IF User logged-out
  else {
    console.log('t2');
    console.log(user);
    history.push('/before');
    //TODO: store user info afterwards
  }
});

/*auth.onAuthStateChanged(function(user) {
  if (user) {
    //if user is logged-in, redirect to 'after login page'
    console.log(auth.currentUser.email);
  } else {
    //if user is not logged-in, redirect to 'before login page'
    console.log('loggout2');
    console.log('loggout');
  }
});*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history }  from './routers/AppRouter';      //IMPORT App Router
import configureStore from './store/configureStore';            //IMPORT Redux Store Config
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { login } from './actions/auth';

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
*/
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

//CHECK if user is logged-in or not
firebase.auth().onAuthStateChanged((user) => {
  //IF User logged-in
  if (user) {
    history.push('/home');
    store.dispatch(login(user.uid, user.email));
    //TODO: store user info afterwards
  } 
   //IF User logged-out
  else {
    history.push('/before');
    //TODO: store user info afterwards
  }

  renderApp();
});
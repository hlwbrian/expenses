import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';          //MIDDLEWARE for returning function in redux actions
import authReducer from '../reducers/auth';
//TODO: Add other reducer (e.g. expenseReducer)

//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ used for browser's redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
};
import moment from 'moment';

export default (state = {date : moment().format('L'), sort : 'date'}, action) => {
    switch (action.type) {
      case 'SET_DATE':
        return {
          date: action.date,
          sort: state.sort
        };
      case 'SORT_TYPE':
        return {
          date: state.date,
          sort: 'type'
        };
      case 'SORT_AMOUNT':
        return {
          date: state.date,
          sort: 'amount'
        };
      default:
        return state;
    }
  };
  
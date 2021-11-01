import moment from 'moment';

export default (state = {date : moment().format('L')}, action) => {
    switch (action.type) {
      case 'SET_DATE':
        return {
            date: action.date
        };
      default:
        return state;
    }
  };
  
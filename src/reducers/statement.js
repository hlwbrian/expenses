//Read object from Firebase Storage
/*
Default: 
state = {
  expense: [{},{},...],
  income: [{}, {}, ...]
}
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_STATEMENT':
      return {
        expense: action.expense,
        income: action.income
      };
    case 'ADD_INCOME':
      //push new income object into the income array
      return {};
    case 'REMOVE_INCOME':
      //remove target income object from income array
      return {};
    case 'ADD_EXPENSE':
      //push new expense object into the expense array
      return {
        income: state.income,
        expense: [...state.expense, action.newExpense]
      };
    case 'REMOVE_EXPENSE':
      //remove target expense object from expense array
      return {};
    default:
      return state;
  }
};

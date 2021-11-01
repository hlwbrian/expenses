//Read object from Firebase Storage
/*
Default: 
state = {
  expense: [{},{},...],
  income: [{}, {}, ...]
}
*/
export default (state = {}, action) => {
  let resultArr = [];

  switch (action.type) {
    case 'LOAD_STATEMENT':
      return {
        expense: action.expense,
        income: action.income
      };
    case 'ADD_INCOME':
      //push new income object into the income array
      return {
        income:  [...state.income, action.newIncome],
        expense: state.expense
      };
    case 'REMOVE_INCOME':
      //remove target income object from income array
      resultArr = [];
      for(let [key, value] of state.income.entries()){
        if(value.date === action.removeObj.tarDate && value.type === action.removeObj.tarType && value.amount === action.removeObj.tarAmount){
          state.income.splice(key, 1);
          resultArr = state.income;
          break;
        }
      }

      return {
        income: [...resultArr],
        expense: state.expense
      };
    case 'ADD_EXPENSE':
      //push new expense object into the expense array
      return {
        income: state.income,
        expense: [...state.expense, action.newExpense]
      };
    case 'REMOVE_EXPENSE':
      //remove target expense object from expense array
      resultArr = [];
      for(let [key, value] of state.expense.entries()){
        if(value.date === action.removeObj.tarDate && value.type === action.removeObj.tarType && value.amount === action.removeObj.tarAmount){
          state.expense.splice(key, 1);
          resultArr = state.expense;
          break;
        }
      }

      return {
        income: state.income,
        expense: [...resultArr]
      };
    default:
      return state;
  }
};

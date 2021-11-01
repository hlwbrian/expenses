export const load = (expenseArr, incomeArr) => ({
  type: 'LOAD_STATEMENT',
  expense: expenseArr,
  income: incomeArr
});

export const addIncome = (newIncome) => ({
  type: 'ADD_INCOME',
  newIncome
});

export const removeIncome = (removeObj) => ({
  type: 'REMOVE_INCOME',
  removeObj
});

export const addExpense = (newExpense) => ({
  type: 'ADD_EXPENSE',
  newExpense
});

export const removeExpense = (removeObj) => ({
  type: 'REMOVE_EXPENSE',
  removeObj
});

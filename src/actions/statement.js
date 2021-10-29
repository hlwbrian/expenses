export const load = (expenseArr, incomeArr) => ({
  type: 'LOAD_STATEMENT',
  expense: expenseArr,
  income: incomeArr
});

export const addIncome = () => ({
  type: 'ADD_INCOME'
});

export const removeIncome = () => ({
  type: 'REMOVE_INCOME'
});

export const addExpense = (newExpense) => ({
  type: 'ADD_EXPENSE',
  newExpense
});

export const removeExpense = () => ({
  type: 'REMOVE_EXPENSE'
});

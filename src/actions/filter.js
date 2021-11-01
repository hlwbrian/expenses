  export const setDate = ( dateStr ) => ({
    type: 'SET_DATE',
    date: dateStr
  });

  export const sortType = () => ({
    type: 'SORT_TYPE'
  });

  export const sortAmount = () => ({
    type: 'SORT_AMOUNT'
  });

  //TODO: sort_amount, sort_type, filterDate, etc
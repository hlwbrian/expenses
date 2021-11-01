import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../actions/statement';
import database from '../firebase/firebase';

const ExpenseSummary = () => {
    //Get var value from redux
    const uid = useSelector( state => state.auth.uid );
    const expenses = useSelector( state => state.statement.expense );
    const date = useSelector( state => state.filter.date );
    const sortType = useSelector( state => state.filter.sort );
    const dispatch = useDispatch();
    
    let displayArr = [];
    
    const firebaseRemoveExpense = () => {
        database.ref('users/'+uid+'/expense').set(expenses);
    }

    try {
        //Show target date data only
        displayArr = expenses.filter( curVal => {return curVal.date == date});

        if(sortType === 'type'){
            displayArr.sort( (a, b) => {
                return a.type - b.type;
            });
        }else if(sortType === 'amount'){
            displayArr.sort( (a, b) => {
                return a.amount - b.amount;
            });
        }
    }catch(e){}

    return (
        <div>
            <h3>[Expense Summary]</h3>
            <h4>Date {date}</h4>
            <ul>
                {displayArr.map((curVal, index) => { 
                    return <li key={index}>
                        <span className="noOfItem">{index} </span>
                        <span className="itemType">{curVal.type} </span>
                        <span className="itemAmount">${curVal.amount} </span>
                        <span className="itemDel" onClick={() => {dispatch(removeExpense({tarDate: curVal.date, tarType: curVal.type, tarAmount: curVal.amount})); firebaseRemoveExpense();} }>X</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ExpenseSummary;
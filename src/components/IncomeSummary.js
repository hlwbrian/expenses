import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeIncome } from '../actions/statement';
import database from '../firebase/firebase';

const IncomeSummary = () => {
    //Get var value from redux
    const uid = useSelector( state => state.auth.uid );
    const incomes = useSelector( state => state.statement.income );
    const date = useSelector( state => state.filter.date );
    const sortType = useSelector( state => state.filter.sort );
    const dispatch = useDispatch();

    let displayArr = [];

    const firebaseRemoveIncome = () => {
        database.ref('users/'+uid+'/income').set(incomes);
    }

    try {
        //Show target date data only
        displayArr = incomes.filter( curVal => {return curVal.date == date});
       
        if(sortType === 'type'){
            displayArr.sort( (a, b) => {
                if(a.type < b.type)
                    return -1;
                if(a.type > b.type)
                    return 1;
                return 0; //if name are equals
            });
        }else if(sortType === 'amount'){
            displayArr.sort( (a, b) => {
                return a.amount - b.amount;
            });
        }
    }catch(e){}

    return (
        <div>
            <h3>[Income Summary]</h3>
            <h4>Date {date}</h4>
            <ul>
                {displayArr.map((curVal, index) => { 
                    return <li key={index}>
                        <span className="noOfItem">{index} </span>
                        <span className="itemType">{curVal.type} </span>
                        <span className="itemAmount">${curVal.amount} </span>
                        <span className="itemDel" onClick={() => {dispatch(removeIncome({tarDate: curVal.date, tarType: curVal.type, tarAmount: curVal.amount})); firebaseRemoveIncome();} }>X</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default IncomeSummary;
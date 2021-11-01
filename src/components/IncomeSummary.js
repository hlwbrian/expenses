import React from 'react';
import { useSelector } from 'react-redux';

const IncomeSummary = () => {
    //Get var value from redux
    const incomes = useSelector( state => state.statement.income );
    const date = useSelector( state => state.filter.date );
    let displayArr = [];

    try {
        //Show target date data only
        displayArr = incomes.filter( curVal => {return curVal.date == date});
        //TODO sorting
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
                        <span className="itemAmount">${curVal.amount}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default IncomeSummary;
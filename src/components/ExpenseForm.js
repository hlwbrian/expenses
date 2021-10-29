import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import database from '../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, load } from '../actions/statement';

let isInit = true;

const ExpenseForm = () => {
    //Get var value from redux
    const uid = useSelector( state => state.auth.uid );
    
    //Prepare to use redux dispatch
    const dispatch = useDispatch();

    //SET redux state from Firebase storage

    if(isInit){
        let expenseArr = [];
        let incomeArr = [];

        //Get expense data from storage
        database.ref('users/').child(uid).get().then((snapshot) => {
            if (snapshot.exists()) { //If data exists
                //make sure expense has data
                if(snapshot.val().expense !== undefined){
                    Object.keys(snapshot.val().expense).map((key) => expenseArr.push(snapshot.val().expense[key]));
                }

                //make sure income has data
                if(snapshot.val().income !== undefined){
                    Object.keys(snapshot.val().income).map((key) => incomeArr.push(snapshot.val().income[key]));
                }

                //Set state object
                dispatch(load(expenseArr, incomeArr));
            }
        }).catch((error) => {
            console.error(error);
        });
        
        isInit = false; //only run when page reload
    }

    //Data and Functions for react-dates
    const [createdAt, setCreatedAt] = useState();
    const [calendarFocused, setCalendarFocused] = useState(false);
    const onDateChange = (createdAt) => {
        if (createdAt) {
          setCreatedAt(createdAt);
        }
    };
    const onFocusChange = ({ focused }) => {
        setCalendarFocused(focused);
    };

    const newExpense = (e) => {
        e.preventDefault(); //Stop page reload

        //Get all the required fields value
        let expenseDate = document.getElementById('date').value;
        let expenseAmount = document.getElementById('expenseAmountValue').value;
        let expenseType = '';
        for(let value of document.getElementsByName('expenseType')){
            if(value.checked){
                expenseType = value.id
            }
        }
        
        //Check if all fields contains value
        if( (expenseDate && expenseAmount && expenseType) !== '' ){
            //Push The Records into Firebase 'Realtime-Database'
            database.ref('users/'+uid+'/expense').push({
                expenseDate: expenseDate,
                expenseAmount: expenseAmount,
                expenseType : expenseType
            });

            //Update Redux Expense Object
            dispatch(addExpense({
                expenseDate: expenseDate,
                expenseAmount: expenseAmount,
                expenseType : expenseType
            }));
        }else{
            alert('Please enter all the info');
        }
    };

    //Component HTML DOM
    return (
        <div>
            <h3>[Expense Form]</h3>
            
            <form onSubmit={newExpense}>
                <div id="expenseRadio">
                    <input type="radio" id="food" name="expenseType" value="Food"/>
                    <label>Food</label>
                    <input type="radio" id="social" name="expenseType" value="Social" />
                    <label>Social</label>
                    <input type="radio" id="traffic" name="expenseType" value="Traffic" />
                    <label>Traffic</label>
                </div>
                <div id="expenseDate">
                    <SingleDatePicker
                        date={createdAt}
                        onDateChange={onDateChange}
                        focused={calendarFocused}
                        onFocusChange={onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
                <div id="expenseAmount">
                    <input type="number" name="expenseAmountValue" id="expenseAmountValue" />
                </div>
                <button type="submit">UPDATE</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
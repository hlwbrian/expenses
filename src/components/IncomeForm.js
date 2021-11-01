import React from 'react';
import 'react-dates/initialize';
import database from '../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addIncome, load } from '../actions/statement';

let isInit = true;

const IncomeForm = () => {
    //Get var value from redux
    const uid = useSelector( state => state.auth.uid );
    
    //Prepare to use redux dispatch
    const dispatch = useDispatch();

    //SET redux state from Firebase storage
    if(isInit){
        let expenseArr = [];
        let incomeArr = [];

        //Get income data from storage
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

    const newIncome = (e) => {
        e.preventDefault(); //Stop page reload

        //Get all the required fields value
        let incomeDate = document.querySelector('#calendar #date').value;
        let incomeAmount = document.getElementById('incomeAmountValue').value;
        let incomeType = '';
        for(let value of document.getElementsByName('incomeType')){
            if(value.checked){
                incomeType = value.id
            }
        }
        
        //Check if all fields contains value
        if( (incomeDate && incomeAmount && incomeType) !== '' ){
            //Push The Records into Firebase 'Realtime-Database'
            database.ref('users/'+uid+'/income').push({
                date: incomeDate,
                amount: incomeAmount,
                type : incomeType
            });

            //Update Redux Expense Object
            dispatch(addIncome({
                date: incomeDate,
                amount: incomeAmount,
                type : incomeType
            }));
        }else{
            alert('Please enter all the info');
        }
    };

    //Component HTML DOM
    return (
        <div>
            <h3>[Income Form]</h3>
            
            <form onSubmit={newIncome}>
                <div id="incomeRadio">
                    <input type="radio" id="salary" name="incomeType" value="Salary"/>
                    <label>Salary</label>
                    <input type="radio" id="bonus" name="incomeType" value="Bonus" />
                    <label>Bonus</label>
                    <input type="radio" id="invesment" name="incomeType" value="Invesment" />
                    <label>Invesment</label>
                </div>
                <div id="incomeAmount">
                    <input type="number" name="incomeAmountValue" id="incomeAmountValue" />
                </div>
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}

export default IncomeForm;
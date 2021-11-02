import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import PieChart from "highcharts-react-official";

const SummaryIncomesSection = (props) => {
    let incomes = useSelector(state => state.statement.income);
    const [options, setOptions] = useState({
        date : '',
        chart: {
          type: "pie"
        },
        title: {
            text: `Incomes Summary by ${props.dateFilter}`
        },
        series: []
    });

    //Expense list filtering
    useEffect(() => {
        let dateSplit = [];
        let temp = {};
        let tempArr = [];
        let targetMonth = props.currentDate.format('L').split('/')[0];
        let targetDay = props.currentDate.format('L').split('/')[1];
        let targetYear = props.currentDate.format('L').split('/')[2];
        
        if(props.dateFilter === 'day'){
            incomes = incomes.filter( curVal => {
                return curVal.date === targetMonth + '/' + targetDay + '/' + targetYear;
            });
        }
        else if (props.dateFilter === 'month'){
            incomes = incomes.filter( curVal => {
                dateSplit = curVal.date.split('/');
                return dateSplit[0] + '/' + dateSplit[2] === targetMonth + '/' + targetYear;
            });
        }
        else{
            incomes = incomes.filter( curVal => {
                dateSplit = curVal.date.split('/');
                return dateSplit[2] === targetYear;
            });
        }

        //Generate Pie chart using Highcharts.js
        for(let [key, value] of incomes.entries()){
            value.amount = parseFloat(value.amount);
            temp[value.type] = (temp[value.type] === undefined)? value.amount : temp[value.type] + value.amount;
        }

        Object.keys(temp).map( key => {
            tempArr.push({name : key, y : temp[key]})
        });

        let formatLabel = '';
        if(props.dateFilter === 'month')
            formatLabel = 'MM/YYYY';
        else if (props.dateFilter === 'day')
            formatLabel = 'L';
        else
            formatLabel = 'YYYY';

        //Reload new data
        if(options.date === '' || options.date !== props.currentDate.format(formatLabel)){
            setOptions({
                date : props.currentDate.format(formatLabel),
                chart: {
                  type: "pie"
                },
                title: {
                    text: `Incomes Summary by ${props.dateFilter}`
                },
                series: [
                  {
                    data: tempArr
                  }
                ]
            });
        }
    });
    
    return (
        <div>
            <h3>[Incomes Pie Chart]</h3>
            <PieChart highcharts={Highcharts} options={options} />
        </div>
    );
}

export default SummaryIncomesSection;
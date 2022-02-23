import React,{useState} from 'react';
import './App.css';
import BasicDateComponent from './components/basic-date-component';
import CustomYearComponent from './components/custom-header-date';
import DateRangeComponent from './components/date-range-component';
import QuarterPickerComponent from './components/quarter-picker-component';
import MonthPicker from './components/monthPicker';
function App() {
  const [updatedDate, setUpdatedDate] = useState(null)

  const onDateChange = (data) =>{
    console.log('data:', data)
    setUpdatedDate(data.toString())
  }
  return (
    <div>
      Parent : {updatedDate}
      <div>
        Basic Date pickers
        <BasicDateComponent onDateChange={onDateChange}/>
      </div>
      <div>
        Custom:
        <CustomYearComponent/>

      </div>
      <div>
        Date Range component: 
        <DateRangeComponent />
      </div>
      <div>
        Quater Date picker: 
        <QuarterPickerComponent />
      </div>
      <div>
        Month picker:
        <MonthPicker />
      </div>
      
    </div>
  );
}

export default App;

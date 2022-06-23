import React,{useState} from 'react';
import './App.css';
import BasicDateComponent from './components/basic-date-component';
import CustomYearComponent from './components/custom-header-date';
import DateRangeComponent from './components/date-range-component';
import QuarterPickerComponent from './components/quarter-picker-component';
import MonthPicker from './components/monthPicker';
import ScrollTestComponent from './components/scroll-test-component';
import $ from 'jquery';
import ParentComponent from './containers/parent-container';
function App() {
  const [updatedDate, setUpdatedDate] = useState(null)
  const dynamicaArrList = Array.from({ length: 100 }, (_, idx) => `${++idx}`)
  const onDateChange = (data) =>{
    console.log('data:', data)
    setUpdatedDate(data.toString())
  }
  let fixmeTop = $('.scr-head')?.offset()?.top;
$(window).scroll(function() {
    let currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.scr-head').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('.scr-head').css({
            position: 'static'
        });
    }
});
  return (
    <div>
      Parent : {updatedDate}

      <div>
        ParentComponent :: <ParentComponent />
      </div>
      {/* <div>
        Basic Date pickers
        <BasicDateComponent onDateChange={onDateChange}/>
      </div> */}
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

      <div className='scr-head'>
        Scroll Testing:
        <ScrollTestComponent />
      </div>
      {
        dynamicaArrList.map((data, index) =>{
          return(
            <div key={index}> {data} </div>
          )
        })
      }
      
    </div>
  );
}

export default App;

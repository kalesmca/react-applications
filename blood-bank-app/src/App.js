import logo from './logo.svg';
import './App.css';
import BasicDateComponent from './components/basic-date-component';
import CustomYearComponent from './components/custom-header-date';
import DateRangeComponent from './components/date-range-component';
function App() {
  return (
    <div>
      <div>
        Basic Date pickers
        <BasicDateComponent/>
      </div>
      <div>
        Custom:
        <CustomYearComponent/>

      </div>
      <div>
        Date Range component: 
        <DateRangeComponent />
      </div>
      
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.min.css'
import es from 'date-fns/locale/es';
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// registerLocale ('es', es)

const BasicDateComponent = (props) => {
  // setDefaultLocale('es');
    const [startDate, setStartDate] = useState(new Date());
    
    return (
      <DatePicker selected={startDate} onChange={(date) => 
        {
          setStartDate(date)
          props.onDateChange(date)
        }} />
    );
  };

export default BasicDateComponent;


import React, { useRef  } from 'react';
import '../styles/container.css';
import ReactToPrint from 'react-to-print';
import SummaryComponent from './summary';
import BillCalculatorComponent from './bill-calculator';
import BillComponent from './bill';

const ContainerComponent = props => {
    console.log('props:', props)
    const componentRef = useRef();
    return (
        <div className="outer">Container
        <div>
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
            <SummaryComponent ref={componentRef} />
        </div>
        <div className="cal-container">
            <BillCalculatorComponent />
        </div>
        
        </div>
    )
}

export default ContainerComponent;
import React,{createContext, useState} from 'react';

export const CounterContext = createContext();
export default function CounterContextProvider(props){
    const [counterValue, setCounterValue] = useState(10);

    const increment = () => {
        setCounterValue(counterValue + 1);
      };
    
      const decrement = () => {
        if (counterValue > 0) {
          setCounterValue(counterValue - 1);
        }
      };

    return(
        <CounterContext.Provider
      value={{
        counterValue,
        increment,
        decrement
      }}
    >
      {props.children}
    </CounterContext.Provider>

    )

}
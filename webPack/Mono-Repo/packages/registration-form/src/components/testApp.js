import React from 'react'

const TestApp = (props) => {
    const alertClicked = () => {
        alert('alert is triggered');
    }
  return (
    <div>testApp calling
        <button onClick={()=>{props.parentCallback()}}>Alert</button>
    </div>
  )
}

export default TestApp;

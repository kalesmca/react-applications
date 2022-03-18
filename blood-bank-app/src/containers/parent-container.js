import React from 'react'
import BasicDateComponent from '../components/basic-date-component';
import ChildComponent from './child-container';
class ParentComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {newDate:"not yet updated", inputValue: 'ks'}
        
    }
    childCallables = null;

    setChildCallables = (event) => {
        this.childCallables = event;
     }
     onButtonClick = () => {
        // Call the child function doSomething()
        this.childCallables.doSomething(20);
     }

   

    parentMethod = (data) =>{
        console.log('data ::', data);
        // let tempDate = new Date(data);
        this.setState({newDate: data.getFullYear()})
    }
    render(){
        return(
            <div> My Class Component: {this.state.newDate}
            
            <div>
        Basic Date pickers
        <BasicDateComponent onDateChange={this.parentMethod}/>
      </div>

            <button onClick={()=>{this.onButtonClick()}}>child click</button>
            <input value={this.state.inputValue} onChange={(e)=>{this.setState({inputValue: e.target.value})}}/>
                <ChildComponent setCallables={this.setChildCallables} data={this.state.inputValue}/>

            </div>
        )
    }
}

export default ParentComponent;
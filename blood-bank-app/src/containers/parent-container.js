import React from 'react'
import BasicDateComponent from '../components/basic-date-component';

class ParentComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {newDate:"not yet updated"}
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
            </div>
        )
    }
}

export default ParentComponent;
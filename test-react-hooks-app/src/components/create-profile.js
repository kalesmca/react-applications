import React, { Component } from "react";
import {connect} from 'react-redux';

class CreateProfile extends Component {
    state = { obj:{
        name: '',
        age: 0,
        city: ''
    } 
    }
    handleChange(e){
        console.log(e);
        let tmpObj = this.state.obj;
        tmpObj[e.target.name] = e.target.value 
        this.setState({
            obj: tmpObj
        })
    }
  render() {
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">Panel Heading</div>
          <div className="panel-body">
              <div className="row">
              <div className="htmlForm-group col-sm-4" >
              <label >Name:</label>
              <input type="text" name="name" className="htmlForm-control" id="usr" 
              onChange={(e)=>{this.handleChange(e)}} value={this.state.obj.name}/>
            </div>
            <div className="htmlForm-group col-sm-4">
              <label >Age:</label>
              <input type="number" name="age" className="htmlForm-control" id="age" 
              onChange={(e)=>{this.handleChange(e)}} value={this.state.obj.age}/>
            </div>
              </div>
            <div className="row">
            <div className="htmlForm-group col-sm-4">
              <label >City:</label>
              <input type="text" name="city" className="htmlForm-control" id="cty" 
              onChange={(e)=>{this.handleChange(e)}} value={this.state.obj.city}/>
            </div>
            <div className="col-sm-4">
                <button className="btn btn-primary"  onClick={()=> this.props.addData(this.state.obj)}>
                    Add
                </button>

            </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

// const dispatchState = dispatch => {
//     return {
//         addData: () => dispatch({type: 'ADD', value: 1})
//     }
// }
const mapState = state =>{
    return {
        profileList: state.profileList
    } 
}
const mapDispachToProps = dispatch => {
    return {
        addData: (data) => dispatch({ type: "ADD", value: data }),
    //   onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
    };
  };

export default connect(mapState, mapDispachToProps)(CreateProfile);

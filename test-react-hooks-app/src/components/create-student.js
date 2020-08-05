import React, { useState } from "react";

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [obj, setObj] = useState({});

    function handleChange(e) {
        console.log(e);
        // if(e.target.name === 'name') {
        //     setName(e.target.value);
        // } else {
        //     setAge(e.target.value);
        // }
debugger
        let tmpObj = obj;
        tmpObj[e.target.name] = e.target.value;
        setObj(tmpObj);

    }

    return (
        <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">Panel Heading</div>
          <div className="panel-body">
              <div className="row">
              <div className="htmlForm-group col-sm-4" >
              <label >Name:</label>
              <input type="text" name="name" className="htmlForm-control" id="usr" 
              onChange={(e)=>{handleChange(e)}} value={obj.name}/>
            </div>
            <div className="htmlForm-group col-sm-4">
              <label >Age:</label>
              <input type="number" name="age" className="htmlForm-control" id="age" 
              onChange={(e)=>{handleChange(e)}} value={obj.age}/>
            </div>
              </div>
            <div className="row">
            <div className="htmlForm-group col-sm-4">
              <label >City:</label>
              <input type="text" name="city" className="htmlForm-control" id="cty" 
              onChange={(e)=>{handleChange(e)}} value={obj.city}/>
            </div>
            {/* <div className="col-sm-4">
                <button className="btn btn-primary"  onClick={()=> this.props.addData(this.state.obj)}>
                    Add
                </button>

            </div> */}
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default CreateStudent;
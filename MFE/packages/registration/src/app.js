import React, {useState} from 'react';

import "./index.css";
const initValue = {
    name:"",
    city:"",
    email:"",
    id:""
}
const App = (props) =>{
    const [obj, setObj] =  useState(initValue)   
    console.log('props::', props)   
        const save = () =>{
            setObj({...obj, id: new Date().getTime() / 100000});
            props.mine(obj)
            setObj(initValue)
            
        }  
        return(
        <div>Registration 
            <div className="registraion">
                <form>
            <label>Name: </label>
            <input type='text' value={obj.name} onChange={(e)=>{setObj({...obj,...{name:e.target.value}})}}/>
            
            <label>Email: </label>
            <input type='text' value={obj.email} onChange={(e)=>{setObj({...obj,...{email:e.target.value}})}}/>
            
            <label>City: </label>
            <input type='text' value={obj.city} onChange={(e)=>{setObj({...obj,...{city:e.target.value}})}}/>
            
                <input type="submit" onClick={()=>{save()}} value="Save" />
                </form>
            </div>

        </div>
    )
}

export default App;
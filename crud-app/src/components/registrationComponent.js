import React,{useContext, useState, useEffect} from "react";
import { UserContext } from "../contexts/userContext";
import {useParams} from 'react-router-dom';



const initValue = {
    name:"",
    age: ""
}

export default function RegistrationComponent() {
    const {userList, setUserList} = useContext(UserContext);
    const { userId } = useParams();
    const [user, setUser] = useState({})
    
    
    


    useEffect(()=>{
        console.log('user:', user, userList, userId)
        if(userId){
          setUser(userList[userId])
        }
    },[])

  return (
    <div className="container">
      <h2>Form control: input</h2>
      <p>
        The form below contains two input elements; one of type text and one of
        type password:
      </p>
      <form>
        <div className="form-group">
          <label for="usr">Name:</label>
          <input type="text" className="form-control" id="usr" value={user.name} onChange={(e)=>{setUser({...user, name: e.target.value})}}/>
        </div>
        <div className="form-group">
          <label for="pwd">Age:</label>
          <input type="text" className="form-control" id="age" value={user.age} onChange={(e)=>{setUser({...user, age: e.target.value})}}/>
        </div>
      </form>
      {
        !userId? (<button onClick={()=>{setUserList([...userList, ...[user]]); setUser(initValue)}}>Save</button>) : null
      }
      
    </div>
  );
}

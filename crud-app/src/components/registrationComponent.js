import React,{useContext, useState, useEffect} from "react";
import { UserContext } from "../contexts/userContext";


const initValue = {
    name:"",
    age: null
}

export default function RegistrationComponent() {
    const {setUserList} = useContext(UserContext);
    const [user, setUser] = useState({})

    useEffect(()=>{
        console.log('user:', user)
    })

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
          <input type="text" className="form-control" id="usr" value={user.name} onChange={(e)=>{setUser({name: e.target.value})}}/>
        </div>
        <div className="form-group">
          <label for="pwd">Age:</label>
          <input type="text" className="form-control" id="age" value={user.age} onChange={(e)=>{setUser({age: e.target.value})}}/>
        </div>
      </form>
    </div>
  );
}

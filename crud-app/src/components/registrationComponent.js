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
    
    const columnHeader = [
      { label: 'Name', key: 'name' },
      { label: 'Age', key: 'age' },
    ];
  
    const data = [
      { name: 'kaleeswaran', age: 22, id: 1 },
      { name: 'Sundari', age: 21, id: 2 },
      { name: 'Mani', age: 24, id: 3 },
      { name: 'Saravanakumar', age: 22, id: 4 },
      { name: 'Nandhini', age: 31, id: 5 },
      { name: 'Porkodi', age: 54, id: 6 },
      { name: 'Mariappan', age: 62, id: 7 },
      { name: 'Pechiyammal', age: 28, id: 8 },
      { name: 'Muthumanikkam', age: 29, id: 9 },
      { name: 'Suresh', age: 29, id: 10 },
      { name: 'Nithilan', age: 2, id: 11 },
      { name: 'Niranjan', age: 4, id: 12 },
      { name: 'Sahana', age: 2, id: 13 },
      { name: 'ArjunRam', age: 1, id: 14 },
      { name: 'MuthuMani', age: 24, id: 15 },
    ];

    const pagination = {
      isPagination: true,
      paginationLimitList: [5,10]
    }
  

    


    useEffect(()=>{
        console.log('user:', user, userList, userId)
        if(userId){
          setUser(userList[userId])
        }
    },[])

  return (
    <div className="container">
      <h2>Form control: input</h2>

<div>
<data-table data={JSON.stringify(data)} header = {JSON.stringify(columnHeader)}  pagination={JSON.stringify(pagination)}></data-table>

</div>

      <p>
            {/* <my-card header="GH Blood Bank" body="A+ve Blood Emergency"></my-card> */}

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

import React,{useContext, useEffect} from "react";
import { UserContext } from "../contexts/userContext";
import {useHistory} from "react-router-dom";


export default function UserListComponent() {
  const {userList, setUserList} = useContext(UserContext);
  const history = useHistory()

  const editFlag=(index)=>{
    let tempUserlist = [...userList]
    tempUserlist[index].editFlag = true;
    setUserList(tempUserlist);
    // tempUserlist[]

  }
  const handleChange = (event, index) => {
    console.log('index:',index, event);
    let tempUserlist = [...userList];
    tempUserlist[index][event.target.id] = event.target.value;
    setUserList(tempUserlist);

  }
  const handleBlur = () => {
    let tempUserlist = [...userList];
    tempUserlist.map((user) => {
      user.editFlag = user.editFlag ? !user.editFlag: user.editFlag;
    })
    setUserList(tempUserlist)
  }
  useEffect(()=>{
    console.log('userList ::', userList)
  })

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
  ]

  const columnHeader = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
  ];

  return (
    <div class="container">
      <h2>Basic Table</h2>
      <p>
        The .table class adds basic styling (light padding and only horizontal
        dividers) to a table:
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           userList.length? userList.map((user, userIndex)=>{
              return (
            <tr key={userIndex} onClick={()=>{history.push(`/user/${userIndex}`)}}>
            <td>{user.editFlag ? (<div><input type="text" value={user.name} onBlur={()=>{handleBlur()}} id="name" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.name}</div>)} </td>
            <td>{user.editFlag ? (<div><input type="text" value={user.age} onBlur={()=>{handleBlur()}} id="age" onChange={(e)=>{handleChange(e, userIndex)}} /></div>) : (<div>{user.age}</div>)} </td>

            <td><button onClick={()=>{editFlag(userIndex)}}>Edit</button></td>
            
          </tr>
              )
            }) : ""
          }
          
        </tbody>
      </table>

      My DataTable:
      <div>
      {/* <basic-table tableData={data} tableHeader={columnHeader}></basic-table> */}

      {/* <my-component></my-component> */}
        <data-table tableData={userList} tableHeader={columnHeader}></data-table>
      </div>
    </div>
  );
}

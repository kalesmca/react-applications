import React,{createContext, useState} from 'react';

export const UserContext = createContext();
export default function UserProvider(props){
    const initValue = [{
        name: "Nandhini",
        age : 22
    }]
    const [userList, setUserList] = useState(initValue);

    

    return(
        <UserContext.Provider
      value={{
        userList,
        setUserList
      }}
    >
      {props.children}
    </UserContext.Provider>

    )

}
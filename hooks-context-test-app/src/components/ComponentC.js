import React from 'react';
import { UserContext } from '../App';


const ComponentC = () => {

    return(
        
        <div> ComponentC 

<UserContext.Consumer>
            {
                user => {
                    return (
                        <div>My Name is {user}</div>
                    )
                }
            }
            
        </UserContext.Consumer>

        </div>

    )

}

export default ComponentC;
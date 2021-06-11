import React from 'react';
import { UserContext } from '../App';


const ComponentC = (props) => {
    console.log('props:', props)
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
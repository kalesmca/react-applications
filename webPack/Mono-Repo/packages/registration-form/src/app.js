import React from 'react';


const App = (props) =>{
    console.log('props::', props);
    return(
        <div>
            Registration APp loaded : {props.name}
        </div>
    )
}

export default App;
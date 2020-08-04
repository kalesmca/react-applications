const initialState  = {
    profileList : [
        {
            name : 'kaleeswaran',
            age: 29,
            city: 'Muhavoor'
        }
    ]
}

const reducer = (state = initialState, action) =>{
    let newState = {...state};
    console.log('state  :', action);
    switch(action.type) {
        case 'ADD':
            newState.profileList.push(action.value);
            console.log('new state ::', newState);
            let myvalue = {...newState};
            return myvalue
        default:
            return newState;
    }
}

export default reducer;
export default (state= {}, action) => {
    switch(action.type){
        case "addUser": 
        return {
            ...state,
            userList: action.data
            
        }
        default: 
        return state;
    }
}
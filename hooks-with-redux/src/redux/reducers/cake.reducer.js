import { cake } from "../actions"

const initialState = {
    cakeName: 'Black forest',
    numberOfCake: 55
}

const cakeReducer = (state= initialState, action) => {
    console.log('reducer calling :', action, state)
    switch(action.type) {
        case 'BUY_CAKE': return{
            ...state, numberOfCake: state.numberOfCake-1
        }
        default:
            return state;
    }

}
export default cakeReducer;

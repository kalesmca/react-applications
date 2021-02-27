const initialState = {
    iceCreamName: 'Vanila',
    numberOfIce: 100
}

const iceReducer = (state= initialState, action) => {
    console.log('ice reducer calling :', action, state)
    switch(action.type) {
        case 'BUY_ICECREAM': return{
            ...state, numberOfIce: state.numberOfIce-1
        }
        default:
            return state;
    }

}

export default iceReducer;

import {UPDATE_SAMPLE_MODAL_FLAG} from '../../constants'
const initalState = {
    sampleModalFlag: false
}

const modalReducer = (state=initalState, action) =>{
    
    switch(action.type){
        case UPDATE_SAMPLE_MODAL_FLAG:{
            
            return {...state, ...action.payload}
        }
        default:
            return{...state}
    }

}

export default modalReducer;
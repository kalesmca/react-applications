import {ASC_MEMBERS} from '../../constants';
import {UPDATE_APPSTATE} from '../../constants';

export const ascOrderMembers = (appState, index) =>{
    console.log('application state :', appState, index)
    return {type: ASC_MEMBERS}
    

}

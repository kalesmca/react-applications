import {UPDATE_SAMPLE_MODAL_FLAG} from '../../constants';

export const updateSampleModalFlag = (modals) =>{
    console.log('modals:', modals)
    modals.sampleModalFlag = !modals.sampleModalFlag
    return {type:UPDATE_SAMPLE_MODAL_FLAG, payload:modals }

}
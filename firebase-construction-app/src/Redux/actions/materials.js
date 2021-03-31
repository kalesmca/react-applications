import { ADD_MATERIAL, ADD_MATERIAL_TYPE, ADD_MATERIAL_URL } from "../../constants"
import {post} from '../../services/api.service'


export const addMaterialType = (data) =>{
    return {type:ADD_MATERIAL_TYPE, payload:data }
}

export const addMaterial = (data, materialList) =>{
    materialList[materialList.length-1] = data
   return ({type:ADD_MATERIAL, payload:materialList })
}

// export const addMaterial = (data, materialList) =>{
//     materialList[materialList.length-1] = data
//     data.id = Math.round(new Date().getTime() / 1000)
//     const obj = {
//         url: ADD_MATERIAL_URL,
//         data
//     }
//     post(obj).then((res)=>{
//         console.log('update REs:', res)
//         return {type:ADD_MATERIAL, payload:materialList }
//     })
    
// }
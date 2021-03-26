import { ADD_MATERIAL, ADD_MATERIAL_TYPE } from "../../constants"

export const addMaterialType = (data) =>{
    return {type:ADD_MATERIAL_TYPE, payload:data }
}

export const addMaterial = (data, materialList) =>{
    materialList[materialList.length-1] = data
    return {type:ADD_MATERIAL, payload:materialList }
}
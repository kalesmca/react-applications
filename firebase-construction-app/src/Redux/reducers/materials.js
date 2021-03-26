import { ADD_MATERIAL_TYPE, ADD_MATERIAL } from "../../constants";
const tempMaterial = { name: "", price: "", qty: "", amt: "", vadagai: "" };
const initialState = {
  materialTypes: [
    { id: 1, type: "Manal" },
    { id: 2, type: "M-sand-black" },
    { id: 3, type: "M-sand-white" },
    { id: 4, type: "Cement" },
    { id: 5, type: "Manal-mudai" },
    { id: 6, type: "Salli-kal" },
  ],
  materialList: [tempMaterial],
};

const materials = (state = initialState, action) => {
    console.log('action:', action)
    debugger
  switch (action.type) {
    case ADD_MATERIAL_TYPE:
      return {
        ...state,
        materialTypes: [...state.materialTypes, action.payload],
      };
    case ADD_MATERIAL:
      return {
        ...state, materials
        
      };
    default:
      return { ...state };
  }
};

export default materials;

import { Types } from "../types/types";

const initialState = {
    usuarios: {}
}

export const SesionReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.registro:
            return{
                 ...state.usuarios,
                 usuarios: action.payload,
                 
               }
        case Types.logout:
            return{
                ...state.usuarios,
                logged: false
            }
        default:
            return state
}
}
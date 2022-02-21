import { Types } from "../types/types";

const initialState ={
    peliculas: []
}

export const MyListReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.agregar:
            return{
                peliculas:[action.payload]
            }
        case Types.listar:
            return{
                peliculas:[...action.payload]
            }
        case Types.eliminar:
            return{
                peliculas: state.peliculas.filter(pel => pel.nom !== action.payload)
            }
        case Types.actualizar:
            return{
                peliculas:[action.payload]
            }
        default:
            return state
    }
}
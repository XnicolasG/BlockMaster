import { Types } from "../types/types";

export const RegisterAction = (Usuario, contraseña) =>{
    return{
        type: Types.registro,
        payload: {
            Usuario,
            contraseña,
            logged:true
        }
    }
}
export const LogoutAction = ()=>{
    return{
        type:Types.logout,
        payload:{
            logged:false
            
        }
        
    }
}
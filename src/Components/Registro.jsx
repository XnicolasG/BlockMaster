import React from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { RegisterAction } from '../actions/UsuariosActions';
import { useForm } from '../Hooks/useForm';
import '../Styles/Out.css'

const Registro = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formValue, handleInputChange, reset] = useForm({
      Usuario: '',
      contraseña: '',
    })
    
    const {Usuario, contraseña} = formValue

    

    const nuevoU = (Usuario, contraseña)=>{
        dispatch(RegisterAction(Usuario, contraseña))
    }

    const hanldeSubmit = (e) =>{
        e.preventDefault();
         nuevoU({
            Usuario,
            contraseña
        })
        
        reset()
        swal("Gracias por tu registro", "Bienvenido a Block Master");
        navigate ('/')
    }
  return (
    <div className='ContOut'>
        <br /><br /><br /><br />
        <form className='Formulario' onSubmit={hanldeSubmit}>
      <h2 className='Titulo'>Bienvenido a Block Master</h2>
      <h3 className='Subtitulo'>Registro</h3>
      <input className='Inputs' name='Usuario' value={Usuario} onChange={handleInputChange} type="text" placeholder='Ingresa un nombre de usuario' required/>
      <input className='Inputs' name='contraseña' value={contraseña} onChange={handleInputChange} type="password" placeholder='Crea una contraseña' required />
      <button  className='Boton'>Registrarme</button>
      </form>
      
    </div>
  
  )      
};

export default Registro;

import {React} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../Hooks/useForm';



const Login = () => {
  
  const navigate = useNavigate()

  const [formValue, handleInputChange, reset] = useForm({
    usuario: "",
    constraseña: "",
})
const {usuario, contraseña} = formValue


  const {usuarios} = useSelector((us)=>us.datosUsuarios)
  console.log(usuarios);

  const validacion = ()=>{
    if(usuario === usuarios.Usuario.Usuario && contraseña === usuarios.Usuario.contraseña){
      navigate('/')
    }
    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    validacion()
    reset()
  }

  return (
    <div className='ContOut'>
        <br /><br /><br /><br />
        <form className='Formulario' onSubmit={handleSubmit}>
      <h2 className='Titulo'>Bienvenido a Block Master</h2>
      <h3 className='Subtitulo'>Iniciar Sesion</h3>
      <input className='Inputs' name='usuario' value={usuario} onChange={handleInputChange} type="text" placeholder='Ingresa nombre de usuario'/>
      <input className='Inputs' name='contraseña' value={contraseña} onChange={handleInputChange} type="password" placeholder='Ingresa contraseña' />
      <button className='Boton'>Iniciar sesion</button>
      <p className='Parrafo' >   ¿ No tienes una cuenta ? 
          <Link className='IrRegis' to="/login/registro"> Registrate</Link>
      </p>
      </form>
      
    </div>
  
  )  ;
};

export default Login;


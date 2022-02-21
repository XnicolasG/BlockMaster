import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from '../Hooks/useForm'
import { fileUpload } from '../helpers/Upload'
import { AsyncDelete, AsyncList, AsyncListActions } from '../actions/ListActions'
import { Table, Button } from 'react-bootstrap'
import ModalList from './ModalList'

const MyList = () => {

    const dispatch = useDispatch()

   const [ formValue, handleInputChange, reset ] = useForm({
       img: '',
       nom: '',
       desc: '',
       rank: ''
   })
   let {img, nom, desc, rank} = formValue

   const handleFileChanged = e =>{
       const file = e.target.files[0];
       fileUpload(file)
        .then(resp =>{
            img = resp;
            console.log(resp);
        })
        .catch(error =>{
            console.log(error);
        })
   }

   const handleSubmit = e =>{
       e.preventDefault();
       dispatch(AsyncListActions(img, nom, desc, rank))
       reset()
   }

   const [modal, setModal] = useState(false)
   const [datosModal, setDatosModal] = useState([])

   const activarModal = (nom) =>{
    const traer = peliculas.find((get)=>(
        get.nom === nom
    ))
        setModal(true)
        setDatosModal(traer)
        console.log(datosModal)

   }

   useEffect(()=>{
       dispatch(AsyncList())
   }, [])

   const {peliculas} = useSelector(store => store.peliculasNuevas)
   


  return (
    <div className='ContList'>
        <form className='FormAdd' onSubmit={handleSubmit}>
            <h3 className='titulo text-center m-2' >Actualiza tu lista de peliculas</h3>
          
            <input className='inputs' name='nom' value={nom} onChange={handleInputChange} placeholder='Nombre de peliculas' type="text" />
            <input className='inputs' name='desc' value={desc} onChange={handleInputChange} placeholder='Sinopsis' type="text" />
            <input className='inputs' name='rank' value={rank} onChange={handleInputChange} placeholder='Calificación' type="text" />
            <input type="file" className="inputs" id="poster" name='img' value={img} onChange={handleFileChanged} />
            <button type='submit' className='btnAgregar'>Agregar</button>
        </form>

        <Table className='text-center mt-5'>
            <thead >
                <tr className='text-warning'>
                    <th>Poster</th>
                    <th>Pelicula</th>
                    <th>Sinopsis</th>
                    <th>Calificación</th>
                    
                </tr>
            </thead>
            <tbody >
                {
                peliculas ?
                (
                    peliculas.map((pelis, index)=>(
                        <tr key={index} className='text-light'>
                            <td><img src={pelis.img} alt="." width='55px' /> </td>
                            <td>{pelis.nom}</td>
                            <td>{pelis.desc}</td>
                            <td>{pelis.rank}</td>
                            <td><Button variant="danger"onClick={()=> dispatch(AsyncDelete(pelis.nom))} >Eliminar</Button></td>
                            <td><Button onClick={()=> {activarModal(pelis.nom)}} >Modificar</Button></td>
                        </tr>
                    ))
                ) 
                :
            <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1644976079/Personal/2184729_yflacs.png" alt="."></img>
            }
            </tbody>
        </Table>
        {
            modal === true ? <ModalList data={datosModal} /> : console.log('')
        }
    </div>
  )
}

export default MyList
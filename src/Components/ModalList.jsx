import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AsyncUpdate } from '../actions/ListActions'

const ModalList = (data) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)

    const closeModal = ()=> {setShow(false)}
    console.log(data.data.nom)

    const formik = useFormik({
        initialValues:{
            nom:data.data.nom,
            desc:data.data.desc,
            rank:data.data.rank,
            img:data.data.img
        },
        onSubmit:(data)=>{
            dispatch(AsyncUpdate(data.nom, data))
            
        }
    })

    useEffect(()=>{

    }, [data])

    return (
        <Modal show={show} variant='dark'>
            <Modal.Header >
                <Modal.Title>Edita tu pelicula</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                <input className='inputs' name='nom' value={formik.values.nom} onChange={formik.handleChange} placeholder='Nombre de peliculas' type="text" />
                <input className='inputs' name='desc' value={formik.values.desc} onChange={formik.handleChange} placeholder='Sinopsis' type="text" />
                <input className='inputs' name='rank' value={formik.values.rank} onChange={formik.handleChange} placeholder='Calificación' type="text" />
                {/* <input type="file" className="inputs" value={formik.values.img} onChange={formik.handleChange} id="poster" name='img' /> */}
                <Button variant="primary" type='submit' >Save changes</Button>
                <Button variant="secondary" onClick={closeModal} type='button'>Close</Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalList
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalList = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Edita tu pelicula</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input className='inputs' name='nom' placeholder='Nombre de peliculas' type="text" />
                <input className='inputs' name='desc' placeholder='Sinopsis' type="text" />
                <input className='inputs' name='rank' placeholder='Calificación' type="text" />
                <input type="file" className="inputs" id="poster" name='img' />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default ModalList
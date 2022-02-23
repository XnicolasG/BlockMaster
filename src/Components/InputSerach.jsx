import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const InputSearch = ({busqueda,handleInput }) => {
    return (
        <InputGroup className="mb-3"/*  onChange={handlechange} */>
            <FormControl
                className='bg-dark text-white '
                placeholder="Buscar por nombre de película..."
                aria-describedby="basic-addon2"
                name='busqueda'
                value={busqueda}
                onChange={handleInput}
            />
            <InputGroup.Text className='bg-warning' id="basic-addon2">🔍︎</InputGroup.Text>
        </InputGroup>
    )
}

export default InputSearch
import React, { useEffect, useState } from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'



const Peliculas = () => {

   
    const imgPath = 'https://image.tmdb.org/t/p/w1280'
    

    // ============Paginación==============
    const [pelis, setPelis] = useState([])

    const getData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setPelis(data.results)
    }

    const [page, setPage] = useState(1)
    const previousPage = () => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }

    }
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`
    const nextPage = () => {
        if (page === 32328) {
            setPage(32328)
        } else {
            setPage(page + 1)
        }
    }
    console.log(page);
    
    const Obtain = async () =>{
        const ContData = await getData()
    }
   

    // ===========Scroll por cambio de pagina ================
    const scroll = () => {
        window.scrollTo({ top: 1, behavior: 'smooth' })
    }
    // ================== Busqueda =======================
    


    useEffect(() => {
        /* getData() */
        Obtain()
        scroll()
    }, [page])
    console.log(pelis);
    return (
        <div className='Pelis'>
            <div className='ContCards'>
                <h1 className='text-center text-white tituloSeccion'>Todas las peliculas | Pag ({page})</h1>
                <InputGroup className="mb-3"/*  onChange={handlechange} */>
                    <FormControl
                        className='bg-dark text-white '
                        placeholder="Buscar por nombre de película..."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='bg-warning' id="basic-addon2">🔍︎</InputGroup.Text>
                </InputGroup>
                {
                    pelis.map(pel => (
                        <Card className='card' bg='dark' text='warning' style={{ width: '250px', margin: '.2rem' }} key={pel.id}>

                            <Card.Img src={imgPath + pel.poster_path} />
                            <Card.Title className='text-center'>{pel.title}</Card.Title>
                            <Card.Body className='sinopsis '>
                                <div className='ContRate'>
                                    <img className='rateImg' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1644810814/Personal/4442255_qpitq8.png" alt=" a" />
                                    <h5 className='Rate'>
                                        {pel.vote_average}
                                    </h5>
                                </div>
                                <p className='overview'>{pel.overview}</p>
                            </Card.Body>
                        </Card>
                    ))

                }
                <div className='pag mt-2'>
                    <Button className='m-2' onClick={() => previousPage()} > Anterior</Button>
                    <h3 className='text-center text-white'>{page - 1} ← {page} → {page + 1}</h3>
                    <Button className='m-2' onClick={() => nextPage()} >Siguiente</Button>
                </div>

            </div>
        </div>
    )
}

export default Peliculas
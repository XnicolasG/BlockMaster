import React, { useEffect, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import { getDatos } from '../helpers/getDataCar'
import InputSearch from './InputSerach'





const Peliculas = () => {

   
    const imgPath = 'https://image.tmdb.org/t/p/original'

    // ================== Busqueda =======================
    const[busq, setBusq] = useState({
        busqueda:''
    })
    const {busqueda} = busq
    // const buscadorApi = `http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${busqueda}`

    const handleInput = ({target}) =>{
        setBusq({
            ...busq,
            [target.name]: target.value
        })
    }

    // ============Paginación==============
    

    const [pelis, setPelis] = useState([])

    const [page, setPage] = useState(1)
    const previousPage = () => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }

    }
    
    // const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`
    const nextPage = () => {
        if (page === 32328) {
            setPage(32328)
        } else {
            setPage(page + 1)
        }
    }
    
    const searching = busqueda.length>0
    const Obtain = () =>{ 
        let api = ''   
        if(searching){
            api =     `https://api.themoviedb.org/3/search/movie?api_key=fa031f96936e4b36067a690a2e64116c&language=en-US&query=${busqueda}&api_key=0ca79cfff3d14page=1&include_adult=false`

        }else{
            api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`
        }
        getDatos(api, setPelis) 
    }
   

    // ===========Scroll por cambio de pagina ================
    const scroll = () => {
        window.scrollTo({ top: 1, behavior: 'smooth' })
    }
    
    useEffect(() => {
        Obtain(),

        scroll()  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
   

    useEffect(()=>{
        Obtain()
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[busqueda])
    return (
        <div className='Pelis'>
            <div className='ContCards'>
                <h1 className='text-center text-white tituloSeccion'>Todas las peliculas | Pag ({page})</h1>
                <InputSearch busqueda={busqueda} handleInput={handleInput} />
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
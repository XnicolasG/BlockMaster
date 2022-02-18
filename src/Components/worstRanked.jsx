import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const WorstRanked = () => {
    const [page, setPage] = useState(1)
    const [pelis, setPelis] = useState([])
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`
    const imgPath = 'https://image.tmdb.org/t/p/w1280'

    const getData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setPelis(data.results)
    }
    const previousPage = () => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }

    }
    const nextPage = () => {
        if (page === 32328) {
            setPage(32328)
        } else {
            setPage(page + 1)
        }
    }
    const scroll = ()=>{
        window.scrollTo({top:1, behavior:'smooth'})
    }
    useEffect(() => {
        getData()
        scroll()
    }, [page])
    return (
        <div className='Pelis'>
            <div className='ContCards'>
                <h1 className='text-center text-white tituloSeccion'>Menos valoradas | Pag ({page})</h1>

                {
                    pelis.filter(rank => rank.vote_average <= 6.4).sort().map(pel => (
                        <Card className='card' bg='dark' text='warning' style={{ width: '250px', margin: '.2rem' }} key={pel.id}>

                            <Card.Img src={imgPath + pel.poster_path} />
                            <Card.Title className='text-center'>{pel.title} </Card.Title>
                            <Card.Body className='sinopsis '>
                                <div className='ContRate'>
                                    <img className='rateImg' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1644810814/Personal/4442255_qpitq8.png" alt=" a" />
                                    <h5 className='Rate'>
                                        {pel.vote_average}
                                        <span className='votos'> votos:{pel.vote_count}</span>
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

export default WorstRanked
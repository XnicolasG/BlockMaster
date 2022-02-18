import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import { Button, Carousel, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const url = 'https://bd-vinos.herokuapp.com/Peliculas'

const Home = () => {

    const { usuarios } = useSelector((us) => us.datosUsuarios)
    console.log(usuarios.logged);

    const [movies, setMovies] = useState([])

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const getDataCar = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setMovies(data)
    }
    useEffect(() => {
        getDataCar()
    }, [])



    return (

        <div className='ContIn'>
            <br /><br /><br />
            
            <Carousel fade className='carous'>
                {
                    movies.map(movie => (
                        <Carousel.Item key={movie.id} className=''>
                            <center>
                            <iframe SameSite='Lax'  width='650' height='280' src='https://www.youtube.com/embed/RLGOLdL0IZ0?start=7' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>                               
                            </center>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
            
            
            
        </div>
    );
};

export default Home;

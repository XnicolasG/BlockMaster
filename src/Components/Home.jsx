import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const url = 'https://bd-vinos.herokuapp.com/Peliculas'

const Home = () => {

    const { usuarios } = useSelector((us) => us.datosUsuarios)
    console.log(usuarios.logged);

    const [movies, setMovies] = useState([])



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
                            <iframe width='650' height='280' src={movie.trailer} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' ></iframe>                               
                            </center>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
            
            
            
        </div>
    );
};

export default Home;

import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import BestRanked from '../Components/bestRanked'
import Home from '../Components/Home'
import MyList from '../Components/MyList'
import NavBarA from '../Components/NavBarA'
import Peliculas from '../Components/Peliculas'
import WorstRanked from '../Components/worstRanked'

const LoginRoutes = () => {

    const [busq, setBusq] = useState('')
  return (
    <>
    <NavBarA busq={busq} setBusq={setBusq} />
    <Home />
    <Routes>
        <Route path="/" element={<Peliculas />} />
        <Route path="/home" element={<Peliculas />} />
        <Route path="/mas" element={<BestRanked />} />
        <Route path="/menos" element={<WorstRanked />} />
        <Route path="/lista" element={<MyList />} />
    </Routes>
    </>
  )
}

export default LoginRoutes
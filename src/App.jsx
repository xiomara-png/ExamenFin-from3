import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Home  from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ContextGlobal } from './Components/utils/global.context'

function App() {
  const { contexto, setContexto } = useContext(ContextGlobal);

  const getThemeStorage = () =>{
    return JSON.parse(localStorage.getItem('theme')) ?? {themeStorage: contexto.theme};
  }

  useEffect(() => {
    setContexto({theme: getThemeStorage().themeStorage});
  }, []);

  return (
    <>
      <div className={contexto.theme}>
      <header>
        <h2>DH Odontologo</h2>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dentist/:id' element={<Detail/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/favs' element={<Favs/>} />
        <Route path='*' element={<h1>Papi, estas perdido</h1>} />
      </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App

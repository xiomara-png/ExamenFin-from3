import React, { useContext } from 'react' 
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { contexto, setContexto } = useContext(ContextGlobal);

  const changeTheme = ()=>{
    const currentTheme = getThemeStorage();
    //Ternario para comprobar si el id ya existe en el array de favoritos, si ya existe, deja el mismo
    //array, pero si no existe, crea un nuevo array a través de los opradores spread 
    
    console.log('Current->', currentTheme.themeStorage);
    const newTheme = {themeStorage: currentTheme.themeStorage === 'light'? 'dark': 'light'};
      
    console.log('Nuevo->',newTheme.themeStorage);

    setContexto({theme: newTheme.themeStorage});

    localStorage.setItem("theme", JSON.stringify(newTheme));
  }

  const getThemeStorage = () =>{
    return JSON.parse(localStorage.getItem('theme')) ?? {themeStorage: contexto.theme};
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <b><Link to={'/'}>Home</Link></b>
      <b><Link to={'/contacto'}>Contacto</Link></b>
      <b><Link to={'/favs'}>Favoritos</Link></b>
      <button onClick={changeTheme}>
        <img src={contexto.theme ==='light' ? '/src/assets/moon-icon.png' : '/src/assets/sun-icon.png'}/>
      </button>
    </nav>
  )
}

export default Navbar
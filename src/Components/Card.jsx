import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";


const Card = ({ id, name, username, email, telefono, website }) => {
  const [cardEnFavoritos, setCardEnFavoritos] = useState(false);

  //Una vez se renderiza por primera vez el componente se valida si está en favoritos para marcarlo
  useEffect(() => {
    const itemsFavoritos = getFavs();
    itemsFavoritos.favoritos.some((element)=>
      element.id === id)
      ? setCardEnFavoritos(true):setCardEnFavoritos(false);
  }, []);

  const addFav = ()=>{
    setCardEnFavoritos(true);
    const itemsFavoritos = getFavs();
    //Ternario para comprobar si el id ya existe en el array de favoritos, si ya existe, deja el mismo
    //array, pero si no existe, crea un nuevo array a través de los opradores spread 
    const nuevoItemsFavoritos = 
      itemsFavoritos.favoritos.some((element) => 
        element.id === id) 
        ? itemsFavoritos
        :{...itemsFavoritos, favoritos: [...itemsFavoritos.favoritos, {id, name, username, email, telefono, website}]};
    
    localStorage.setItem("favs", JSON.stringify(nuevoItemsFavoritos));
  }

  const removeFav = ()=>{
    setCardEnFavoritos(false);
    const itemsFavoritos = getFavs();
    //Ternario para comprobar si el id ya existe en el array de favoritos, si ya existe, deja el mismo
    //array, pero si no existe, crea un nuevo array a través de los opradores spread 
    const nuevoItemsFavoritos = 
        {...itemsFavoritos, favoritos: itemsFavoritos.favoritos.filter((element) =>
          element.id !== id
        )
        };
    
    localStorage.setItem("favs", JSON.stringify(nuevoItemsFavoritos));
  }

  const getFavs = () =>{
    return JSON.parse(localStorage.getItem('favs')) ?? {favoritos: []};
  }

  return (
    <div className="card">
      <img src='/src/assets/images/doctor.jpg'/>
      <br/>
      <b><Link to={'/dentist/' + id}>{name}</Link></b>
      <br/>
      <span>{username}</span>
      <br/>
      <div style={{margin: 10}}><b>Id:</b><span>{id}</span></div>
      <button onClick={cardEnFavoritos? removeFav: addFav} className="favButton">
        <img src={cardEnFavoritos? '/src/assets/fav-icon.png' : '/src/assets/no-fav-icon.png'}/>
      </button>
    </div>
  );
};

export default Card;

import React from "react"; 
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const getFavs = () =>{
    return JSON.parse(localStorage.getItem('favs')) ?? {favoritos: []};
  }

  const favs = getFavs();

  return (
    <>
      <h1>Odontologos Favoritos</h1>
      <div className="card-grid">
        {favs.favoritos?.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} username={item.username} email={item.email} telefono={item.telefono} website={item.website} />
        ))}
      </div>
    </>
  );
};

export default Favs;

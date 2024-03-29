import React from 'react' 
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import { useFetchEffect } from '../Components/utils/useFetchEffect'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  const {data, error} = useFetchEffect(url);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detalle odontologo {id}</h1>
      {data?
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
            </tr>
          </tbody>
        </table>
        :<span>Sin detalle</span>
      }
    </>
  )
}

export default Detail
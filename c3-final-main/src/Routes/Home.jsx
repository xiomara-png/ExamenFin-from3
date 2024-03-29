import React, { useContext } from 'react' 
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { useFetchEffect } from '../Components/utils/useFetchEffect'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data} = useFetchEffect('https://jsonplaceholder.typicode.com/users');
  const { contexto } = useContext(ContextGlobal);
  return (
    <main  >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} username={item.username} email={item.email} telefono={item.telefono} website={item.website}/>
        ))}
      </div>
    </main>
  )
}
///*<Card key={item.id} name={item.name} username={item.username} id={item.id} /> */

export default Home
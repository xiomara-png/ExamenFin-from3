import React from 'react' 
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>¿Quiere conocer mas?</h2>
      <p style={{textAlign: 'center'}}>Envíenos sus preguntas y prónto lo contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact
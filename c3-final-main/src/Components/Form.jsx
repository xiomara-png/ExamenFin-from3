import React, { useState } from "react"; 
import { InputTexto } from "./InputTexto";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [nombreEnMensaje, setNombreEnMensaje] = useState("");
  const [correo, setCorreo] = useState("");
  const [formOk, setFormOk] = useState(false);
  const [nombreOk, setNombreOk] = useState(false);
  const [correoOk, setCorreoOk] = useState(false);
  const [formValidado, setFormValidado] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
  
    let expRegularCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validaNombre = false;
    let validaCorreo = false;

    if (nombre.length > 5){
      validaNombre = true;
    }

    if (expRegularCorreo.test(correo)){
      validaCorreo = true;
    }

    if (validaNombre && validaCorreo){
      setNombreEnMensaje(nombre);
      setFormOk(true);
      setNombreOk(true);
      setCorreoOk(true);
    }else{
      setFormOk(false);
      setNombreOk(validaNombre ? true:false);
      setCorreoOk(validaCorreo ? true: false); 
    }

    setFormValidado(true);
  }  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputTexto idInput="form-input-nombre" nameInput="nombre" placeHolderInput="Ingresa tu nombre" setInput={setNombre}/>
        {(!nombreOk && formValidado)  &&<span style={{textAlign: 'center' , color: 'red'}}>Longitud de nombre debe ser mayor a 5</span>}
        <InputTexto idInput="form-input-correo" nameInput="correo" placeHolderInput="Ingresa tu correo" setInput={setCorreo}/>
        {(!correoOk && formValidado) &&<span style={{textAlign: 'center' , color: 'red'}}>Estructura de correo inválida</span>}
        <button type='submit' name="envio-formulario">Enviar</button>
      </form>
      
      {formOk?
        <p style={{textAlign: 'center'}}>Gracias {nombreEnMensaje}, te contactaremos cuanto antes vía mail</p>
        :<p style={{textAlign: 'center' , color: 'red'}}>{formValidado?'Por favor verífica tu información nuevamente': ''}</p>
       }
      
    </div>
  );
};

export default Form;
